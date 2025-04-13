<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment"; // Import browser check
  // Import Reveal constructor and its type from the default export
  import Reveal, { type Options as RevealOptions } from "reveal.js";
  import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
  import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
  import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
  import RevealMath from "reveal.js/plugin/math/math.esm.js"; // Import MathJax/KaTeX plugin
  import "reveal.js/dist/reveal.css";
  // Choose a theme. Example: 'black', 'white', 'league', 'sky', 'beige', 'simple',
  // 'serif', 'solarized', 'blood', 'moon', 'night'
  // More themes here: node_modules/reveal.js/dist/theme/
  // import 'reveal.js/dist/theme/black.css';
  import "reveal.js/dist/theme/white.css"; // Using white theme for now
  // If using Highlight plugin, import a theme for code highlighting
  import "reveal.js/plugin/highlight/monokai.css"; // Example highlight theme
  // Import type definitions
  import type RevealJs from "reveal.js";

  // Browser-specific fullscreen API declarations
  declare global {
    interface HTMLElement {
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    }

    interface Document {
      mozFullScreenElement?: Element;
      webkitFullscreenElement?: Element;
      msFullscreenElement?: Element;
      mozCancelFullScreen?: () => Promise<void>;
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    }
  }

  // Use InstanceType to get the type of the Reveal instance
  let deck: InstanceType<typeof Reveal> | null = null;
  let revealElement: HTMLDivElement; // Type for the bound element
  let containerElement: HTMLDivElement; // Reference to the container element

  // Optional props for customization
  export let theme = "white"; // Allow theme override
  export let showNotes = false;
  export let mathJax = true; // Default to MathJax, KaTeX is also an option
  export let showControls = true; // Show navigation controls
  export let showFullscreenButton = true; // Show fullscreen button

  // State for fullscreen
  let isFullscreen = false;

  // Function to toggle fullscreen
  function toggleFullscreen() {
    if (!browser) return;

    if (!isFullscreen) {
      // Use a type assertion to avoid TypeScript errors with browser-specific APIs
      const elem = containerElement as any;

      try {
        if (elem.requestFullscreen) {
          elem.requestFullscreen().catch((err: Error) => {
            console.error(
              `Error attempting to enable fullscreen: ${err.message}`
            );
          });
        } else if (elem.mozRequestFullScreen) {
          // Firefox
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          // Chrome, Safari, Opera
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          // IE/Edge
          elem.msRequestFullscreen();
        }
      } catch (err) {
        console.error("Failed to enter fullscreen:", err);
      }
    } else {
      // Use a type assertion to avoid TypeScript errors with browser-specific APIs
      const doc = document as any;

      try {
        if (doc.exitFullscreen) {
          doc.exitFullscreen().catch((err: Error) => {
            console.error(
              `Error attempting to exit fullscreen: ${err.message}`
            );
          });
        } else if (doc.mozCancelFullScreen) {
          // Firefox
          doc.mozCancelFullScreen();
        } else if (doc.webkitExitFullscreen) {
          // Chrome, Safari, Opera
          doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) {
          // IE/Edge
          doc.msExitFullscreen();
        }
      } catch (err) {
        console.error("Failed to exit fullscreen:", err);
      }
    }
  }

  // Listen for fullscreen change events
  function handleFullscreenChange() {
    // Use a type assertion to avoid TypeScript errors with browser-specific APIs
    const doc = document as any;

    isFullscreen =
      !!doc.fullscreenElement ||
      !!doc.mozFullScreenElement ||
      !!doc.webkitFullscreenElement ||
      !!doc.msFullscreenElement;
  }

  onMount(() => {
    // Add fullscreen change event listeners
    if (browser) {
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.addEventListener("mozfullscreenchange", handleFullscreenChange);
      document.addEventListener("MSFullscreenChange", handleFullscreenChange);

      // IMPORTANT: Only initialize Reveal.js in the browser
      deck = new Reveal(revealElement, {
        hash: true, // Enables deep linking to slides
        controls: showControls, // Show navigation controls
        plugins: [
          RevealMarkdown,
          RevealHighlight,
          RevealNotes,
          mathJax ? RevealMath.MathJax3 : RevealMath.KaTeX, // Use chosen math plugin
        ],
        // Configuration for MathJax 3
        mathjax3: {
          mathjax:
            "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", // Path to MathJax library
          // tex: {
          //   inlineMath: [ [ '$', '$' ], [ '\(', '\)' ] ], // Default
          //   displayMath: [ [ '$$', '$$' ], [ '\[', '\]' ] ] // Default
          // },
          options: {
            skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
          },
        },
        // Configuration for KaTeX
        // katex: {
        //   local: 'https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js',
        //   delimiters: [
        //      {left: '$$', right: '$$', display: true},
        //      {left: '$', right: '$', display: false},
        //      {left: '\\(', right: '\\)', display: false},
        //      {left: '\\[', right: '\\]', display: true}
        //   ]
        // },
        dependencies: [], // Dependencies managed via imports now
      });
      deck.initialize();
    }

    return () => {
      // Clean up Reveal instance on component destroy to prevent memory leaks
      if (deck && typeof deck.destroy === "function") {
        try {
          deck.destroy();
        } catch (e) {
          console.warn("Reveal.js destroy failed", e);
        }
      }

      // Remove fullscreen change event listeners
      if (browser) {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "webkitfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "mozfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "MSFullscreenChange",
          handleFullscreenChange
        );
      }
    };
  });
</script>

<div class="presentation-container" bind:this={containerElement}>
  {#if showFullscreenButton}
    <button
      onclick={toggleFullscreen}
      class="fullscreen-button"
      title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    >
      {#if isFullscreen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path d="M8 3v3a2 2 0 0 1-2 2H3"></path><path
            d="M21 8h-3a2 2 0 0 1-2-2V3"
          ></path><path d="M3 16h3a2 2 0 0 1 2 2v3"></path><path
            d="M16 21v-3a2 2 0 0 1 2-2h3"
          ></path></svg
        >
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path d="M3 8V5a2 2 0 0 1 2-2h3"></path><path
            d="M16 3h3a2 2 0 0 1 2 2v3"
          ></path><path d="M21 16v3a2 2 0 0 1-2 2h-3"></path><path
            d="M8 21H5a2 2 0 0 1-2-2v-3"
          ></path></svg
        >
      {/if}
    </button>
  {/if}

  <div class="reveal" bind:this={revealElement}>
    <div class="slides">
      <slot></slot>
      <!-- Slides will be injected here -->
    </div>
  </div>
</div>

<style>
  .presentation-container {
    position: relative;
    width: 100%;
    height: 80vh; /* Will be expanded to 100vh in fullscreen */
  }

  :global(.presentation-container:fullscreen) {
    height: 100vh;
    width: 100vw;
    background-color: white;
    padding: 0;
  }

  :global(.dark .presentation-container:fullscreen) {
    background-color: #1f2937; /* Dark mode background */
  }

  .fullscreen-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .fullscreen-button:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Ensure reveal container takes up space */
  .reveal {
    width: 100%;
    height: 100%; /* Take full height of container */
  }

  /* Add responsive styles for equations */
  :global(.reveal .math) {
    max-width: 95%;
    margin: 0 auto;
    overflow-x: auto;
    padding: 0.5em 0;
  }

  /* Ensure equations scale properly on small screens */
  @media (max-width: 800px) {
    :global(.reveal .math) {
      font-size: 0.8em;
    }
  }

  :global(.reveal .slides section) {
    height: 100%;
  }

  /* Make math display better */
  :global(.reveal .math) {
    max-width: 90%;
    margin: 0 auto;
  }
</style>
