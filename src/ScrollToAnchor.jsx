import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash && location.hash !== lastHash.current) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = location.hash;
      }
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
