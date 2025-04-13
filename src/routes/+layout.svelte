<script lang="ts">
  import "../app.css";
  import { theme } from "$lib/stores/themeStore"; // Import the theme store
  import { Sun, Moon, Monitor } from "lucide-svelte"; // Icons for toggle

  let { children } = $props();

  function cycleTheme() {
    if ($theme === "light") {
      theme.set("dark");
    } else if ($theme === "dark") {
      theme.set("system");
    } else {
      theme.set("light");
    }
  }
</script>

<div
  class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-slate-900 dark:to-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
>
  <header
    class="bg-indigo-700 dark:bg-indigo-900 text-white p-4 shadow-lg sticky top-0 z-10"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <a
        href="/"
        class="text-2xl font-bold hover:text-indigo-200 transition-colors"
        >Netwerken 4 Interactief</a
      >
      <!-- Theme Toggle Button -->
      <button
        on:click={() => cycleTheme()}
        class="p-2 rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white transition-colors"
        aria-label="Cycle theme"
      >
        {#if $theme === "light"}
          <Sun class="h-5 w-5" />
        {:else if $theme === "dark"}
          <Moon class="h-5 w-5" />
        {:else}
          <Monitor class="h-5 w-5" />
        {/if}
      </button>
    </nav>
  </header>

  <main class="container mx-auto p-6 md:p-10">
    {@render children()}
    <!-- Page content will be injected here -->
  </main>

  <footer
    class="text-center p-5 mt-10 text-gray-600 dark:text-gray-400 text-xs border-t border-gray-200 dark:border-gray-700"
  >
    Gemaakt met SvelteKit, Tailwind CSS, Reveal.js en Plotly.js
  </footer>
</div>

<style>
  /* These styles act as a fallback if Tailwind fails */
  :global(html) {
    height: 100%;
  }

  :global(body) {
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: inherit;
  }
</style>
