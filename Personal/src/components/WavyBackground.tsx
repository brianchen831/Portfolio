import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.3,
  ...props
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number;
  let ctx: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const getSpeed = (): number => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = (): void => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext("2d")!;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? ["#38bdf8",
  "#818cf8",
  "#c084fc",
  "#e879f9",
  "#22d3ee"];
  
  const drawWave = (n: number): void => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = (): void => {
    ctx.fillStyle = backgroundFill || "#0B0B0B";
    ctx.globalAlpha = waveOpacity || 1;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div>
      <canvas className={`absolute inset-0 z-0 ${className}`} ref={canvasRef} id="canvas"></canvas>
      <div className="relative z-5" {...props}>
        {children}
      </div>
    </div>
  );
};
