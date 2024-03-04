import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { useEffect, useState } from "react";
import "./MovieInfo.css";

const MovieInfo = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const { state } = location;

  useEffect(() => {
    setData(state);
  }, [state]);

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
    <div>
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(${
            SMALL_IMG_COVER_BASE_URL + data.backdrop_path
          })`,
        }}
      ></div>
      <div className="movie-info">
        <h1>{data.title}</h1>
        <p>
          <strong>Release Date:</strong> {data.release_date}
        </p>
        <p>
          <strong>Overview:</strong> {data.overview}
        </p>
        <p className="rating">
          <strong>Rating:</strong> {renderStars(data.vote_average)}{" "}
          {data.vote_average}
        </p>
        <img
          src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
          alt={data.title}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
