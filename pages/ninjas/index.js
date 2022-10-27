import Head from "next/head";
import Link from "next/link";

// This runs before the component is rendered, so the data would be here before
// rendering the Ninjas component in the browser
export const getStaticProps = async () => {
  // Get the data that we need before reaching the client but at the build time (browser as react!!!)
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json(); // array of users/ ninjas
  // Now pass it to our component to use it.
  return {
    props: { ninjas: data.users },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title> All ninjas</title>
        <meta name="keywords" content="all ninjas"></meta>
      </Head>
      <h1> All Ninjas:</h1>
      <div>
        {console.log(ninjas)}
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.id } key={ninja.id}>
            <a>
              <p>{ninja.firstName}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
