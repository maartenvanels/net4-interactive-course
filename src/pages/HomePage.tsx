import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animaties nadat de component is gemount
    setIsLoaded(true);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero sectie met verbeterde gradient */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-16 lg:py-24 mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`space-y-6 ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Netwerken 4 <span className="text-primary-300">Interactief</span>
            </h1>
            <p className="text-xl text-white">
              Een moderne leeromgeving voor het vak Netwerken 4, waarbij
              complexe concepten interactief worden gemaakt.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/lectures/1"
                className="btn-animate bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-md font-medium"
              >
                Start met leren
              </Link>
              <Link
                to="/tools/rc-plotter"
                className="btn-animate bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-md font-medium text-white"
              >
                Bekijk tools
              </Link>
            </div>
          </div>
          <div
            className={`${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <svg viewBox="0 0 600 400" className="w-full h-auto">
                {/* Abstracte visualisatie van elektrische circuits */}
                <rect
                  x="100"
                  y="100"
                  width="400"
                  height="200"
                  rx="20"
                  fill="rgba(255,255,255,0.1)"
                />

                {/* RC Circuit schematisch */}
                <line
                  x1="150"
                  y1="150"
                  x2="200"
                  y2="150"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="300"
                  y1="150"
                  x2="450"
                  y2="150"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="150"
                  y1="250"
                  x2="450"
                  y2="250"
                  stroke="white"
                  strokeWidth="2"
                />

                {/* Resistor */}
                <path
                  d="M 200,150 L 210,130 L 230,170 L 250,130 L 270,170 L 290,130 L 300,150"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <text x="240" y="120" fill="white" fontSize="16">
                  R
                </text>

                {/* Capacitor */}
                <line
                  x1="350"
                  y1="150"
                  x2="350"
                  y2="190"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="330"
                  y1="190"
                  x2="370"
                  y2="190"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="330"
                  y1="210"
                  x2="370"
                  y2="210"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="350"
                  y1="210"
                  x2="350"
                  y2="250"
                  stroke="white"
                  strokeWidth="2"
                />
                <text x="380" y="200" fill="white" fontSize="16">
                  C
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Hoofdinhoud */}
      <section>
        <div
          className={`text-center mb-16 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.7s" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Alles wat je nodig hebt voor Netwerken 4
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Toegang tot lessen, interactieve simulaties en tools om elektrische
            netwerken te begrijpen en te analyseren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Lessen Card */}
          <div
            className={`group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Lessen
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Stapsgewijze uitleg van alle belangrijke concepten uit Netwerken
              4.
            </p>
            <Link
              to="/lectures/1"
              className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 inline-flex items-center"
            >
              Bekijk lessen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Tools Card */}
          <div
            className={`group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "1.1s" }}
          >
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Interactieve Tools
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Simulatietools om circuits te testen en gedrag te visualiseren.
            </p>
            <Link
              to="/tools/rc-plotter"
              className="text-secondary-600 dark:text-secondary-400 font-medium group-hover:text-secondary-700 dark:group-hover:text-secondary-300 inline-flex items-center"
            >
              Gebruik tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Over Card */}
          <div
            className={`group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "1.3s" }}
          >
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Over de cursus
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Leer over het doel en de structuur van de cursus Netwerken 4.
            </p>
            <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 inline-flex items-center cursor-pointer">
              Meer informatie
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Beschikbare content sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div
            className={`space-y-6 ${
              isLoaded ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "1.5s" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Beschikbare lessen
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/lectures/1"
                  className="group flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mr-4 group-hover:scale-110 transition-transform">
                    1
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Les 1: Introductie & RC Circuits
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Basisprincipes van RC-circuits
                    </p>
                  </div>
                </Link>
              </li>
              <li className="opacity-60">
                <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 mr-4">
                    2
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">
                      Les 2: TBD (komt binnenkort)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Geavanceerde concepten
                    </p>
                  </div>
                </div>
              </li>
              <li className="opacity-60">
                <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 mr-4">
                    3
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">
                      Les 3: TBD (komt binnenkort)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Praktische toepassingen
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            className={`space-y-6 ${
              isLoaded ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "1.7s" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Interactieve tools
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/tools/rc-plotter"
                  className="group flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 mr-4 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                      RC-Circuit Simulator
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Experimenteer met RC-circuits en visualiseer gedrag
                    </p>
                  </div>
                </Link>
              </li>
              <li className="opacity-60">
                <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">
                      RL-Circuit Simulator (komt binnenkort)
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Inductie en weerstand simulatie tool
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="p-6 bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Wat kun je leren?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200">
                    Gedrag van RC-circuits begrijpen en visualiseren
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200">
                    Analyseren van tijdconstanten en spanningsverloop
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200">
                    Berekenen van laad- en ontlaadcurves
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
