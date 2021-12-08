import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import NotFound from "./components/404";
import { Routes, Route, useLocation } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App() {
  const route = useLocation();
  console.log(route);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
