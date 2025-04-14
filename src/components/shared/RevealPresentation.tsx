import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import { useTheme } from "../../hooks/useTheme";

// Import reveal.js CSS
import "reveal.js/dist/reveal.css";
// Only import one theme and handle dark/light mode with CSS variables
import "reveal.js/dist/theme/white.css";

// Import plugins
// @ts-ignore (import probleem met Reveal.js plugins)
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
// @ts-ignore
import Notes from "reveal.js/plugin/notes/notes.esm.js";
// @ts-ignore
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
// Voor MathJax ondersteuning
// @ts-ignore
import RevealMath from "reveal.js/plugin/math/math.esm.js";

interface RevealPresentationProps {
  children: React.ReactNode;
  options?: Record<string, any>;
}

// Uitgebreide versie van Reveal.js opties type
interface ExtendedRevealOptions extends Reveal.Options {
  math?: {
    mathjax?: string;
    config?: string;
    TeX?: Record<string, any>;
  };
}

/**
 * Een wrapper component voor Reveal.js presentaties
 */
function RevealPresentation({
  children,
  options = {},
}: RevealPresentationProps) {
  const { isDark } = useTheme();
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInstance = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (!revealRef.current) return;

    // Cleanup previous instance if it exists
    if (revealInstance.current) {
      revealInstance.current = null;
    }

    // Initialiseer Reveal.js
    const revealOptions: ExtendedRevealOptions = {
      // Default opties
      hash: true,
      slideNumber: true,
      plugins: [Markdown, Notes, Highlight, RevealMath.MathJax3],
      ...options,
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
      // Set the display mode to ensure proper sizing
      display: "block",
      margin: 0.1,
    };

    // Initialize with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (revealRef.current) {
        revealInstance.current = new Reveal(revealRef.current, revealOptions);
        revealInstance.current.initialize().then(() => {
          // Force layout recalculation
          window.dispatchEvent(new Event("resize"));
        });
      }
    }, 100);

    return () => {
      // Properly destroy the Reveal instance
      if (revealInstance.current) {
        // Using any to bypass TypeScript checking since destroy() may not be in types
        (revealInstance.current as any).destroy?.();
        revealInstance.current = null;
      }
    };
  }, [options]);

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
      if (revealInstance.current) {
        revealInstance.current.layout();
      }
    }
  }, [isDark]);

  return (
    <div className="reveal-container w-full h-full bg-white dark:bg-gray-900">
      <div
        className={`reveal ${isDark ? "dark-theme" : "light-theme"}`}
        ref={revealRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <div className="slides">{children}</div>
      </div>
    </div>
  );
}

export default RevealPresentation;
