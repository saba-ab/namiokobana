"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/start.module.css";
const StartGame = () => {
  return (
    <div className={styles.start}>
      <Link href={"/game"}>
        <button>start</button>
      </Link>
    </div>
  );
};

export default StartGame;
