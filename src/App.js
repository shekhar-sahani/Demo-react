import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Pricing from "./Pricing";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
