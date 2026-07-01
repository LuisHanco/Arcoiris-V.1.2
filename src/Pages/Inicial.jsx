import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import CastForEducationRoundedIcon from "@mui/icons-material/CastForEducationRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

import imgBlob from "../assets/Imagenes/Inicial4.webp";
import imgProyecto from "../assets/Imagenes/Inicial2.webp";
import imgValores from "../assets/Imagenes/Inicial3.webp";

export default function Inicial() {
  // Estado dinámico para el visor de PDF
  const [viewerData, setViewerData] = useState({ open: false, title: "", url: "" });

  const handleOpenViewer = (title, url) => {
    setViewerData({ open: true, title, url });
  };

  const handleCloseViewer = () => {
    setViewerData({ ...viewerData, open: false });
  };

  const laboralesData = [
    {
      text: "Docente en nidos y jardines de infancia (públicos y privados).",
      icon: <SchoolRoundedIcon fontSize="large" />,
    },
    {
      text: "Coordinador(a) de programas de estimulación temprana.",
      icon: <ExtensionRoundedIcon fontSize="large" />,
    },
    {
      text: "Asesor(a) pedagógico en centros educativos.",
      icon: <CastForEducationRoundedIcon fontSize="large" />,
    },
    {
      text: "Desarrollador(a) de materiales didácticos.",
      icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
    },
    {
      text: "Investigador(a) en el campo de la educación infantil.",
      icon: <BiotechRoundedIcon fontSize="large" />,
    },
    {
      text: "Gestor(a) de proyectos educativos comunitarios.",
      icon: <Diversity3RoundedIcon fontSize="large" />,
    },
  ];

  const competenciasData = [
    "Desarrollo de habilidades pedagógicas innovadoras.",
    "Énfasis en la estimulación temprana y el juego didáctico.",
    "Formación en gestión de aulas inclusivas y diversificadas.",
    "Prácticas pre-profesionales desde los primeros ciclos.",
  ];

  const proyectosData = [
    {
      title: "Proyectos de Innovación",
      desc: "Nuestras estudiantes participan en exposiciones anuales donde diseñan, construyen y presentan recursos educativos innovadores. Estos materiales están enfocados en estimular el aprendizaje sensorial y cognitivo en la primera infancia.",
      img: imgProyecto,
      reverse: false,
    },
    {
      title: "Compromiso Institucional",
      desc: "Fomentamos una vocación basada en la ética, la empatía y la responsabilidad social. Nuestras futuras docentes se forman con un profundo sentido de respeto por la diversidad y el bienestar integral de cada niño y su comunidad.",
      img: imgValores,
      reverse: true,
    },
  ];

  // Datos para el Perfil de Egreso
  const perfilEgresoData = [
    {
      title: "Dimensión Personal y Ética",
      desc: "Actúa con principios éticos, demostrando empatía, inteligencia emocional y liderazgo para promover un clima de respeto y convivencia armónica en los diferentes contextos educativos.",
      icon: <EmojiEmotionsRoundedIcon sx={{ fontSize: 45 }} />,
    },
    {
      title: "Dimensión Pedagógica",
      desc: "Diseña, ejecuta y evalúa procesos de enseñanza-aprendizaje innovadores, aplicando enfoques actuales y metodologías activas para el desarrollo integral de la primera infancia.",
      icon: <AutoStoriesRoundedIcon sx={{ fontSize: 45 }} />,
    },
    {
      title: "Dimensión Socio-Comunitaria",
      desc: "Articula el trabajo educativo con las familias y la comunidad, generando proyectos de impacto social, promoviendo la inclusión y respetando la diversidad cultural.",
      icon: <PublicRoundedIcon sx={{ fontSize: 45 }} />,
    }
  ];

  const particlesData = [
    { size: 8, top: "20%", left: "15%", duration: 6, delay: 0 },
    { size: 12, top: "60%", left: "80%", duration: 8, delay: 1 },
    { size: 6, top: "80%", left: "30%", duration: 5, delay: 2 },
    { size: 10, top: "30%", left: "75%", duration: 7, delay: 0.5 },
    { size: 15, top: "50%", left: "45%", duration: 9, delay: 1.5 },
  ];

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleWhatsAppClick = () => {
    const numero = "51966425975";
    const mensaje = "Hola buenos días, ¡Quiero postular para Educación Inicial¡ 🧩";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        bgcolor: "#F0F2F5",
        overflow: "hidden",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "90vh", md: "85vh" },
          py: { xs: 12, md: 0 },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          borderRadius: { xs: "0 0 15% 15%", md: "0 0 50% 50% / 0 0 10% 10%" },
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 123, 255, 0.4) 100%)",
            zIndex: 1,
          }}
        />

        {particlesData.map((p, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              bgcolor: "#ffffff",
              borderRadius: "50%",
              filter: "blur(1px)",
              zIndex: 2,
            }}
          />
        ))}

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 3, textAlign: "center" }}
        >
          <Box data-aos="fade-down">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                px: { xs: 2, md: 3 },
                py: { xs: 0.5, md: 1 },
                borderRadius: "50px",
                mb: { xs: 3, md: 4 },
              }}
            >
              <AutoAwesomeIcon
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  letterSpacing: { xs: 1, md: 2 },
                  m: 0,
                  fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                }}
              >
                Primera Infancia
              </Typography>
            </Box>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              Educación Inicial
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e2e8f0",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                px: { xs: 2, md: 0 },
              }}
            >
              Formando líderes en la primera infancia, con un enfoque innovador,
              humanista y lleno de creatividad.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: -6, md: -8 },
          position: "relative",
          zIndex: 4,
          pb: { xs: 6, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 51, 102, 0.08)",
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/7456/7456976.png"
                alt="icon inicial"
                sx={{
                  width: { xs: 60, md: 85 },
                  height: { xs: 60, md: 85 },
                  mb: 2,
                  filter:
                    "brightness(0) saturate(100%) invert(36%) sepia(98%) saturate(1800%) hue-rotate(200deg) brightness(95%) contrast(100%)",
                }}
              />
              <Typography
                variant="h4"
                fontWeight="800"
                color="#003366"
                mb={3}
                sx={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
              >
                El Programa
              </Typography>
              <Typography
                variant="body1"
                color="#555"
                lineHeight={1.8}
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
              >
                Diseñado para formar profesionales altamente capacitados en el
                desarrollo integral de niños de 0 a 5 años, preparándolos para
                los desafíos de la educación del siglo XXI.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#007BFF",
                color: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 123, 255, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/128/2973/2973247.png"
                alt="icono metodología"
                sx={{
                  width: { xs: 60, md: 85 },
                  height: { xs: 60, md: 85 },
                  mb: 2,
                  filter: "brightness(0) invert(1)",
                }}
              />
              <Typography
                variant="h4"
                fontWeight="800"
                mb={3}
                sx={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
              >
                Enfoque Metodológico
              </Typography>
              <Typography
                variant="body1"
                color="rgba(255,255,255,0.9)"
                lineHeight={1.8}
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
              >
                Se centra en metodologías activas, promoviendo el aprendizaje a
                través del juego y la exploración. Integramos avances en
                neurociencia y psicología del desarrollo.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Box
                component="img"
                src={imgBlob}
                sx={{
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "450px" },
                  objectFit: "cover",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  boxShadow: "20px 20px 0px rgba(0, 123, 255, 0.15)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    borderRadius: "60% 40% 30% 70% / 50% 60% 50% 40%",
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={4}
                sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                Creciendo y{" "}
                <span style={{ color: "#007BFF" }}>Aprendiendo</span>
              </Typography>
              {competenciasData.map((item, i) => (
                <Box
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    mb: 3,
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(0, 123, 255, 0.1)",
                      color: "#007BFF",
                      p: { xs: 1, md: 1.5 },
                      borderRadius: "50%",
                      display: "flex",
                      flexShrink: 0,
                    }}
                  >
                    <AutoAwesomeIcon fontSize="small" />
                  </Box>
                  <Typography
                    variant="body1"
                    color="#444"
                    mt={0.8}
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* NUEVA SECCIÓN: PERFIL DE EGRESO */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 6, md: 8 }} data-aos="fade-down">
            <Typography
              variant="overline"
              sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}
            >
              FUTURAS EDUCADORAS
            </Typography>
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              sx={{ fontSize: "clamp(2rem, 5vw, 3rem)", mt: 1 }}
            >
              Perfil de Egreso
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {perfilEgresoData.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 10px 30px rgba(0, 51, 102, 0.05)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 123, 255, 0.15)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      p: 2,
                      bgcolor: "rgba(0, 123, 255, 0.1)",
                      color: "#007BFF",
                      borderRadius: "20px",
                      mb: 3
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="800" color="#003366" mb={2} lineHeight={1.3}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="#555" lineHeight={1.7}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="900"
            color="#003366"
            textAlign="center"
            mb={{ xs: 6, md: 8 }}
            data-aos="fade-down"
            sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Formación e <span style={{ color: "#007BFF" }}>Identidad</span>
          </Typography>

          {proyectosData.map((item, index) => (
            <Grid
              key={index}
              container
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              mb={index === proyectosData.length - 1 ? 0 : { xs: 6, md: 8 }}
              direction={{
                xs: "column-reverse",
                md: item.reverse ? "row-reverse" : "row",
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                data-aos={item.reverse ? "fade-left" : "fade-right"}
              >
                <Typography
                  variant="h4"
                  fontWeight="800"
                  color="#003366"
                  mb={2}
                  sx={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="#555"
                  lineHeight={1.8}
                  sx={{
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                data-aos={item.reverse ? "fade-right" : "fade-left"}
                sx={{ width: "100%" }}
              >
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: "100%",
                    height: { xs: "250px", sm: "300px", md: "320px" },
                    objectFit: "cover",
                    borderRadius: "32px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>

      {/* SECCIÓN MALLA Y PLAN DE ESTUDIOS */}
      <Box
        sx={{
          bgcolor: "#F8FAFC",
          py: { xs: 8, md: 12 },
          borderRadius: { xs: "0", md: "80px" },
          mx: { xs: 0, md: 4 },
          my: { xs: 4, md: 6 },
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box data-aos="zoom-in">
            <MenuBookIcon
              sx={{ fontSize: { xs: 50, md: 60 }, color: "#003366", mb: 2 }}
            />
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              mb={3}
              sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Documentos Académicos
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={{ xs: 4, md: 6 }}
              lineHeight={1.8}
              sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
            >
              Conoce nuestro plan de estudios, estructurado para formar profesionales integrales, alineado estrictamente al Diseño Curricular Básico Nacional (DCBN) del MINEDU.
            </Typography>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{
              display: "flex",
              gap: { xs: 2, md: 4 },
              justifyContent: "center",
              mb: { xs: 6, md: 8 },
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: { xs: "1 1 40%", sm: "auto" } }}>
              <Typography
                variant="h2"
                fontWeight="900"
                color="#007BFF"
                sx={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
              >
                5
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="#003366"
                sx={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
              >
                Años
              </Typography>
            </Box>
            <Box
              sx={{
                width: "2px",
                bgcolor: "rgba(0,0,0,0.1)",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Box sx={{ flex: { xs: "1 1 40%", sm: "auto" } }}>
              <Typography
                variant="h2"
                fontWeight="900"
                color="#007BFF"
                sx={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
              >
                10
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="#003366"
                sx={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
              >
                Semestres
              </Typography>
            </Box>
            <Box
              sx={{
                width: "2px",
                bgcolor: "rgba(0,0,0,0.1)",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Box
              sx={{
                flex: { xs: "1 1 100%", sm: "auto" },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h2"
                fontWeight="900"
                color="#007BFF"
                sx={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
              >
                100%
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="#003366"
                sx={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
              >
                Presencial
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} data-aos="fade-up" data-aos-delay="200">
            {/* Primera fila de botones: Malla y Plan */}
            <Box sx={{ display: "flex", gap: { xs: 2, md: 3 }, justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleOpenViewer(
                  "Malla Curricular - Educación Inicial", 
                  "https://drive.google.com/file/d/19WakXTCEXDvuuW8yLW4LpIYHzV5dogkQ/preview"
                )}
                startIcon={<VisibilityRoundedIcon />}
                sx={{
                  bgcolor: "#007BFF",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  width: { xs: "100%", sm: "auto" },
                  boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                  "&:hover": { bgcolor: "#0056b3" },
                }}
              >
                Ver Malla Curricular
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => handleOpenViewer(
                  "Plan de Estudios - Educación Inicial", 
                  "https://drive.google.com/file/d/1x6FpgImBjNfQ5P3AYNuPw-VzZ_UywW7N/preview"
                )}
                startIcon={<VisibilityRoundedIcon />}
                sx={{
                  color: "#003366",
                  borderColor: "#003366",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    borderColor: "#007BFF",
                    color: "#007BFF",
                    bgcolor: "rgba(0, 123, 255, 0.05)",
                  },
                }}
              >
                Ver Plan de Estudios
              </Button>
            </Box>
            
            {/* Segunda fila de botones: DCBN */}
            <Box sx={{ display: "flex", gap: { xs: 2, md: 3 }, justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleOpenViewer(
                  "DCBN - Educación Inicial", 
                  "https://drive.google.com/file/d/1vZzqMVxRGdG6-JeahNa07IbK--xY-slh/preview"
                )}
                startIcon={<MenuBookIcon />}
                sx={{
                  bgcolor: "#0056B3",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  width: { xs: "100%", sm: "auto" },
                  boxShadow: "0 10px 20px rgba(0, 86, 179, 0.3)",
                  color: "#fff",
                  "&:hover": { bgcolor: "#003366" },
                }}
              >
                Ver DCBN Inicial
              </Button>

              <Button
                component="a"
                href="https://www.minedu.gob.pe/superiorpedagogica/producto/dcbn-2019-educacion-inicial/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<AccountBalanceRoundedIcon />}
                sx={{
                  color: "#003366",
                  borderColor: "#003366",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    borderColor: "#007BFF",
                    color: "#007BFF",
                    bgcolor: "rgba(0, 123, 255, 0.05)",
                  },
                }}
              >
                Sitio Oficial MINEDU
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 14 },
          bgcolor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            bgcolor: "rgba(0, 123, 255, 0.05)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: { xs: 400, md: 600 },
            height: { xs: 400, md: 600 },
            bgcolor: "rgba(0, 51, 102, 0.04)",
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            data-aos="fade-down"
            variant="h3"
            fontWeight="900"
            textAlign="center"
            color="#003366"
            mb={{ xs: 6, md: 8 }}
            sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Campo{" "}
            <span style={{ color: "#007BFF", position: "relative" }}>
              Laboral
              <Box
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  bgcolor: "rgba(0, 123, 255, 0.2)",
                  zIndex: -1,
                  borderRadius: "10px",
                }}
              />
            </span>
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {laboralesData.map((item, index) => {
              const isHighlighted = index === 0 || index === 4;
              const bgCard = isHighlighted
                ? index === 0
                  ? "linear-gradient(135deg, #007BFF 0%, #0056b3 100%)"
                  : "linear-gradient(135deg, #003366 0%, #001f3f 100%)"
                : "#ffffff";
              const textColor = isHighlighted ? "#ffffff" : "#333333";
              const iconColor = isHighlighted ? "#ffffff" : "#007BFF";
              const iconBg = isHighlighted
                ? "rgba(255,255,255,0.15)"
                : "rgba(0, 123, 255, 0.08)";

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: bgCard,
                      borderRadius: "24px",
                      height: "100%",
                      boxShadow: isHighlighted
                        ? "0 20px 40px rgba(0, 123, 255, 0.25)"
                        : "0 10px 30px rgba(0,0,0,0.04)",
                      border: isHighlighted
                        ? "none"
                        : "1px solid rgba(0, 123, 255, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: isHighlighted
                          ? "0 25px 50px rgba(0, 123, 255, 0.35)"
                          : "0 20px 40px rgba(0, 123, 255, 0.12)",
                        borderColor: isHighlighted ? "transparent" : "#007BFF",
                      },
                      "&:hover .laboral-icon": {
                        bgcolor: isHighlighted ? "#ffffff" : "#007BFF",
                        color: isHighlighted
                          ? index === 0
                            ? "#007BFF"
                            : "#003366"
                          : "#ffffff",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                      "&:hover .watermark-icon": {
                        transform: "scale(1.1) rotate(-10deg)",
                        opacity: isHighlighted ? 0.2 : 0.06,
                      },
                    }}
                  >
                    <Box
                      className="watermark-icon"
                      sx={{
                        position: "absolute",
                        right: -20,
                        bottom: -20,
                        color: isHighlighted ? "#ffffff" : "#007BFF",
                        opacity: isHighlighted ? 0.08 : 0.03,
                        transition: "all 0.5s ease",
                        zIndex: 0,
                        "& > svg": { fontSize: 160 },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box
                      className="laboral-icon"
                      sx={{
                        bgcolor: iconBg,
                        p: 2,
                        borderRadius: "16px",
                        mb: 3,
                        color: iconColor,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 1,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="800"
                      color={textColor}
                      lineHeight={1.5}
                      zIndex={1}
                      sx={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            data-aos="zoom-in"
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 8 },
              bgcolor: "#007BFF",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: { xs: "30px", md: "40px" },
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0, 51, 102, 0.25)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0, 51, 102, 0.85)",
                zIndex: 1,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#fff"
                mb={3}
                sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2 }}
              >
                ¡Forma parte de su primer gran paso!
              </Typography>
              <Button
                variant="contained"
                onClick={handleWhatsAppClick}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#003366",
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  width: { xs: "100%", sm: "auto" },
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#F0F2F5",
                    transform: { xs: "none", md: "translateY(-3px)" },
                    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
                  },
                }}
              >
                ¡Inscríbete Ahora!
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MODAL PARA VER PDFs */}
      <Dialog
        open={viewerData.open}
        onClose={handleCloseViewer}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: "24px", m: { xs: 2, md: 4 } } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 2, md: 3 },
            bgcolor: "#F0F2F5",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#003366"
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            {viewerData.title}
          </Typography>
          <IconButton
            onClick={handleCloseViewer}
            sx={{
              color: "#333",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "#e0e0e0" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, bgcolor: "#e0e0e0" }}
        >
          {viewerData.url && (
            <iframe
              src={viewerData.url}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={viewerData.title}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}