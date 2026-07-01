import React, { useState, useEffect, memo, useCallback } from "react";
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

import FondoDirectorio from "../assets/Imagenes/InicioClases1.webp";
import Organigrama from "../assets/organigrama.webp";

// --- COLORES POR ESPECIALIDAD ---
const getColorBySpecialty = (specialty) => {
  if (!specialty) return "#003366";
  const spec = specialty.toUpperCase();
  if (spec.includes("INICIAL")) return "#880E4F";
  if (spec.includes("FISICA")) return "#BF360C";
  if (
    spec.includes("SOCIALES") ||
    spec.includes("HISTORIA") ||
    spec.includes("ANTROPOLOGIA")
  )
    return "#004D40";
  if (
    spec.includes("COMUNICACIÓN") ||
    spec.includes("INGLES") ||
    spec.includes("QUECHUA") ||
    spec.includes("ARTE")
  )
    return "#311B92";
  if (
    spec.includes("BIOLOGIA") ||
    spec.includes("QUIMICA") ||
    spec.includes("MEDICO") ||
    spec.includes("PSICOLOGA")
  )
    return "#1B5E20";
  return "#003366";
};

// --- FUNCIÓN PARA CARGAR IMÁGENES LOCALES (.webp) CON VITE ---
const getLocalImagePath = (nombre) => {
  // Elimina las comas del nombre (Ej: "ALTAMIRANO QUISPE, NOEMI" -> "ALTAMIRANO QUISPE NOEMI")
  const cleanName = nombre.replace(/,/g, "").trim();
  
  // Utiliza el importador de URL de Vite para buscar en la carpeta assets/Imagenes/fotos
  return new URL(`../assets/Imagenes/fotos/${cleanName}.webp`, import.meta.url).href;
};

// =====================================================================
// COMPONENTE PARA LA TARJETA DEL DOCENTE
// =====================================================================
const DocenteCard = memo(({ docente, onOpenCV, onCopyEmail }) => {
  const themeColor = getColorBySpecialty(docente.especialidad);

  // Intentamos cargar la imagen generada por getLocalImagePath
  const [imgSrc, setImgSrc] = useState(getLocalImagePath(docente.nombre));
  const [hasRealImage, setHasRealImage] = useState(true);

  const defaultSilhouette = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const IconCopy = "https://cdn-icons-png.flaticon.com/128/1621/1621635.png";
  const IconMail = "https://cdn-icons-png.flaticon.com/128/732/732200.png";

  const handleImageError = () => {
    // Si la imagen no se encuentra en la carpeta local, carga la silueta
    setImgSrc(defaultSilhouette);
    setHasRealImage(false);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "24px",
        position: "relative",
        bgcolor: "#ffffff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.19)",
        border: "1px solid #eaeaea",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0, 51, 102, 0.25)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: hasRealImage ? "280px" : "160px",
          position: "relative",
          bgcolor: "#f0f2f5",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={imgSrc}
          onError={handleImageError}
          alt={docente.nombre}
          loading="lazy" // Habilita lazy loading
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#0054a783",
            opacity: 0.15,
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: hasRealImage ? "255px" : "135px",
          left: "24px",
          bgcolor: "#ffffff",
          borderRadius: "50%",
          p: 0.5,
          display: "flex",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <img
          style={{
            backgroundColor: themeColor,
            width: 40,
            height: 40,
            WebkitMask: "url('https://cdn-icons-png.flaticon.com/128/1378/1378526.png') no-repeat center",
            mask: "url('https://cdn-icons-png.flaticon.com/128/1378/1378526.png') no-repeat center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
          alt="Especialidad"
        />
      </Box>

      <Box
        sx={{
          p: { xs: 3, sm: 4 },
          pt: { xs: 4, sm: 4 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          zIndex: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="900"
          color={themeColor}
          textTransform="uppercase"
          mb={2}
          sx={{
            minHeight: "40px",
            letterSpacing: 0.5,
            fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
          }}
        >
          {docente.especialidad}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4, flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
            <PersonIcon sx={{ color: "#003366", fontSize: 20, mt: 0.3 }} />
            <Typography
              variant="body1"
              fontWeight="800"
              color="#003366"
              lineHeight={1.2}
              sx={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
            >
              {docente.grado} <br /> {docente.nombre}
            </Typography>
          </Box>

          <Box
            onClick={() => onCopyEmail(docente.correo)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              p: 0.5,
              borderRadius: "8px",
              ml: -0.5,
              "&:hover": { bgcolor: "#f0f6ff" },
              "&:hover .email-text": { color: "#007BFF" },
              "&:hover .copy-icon": {
                opacity: 1,
                filter: "brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(3190%) hue-rotate(200deg) brightness(98%) contrast(106%)",
              },
            }}
          >
            <Box
              component="img"
              src={IconCopy}
              className="copy-icon"
              alt="Copiar"
              sx={{ width: 18, height: 18, opacity: 0.6, transition: "all 0.2s" }}
            />
            <Typography className="email-text" variant="body2" fontWeight="600" color="#666" sx={{ transition: "color 0.2s", fontSize: "clamp(0.8rem, 1.2vw, 0.875rem)" }}>
              Copiar Correo
            </Typography>
          </Box>

          <Box
            onClick={() => window.open(`mailto:${docente.correo}`, "_blank")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              p: 0.5,
              borderRadius: "8px",
              ml: -0.5,
              "&:hover": { bgcolor: "#e8f5e9" },
              "&:hover .mail-text": { color: "#bb4444c4" },
              "&:hover .mail-icon": { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={IconMail}
              className="mail-icon"
              alt="Enviar"
              sx={{ width: 18, height: 18, opacity: 0.6, transition: "all 0.2s" }}
            />
            <Typography className="mail-text" variant="body2" fontWeight="600" color="#666" sx={{ transition: "color 0.2s", fontSize: "clamp(0.8rem, 1.2vw, 0.875rem)" }}>
              Enviar Correo
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mt: "auto" }}>
          <Box sx={{ display: "flex", color: "#003366", pb: 1, opacity: 0.4, "& svg": { fontSize: 35 } }}>
            <KeyboardDoubleArrowRightIcon />
            <KeyboardDoubleArrowRightIcon sx={{ ml: -2 }} />
          </Box>

          <Button
            variant="contained"
            onClick={() => onOpenCV(docente.nombre, docente.cvUrl)}
            sx={{
              bgcolor: "#003869",
              color: "#ffffff",
              borderRadius: "20px",
              px: { xs: 2.5, md: 3 },
              py: 0.8,
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "none",
              fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
              "&:hover": { bgcolor: "#006ecf", boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)" },
            }}
          >
            Ver CV
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
  const [selectedCvUrl, setSelectedCvUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, easing: "ease-out-cubic" });
  }, []);

  const handleOpenCV = useCallback((nombre, url) => {
    setSelectedDocente(nombre);
    setSelectedCvUrl(url);
    setOpenPdf(true);
  }, []);

  const handleCopyEmail = useCallback((email) => {
    navigator.clipboard.writeText(email);
    setSnackbarOpen(true);
  }, []);

  // --- DATOS DEL DIRECTORIO ---
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

  // DOCENTES SIN URLs EXTERNAS (Cargarán localmente mediante getLocalImagePath)
  const docentes = [
    { grado: "Lic.", nombre: "ABARCA OCHOA, JUDITH", especialidad: "MATEMÁTICA", correo: "docente@arcoiris.edu.pe", cvUrl: "..." },
    { grado: "Prof.", nombre: "ALTAMIRANO QUISPE, NOEMI", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mag.", nombre: "APAZA ROJAS, PATRICIA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mag.", nombre: "AQUINO LARICO, JENNIFER", especialidad: "INVESTIGACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "ARIZACA MACEDO, SERAFIN", especialidad: "QUECHUA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "ARMUTO TAYRO, EDGAR", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "AUCCAISE UÑAPILLCO, DOROTEA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "AVILES DALGUERRE, FELIX", especialidad: "HISTORIA Y GEOGRAFIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "AYBAR BUSTAMANTE, EUNICE LUCERO", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mag.", nombre: "AZURIN QUILLILLI, EYELIT", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dra.", nombre: "BAÑARES JAQUE, MIRIAN", especialidad: "INVESTIGACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "BEDOYA MENDOZA, JAIME", especialidad: "CIENCIAS SOCIALES", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "BEJAR GARCIA, EDISSON", especialidad: "COMUNICACION COMPUTACION E INFORMATICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "CAMA JARA, MANUEL NICANOR", especialidad: "INGLES", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "CARDENAS ROZAS, NARCISO", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dr.", nombre: "CARREON SUTEC, ALAIN GUNNAR", especialidad: "INVESTIGACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "CHALLANCA HUILLCA, FANY ODALIZ", especialidad: "COMUNICACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dra.", nombre: "CHAVEZ MEZA, ABIGAIL", especialidad: "INVESTIGACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mat.", nombre: "CONCHA MARTINEZ, NELLY ROXANA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "CORRALES VISA, WILBERT", especialidad: "MATEMATICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "ESPINOZA BACA, OSCAR", especialidad: "EDUCACIÓN PRIMARIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "ESPINOZA CHALLCO, DANILO", especialidad: "CIENCIAS SOCIALES", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "FERNANDEZ BACA ARENAS, FRANCISCO", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dr.", nombre: "GARCIA HUAMAN, SANTOS", especialidad: "HISTORIA Y GEOGRAFIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "GARCIA JARA, JESSICA ANGELA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "GARCIA MOSCOSO, YARITNA", especialidad: "HISTORIA Y GEOGRAFIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mat.", nombre: "GUTIERREZ DELGADO, ADAUS", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "GUTIERREZ DIAZ, EPIFANIO MARTIN", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "HOLDER TAMAYO, ALEXEY", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mat.", nombre: "HUAMAN CORDOVA, ALEXANDER", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dra.", nombre: "HUANACO BUSTINZA, MERY ZULEMA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "HUILLCA CCUNO, ROCDY", especialidad: "EDUCACIÓN FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "INCARROCA QUISPE, WILBER", especialidad: "EDUCACIÓN FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Ing.", nombre: "LOPE DAZA, LUZ KATIA", especialidad: "ESTADISTICO", correo: "docente@arcoiris.edu.pe" },
    { grado: "Dra.", nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Bch.", nombre: "MUÑOZ HUAMANCARI, MARIA ANTONIETA", especialidad: "HISTORIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "OLIVERA LEZAMA, JULIO EDMUNDO", especialidad: "ANTROPOLOGIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mat.", nombre: "OVALLE ARAPA, HUGO", especialidad: "ARTE", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "PEÑA PACHECO, YENNY", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "PEREZ OPORTO, GLORIA MARY LUZ", especialidad: "EDUCACION INICIAL, EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "QUIÑONES FERNANDEZ, ADOLFO", especialidad: "N/A", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "QUISIYUPANQUI CATALAN, MARTHA", especialidad: "EDUCACIÓN FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "QUISPE ARROYO, FELIX", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Md.", nombre: "QUISPE SUPANTA, ERICK WAGNER", especialidad: "MEDICO", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "RAMIREZ PEZO, ABEL", especialidad: "TURISMO", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "RODRIGUEZ SOTO, VICTOR", especialidad: "EDUCACION PRIMARIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "ROSAS GOMEZ, RENZO GUILLERMO", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "SALAZAR VALENCIA, LUCIA CEFERINA", especialidad: "EDUCACION INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "SALCEDO QUISPE, JULIO CESAR", especialidad: "EDUCACIÓN FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "SARAVIA PEÑA, CELINDA", especialidad: "COMUNICACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "SERRANO FLOREZ, OSCAR", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "SORIA MENDOZA, YULI YASMINA", especialidad: "INVESTIGACIÓN", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mat.", nombre: "TAPIA ALOSILLA, ROGER TEOFILO", especialidad: "MATEMATICA E INFORMATICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "TAPIA MELENDEZ, DAVID ARTURO", especialidad: "CIENCIAS SOCIALES", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "TORRES HUAMAN, JANIA KARIN", especialidad: "BIOLOGIA Y QUIMICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "VALENZUELA BARRETO, ELOY", especialidad: "EDUCACION FISICA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "VICTORIA CABALLERO, YANIRA", especialidad: "EDUCACIÓN PRIMARIA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Prof.", nombre: "VICTORIO MOSCOSO, ANGIE MICHELLE", especialidad: "EDUCACIÓN INICIAL", correo: "docente@arcoiris.edu.pe" },
    { grado: "Lic.", nombre: "YANA MOSQUEIRA, KALINKA KRUSKAYA", especialidad: "PSICOLOGA", correo: "docente@arcoiris.edu.pe" },
    { grado: "Mgt.", nombre: "ZARATE CASTRO, FRANCISCO PEPE", especialidad: "CIENCIAS SOCIALES", correo: "docente@arcoiris.edu.pe" },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      {/* 1. PORTADA HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "100vh", lg: "100vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366d2",
          pt: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
          paddingBottom: { xs: 0, md: 6 },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${FondoDirectorio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-down" sx={{ textAlign: "center" }}>
            <Typography variant="overline" sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: { xs: 2, md: 3 }, fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}>
              NUESTRO EQUIPO
            </Typography>
            <Typography variant="h1" fontWeight="900" sx={{ color: "#ffffff", textTransform: "uppercase", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1, mb: 2, px: { xs: 2, md: 0 } }}>
              Directorio Institucional
            </Typography>
            <Typography variant="h6" sx={{ color: "#F0F2F5", maxWidth: "600px", mx: "auto", fontWeight: 400, fontSize: "clamp(0.95rem, 2vw, 1.25rem)", px: { xs: 2, md: 0 } }}>
              Conoce a los líderes y profesionales que impulsan nuestra misión educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. ORGANIGRAMA INSTITUCIONAL */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <AccountTreeIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#007BFF", mb: 2 }} />
          <Typography variant="h3" fontWeight="900" color="#003366" textTransform="uppercase" sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Organigrama Institucional
          </Typography>
          <Typography variant="body1" color="#333333" mt={1} sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
            Nuestra estructura organizativa para una gestión eficiente y transparente.<br />
            Estructura jerárquica del Instituto Superior Pedagógico Privado Arco Iris del Cusco.
          </Typography>
        </Box>

        <Box data-aos="fade-up">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: "24px",
              border: "3px dashed rgba(0, 123, 255, 0.4)",
              minHeight: { xs: "300px", sm: "400px", md: "500px", lg: "650px" },
              width: "100%",
              maxWidth: { lg: "950px", xl: "1150px" },
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
              backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255, 255, 255, 0.9)), url("https://previews.123rf.com/images/kolllibri/kolllibri1409/kolllibri140900046/31643279-seamless-texture-with-geometrical-shapes-endless-white-background-use-for-wallpaper-pattern-fills.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
          >
            <Box component="img" loading="lazy" src={Organigrama} sx={{ width: { xs: "100%", sm: "90%", md: "85%", lg: "80%" }, height: "auto", maxHeight: "80vh", objectFit: "contain" }} />
          </Paper>
        </Box>
      </Container>

      {/* 3. PERSONAL DIRECTIVO Y ADMINISTRATIVO */}
      <Box sx={{ bgcolor: "#003366", py: { xs: 8, md: 10 }, color: "#fff", position: "relative" }}>
        <Container maxWidth="lg">
          {/* Directivo */}
          <Box mb={{ xs: 8, md: 10 }}>
            <Box data-aos="fade-right" sx={{ mb: { xs: 4, md: 6 }, borderLeft: "4px solid #007BFF", pl: { xs: 2, md: 3 } }}>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase" sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Personal Directivo
              </Typography>
            </Box>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {directivo.map((person, idx) => (
                <Grid size={{ xs: 12, lg: 6 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: "16px", bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: { xs: 2, md: 3 }, backdropFilter: "blur(10px)" }}>
                    <AssignmentIndIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#C59B27" }} />
                    <Box>
                      <Typography variant="caption" color="#007BFF" fontWeight="bold" letterSpacing={1} sx={{ fontSize: "clamp(0.7rem, 1.2vw, 0.875rem)" }}>{person.cargo}</Typography>
                      <Typography variant="h6" fontWeight="bold" color="#fff" sx={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}>{person.grado} {person.nombre}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Administrativo */}
          <Box>
            <Box data-aos="fade-right" sx={{ mb: { xs: 4, md: 6 }, borderLeft: "4px solid #C59B27", pl: { xs: 2, md: 3 } }}>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase" sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Personal Administrativo
              </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {administrativo.map((person, idx) => {
                const imgAdministrativo = getLocalImagePath(person.nombre);
                // Si la imagen carga, se usará la que está en tu carpeta local .webp
                const hasImage = true; 
                return (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                    <Paper
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        borderRadius: "16px",
                        bgcolor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        position: "relative",
                        overflow: "hidden",
                        height: "120px",
                        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",
                        "&:hover": hasImage ? { height: "340px", borderColor: "#C59B27", bgcolor: "rgba(197, 155, 39, 0.05)", transform: "translateY(-5px)", zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" } : { transform: "translateY(-5px)", borderColor: "#C59B27", bgcolor: "rgba(197, 155, 39, 0.05)" },
                        "&:hover .admin-img-box": hasImage ? { opacity: 1, transform: "translateY(0)" } : {},
                      }}
                    >
                      <Box sx={{ position: "relative", zIndex: 2 }}>
                        <Typography variant="caption" color="#C59B27" fontWeight="bold" display="block" mb={0.5}>{person.cargo}</Typography>
                        <Typography variant="subtitle1" fontWeight="bold" color="#fff" lineHeight={1.3}>{person.grado} {person.nombre}</Typography>
                        {hasImage && (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1, color: "rgba(255,255,255,0.4)" }}>
                            <ImageIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption">Pasa el mouse para ver perfil</Typography>
                          </Box>
                        )}
                      </Box>
                      {hasImage && (
                        <Box className="admin-img-box" sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "230px", opacity: 0, transform: "translateY(50px)", transition: "opacity 0.4s ease, transform 0.4s ease", zIndex: 1 }}>
                          <Box
                            component="img"
                            src={imgAdministrativo}
                            loading="lazy"
                            onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }}
                            sx={{ width: "70%", height: "100%", borderRadius: "45% 45% 0 0", objectFit: "cover", objectPosition: "top center", display: "block", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.1)" }}
                          />
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

      {/* 4. PERSONAL DOCENTE OPTIMIZADO */}
      <Box sx={{ position: "relative", py: { xs: 8, md: 12 }, bgcolor: "#ffffff", overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography variant="overline" sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2, fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}>
              EXCELENCIA ACADÉMICA
            </Typography>
            <Typography variant="h2" fontWeight="900" color="#003366" textTransform="uppercase" mb={2} sx={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Personal Docente
            </Typography>
            <Typography variant="h6" color="#333333" fontWeight="400" sx={{ maxWidth: "700px", mx: "auto", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", px: { xs: 2, md: 0 } }}>
              Nuestros docentes, el pilar fundamental de la formación académica y profesional.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {docentes.map((docente, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index} data-aos="fade-up" data-aos-offset="100">
                <DocenteCard docente={docente} onOpenCV={handleOpenCV} onCopyEmail={handleCopyEmail} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SNACKBAR PARA AVISO DE CORREO COPIADO */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled" sx={{ width: "100%", bgcolor: "#003366", color: "#fff" }}>
          ¡Correo copiado al portapapeles exitosamente!
        </Alert>
      </Snackbar>

      {/* MODAL PDF PARA VER CV */}
      <Dialog open={openPdf} onClose={() => setOpenPdf(false)} maxWidth="lg" fullWidth PaperProps={{ sx: { borderRadius: "16px", m: { xs: 2, md: 4 } } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: { xs: 2, md: 3 }, bgcolor: "#003366", color: "#ffffff" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Curriculum Vitae - {selectedDocente}
          </Typography>
          <IconButton onClick={() => setOpenPdf(false)} sx={{ color: "#ffffff" }}><CloseIcon /></IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, bgcolor: "#333333" }}>
          {selectedCvUrl ? (
            <iframe src={selectedCvUrl} width="100%" height="100%" style={{ border: "none" }} title={`CV de ${selectedDocente}`} />
          ) : (
            <Typography color="white" textAlign="center" mt={10}>El documento no está disponible en este momento.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}