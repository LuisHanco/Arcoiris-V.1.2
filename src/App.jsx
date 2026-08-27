import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import PageLoader from "./Components/PageLoader";
import HomeWithBranding from "./Components/HomeWithBranding";
import Inicio from "./Pages/Inicio";
import Inicial from "./Pages/Inicial";
import Fisica from "./Pages/Fisica";
import Transparencia from "./Pages/Transparencia";
import MisionVision from "./Pages/MisionVision";
import Historia from "./Pages/Historia";
import Directorio from "./Pages/Directorio";
import Admision from "./Pages/Admision";
import Estudiantes from "./Pages/Estudiantes";
import Egresados from "./Pages/Egresados";
import Unidades from "./Pages/Unidades";
import Contacto from "./Pages/Contacto";
import AdminReservaComp from "./Pages/AdminReservaComp";
import ReservaComp from "./Pages/ReservaComp";
import Plataformas from "./Pages/Plataformas";
import Servicios from "./Pages/Servicios";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop";

// --- IMPORTACIONES DE CONVOCATORIAS Y NUEVAS PÁGINAS ---
import Convocatorias from "./Pages/Convocatorias";
import ConvocatoriaDocente from "./Pages/ConvocatoriaDocente";
import ConvocatoriaDocente2 from "./Pages/Docentes2026II";
import HorarioLaboratorio from "./Pages/HorarioLaboratorio";
import TesisSustentadas from "./Pages/TesisSustentadas";
import MuralAcademico from "./Pages/MuralAcademico";
import GaleriaInstitucional from "./Pages/GaleriaInstitucional";
import VerificacionArbitros from './Pages/VerificacionArbitros';

// Importamos la nueva página de Resultados con el nombre exacto
import PortalResultados from './Pages/PortalResultados'; 

const DocumentosGestion = lazy(() => import("./Pages/Documentos_gestion"));
const UnidadInvestigacion = lazy(() => import("./Pages/Unidad_investigacion"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ESTA ES LA LÍNEA QUE FALTABA (PÁGINA PRINCIPAL) */}
          <Route index element={<HomeWithBranding />} />
          
          {/* RUTAS ORIGINALES */}
          <Route path="inicial" element={<Inicial />} />
          <Route path="fisica" element={<Fisica />} />
          <Route path="transparencia" element={<Transparencia />} />
          <Route path="mision_vision" element={<MisionVision />} />
          <Route path="historia" element={<Historia />} />
          <Route path="Directorio" element={<Directorio />} />
          <Route path="Admision" element={<Admision />} />
          <Route path="Estudiantes" element={<Estudiantes />} />
          <Route path="Egresados" element={<Egresados />} />
          <Route path="Unidades" element={<Unidades />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Plataformas" element={<Plataformas />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="ReservaComp" element={<ReservaComp />} />
          <Route path="AdminReserva" element={<AdminReservaComp />} />
          
          {/* --- NUEVAS RUTAS --- */}
          <Route path="convocatorias" element={<Convocatorias />} />
          <Route path="convocatorias/docentes-2026" element={<ConvocatoriaDocente />} />
          <Route path="convocatorias/docentes-2026-II" element={<ConvocatoriaDocente2 />} />
          <Route path="laboratorio" element={<HorarioLaboratorio />} />
          <Route path="tesis-sustentadas" element={<TesisSustentadas />} />
          <Route path="unidad_academica" element={<MuralAcademico />} />
          <Route path="galeria" element={<GaleriaInstitucional />} />
          <Route path="verificar-arbitros" element={<VerificacionArbitros />} />
          
          {/* Ruta del nuevo portal de Resultados */}
          <Route path="resultados" element={<PortalResultados />} />
          
          {/* RUTAS CON CARGA PEREZOSA (LAZY) */}
          <Route
            path="Documentos_gestion"
            element={
              <Suspense fallback={<PageLoader />}>
                <DocumentosGestion />
              </Suspense>
            }
          />
          <Route
            path="Unidad_investigacion"
            element={
              <Suspense fallback={<PageLoader />}>
                <UnidadInvestigacion />
              </Suspense>
            }
          />
        </Route>
        
        {/* RUTA DE ERROR 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}