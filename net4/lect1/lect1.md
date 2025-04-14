Okay, here is the presentation converted to Markdown format, with placeholders for the images. You would need to replace `"Image_Slide_X.png"` with the actual path or URL to each image.

---

# NETWORKS 4
## Week A_

**ACADEMY OF ENGINEERING AND AUTOMOTIVE**
**ELECTRICAL AND ELECTRONIC ENGINEERING**

*Ronald van Buuren*
*April 2023*

![Slide 1](Image_Slide_1.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## NET4 IN THE NET SERIES

*   **Net1:** constant voltage & current (DC)
*   **Net2:** sinusoidal voltage & current (AC)
*   **Net3:** sinusoidal voltage & current (AC), variation in frequency
*   **Net4:** transient (switching) behavior of systems
    *   1st order networks, DC source
    *   1st order networks, switching DC source
    *   Solving differential equations
        *   Homogeneous solution
        *   Complementary solution
    *   Steady-state situation
    *   Complementary solution for sinusoidal & exponential sources

![Slide 2](Image_Slide_2.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## SWITCHING BEHAVIOUR

*   NET4: solve in time domain
*   Next year: solve in frequency domain
    *   Laplace transformation

![Slide 3](Image_Slide_3.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## NET4 PROGRAM BY WEEK

1.  1st order RC networks – (dis)charging – DC source
2.  1st order RC networks – (dis)charging - switched DC source
3.  RL networks – Steady-state DC
4.  RL networks – Switched DC source
5.  RC & RL networks - complementary solution
6.  <spare week>
7.  Sample Exam

![Slide 4](Image_Slide_4.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## REMEMBER NET2: CAPACITOR & INDUCTOR

| Feature           | Capacitor                     | Inductor                      |
|-------------------|-------------------------------|-------------------------------|
| **Voltage**       | `v = (1/C) ∫ i(t) dt`         | `v = L (di/dt)`               |
| **Current**       | `i = C (dv/dt)`               | `i = (1/L) ∫ v(t) dt`         |
| **Power**         | `P(t) = v(t) * i(t)`          | `P(t) = v(t) * i(t)`          |
| **Energy**        | `W(t) = (1/2) C v^2(t)`       | `W(t) = (1/2) L i^2(t)`       |
| **Energy stored in:** | Electric field              | Magnetic field              |

![Slide 5](Image_Slide_5.png)
*Note: The image highlights the Voltage formula for Capacitor and the Current formula for Inductor.*

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## DISCHARGING A CAPACITOR: ESTIMATIONS

**Parameters:**
*   Initial Voltage (Vi) = 100 V
*   Capacitance (C) = 10 μF
*   Resistance (R) = 1 MΩ

**Circuit:** A capacitor (C), initially charged to voltage Vi, is connected in series with a resistor (R) when a switch closes at time t=0. We are interested in the capacitor voltage `vc(t)` after t=0.

![Slide 6](Image_Slide_6.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## WHAT WILL HAPPEN AFTER TIME=0?

The graph shows the capacitor voltage `vc(t)` over time `t`, starting from the initial voltage `Vi` at `t=0`. The time constant `τ = RC` is indicated.

![Slide 7](Image_Slide_7.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## SPOILER: IT'S AN EXPONENTIAL DECAY

The capacitor voltage follows an exponential decay:
`vc(t) = Vi * e^(-t/RC)`

Where the time constant is:
`τ = RC`

The graph shows:
*   `vc(t)` starts at `Vi` and decays exponentially.
*   At `t = τ`, the voltage drops to `Vi * e^(-1)` ≈ `0.368 * Vi`.

![Slide 8](Image_Slide_8.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## DISCHARGING A CAPACITOR: ANALYTIC SOLUTION

**Circuit Parameters:**
*   Initial Voltage (Vi) = 100 V
*   Capacitance (C) = 10 μF
*   Resistance (R) = 1 MΩ

We will now derive the analytic solution for `vc(t)` for t ≥ 0.

![Slide 9](Image_Slide_9.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## DISCHARGING A CAPACITOR: KCL

Applying Kirchhoff's Current Law (KCL) at the top node (after t=0):
*   Sum of currents leaving the node = 0

Current through capacitor: `ic(t) = C * (dvc(t) / dt)` (highlighted in image)
Current through resistor: `ir(t) = vc(t) / R`

KCL equation: `ic(t) + ir(t) = 0`
Substituting the expressions:
`C * (dvc(t) / dt) + vc(t) / R = 0`

![Slide 10](Image_Slide_10.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## DIFFERENTIAL EQUATION

The KCL analysis leads to the following first-order differential equation for the capacitor voltage `vc(t)` for t ≥ 0:

`C * (dvc(t) / dt) + vc(t) / R = 0`

Multiplying by R, we get the standard form:

`RC * (dvc(t) / dt) + vc(t) = 0`

![Slide 11](Image_Slide_11.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## DIFFERENTIAL EQUATION: HOW TO SOLVE

We need to solve: `RC * (dvc(t) / dt) + vc(t) = 0`

**Method: Educated Guess**
Assume a solution of the form:
`vc(t) = K * e^(st)` (Eq. 4.2)

Then the derivative is:
`dvc(t) / dt = K * s * e^(st)`

Substitute into the differential equation:
`RC * (K * s * e^(st)) + (K * e^(st)) = 0`
`K * e^(st) * (RC * s + 1) = 0` (Eq. 4.3)

For a non-trivial solution (K ≠ 0, e^(st) ≠ 0), we must have:
`RC * s + 1 = 0`
`s = -1 / RC` (Eq. 4.4)

So the general form of the solution is `vc(t) = K * e^(-t / RC)`.

![Slide 12](Image_Slide_12.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## INDEED IT'S AN EXPONENTIAL DECAY

The solution to the differential equation confirms the exponential decay:
`vc(t) = K * e^(-t/RC)`

The graph illustrates this behavior with `τ = RC`.

![Slide 13](Image_Slide_13.png)
*(Image shows `vc(t) = Vi * e^(-t/RC)`, implying K=Vi. This is determined next.)*

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## HOW DID YOU FIND K=Vi?

We found the general solution form: `vc(t) = K * e^(-t/RC)`. (Derived from Eq. 4.2 with `s = -1/RC`)
The graph and previous slides show the specific solution: `vc(t) = Vi * e^(-t/RC)`.

How is the constant `K` determined to be equal to the initial voltage `Vi`?

![Slide 14](Image_Slide_14.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## LOOK AT T=0 S: MUST BE CONTINUOUS

The constant `K` is found using the **initial condition** at t=0.

*   **Principle:** The voltage across a capacitor cannot change instantaneously. It must be continuous.
*   **Condition:** The capacitor was charged to `Vi` *before* t=0. Therefore, the voltage *just after* the switch closes (at `t=0+`) must still be `Vi`.
*   Mathematically: `vc(0+) = Vi` (Eq. 4.6)

Now, evaluate the general solution `vc(t) = K * e^(-t/RC)` at `t=0`:
`vc(0+) = K * e^(-0/RC) = K * e^0 = K * 1 = K`

Equating the initial condition and the evaluated solution:
`K = Vi`

So, the specific solution is `vc(t) = Vi * e^(-t/RC)`.

![Slide 15](Image_Slide_15.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## CHARGING A CAPACITOR

This section considers the case of charging an initially uncharged capacitor.

**Circuit:** A DC voltage source `Vs` is connected in series with a resistor `R` and a capacitor `C` via a switch that closes at `t=0`. Assume the capacitor is initially uncharged (`vc(0) = 0`).

![Slide 16](Image_Slide_16.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## CHARGING A CAPACITOR

The voltage across the capacitor during charging (assuming `vc(0)=0`) is given by:
`vc(t) = Vs * (1 - e^(-t/τ))` (Eq. 4.20)
where `τ = RC`.

The graph shows:
*   `vc(t)` starts at 0 and rises exponentially towards the final value `Vs`.
*   At `t = τ`, the voltage reaches `Vs * (1 - e^(-1))` ≈ `0.632 * Vs`.

![Slide 17](Image_Slide_17.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## EXERCISE 4.1

**Exercise 4.1:** Suppose that `R = 5000 Ω` and `C = 1 µF` in the discharging capacitor circuit shown (Figure 4.1a). Find the time `t` at which the voltage across the capacitor `vc(t)` reaches 1 percent of its initial value `Vi`.

![Slide 18](Image_Slide_18.png)
*(Circuit shows capacitor C initially charged to Vi, discharging through R after t=0)*

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## EXERCISE 4.1 - SOLUTION

**Problem:** Find `t` when `vc(t) = 0.01 * Vi` for `R = 5000 Ω`, `C = 1 µF` in the discharging circuit.

**Solution:**
1.  Start with the discharge equation: `vc(t) = Vi * e^(-t/RC)`
2.  Set the condition: `vc(t) / Vi = 0.01`
3.  Substitute the equation: `(Vi * e^(-t/RC)) / Vi = 0.01`
4.  Simplify: `e^(-t/RC) = 0.01`
5.  Take the natural logarithm of both sides: `-t / RC = ln(0.01)`
6.  Solve for `t`: `t = -RC * ln(0.01)`
7.  Calculate `RC`: `τ = RC = (5000 Ω) * (1 * 10^-6 F) = 5 * 10^-3 s = 5 ms`
8.  Calculate `t`: `t = -(5 ms) * ln(0.01) ≈ -(5 ms) * (-4.605) ≈ 23.03 ms`

**Answer:** `t ≈ 23 ms`

![Slide 19](Image_Slide_19.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## EXERCISE 4.2

**Exercise 4.2:** Show that if the initial slope (at t=0) of the charging curve `vc(t)` is extended as a straight line, it intersects the final value `Vs` at time `t = τ` (one time constant), as shown in the figure (Figure 4.4).
Use the expression for `vc(t)` during charging (Eq. 4.20):
`vc(t) = Vs * (1 - e^(-t/τ))`

![Slide 20](Image_Slide_20.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## EXERCISE 4.2 – SOLUTION STEP 1

**Problem:** Show the initial slope of `vc(t) = Vs * (1 - e^(-t/τ))` intersects `Vs` at `t=τ`.

**Step 1: Find the initial slope**
1.  The voltage is: `vc(t) = Vs * (1 - e^(-t/τ))`
2.  The slope is the derivative: `dvc(t)/dt`
3.  `dvc(t)/dt = d/dt [ Vs * (1 - e^(-t/τ)) ]`
4.  `dvc(t)/dt = Vs * d/dt [ 1 - e^(-t/τ) ]`
5.  `dvc(t)/dt = Vs * [ 0 - e^(-t/τ) * (-1/τ) ]`
6.  `dvc(t)/dt = Vs * (1/τ) * e^(-t/τ)`
7.  Evaluate the slope at `t=0`:
    `Slope(t=0) = Vs * (1/τ) * e^(-0/τ) = Vs * (1/τ) * 1 = Vs / τ`

So, the initial slope at `t=0` is `Vs / τ`.

*(Note: The next step would be to find the equation of the tangent line at t=0 and see where it intersects the line y=Vs)*

![Slide 21](Image_Slide_21.png)

*Copyright ©2018 Pearson Education, All Rights Reserved.*
*HAN UNIVERSITY OF APPLIED SCIENCES*

---

## PROBLEMS TO FINISH BEFORE NEXT CLASS

*   P4.2
*   P4.5
*   P4.7
*   P4.10
*   P4.11
*   P4.15

![Slide 22](Image_Slide_22.png)

*HAN UNIVERSITY OF APPLIED SCIENCES*

---