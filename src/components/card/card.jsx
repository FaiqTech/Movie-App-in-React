import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import "./card.css";

const Card = ({ image, title, date }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={SMALL_IMG_COVER_BASE_URL + image}
        alt={title}
      />
      <div className="card-info">
        <span>{title}</span>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
