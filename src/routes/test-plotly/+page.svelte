<script>
  import PlotlyChart from "$lib/components/PlotlyChart.svelte";

  // Simulate an RC circuit charging/discharging
  // v_C(t) = V_i * (1 - e^(-t/τ)) for charging
  // v_C(t) = V_i * e^(-t/τ) for discharging
  // where τ = R*C

  // Default parameters
  let R = 1000; // resistance in ohms
  let C = 100; // capacitance in μF
  let V_i = 5; // voltage in volts
  let isCharging = true; // true for charging, false for discharging
  let maxTime = 1; // max time to simulate in seconds

  // Compute the time constant
  $: tau = R * C * 1e-6; // convert to seconds

  // Generate data points for the plot
  $: plotData = generateRCCurve(R, C, V_i, isCharging, maxTime);

  function generateRCCurve(R, C, V_i, isCharging, maxTime) {
    const tau = R * C * 1e-6; // in seconds
    const points = 500; // number of points to plot

    const times = Array.from(
      { length: points },
      (_, i) => (i / (points - 1)) * maxTime
    );
    let voltages;

    if (isCharging) {
      // Charging curve: v_C(t) = V_i * (1 - e^(-t/τ))
      voltages = times.map((t) => V_i * (1 - Math.exp(-t / tau)));
    } else {
      // Discharging curve: v_C(t) = V_i * e^(-t/τ)
      voltages = times.map((t) => V_i * Math.exp(-t / tau));
    }

    return [
      {
        x: times,
        y: voltages,
        type: "scatter",
        mode: "lines",
        name: isCharging ? "Charging" : "Discharging",
        line: {
          color: isCharging ? "rgb(31, 119, 180)" : "rgb(255, 99, 71)",
          width: 3,
        },
      },
    ];
  }

  // Layout for the plot
  $: layout = {
    title: isCharging ? "RC Circuit - Charging" : "RC Circuit - Discharging",
    xaxis: {
      title: "Time (seconds)",
      showgrid: true,
      zeroline: true,
    },
    yaxis: {
      title: "Voltage (V)",
      range: [0, V_i * 1.1],
    },
    annotations: [
      {
        x: tau,
        y: isCharging ? V_i * (1 - Math.exp(-1)) : V_i * Math.exp(-1),
        xref: "x",
        yref: "y",
        text: "τ = " + tau.toFixed(3) + "s",
        showarrow: true,
        arrowhead: 7,
        ax: 0,
        ay: -40,
      },
    ],
  };
</script>

<svelte:head>
  <title>RC Circuit Simulator</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">RC Circuit Simulator</h1>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-gray-100 p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Parameters</h2>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="resistance">
          Resistance (R): {R} Ω
        </label>
        <input
          type="range"
          id="resistance"
          min="100"
          max="10000"
          step="100"
          bind:value={R}
          class="w-full"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="capacitance">
          Capacitance (C): {C} μF
        </label>
        <input
          type="range"
          id="capacitance"
          min="1"
          max="1000"
          step="1"
          bind:value={C}
          class="w-full"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="voltage">
          Initial Voltage (V<sub>i</sub>): {V_i} V
        </label>
        <input
          type="range"
          id="voltage"
          min="1"
          max="12"
          step="0.1"
          bind:value={V_i}
          class="w-full"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="maxTime">
          Max Time: {maxTime} seconds
        </label>
        <input
          type="range"
          id="maxTime"
          min="0.1"
          max="5"
          step="0.1"
          bind:value={maxTime}
          class="w-full"
        />
      </div>

      <div class="mb-4">
        <label class="flex items-center text-gray-700">
          <input type="checkbox" bind:checked={isCharging} class="mr-2" />
          <span>{isCharging ? "Charging" : "Discharging"}</span>
        </label>
      </div>

      <div class="mt-4 p-4 bg-blue-50 rounded">
        <p class="font-medium">Time Constant (τ): {tau.toFixed(3)} seconds</p>
        <p class="text-sm text-gray-600 mt-2">
          The time constant τ = R×C determines how quickly the capacitor charges
          or discharges. After one time constant, the capacitor reaches
          approximately 63% of its final value when charging, or discharges to
          approximately 37% of its initial value when discharging.
        </p>
      </div>
    </div>

    <div class="bg-white p-2 rounded-lg shadow">
      <div class="h-[500px]">
        <PlotlyChart data={plotData} {layout} />
      </div>
    </div>
  </div>

  <div class="mt-8 bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">RC Circuit Equations</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h3 class="font-medium mb-2">Charging</h3>
        <p class="mb-2">The voltage across the capacitor during charging is:</p>
        <div class="bg-gray-100 p-4 rounded text-center">
          v<sub>C</sub>(t) = V<sub>i</sub> × (1 - e<sup>-t/τ</sup>)
        </div>
      </div>
      <div>
        <h3 class="font-medium mb-2">Discharging</h3>
        <p class="mb-2">
          The voltage across the capacitor during discharging is:
        </p>
        <div class="bg-gray-100 p-4 rounded text-center">
          v<sub>C</sub>(t) = V<sub>i</sub> × e<sup>-t/τ</sup>
        </div>
      </div>
    </div>
  </div>
</div>
