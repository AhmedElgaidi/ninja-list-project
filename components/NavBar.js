import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <Link href="/">Home</Link> |
      <Link href="/about">About</Link> | 
      <Link href="/ninjas">All Ninjas</Link>
      <br />
    </>
  );
};

export default NavBar;
