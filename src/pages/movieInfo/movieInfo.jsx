import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { useEffect, useState } from "react";

const MovieInfo = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { state } = location;
  const { title, overview, poster_path, release_date, vote_average } = state;
  useEffect(() => {
    setData(state);
  }, [state]);
  return (
    <div>
      <h1>Movie Info</h1>
      <div>
        <img
          src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
          alt={data.title}
        />
        <div>
          <h2>{data.title}</h2>
          <p>{data.release_date}</p>
          <p>{data.overview}</p>
          <p>{data.vote_average}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
