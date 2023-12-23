"use client";
import { signOut } from "next-auth/react";
import styles from "./LogoutBtn.module.css";

const LogoutBtn = () => {
  return (
    <button className={styles.LogBtn} onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default LogoutBtn;
