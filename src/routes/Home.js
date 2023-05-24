import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
import "../styles.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [marvels, setMarvels] = useState([]);
  const getMarvels = async () => {
    const r = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"`
    );
    const json = await r.json();
    setMarvels(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMarvels();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading.."
      ) : (
        <div>
          {marvels.map((marvel, index) => (
            <Marvel
              thumbnail={marvel.thumbnail.path}
              name={marvel.name}
              key={index}
              id={marvel.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
