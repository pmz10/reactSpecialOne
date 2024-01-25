import { useEffect, useState } from "react";
import Title from "../Components/Title";
import { useFirestore } from "../Hooks/useFirestore";

const Home = () => {
  const { data, error, loading, getData } = useFirestore();
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Title text="Home" />
      <form>
        <input
          placeholder="ex: http://bluuweb.org"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">ADD URL</button>
      </form>
      {data.map((item) => (
        <div key={item.nanoid}>
          <p>{item.nanoid}</p>
          <p>{item.origin}</p>
          <p>{item.uid}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
