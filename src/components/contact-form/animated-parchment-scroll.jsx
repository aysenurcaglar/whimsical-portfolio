"use client";

import React, { useEffect, useState } from "react";
import styles from "./animated-parchment-scroll.module.css";

export function AnimatedParchmentScroll({ children }) {
  const [isUnrolled, setIsUnrolled] = useState(false);

  useEffect(() => {
    setIsUnrolled(true);
  }, []);

  return (
    <div
      className={`${styles.scrollContainer} ${
        isUnrolled ? styles.unrolled : ""
      }`}
    >
      <div className={styles.scroll}>
        <div className={styles.scrollContent}>{children}</div>
      </div>
    </div>
  );
}
