import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div>
        <div className={styles.landing_page_heading}>Yofin</div>
        <div className={styles.auth_links}>
          <Link href="register">Register</Link>
          <span>/</span>
          <Link href="login">Login</Link>
        </div>
        <div className={styles.landing_page_description}>
          Welcome to Yofin - the ultimate solution for managing shared expenses
          effortlessly!
        </div>
      </div>
  );
}
