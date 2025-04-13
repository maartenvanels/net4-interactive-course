<script>
  import RevealPresentation from "$lib/components/RevealPresentation.svelte";
</script>

<svelte:head>
  <title>Les 1: Introductie & RC Kring</title>
  <meta name="description" content="Presentatie voor Les 1 van Netwerken 4." />
</svelte:head>

<div class="mb-4 flex justify-between items-center">
  <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">
    Les 1: Introductie & RC Kring (Transiënten)
  </h1>
  <div class="text-sm text-gray-600 dark:text-gray-400">
    <p>
      Klik op <span
        class="bg-black bg-opacity-30 text-white px-1 py-0.5 rounded inline-flex items-center"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
        ></span
      > rechtsboven voor volledig scherm
    </p>
  </div>
</div>

<RevealPresentation showFullscreenButton={true} showControls={true}>
  <!-- Slide 1: Introduction -->
  <section>
    <h2>Les 1: Introductie</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-0-0.png" alt="Networks 4 Introduction" class="r-stretch"> -->
    <ul>
      <li>Welkom bij Netwerken 4!</li>
      <li>Focus: Transiënt gedrag (schakelgedrag).</li>
      <li>Contrast: Steady-state DC (Net1) en AC (Net2, Net3).</li>
      <li>
        Methode: Tijd-domein analyse (Laplace transformaties komen later).
      </li>
    </ul>
  </section>

  <!-- Slide 2: NET4 in Context -->
  <section>
    <h2>Netwerken 4 in Context</h2>
    <ul>
      <li>Plaatsing binnen het curriculum.</li>
      <li>Analyse direct na schakelgebeurtenissen.</li>
      <li>
        Oplossen van 1e orde differentiaalvergelijkingen (homogeen,
        particulier).
      </li>
      <li>Onderscheid steady-state vs. transiënt respons.</li>
    </ul>
  </section>

  <!-- Slide 3: Switching Behaviour -->
  <section>
    <h2>Schakelgedrag</h2>
    <ul>
      <li>Focus op tijd-domein oplossingen.</li>
    </ul>
  </section>

  <!-- Slide 4: Course Program -->
  <section>
    <h2>Cursus Programma</h2>
    <!-- Insert weekly plan image or list here -->
    <ul>
      <li>Week 1: 1e orde RC netwerken, DC bron, (ont)laden</li>
      <li>Week 2: ...</li>
      <li>...</li>
    </ul>
    <p class="fragment highlight-blue">
      <strong>Vandaag: 1e orde RC netwerken, DC bron, (ont)laden</strong>
    </p>
  </section>

  <!-- Slide 5: Recap: Capacitor & Inductor -->
  <section>
    <h2>Recap: Condensator & Spoel</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-4-0.png" alt="Capacitor and Inductor Recap" class="r-stretch"> -->
    <h3>Condensator (C)</h3>
    <ul>
      <li>
        {@html `Basis: \( i = C \frac{dv}{dt} \) en \( v = \frac{1}{C} \int i(t) dt \)`}
      </li>
      <li class="fragment highlight-red">
        <strong>Cruciaal:</strong> Condensatorspanning kan <strong>niet</strong>
        plotseling veranderen.
      </li>
      <li>{@html `Energie: \( W = \frac{1}{2}Cv^2 \) (Elektrisch veld)`}</li>
    </ul>
    <h3 class="fragment">Spoel (L)</h3>
    <ul class="fragment">
      <li>
        {@html `Basis: \( v = L \frac{di}{dt} \) en \( i = \frac{1}{L} \int v(t) dt \)`}
      </li>
      <li class="fragment highlight-red">
        <strong>Cruciaal:</strong> Spoelstroom kan <strong>niet</strong> plotseling
        veranderen.
      </li>
      <li>{@html `Energie: \( W = \frac{1}{2}Li^2 \) (Magnetisch veld)`}</li>
    </ul>
  </section>

  <!-- Slide 6: Part 1: Discharging Scenario -->
  <section>
    <h2>Deel 1: Condensator Ontladen - Scenario</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-5-0.png" alt="Discharging Circuit Scenario" class="r-stretch"> -->
    <ul>
      <li>
        {@html `Situatie: Condensator C, geladen tot \(V_i\), ontlaadt via weerstand R na sluiten schakelaar (t=0).`}
      </li>
      <li>{@html `Voorbeeld: \(V_i = 100V\), \(C = 10 µF\), \(R = 1 MΩ\).`}</li>
      <li>
        {@html `Intuïtie: Wat gebeurt er met de spanning \(v_C(t)\)? (Antwoord: deze neemt af).`}
      </li>
    </ul>
  </section>

  <!-- Slide 7: Discharging Intuition (Graph) -->
  <section>
    <h2>Ontladen: Intuïtieve Grafiek</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-6-0.png" alt="Discharging Voltage Graph" class="r-stretch"> -->
    <p>De spanning neemt exponentieel af.</p>
  </section>

  <!-- Slide 8: Exponential Decay & Time Constant -->
  <section>
    <h2>Exponentiële Afname & Tijdconstante (τ)</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-7-0.png" alt="Exponential Decay Graph" class="r-frame"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-7-1.png" alt="Decay Formula" class="r-frame fragment"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-7-2.png" alt="Time Constant Definition" class="r-frame fragment"> -->
    <ul>
      <li>De vorm van de afname is een exponentiële functie.</li>
      <li>
        {@html `Definitie **Tijdconstante**: \( \tau = RC \) (eenheid: seconden).`}
      </li>
      <li class="fragment">
        Kenmerkende punten:
        <ul>
          <li>
            {@html `\( v_C(\tau) \approx 0.368 V_i \) (Na 1τ: ~37% over)`}
          </li>
          <li>
            {@html `\( v_C(2\tau) \approx 0.135 V_i \) (Na 2τ: ~13.5% over)`}
          </li>
        </ul>
      </li>
      <li class="fragment">
        {@html `Vuistregel: Na \( 5\tau \) is de spanning praktisch 0 (&lt;1% over).`}
      </li>
    </ul>
  </section>

  <!-- Slide 9: Deriving the Solution - Goal -->
  <section>
    <h2>Afleiding Oplossing (Ontladen)</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-8-0.png" alt="Analytical Solution Goal" class="r-stretch"> -->
    <p>
      {@html `Doel: Vind de wiskundige uitdrukking voor \( v_C(t) \) voor \( t \ge 0 \).`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-9-0.png" alt="KCL Setup" class="r-frame fragment"> -->
  </section>

  <!-- Slide 10: Deriving - KCL -->
  <section>
    <h2>Afleiding: KCL Toepassen</h2>
    <p>{@html `Voor \( t > 0 \), pas KCL toe op het bovenste knooppunt:`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-9-1.png" alt="KCL Equation" class="r-stretch"> -->
    <p class="fragment">{@html `\( i_C(t) + i_R(t) = 0 \)`}</p>
    <p class="fragment">Substitueer componentvergelijkingen:</p>
    <p class="fragment">
      {@html `\( C \frac{dv_C}{dt} + \frac{v_C(t)}{R} = 0 \)`}
    </p>
  </section>

  <!-- Slide 11: Deriving - Differential Equation -->
  <section>
    <h2>Afleiding: De Differentiaalvergelijking</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-9-2.png" alt="Differential Equation Step 1"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-10-0.png" alt="Differential Equation Step 2"> -->
    <p>Herschrijven naar standaardvorm:</p>
    <p>{@html `\( \frac{dv_C}{dt} + \frac{1}{RC} v_C(t) = 0 \)`}</p>
    <p class="fragment">Of:</p>
    <p class="fragment">{@html `\( RC \frac{dv_C}{dt} + v_C(t) = 0 \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-10-1.png" alt="Rearranged Equation 1"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-10-2.png" alt="Rearranged Equation 2"> -->
    <p class="fragment">
      Dit is een <strong
        >1e orde lineaire homogene differentiaalvergelijking</strong
      >.
    </p>
  </section>

  <!-- Slide 12: Solving the Differential Equation -->
  <section data-transition="slide-in fade-out">
    <h2>Oplossen Differentiaalvergelijking</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-1.png" alt="Solving Header"> -->
    <p>
      {@html `We gokken een oplossing van de vorm: \( v_C(t) = K e^{st} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-0.png" alt="Guess Form"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-2.png" alt="Guess Form Detail"> -->
    <p class="fragment">
      {@html `Afgeleide: \( \frac{dv_C}{dt} = K s e^{st} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-3.png" alt="Derivative"> -->
    <p class="fragment">
      {@html `Invullen in \( RC \frac{dv_C}{dt} + v_C(t) = 0 \):`}
    </p>
    <p class="fragment">{@html `\( RC (K s e^{st}) + K e^{st} = 0 \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-4.png" alt="Substitution"> -->
    <p class="fragment">
      {@html `Vereenvoudigen (deel door \( K e^{st} \)): \( RCs + 1 = 0 \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-5.png" alt="Characteristic Equation"> -->
    <p class="fragment">
      Dit is de <strong>karakteristieke vergelijking</strong>.
    </p>
    <p class="fragment">
      {@html `Oplossing voor s: \( s = -\frac{1}{RC} = -\frac{1}{\tau} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-11-6.png" alt="Solve for s"> -->
    <p class="fragment">
      {@html `Algemene oplossing: \( v_C(t) = K e^{-t/RC} = K e^{-t/\tau} \)`}
    </p>
  </section>

  <!-- Slide 13: Applying Initial Conditions - Graph -->
  <section>
    <h2>Toepassen Beginvoorwaarden (K bepalen)</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-12-0.png" alt="Decay Graph with Tau"> -->
    <p>{@html `Algemene oplossing: \( v_C(t) = K e^{-t/\tau} \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-12-1.png" alt="General Solution"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-12-2.png" alt="General Solution with Tau"> -->
    <p class="fragment">
      De constante K wordt bepaald door de <strong>beginvoorwaarde</strong>.
    </p>
  </section>

  <!-- Slide 14: Initial Conditions - Continuity -->
  <section>
    <h2>Beginvoorwaarden: Continuïteit</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-14-0.png" alt="Continuity Concept"> -->
    <p>
      Cruciaal principe: De spanning over een condensator kan niet sprongsgewijs
      veranderen.
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-14-1.png" alt="Continuity Equation"> -->
    <p>{@html `\( v_C(0^+) = v_C(0^-) \)`}</p>
    <p class="fragment">
      {@html `In ons geval was de condensator geladen tot \(V_i\) vóór het schakelen:`}
    </p>
    <p class="fragment">{@html `\( v_C(0^-) = V_i \)`}</p>
    <p class="fragment">{@html `Dus: \( v_C(0^+) = V_i \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-14-2.png" alt="Initial Condition Value"> -->
  </section>

  <!-- Slide 15: Initial Conditions - Final Solution -->
  <section>
    <h2>Beginvoorwaarden: K Bepalen</h2>
    <p>{@html `Algemene oplossing: \( v_C(t) = K e^{-t/\tau} \)`}</p>
    <p>{@html `Beginvoorwaarde: \( v_C(0^+) = V_i \)`}</p>
    <p class="fragment">
      {@html `Invullen (t=0): \( v_C(0^+) = K e^{-0/\tau} = K e^0 = K \times 1 = K \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-13-0.png" alt="Finding K Step 1"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-13-1.png" alt="Finding K Step 2"> -->
    <p class="fragment">{@html `Dus: \( K = V_i \)`}</p>
    <p class="fragment"><strong>Finale Oplossing (Ontladen):</strong></p>
    <p class="fragment font-bold text-xl">
      {@html `\( v_C(t) = V_i e^{-t/RC} = V_i e^{-t/\tau} \)`}
    </p>
    <p class="fragment">{@html `(Geldig voor \( t \ge 0 \))`}</p>
  </section>

  <!-- Slide 16: Part 2: Charging Scenario -->
  <section>
    <h2>Deel 2: Condensator Opladen - Scenario</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-15-0.png" alt="Charging Circuit Scenario" class="r-stretch"> -->
    <ul>
      <li>
        {@html `Situatie: DC bron \(V_S\), weerstand R, initieel ongeladen condensator C (\(v_C(0^-)=0\)).`}
      </li>
      <li>Schakelaar sluit op t=0.</li>
      <li>{@html `We zoeken weer \(v_C(t)\) voor \(t \ge 0\).`}</li>
    </ul>
  </section>

  <!-- Slide 17: Charging Analysis & Solution -->
  <section>
    <h2>Opladen: Analyse & Oplossing</h2>
    <p>{@html `Pas KVL toe voor \( t > 0 \):`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-16-0.png" alt="KVL Equation Charging"> -->
    <p>{@html `\( -V_S + v_R(t) + v_C(t) = 0 \)`}</p>
    <p class="fragment">
      {@html `Substitueer \( v_R = R i_C = RC \frac{dv_C}{dt} \):`}
    </p>
    <p class="fragment">
      {@html `\( -V_S + RC \frac{dv_C}{dt} + v_C(t) = 0 \)`}
    </p>
    <p class="fragment">Differentiaalvergelijking (Opladen):</p>
    <p class="fragment">{@html `\( RC \frac{dv_C}{dt} + v_C(t) = V_S \)`}</p>
    <p class="fragment">(1e orde <strong>niet-homogeen</strong>)</p>
    <p class="fragment">
      {@html `Oplossing (afleiding later): \( v_C(t) = V_S + A e^{-t/\tau} \)`}
    </p>
    <p class="fragment">
      {@html `Beginvoorwaarde: \( v_C(0^+) = v_C(0^-) = 0 \)`}
    </p>
    <p class="fragment">
      {@html `Invullen (t=0): \( 0 = V_S + A e^0 \implies A = -V_S \)`}
    </p>
    <p class="fragment">
      <strong>Finale Oplossing (Opladen vanaf 0V):</strong>
    </p>
    <p class="fragment font-bold text-xl">
      {@html `\( v_C(t) = V_S - V_S e^{-t/RC} = V_S (1 - e^{-t/\tau}) \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-16-1.png" alt="Charging Formula and Graph" class="r-stretch fragment"> -->
    <p class="fragment">
      {@html `Grafiek: Begint bij 0V, stijgt exponentieel naar \(V_S\). Op \(t=\tau\), \( v_C(\tau) \approx 0.632 V_S \).`}
    </p>
  </section>

  <!-- Slide 18: Exercise 4.1 - Problem -->
  <section>
    <h2>Deel 3: Oefeningen - Opgave 4.1</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-17-0.png" alt="Exercise 4.1 Problem 1"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-17-1.png" alt="Exercise 4.1 Problem 2"> -->
    <p>
      {@html `<strong>Opgave:</strong> Ontladende kring met R=5kΩ, C=1µF. Vind de tijd \`t\` waarop de spanning \( v_C(t) \) gedaald is tot 1% van de beginwaarde \(V_i\).`}
    </p>
    <p>{@html `(\( v_C(t) = 0.01 V_i \))`}</p>
  </section>

  <!-- Slide 19: Exercise 4.1 - Solution -->
  <section>
    <h2>Oefening 4.1 - Oplossing</h2>
    <p>{@html `Gebruik de ontlaadformule: \( v_C(t) = V_i e^{-t/\tau} \)`}</p>
    <p class="fragment">
      {@html `Stel gelijk aan de voorwaarde: \( 0.01 V_i = V_i e^{-t/\tau} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-0.png" alt="Solution Step 1"> -->
    <p class="fragment">{@html `Vereenvoudig: \( 0.01 = e^{-t/\tau} \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-1.png" alt="Solution Step 2"> -->
    <p class="fragment">
      {@html `Neem natuurlijke logaritme: \( \ln(0.01) = -t/\tau \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-2.png" alt="Solution Step 3"> -->
    <p class="fragment">{@html `Los op voor t: \( t = -\tau \ln(0.01) \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-3.png" alt="Solution Step 4"> -->
    <p class="fragment">
      {@html `Bereken \( \tau = RC = (5 \times 10^3 \Omega)(1 \times 10^{-6} F) = 5 \times 10^{-3} s = 5 \text{ ms} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-4.png" alt="Solution Step 5"> -->
    <p class="fragment">
      {@html `Bereken t: \( t = -(5 \text{ ms}) \ln(0.01) \approx -(5 \text{ ms})(-4.605) \approx 23.03 \text{ ms} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-18-5.png" alt="Solution Step 6"> -->
  </section>

  <!-- Slide 20: Exercise 4.2 - Problem -->
  <section>
    <h2>Oefening 4.2 - Opgave</h2>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-19-0.png" alt="Exercise 4.2 Problem 1"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-19-1.png" alt="Exercise 4.2 Problem 2"> -->
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-19-2.png" alt="Exercise 4.2 Graph"> -->
    <p>
      {@html `<strong>Opgave:</strong> Toon aan voor de opladende kring dat de raaklijn aan de curve \( v_C(t) \) bij t=0 de eindwaarde \( V_S \) snijdt op tijdstip \( t = \tau \).`}
    </p>
    <p>{@html `Gebruik: \( v_C(t) = V_S (1 - e^{-t/\tau}) \)`}</p>
  </section>

  <!-- Slide 21: Exercise 4.2 - Solution -->
  <section>
    <h2>Oefening 4.2 - Oplossing</h2>
    <p>1. Bepaal de helling (afgeleide):</p>
    <p>
      {@html `\( \frac{dv_C}{dt} = \frac{d}{dt} [V_S (1 - e^{-t/\tau})] = -V_S (-\frac{1}{\tau}) e^{-t/\tau} = \frac{V_S}{\tau} e^{-t/\tau} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-20-0.png" alt="Solution 4.2 Step 1"> -->
    <p class="fragment">2. Bepaal de initiële helling (bij t=0):</p>
    <p>
      {@html `\( \text{Helling}_{t=0} = \frac{V_S}{\tau} e^0 = \frac{V_S}{\tau} \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-20-1.png" alt="Solution 4.2 Step 2"> -->
    <p class="fragment">
      3. Vergelijking van de raaklijn vanuit de oorsprong (0,0):
    </p>
    <p>
      {@html `\( y(t) = \text{Helling}_{t=0} \times t = (\frac{V_S}{\tau}) t \)`}
    </p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-20-2.png" alt="Solution 4.2 Step 3"> -->
    <p class="fragment">
      4. Vind de tijd t waarvoor de raaklijn \( V_S \) bereikt:
    </p>
    <p>{@html `Stel \( y(t) = V_S \): \( V_S = (\frac{V_S}{\tau}) t \)`}</p>
    <p class="fragment">{@html `Los op voor t: \( t = \tau \)`}</p>
    <!-- <img src="/images/lectures/1/NET4-2223-Week-A---EN.pdf-20-3.png" alt="Solution 4.2 Step 4"> -->
    <p class="fragment">Q.E.D.</p>
  </section>

  <!-- Slide 22: Homework -->
  <section>
    <h2>Huiswerk</h2>
    <p>Maak de volgende opgaven uit het boek:</p>
    <ul>
      <li>P4.2</li>
      <li>P4.5</li>
      <li>P4.7</li>
      <li>P4.10</li>
      <li>P4.11</li>
      <li>P4.15</li>
    </ul>
    <p class="mt-6">
      Vergeet niet de <a
        href="/tools/rc-circuit-plotter"
        class="text-blue-600 hover:underline dark:text-blue-400"
        >RC Circuit Plotter</a
      > te gebruiken om je begrip te testen!
    </p>
  </section>
</RevealPresentation>
