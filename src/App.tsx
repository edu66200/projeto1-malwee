import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar"
import { About } from "./pages/about/about"
import  {Home}  from "./pages/home/home"
import { Shop } from "./pages/shop/shop"
import '../src/style/reset.css';
import { Contato } from "./pages/contato/contato";
import '../src/style/global.css'
import  { Footer } from "./components/footer/footer"

export function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/footer" element={<Footer  />} />
      </Routes>
    </Router>
  );
}


