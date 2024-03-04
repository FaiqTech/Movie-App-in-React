// MovieInfo.jsx

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

  // Arka plan görüntüsü stili
  const backdropStyle = {
    backgroundImage: `url(${SMALL_IMG_COVER_BASE_URL + data.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
  };

  return (
    <div>
      <div className="backdrop" style={backdropStyle}></div>
      <div className="movie-info">
        <h1>{data.title}</h1>
        <p>{data.release_date}</p>
        <p>{data.overview}</p>
        <p>{data.vote_average}</p>
        <img
          src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
          alt={data.title}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
