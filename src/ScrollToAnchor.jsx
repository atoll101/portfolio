import { useEffect, useRef } from "react"; // FIXED
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  // Get the current location object from the router
  const location = useLocation();
  // Use a ref to track if it's the initial render or a navigation event
  const lastHash = useRef("");

  // Listen for changes in the location object
  useEffect(() => {
    // Only scroll if there is a hash and it's different from the last one
    if (location.hash && location.hash !== lastHash.current) {
      // Find the element with an ID that matches the hash
      const element = document.querySelector(location.hash);

      if (element) {
        // Scroll that element into view with a smooth animation
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update the ref to the current hash
        lastHash.current = location.hash;
      }
    }
  }, [location]); // Run this effect whenever the location changes

  // This component doesn't render anything, it just performs an action
  return null;
}

export default ScrollToAnchor;
