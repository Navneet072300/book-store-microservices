import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <main className="overflow-hidden bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
