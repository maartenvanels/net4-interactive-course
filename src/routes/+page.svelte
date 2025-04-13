<script>
  // Later: Fetch or define lecture list
  const lectures = [
    {
      id: 1,
      title: "Les 1: Introductie & RC Kring (Ontladen/Opladen)",
      path: "/lectures/1",
    },
    // { id: 2, title: 'Les 2: ...', path: '/lectures/2' }, // Placeholder
  ];

  const tools = [
    {
      id: "rc-circuit-plotter",
      title: "RC Kring Plotter",
      path: "/tools/rc-circuit-plotter",
    },
    // { id: 'rl-circuit-plotter', title: 'RL Kring Plotter', path: '/tools/rl-circuit-plotter' }, // Placeholder
  ];
</script>

<svelte:head>
  <title>Netwerken 4 Interactief - Hub</title>
  <meta
    name="description"
    content="Hoofdpagina voor de interactieve cursus Netwerken 4"
  />
</svelte:head>

<div class="space-y-8">
  <h1 class="text-3xl font-bold text-blue-700 dark:text-blue-400">
    Welkom bij Netwerken 4 Interactief
  </h1>

  <p class="text-lg">
    Dit is de centrale hub voor het interactieve lesmateriaal van de cursus
    Netwerken 4. Navigeer naar de verschillende lessen en interactieve tools
    hieronder.
  </p>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Lessen</h2>
    <ul class="list-disc list-inside space-y-2">
      {#each lectures as lecture}
        <li>
          <a
            href={lecture.path}
            class="text-blue-600 hover:underline dark:text-blue-400"
          >
            {lecture.title}
          </a>
        </li>
      {:else}
        <p>Nog geen lessen beschikbaar.</p>
      {/each}
    </ul>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">Interactieve Tools</h2>
    <ul class="list-disc list-inside space-y-2">
      {#each tools as tool}
        <li>
          <a
            href={tool.path}
            class="text-blue-600 hover:underline dark:text-blue-400"
          >
            {tool.title}
          </a>
        </li>
      {:else}
        <p>Nog geen tools beschikbaar.</p>
      {/each}
    </ul>
  </section>
</div>

<style>
  /* Add any page-specific styles here */
</style>
