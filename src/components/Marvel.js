import { Link } from "react-router-dom";

function Marvel({ thumbnail, name, id }) {
  return (
    <div>
      <img src={`${thumbnail}.jpg`} width="100px" />
      <Link to={`/character/${id}`}>
        <li>{name}</li>
      </Link>
    </div>
  );
}

export default Marvel;
