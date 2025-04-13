import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

// Function to get the initial theme from localStorage or system preference
function getInitialTheme(): Theme {
  if (!browser) return 'system'; // Default to system on server
  
  try {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
      return storedTheme;
    }
  } catch (e) {
    console.warn('Error accessing localStorage:', e);
  }
  
  return 'system'; // Default to system if nothing valid stored
}

// Create a writable store with the initial theme
const initialTheme = getInitialTheme();
export const theme = writable<Theme>(initialTheme);

// Function to apply the theme to the document (simplified)
function applyTheme(newTheme: Theme) {
  if (!browser) return;

  // Determine effective theme (light/dark)
  let effectiveTheme: 'light' | 'dark';
  
  if (newTheme === 'system') {
    // Check system preference
    effectiveTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } else {
    effectiveTheme = newTheme;
  }

  // Apply theme to document
  if (effectiveTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Update CSS variables based on theme
  document.documentElement.style.setProperty('--current-theme', effectiveTheme);
  
  // Store preference
  try {
    localStorage.setItem('theme', newTheme);
  } catch (e) {
    console.warn('Error saving theme to localStorage:', e);
  }
}

// Subscribe to theme changes
if (browser) {
  theme.subscribe(applyTheme);
  
  // Listen for system preference changes (for system theme)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const currentTheme = getInitialTheme();
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  });
} 