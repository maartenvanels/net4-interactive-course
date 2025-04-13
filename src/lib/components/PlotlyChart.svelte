<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { browser } from "$app/environment";

  // Only import types statically, as they don't affect runtime SSR
  import type { Data, Layout, Config, PlotlyHTMLElement } from "plotly.js";

  // Props
  export let data: Data[] = [];
  export let layout: Partial<Layout> = {};
  export let config: Partial<Config> = { responsive: true }; // Make plot responsive by default
  export let divId =
    "plotly-chart-" + Math.random().toString(36).substring(2, 9);
  export let responsive = true;
  export let width = undefined;
  export let height = undefined;

  // Loading state
  let loading = true;
  let error: string | null = null;

  // Set defaults
  $: {
    // Merge user layout with defaults
    layout = {
      margin: { t: 30, r: 20, b: 40, l: 50 },
      autosize: responsive,
      ...layout,
    };

    // If width/height are provided, set them in the layout
    if (width !== undefined) layout.width = width;
    if (height !== undefined) layout.height = height;

    // Merge user config with defaults
    config = {
      responsive: responsive,
      displayModeBar: true,
      modeBarButtonsToRemove: [
        "sendDataToCloud",
        "autoScale2d",
        "hoverClosestCartesian",
        "hoverCompareCartesian",
        "lasso2d",
        "select2d",
      ],
      ...config,
    };
  }

  let plotElement: HTMLDivElement;
  let Plotly: any = null; // Initialize Plotly module variable to null
  let plotInitialized = false;

  // Function to draw or update the plot - only call when Plotly is loaded
  function drawPlot() {
    if (!browser || !plotElement || !Plotly) return;

    try {
      if (!plotInitialized) {
        Plotly.newPlot(plotElement, data, layout, config);
        plotInitialized = true;
      } else {
        Plotly.react(plotElement, data, layout, config);
      }
      error = null;
    } catch (err) {
      console.error("Plotly drawing error:", err);
      error = err instanceof Error ? err.message : String(err);
    }
  }

  // Use synchronous onMount
  onMount(() => {
    if (browser) {
      // Use async IIFE for dynamic import - use the minified distribution to reduce size
      (async () => {
        try {
          // Use plotly.js-dist-min instead of full plotly.js
          const PlotlyModule = await import("plotly.js-dist-min");
          Plotly = PlotlyModule.default || PlotlyModule;
          // Initial plot draw after Plotly is loaded
          drawPlot();
        } catch (error) {
          console.error("Failed to load Plotly dynamically:", error);
          error = error instanceof Error ? error.message : String(error);
        } finally {
          loading = false;
        }
      })();
    }
    // No return needed here, cleanup is handled by onDestroy
  });

  // Cleanup logic moved to onDestroy
  onDestroy(() => {
    if (plotElement && Plotly && typeof Plotly.purge === "function") {
      try {
        Plotly.purge(plotElement);
      } catch (e) {
        console.warn("Plotly purge failed", e);
      }
    }
    plotInitialized = false;
    Plotly = null; // Clear the reference
  });

  // Redraw plot when data or layout props change, but only if Plotly is loaded
  afterUpdate(() => {
    if (plotInitialized && Plotly) {
      drawPlot();
    }
  });

  // Optional resize handler if needed
  // function handleResize() {
  //   if (plotElement) {
  //     Plotly.relayout(plotElement, { autosize: true });
  //   }
  // }
</script>

<svelte:head>
  <!-- Optional: Add any head elements needed for Plotly -->
</svelte:head>

<div id={divId} bind:this={plotElement} class="plotly-container">
  {#if loading}
    <div class="loading-placeholder">
      <div class="loading-indicator"></div>
      <p>Loading chart...</p>
    </div>
  {/if}

  {#if error}
    <div class="error-message">
      <p>Error loading chart: {error}</p>
    </div>
  {/if}
</div>

<style>
  .plotly-container {
    width: 100%;
    height: 100%;
    min-height: 300px;
    position: relative;
  }

  .loading-placeholder,
  .error-message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    color: #555;
  }

  .error-message {
    background-color: rgba(255, 235, 235, 0.8);
    color: #d32f2f;
  }

  .loading-indicator {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
