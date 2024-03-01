//Home.jsx

import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import getMovies from "../../components/helpers/fetch";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovies("/movie/popular").then(setData);
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.poster_path}
            title={item.title}
            date={item.release_date}
            item={item}
          />
        );
      })}
    </div>
  );
}
