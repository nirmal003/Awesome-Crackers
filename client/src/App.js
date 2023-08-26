import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Invoice from "./components/invoice/Invoice";
import Product from "./components/product/Product";
import Safety from "./components/safety/Safety";
import Cart from "./pages/cart/Cart";
import Estimate from "./pages/estimate/Estimate";
import Footer from "./pages/footer/Footer";
import ModelView from "./pages/model/ModelView";
import NavBar from "./pages/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ModelView />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/invoice/:date/:time" element={<Invoice />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
