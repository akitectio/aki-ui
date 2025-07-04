import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Hook to clean up navigation state when navigating between different layouts
 */
export function useCleanupNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Clean up any modals, dropdowns, or overlay elements that might be open
    const cleanupElements = () => {
      try {
        // Use custom events to signal elements to clean up themselves
        // instead of directly manipulating the DOM
        const cleanupEvent = new CustomEvent("navigationCleanup");
        window.dispatchEvent(cleanupEvent);

        // Find any open modals and hide them using CSS instead of DOM removal
        const modals = document.querySelectorAll("[data-modal]");
        modals.forEach((modal) => {
          if (modal && document.contains(modal)) {
            // Use classList to hide instead of removing from DOM
            modal.classList.add("hidden");
            // Set a data attribute so React knows this element should be ignored
            modal.setAttribute("data-removed", "true");
          }
        });

        // Do the same for dropdowns
        const dropdowns = document.querySelectorAll("[data-dropdown]");
        dropdowns.forEach((dropdown) => {
          if (dropdown && document.contains(dropdown)) {
            dropdown.classList.add("hidden");
            dropdown.setAttribute("data-removed", "true");
          }
        });

        // Reset body overflow
        document.body.style.overflow = "";
      } catch (error) {
        console.error("Error cleaning up navigation elements:", error);
      }
    };

    // Add a small delay to avoid race conditions with React's reconciliation
    const handlePathChange = () => {
      // Use requestAnimationFrame to ensure we run after DOM updates
      requestAnimationFrame(() => {
        // Check if we're navigating between docs and home
        const isDocsPage = pathname?.startsWith("/docs");
        const isHomePage = pathname === "/" || pathname === "/home";

        if (isHomePage || isDocsPage) {
          cleanupElements();
        }
      });
    };

    // Run cleanup when component mounts
    handlePathChange();

    return () => {
      // Also clean up when component unmounts
      cleanupElements();
    };
  }, [pathname]);
}
