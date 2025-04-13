<script>
  // Main hub page for the Net4 Interactive Course
</script>

<svelte:head>
  <title>Netwerken 4 Interactieve Cursus</title>
</svelte:head>

<main class="container mx-auto px-4 py-8">
  <header class="text-center mb-12">
    <h1 class="text-4xl font-bold mb-4">Netwerken 4 Interactieve Cursus</h1>
    <p class="text-xl text-gray-600">
      Een moderne, interactieve presentatieomgeving voor de cursus Netwerken 4
    </p>
  </header>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4 border-b pb-2">Lessen</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- This will be populated with actual lessons later -->
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div class="bg-blue-600 text-white p-4">
          <h3 class="text-xl font-semibold">Les 1: RC-circuits</h3>
        </div>
        <div class="p-6">
          <p class="mb-4 text-gray-600">
            Introductie tot RC-circuits, tijdconstanten en responsies.
          </p>
          <a
            href="/lectures/1"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Bekijk les
          </a>
        </div>
      </div>

      <!-- Placeholder for future lessons -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden opacity-50">
        <div class="bg-blue-600 text-white p-4">
          <h3 class="text-xl font-semibold">Les 2: Komend binnenkort</h3>
        </div>
        <div class="p-6">
          <p class="mb-4 text-gray-600">Inhoud in ontwikkeling.</p>
          <button
            disabled
            class="inline-block bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-not-allowed"
          >
            Bekijk les
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4 border-b pb-2">Interactieve Tools</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div class="bg-green-600 text-white p-4">
          <h3 class="text-xl font-semibold">RC Circuit Simulator</h3>
        </div>
        <div class="p-6">
          <p class="mb-4 text-gray-600">
            Visualiseer de op- en ontlaadkromme van een RC-circuit en
            experimenteer met verschillende parameters.
          </p>
          <a
            href="/test-plotly"
            class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Open simulator
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4 border-b pb-2">Test Pagina's</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div class="bg-purple-600 text-white p-4">
          <h3 class="text-xl font-semibold">LaTeX Test</h3>
        </div>
        <div class="p-6">
          <p class="mb-4 text-gray-600">
            Test pagina voor LaTeX rendering met Reveal.js.
          </p>
          <a
            href="/test-latex"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Open test
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="mt-12 pt-8 border-t text-center text-gray-600">
    <p>© 2025 - Netwerken 4 Interactieve Cursus</p>
    <p class="mt-2">
      <a
        href="https://github.com/your-username/net4-interactive-course"
        class="text-blue-600 hover:underline">GitHub Repository</a
      >
    </p>
  </footer>
</main>

<style>
  /* Add any page-specific styles here */
</style>
