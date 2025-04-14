import { useState, useMemo } from "react";
import ChartComponent from "../../components/shared/ChartComponent";
import { ChartData } from "chart.js";
import { useTheme } from "../../hooks/useTheme";

function RCCircuitPlotterPage() {
  const { isDark } = useTheme();
  // State voor de RC circuit parameters
  const [resistance, setResistance] = useState(1000); // 1kΩ
  const [capacitance, setCapacitance] = useState(0.000001); // 1μF
  const [isCharging, setIsCharging] = useState(true);
  const [sourceVoltage, setSourceVoltage] = useState(5); // 5V

  // Bereken tijdconstante
  const timeConstant = useMemo(() => {
    return resistance * capacitance;
  }, [resistance, capacitance]);

  // Bereken datapunten voor de grafiek
  const generateChartData = (): ChartData => {
    // Genereer tijdstippen (x-as)
    const times: number[] = [];
    const voltageValues: number[] = [];

    // Toon 5 tijdconstantes
    const maxTime = timeConstant * 5;
    const steps = 100;

    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * maxTime;
      times.push(t);

      let voltage;
      if (isCharging) {
        // Formule voor opladen: v(t) = Vs(1 - e^(-t/τ))
        voltage = sourceVoltage * (1 - Math.exp(-t / timeConstant));
      } else {
        // Formule voor ontladen: v(t) = V0 * e^(-t/τ)
        voltage = sourceVoltage * Math.exp(-t / timeConstant);
      }

      voltageValues.push(voltage);
    }

    return {
      labels: times.map((t) => t.toFixed(3)),
      datasets: [
        {
          label: isCharging
            ? "Spanning tijdens opladen"
            : "Spanning tijdens ontladen",
          data: voltageValues,
          borderColor: isDark ? "rgb(125, 211, 252)" : "rgb(75, 192, 192)",
          backgroundColor: isDark
            ? "rgba(125, 211, 252, 0.1)"
            : "rgba(75, 192, 192, 0.1)",
          tension: 0.1,
          pointRadius: 0,
        },
      ],
    };
  };

  // Genereer chartdata wanneer parameters veranderen
  const chartData = useMemo(
    () => generateChartData(),
    [resistance, capacitance, isCharging, sourceVoltage, timeConstant, isDark]
  );

  // Chart opties
  const chartOptions = useMemo(() => {
    return {
      scales: {
        x: {
          title: {
            display: true,
            text: "Tijd (s)",
            color: isDark ? "#eee" : "#666",
          },
          grid: {
            color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: isDark ? "#ccc" : "#666",
          },
        },
        y: {
          title: {
            display: true,
            text: "Spanning (V)",
            color: isDark ? "#eee" : "#666",
          },
          min: 0,
          max: sourceVoltage,
          grid: {
            color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: isDark ? "#ccc" : "#666",
          },
        },
      },
      animation: {
        duration: 0, // Zet animatie uit voor betere performance
      },
      plugins: {
        legend: {
          labels: {
            color: isDark ? "#eee" : "#666",
          },
        },
      },
    };
  }, [sourceVoltage, isDark]);

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        RC-Circuit Simulator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20">
            <h2 className="text-xl mb-6 font-semibold text-gray-900 dark:text-white">
              Parameters
            </h2>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Modus:
                <select
                  value={isCharging ? "charging" : "discharging"}
                  onChange={(e) => setIsCharging(e.target.value === "charging")}
                  className="ml-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-900 dark:text-white"
                >
                  <option value="charging">Opladen</option>
                  <option value="discharging">Ontladen</option>
                </select>
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Weerstand (R): {resistance} Ω
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={resistance}
                  onChange={(e) => setResistance(Number(e.target.value))}
                  className="block w-full mt-1 dark:bg-gray-700"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Capaciteit (C): {(capacitance * 1000000).toFixed(2)} μF
                <input
                  type="range"
                  min="0.0000001"
                  max="0.000001"
                  step="0.0000001"
                  value={capacitance}
                  onChange={(e) => setCapacitance(Number(e.target.value))}
                  className="block w-full mt-1 dark:bg-gray-700"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Bronspanning (Vs): {sourceVoltage} V
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.1"
                  value={sourceVoltage}
                  onChange={(e) => setSourceVoltage(Number(e.target.value))}
                  className="block w-full mt-1 dark:bg-gray-700"
                />
              </label>
            </div>

            <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200">
              <p>
                Tijdconstante (τ = RC): {(timeConstant * 1000).toFixed(2)} ms
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20">
          <h2 className="text-xl mb-6 font-semibold text-gray-900 dark:text-white">
            Spanningsverloop
          </h2>
          <div className="bg-white dark:bg-gray-900 p-3 rounded-md">
            <ChartComponent
              type="line"
              data={chartData}
              options={chartOptions}
              width={600}
              height={400}
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RCCircuitPlotterPage;
