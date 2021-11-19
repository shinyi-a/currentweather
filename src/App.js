import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/currentweather" element={<Home />} />
        <Route path="/currentweather/:city" element={<Result />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
