import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./shared/header/header";
import logo from "./assets/logo/logo.jpeg";
import Home from "./pages/Home/home";
import NowPlay from "./pages/NowPlay/NowPlay";

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} title="Movie Site" subTitle="The Best Movie Site" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now-playing" element={<NowPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
