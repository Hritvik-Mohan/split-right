import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Center } from "@mantine/core";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const authTOken = localStorage.getItem('auth-token');
    if (!authTOken) {
        router.push('/login')
    }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    router.push("/login");
  };
  return (
    <>
      <Center>
        <h1>Dashboard</h1>
      </Center>
      <div className={styles.auth_links}>
        <Link href="/">Yofin</Link>
        <Link href="" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </>
  );
}
