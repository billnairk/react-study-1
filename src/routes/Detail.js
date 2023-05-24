import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getId = async () => {
    const r = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const json = await r.json();
    setDetail(json.data.results);
    setLoading(false);
    console.log(json.data.results);
  };
  useEffect(() => {
    getId();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          "Detail loading..."
        ) : (
          <div>
            {detail.map((d) => (
              <div key={d.id}>
                <h1>{d.name}</h1>
                <ul>
                  {d.series.items.map((s) => (
                    <li>{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </h1>
    </div>
  );
}

export default Detail;
