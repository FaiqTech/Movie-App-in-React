import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import getMovies from "../../components/helpers/fetch";
import NotMovie from "../../components/notmovie/NotMovie";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    getMovies("/movie/now_playing").then(setData);
  }, []);

  useEffect(() => {
    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(params.toLowerCase())
    );
    setFilteredData(filteredMovies);
  }, [params, data]);

  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, { state: cardData });
  };

  return (
    <div className="container">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <Card key={index} sendData={handleCardClick} data={item} />
        ))
      ) : (
        <NotMovie />
      )}
    </div>
  );
}
