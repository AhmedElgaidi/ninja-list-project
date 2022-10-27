import Link from "next/link";
import styles from "../styles/404.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("redirected....");
      router.push("/");
    }, 3000);
  });

  return (
    <div className={styles.not_found}>
      <h2> Oops....</h2>
      <p>
        {" "}
        The page is not found, please go to <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
