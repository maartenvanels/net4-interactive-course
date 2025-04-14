import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import { useTheme } from "../../hooks/useTheme";

// Import reveal.js CSS
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css"; // Basis theme
import "reveal.js/plugin/highlight/monokai.css"; // Theme voor code highlighting

// Import core plugins
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealMath from "reveal.js/plugin/math/math.esm.js";

// @ts-ignore - Ignoring type error for dynamic CDN import
import Chalkboard from "https://cdn.jsdelivr.net/npm/reveal.js-plugins@latest/chalkboard/plugin.js";

interface RevealPresentationProps {
  children?: React.ReactNode;
  markdownContent?: string;
  options?: Record<string, any>;
}

// Uitgebreide versie van Reveal.js opties type
interface ExtendedRevealOptions extends Reveal.Options {
  math?: {
    mathjax?: string;
    config?: string;
    TeX?: Record<string, any>;
  };
  chalkboard?: {
    boardmarkerWidth?: number;
    chalkWidth?: number;
    chalkEffect?: number;
    storage?: string | null;
    src?: string | null;
    readOnly?: boolean;
    toggleChalkboardButton?: {
      left?: string;
      bottom?: string;
      right?: string;
      top?: string;
    };
    toggleNotesButton?: {
      left?: string;
      bottom?: string;
      right?: string;
      top?: string;
    };
    transition?: number;
    theme?: string;
    background?: string[];
    grid?: { color: string; density: number; width: number };
    eraser?: { src: string; radius: number };
    boardmarkers?: { color: string; cursor: string; curve: any }[];
    chalks?: { color: string; cursor: string; curve: any }[];
  };
}

/**
 * Een wrapper component voor Reveal.js presentaties
 */
function RevealPresentation({
  children,
  markdownContent,
  options = {},
}: RevealPresentationProps) {
  const { isDark } = useTheme();
  const revealRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const revealInstance = useRef<Reveal.Api | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isChalkboardReady, setIsChalkboardReady] = useState(false);

  // Load chalkboard plugin dynamically
  useEffect(() => {
    setIsChalkboardReady(true);
    console.log("Chalkboard plugin loaded.");
  }, []);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);

      // Force Reveal to update its layout after fullscreen change
      setTimeout(() => {
        if (revealInstance.current) {
          revealInstance.current.layout();
        }
      }, 100);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!revealRef.current || !isChalkboardReady) return; // Wait for chalkboard

    // Cleanup previous instance if it exists
    if (revealInstance.current) {
      // Using any to bypass TypeScript checking since destroy() may not be in types
      try {
        (revealInstance.current as any).destroy?.();
      } catch (e) {
        console.warn("Error destroying previous Reveal instance:", e);
      }
      revealInstance.current = null;
    }

    // Initialiseer Reveal.js
    const revealOptions: ExtendedRevealOptions = {
      // Default opties
      hash: true,
      slideNumber: true,
      embedded: false, // Crucial for PDF export and plugins like chalkboard
      width: "100%",
      height: "100%",
      margin: 0.04, // Reduced margin for better fit
      minScale: 0.2,
      maxScale: 2.0,
      center: true, // Center slides by default
      transition: "slide", // Standard transition
      // Enable auto-animate by default (can be overridden per slide)
      autoAnimate: true,
      // Add Chalkboard plugin if loaded
      plugins: [
        Markdown,
        Notes,
        Highlight,
        RevealMath.MathJax3,
        Chalkboard, // Add Chalkboard directly
      ],
      ...options,
      // Markdown configuratie
      markdown: {
        smartypants: true,
        smartLists: true,
        gfm: true,
        breaks: true,
      },
      // MathJax configuratie
      math: {
        mathjax: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
        config: "TeX-AMS_HTML-full",
        TeX: {
          Macros: {
            R: "\\mathbb{R}",
            C: "\\mathbb{C}",
          },
        },
      },
      // Chalkboard configuratie (voorbeeld)
      chalkboard: {
        boardmarkerWidth: 3,
        chalkWidth: 4,
        chalkEffect: 0.1,
        src: null, // Load saved drawings from file if needed
        readOnly: false,
        toggleChalkboardButton: {
          left: "30px",
          bottom: "30px",
          top: "auto",
          right: "auto",
        },
        toggleNotesButton: {
          left: "60px",
          bottom: "30px",
          top: "auto",
          right: "auto",
        },
        theme: "chalkboard", // Use the chalkboard theme
      },
      // Ensure display is block for proper layout
      display: "block",
    };

    // Initialize with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (revealRef.current) {
        // Prepare slides (handle markdown)
        const slidesContainer = revealRef.current.querySelector(".slides");
        if (markdownContent && slidesContainer) {
          // Create a markdown section
          const section = document.createElement("section");
          section.setAttribute("data-markdown", "");
          section.setAttribute("data-separator", "---");
          section.setAttribute("data-separator-vertical", "--");
          section.setAttribute("data-separator-notes", "^Note:");
          section.setAttribute("data-charset", "utf-8");

          const textarea = document.createElement("textarea");
          textarea.setAttribute("data-template", "");
          textarea.textContent = markdownContent;

          section.appendChild(textarea);

          // Clear existing slides first
          slidesContainer.innerHTML = "";
          slidesContainer.appendChild(section);
        } else if (children && slidesContainer) {
          // If children are provided directly, ensure they are rendered
          // This might need adjustment based on how children are passed
          // Assuming children are already structured as <section> elements
          // No explicit action might be needed if React renders them correctly
        }

        // Initialize Reveal
        try {
          revealInstance.current = new Reveal(revealRef.current, revealOptions);
          revealInstance.current
            .initialize()
            .then(() => {
              // Force layout recalculation
              window.dispatchEvent(new Event("resize"));
              console.log("Reveal.js initialized successfully.");
            })
            .catch((initError) => {
              console.error("Reveal.js initialization failed:", initError);
            });
        } catch (revealError) {
          console.error("Error creating Reveal instance:", revealError);
        }
      }
    }, 100);

    return () => {
      // Properly destroy the Reveal instance
      if (revealInstance.current) {
        try {
          // Using any to bypass TypeScript checking since destroy() may not be in types
          (revealInstance.current as any).destroy?.();
          console.log("Reveal instance destroyed.");
        } catch (e) {
          console.warn("Error destroying Reveal instance:", e);
        }
        revealInstance.current = null;
      }
    };
  }, [options, markdownContent, children, isChalkboardReady]); // Rerun if chalkboard becomes ready

  // Apply dark mode class changes
  useEffect(() => {
    if (revealRef.current) {
      if (isDark) {
        revealRef.current.classList.add("dark-theme");
        revealRef.current.classList.remove("light-theme");
      } else {
        revealRef.current.classList.add("light-theme");
        revealRef.current.classList.remove("dark-theme");
      }

      // Force Reveal to update its layout
      if (
        revealInstance.current &&
        typeof revealInstance.current.layout === "function"
      ) {
        revealInstance.current.layout();
      }
    }
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className={`reveal-container w-full h-full bg-white dark:bg-gray-900 relative ${
        isFullscreen ? "fullscreen" : ""
      }`}
    >
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors fullscreen-toggle"
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        aria-label="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 4a1 1 0 00-1 1v4a1 1 0 01-1 1H2a1 1 0 010-2h.93a.5.5 0 00.5-.5V5a3 3 0 013-3h4a1 1 0 010 2H6a1 1 0 00-1 1zm14 10a1 1 0 00-1-1h-4a1 1 0 010-2h4a3 3 0 013 3v4a1 1 0 01-1 1h-4a1 1 0 010-2h4a.5.5 0 00.5-.5V14zM9 14a1 1 0 011-1h.5a.5.5 0 00.5-.5V12a1 1 0 112 0v.5a2.5 2.5 0 01-2.5 2.5H10a1 1 0 01-1-1zm-6-6a1 1 0 011 1v.5a.5.5 0 00.5.5H5a1 1 0 110 2h-.5A2.5 2.5 0 012 9.5V8a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <div
        className={`reveal ${isDark ? "dark-theme" : "light-theme"}`}
        ref={revealRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Slides container is managed by Reveal.js */}
        <div className="slides">
          {/* If markdown is not provided, render children directly */}
          {!markdownContent && children}
        </div>
      </div>
    </div>
  );
}

export default RevealPresentation;
