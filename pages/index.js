import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    if (authToken) setLogin(true);
  }, []);
  return (
    <div>
      <div className={styles.landing_page_heading}>Yofin</div>
      {login ? (
        <div className={styles.auth_links}>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      ) : (
        <div className={styles.auth_links}>
          <Link href="register">Register</Link>
          <span>/</span>
          <Link href="login">Login</Link>
        </div>
      )}
      <div className={styles.landing_page_description}>
        Welcome to Yofin - the ultimate solution for managing shared expenses
        effortlessly!
      </div>
    </div>
  );
}
