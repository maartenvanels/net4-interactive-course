<script>
  import { onMount, afterUpdate } from "svelte";
  import { browser } from "$app/environment";

  // Props
  export let data = [];
  export let layout = {};
  export let config = {};
  export let divId =
    "plotly-chart-" + Math.random().toString(36).substring(2, 9);
  export let responsive = true;
  export let width = undefined;
  export let height = undefined;

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

  let plotlyDiv;
  let Plotly;

  onMount(async () => {
    if (browser) {
      // Dynamically import Plotly on client side only
      Plotly = (await import("plotly.js-dist-min")).default;

      // Initial plot creation
      createPlot();
    }
  });

  afterUpdate(() => {
    if (browser && Plotly && plotlyDiv) {
      // Update the plot with new data/layout if changed
      updatePlot();
    }
  });

  function createPlot() {
    if (Plotly && plotlyDiv) {
      Plotly.newPlot(plotlyDiv, data, layout, config)
        .then(() => {
          // Add resize listener for responsive behavior if needed
          if (responsive) {
            window.addEventListener("resize", resizePlot);
          }
        })
        .catch((err) => {
          console.error("Error creating Plotly chart:", err);
        });
    }
  }

  function updatePlot() {
    if (Plotly && plotlyDiv) {
      Plotly.react(plotlyDiv, data, layout, config).catch((err) => {
        console.error("Error updating Plotly chart:", err);
      });
    }
  }

  function resizePlot() {
    if (Plotly && plotlyDiv && responsive) {
      Plotly.Plots.resize(plotlyDiv);
    }
  }

  // Clean up on component destruction
  function cleanup() {
    if (browser && Plotly && plotlyDiv) {
      window.removeEventListener("resize", resizePlot);
      Plotly.purge(plotlyDiv);
    }
  }
</script>

<svelte:head>
  <!-- Optional: Add any head elements needed for Plotly -->
</svelte:head>

<div id={divId} bind:this={plotlyDiv} class="plotly-container"></div>

<style>
  .plotly-container {
    width: 100%;
    height: 100%;
    min-height: 300px;
  }
</style>
