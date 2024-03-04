//NowPlay.jsx
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import getMovies from "../../components/helpers/fetch";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies("/movie/now_playing").then(setData);
  }, []);

  const handleCArdClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, { state: cardData });
  };
  return (
    <div className="container">
      {data.map((item, index) => {
        return <Card key={index} sendData={handleCArdClick} data={item} />;
      })}
    </div>
  );
}
