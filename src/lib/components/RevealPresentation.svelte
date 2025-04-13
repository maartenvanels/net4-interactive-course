<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  // Import styles only (will work in SSR)
  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";

  // Forward the slot content
  let revealElement;

  onMount(async () => {
    if (browser) {
      // Load MathJax first
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      script.async = true;

      // Configure MathJax
      window.MathJax = {
        tex: {
          inlineMath: [["$", "$"]],
          displayMath: [["$$", "$$"]],
        },
        options: {
          skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
        },
      };

      // Load MathJax
      document.head.appendChild(script);

      // Load RevealJS after MathJax is loaded
      script.onload = async () => {
        const Reveal = (await import("reveal.js")).default;

        const deck = new Reveal({
          hash: true,
          controls: true,
          progress: true,
          center: true,
          width: "100%",
          height: "100%",
          margin: 0.1,
        });

        await deck.initialize();

        // Typeset math after Reveal is initialized
        window.MathJax.typesetPromise?.().then(() => {
          console.log("MathJax typeset complete");
        });
      };
    }
  });
</script>

<!-- The main Reveal container -->
<div class="reveal" bind:this={revealElement}>
  <!-- Any section element inside of this container is displayed as a slide -->
  <div class="slides">
    <slot></slot>
    <!-- Slides content will be passed here -->
  </div>
</div>

<style>
  /* Ensure reveal container takes up space if needed */
  .reveal {
    height: 100vh; /* Or adjust as needed */
    width: 100%;
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
