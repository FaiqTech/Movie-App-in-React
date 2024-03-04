import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import "./card.css";

const Card = ({ data, sendData }) => {
  const handleClick = () => {
    sendData(data);
  };

  // Yıldızları göstermek için bir fonksiyon oluşturun
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.round(rating / 2); i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

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
          {renderStars(data.vote_average)} {/* Yıldızları burada çağırın */}
          <span className="rating-text">{data.vote_average}</span>{" "}
          {/* Oy ortalaması */}
        </div>
      </div>
    </div>
  );
};

export default Card;
