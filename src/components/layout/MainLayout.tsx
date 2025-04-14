import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeToggleButton from "../shared/ThemeToggleButton";

const MainLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLessonsOpen, setIsLessonsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLessonsOpen(false);
      setIsToolsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded flex items-center justify-center text-white font-bold">
                N4
              </div>
              <span className="font-bold text-xl hidden sm:block">
                Netwerken 4
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">
                Home
              </Link>

              {/* Lessons Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  className="nav-link flex items-center"
                  onClick={() => {
                    setIsLessonsOpen(!isLessonsOpen);
                    setIsToolsOpen(false);
                  }}
                >
                  <span>Lessen</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isLessonsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLessonsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
                    <Link
                      to="/lectures/1"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Les 1: Introductie
                    </Link>
                    <span className="block px-4 py-2 text-sm text-gray-400 dark:text-gray-500">
                      Les 2: Komt binnenkort
                    </span>
                    <span className="block px-4 py-2 text-sm text-gray-400 dark:text-gray-500">
                      Les 3: Komt binnenkort
                    </span>
                  </div>
                )}
              </div>

              {/* Tools Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  className="nav-link flex items-center"
                  onClick={() => {
                    setIsToolsOpen(!isToolsOpen);
                    setIsLessonsOpen(false);
                  }}
                >
                  <span>Tools</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isToolsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isToolsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
                    <Link
                      to="/tools/rc-plotter"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      RC Circuit Plotter
                    </Link>
                    <span className="block px-4 py-2 text-sm text-gray-400 dark:text-gray-500">
                      RL Circuit Plotter (Binnenkort)
                    </span>
                  </div>
                )}
              </div>

              <Link to="/about" className="nav-link">
                Over Ons
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggleButton />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <nav className="px-4 py-3 space-y-2">
              <Link
                to="/"
                className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsLessonsOpen(!isLessonsOpen)}
                >
                  <span>Lessen</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isLessonsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLessonsOpen && (
                  <div className="mt-1 pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
                    <Link
                      to="/lectures/1"
                      className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Les 1: Introductie
                    </Link>
                    <span className="block py-2 px-3 text-gray-400 dark:text-gray-500">
                      Les 2: Komt binnenkort
                    </span>
                    <span className="block py-2 px-3 text-gray-400 dark:text-gray-500">
                      Les 3: Komt binnenkort
                    </span>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                >
                  <span>Tools</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isToolsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isToolsOpen && (
                  <div className="mt-1 pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
                    <Link
                      to="/tools/rc-plotter"
                      className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      RC Circuit Plotter
                    </Link>
                    <span className="block py-2 px-3 text-gray-400 dark:text-gray-500">
                      RL Circuit Plotter (Binnenkort)
                    </span>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Over Ons
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Netwerken 4</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Een interactieve leeromgeving voor het vak Netwerken 4.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navigatie</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lectures/1"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Lessen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tools/rc-plotter"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Over Ons
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Documentatie
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Over dit project</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ontwikkeld voor studenten om complexe elektrische netwerken
                beter te begrijpen.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© 2023 Netwerken 4 - Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
