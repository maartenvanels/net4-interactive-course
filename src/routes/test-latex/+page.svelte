<script>
  import RevealPresentation from '$lib/components/RevealPresentation.svelte';
</script>

<svelte:head>
  <title>LaTeX Test</title>
</svelte:head>

<RevealPresentation>
  <section>
    <h2>Testing LaTeX Rendering</h2>
    <p>
      This slide uses the RevealPresentation component to test LaTeX.
    </p>
  </section>

  <section>
    <h2>Inline LaTeX</h2>
    <p>
      This is inline math: $E = mc^2$. <br />
      Another example: The formula for a capacitor's charge is $Q = C \times V$. <br />
      And frequency is $f = \frac{1}{T}$.
    </p>
  </section>

  <section>
    <h2>Block LaTeX</h2>
    <p>
      This is block math:
      $$i(t) = C \frac{dv_C(t)}{dt}$$
    </p>
  </section>

  <section>
    <h2>Maxwell's Equations</h2>
    <div class="maxwell-container">
      <p>$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$</p>
      <p>$$\nabla \cdot \mathbf{B} = 0$$</p>
      <p>$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$</p>
      <p>$$\nabla \times \mathbf{B} = \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)$$</p>
    </div>
  </section>

  <section>
    <h2>End of Test</h2>
    <p>If you see rendered formulas above, LaTeX is working!</p>
  </section>
</RevealPresentation>

<style>
  .maxwell-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
</style>
