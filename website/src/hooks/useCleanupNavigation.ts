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
      // Close any open modals
      const modals = document.querySelectorAll("[data-modal]");
      modals.forEach((modal) => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      });

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll("[data-dropdown]");
      dropdowns.forEach((dropdown) => {
        if (dropdown.parentNode) {
          dropdown.parentNode.removeChild(dropdown);
        }
      });

      // Reset body overflow
      document.body.style.overflow = "";
    };

    // Clean up when navigating between docs and home
    const isDocsPage = pathname?.startsWith("/docs");
    const isHomePage = pathname === "/" || pathname === "/home";

    if (isHomePage || isDocsPage) {
      cleanupElements();
    }
  }, [pathname]);
}
