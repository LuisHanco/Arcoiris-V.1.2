import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../Pages/inicio";
import Inicial from "../Pages/Inicial";
import Fisica from "../Pages/Fisica";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/fisica" element={<Fisica />} />
      </Routes>
    </BrowserRouter>
  );
};
