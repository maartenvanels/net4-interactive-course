# Lecture 1: Introduction to Transients & 1st Order RC Networks (DC Source)

## Overview

**Week 1 Topic:** 1st order RC networks – (dis)charging – DC source

This lecture introduces the concept of transient analysis in electrical circuits, focusing on the behavior of simple Resistor-Capacitor (RC) circuits when connected to a DC voltage source. We will cover both the discharging and charging processes.

## Lecture Structure & Content

### 1. Introduction (Slide 1)

- **Image:** `NET4-2223-Week-A---EN.pdf-0-0.png`
- **Key Points:**
  - Welcome and introduction to Networks 4.
  - Focus: Transient (switching) behavior.
  - Contrast with steady-state DC (Net1) and AC (Net2, Net3).
  - Method: Time-domain analysis (Laplace transforms mentioned for later).

### 2. NET4 in Context (Slide 2)

- **Key Points:**
  - Position NET4 within the Networks curriculum.
  - Introduce analysis of circuits immediately after switching events.
  - Mention solving first-order differential equations (homogeneous, complementary).
  - Distinguish between steady-state and transient responses.

### 3. Switching Behaviour (Slide 3)

- **Key Points:**
  - Reiterate focus on time-domain solutions.

### 4. Course Program (Slide 4)

- **Key Points:**
  - Show the weekly plan.
  - Highlight today's topic: **1st order RC networks, DC source, (dis)charging**.

### 5. Recap: Capacitor & Inductor (Slide 5)

- **Image:** `NET4-2223-Week-A---EN.pdf-4-0.png`
- **Key Points (Capacitor Focus):**
  - Review \( i = C \\frac{dv}{dt} \) and \( v = \\frac{1}{C} \\int i(t) dt \).
  - **Crucial:** Capacitor voltage cannot change instantaneously.
  - Energy stored: \( W = \\frac{1}{2}Cv^2 \) (Electric field).
- **Key Points (Inductor Mention):**
  - Review \( v = L \\frac{di}{dt} \) and \( i = \\frac{1}{L} \\int v(t) dt \).
  - Inductor current cannot change instantaneously.
  - Energy stored: \( W = \\frac{1}{2}Li^2 \) (Magnetic field).

### 6. Part 1: Discharging a Capacitor

#### 6.1 Scenario & Intuition (Slides 6 & 7)

- **Image (Scenario):** `NET4-2223-Week-A---EN.pdf-5-0.png`
- **Image (Graph):** `NET4-2223-Week-A---EN.pdf-6-0.png`
- **Key Points:**
  - Introduce the discharging circuit: Capacitor `C` charged to `Vi` discharges through `R` when the switch closes at `t=0`.
  - Example values: Vi = 100V, C = 10 µF, R = 1 MΩ.
  - Ask for intuitive predictions: Voltage should decrease.

#### 6.2 Exponential Decay & Time Constant (Slide 8)

- **Image (Graph):** `NET4-2223-Week-A---EN.pdf-7-0.png`
- **Image (Formula):** `NET4-2223-Week-A---EN.pdf-7-1.png`
- **Image (Tau):** `NET4-2223-Week-A---EN.pdf-7-2.png`
- **Key Points:**
  - Show the exponential decay shape of \( v_C(t) \).
  - Define the **time constant**: \( \\tau = RC \).
  - Characteristic points: \( v_C(\\tau) \\approx 0.368 V_i \), \( v_C(2\\tau) \\approx 0.135 V_i \).
  - Mention 5τ rule of thumb (<1% remaining).

#### 6.3 Deriving the Solution (Slides 9 - 11)

- **Image (Circuit):** `NET4-2223-Week-A---EN.pdf-8-0.png` (analytic solution goal)
- **Image (KCL Setup):** `NET4-2223-Week-A---EN.pdf-9-0.png`
- **Image (KCL Equation):** `NET4-2223-Week-A---EN.pdf-9-1.png`
- **Image (Differential Eq):** `NET4-2223-Week-A---EN.pdf-9-2.png` / `NET4-2223-Week-A---EN.pdf-10-0.png`
- **Image (Rearranged Eq):** `NET4-2223-Week-A---EN.pdf-10-1.png` / `NET4-2223-Week-A---EN.pdf-10-2.png`
- **Key Points:**
  - Goal: Find the mathematical expression for \( v_C(t) \).
  - Apply KCL at the top node (for \( t > 0 \)): \( i_C + i_R = 0 \).
  - Substitute component equations: \( C \\frac{dv_C}{dt} + \\frac{v_C(t)}{R} = 0 \).
  - Rearrange to standard form: \( \\frac{dv_C}{dt} + \\frac{1}{RC} v_C(t) = 0 \) or \( RC \\frac{dv_C}{dt} + v_C(t) = 0 \). This is a first-order homogeneous linear differential equation.

#### 6.4 Solving the Differential Equation (Slide 12)

- **Image (Header):** `NET4-2223-Week-A---EN.pdf-11-1.png`
- **Image (Guess):** `NET4-2223-Week-A---EN.pdf-11-0.png` / `NET4-2223-Week-A---EN.pdf-11-2.png`
- **Image (Derivative):** `NET4-2223-Week-A---EN.pdf-11-3.png`
- **Image (Substitution):** `NET4-2223-Week-A---EN.pdf-11-4.png`
- **Image (Characteristic Eq):** `NET4-2223-Week-A---EN.pdf-11-5.png`
- **Image (Solve for s):** `NET4-2223-Week-A---EN.pdf-11-6.png`
- **Key Points:**
  - Assume solution form: \( v_C(t) = K e^{st} \).
  - Substitute into the differential equation.
  - Derive the characteristic equation: \( RCs + 1 = 0 \).
  - Solve for \( s = -\\frac{1}{RC} \).
  - General solution: \( v_C(t) = K e^{-t/RC} \).

#### 6.5 Applying Initial Conditions (Slides 13 - 15)

- **Image (Graph):** `NET4-2223-Week-A---EN.pdf-12-0.png`
- **Image (Formula):** `NET4-2223-Week-A---EN.pdf-12-1.png` / `NET4-2223-Week-A---EN.pdf-12-2.png` (with \( \\tau \))
- **Image (Finding K):** `NET4-2223-Week-A---EN.pdf-13-0.png` / `NET4-2223-Week-A---EN.pdf-13-1.png`
- **Image (Continuity):** `NET4-2223-Week-A---EN.pdf-14-0.png` / `NET4-2223-Week-A---EN.pdf-14-1.png` / `NET4-2223-Week-A---EN.pdf-14-2.png`
- **Key Points:**
  - Relate solution back to exponential decay graph and \( \\tau \).
  - Constant `K` determined by initial condition.
  - **Initial Condition:** \( v_C(0^+) = v_C(0^-) = V_i \) (voltage continuity).
  - Apply to general solution: \( v_C(0^+) = K e^0 = K \implies K = V_i \).
  - **Final Solution (Discharging):** \( v_C(t) = V_i e^{-t/RC} = V_i e^{-t/\\tau} \) for \( t \\ge 0 \).

### 7. Part 2: Charging a Capacitor

#### 7.1 Scenario & Analysis (Slides 16 & 17)

- **Image (Circuit):** `NET4-2223-Week-A---EN.pdf-15-0.png`
- **Image (KVL Eq):** `NET4-2223-Week-A---EN.pdf-16-0.png`
- **Image (Formula & Graph):** `NET4-2223-Week-A---EN.pdf-16-1.png`
- **Key Points:**
  - Introduce charging circuit: DC source \( V_S \), resistor `R`, initially uncharged capacitor `C` (\( v_C(0^-) = 0 \)), switch closes at `t=0`.
  - Apply KVL (for \( t > 0 \)): \( -V_S + v_R(t) + v_C(t) = 0 \).
  - Substitute \( v_R = R i_C = RC \\frac{dv_C}{dt} \): \( -V_S + RC \\frac{dv_C}{dt} + v_C(t) = 0 \).
  - Differential Equation (Charging): \( RC \\frac{dv_C}{dt} + v_C(t) = V_S \). (First-order non-homogeneous).
  - State the solution (derivation optional for Lecture 1): \( v_C(t) = V_S + A e^{-t/\\tau} \).
  - Apply initial condition \( v_C(0^+) = 0 \): \( 0 = V_S + A e^0 \implies A = -V_S \).
  - **Final Solution (Charging from 0V):** \( v_C(t) = V_S - V_S e^{-t/RC} = V_S (1 - e^{-t/\\tau}) \) for \( t \\ge 0 \).
  - Discuss graph: Starts at 0V, rises exponentially towards \( V_S \). At \( t=\\tau \), \( v_C(\\tau) \\approx 0.632 V_S \).

### 8. Part 3: Exercises

#### 8.1 Exercise 4.1 (Discharging - Time Calculation) (Slides 18 & 19)

- **Image (Problem):** `NET4-2223-Week-A---EN.pdf-17-0.png` / `NET4-2223-Week-A---EN.pdf-17-1.png`
- **Image (Solution Steps):** `NET4-2223-Week-A---EN.pdf-18-0.png` to `NET4-2223-Week-A---EN.pdf-18-5.png`
- **Problem:** Discharging circuit, R=5kΩ, C=1µF. Find time `t` when \( v_C(t) = 0.01 V_i \).
- **Solution Walkthrough:**
  - Use \( v_C(t) = V_i e^{-t/\\tau} \). Set \( v_C(t) = 0.01 V_i \).
  - Solve for `t`: \( t = -RC \\ln(0.01) \).
  - Calculate \( \\tau = RC = 5 \\text{ ms} \).
  - Calculate \( t = -(5 \\text{ ms}) \\ln(0.01) \\approx 23 \\text{ ms} \).

#### 8.2 Exercise 4.2 (Charging - Initial Slope) (Slides 20 & 21)

- **Image (Problem):** `NET4-2223-Week-A---EN.pdf-19-0.png` / `NET4-2223-Week-A---EN.pdf-19-1.png`
- **Image (Graph/Formula):** `NET4-2223-Week-A---EN.pdf-19-2.png`
- **Image (Solution Steps):** `NET4-2223-Week-A---EN.pdf-20-0.png` to `NET4-2223-Week-A---EN.pdf-20-3.png`
- **Problem:** Show for charging circuit that the initial slope of \( v_C(t) \) intersects the final value \( V_S \) at \( t = \\tau \). Use \( v_C(t) = V_S (1 - e^{-t/\\tau}) \).
- **Solution Walkthrough:**
  - Find slope: \( \\frac{dv_C}{dt} = \\frac{V_S}{\\tau} e^{-t/\\tau} \).
  - Initial slope (t=0): \( \\text{slope}\_{t=0} = \\frac{V_S}{\\tau} \).
  - Equation of tangent line from origin: \( y(t) = (\\frac{V_S}{\\tau}) t \).
  - Find time when \( y(t) = V_S \): \( V_S = (\\frac{V_S}{\\tau}) t \implies t = \\tau \).

### 9. Homework (Slide 22)

- **Key Points:** Assign problems P4.2, P4.5, P4.7, P4.10, P4.11, P4.15.

## Notes for Delivery

- Emphasize the importance of understanding the behavior of capacitors (voltage continuity).
- Clearly distinguish between charging and discharging scenarios and their respective differential equations and solutions.
- Work through the derivations step-by-step.
- Relate the mathematical formulas back to the circuit behavior and graphical representations.
- Encourage questions and interaction.
