import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FoundationIcon from "@mui/icons-material/Foundation";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VerifiedIcon from "@mui/icons-material/Verified";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkIcon from "@mui/icons-material/Link"; // Ícono para los que navegan a otras páginas

import fondoTransparencia from "../assets/Imagenes/MarchaInicial.webp";
import fachada from "../assets/Imagenes/Fachada1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const DocumentLink = ({ title, icon, onClick, isRoute }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: { xs: 1, md: 2 },
      p: { xs: 1.5, md: 2 },
      mb: 1.5,
      bgcolor: "#F0F2F5",
      borderRadius: "12px",
      border: "1px solid rgba(0, 123, 255, 0.1)",
      transition: "all 0.3s",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#007BFF",
        bgcolor: "rgba(0, 123, 255, 0.05)",
        transform: "translateX(5px)",
      },
    }}
  >
    <Box sx={{ color: "#007BFF", display: "flex" }}>
      {/* Si es ruta interna muestra icono de Link, sino el de PDF u otro asignado */}
      {icon ? icon : (isRoute ? <LinkIcon /> : <PictureAsPdfIcon />)}
    </Box>
    <Typography
      variant="body2"
      fontWeight="600"
      color="#003366"
      sx={{ flexGrow: 1, fontSize: { xs: "0.8rem", md: "0.875rem" } }}
    >
      {title}
    </Typography>
    <OpenInNewIcon sx={{ fontSize: { xs: 16, md: 18 }, color: "#0056B3" }} />
  </Box>
);

export default function Transparencia() {
  const navigate = useNavigate(); // <-- Inicializamos el hook
  const [openViewer, setOpenViewer] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({ title: "", url: "" });

  const handleOpenViewer = (title, url, isRoute) => {
    // Si la propiedad isRoute es verdadera, navegamos a la página interna
    if (isRoute) {
      navigate(url);
      return;
    }

    // Si es un documento, usamos la lógica original
    if (!url || url === "URL_DEL_PDF_AQUI") return;
    const previewUrl = url.replace("/view", "/preview");
    setSelectedDoc({ title, url: previewUrl });
    setOpenViewer(true);
  };

  const handleCloseViewer = () => {
    setOpenViewer(false);
    setTimeout(() => setSelectedDoc({ title: "", url: "" }), 300);
  };

  // ==========================================
  // ARRAYS DE DATOS PARA LOS DOCUMENTOS
  // ==========================================

  const docsMarcoLegalGestion = [
    {
      title: "Proyecto Educativo Institucional (PEI)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Reglamento Institucional (RI)",
      url: "https://drive.google.com/file/d/1XPO7v_hZBTmUAKu3twzVwZIosihIM4M1/view",
    },
    {
      title: "Plan Anual de Trabajo (PAT)",
      url: "https://drive.google.com/file/d/1LXV22VpEPvVipzZ4Pk-ZIWGAbQJkpcQe/view",
    },
    {
      title: "Proyecto Curricular Institucional (PCI)",
      url: "https://drive.google.com/file/d/1SVNYH__I-lM5EX0OQ2dA5cnUUitRms8m/view",
    },
    { title: "Cuadro de Horas Pedagógicas",
       url: "https://drive.google.com/file/d/1LXKkwXcBDIkhj2krZ9QRGap-aSxCrTey/view" },
    {
      title: "Manual de Procesos Institucionales (MPI)",
      url: "https://drive.google.com/file/d/1H-ufC9SlVUd7-Rn6xfHYYPRxy0z6qqmp/view",
    },
  ];

  const docsMarcoLegalPoliticas = [
    { title: "Reglamento de Investigación", 
      url: "https://drive.google.com/file/d/1Ig7nc9LbsiBJlXGDoxPtBL__hMLtIa_d/view" 
    },
    {
      title: "Resolución de Funcionamiento Institucional",
      url: "https://drive.google.com/file/d/1Z9dLWZmho126u5roqlwVRn--RwnbOZ-l/view",
    },
  ];

  const docsEconomiaPresupuesto = [
    { title: "Proyectos de Investigación", 
      url: "/tesis-sustentadas", 
      isRoute: true,   // <-- Indicador clave
      useExternalIcon: true,
    },
    {
      title: "Derechos, Tasas y Pensiones Vigentes (Tarifario)",
      url: "https://drive.google.com/file/d/11YaXdaWl6u0funMS2xSTLxW7tETId6Cw/view",
    },
  ];

  const docsEconomiaBecas = [
    { title: "Bases y Requisitos para Becas 2025", url: "URL_DEL_PDF_AQUI" },
    { title: "Resultados de Convocatorias de Becas", url: "https://drive.google.com/file/d/1XhcPFLkmlnBMjrXChte4Yyz1DqbSZwuU/view" },
  ];

  const docsAcademicaProgramas = [
    {
      title: "Programa de Educación Inicial",
      url: "/inicial", // <-- Ruta interna a tu página
      isRoute: true,   // <-- Indicador clave
      useExternalIcon: true,
    },
    {
      title: "Programa de Educación Física",
      url: "/fisica", // <-- Ruta interna a tu página
      isRoute: true,  // <-- Indicador clave
      useExternalIcon: true,
    },
    { title: "Horarios de Clases 2026-I", url: "https://drive.google.com/file/d/1DjC_ZQnEa4JFREjjzE-UjrnNp_zYafRC/view" },
    { title: "Calendario Académico 2026 - I", url: "https://drive.google.com/file/d/1Zh2zg7NvMVx6tdCH9JD5x6mcFWscoQRn/view" },
  ];

  const docsAcademicaMatricula = [
    {
      title: "Proceso de Admisión completo",
      url: "/Admision", // <-- Ruta interna a tu página
      isRoute: true, 
    },
    {
      title: "Reporte Estadístico Anual Detallado de Estudiantes",
      url: "https://drive.google.com/file/d/1OYD50Mhs8lyRHhBvmlsdkMgwKkUHKg8u/view",
    },
  ];

  const docsRRHHDirectorio = [
    { 
      title: "Directorio Institucional Completo", 
      url: "/Directorio", // <-- Ruta interna a la página del directorio
      isRoute: true       // <-- Indicador clave
    },
    {
      title: "Cuadro de Asignación de Personal Administrativo (CAP 2025)",
      url: "URL_DEL_PDF_AQUI",
    },
    {
      title: "Cuadro de Asignación de Personal Docente (CAP 2025)",
      url: "URL_DEL_PDF_AQUI",
    },
  ];

  const docsRRHHCVs = [
    {
      title: "Hojas de Vida Resumidas del Personal Directivo",
      url: "/Directorio", // <-- Ruta interna a la página del directorio
      isRoute: true       // <-- Indicador clave
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F2F5", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "50vh", lg: "60vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${fondoTransparencia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            px: { xs: 2, md: 3 },
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography
              variant="overline"
              sx={{
                color: "#007BFF",
                fontWeight: 800,
                letterSpacing: { xs: 1, md: 2 },
                fontSize: { xs: "0.7rem", md: "0.75rem" },
              }}
            >
              COMPROMISO INSTITUCIONAL
            </Typography>
            <Typography
              variant="h2"
              fontWeight="900"
              sx={{
                color: "#fff",
                mb: { xs: 1.5, md: 2 },
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "3.75rem",
                  lg: "4rem",
                },
              }}
            >
              Portal de Transparencia
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                px: { xs: 1, sm: 0 },
              }}
            >
              Acceso público a la información oficial, normativa y de gestión de
              nuestra institución, garantizando la calidad y la confianza.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 5, md: 8, lg: 10 }, px: { xs: 2, md: 3 } }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 4, lg: 5 }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* 1. Datos Generales*/}
          <Grid
            container
            size={{ xs: 12 }}
            spacing={{ xs: 2, md: 3 }}
            component={motion.div}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <Grid size={{ xs: 12 }} component={motion.div} variants={fadeUp}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4, lg: 5 },
                  borderRadius: "24px",
                  border: "1px solid rgba(0, 123, 255, 0.1)",
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="800"
                  color="#003366"
                  mb={1}
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem", lg: "2.125rem" },
                  }}
                >
                  1. Datos Generales de la Institución
                </Typography>
                <Typography
                  variant="body1"
                  color="#333333"
                  mb={{ xs: 3, md: 4 }}
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  Información clave y oficial de nuestro Instituto.
                </Typography>

                <List disablePadding>
                  {[
                    {
                      icon: <FoundationIcon />,
                      label: "Razón Social",
                      value:
                        'Instituto Superior Pedagógico Privado "Arco Iris del Cusco"',
                    },
                    { icon: <BadgeIcon />, label: "RUC", value: "20564481018" },
                    {
                      icon: <LocationOnIcon />,
                      label: "Dirección",
                      value:
                        "Urb. Tenería IV Fracción II - Paradero Enaco, San Sebastian, Cusco",
                    },
                    {
                      icon: <PhoneIcon />,
                      label: "Teléfono",
                      value: "+51 966 425 975",
                    },
                    {
                      icon: <EmailIcon />,
                      label: "Correo",
                      value: "informes@arcoiris.edu.pe",
                    },
                    {
                      icon: <AccessTimeIcon />,
                      label: "Horario",
                      value: "Lunes a Viernes (8:00 AM - 5:00 PM)",
                    },
                  ].map((info, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        px: 0,
                        py: { xs: 0.8, md: 1.2 },
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "flex-start", sm: "center" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: { xs: 0.5, sm: 0 },
                          width: { sm: "200px" },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: { xs: 32, md: 40 },
                            color: "#007BFF",
                          }}
                        >
                          {info.icon}
                        </ListItemIcon>
                        <Typography
                          variant="body2"
                          color="#0056B3"
                          fontWeight="600"
                          sx={{ fontSize: { xs: "0.85rem", md: "0.875rem" } }}
                        >
                          {info.label}
                        </Typography>
                      </Box>
                      <ListItemText
                        sx={{ m: 0, ml: { xs: 4, sm: 0 } }}
                        primary={
                          <Typography
                            variant="body1"
                            color="#333333"
                            fontWeight="500"
                            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                          >
                            {info.value}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Tarjeta de Campus */}
            <Grid size={{ xs: 12 }} component={motion.div} variants={fadeUp}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1, md: 1.5 },
                  borderRadius: { xs: "16px", md: "24px" },
                  border: "1px solid rgba(0, 123, 255, 0.1)",
                  bgcolor: "#fff",
                  boxShadow: "0 15px 35px rgba(0, 51, 102, 0.04)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 20px 45px rgba(0, 51, 102, 0.1)",
                    borderColor: "rgba(0, 123, 255, 0.3)",
                  },
                  "&:hover .facade-img": {
                    transform: "scale(1.04)",
                  },
                  "&:hover .facade-gradient": {
                    opacity: 0.9,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    borderRadius: { xs: "12px", md: "18px" },
                    overflow: "hidden",
                    aspectRatio: { xs: "4/3", sm: "16/9", md: "21/9" },
                  }}
                >
                  <Box
                    className="facade-img"
                    component="img"
                    src={fachada}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      filter: "brightness(1.08) contrast(1.1) saturate(1.1)",
                    }}
                  />
                  <Box
                    className="facade-gradient"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0, 51, 102, 0.8) 0%, rgba(0, 51, 102, 0.2) 40%, transparent 100%)",
                      transition: "opacity 0.4s ease",
                      zIndex: 1,
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 12, md: 20 },
                      right: { xs: 12, md: 20 },
                      zIndex: 2,
                      bgcolor: "rgba(0, 123, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      px: { xs: 1.5, md: 2 },
                      py: { xs: 0.5, md: 0.8 },
                      borderRadius: "30px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <VerifiedIcon
                      sx={{ color: "#fff", fontSize: { xs: 14, md: 16 } }}
                    />
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color="#fff"
                      letterSpacing={0.5}
                      sx={{ fontSize: { xs: "0.65rem", md: "0.75rem" } }}
                    >
                      CAMPUS OFICIAL
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      p: { xs: 2, sm: 3, md: 4 },
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.5, md: 2.5 },
                    }}
                  >
                    <Box
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        p: { sm: 1, md: 1.5 },
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ color: "#fff", fontSize: { sm: 20, md: 28 } }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="800"
                        color="#fff"
                        sx={{
                          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          mb: { xs: 0.2, md: 0.5 },
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.25rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        Sede Principal Instituto Arco Iris
                      </Typography>
                      <Typography
                        variant="body2"
                        color="rgba(255,255,255,0.85)"
                        fontWeight="500"
                        sx={{
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.8rem",
                            md: "0.875rem",
                          },
                        }}
                      >
                        Fachada de nuestras instalaciones en Cusco.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* 2. Marco Legal */}
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3, lg: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 123, 255, 0.1)",
                    p: { xs: 1, md: 1.5 },
                    borderRadius: "12px",
                    color: "#007BFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <GavelIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#003366"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    2. Marco Legal
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#333333"
                    sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                  >
                    Documentos normativos que nos rigen.
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Documentos de Gestión Institucional
              </Typography>
              {docsMarcoLegalGestion.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                mt={3}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Políticas y Reglamentos Legales
              </Typography>
              {docsMarcoLegalPoliticas.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}
            </Paper>
          </Grid>

          {/* 3. Económica y Financiera */}
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3, lg: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 86, 179, 0.1)",
                    p: { xs: 1, md: 1.5 },
                    borderRadius: "12px",
                    color: "#0056B3",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccountBalanceWalletIcon
                    sx={{ fontSize: { xs: 20, md: 24 } }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#003366"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    3. Económica y Financiera
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#333333"
                    sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                  >
                    Gestión de recursos y apoyos.
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Presupuesto y Tasas
              </Typography>
              {docsEconomiaPresupuesto.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                mt={4}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Becas y Créditos Educativos
              </Typography>
              {docsEconomiaBecas.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}

              <Box sx={{ flexGrow: 1 }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  mt: { xs: 3, md: 5 },
                }}
              >
                {/* Banner*/}
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: "16px",
                    bgcolor: "rgba(0, 123, 255, 0.04)",
                    border: "1px dashed rgba(0, 123, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      right: -20,
                      top: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(0, 123, 255, 0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: 20,
                      bottom: -20,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "rgba(0, 123, 255, 0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      color="#007BFF"
                      fontWeight="800"
                      mb={0.5}
                      sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                    >
                      Gestión Transparente
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#333333"
                      sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" } }}
                    >
                      Administración eficiente para el desarrollo institucional.
                    </Typography>
                  </Box>
                  <TrendingUpIcon
                    sx={{
                      fontSize: { xs: 40, md: 60 },
                      color: "rgba(0, 123, 255, 0.2)",
                      position: "relative",
                      zIndex: 1,
                      ml: { xs: 1, md: 2 },
                    }}
                  />
                </Box>

                {/* Banner: Compromiso Institucional */}
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: "16px",
                    bgcolor: "rgba(0, 86, 179, 0.04)",
                    border: "1px dashed rgba(0, 86, 179, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: -20,
                      top: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(0, 86, 179, 0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      left: 20,
                      bottom: -20,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "rgba(0, 86, 179, 0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      color="#0056B3"
                      fontWeight="800"
                      mb={0.5}
                      sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                    >
                      Compromiso Institucional
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#333333"
                      sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" } }}
                    >
                      Fomentando la integridad y la calidad educativa.
                    </Typography>
                  </Box>
                  <FoundationIcon
                    sx={{
                      fontSize: { xs: 40, md: 60 },
                      color: "rgba(0, 86, 179, 0.2)",
                      position: "relative",
                      zIndex: 1,
                      ml: { xs: 1, md: 2 },
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* 4. Información Académica */}
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3, lg: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 123, 255, 0.1)",
                    p: { xs: 1, md: 1.5 },
                    borderRadius: "12px",
                    color: "#007BFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SchoolIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#003366"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    4. Información Académica
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#333333"
                    sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                  >
                    Programas, horarios y matrículas.
                  </Typography>
                </Box>
              </Box>

              {docsAcademicaProgramas.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                mt={3}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Procesos de Matrícula
              </Typography>

              {docsAcademicaMatricula.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}
            </Paper>
          </Grid>

          {/* 5. Recursos Humanos */}
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3, lg: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 86, 179, 0.1)",
                    p: { xs: 1, md: 1.5 },
                    borderRadius: "12px",
                    color: "#0056B3",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BadgeIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#003366"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    5. Recursos Humanos
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#333333"
                    sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                  >
                    Equipo profesional y vacantes.
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Directorio e Instrumentos
              </Typography>
              {docsRRHHDirectorio.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}

              <Typography
                variant="subtitle2"
                color="#0056B3"
                mb={2}
                mt={3}
                sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
              >
                Hojas de Vida (CVs)
              </Typography>
              {docsRRHHCVs.map((doc, index) => (
                <DocumentLink
                  key={index}
                  title={doc.title}
                  isRoute={doc.isRoute}
                  icon={doc.useExternalIcon ? <OpenInNewIcon /> : undefined}
                  onClick={() => handleOpenViewer(doc.title, doc.url, doc.isRoute)}
                />
              ))}
            </Paper>
          </Grid>

          {/* 6. Estadísticas */}
          {/* <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Box
              sx={{
                bgcolor: "#003366",
                color: "#fff",
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <TrendingUpIcon sx={{ color: "#007BFF" }} />
                  <Typography
                    variant="h6"
                    fontWeight="800"
                    sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                  >
                    6. Estadísticas
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="#F0F2F5"
                  mb={3}
                  sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                >
                  Cifras de nuestra comunidad estudiantil.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleOpenViewer(
                      "Reporte Detallado de Estadísticas",
                      "https://drive.google.com/file/d/1OYD50Mhs8lyRHhBvmlsdkMgwKkUHKg8u/view",
                      false
                    )
                  }
                  sx={{
                    bgcolor: "#007BFF",
                    borderRadius: "20px",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": { bgcolor: "#0056B3" },
                  }}
                  endIcon={<OpenInNewIcon />}
                >
                  Ver Reporte Detallado
                </Button>
              </Box>
            </Box>
          </Grid> */}

          {/* 7. Inversiones y Obras */}
          {/* <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            component={motion.div}
            variants={fadeUp}
          >
            <Box
              sx={{
                bgcolor: "#0056B3",
                color: "#fff",
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <FoundationIcon sx={{ color: "#F0F2F5" }} />
                  <Typography
                    variant="h6"
                    fontWeight="800"
                    sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                  >
                    7. Inversiones y Obras
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="#F0F2F5"
                  mb={3}
                  sx={{ fontSize: { xs: "0.8rem", md: "0.875rem" } }}
                >
                  Infraestructura y mejora continua.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleOpenViewer(
                      "Informe de Inversiones",
                      "URL_DEL_PDF_AQUI",
                      false
                    )
                  }
                  sx={{
                    bgcolor: "#003366",
                    borderRadius: "20px",
                    color: "#fff",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": { bgcolor: "#456eba70" },
                  }}
                  endIcon={<OpenInNewIcon />}
                >
                  Ver Informe de Inversiones
                </Button>
              </Box>
            </Box>
          </Grid> */}
        </Grid>
      </Container>

      {/* MODAL PARA VER PDFs (Se mantiene igual, solo se abre si no es una ruta) */}
      <Modal
        open={openViewer}
        onClose={handleCloseViewer}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          },
        }}
      >
        <Fade in={openViewer}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "85%", sm: "80%", md: "70%", lg: "60%" },
              height: { xs: "90vh", md: "85vh" },
              bgcolor: "#fff",
              borderRadius: "16px",
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
                bgcolor: "#f8f9fa",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="#333"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  mr: 2,
                }}
              >
                {selectedDoc.title}
              </Typography>
              <IconButton
                onClick={handleCloseViewer}
                size="small"
                sx={{ color: "#555" }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, position: "relative", bgcolor: "#eceff1" }}>
              {selectedDoc.url && (
                <iframe
                  src={selectedDoc.url}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Visor de PDF"
                  allow="autoplay"
                />
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}