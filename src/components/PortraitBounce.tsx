import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { loadImageData, imageToAscii } from '../utils/pixelUtils';
import styles from './PortraitBounce.module.css';

type ProcessedImage = {
  chars: string[];
  colors: { r: number, g: number, b: number }[];
};

interface BallState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function PortraitBounce({ srcs }: { srcs: string[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<HTMLDivElement[]>([]);

  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);

  const [images, setImages] = useState<ProcessedImage[]>([]);
  const imageIndex = useRef<number>(0);
  const seenCells = useRef<Set<number>>(new Set());

  const sweepIndex = useRef<number>(0);
  const sweepRate = 4; 

  const balls = useRef<BallState[]>([]);

  const progressRef = useRef<HTMLDivElement>(null);

  /// update a ball's state /// 
  const updateBallState = (ball: BallState): BallState => {
    let { x, y, vx, vy } = ball;

    const xOut = (x <= 0 || x >= numCols - 1);
    const yOut = (y <= 0 || y >= numRows - 1);
    const seed3 = Math.round(Math.random() * 2);

    if (xOut && yOut) {
      vx *= -1;
      vy *= -1;
    } else if (xOut) {
      vx *= -1;
      switch (seed3) {
        case 1:
          vy = 1;
          break;
        case 2:
          vy = -1;
          break;
        default:
          vy = 0;
          break;
      }
    } else if (yOut) {
      vy *= -1;
      switch (seed3) {
        case 1:
          vx = 1;
          break;
        case 2:
          vx = -1;
          break;
        default:
          vx = 0;
          break;
      }
    }

    return {
      x: x + vx,
      y: y + vy,
      vx: vx,
      vy: vy
    };
  }

  //--- CONSTRUCT GRID ---///
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const fontSizeStr = getComputedStyle(grid).getPropertyValue('--font-height').trim();
    const fontSize = parseInt(fontSizeStr);

    const cellWidth = fontSize / 2;
    const cellHeight = fontSize;

    const cols = grid.clientWidth / cellWidth;
    const rows = grid.clientHeight / cellHeight;

    setNumCols(cols);
    setNumRows(rows);

    grid.style.gridTemplateColumns = `repeat(${cols}, ${cellWidth}px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, ${cellHeight}px)`;

    /// set initial ball positions /// 
    balls.current = [
      {
        x: 1,
        y: 1,
        vx: 1,
        vy: 1
      },
      {
        x: cols - 2,
        y: rows - 2,
        vx: -1,
        vy: -1
      },
      {
        x: Math.floor(cols / 2),
        y: Math.floor(rows / 2),
        vx: 1,
        vy: 0
      }
    ];

  }, []);

  //--- LOAD IMAGES ---//
  useEffect(() => {
    if (!srcs || !numCols || !numRows) return;

    const loadImages = async () => {
      const loaded: ProcessedImage[] = [];
      for (const src of srcs) {
        try {
          const pixelData = await loadImageData(src);
          const res: ProcessedImage = imageToAscii(pixelData, numRows, numCols);
          loaded.push(res);
        } catch (err) {
          console.error(err);
        }
      }
      setImages(loaded);
    }

    loadImages();
  }, [srcs, numCols, numRows]);

  //--- UPDATE IMAGE AND BALL(S) ---// 
  useEffect(() => {
    if (!numRows || !numCols || images.length === 0 || !progressRef.current) return;

    const interval = setInterval(() => {
      const seen = seenCells.current;
      const nextImageIndex = (imageIndex.current + 1) % images.length;
      const updatedBalls: BallState[] = [];

      for (const ball of balls.current) {
        /// update cell ///
        const cellIndex = ball.y * numCols + ball.x;
        const newCell = cellRefs.current[cellIndex];

        if (!seen.has(cellIndex)) {
          // update character 
          newCell.innerHTML = images[nextImageIndex].chars[cellIndex];
          // update color 
          const newColor = images[nextImageIndex].colors[cellIndex];
          newCell.style.color = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
          // add cell to seen set
          seen.add(cellIndex);
        } else {
          // flip color 
          const style = getComputedStyle(newCell);
          const currentColor = style.color.match(/\d+/g);
          if (currentColor) {
            const [r, g, b] = currentColor.map(Number);
            const newR = r === 255 ? 0 : 255;
            const newG = g === 255 ? 0 : 255;
            const newB = b === 255 ? 0 : 255;
            newCell.style.color = `rgb(${newR}, ${newG}, ${newB})`;
          }
        }

        /// update ball state ///
        updatedBalls.push(updateBallState(ball));
      }

      /// update sweep /// 

      const seed = Math.round(Math.random() * sweepRate);
      if (seed === sweepRate) {
        for (let r = 0; r < numRows; r++) {
          const i = r * numCols + sweepIndex.current;
          const cell = cellRefs.current[i];
          cell.innerHTML = images[nextImageIndex].chars[i];
          const newColor = images[nextImageIndex].colors[i];
          cell.style.color = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
          seen.add(i);
        }
        sweepIndex.current = (sweepIndex.current + 1) % numCols;
      }

      /// update balls ref /// 
      balls.current = updatedBalls;

      /// update progress bar ///
      progressRef.current!.innerHTML = ` ${((seen.size / (numRows * numCols)) * 100).toFixed(2)}%`;

      // update image index and clear seen set
      if (seen.size === numRows * numCols) {
        imageIndex.current = nextImageIndex;
        seen.clear();
      }

    }, 50);

    return () => clearInterval(interval);
  }, [numCols, numRows, images]);

  console.log("Render!");

  return (
    <div className={styles.main}>
      <div ref={gridRef} className={styles['ascii-grid']}>
        {images.length === 0 &&
          <div className={styles['loading']}>loading...</div>
        }
        {images[0]?.chars.map((c, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cellRefs.current[i] = el;
            }}
            className={styles['ascii-cell']}
            style={{
              color: `rgb(${images[0].colors[i].r ?? 255}, ${images[0].colors[i].g ?? 255}, ${images[0].colors[i].b ?? 255})`,
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <div ref={progressRef} className={styles['progress-bar']}/>
    </div>
  );
}