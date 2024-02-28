import "./App.css";
import axios from "axios";
import { API_KEY, BASE_URL } from "./config";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/card/card";
import Header from "./shared/header/header";
import logo from "./assets/logo/logo.jpeg";

function App() {
  const [data, setData] = useState([]);

  async function getMovies(path) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${path}?api_key=${API_KEY}`
      );
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies("popular");
  }, []);

  return (
    <>
      <Header logo={logo} title="Movie Site" subTitle="The Best Movie Site" />
      <div className="container">
        {data.map((item) => {
          return (
            <Card
              image={item.poster_path}
              title={item.title}
              date={item.release_date}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
