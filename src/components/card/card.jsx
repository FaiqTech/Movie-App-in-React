import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={SMALL_IMG_COVER_BASE_URL + item.poster_path}
        alt={item.title}
      />
      <div className="card-info">
        <span>{item.title}</span>
        <p>{item.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
