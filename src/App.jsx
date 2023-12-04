import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Products from "./Routes/Products";
import Contact from "./Routes/Contact";
import Cart from "./Routes/Cart";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
