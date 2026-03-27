"use client";

import { useRef, useEffect, useState } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}.webp`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImages(loadedImages);
                drawFrame(Math.max(0, frameIndex.get()), loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const drawFrame = (index: number, imgArray: HTMLImageElement[]) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Safety clamp
    const safeIndex = Math.min(Math.max(Math.floor(index), 0), imgArray.length - 1);
    const img = imgArray[safeIndex];
    if (!img) return;
    
    const canvasObj = { w: canvas.width, h: canvas.height };
    const imgObj = { w: img.width, h: img.height };
    
    const scale = Math.max(canvasObj.w / imgObj.w, canvasObj.h / imgObj.h);
    const x = (canvasObj.w / 2) - (imgObj.w / 2) * scale;
    const y = (canvasObj.h / 2) - (imgObj.h / 2) * scale;
    
    // Create subtle dark overlay if needed or rely on DOM element
    ctx.clearRect(0, 0, canvasObj.w, canvasObj.h);
    ctx.drawImage(img, x, y, imgObj.w * scale, imgObj.h * scale);
  };
  
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (images.length > 0) {
        drawFrame(frameIndex.get(), images);
      }
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(latest, images);
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </>
  );
}
