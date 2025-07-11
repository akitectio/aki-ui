import { useState, useCallback } from "react";

export const useClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    (text: string) => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), timeout);
          })
          .catch((error) => {
            console.error("Failed to copy text: ", error);
          });
      } else {
        // Fallback for older browsers
        try {
          const textArea = document.createElement("textarea");
          textArea.value = text;

          // Make the textarea out of viewport
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);

          textArea.focus();
          textArea.select();

          const successful = document.execCommand("copy");
          document.body.removeChild(textArea);

          if (successful) {
            setCopied(true);
            setTimeout(() => setCopied(false), timeout);
          } else {
            console.error("Failed to copy text with execCommand");
          }
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
      }
    },
    [timeout]
  );

  return { copied, copyToClipboard };
};

export default useClipboard;
