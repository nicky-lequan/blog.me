'use client';

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}