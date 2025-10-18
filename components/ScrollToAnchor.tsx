"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function ScrollToAnchor() {
  const pathname = usePathname();
  const lastHash = useRef("");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash && hash !== lastHash.current) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = hash;
      }
    }
  }, [pathname]);

  return null;
}

export default ScrollToAnchor;
