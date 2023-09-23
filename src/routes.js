import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>;
};

export default AppRoutes;
