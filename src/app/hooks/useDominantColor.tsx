import { useEffect, useRef, useState } from 'react';

const useDominantColor = (imageUrl: string) => {
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = 'anonymous'; // Set CORS attribute
    image.src = imageUrl;

    image.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext('2d');
      if (!context) return;

      context.drawImage(image, 0, 0, image.width, image.height);

      const imageData = context.getImageData(0, 0, image.width, image.height).data;
      const colorCounts: Record<string, number> = {};

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];

        const color = `rgb(${r},${g},${b})`;
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      }

      let maxCount = 0;
      let dominantColor = '';

      for (const color in colorCounts) {
        if (colorCounts[color] > maxCount) {
          maxCount = colorCounts[color];
          dominantColor = color;
        }
      }

      setDominantColor(dominantColor);
    };
  }, [imageUrl]);

  return { dominantColor, canvasRef };
};

export default useDominantColor;
