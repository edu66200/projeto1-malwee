import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar"
import { About } from "./pages/about"
import { Cadastro } from "./pages/cadastro"
import { Carrinho } from "./pages/carrinho"
import { Home } from "./pages/home/home"
import { Shop } from "./pages/shop"
import { Login } from "./pages/login";
import './reset/reset.css';
import { Contato } from "./pages/contato";

export function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}


