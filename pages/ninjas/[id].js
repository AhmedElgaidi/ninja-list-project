export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.users.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Now, we call the fetch request 10 times
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://dummyjson.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details page:</h1>
      <p>Name: {ninja.firstName}</p>
      <p>Email: {ninja.email}</p>
    </div>
  );
};

export default Details;
