import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Err from "./service/Err";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="items" element={<Items/>}></Route>
        <Route path="*" element={<Err />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
