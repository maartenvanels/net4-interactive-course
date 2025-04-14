# Les 1: Introductie Transiënten & 1e Orde RC Netwerken

- Welkom bij Netwerken 4!
- Focus: Transiënt (schakel) gedrag
- Contrast met stationaire DC (Net1) en AC (Net2, Net3)
- Methode: Tijddomein-analyse (Laplace-transformaties later)

---

## NET4 in Context

- Positie binnen het Netwerken curriculum
- Analyse van circuits direct na schakelmomenten
- Oplossen van eerste-orde differentiaalvergelijkingen (homogeen, complementair)
- Onderscheid tussen stationaire en transiënte responsies

---

## Schakelgedrag

- Focus op tijddomein-oplossingen voor circuitgedrag na een schakelgebeurtenis.

---

## Cursusprogramma

- (Placeholder: Toon weekplanning afbeelding/tabel)
- Onderwerp van vandaag: **1e orde RC netwerken, DC bron, (ont)laden**

---

## Herhaling: Condensator & Spoel

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-4-0.png -->

**Condensator:**

- $$ i = C \frac{dv}{dt} $$
- $$ v = \frac{1}{C} \int i(t) dt $$
- **Cruciaal:** Condensatorspanning kan _niet_ ogenblikkelijk veranderen.
- Opgeslagen energie: $$ W = \frac{1}{2}Cv^2 $$ (Elektrisch veld)

**Spoel (kort):**

- $$ v = L \frac{di}{dt} $$
- $$ i = \frac{1}{L} \int v(t) dt $$
- Spoelstroom kan _niet_ ogenblikkelijk veranderen.
- Opgeslagen energie: $$ W = \frac{1}{2}Li^2 $$ (Magnetisch veld)

---

## Deel 1: Ontladen van een Condensator

### Scenario

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-5-0.png -->

- Condensator `C` opgeladen tot `Vi`
- Ontlaadt door `R` wanneer schakelaar sluit op `t=0`
- Voorbeeld: Vi = 100V, C = 10 µF, R = 1 MΩ

---

### Intuïtie & Exponentiële Afname

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-6-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-7-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-7-1.png -->

- Spanning $$ v_C(t) $$ neemt af over tijd.
- Vorm is een **exponentiële afname**.
- **Tijdconstante:** $$ \tau = RC $$
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-7-2.png -->
- Significantie:
  - $$ v_C(\tau) \approx 0.368 V_i $$
  - $$ v_C(2\tau) \approx 0.135 V_i $$
- Vuistregel: Na $$ 5\tau $$ wordt de condensator als volledig ontladen beschouwd (<1% over).

---

### Afleiding van de Oplossing (Ontladen)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-8-0.png -->

Doel: Vind de wiskundige uitdrukking voor $$ v_C(t) $$.

---

### KCL Analyse

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-9-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-9-1.png -->

Pas KCL toe op het bovenste knooppunt voor $$ t > 0 $$:
$$ i_C(t) + i_R(t) = 0 $$

Substitueer componentvergelijkingen:
$$ C \frac{dv_C}{dt} + \frac{v_C(t)}{R} = 0 $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-9-2.png -->

---

### Eerste-Orde Homogene Differentiaalvergelijking

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-10-0.png -->

Herschrijf de vergelijking:
$$ \frac{dv_C}{dt} + \frac{1}{RC} v_C(t) = 0 $$
of
$$ RC \frac{dv_C}{dt} + v_C(t) = 0 $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-10-1.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-10-2.png -->

Dit is een eerste-orde homogene lineaire differentiaalvergelijking.

---

### Oplossen van de Differentiaalvergelijking

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-1.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-0.png -->

Neem aan dat de oplossing de vorm heeft: $$ v_C(t) = K e^{st} $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-2.png -->

Afgeleide: $$ \frac{dv_C}{dt} = K s e^{st} $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-3.png -->

Substitueer in de differentiaalvergelijking:
$$ RC (K s e^{st}) + (K e^{st}) = 0 $$
$$ K e^{st} (RCs + 1) = 0 $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-4.png -->

Aangezien $$ K e^{st} $$ niet nul kan zijn voor een niet-triviale oplossing:
**Karakteristieke vergelijking:** $$ RCs + 1 = 0 $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-5.png -->

Oplossen voor s: $$ s = -\frac{1}{RC} $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-11-6.png -->

Algemene oplossingsvorm: $$ v_C(t) = K e^{-t/RC} $$

---

### Toepassen van Beginvoorwaarden (Ontladen)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-12-0.png -->

Algemene oplossing: $$ v_C(t) = K e^{-t/\tau} $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-12-1.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-12-2.png -->

We moeten de constante `K` vinden met behulp van de beginvoorwaarde.

---

### Spanningscontinuïteit

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-14-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-14-1.png -->

Condensatorspanning kan niet ogenblikkelijk veranderen.
Daarom: $$ v_C(0^+) = v_C(0^-) = V_i $$
(Waar $$ V_i $$ de beginspanning is op $$ t=0^- $$)

---

### Eindoplossing (Ontladen)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-13-0.png -->

Pas beginvoorwaarde toe op de algemene oplossing:
$$ v_C(0^+) = K e^{-0/\tau} = K e^0 = K $$
Aangezien $$ v_C(0^+) = V_i $$, hebben we $$ K = V_i $$.

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-13-1.png -->

**Oplossing:** $$ v_C(t) = V_i e^{-t/RC} = V_i e^{-t/\tau} \quad \text{voor } t \ge 0 $$

---

## Deel 2: Opladen van een Condensator

### Scenario & Analyse

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-15-0.png -->

- DC Bron $$ V_S $$, Weerstand `R`, Condensator `C`
- Initieel ongeladen: $$ v_C(0^-) = 0 $$
- Schakelaar sluit op `t=0`

Pas KVL toe voor $$ t > 0 $$:
$$ -V_S + v_R(t) + v_C(t) = 0 $$

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-16-0.png -->

Substitueer $$ v_R = R i_C = RC \frac{dv_C}{dt} $$:
$$ -V_S + RC \frac{dv_C}{dt} + v_C(t) = 0 $$

Differentiaalvergelijking (Opladen):
$$ RC \frac{dv_C}{dt} + v_C(t) = V_S $$
(Eerste-orde niet-homogeen)

---

### Oplossing (Opladen vanaf 0V)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-16-1.png -->

De algemene oplossingsvorm is: $$ v_C(t) = V_S + A e^{-t/\tau} $$
(Afleiding omvat het vinden van complementaire en particuliere oplossingen)

Pas beginvoorwaarde $$ v_C(0^+) = v_C(0^-) = 0 $$ toe:
$$ 0 = V_S + A e^{-0/\tau} = V_S + A $$
$$ A = -V_S $$

**Eindoplossing (Opladen vanaf 0V):**
$$ v_C(t) = V_S - V_S e^{-t/RC} = V_S (1 - e^{-t/\tau}) \quad \text{voor } t \ge 0 $$

- Grafiek start op 0V, stijgt exponentieel naar $$ V_S $$.
- Op $$ t=\tau $$, $$ v_C(\tau) = V_S(1 - e^{-1}) \approx 0.632 V_S $$.

---

## Deel 3: Oefeningen

### Oefening 4.1 (Ontlaadtijd)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-17-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-17-1.png -->

**Opgave:** Ontlaadcircuit, R=5kΩ, C=1µF, beginspanning $$V_i$$. Vind tijd `t` wanneer $$ v_C(t) = 0.01 V_i $$.

---

### Oefening 4.1 - Oplossing

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-18-0.png tot 18-5.png -->

Gebruik de ontlaadformule: $$ v_C(t) = V_i e^{-t/\tau} $$
Stel $$ v_C(t) = 0.01 V_i $$:
$$ 0.01 V_i = V_i e^{-t/\tau} $$
$$ 0.01 = e^{-t/\tau} $$
Neem natuurlijke logaritme: $$ \ln(0.01) = -t/\tau $$
Los op voor t: $$ t = -\tau \ln(0.01) $$
Bereken tijdconstante: $$ \tau = RC = (5 \times 10^3 \Omega)(1 \times 10^{-6} \text{ F}) = 5 \times 10^{-3} \text{ s} = 5 \text{ ms} $$
Bereken t: $$ t = -(5 \text{ ms}) \ln(0.01) \approx -(5 \text{ ms})(-4.605) \approx 23.03 \text{ ms} $$

---

### Oefening 4.2 (Oplaadhelling)

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-19-0.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-19-1.png -->
<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-19-2.png -->

**Opgave:** Toon aan voor het oplaadcircuit dat de beginhelling van $$ v_C(t) $$ (raaklijn op t=0) de eindwaarde $$ V_S $$ snijdt op tijdstip $$ t = \tau $$.

---

### Oefening 4.2 - Oplossing

<!-- Placeholder voor Afbeelding: NET4-2223-Week-A---EN.pdf-20-0.png tot 20-3.png -->

Oplaadvergelijking: $$ v_C(t) = V_S (1 - e^{-t/\tau}) $$
Vind de helling (afgeleide):
$$ \frac{dv_C}{dt} = V_S (0 - (-\frac{1}{\tau}) e^{-t/\tau}) = \frac{V_S}{\tau} e^{-t/\tau} $$
Beginhelling (op t=0):
$$ \text{helling}\_{t=0} = \frac{V_S}{\tau} e^{0} = \frac{V_S}{\tau} $$
Vergelijking van de raaklijn vanuit de oorsprong (aangezien $$v_C(0)=0$$):
$$ y(t) = (\text{beginhelling}) \times t = \frac{V_S}{\tau} t $$
Vind de tijd `t` wanneer deze raaklijn de eindspanning $$ V_S $$ bereikt:
$$ V_S = \frac{V_S}{\tau} t $$
$$ 1 = \frac{1}{\tau} t $$
$$ t = \tau $$
De beginhelling snijdt inderdaad de eindwaarde $$V_S$$ op $$t=\tau$$.

---

## Interactieve RC Circuit Tool

Experimenteer met verschillende R en C waarden om deze concepten in actie te zien:

[RC Circuit Simulator](/tools/rc-plotter)

---

## Huiswerk

- Opgaven: P4.2, P4.5, P4.7, P4.10, P4.11, P4.15.

<!-- Einde Presentatie -->
