import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Reports } from "../pages/Reports";
import { NavBar } from "../components/NavBar";

export function MyRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
