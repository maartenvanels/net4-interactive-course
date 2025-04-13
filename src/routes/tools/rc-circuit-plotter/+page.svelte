<script lang="ts">
  import PlotlyChart from "$lib/components/PlotlyChart.svelte";
  import type { Data, Layout } from "plotly.js";
  import { theme } from "$lib/stores/themeStore"; // Import theme store
  import { browser } from "$app/environment"; // Import browser check

  // Initial/default values
  let resistance = 1000; // Ohms (1k)
  let capacitance = 10e-6; // Farads (10uF) - Adjusted for better slider interaction
  let voltageSource = 5; // Volts
  let mode: "charge" | "discharge" = "charge"; // Default mode
  let initialVoltage = 0; // Assume starting from 0V for charging

  // Time constant
  $: tau = resistance * capacitance;

  // Plotly data and layout (reactive)
  $: plotData = createPlotData();
  $: plotLayout = createPlotLayout($theme);

  function createPlotData(): Data[] {
    const timeEnd = 5 * tau; // Plot up to 5 time constants
    const numPoints = 200;
    const time = Array.from(
      { length: numPoints },
      (_, i) => (i / (numPoints - 1)) * timeEnd
    );
    let voltage: number[];

    if (mode === "charge") {
      // Charging formula: V_final + (V_initial - V_final) * exp(-t/tau)
      const vFinal = voltageSource;
      voltage = time.map(
        (t) => vFinal + (initialVoltage - vFinal) * Math.exp(-t / tau)
      );
    } else {
      // Discharging formula: V_initial * exp(-t/tau)
      const vInitialDischarge = voltageSource; // Assume starts fully charged for discharge mode
      voltage = time.map((t) => vInitialDischarge * Math.exp(-t / tau));
    }

    return [
      {
        x: time,
        y: voltage,
        type: "scatter",
        mode: "lines",
        name: "Capacitor Voltage vC(t)",
        line: { color: "rgb(31, 119, 180)", width: 3 }, // Blue line
      },
    ];
  }

  function createPlotLayout(
    currentTheme: "light" | "dark" | "system"
  ): Partial<Layout> {
    // Determine effective theme (light/dark) based on system preference if needed
    let effectiveTheme = currentTheme;
    if (currentTheme === "system" && browser) {
      // Only check system preference in browser environment
      effectiveTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    } else if (currentTheme === "system") {
      // Default to light theme when server-side rendering
      effectiveTheme = "light";
    }

    const isDark = effectiveTheme === "dark";
    const textColor = isDark ? "#E0E0E0" : "#333333";
    const gridColor = isDark ? "#555555" : "#dddddd";
    const zeroLineColor = isDark ? "#777777" : "#aaaaaa";
    const plotBgColor = isDark
      ? "rgba(40, 42, 54, 0.8)"
      : "rgba(250, 250, 250, 0.8)"; // Example dark bg
    const paperBgColor = "rgba(0,0,0,0)"; // Keep paper transparent

    return {
      title: `RC Circuit Response (${mode === "charge" ? "Charging" : "Discharging"})<br>R=${resistance}Ω, C=${(capacitance * 1e6).toFixed(1)}µF, V<sub>S</sub>=${voltageSource}V, τ=${(tau * 1000).toFixed(2)}ms`,
      xaxis: {
        title: "Time (s)",
        color: textColor,
        gridcolor: gridColor,
        zerolinecolor: zeroLineColor,
      },
      yaxis: {
        title: "Voltage (V)",
        range: [0, Math.max(voltageSource, initialVoltage) * 1.1], // Adjust range based on max voltage
        color: textColor,
        gridcolor: gridColor,
        zerolinecolor: zeroLineColor,
      },
      margin: { l: 60, r: 30, b: 50, t: 80 }, // Adjusted margins for longer title
      paper_bgcolor: paperBgColor,
      plot_bgcolor: plotBgColor,
      font: {
        family: "inherit", // Inherit font from page
        color: textColor, // Apply dynamic text color
      },
      titlefont: {
        // Ensure title also uses the correct color
        color: textColor,
      },
      // annotations: [ ... ] // Annotations can be added here
    };
  }

  // Helper to format capacitance for slider display/binding
  $: capacitanceMicroFarads = capacitance * 1e6;
  function updateCapacitance(value: number) {
    capacitance = value * 1e-6;
  }
</script>

<svelte:head>
  <title>RC Circuit Plotter</title>
  <meta
    name="description"
    content="Interactieve tool voor RC-circuit responsie."
  />
</svelte:head>

<div class="space-y-6">
  <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">
    Interactieve RC Circuit Plotter
  </h1>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded bg-gray-50 dark:bg-gray-800 shadow"
  >
    <!-- Resistance Slider -->
    <div class="mb-4">
      <label
        for="resistance"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >Resistance (R): {resistance} Ω</label
      >
      <input
        type="range"
        id="resistance"
        min="100"
        max="10000"
        step="100"
        bind:value={resistance}
        class="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
      />
    </div>

    <!-- Capacitance Slider -->
    <div class="mb-4">
      <label
        for="capacitance"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >Capacitance (C): {capacitanceMicroFarads.toFixed(1)} µF</label
      >
      <input
        type="range"
        id="capacitance"
        min="1"
        max="100"
        step="1"
        value={capacitanceMicroFarads}
        on:input={(e) => updateCapacitance(parseFloat(e.currentTarget.value))}
        class="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
      />
    </div>

    <!-- Voltage Source Slider -->
    <div class="mb-4">
      <label
        for="voltageSource"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >Source Voltage (V<sub>S</sub>): {voltageSource} V</label
      >
      <input
        type="range"
        id="voltageSource"
        min="1"
        max="20"
        step="1"
        bind:value={voltageSource}
        class="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
      />
    </div>

    <!-- Mode Selection -->
    <div class="mb-4">
      <span
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >Mode:</span
      >
      <div class="flex items-center space-x-4 mt-1">
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="charge"
            bind:group={mode}
            class="form-radio text-blue-600 focus:ring-blue-500 h-4 w-4"
          />
          <span class="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >Charging</span
          >
        </label>
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="discharge"
            bind:group={mode}
            class="form-radio text-blue-600 focus:ring-blue-500 h-4 w-4"
          />
          <span class="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >Discharging</span
          >
        </label>
      </div>
    </div>
  </div>

  <!-- Plot Area -->
  <div>
    <!-- Use svelte:component this={PlotlyChart} to potentially improve reactivity if needed -->
    <!-- {#key plotData} -->
    <PlotlyChart data={plotData} layout={plotLayout} />
    <!-- {/key} -->
  </div>

  <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
    Time Constant (τ = RC): <strong>{(tau * 1000).toFixed(2)} ms</strong>
  </p>
</div>

<style>
  /* Adjust text colors if needed based on theme, although Tailwind dark: should handle most */
  h1 {
    color: var(--heading-color, inherit);
  }
</style>
