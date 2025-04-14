import { useRef, useEffect } from "react";
import {
  Chart,
  ChartType,
  ChartData,
  ChartOptions,
  registerables,
} from "chart.js";

// Registreer Chart.js componenten
Chart.register(...registerables);

interface ChartComponentProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Een generieke wrapper voor Chart.js
 */
function ChartComponent({
  type,
  data,
  options,
  width = 400,
  height = 300,
  className = "",
}: ChartComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Als er nog geen canvas element is, return
    if (!canvasRef.current) return;

    // Als er al een chart instance is, vernietig deze
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Creëer een nieuwe chart
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type,
        data,
        options,
      });
    }

    // Cleanup functie
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <div className={`chart-container ${className}`}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
}

export default ChartComponent;
