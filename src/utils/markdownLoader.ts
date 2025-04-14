/**
 * Utility to load markdown files from the /public/lectures directory
 */
export async function loadMarkdownFile(filename: string): Promise<string> {
  try {
    const response = await fetch(`/lectures/${filename}`);
    
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${filename}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error("Error loading markdown file:", error);
    return "# Error Loading Presentation\n\nSorry, there was an error loading the presentation content.";
  }
} 