import React from "react";
import RevealPresentation from "../../components/shared/RevealPresentation";
import { Link } from "react-router-dom";

const Lecture1Page: React.FC = () => {
  return (
    <div className="h-full">
      <RevealPresentation>
        <section>
          <h2>Lecture 1: Introduction to RC Circuits</h2>
          <p>Welcome to the first lecture of Network Theory 4</p>
        </section>

        <section>
          <h3>RC Circuit Fundamentals</h3>
          <ul>
            <li>Resistors and capacitors in series</li>
            <li>Time constant: τ = RC</li>
            <li>Charging and discharging behavior</li>
          </ul>
        </section>

        <section>
          <h3>Interactive RC Circuit Tool</h3>
          <p>Experiment with different R and C values:</p>
          <Link
            to="/tools/rc-plotter"
            className="inline-block mt-4 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            RC Circuit Simulator
          </Link>
        </section>
      </RevealPresentation>
    </div>
  );
};

export default Lecture1Page;
