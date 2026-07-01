import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SearchIcon from "@mui/icons-material/Search";
import TerminalIcon from "@mui/icons-material/Terminal";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
 
export default function Servicios() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const servicios = [
    {
      id: "01",
      title: "Servicio Psicopedagógico",
      tagline:
        "Acompañamiento integral para tu bienestar emocional y académico.",
      mision:
        "Potenciar tu desarrollo integral, mejorar rendimiento y fomentar bienestar emocional.",
      responsable: "Unidad de Bienestar Estudiantil",
      icon: <PsychologyIcon />,
      color: "#007BFF",
      img: "https://plus.unsplash.com/premium_photo-1682148383444-19e334062543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VydmljaW8lMjBQc2ljb3BlZGFnJUMzJUIzZ2ljb3xlbnwwfHwwfHx8MA%3D%3D",
      funciones: [
        "Asesoramiento individual en estrategias de estudio.",
        "Orientación vocacional y profesional personalizada.",
        "Apoyo en la gestión de emociones y estrés.",
        "Atención de dificultades de aprendizaje.",
      ],
    },
    {
      id: "02",
      title: "Soporte Médico",
      tagline:
        "Cuidamos de tu salud con atención primaria y preventiva en el campus.",
      mision:
        "Proporcionar primeros auxilios y promover hábitos saludables para la comunidad.",
      responsable: "Dr. Erick Wagner Quispe Supanta",
      icon: <LocalHospitalIcon />,
      color: "#003366",
      img: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2070&auto=format&fit=crop",
      funciones: [
        "Atención de primeros auxilios en emergencias.",
        "Campañas de prevención de enfermedades.",
        "Orientación en salud y derivación a especialistas.",
        "Registro y seguimiento básico de atenciones.",
      ],
    },
    {
      id: "03",
      title: "Servicio Social",
      tagline:
        "Promoviendo la equidad e inclusión de nuestra comunidad estudiantil.",
      mision:
        "Identificar y apoyar a estudiantes en situación de vulnerabilidad socioeconómica.",
      responsable: "Unidad de Bienestar Estudiantil",
      icon: <Diversity1Icon />,
      color: "#007BFF",
      img: "https://plus.unsplash.com/premium_photo-1733306621909-1d63c088a93e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VydmljaW8lMjBzb2NpYWx8ZW58MHx8MHx8fDA%3D",
      funciones: [
        "Evaluaciones socioeconómicas para beneficios.",
        "Gestión de becas y apoyos económicos.",
        "Apoyo en la solución de problemas sociales.",
        "Coordinación con instituciones de ayuda externa.",
      ],
    },
    {
      id: "04",
      title: "Soporte a Investigación",
      tagline:
        "Impulsando tus proyectos con recursos y asesoría especializada.",
      mision:
        "Facilitar actividades de investigación brindando recursos y asesoría.",
      responsable: "Mag. Víctor Rodríguez Soto",
      icon: <SearchIcon />,
      color: "#003366",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      funciones: [
        "Asesoría metodológica para formulación de proyectos.",
        "Acceso a bases de datos científicas y bibliografía.",
        "Apoyo en redacción de artículos científicos.",
        "Soporte para software de análisis de datos.",
      ],
    },
    {
      id: "05",
      title: "Tecnología (TIC)",
      tagline: "Soluciones digitales para optimizar tu experiencia académica.",
      mision:
        "Garantizar el correcto funcionamiento de la infraestructura tecnológica.",
      responsable: "Ing. Luz Katia Lope Daza",
      icon: <TerminalIcon />,
      color: "#007BFF",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      funciones: [
        "Mantenimiento de red y servidores institucionales.",
        "Soporte técnico para equipos y software.",
        "Gestión de plataformas virtuales (Intranet/Moodle).",
        "Capacitación en herramientas tecnológicas.",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          bgcolor: "#003366",
          pt: { xs: 12, md: 20 },
          pb: { xs: 8, md: 15 },
          borderRadius: { xs: "0 0 30px 30px", md: "0 0 60px 60px" },
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: { xs: 2, md: 4 },
              color: "#007BFF",
              fontWeight: 900,
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
            }}
          >
            SERVICIOS INSTITUCIONALES
          </Typography>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              mt: 2,
              mb: 3,
              textTransform: "uppercase",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            Acompañamiento en cada paso de tu formación
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.8,
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              px: { xs: 1, md: 0 },
            }}
          >
            Descubre las áreas que trabajan para tu bienestar, salud, tecnología
            y soporte académico.
          </Typography>
        </Container>
      </Box>

      {/* 2. SECCIONES ALTERNADAS DE SERVICIOS*/}
      {servicios.map((s, idx) => {
        const isEven = idx % 2 === 0;
        const bgSection = isEven ? "#ffffff" : "#F4F7F9";

        return (
          <Box
            key={s.id}
            sx={{
              bgcolor: bgSection,
              py: { xs: 8, md: 16 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Títulasoo*/}
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                [isEven ? "right" : "left"]: { xs: "-10%", md: "-5%" },
                bottom: { xs: "-5%", md: "-10%" },
                fontSize: "clamp(10rem, 25vw, 30rem)",
                fontWeight: 900,
                color: isEven ? "rgba(0,0,0,0.02)" : "rgba(0,123,255,0.03)",
                zIndex: 0,
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {s.id}
            </Typography>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
              <Grid
                container
                spacing={{ xs: 6, md: 8 }}
                alignItems="center"
                direction={{ xs: "column", md: isEven ? "row" : "row-reverse" }}
              >
                {/* COLUMNA DE IMAGEN/ÍCONO */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  sx={{ width: "100%" }}
                >
                  <Box sx={{ position: "relative", px: { xs: 1, md: 0 } }}>
                    <Box
                      component="img"
                      src={s.img}
                      sx={{
                        width: "100%",
                        height: { xs: "300px", sm: "400px", md: "500px" },
                        objectFit: "cover",
                        borderRadius: {
                          xs: "30px",
                          md: isEven
                            ? "30px 100px 30px 30px"
                            : "100px 30px 30px 30px",
                        },
                        boxShadow: "0 20px 40px rgba(0,51,102,0.15)",
                      }}
                    />
                    <Avatar
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      sx={{
                        position: "absolute",
                        top: { xs: -20, md: -40 },
                        [isEven ? "left" : "right"]: { xs: 10, md: -40 },
                        width: { xs: 70, md: 100 },
                        height: { xs: 70, md: 100 },
                        bgcolor: s.color,
                        color: "#fff",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                        border: { xs: "4px solid #fff", md: "8px solid #fff" },
                        "& svg": { fontSize: { xs: 35, md: 50 } },
                      }}
                    >
                      {s.icon}
                    </Avatar>
                  </Box>
                </Grid>

                {/* COLUMNA DE TEXTO*/}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                  sx={{ width: "100%" }}
                >
                  <Typography
                    variant="h2"
                    data-aos="fade-up"
                    fontWeight={900}
                    color="#003366"
                    mb={1}
                    sx={{
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    color={s.color}
                    fontWeight={700}
                    mb={4}
                    sx={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      fontStyle: "italic",
                    }}
                  >
                    "{s.tagline}"
                  </Typography>

                  {/* Tarjeta de Responsable y Misión*/}
                  <Paper
                    elevation={0}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      mb: { xs: 4, md: 5 },
                      borderRadius: "16px",
                      bgcolor: isEven ? "#F4F7F9" : "#fff",
                      border: "none",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2.5,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "6px",
                        bgcolor: s.color,
                        boxShadow: `0 0 15px ${s.color}80`,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: s.color,
                        color: "#fff",
                        width: 45,
                        height: 45,
                      }}
                    >
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={800}
                        color="#333"
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                      >
                        RESPONSABLE:{" "}
                        <Box
                          component="span"
                          sx={{
                            fontWeight: 500,
                            color: "#666",
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          {s.responsable}
                        </Box>
                      </Typography>
                      <Divider
                        sx={{ my: 1.5, borderColor: "rgba(0,0,0,0.05)" }}
                      />
                      <Typography
                        variant="body2"
                        color="#555"
                        textAlign="justify"
                        sx={{
                          fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>Misión:</strong> {s.mision}
                      </Typography>
                    </Box>
                  </Paper>

                  {/* Lista de Funciones con animaciones individuales */}
                  <Typography
                    variant="subtitle1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    fontWeight={900}
                    color="#003366"
                    mb={2}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    }}
                  >
                    Funciones Principales
                  </Typography>
                  <List dense sx={{ p: 0, mb: { xs: 4, md: 5 } }}>
                    {s.funciones.map((f, i) => (
                      <ListItem
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={400 + i * 100}
                        sx={{ px: 0, py: 0.75, alignItems: "flex-start" }}
                      >
                        <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
                          <VerifiedIcon sx={{ color: s.color, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={f}
                          primaryTypographyProps={{
                            variant: "body1",
                            fontWeight: 500,
                            color: "#444",
                            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                            lineHeight: 1.4,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Botón de Acción Responsive */}
                  <Button
                    variant="contained"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: s.color,
                      color: "#fff",
                      px: { xs: 3, md: 4 },
                      py: 1.5,
                      width: { xs: "100%", sm: "auto" },
                      borderRadius: "30px",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                      boxShadow: `0 10px 20px ${s.color}40`,
                      "&:hover": {
                        bgcolor: "#0056b3",
                        transform: { xs: "none", md: "scale(1.05)" },
                        boxShadow: `0 15px 30px ${s.color}60`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Ver Reglamento del Servicio
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}

      {/* 3. CTA FINAL (Diseño Emocional) */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 10, md: 15 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="md">
          <Paper
            data-aos="zoom-in"
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: "40px",
              textAlign: "center",
              bgcolor: "#003366",
              color: "#fff",
              backgroundImage:
                "linear-gradient(135deg, #003366 0%, #001a33 100%)",
              boxShadow: "0 20px 50px rgba(0, 51, 102, 0.3)",
            }}
          >
            <PsychologyIcon
              sx={{ fontSize: { xs: 50, md: 60 }, color: "#007BFF", mb: 3 }}
            />
            <Typography
              variant="h3"
              fontWeight={900}
              mb={2}
              sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2 }}
            >
              Estamos aquí para apoyarte
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 4, md: 5 },
                opacity: 0.8,
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                lineHeight: 1.6,
              }}
            >
              Nuestro compromiso es tu desarrollo integral. Si tienes dudas o
              necesitas orientación, no dudes en contactar a nuestras unidades
              de apoyo.
            </Typography>
            {/*
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#007BFF",
                color: "#fff",
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                width: { xs: "100%", sm: "auto" },
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                "&:hover": {
                  bgcolor: "#0056b3",
                  boxShadow: "0 15px 30px rgba(0, 123, 255, 0.5)",
                },
              }}
            >
              Contactar a Bienestar Estudiantil
            </Button>*/}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
