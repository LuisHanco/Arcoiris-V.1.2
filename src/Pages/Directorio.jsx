import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Snackbar,
  Alert,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  Pagination
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImageIcon from "@mui/icons-material/Image";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

import FondoDirectorio from "../assets/Imagenes/InicioClases1.webp";
import Organigrama from "../assets/organigrama.webp";

// --- COLORES POR ESPECIALIDAD ---
const getColorBySpecialty = (specialty) => {
  if (!specialty) return "#003366";
  const spec = specialty.toUpperCase();
  if (spec.includes("INICIAL")) return "#880E4F"; 
  if (spec.includes("FISICA") || spec.includes("FÍSICA")) return "#BF360C"; 
  if (spec.includes("SOCIALES") || spec.includes("HISTORIA") || spec.includes("ANTROPOLOGIA")) return "#004D40"; 
  if (spec.includes("COMUNICACIÓN") || spec.includes("INGLES") || spec.includes("INGLÉS") || spec.includes("QUECHUA") || spec.includes("ARTE")) return "#311B92"; 
  if (spec.includes("BIOLOGIA") || spec.includes("BIOLOGÍA") || spec.includes("QUIMICA") || spec.includes("QUÍMICA") || spec.includes("MEDICO")) return "#1B5E20"; 
  if (spec.includes("MATEMATICA") || spec.includes("MATEMÁTICA")) return "#0288D1"; 
  if (spec.includes("ESTADISTICA") || spec.includes("ESTADÍSTICA")) return "#0097A7"; 
  if (spec.includes("PRIMARIA")) return "#E65100"; 
  if (spec.includes("INVESTIGACIÓN") || spec.includes("INVESTIGACION")) return "#B71C1C"; 
  if (spec.includes("TURISMO")) return "#4A148C"; 
  if (spec.includes("GENERAL")) return "#475569";
  return "#003366"; 
};

// --- FUNCIÓN PARA CARGAR IMÁGENES LOCALES (.webp) CON VITE ---
const getLocalImagePath = (nombre) => {
  const cleanName = nombre.replace(/,/g, "").trim();
  return new URL(`../assets/Imagenes/fotos/${cleanName}.webp`, import.meta.url).href;
};

// =====================================================================
// COMPONENTE PARA LA TARJETA DEL DOCENTE
// =====================================================================
const DocenteCard = memo(({ docente, onOpenHojaVida, onCopyEmail }) => {
  const themeColor = getColorBySpecialty(docente.especialidad);

  const [imgSrc, setImgSrc] = useState(getLocalImagePath(docente.nombre));
  const [hasRealImage, setHasRealImage] = useState(true);

  const defaultSilhouette = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const IconCopy = "https://cdn-icons-png.flaticon.com/128/1621/1621635.png";
  const IconMail = "https://cdn-icons-png.flaticon.com/128/732/732200.png";

  const handleImageError = () => {
    setImgSrc(defaultSilhouette);
    setHasRealImage(false);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "24px", position: "relative", bgcolor: "#ffffff", border: "1px solid #E2E8F0",
        display: "flex", flexDirection: "column", height: "100%", transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-8px)", boxShadow: "0 20px 40px rgba(0, 51, 102, 0.12)", borderColor: themeColor },
      }}
    >
      <Box sx={{ width: "100%", height: hasRealImage ? "260px" : "140px", position: "relative", bgcolor: "#F8FAFC", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", overflow: "hidden" }}>
        <Box
          component="img" src={imgSrc} onError={handleImageError} alt={docente.nombre} loading="lazy"
          sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.5s ease", "&:hover": { transform: "scale(1.05)" } }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)", pointerEvents: "none" }} />
        
        <Chip 
          label={docente.especialidad} size="small"
          sx={{ position: "absolute", top: 16, right: 16, bgcolor: themeColor, color: "#fff", fontWeight: "800", fontSize: "0.7rem", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }} 
        />
      </Box>

      <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column", bgcolor: "#fff", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}>
        
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
          <PersonIcon sx={{ color: themeColor, fontSize: 24, mt: 0.3 }} />
          <Typography variant="body1" fontWeight="900" color="#0F172A" lineHeight={1.2} sx={{ fontSize: "1.1rem" }}>
            {docente.grado} <br /> {docente.nombre}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3, flexGrow: 1 }}>
          <Button
            onClick={() => onCopyEmail(docente.correo)}
            startIcon={<img src={IconCopy} alt="Copiar" style={{ width: 16, opacity: 0.7 }} />}
            sx={{ justifyContent: "flex-start", color: "#475569", textTransform: "none", fontWeight: 600, py: 0.5, px: 1, borderRadius: "8px", "&:hover": { bgcolor: "#F1F5F9", color: "#007BFF" } }}
          >
            Copiar Correo
          </Button>

          <Button
            onClick={() => window.open(`mailto:${docente.correo}`, "_blank")}
            startIcon={<img src={IconMail} alt="Enviar" style={{ width: 16, opacity: 0.7 }} />}
            sx={{ justifyContent: "flex-start", color: "#475569", textTransform: "none", fontWeight: 600, py: 0.5, px: 1, borderRadius: "8px", "&:hover": { bgcolor: "#FEF2F2", color: "#DC2626" } }}
          >
            Enviar Correo
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto", pt: 2, borderTop: "1px dashed #E2E8F0" }}>
          <Box sx={{ display: "flex", color: "#CBD5E1", "& svg": { fontSize: 28 } }}>
            <KeyboardDoubleArrowRightIcon />
            <KeyboardDoubleArrowRightIcon sx={{ ml: -1.5 }} />
          </Box>

          <Button
            variant="contained"
            onClick={() => onOpenHojaVida(docente.nombre, docente.hojaVidaUrl)}
            disabled={!docente.hojaVidaUrl || docente.hojaVidaUrl === "..."}
            startIcon={<ContactPageRoundedIcon />}
            sx={{
              bgcolor: themeColor, color: "#ffffff", borderRadius: "12px", px: 2, py: 0.8, fontWeight: "bold", textTransform: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.15)", fontSize: "0.85rem",
              "&:hover": { filter: "brightness(1.2)", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" },
              "&:disabled": { bgcolor: "#E2E8F0", color: "#94A3B8", boxShadow: "none" }
            }}
          >
            {docente.hojaVidaUrl && docente.hojaVidaUrl !== "..." ? "Hoja de Vida" : "No disponible"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
});

// =====================================================================
// COMPONENTE PRINCIPAL
// =====================================================================
export default function Directorio() {
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedDocente, setSelectedDocente] = useState("");
  const [selectedHojaVidaUrl, setSelectedHojaVidaUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Estados para filtros
  const [busqueda, setBusqueda] = useState("");
  const [filtroEspecialidad, setFiltroEspecialidad] = useState("TODOS");

  // Estados para la Paginación
  const [pagina, setPagina] = useState(1);
  const docentesPorPagina = 9; 

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    setPagina(1);
  }, [busqueda, filtroEspecialidad]);

  const handleOpenHojaVida = useCallback((nombre, url) => {
    setSelectedDocente(nombre);
    setSelectedHojaVidaUrl(url);
    setOpenPdf(true);
  }, []);

  const handleCopyEmail = useCallback((email) => {
    navigator.clipboard.writeText(email);
    setSnackbarOpen(true);
  }, []);

  // --- DATOS DEL DIRECTORIO ADMINISTRATIVO ---
  const directivo = [
    { grado: "Dr.", nombre: "PAREDES OJEDA, MARIO JESUS", cargo: "DIRECCION GENERAL" },
  ];

  const administrativo = [
    { grado: "Lic.", nombre: "VICTORIA CABALLERO, JOSE ALEJANDRO", cargo: "JEFE DE AREA DE ADMINISTRACION" },
    { grado: "Mag.", nombre: "TORRES MAMANI, VERONICA LUZ", cargo: "SECRETARIA GENERAL", cvUrl: "..." },
    { grado: "Abog.", nombre: "TORRES HUAMAN, JANIA KARIN", cargo: "AREA DE CALIDAD" },
    { grado: "Abog.", nombre: "TORRES HUAMAN, JANIA KARIN", cargo: "ASESORIA NORMATIVA" },
    { grado: "Dra.", nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA", cargo: "UNIDAD ACADEMICA" },
    { grado: "Mag.", nombre: "CONCHA MARTINEZ, NELLY ROXANA", cargo: "JEFA DE LA UNIDAD DE FORMACION CONTINUA" },
    { grado: "Lic.", nombre: "ESPINOZA ROJAS, KARINA LIZT", cargo: "SECRETARIA ACADEMICA" },
    { grado: "Mag.", nombre: "RODRIGUEZ SOTO, VÍCTOR", cargo: "UNIDAD DE INVESTIGACION E INNOVACION" },
    { grado: "Mag.", nombre: "PUMA CONCHA, MARLENY", cargo: "UNIDAD DE BIENESTAR Y EMPLEABILIDAD" },
  ];

  // =====================================================================
  // LISTA ACTUALIZADA DE LOS 48 DOCENTES
  // =====================================================================
  const docentes = [
    { grado: "Lic.", nombre: "ABARCA OCHOA, JUDITH", especialidad: "MATEMÁTICA", correo: "judithabarca@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtra.", nombre: "APAZA ROJAS, PATRICIA", especialidad: "EDUCACIÓN INICIAL", correo: "patriciaapaza@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "ARIZACA MACEDO, SERAFIN", especialidad: "QUECHUA", correo: "aserafin@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "ARMUTO TAYRO, EDGAR", especialidad: "EDUCACIÓN FÍSICA", correo: "edgararmuto@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "AUCCAISE UÑAPILLCO, DOROTEA", especialidad: "EDUCACIÓN INICIAL", correo: "adorotea@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "AYBAR BUSTAMANTE, EUNICE LUCERO", especialidad: "EDUCACIÓN FÍSICA", correo: "aeunice@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtra.", nombre: "AZURIN QUILLILLI, EYELIT", especialidad: "EDUCACIÓN INICIAL", correo: "aeyelit@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dra.", nombre: "BAÑARES JAQUE, MIRIAN", especialidad: "INVESTIGACIÓN", correo: "bjmirian@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "BEDOYA MENDOZA, JAIME", especialidad: "CIENCIAS SOCIALES", correo: "bjaime@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "CAMA JARA, MANUEL NICANOR", especialidad: "COMPUTACIÓN E INFORMÁTICA / INGLÉS", correo: "cmanuel@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dr.", nombre: "CARREON SUTEC, ALAIN GUNNAR", especialidad: "INVESTIGACIÓN", correo: "calain@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dra.", nombre: "CCALA LLAMOCA, MARISOL", especialidad: "EDUCACIÓN FÍSICA", correo: "cmarisol@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dra.", nombre: "CHAVEZ MEZA, ABIGAIL", especialidad: "INVESTIGACIÓN", correo: "cabigail@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "CONCHA MARTINEZ, NELLY ROXANA", especialidad: "EDUCACIÓN INICIAL", correo: "cnelly@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "CCOPA HUILLCA, ABELARDO", especialidad: "ESTADÍSTICA", correo: "abelardoccopa@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "CORRALES VISA, WILBERT", especialidad: "MATEMÁTICA", correo: "cwilbert@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "DAZA VALDIVIA, GONZALO", especialidad: "EDUCACIÓN FÍSICA", correo: "dgonzalo@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "DELGADO MEDINA, JERRY", especialidad: "EDUCACIÓN FÍSICA", correo: "djerry@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "ESPINOZA BACA, OSCAR", especialidad: "EDUCACIÓN PRIMARIA", correo: "eoscar@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "ESPINOZA CHALLCO, DANILO", especialidad: "CIENCIAS SOCIALES", correo: "edanilo@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "FERNANDEZ BACA ARENAS, FRANCISCO", especialidad: "EDUCACIÓN FÍSICA", correo: "bfrancisco@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "GAMARRA PINO, BETSABE", especialidad: "EDUCACIÓN INICIAL", correo: "gbetsabe@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dr.", nombre: "GARCIA HUAMAN, SANTOS", especialidad: "HISTORIA Y GEOGRAFÍA / INGLÉS", correo: "gsantos@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "GUTIERREZ DELGADO, ADAUS", especialidad: "EDUCACIÓN FÍSICA", correo: "gadaus@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "HOLDER TAMAYO, ALEXEY", especialidad: "EDUCACIÓN FÍSICA", correo: "halexey@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "HUAMAN CORDOVA, ALEXANDER", especialidad: "EDUCACIÓN FÍSICA", correo: "halexander@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dra.", nombre: "HUANACO BUSTINZA, MERY ZULEMA", especialidad: "EDUCACIÓN INICIAL", correo: "hmery@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "MERCADO MENDOZA, PATRICIA ELVIA", especialidad: "EDUCACIÓN INICIAL", correo: "mpatricia@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Dra.", nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA", especialidad: "EDUCACIÓN INICIAL", correo: "mida@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "ORTEGAL IZQUIERDO, ISABEL MILAGROS", especialidad: "COMUNICACIÓN", correo: "iortegali71@gmail.com", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "OVALLE ARAPA, HUGO", especialidad: "ARTE", correo: "ohugo@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "PEÑA PACHECO, YENNY", especialidad: "EDUCACIÓN FÍSICA", correo: "pyenny@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "PEREZ OPORTO, GLORIA MARY LUZ", especialidad: "EDUCACIÓN INICIAL", correo: "pgloria@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "QUISPE ARROYO, FELIX", especialidad: "EDUCACIÓN FÍSICA", correo: "qfelix@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "RAMIREZ PEZO, ABEL", especialidad: "TURISMO / INGLÉS", correo: "rabel@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "RODRIGUEZ SOTO, VICTOR", especialidad: "EDUCACIÓN PRIMARIA", correo: "victorrodriguez@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "ROSAS GOMEZ, RENZO GUILLERMO", especialidad: "EDUCACIÓN FÍSICA", correo: "rrenzoguillermo@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "SALAZAR VALENCIA, LUCIA CEFERINA", especialidad: "EDUCACIÓN INICIAL", correo: "slucia@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "SALCEDO QUISPE, JULIO CESAR", especialidad: "EDUCACIÓN FÍSICA", correo: "sjulio@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "SARAVIA PEÑA, CELINDA", especialidad: "COMUNICACIÓN", correo: "scelinda@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "TAPIA ALOSILLA, ROGER TEOFILO", especialidad: "MATEMÁTICA E INFORMÁTICA", correo: "troger@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mag.", nombre: "TAPIA MELENDEZ, DAVID ARTURO", especialidad: "CIENCIAS SOCIALES", correo: "tdavid@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "TECSI GONZALES, ELIAN ANAI", especialidad: "INVESTIGACIÓN", correo: "telian@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Abg.", nombre: "TORRES HUAMAN, JANIA KARIN", especialidad: "BIOLOGÍA Y QUÍMICA", correo: "tjaniakarin@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Lic.", nombre: "VICTORIA CABALLERO, YANIRA", especialidad: "EDUCACIÓN PRIMARIA", correo: "vyanira@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "VICTORIO MOSCOSO, ANGIE MICHELLE", especialidad: "EDUCACIÓN INICIAL", correo: "vangie@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Mtro.", nombre: "ZÁRATE CASTRO, FRANCISCO PEPE", especialidad: "CIENCIAS SOCIALES", correo: "zfrancisco@arcoiris.edu.pe", hojaVidaUrl: "..." },
    { grado: "Prof.", nombre: "ZAKI CASTRO, MARISOL JULIA", especialidad: "EDUCACIÓN INICIAL", correo: "zjulia@arcoiris.edu.pe", hojaVidaUrl: "..." }
  ];

  const especialidadesUnicas = ["TODOS", ...new Set(docentes.map(d => d.especialidad).filter(Boolean))].sort();

  // Filtrado
  const docentesFiltrados = useMemo(() => {
    return docentes.filter((docente) => {
      const coincideBusqueda = docente.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideFiltro = filtroEspecialidad === "TODOS" || docente.especialidad === filtroEspecialidad;
      return coincideBusqueda && coincideFiltro;
    });
  }, [busqueda, filtroEspecialidad, docentes]);

  // Paginación Matemáticas
  const totalPaginas = Math.ceil(docentesFiltrados.length / docentesPorPagina);
  const datosPaginados = docentesFiltrados.slice(
    (pagina - 1) * docentesPorPagina,
    pagina * docentesPorPagina
  );

  return (
    <Box sx={{ bgcolor: "#F8FAFC", overflow: "hidden" }}>
      {/* 1. PORTADA HERO PREMIUM */}
      <Box
        sx={{
          position: "relative", height: { xs: "60vh", md: "70vh" }, display: "flex", alignItems: "center", bgcolor: "#001F3F",
          "&::before": { content: '""', position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(0, 31, 63, 0.9) 0%, rgba(0, 123, 255, 0.7) 100%), url(${FondoDirectorio})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-up" sx={{ textAlign: "center", color: "#fff" }}>
            <Typography variant="overline" sx={{ color: "#93C5FD", fontWeight: 900, letterSpacing: 3, fontSize: "1rem" }}>
              NUESTRO EQUIPO
            </Typography>
            <Typography variant="h1" fontWeight="900" sx={{ textTransform: "uppercase", fontSize: { xs: "2.5rem", md: "4.5rem" }, lineHeight: 1.1, mb: 2, textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
              Directorio Institucional
            </Typography>
            <Typography variant="h6" sx={{ color: "#E2E8F0", maxWidth: "600px", mx: "auto", fontWeight: 400 }}>
              Conoce a los líderes y profesionales que impulsan nuestra misión educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. ORGANIGRAMA INSTITUCIONAL */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <AccountTreeIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#007BFF", mb: 2 }} />
          <Typography variant="h3" fontWeight="900" color="#0F172A" textTransform="uppercase" sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Organigrama Institucional
          </Typography>
        </Box>

        <Box data-aos="fade-up">
          <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: "24px", border: "1px solid #E2E8F0", maxWidth: "1150px", mx: "auto", display: "flex", justifyContent: "center", boxShadow: "0 20px 50px rgba(0,0,0,0.05)", bgcolor: "#fff" }}>
            <Box component="img" loading="lazy" src={Organigrama} sx={{ width: { xs: "100%", md: "85%" }, height: "auto", objectFit: "contain" }} />
          </Paper>
        </Box>
      </Container>

      {/* 3. PERSONAL DIRECTIVO Y ADMINISTRATIVO CON DISEÑO DARK Y EFECTO HOVER ORIGINAL */}
      <Box sx={{ bgcolor: "#001F3F", py: { xs: 8, md: 12 }, color: "#fff", position: "relative" }}>
        <Container maxWidth="lg">
          
          <Box mb={{ xs: 8, md: 10 }}>
            <Box data-aos="fade-right" sx={{ mb: 6, borderLeft: "4px solid #3B82F6", pl: 3 }}>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase">Personal Directivo</Typography>
            </Box>
            <Grid container spacing={4}>
              {directivo.map((person, idx) => (
                <Grid size={{ xs: 12, lg: 6 }} key={idx} data-aos="fade-up">
                  <Paper sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 3, backdropFilter: "blur(10px)" }}>
                    <AssignmentIndIcon sx={{ fontSize: 50, color: "#FBBF24" }} />
                    <Box>
                      <Typography variant="caption" color="#93C5FD" fontWeight="bold" letterSpacing={1}>{person.cargo}</Typography>
                      <Typography variant="h5" fontWeight="bold" color="#fff">{person.grado} {person.nombre}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Box data-aos="fade-right" sx={{ mb: 6, borderLeft: "4px solid #FBBF24", pl: 3 }}>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase">Personal Administrativo</Typography>
            </Box>
            <Grid container spacing={3}>
              {administrativo.map((person, idx) => {
                const imgAdministrativo = getLocalImagePath(person.nombre);
                const hasImage = true; 
                return (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                    <Paper
                      sx={{
                        p: 3, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden", 
                        height: "130px", // Altura original del diseño que te gustó
                        transition: "all 0.4s ease",
                        "&:hover": hasImage ? { height: "320px", borderColor: "#FBBF24", bgcolor: "rgba(251, 191, 36, 0.05)", transform: "translateY(-5px)", zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" } : {}
                      }}
                    >
                      <Box sx={{ position: "relative", zIndex: 2 }}>
                        <Typography variant="caption" color="#FBBF24" fontWeight="bold" display="block" mb={0.5}>{person.cargo}</Typography>
                        <Typography variant="subtitle1" fontWeight="bold" color="#fff" lineHeight={1.3}>{person.grado} {person.nombre}</Typography>
                        {hasImage && (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1.5, color: "rgba(255,255,255,0.4)" }}>
                            <ImageIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption">Pasar cursor para ver foto</Typography>
                          </Box>
                        )}
                      </Box>
                      {hasImage && (
                        <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",  opacity: 0, transform: "translateY(20px)", transition: "all 0.4s ease", ".MuiPaper-root:hover &": { opacity: 1, transform: "translateY(0)" } }}>
                          <Box component="img" src={imgAdministrativo} loading="lazy" onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }} sx={{ width: "100%", height: "100%", objectFit: "cover", borderTop: "1px solid rgba(255,255,255,0.1)", borderRadius: "0 0 0 0" }} />
                        </Box>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 4. PERSONAL DOCENTE CON PAGINACIÓN Y FILTROS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}>EXCELENCIA ACADÉMICA</Typography>
            <Typography variant="h2" fontWeight="900" color="#0F172A" textTransform="uppercase" mb={2}>Plana Docente</Typography>
          </Box>

          {/* BARRA DE BÚSQUEDA Y FILTROS */}
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: "20px", mb: 6, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, border: "1px solid #E2E8F0", bgcolor: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }} data-aos="fade-up">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar docente por nombre o apellidos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ color: "#94A3B8" }} /></InputAdornment>,
                sx: { borderRadius: "14px", bgcolor: "#F8FAFC" }
              }}
            />
            
            <FormControl sx={{ minWidth: { xs: "100%", md: "300px" } }}>
              <InputLabel>Filtrar por Especialidad</InputLabel>
              <Select
                value={filtroEspecialidad}
                label="Filtrar por Especialidad"
                onChange={(e) => setFiltroEspecialidad(e.target.value)}
                startAdornment={<InputAdornment position="start" sx={{ ml: 1 }}><FilterListRoundedIcon sx={{ color: "#94A3B8" }} /></InputAdornment>}
                sx={{ borderRadius: "14px", bgcolor: "#F8FAFC" }}
              >
                {especialidadesUnicas.map(esp => (
                  <MenuItem key={esp} value={esp} sx={{ fontWeight: "500" }}>{esp}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>

          {/* GRILLA DE DOCENTES PAGINADOS */}
          {datosPaginados.length === 0 ? (
            <Box textAlign="center" py={10}>
              <PersonIcon sx={{ fontSize: 80, color: "#CBD5E1", mb: 2 }} />
              <Typography variant="h5" color="#64748B" fontWeight="bold">No se encontraron docentes.</Typography>
              <Typography variant="body1" color="#94A3B8">Intenta con otros términos de búsqueda.</Typography>
            </Box>
          ) : (
            <>
              <Grid container spacing={4}>
                {datosPaginados.map((docente, index) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                    <DocenteCard docente={docente} onOpenHojaVida={handleOpenHojaVida} onCopyEmail={handleCopyEmail} />
                  </Grid>
                ))}
              </Grid>

              {/* CONTROLES DE PAGINACIÓN */}
              {totalPaginas > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                  <Pagination 
                    count={totalPaginas} 
                    page={pagina} 
                    onChange={(e, value) => {
                      setPagina(value);
                      window.scrollTo({ top: document.getElementById("seccion-docentes")?.offsetTop - 100 || 800, behavior: "smooth" });
                    }} 
                    color="primary" 
                    size="large"
                    sx={{ "& .MuiPaginationItem-root": { fontWeight: "bold", fontSize: "1.1rem" } }}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>

      {/* SNACKBAR PARA AVISO DE CORREO COPIADO */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled" sx={{ width: "100%", borderRadius: "12px", fontWeight: "bold" }}>
          ¡Correo copiado al portapapeles exitosamente!
        </Alert>
      </Snackbar>

      {/* MODAL PDF PARA VER HOJA DE VIDA EN VENTANA EMERGENTE (IFRAME A GOOGLE DRIVE) */}
      <Dialog open={openPdf} onClose={() => setOpenPdf(false)} maxWidth="lg" fullWidth PaperProps={{ sx: { borderRadius: "24px", m: { xs: 2, md: 4 }, overflow: "hidden" } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 3, bgcolor: "#0F172A", color: "#ffffff" }}>
          <Typography variant="h6" fontWeight="bold">Hoja de Vida - {selectedDocente}</Typography>
          <IconButton onClick={() => setOpenPdf(false)} sx={{ color: "#ffffff", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}><CloseIcon /></IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: "80vh", bgcolor: "#E2E8F0" }}>
          {selectedHojaVidaUrl && selectedHojaVidaUrl !== "..." ? (
            <iframe src={selectedHojaVidaUrl} width="100%" height="100%" style={{ border: "none" }} title={`Hoja de Vida de ${selectedDocente}`} />
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Typography color="#64748B" variant="h6" fontWeight="bold">El documento no está disponible en este momento.</Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Anclaje invisible para el scroll de la paginación */}
      <div id="seccion-docentes" style={{ position: "relative", top: "-100px" }}></div>
    </Box>
  );
}