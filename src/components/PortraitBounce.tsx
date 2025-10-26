import { useEffect, useState, useRef } from 'react';
import { loadImageData, imageToAscii } from '../utils/pixelUtils';
import styles from './PortraitBounce.module.css';

export default function PortraitBounce({ imgSrc }: { imgSrc: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<HTMLDivElement[]>([]); // store refs to each cell
  const [chars, setChars] = useState<string[]>([]);
  const [colors, setColors] = useState<{ palR: number; palG: number; palB: number }[]>([]);
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);


  //--- CONSTRUCT GRID ---///
  useEffect(() => {
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
  }, []);

  // --- LOAD IMAGE & BUILD GRID --- //
  useEffect(() => {
    if (!imgSrc || !numCols || !numRows) return;

    (async () => {
      try {
        const pixelData = await loadImageData(imgSrc);
        const { chars, colors } = imageToAscii(pixelData, numRows, numCols);
        setChars(chars);
        setColors(colors);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [imgSrc, numCols, numRows]);


  const [ball, setBall] = useState({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });

  const [ballB, setBallB] = useState({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });

  const [ballC, setBallC] = useState({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });

  useEffect(() => {
    setBall({
      x: 1,
      y: 1,
      vx: 1,
      vy: 1
    });

    setBallB({
      x: numCols / 2,
      y: numRows / 2,
      vx: -1,
      vy: -1
    });

    setBallC({
      x: numCols / 2,
      y: numRows / 2,
      vx: 1,
      vy: 1
    });
  }, [numRows, numCols]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBall((prev) => {
        let { x, y, vx, vy } = prev;

        if (x <= 0 || x >= numCols - 1) vx = -vx;
        if (y <= 0 || y >= numRows - 1) vy = -vy;

        return { x: x + vx, y: y + vy, vx, vy };
      });

      // setBallB((prev) => {
      //   let { x, y, vx, vy } = prev;

      //   if (x <= 0 || x >= numCols - 1) vx = -vx;
      //   if (y <= 0 || y >= numRows - 1) vy = -vy;

      //   return { x: x + vx, y: y + vy, vx, vy };
      // });
      setBallB((prev) => {
        let { x, y, vx, vy } = prev;

        if (x <= 0 || x >= numCols - 1) {
          vx = -vx;
          const seed = Math.round(Math.random() * 2);
          switch (seed) {
            case 0:
              vy = 0;
              break;
            case 1:
              vy = 1;
              break;
            case 2:
              vy = -1;
              break;
          }
        }

        if (y <= 0 || y >= numRows - 1) {
          vy = -vy;
          const seed = Math.round(Math.random() * 2);
          switch (seed) {
            case 0:
              vx = 0;
              break;
            case 1:
              vx = 1;
              break;
            case 2:
              vx = -1;
              break;
          }
        }

        return { x: x + vx, y: y + vy, vx, vy };
      });

      setBallC((prev) => {
        let { x, y, vx, vy } = prev;

        if (x <= 0 || x >= numCols - 1) {
          vx = -vx;
          const seed = Math.round(Math.random() * 2);
          switch (seed) {
            case 0:
              vy = 0;
              break;
            case 1:
              vy = 1;
              break;
            case 2:
              vy = -1;
              break;
          }
        }

        if (y <= 0 || y >= numRows - 1) {
          vy = -vy;
          const seed = Math.round(Math.random() * 2);
          switch (seed) {
            case 0:
              vx = 0;
              break;
            case 1:
              vx = 1;
              break;
            case 2:
              vx = -1;
              break;
          }
        }

        return { x: x + vx, y: y + vy, vx, vy };
      });
    }, 25);

    return () => clearInterval(interval);
  }, [numCols, numRows]);

  // --- UPDATE COLOR ON MOVE --- //
  const previousIndex = useRef<number | null>(null);

  useEffect(() => {
    if (!numCols || !colors.length || !gridRef.current) return;

    const index = ball.y * numCols + ball.x;
    const indexB = ballB.y * numCols + ballB.x;
    const indexC = ballC.y * numCols + ballC.x;
    // const prevIndex = previousIndex.current;

    // If we’ve moved, invert the color at the new cell
    const newCell = cellRefs.current[index];
    if (newCell) {
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

    const newCellB = cellRefs.current[indexB];
    if (newCellB) {
      const style = getComputedStyle(newCellB);
      const currentColor = style.color.match(/\d+/g);
      if (currentColor) {
        const [r, g, b] = currentColor.map(Number);
        const newR = r === 255 ? 0 : 255;
        const newG = g === 255 ? 0 : 255;
        const newB = b === 255 ? 0 : 255;
        newCellB.style.color = `rgb(${newR}, ${newG}, ${newB})`;
      }
    }

    const newCellC = cellRefs.current[indexC];
    if (newCellC) {
      const style = getComputedStyle(newCellC);
      const currentColor = style.color.match(/\d+/g);
      if (currentColor) {
        const [r, g, b] = currentColor.map(Number);
        const newR = r === 255 ? 0 : 255;
        const newG = g === 255 ? 0 : 255;
        const newB = b === 255 ? 0 : 255;
        newCellC.style.color = `rgb(${newR}, ${newG}, ${newB})`;
      }
    }

    // Optional: revert or modify the previous cell if needed
    // e.g. if you want a trail effect or revert to original color
    // if (prevIndex !== null) {
    //   const prevCell = cellRefs.current[prevIndex];
    //   if (prevCell) {
    //     const origColor = colors[prevIndex];
    //     prevCell.style.color = `rgb(${origColor.r}, ${origColor.g}, ${origColor.b})`;
    //   }
    // }

    previousIndex.current = index;
  }, [ball, ballB, ballC, numCols, colors]);

  console.log(ballB);

  return (
    <div className={styles.main}>
      <div ref={gridRef} className={styles['ascii-grid']}>
        {chars.map((c, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cellRefs.current[i] = el;
            }}
            className={styles['ascii-cell']}
            style={{
              color: `rgb(${colors[i].palR ?? 255}, ${colors[i].palG ?? 255}, ${colors[i].palB ?? 255})`,
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}