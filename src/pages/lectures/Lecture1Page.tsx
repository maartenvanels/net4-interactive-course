import React, { useEffect, useState } from "react";
import RevealPresentation from "../../components/shared/RevealPresentation";
import { loadMarkdownFile } from "../../utils/markdownLoader";

const Lecture1Page: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        setIsLoading(true);
        const content = await loadMarkdownFile("lecture1.md");
        setMarkdownContent(content);
        setError(null);
      } catch (err) {
        console.error("Failed to load lecture content", err);
        setError("Failed to load lecture content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Loading presentation...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 p-4 rounded-lg max-w-md">
          <h3 className="font-bold mb-2">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <RevealPresentation markdownContent={markdownContent} />
    </div>
  );
};

export default Lecture1Page;
