# Lecture 1: Introduction to RC Circuits

Welcome to the first lecture of Network Theory 4

---

## RC Circuit Fundamentals

- Resistors and capacitors in series
- Time constant: τ = RC
- Charging and discharging behavior

---

## Circuit Diagram

```
   +---/\/\/\/---+
   |             |
   |             |
  +++           ===
  |S|            |
  +++            |
   |             |
   +-------------+
```

Where:

- /\/\/\/ represents a resistor (R)
- === represents a capacitor (C)
- S represents a voltage source

---

## Circuit Equations

For charging:

$$v_C(t) = V_s(1 - e^{-t/\tau})$$

For discharging:

$$v_C(t) = V_0 e^{-t/\tau}$$

Where τ = RC is the time constant

---

## Interactive RC Circuit Tool

Experiment with different R and C values:

[RC Circuit Simulator](/tools/rc-plotter)

---

## Learning Objectives

By the end of this lecture, you should be able to:

1. Understand the behavior of RC circuits
2. Calculate time constants
3. Analyze charging and discharging curves
4. Apply RC circuit concepts to practical examples
