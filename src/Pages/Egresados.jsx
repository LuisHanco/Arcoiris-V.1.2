import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import Egresados1 from "../assets/imagenes/Graduado.webp";
import Egresados2 from "../assets/imagenes/Graduados.webp";

export default function Egresados() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const beneficios = [
    {
      title: "Descuentos Académicos",
      desc: "Beneficios en programas de posgrado, diplomados y cursos de especialización en el instituto y en instituciones aliadas.",
      icon: <LocalOfferIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 8 },
    },
    {
      title: "Biblioteca Virtual",
      desc: "Acceso ilimitado a nuestra vasta colección de recursos académicos, revistas especializadas y bases de datos.",
      icon: <AutoStoriesIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 4 },
    },
    {
      title: "Bolsa de Trabajo",
      desc: "Acceso prioritario a ofertas laborales exclusivas de nuestra red de contactos empresariales e institucionales.",
      icon: <WorkOutlineIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 4 },
    },
    {
      title: "Asesoría de Emprendimiento",
      desc: "Soporte y guía para el desarrollo de tus propios proyectos educativos y startups.",
      icon: <RocketLaunchIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 8 },
    },
    {
      title: "Eventos Exclusivos",
      desc: "Invitaciones a conferencias, talleres, seminarios y encuentros con líderes del sector educativo.",
      icon: <EventAvailableIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 6 },
    },
    {
      title: "Soporte y Orientación",
      desc: "Servicios de orientación profesional y actualización de conocimientos para mantenerte a la vanguardia.",
      icon: <SupportAgentIcon sx={{ fontSize: { xs: 30, md: 40 } }} />,
      colSpan: { xs: 12, md: 6 },
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f4f7fb", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-right">
            <Typography
              variant="overline"
              sx={{
                color: "#80bdff",
                fontWeight: 900,
                letterSpacing: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
              }}
            >
              RED DE PROFESIONALES
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Comunidad de <br /> Egresados
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "600px",
                fontWeight: 400,
                borderLeft: "4px solid #007BFF",
                pl: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
              }}
            >
              Tu éxito es nuestro orgullo. Mantente conectado con la red de
              profesionales del Instituto Arcoíris.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#ffffff", py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            data-aos="fade-up"
            sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              color="#003366"
              textTransform="uppercase"
              sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
            >
              Impacto Profesional de Nuestros Egresados
            </Typography>
            <Typography
              variant="h6"
              color="#666"
              mt={2}
              maxWidth="800px"
              mx="auto"
              sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Nuestros egresados son líderes y agentes de cambio en el ámbito
              educativo nacional.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-right">
              <Box sx={{ position: "relative", px: { xs: 2, sm: 0 } }}>
                <Box
                  component="img"
                  src={Egresados1}
                  alt="Egresados liderando proyectos"
                  sx={{
                    width: "100%",
                    borderRadius: {
                      xs: "20px 50px 20px 20px",
                      md: "20px 100px 20px 20px",
                    },
                    objectFit: "cover",
                    height: { xs: "400px", sm: "500px", md: "650px" },
                    boxShadow: "0 20px 40px rgba(0,51,102,0.15)",
                  }}
                />
                <Paper
                  sx={{
                    position: "absolute",
                    bottom: { xs: -20, md: -10 },
                    left: { xs: 10, md: -10 },
                    p: { xs: 1.5, md: 2 },
                    borderRadius: "12px",
                    bgcolor: "#007BFF",
                    color: "#fff",
                    maxWidth: { xs: "200px", md: "250px" },
                    boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
                  >
                    Nuestros egresados liderando proyectos educativos.
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              data-aos="fade-left"
              sx={{ mt: { xs: 3, md: 0 } }}
            >
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={2}
                sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Trayectorias que Inspiran
              </Typography>
              <Typography
                variant="body1"
                color="#555"
                mb={4}
                textAlign="justify"
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
              >
                Desde aulas de inicial hasta la gestión de proyectos educativos,
                los profesionales formados en el Instituto Arcoíris demuestran
                una calidad excepcional y un compromiso inquebrantable. Sus
                historias de éxito son el reflejo de una formación integral que
                trasciende las expectativas.
              </Typography>

              <Grid container spacing={2}>
                {[
                  "Directores y Coordinadores Pedagógicos.",
                  "Especialistas en Innovación Educativa.",
                  "Emprendedores en el Sector Ed-Tech.",
                  "Investigadores y Consultores Educativos.",
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        bgcolor: "#F0F2F5",
                        borderLeft: "4px solid #007BFF",
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <CheckCircleOutlineIcon sx={{ color: "#007BFF" }} />
                      <Typography
                        variant="body2"
                        fontWeight="600"
                        color="#003366"
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                      >
                        {item}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F0F2F5", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Typography
                variant="overline"
                color="#007BFF"
                fontWeight="bold"
                letterSpacing={2}
                sx={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
              >
                NETWORKING
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={2}
                sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Construyendo Puentes Profesionales
              </Typography>
              <Typography
                variant="body1"
                color="#555"
                mb={3}
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
              >
                Conecta con una comunidad vibrante de colegas y mentores a nivel
                nacional.
              </Typography>
              <Typography
                variant="body2"
                color="#666"
                mb={4}
                textAlign="justify"
                sx={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}
              >
                <strong>Construyendo Puentes Profesionales:</strong> Creemos en
                el poder de la colaboración. Nuestra plataforma exclusiva y
                eventos diseñados te permitirán expandir tu red de contactos,
                encontrar oportunidades y recibir apoyo de una comunidad que
                entiende tus desafíos y aspiraciones.
              </Typography>

              <List sx={{ p: 0 }}>
                {[
                  "Acceso a la Plataforma Virtual de Egresados.",
                  "Encuentros Anuales y Foros de Egresados.",
                  "Programas de Mentoría y Desarrollo de Liderazgo.",
                  "Oportunidades de Colaboración en Proyectos.",
                ].map((item, idx) => (
                  <ListItem key={idx} sx={{ px: 0, py: { xs: 0.5, md: 1 } }}>
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <ArrowForwardIosIcon
                        sx={{ color: "#007BFF", fontSize: 18 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        color: "#333",
                        fontWeight: 500,
                        fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 0, md: 2 },
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box
                  component="img"
                  src={Egresados2}
                  alt="Networking"
                  sx={{
                    width: { xs: "100%", md: "90%" },
                    borderRadius: {
                      xs: "50px 20px 50px 20px",
                      md: "100px 20px 100px 20px",
                    },
                    objectFit: "cover",
                    height: { xs: "350px", sm: "400px", md: "500px" },
                    boxShadow: "0 20px 40px rgba(0,51,102,0.1)",
                  }}
                />
                <Paper
                  sx={{
                    position: "absolute",
                    bottom: { xs: -15, md: 40 },
                    left: { xs: 15, md: 0 },
                    p: { xs: 1.5, md: 2 },
                    borderRadius: "12px",
                    bgcolor: "#ffffff",
                    border: "1px solid #eaeaea",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(0, 123, 255, 0.1)",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                      color: "#007BFF",
                    }}
                  >
                    <ConnectWithoutContactIcon
                      sx={{ fontSize: { xs: 20, md: 24 } }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="#003366"
                    maxWidth="150px"
                    sx={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
                  >
                    Conexiones de calidad para nuestros Egresados.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        data-aos="fade-up"
        sx={{
          bgcolor: "#003366",
          py: { xs: 8, md: 14 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            data-aos="fade-up"
            sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              color="#ffffff"
              textTransform="uppercase"
              sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
            >
              Beneficios Exclusivos para Nuestros Egresados
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {beneficios.map((beneficio, index) => (
              <Grid
                size={beneficio.colSpan}
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Paper
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "24px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      bgcolor: "rgba(0, 123, 255, 0.1)",
                      borderColor: "#007BFF",
                      transform: { xs: "none", md: "scale(1.05)" },
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    },
                    "&:hover .bento-icon": {
                      transform: { xs: "none", md: "scale(1.1)" },
                      color: "#80bdff",
                    },
                  }}
                >
                  <Box
                    className="bento-icon"
                    sx={{
                      color: "#007BFF",
                      mb: 2,
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                  >
                    {beneficio.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#ffffff"
                    mb={1.5}
                    sx={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
                  >
                    {beneficio.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#e2e8f0"
                    lineHeight={1.6}
                    sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                  >
                    {beneficio.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={{ xs: 6, md: 10 }} textAlign="center" data-aos="fade-up">
            {/*<Button
              variant="contained"
              size="large"
              startIcon={<CloudDownloadIcon />}
              sx={{
                bgcolor: "#007BFF",
                color: "#ffffff",
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                width: { xs: "100%", sm: "auto" },
                borderRadius: "30px",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(0, 123, 255, 0.3)",
                "&:hover": {
                  bgcolor: "#0056b3",
                  boxShadow: "0 15px 40px rgba(0, 123, 255, 0.5)",
                },
              }}
            >
              Descargar Guía Completa de Beneficios
            </Button>
            */}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontStyle: "italic",
            fontWeight: 500,
            paddingBottom: 4,
            color: "#2c3e50",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
            letterSpacing: "0.5px",
          }}
        >
          Más allá de la graduación, continuamos impulsando tu crecimiento
          profesional y personal.
        </Typography>
      </Box>
    </Box>
  );
}
