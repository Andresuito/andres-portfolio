import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

export default function FluidSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const getDimensions = () => {
      const rect = container.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };

    let { width, height } = getDimensions();
    canvas.width = width;
    canvas.height = height;

    const RESOLUTION = 64;
    const DIFFUSION = 0.0001;
    const VISCOSITY = 0.0001;
    const TIME_STEP = 0.1;
    const ITERATIONS = 20;
    const FADE_RATE = 0.99;
    const MOUSE_VELOCITY_MULT = 0.03;
    const DENSITY_AMOUNT = 5;
    const NEIGHBOR_DENSITY = 2.5;

    const cellSize = Math.max(width, height) / RESOLUTION;
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    const vx = Array(cols * rows).fill(0);
    const vy = Array(cols * rows).fill(0);
    const vx0 = Array(cols * rows).fill(0);
    const vy0 = Array(cols * rows).fill(0);
    const density = Array(cols * rows).fill(0);
    const density0 = Array(cols * rows).fill(0);

    const getCanvasOffset = () => {
      const rect = canvas.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    };

    let canvasOffset = getCanvasOffset();
    let mouseX = width / 2;
    let mouseY = height / 2;
    let pmouseX = width / 2;
    let pmouseY = height / 2;

    const getBackgroundColor = () => {
      switch (theme) {
        case "dark":
          return "#111111";
        case "bucket":
          return "#620000";
        case "light":
        default:
          return "#ffffff";
      }
    };

    const getFluidColors = () => {
      switch (theme) {
        case "dark":
          return { hueBase: 200, hueRange: 60 };
        case "bucket":
          return { hueBase: 0, hueRange: 30 };
        case "light":
        default:
          return { hueBase: 180, hueRange: 50 };
      }
    };

    const IX = (x: number, y: number) => {
      x = Math.max(0, Math.min(cols - 1, x));
      y = Math.max(0, Math.min(rows - 1, y));
      return x + y * cols;
    };

    const setBounds = (b: number, x: number[]) => {
      for (let i = 1; i < cols - 1; i++) {
        x[IX(i, 0)] = b === 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
        x[IX(i, rows - 1)] = b === 2 ? -x[IX(i, rows - 2)] : x[IX(i, rows - 2)];
      }
      for (let j = 1; j < rows - 1; j++) {
        x[IX(0, j)] = b === 1 ? -x[IX(1, j)] : x[IX(1, j)];
        x[IX(cols - 1, j)] = b === 1 ? -x[IX(cols - 2, j)] : x[IX(cols - 2, j)];
      }

      x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
      x[IX(0, rows - 1)] = 0.5 * (x[IX(1, rows - 1)] + x[IX(0, rows - 2)]);
      x[IX(cols - 1, 0)] = 0.5 * (x[IX(cols - 2, 0)] + x[IX(cols - 1, 1)]);
      x[IX(cols - 1, rows - 1)] = 0.5 * (x[IX(cols - 2, rows - 1)] + x[IX(cols - 1, rows - 2)]);
    };

    const diffuse = (b: number, x: number[], x0: number[], diff: number, dt: number) => {
      const a = dt * diff * (cols - 2) * (rows - 2);
      for (let k = 0; k < ITERATIONS; k++) {
        for (let j = 1; j < rows - 1; j++) {
          for (let i = 1; i < cols - 1; i++) {
            x[IX(i, j)] =
              (x0[IX(i, j)] +
                a * (x[IX(i + 1, j)] + x[IX(i - 1, j)] + x[IX(i, j + 1)] + x[IX(i, j - 1)])) /
              (1 + 4 * a);
          }
        }
        setBounds(b, x);
      }
    };

    const project = (velocX: number[], velocY: number[], p: number[], div: number[]) => {
      for (let j = 1; j < rows - 1; j++) {
        for (let i = 1; i < cols - 1; i++) {
          div[IX(i, j)] =
            (-0.5 *
              (velocX[IX(i + 1, j)] -
                velocX[IX(i - 1, j)] +
                velocY[IX(i, j + 1)] -
                velocY[IX(i, j - 1)])) /
            cols;
          p[IX(i, j)] = 0;
        }
      }
      setBounds(0, div);
      setBounds(0, p);

      for (let k = 0; k < ITERATIONS; k++) {
        for (let j = 1; j < rows - 1; j++) {
          for (let i = 1; i < cols - 1; i++) {
            p[IX(i, j)] =
              (div[IX(i, j)] +
                p[IX(i + 1, j)] +
                p[IX(i - 1, j)] +
                p[IX(i, j + 1)] +
                p[IX(i, j - 1)]) /
              4;
          }
        }
        setBounds(0, p);
      }

      for (let j = 1; j < rows - 1; j++) {
        for (let i = 1; i < cols - 1; i++) {
          velocX[IX(i, j)] -= 0.5 * (p[IX(i + 1, j)] - p[IX(i - 1, j)]) * cols;
          velocY[IX(i, j)] -= 0.5 * (p[IX(i, j + 1)] - p[IX(i, j - 1)]) * rows;
        }
      }
      setBounds(1, velocX);
      setBounds(2, velocY);
    };

    const advect = (
      b: number,
      d: number[],
      d0: number[],
      velocX: number[],
      velocY: number[],
      dt: number,
    ) => {
      const dtx = dt * (cols - 2);
      const dty = dt * (rows - 2);

      for (let j = 1; j < rows - 1; j++) {
        for (let i = 1; i < cols - 1; i++) {
          let x = i - dtx * velocX[IX(i, j)];
          let y = j - dty * velocY[IX(i, j)];

          x = Math.max(0.5, Math.min(cols - 1.5, x));
          y = Math.max(0.5, Math.min(rows - 1.5, y));

          const i0 = Math.floor(x);
          const i1 = i0 + 1;
          const j0 = Math.floor(y);
          const j1 = j0 + 1;

          const s1 = x - i0;
          const s0 = 1 - s1;
          const t1 = y - j0;
          const t0 = 1 - t1;

          d[IX(i, j)] =
            s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) +
            s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
        }
      }
      setBounds(b, d);
    };

    const step = () => {
      diffuse(1, vx0, vx, VISCOSITY, TIME_STEP);
      diffuse(2, vy0, vy, VISCOSITY, TIME_STEP);
      project(vx0, vy0, vx, vy);

      advect(1, vx, vx0, vx0, vy0, TIME_STEP);
      advect(2, vy, vy0, vx0, vy0, TIME_STEP);
      project(vx, vy, vx0, vy0);

      diffuse(0, density0, density, DIFFUSION, TIME_STEP);
      advect(0, density, density0, vx, vy, TIME_STEP);

      for (let i = 0; i < density.length; i++) {
        density[i] *= FADE_RATE;
      }
    };

    const addDensity = (x: number, y: number, amount: number) => {
      density[IX(x, y)] += amount;
    };

    const addVelocity = (x: number, y: number, amountX: number, amountY: number) => {
      const index = IX(x, y);
      vx[index] += amountX;
      vy[index] += amountY;
    };

    const render = () => {
      const bgColor = getBackgroundColor();
      const fluidColors = getFluidColors();

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const d = density[IX(i, j)];
          if (d > 0.01) {
            const x = i * cellSize;
            const y = j * cellSize;

            const vxVal = vx[IX(i, j)];
            const vyVal = vy[IX(i, j)];
            const speed = Math.sqrt(vxVal * vxVal + vyVal * vyVal);

            const hue = fluidColors.hueBase + speed * fluidColors.hueRange;
            const saturation = Math.min(100, 60 + speed * 40);
            const lightness = Math.min(70, 30 + d * 40);

            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.min(1, d * 0.8)})`;
            ctx.fillRect(x, y, cellSize + 1, cellSize + 1);
          }
        }
      }
    };

    const animate = () => {
      step();
      render();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      canvasOffset = getCanvasOffset();
      pmouseX = mouseX;
      pmouseY = mouseY;
      mouseX = e.clientX - canvasOffset.left;
      mouseY = e.clientY - canvasOffset.top;

      const i = Math.floor(mouseX / cellSize);
      const j = Math.floor(mouseY / cellSize);

      if (i >= 0 && i < cols && j >= 0 && j < rows) {
        const amountX = (mouseX - pmouseX) * MOUSE_VELOCITY_MULT;
        const amountY = (mouseY - pmouseY) * MOUSE_VELOCITY_MULT;

        addVelocity(i, j, amountX, amountY);
        addDensity(i, j, DENSITY_AMOUNT);

        if (i > 0) {
          addVelocity(i - 1, j, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i - 1, j, NEIGHBOR_DENSITY);
        }
        if (i < cols - 1) {
          addVelocity(i + 1, j, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i + 1, j, NEIGHBOR_DENSITY);
        }
        if (j > 0) {
          addVelocity(i, j - 1, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i, j - 1, NEIGHBOR_DENSITY);
        }
        if (j < rows - 1) {
          addVelocity(i, j + 1, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i, j + 1, NEIGHBOR_DENSITY);
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      canvasOffset = getCanvasOffset();
      const touch = e.touches[0];
      pmouseX = mouseX;
      pmouseY = mouseY;
      mouseX = touch.clientX - canvasOffset.left;
      mouseY = touch.clientY - canvasOffset.top;

      const i = Math.floor(mouseX / cellSize);
      const j = Math.floor(mouseY / cellSize);

      if (i >= 0 && i < cols && j >= 0 && j < rows) {
        const amountX = (mouseX - pmouseX) * MOUSE_VELOCITY_MULT;
        const amountY = (mouseY - pmouseY) * MOUSE_VELOCITY_MULT;

        addVelocity(i, j, amountX, amountY);
        addDensity(i, j, DENSITY_AMOUNT);

        if (i > 0) {
          addVelocity(i - 1, j, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i - 1, j, NEIGHBOR_DENSITY);
        }
        if (i < cols - 1) {
          addVelocity(i + 1, j, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i + 1, j, NEIGHBOR_DENSITY);
        }
        if (j > 0) {
          addVelocity(i, j - 1, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i, j - 1, NEIGHBOR_DENSITY);
        }
        if (j < rows - 1) {
          addVelocity(i, j + 1, amountX * MOUSE_VELOCITY_MULT, amountY * MOUSE_VELOCITY_MULT);
          addDensity(i, j + 1, NEIGHBOR_DENSITY);
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      const newDimensions = getDimensions();
      width = newDimensions.width;
      height = newDimensions.height;
      canvas.width = width;
      canvas.height = height;
      canvasOffset = getCanvasOffset();
    });

    resizeObserver.observe(container);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    animate();

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden rounded-lg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{ cursor: "crosshair" }}
      />
    </div>
  );
}
