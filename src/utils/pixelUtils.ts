export interface PixelData {
  data: Uint8ClampedArray;
  width: number;
  height: number;
}

export async function loadImageData(imgSrc: string): Promise<PixelData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imgSrc;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Could not get 2D context");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);
      resolve({ data, width, height });
    };

    img.onerror = () => reject(`Failed to load image: ${imgSrc}`);
  });
}

/**
 * Convert image pixel data into ASCII characters
 */
export function imageToAscii(
  pixelData: PixelData,
  numRows: number,
  numCols: number,
  charDensity =  '.░▒▓██',
  colorThresh = 125.5
): { chars: string[], colors: any[] } {
  const { data, width, height } = pixelData;
  const getPixel = (x: number, y: number) => {
    const i = (y * width + x) * 4;
    return {
      r: data[i],
      g: data[i + 1],
      b: data[i + 2],
      a: data[i + 3],
    };
  };

  const rowStep = Math.floor(height / numRows);
  const colStep = Math.floor(width / numCols);
  const chars: string[] = [];
  const colors: any[] = []; // black, blue, green, cyan, red, magenta, yellow, white

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      let totalR = 0, totalG = 0, totalB = 0, count = 0;

      for (let y = r * rowStep; y < (r + 1) * rowStep; y++) {
        for (let x = c * colStep; x < (c + 1) * colStep; x++) {
          const p = getPixel(x, y);
          totalR += p.r;
          totalG += p.g;
          totalB += p.b;
          count++;
        }
      }

      const avgR = totalR / count;
      const avgG = totalG / count;
      const avgB = totalB / count;

      const palR = avgR < colorThresh ? 0 : 255;
      const palG = avgG < colorThresh ? 0 : 255;
      const palB = avgB < colorThresh ? 0 : 255;
      colors.push({ palR, palG, palB});

      const brightness = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;

      const charIndex = Math.floor(
        (brightness / 255) * (charDensity.length - 1)
      );
      chars.push(charDensity[charIndex]);
    }
  }

  return {chars, colors};
}
