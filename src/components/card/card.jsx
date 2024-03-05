import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { FiveStarRating } from "../starRating/starRating";
import "./card.css";

const Card = ({ data, sendData }) => {
  const handleClick = () => {
    sendData(data);
  };

  const rating = data.vote_average / 2; // Oy ortalamasının yarısını alıyoruz.
  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card-img"
        src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
        alt={data.title}
      />
      <div className="card-info">
        <span className="card-title">{data.title}</span>
        <p className="card-release">{data.release_date}</p>
        <div className="rating">
          <FiveStarRating rating={rating} />
          <span className="rating-text">{data.vote_average}</span>{" "}
          {/* Oy ortalaması */}
        </div>
      </div>
    </div>
  );
};

export default Card;
