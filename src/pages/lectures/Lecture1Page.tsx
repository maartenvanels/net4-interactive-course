import React from "react";
import RevealPresentation from "../../components/shared/RevealPresentation";

const Lecture1Page: React.FC = () => {
  // Define the presentation content in Markdown format
  const markdownContent = `
# Lecture 1: Introduction to RC Circuits

Welcome to the first lecture of Network Theory 4

---

## RC Circuit Fundamentals

* Resistors and capacitors in series
* Time constant: τ = RC
* Charging and discharging behavior

---

## Circuit Equations

For charging:

$v_C(t) = V_s(1 - e^{-t/\\tau})$

For discharging:

$v_C(t) = V_0 e^{-t/\\tau}$

Where τ = RC is the time constant

---

## Interactive RC Circuit Tool

Experiment with different R and C values:

[RC Circuit Simulator](/tools/rc-plotter) {.inline-block .mt-4 .bg-primary-600 .hover:bg-primary-700 .text-white .font-bold .py-2 .px-4 .rounded .transition-colors}
  `;

  return (
    <div className="h-full">
      <RevealPresentation markdownContent={markdownContent} />
    </div>
  );
};

export default Lecture1Page;
