import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL, BACKDROP_BASE_URL } from "../../config";
import { useEffect, useState } from "react";
import "./MovieInfo.css";
import { FiveStarRating } from "../../components/starRating/starRating";

const MovieInfo = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const { state } = location;
  const rating = data.vote_average / 2; // Oy ortalamasının yarısını alıyoruz.

  useEffect(() => {
    setData(state);
    //lifting up edirik
  }, [state]);
  return (
    <div>
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(${BACKDROP_BASE_URL + data.backdrop_path})`,
        }}
      ></div>
      <div className="movie-container">
        <div className="image-container">
          <img
            src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
            alt={data.title}
          />
        </div>
        <div className="movie-info">
          <h1>{data.title}</h1>
          <p>
            <strong>Release Date:</strong> {data.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {data.overview}
          </p>
          <p className="rating">
            <strong>Rating:</strong>
            <FiveStarRating rating={rating} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
