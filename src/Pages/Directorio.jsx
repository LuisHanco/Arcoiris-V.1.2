import React, { useState, useEffect, memo, useCallback, useMemo, useRef } from "react";
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
  Pagination,
  Tooltip,
  Avatar,
} from "@mui/material";
import { motion } from "motion/react";

// Íconos de Material UI
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

import FondoDirectorio from "../assets/Imagenes/InicioClases1.webp";
import Organigrama from "../assets/organigrama.webp";

// =====================================================================
// CONSTANTES Y UTILIDADES ESTÁTICAS
// =====================================================================

const normalizeText = (text = "") =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const getColorBySpecialty = (specialty) => {
  if (!specialty) return "#003366";
  const spec = normalizeText(specialty).toUpperCase();
  if (spec.includes("INICIAL")) return "#9D174D";
  if (spec.includes("FISICA")) return "#C2410C";
  if (spec.includes("SOCIALES") || spec.includes("HISTORIA") || spec.includes("ANTROPOLOGIA")) return "#065F46";
  if (spec.includes("COMUNICACION") || spec.includes("INGLES") || spec.includes("QUECHUA") || spec.includes("ARTE")) return "#3730A3";
  if (spec.includes("BIOLOGIA") || spec.includes("QUIMICA") || spec.includes("MEDICO")) return "#166534";
  if (spec.includes("MATEMATICA")) return "#0369A1";
  if (spec.includes("ESTADISTICA")) return "#0E7490";
  if (spec.includes("PRIMARIA")) return "#B45309";
  if (spec.includes("INVESTIGACION")) return "#991B1B";
  if (spec.includes("TURISMO")) return "#6B21A8";
  return "#1E3A8A";
};

// Extrae las iniciales del nombre para mostrar cuando no exista fotografía
const getInitials = (nombre = "") => {
  const parts = nombre.replace(/,/g, "").trim().split(/\s+/);
  if (parts.length >= 2) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  return nombre.slice(0, 2).toUpperCase();
};

const getLocalImagePath = (nombre) => {
  try {
    const cleanName = nombre.replace(/,/g, "").trim();
    return new URL(`../assets/Imagenes/fotos/${cleanName}.webp`, import.meta.url).href;
  } catch {
    return "";
  }
};

// --- DATOS DEL PERSONAL DIRECTIVO Y ADMINISTRATIVO (Con soporte para cvUrl) ---
const DIRECTIVO_DATA = [
  {
    grado: "Dr.",
    nombre: "PAREDES OJEDA, MARIO JESUS",
    cargo: "DIRECCIÓN GENERAL",
    cvUrl: "...",
  },
];

const ADMINISTRATIVO_DATA = [
  { grado: "Lic.", nombre: "VICTORIA CABALLERO, JOSE ALEJANDRO", cargo: "JEFE DE ÁREA DE ADMINISTRACIÓN", cvUrl: "..." },
  { grado: "Mag.", nombre: "TORRES MAMANI, VERONICA LUZ", cargo: "SECRETARÍA GENERAL", cvUrl: "..." },
  { grado: "Abog.", nombre: "TORRES HUAMAN, JANIA KARIN", cargo: "ÁREA DE CALIDAD", cvUrl: "..." },
  { grado: "Abog.", nombre: "TORRES HUAMAN, JANIA KARIN", cargo: "ASESORÍA NORMATIVA", cvUrl: "..." },
  { grado: "Dra.", nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA", cargo: "UNIDAD ACADÉMICA", cvUrl: "..." },
  { grado: "Mag.", nombre: "CONCHA MARTINEZ, NELLY ROXANA", cargo: "JEFA DE LA UNIDAD DE FORMACIÓN CONTINUA", cvUrl: "..." },
  { grado: "Lic.", nombre: "ESPINOZA ROJAS, KARINA LIZT", cargo: "SECRETARÍA ACADÉMICA", cvUrl: "..." },
  { grado: "Mag.", nombre: "RODRIGUEZ SOTO, VÍCTOR", cargo: "UNIDAD DE INVESTIGACIÓN E INNOVACIÓN", cvUrl: "..." },
  { grado: "Mag.", nombre: "PUMA CONCHA, MARLENY", cargo: "UNIDAD DE BIENESTAR Y EMPLEABILIDAD", cvUrl: "..." },
];

// --- LISTA DE LOS 48 DOCENTES ---
const DOCENTES_DATA = [
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
  { grado: "Prof.", nombre: "ZAKI CASTRO, MARISOL JULIA", especialidad: "EDUCACIÓN INICIAL", correo: "zjulia@arcoiris.edu.pe", hojaVidaUrl: "..." },
];

const ESPECIALIDADES_UNICAS = [
  "TODOS",
  ...new Set(DOCENTES_DATA.map((d) => d.especialidad).filter(Boolean)),
].sort();

const DOCENTES_POR_PAGINA = 9;

// =====================================================================
// COMPONENTE: TARJETA DEL PERSONAL ADMINISTRATIVO (Sin foto, con botón CV)
// =====================================================================
const AdministrativoCard = memo(({ person, onOpenCv, isDirectivo = false }) => {
  const tieneCv = Boolean(person.cvUrl && person.cvUrl !== "...");
  const accentColor = isDirectivo ? "#38BDF8" : "#FBBF24";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3.5,
        borderRadius: "20px",
        bgcolor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          bgcolor: accentColor,
          opacity: 0.85,
        },
        "&:hover": {
          transform: "translateY(-6px)",
          bgcolor: "rgba(255, 255, 255, 0.07)",
          borderColor: accentColor,
          boxShadow: "0 16px 32px rgba(0, 0, 0, 0.35)",
        },
      }}
    >
      {/* Cabecera: Cargo y Nombre */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "12px",
              bgcolor: isDirectivo ? "rgba(56, 189, 248, 0.15)" : "rgba(251, 191, 36, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: accentColor,
              flexShrink: 0,
            }}
          >
            {isDirectivo ? <AssignmentIndIcon /> : <WorkOutlineRoundedIcon />}
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: accentColor,
              fontWeight: 800,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              lineHeight: 1.3,
              fontSize: "0.75rem",
            }}
          >
            {person.cargo}
          </Typography>
        </Box>

        <Typography
          variant={isDirectivo ? "h5" : "h6"}
          fontWeight="800"
          color="#FFFFFF"
          sx={{ lineHeight: 1.35, mb: 3, fontSize: isDirectivo ? "1.35rem" : "1.05rem" }}
        >
          <Box component="span" sx={{ color: "#94A3B8", fontWeight: 600, mr: 0.8 }}>
            {person.grado}
          </Box>
          {person.nombre}
        </Typography>
      </Box>

      {/* Pie de tarjeta: Botón de CV */}
      <Box
        sx={{
          pt: 2,
          mt: "auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant={tieneCv ? "contained" : "outlined"}
          size="small"
          disabled={!tieneCv}
          startIcon={<DescriptionRoundedIcon />}
          onClick={() => onOpenCv(`${person.grado} ${person.nombre}`, person.cvUrl)}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 700,
            px: 2,
            py: 0.7,
            bgcolor: tieneCv ? accentColor : "transparent",
            color: tieneCv ? "#0F172A" : "rgba(255,255,255,0.4)",
            borderColor: "rgba(255,255,255,0.15)",
            "&:hover": {
              bgcolor: tieneCv ? accentColor : "transparent",
              filter: "brightness(1.1)",
            },
            "&.Mui-disabled": {
              color: "rgba(255, 255, 255, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {tieneCv ? "Ver CV" : "CV no disponible"}
        </Button>
      </Box>
    </Paper>
  );
});

AdministrativoCard.displayName = "AdministrativoCard";

// =====================================================================
// COMPONENTE: TARJETA DEL DOCENTE (Diseño Mejorado)
// =====================================================================
const DocenteCard = memo(({ docente, onOpenHojaVida, onCopyEmail }) => {
  const themeColor = getColorBySpecialty(docente.especialidad);
  const [imgSrc, setImgSrc] = useState(() => getLocalImagePath(docente.nombre));
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImgSrc(getLocalImagePath(docente.nombre));
    setImageFailed(false);
  }, [docente.nombre]);

  const handleImageError = () => {
    setImageFailed(true);
  };

  const tieneCvDisponible = Boolean(docente.hojaVidaUrl && docente.hojaVidaUrl !== "...");

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "24px",
        position: "relative",
        bgcolor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 22px 45px -10px rgba(15, 23, 42, 0.14)",
          borderColor: themeColor,
          "& .docente-foto": {
            transform: "scale(1.06)",
          },
        },
      }}
    >
      {/* Barra superior de color según especialidad */}
      <Box sx={{ height: "6px", width: "100%", bgcolor: themeColor }} />

      {/* Contenedor de Fotografía o Avatar elegante de respaldo */}
      <Box
        sx={{
          width: "100%",
          height: "250px",
          position: "relative",
          bgcolor: "#F1F5F9",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!imageFailed && imgSrc ? (
          <>
            <Box
              component="img"
              className="docente-foto"
              src={imgSrc}
              onError={handleImageError}
              alt={`Fotografía de ${docente.grado} ${docente.nombre}`}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                transition: "transform 0.5s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0) 55%)",
                pointerEvents: "none",
              }}
            />
          </>
        ) : (
          // Fondo estilizado con iniciales cuando el docente no tiene foto
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${themeColor}15 0%, ${themeColor}35 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                width: 96,
                height: 96,
                bgcolor: themeColor,
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "900",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              {getInitials(docente.nombre)}
            </Avatar>
          </Box>
        )}

        {/* Chip de especialidad flotante */}
        <Chip
          label={docente.especialidad}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            bgcolor: "rgba(15, 23, 42, 0.78)",
            backdropFilter: "blur(8px)",
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: "0.68rem",
            letterSpacing: 0.5,
            border: `1px solid ${themeColor}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      {/* Cuerpo de la tarjeta */}
      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: "#FFFFFF",
        }}
      >
        <Box>
          {/* Grado académico en insignia y Nombre */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <SchoolRoundedIcon sx={{ fontSize: 18, color: themeColor }} />
            <Typography
              variant="caption"
              sx={{
                color: themeColor,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                bgcolor: `${themeColor}14`,
                px: 1.2,
                py: 0.3,
                borderRadius: "6px",
              }}
            >
              {docente.grado}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontWeight="900"
            color="#0F172A"
            sx={{
              fontSize: "1.08rem",
              lineHeight: 1.3,
              mb: 2.5,
              minHeight: "2.6em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {docente.nombre}
          </Typography>

          {/* Caja de Correo Electrónico con Acciones Rápidas */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              p: 1,
              pl: 1.5,
              mb: 3,
              transition: "border-color 0.2s",
              "&:hover": { borderColor: "#CBD5E1" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, overflow: "hidden", mr: 1 }}>
              <AlternateEmailRoundedIcon sx={{ fontSize: 18, color: "#64748B", flexShrink: 0 }} />
              <Typography
                variant="caption"
                sx={{
                  color: "#334155",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "0.78rem",
                }}
                title={docente.correo}
              >
                {docente.correo}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 0.5, flexShrink: 0 }}>
              <Tooltip title="Copiar correo" arrow>
                <IconButton
                  size="small"
                  onClick={() => onCopyEmail(docente.correo)}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    color: "#475569",
                    "&:hover": { bgcolor: "#EFF6FF", color: "#0284C7", borderColor: "#BAE6FD" },
                  }}
                >
                  <ContentCopyRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Enviar correo" arrow>
                <IconButton
                  size="small"
                  component="a"
                  href={`mailto:${docente.correo}`}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    color: "#475569",
                    "&:hover": { bgcolor: "#FEF2F2", color: "#DC2626", borderColor: "#FECACA" },
                  }}
                >
                  <SendRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        {/* Botón de Hoja de Vida de ancho completo */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => onOpenHojaVida(`${docente.grado} ${docente.nombre}`, docente.hojaVidaUrl)}
          disabled={!tieneCvDisponible}
          startIcon={<ContactPageRoundedIcon />}
          sx={{
            bgcolor: themeColor,
            color: "#FFFFFF",
            borderRadius: "14px",
            py: 1.2,
            fontWeight: 800,
            textTransform: "none",
            boxShadow: `0 6px 16px -4px ${themeColor}66`,
            fontSize: "0.9rem",
            "&:hover": {
              bgcolor: themeColor,
              filter: "brightness(1.12)",
              boxShadow: `0 10px 22px -4px ${themeColor}88`,
            },
            "&.Mui-disabled": {
              bgcolor: "#F1F5F9",
              color: "#94A3B8",
              boxShadow: "none",
              border: "1px solid #E2E8F0",
            },
          }}
        >
          {tieneCvDisponible ? "Ver Hoja de Vida" : "Hoja de Vida no disponible"}
        </Button>
      </Box>
    </Paper>
  );
});

DocenteCard.displayName = "DocenteCard";

// =====================================================================
// COMPONENTE PRINCIPAL
// =====================================================================
export default function Directorio() {
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedPersonName, setSelectedPersonName] = useState("");
  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Estados para filtros y paginación
  const [busqueda, setBusqueda] = useState("");
  const [filtroEspecialidad, setFiltroEspecialidad] = useState("TODOS");
  const [pagina, setPagina] = useState(1);

  const docentesSectionRef = useRef(null);

  useEffect(() => {
    setPagina(1);
  }, [busqueda, filtroEspecialidad]);

  const handleOpenPdfModal = useCallback((nombre, url) => {
    setSelectedPersonName(nombre);
    setSelectedPdfUrl(url);
    setOpenPdf(true);
  }, []);

  const handleCopyEmail = useCallback(async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setSnackbarState({
        open: true,
        message: `¡Correo (${email}) copiado al portapapeles!`,
        severity: "success",
      });
    } catch {
      setSnackbarState({
        open: true,
        message: "No se pudo copiar automáticamente. Intenta manualmente.",
        severity: "warning",
      });
    }
  }, []);

  // Filtrado de docentes
  const docentesFiltrados = useMemo(() => {
    const query = normalizeText(busqueda);
    return DOCENTES_DATA.filter((docente) => {
      const coincideBusqueda =
        !query ||
        normalizeText(docente.nombre).includes(query) ||
        normalizeText(docente.especialidad).includes(query);
      const coincideFiltro =
        filtroEspecialidad === "TODOS" || docente.especialidad === filtroEspecialidad;
      return coincideBusqueda && coincideFiltro;
    });
  }, [busqueda, filtroEspecialidad]);

  const totalPaginas = Math.ceil(docentesFiltrados.length / DOCENTES_POR_PAGINA);
  const datosPaginados = useMemo(() => {
    const inicio = (pagina - 1) * DOCENTES_POR_PAGINA;
    return docentesFiltrados.slice(inicio, inicio + DOCENTES_POR_PAGINA);
  }, [docentesFiltrados, pagina]);

  const handlePageChange = (_, value) => {
    setPagina(value);
    if (docentesSectionRef.current) {
      const yOffset = -80;
      const y =
        docentesSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ bgcolor: "#F8FAFC", overflow: "hidden" }}>
      {/* 1. PORTADA HERO PREMIUM */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#001F3F",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, rgba(0, 31, 63, 0.9) 0%, rgba(0, 123, 255, 0.7) 100%), url(${FondoDirectorio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ textAlign: "center", color: "#fff" }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#93C5FD", fontWeight: 900, letterSpacing: 3, fontSize: "1rem" }}
            >
              NUESTRO EQUIPO
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                textTransform: "uppercase",
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                lineHeight: 1.1,
                mb: 2,
                textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Directorio Institucional
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#E2E8F0", maxWidth: "600px", mx: "auto", fontWeight: 400 }}
            >
              Conoce a los líderes y profesionales que impulsan nuestra misión educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. ORGANIGRAMA INSTITUCIONAL */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <AccountTreeIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#007BFF", mb: 2 }} />
          <Typography
            variant="h3"
            fontWeight="900"
            color="#0F172A"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Organigrama Institucional
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            maxWidth: "1150px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
            bgcolor: "#fff",
          }}
        >
          <Box
            component="img"
            loading="lazy"
            decoding="async"
            src={Organigrama}
            alt="Organigrama Institucional del IESPP Arco Iris"
            sx={{ width: { xs: "100%", md: "85%" }, height: "auto", objectFit: "contain" }}
          />
        </Paper>
      </Container>

      {/* 3. PERSONAL DIRECTIVO Y ADMINISTRATIVO (Tarjetas ejecutivas sin foto + botón CV) */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #001730 0%, #00264D 100%)",
          py: { xs: 8, md: 12 },
          color: "#fff",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* Directivo */}
          <Box mb={{ xs: 8, md: 10 }}>
            <Box sx={{ mb: 5, borderLeft: "4px solid #38BDF8", pl: 3 }}>
              <Typography variant="overline" sx={{ color: "#38BDF8", fontWeight: 800, letterSpacing: 2 }}>
                ALTA DIRECCIÓN
              </Typography>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase">
                Personal Directivo
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {DIRECTIVO_DATA.map((person) => (
                <Grid size={{ xs: 12, md: 8, lg: 6 }} key={`${person.cargo}-${person.nombre}`}>
                  <AdministrativoCard
                    person={person}
                    onOpenCv={handleOpenPdfModal}
                    isDirectivo
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Administrativo */}
          <Box>
            <Box sx={{ mb: 5, borderLeft: "4px solid #FBBF24", pl: 3 }}>
              <Typography variant="overline" sx={{ color: "#FBBF24", fontWeight: 800, letterSpacing: 2 }}>
                GESTIÓN INSTITUCIONAL
              </Typography>
              <Typography variant="h3" fontWeight="900" textTransform="uppercase">
                Personal Administrativo y Jefaturas
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {ADMINISTRATIVO_DATA.map((person) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={`${person.cargo}-${person.nombre}`}>
                  <AdministrativoCard
                    person={person}
                    onOpenCv={handleOpenPdfModal}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 4. PERSONAL DOCENTE CON PAGINACIÓN Y FILTROS */}
      <Box ref={docentesSectionRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}>
              EXCELENCIA ACADÉMICA
            </Typography>
            <Typography variant="h2" fontWeight="900" color="#0F172A" textTransform="uppercase" mb={1.5}>
              Plana Docente
            </Typography>
            <Chip
              label={`Mostrando ${docentesFiltrados.length} de ${DOCENTES_DATA.length} docentes`}
              sx={{ bgcolor: "#E2E8F0", color: "#334155", fontWeight: 700 }}
            />
          </Box>

          {/* BARRA DE BÚSQUEDA Y FILTROS */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: "20px",
              mb: 6,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              border: "1px solid #E2E8F0",
              bgcolor: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar docente por nombre, apellido o especialidad..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon sx={{ color: "#94A3B8" }} />
                    </InputAdornment>
                  ),
                  endAdornment: busqueda && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setBusqueda("")} aria-label="Limpiar búsqueda">
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { borderRadius: "14px", bgcolor: "#F8FAFC" },
                },
              }}
            />

            <FormControl sx={{ minWidth: { xs: "100%", md: "320px" } }}>
              <InputLabel>Filtrar por Especialidad</InputLabel>
              <Select
                value={filtroEspecialidad}
                label="Filtrar por Especialidad"
                onChange={(e) => setFiltroEspecialidad(e.target.value)}
                startAdornment={
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <FilterListRoundedIcon sx={{ color: "#94A3B8" }} />
                  </InputAdornment>
                }
                sx={{ borderRadius: "14px", bgcolor: "#F8FAFC" }}
              >
                {ESPECIALIDADES_UNICAS.map((esp) => (
                  <MenuItem key={esp} value={esp} sx={{ fontWeight: "600" }}>
                    {esp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>

          {/* GRILLA DE DOCENTES PAGINADOS */}
          {datosPaginados.length === 0 ? (
            <Box textAlign="center" py={10}>
              <PersonIcon sx={{ fontSize: 80, color: "#CBD5E1", mb: 2 }} />
              <Typography variant="h5" color="#64748B" fontWeight="bold">
                No se encontraron docentes.
              </Typography>
              <Typography variant="body1" color="#94A3B8" mb={3}>
                Intenta con otros términos de búsqueda o restablece los filtros.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setBusqueda("");
                  setFiltroEspecialidad("TODOS");
                }}
                sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 700 }}
              >
                Restablecer filtros
              </Button>
            </Box>
          ) : (
            <>
              <Grid container spacing={4}>
                {datosPaginados.map((docente) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={docente.nombre}>
                    <DocenteCard
                      docente={docente}
                      onOpenHojaVida={handleOpenPdfModal}
                      onCopyEmail={handleCopyEmail}
                    />
                  </Grid>
                ))}
              </Grid>

              {/* CONTROLES DE PAGINACIÓN */}
              {totalPaginas > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                  <Pagination
                    count={totalPaginas}
                    page={pagina}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    sx={{ "& .MuiPaginationItem-root": { fontWeight: "bold", fontSize: "1.05rem" } }}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>

      {/* SNACKBAR PARA AVISO DE CORREO COPIADO */}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={() => setSnackbarState((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarState((prev) => ({ ...prev, open: false }))}
          severity={snackbarState.severity}
          variant="filled"
          sx={{ width: "100%", borderRadius: "12px", fontWeight: "bold" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>

      {/* MODAL PDF UNIFICADO (SIRVE TANTO PARA ADMINISTRATIVOS COMO DOCENTES) */}
      <Dialog
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: { sx: { borderRadius: "24px", m: { xs: 2, md: 4 }, overflow: "hidden" } },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            bgcolor: "#0F172A",
            color: "#ffffff",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Hoja de Vida - {selectedPersonName}
          </Typography>
          <IconButton
            onClick={() => setOpenPdf(false)}
            aria-label="Cerrar modal"
            sx={{
              color: "#ffffff",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: "80vh", bgcolor: "#E2E8F0" }}>
          {selectedPdfUrl && selectedPdfUrl !== "..." ? (
            <iframe
              src={selectedPdfUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={`Hoja de Vida de ${selectedPersonName}`}
            />
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <Typography color="#64748B" variant="h6" fontWeight="bold">
                El documento no está disponible en este momento.
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}