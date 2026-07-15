import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
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
  Chip,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos existentes
import PaletteIcon from "@mui/icons-material/Palette";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EventIcon from "@mui/icons-material/Event";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FestivalIcon from "@mui/icons-material/Festival";
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WeekendIcon from "@mui/icons-material/Weekend";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ComputerIcon from "@mui/icons-material/Computer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import HandshakeIcon from "@mui/icons-material/Handshake";

import PsychologyIcon from "@mui/icons-material/Psychology";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";

// Nuevos íconos para la sección de Árbitros
import SportsRoundedIcon from '@mui/icons-material/SportsRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

// Imágenes
import FondoEstudiantes from "../assets/Imagenes/Formacion1.webp";
import Estudiantes1 from "../assets/Imagenes/Alumnos1.webp";
import BolsaLaboral from "../assets/Imagenes/laboral.webp";
import Bienestar from "../assets/Imagenes/InicioClases4.webp";

export default function Estudiantes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      {/* 1. HERO SECTION */}
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
            backgroundImage: `url(${FondoEstudiantes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
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
              COMUNIDAD ARCO IRIS
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Vida Estudiantil
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
              Descubre todas las oportunidades y servicios que tenemos para ti
              como estudiante del Instituto Arco Iris.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. TÍTULO PRINCIPAL */}
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 3, md: 4 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="900"
          color="#003366"
          textTransform="uppercase"
          data-aos="zoom-in"
          sx={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
        >
          Servicios para Estudiantes
        </Typography>
        <Box
          sx={{
            width: { xs: 60, md: 80 },
            height: 4,
            bgcolor: "#007BFF",
            mx: "auto",
            mt: 2,
          }}
          data-aos="fade-up"
        />
      </Container>

      {/* 3. VIDA ESTUDIANTIL */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Box sx={{ position: "relative", px: { xs: 2, sm: 0 } }}>
              <Box
                component="img"
                src={Estudiantes1}
                alt="Estudiantes compartiendo"
                sx={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  objectFit: "cover",
                  height: { xs: "300px", sm: "400px", md: "450px" },
                }}
              />
              <Paper
                sx={{
                  position: "absolute",
                  bottom: { xs: -20, md: -30 },
                  right: { xs: 10, md: -20 },
                  p: { xs: 2, md: 3 },
                  borderRadius: "20px",
                  bgcolor: "#003366",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(0, 51, 102, 0.3)",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="900"
                  sx={{
                    color: "#ffffff",
                    fontSize: "clamp(1.5rem, 4vw, 2.125rem)",
                  }}
                >
                  +20
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    color: "#ffffff",
                    fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)",
                  }}
                >
                  Eventos Anuales
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              mb={2}
              sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Vida Estudiantil
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={3}
              textAlign="justify"
              sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
            >
              Fomentamos un ambiente dinámico y participativo donde los
              estudiantes pueden desarrollar sus talentos y habilidades más allá
              del aula. Organizamos diversas actividades culturales, deportivas
              y recreativas a lo largo del año académico.
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                {
                  icon: <PaletteIcon />,
                  text: "Talleres de arte y cultura (danza, música, teatro).",
                },
                {
                  icon: <SportsSoccerIcon />,
                  text: "Clubes deportivos (fútbol, vóley, baloncesto).",
                },
                {
                  icon: <EventIcon />,
                  text: "Eventos académicos y conferencias.",
                },
                {
                  icon: <VolunteerActivismIcon />,
                  text: "Voluntariado y proyectos de impacto social.",
                },
                {
                  icon: <FestivalIcon />,
                  text: "Celebraciones y festividades institucionales.",
                },
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: { xs: 0.5, md: 1 } }}>
                  <ListItemIcon sx={{ minWidth: 40, color: "#007BFF" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      color: "#333",
                      fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Chip
              label="¡Participa y vive una experiencia universitaria inolvidable!"
              sx={{
                bgcolor: "rgba(0, 123, 255, 0.1)",
                color: "#007BFF",
                fontWeight: "bold",
                px: 1,
                py: { xs: 2, md: 2.5 },
                fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                height: "auto",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                  textAlign: "center",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 4. BIBLIOTECA */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 6, md: 10 },
          borderTop: "1px solid #eaeaea",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={2}
                sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Biblioteca
              </Typography>
              <Typography
                variant="body1"
                color="#555"
                mb={4}
                sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
              >
                Nuestra biblioteca es un espacio fundamental para el aprendizaje
                y la investigación, ofreciendo una amplia colección de recursos
                físicos y digitales.
              </Typography>

              <Grid container spacing={2} mb={4}>
                {[
                  {
                    icon: <AutoStoriesIcon />,
                    text: "Acceso a libros, revistas y tesis especializadas.",
                  },
                  {
                    icon: <WeekendIcon />,
                    text: "Salas de estudio individuales y grupales.",
                  },
                  {
                    icon: <ImportContactsIcon />,
                    text: "Préstamo de material bibliográfico.",
                  },
                  {
                    icon: <ComputerIcon />,
                    text: "Acceso a bases de datos y revistas (Biblioteca Virtual).",
                  },
                  {
                    icon: <LiveHelpIcon />,
                    text: "Asesoría en búsqueda de información y referencias.",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ color: "#007BFF", mt: 0.5 }}>{item.icon}</Box>
                      <Typography
                        variant="body2"
                        color="#444"
                        fontWeight="500"
                        sx={{ fontSize: "clamp(0.875rem, 1.5vw, 0.9rem)" }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  bgcolor: "rgba(0, 51, 102, 0.05)",
                  borderLeft: "4px solid #003366",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, md: 2 },
                  flexDirection: { xs: "column", sm: "row" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <AccessTimeIcon
                  sx={{ fontSize: { xs: 30, md: 35 }, color: "#003366" }}
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="#666"
                    textTransform="uppercase"
                    fontWeight="bold"
                    sx={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
                  >
                    Horario de atención
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#003366"
                    fontWeight="900"
                    sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                  >
                    Lunes a Viernes de 8:00 AM a 6:00 PM
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-18.jpg"
                alt="Biblioteca Institucional"
                sx={{
                  width: "100%",
                  borderRadius: {
                    xs: "20px 10px 20px 10px",
                    md: "40px 10px 40px 10px",
                  },
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                  objectFit: "cover",
                  height: { xs: "300px", sm: "400px", md: "500px" },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. BOLSA DE TRABAJO */}
      <Box
        sx={{
          bgcolor: "#003366",
          py: { xs: 8, md: 12 },
          color: "#ffffff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="zoom-in-right">
              <Box sx={{ position: "relative", p: 1 }}>
                <Box
                  component="img"
                  src={BolsaLaboral}
                  alt="Networking y Bolsa de Trabajo"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                    height: { xs: "250px", sm: "350px", md: "400px" },
                    border: "4px solid rgba(255,255,255,0.1)",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Typography
                variant="overline"
                color="#007BFF"
                fontWeight="bold"
                letterSpacing={2}
                sx={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
              >
                DESARROLLO PROFESIONAL
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#ffffff"
                mb={2}
                sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Bolsa de Trabajo
              </Typography>
              <Typography
                variant="body1"
                color="#a0aec0"
                mb={4}
                textAlign="justify"
                sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
              >
                Apoyamos a nuestros estudiantes y egresados en su inserción
                laboral y desarrollo profesional, conectándolos con
                oportunidades en el sector educativo y afines.
              </Typography>

              <Grid container spacing={{ xs: 2, md: 3 }} mb={5}>
                {[
                  {
                    icon: <WorkOutlineIcon />,
                    text: "Publicación de ofertas laborales exclusivas.",
                  },
                  {
                    icon: <DescriptionIcon />,
                    text: "Asesoría en elaboración de currículum vitae y entrevistas.",
                  },
                  {
                    icon: <ModelTrainingIcon />,
                    text: "Talleres de empleabilidad y desarrollo de habilidades blandas.",
                  },
                  {
                    icon: <HandshakeIcon />,
                    text: "Ferias laborales y networking con instituciones educativas.",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Paper
                      sx={{
                        p: { xs: 2, md: 2.5 },
                        bgcolor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        display: "flex",
                        gap: { xs: 1.5, md: 2 },
                        alignItems: "center",
                        height: "100%",
                        "&:hover": {
                          bgcolor: "rgba(0, 123, 255, 0.1)",
                          borderColor: "#007BFF",
                        },
                      }}
                    >
                      <Box sx={{ color: "#007BFF" }}>{item.icon}</Box>
                      <Typography
                        variant="body2"
                        color="#e2e8f0"
                        fontWeight="500"
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}
                      >
                        {item.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

     

      {/* 7. NUEVA SECCIÓN: COMISIÓN DE ÁRBITROS ESTUDIANTILES */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 8, md: 10 },
          borderTop: "1px solid #eaeaea",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row-reverse" }}
          >
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Typography
                variant="overline"
                color="#007BFF"
                fontWeight="bold"
                letterSpacing={2}
                sx={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
              >
                LIDERAZGO Y DISCIPLINA
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={2}
                sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Comisión de Árbitros Estudiantiles
              </Typography>
              <Typography
                variant="body1"
                color="#555"
                mb={4}
                textAlign="justify"
                sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
              >
                Como parte de nuestra formación integral, fomentamos el liderazgo, la toma de decisiones y el juego limpio a través de nuestra Comisión Oficial de Árbitros. Nuestros estudiantes están altamente capacitados para dirigir encuentros deportivos.
              </Typography>

              <Grid container spacing={2} mb={5}>
                {[
                  {
                    icon: <SportsRoundedIcon />,
                    text: "Formación especializada en reglas de juego (Fútbol, Futsal, etc).",
                  },
                  {
                    icon: <WorkspacePremiumRoundedIcon />,
                    text: "Acreditación oficial para dirigir eventos intra y extra institucionales.",
                  },
                  {
                    icon: <VerifiedUserRoundedIcon />,
                    text: "Carnet de identificación oficial con sistema de verificación QR.",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12 }} key={idx}>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center", bgcolor: "#F8FAFC", p: 2, borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                      <Box sx={{ color: "#007BFF" }}>{item.icon}</Box>
                      <Typography variant="body2" color="#334155" fontWeight="600" sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* BOTÓN DE ENLACE A LA PÁGINA DE VERIFICACIÓN */}
              <Button
                component={Link}
                to="/verificar-arbitros"
                variant="contained"
                size="large"
                startIcon={<QrCodeScannerRoundedIcon />}
                sx={{
                  bgcolor: "#003366",
                  color: "#fff",
                  borderRadius: "16px",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 1.8 },
                  fontWeight: "900",
                  width: { xs: "100%", sm: "auto" },
                  boxShadow: "0 10px 20px rgba(0, 51, 102, 0.2)",
                  "&:hover": { bgcolor: "#001F3F", transform: "translateY(-3px)", boxShadow: "0 15px 25px rgba(0, 51, 102, 0.3)" },
                  transition: "all 0.3s ease"
                }}
              >
                Verificar Carnet de Árbitro
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              {/* Composición visual tipo credencial/QR para hacerlo atractivo */}
              <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: { xs: "350px", md: "500px" } }}>
                <Box sx={{ position: "absolute", width: "90%", height: "90%", borderRadius: "30px", bgcolor: "#EFF6FF", border: "2px dashed #BFDBFE", zIndex: 0 }} />
                
                <Paper sx={{ p: 4, borderRadius: "24px", bgcolor: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", zIndex: 1, textAlign: "center", maxWidth: "320px", border: "1px solid #E2E8F0" }}>
                  <PolicyRoundedIcon sx={{ fontSize: 80, color: "#C59B27", mb: 2 }} />
                  <Typography variant="h5" fontWeight="900" color="#003366" mb={1} textTransform="uppercase">
                    Sistema de Validación
                  </Typography>
                  <Typography variant="body2" color="#64748B" mb={3}>
                    Escanea el código QR del carnet físico o ingresa el DNI para verificar la autenticidad del árbitro.
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: "#F8FAFC", borderRadius: "12px", border: "1px solid #E2E8F0", display: "flex", justifyContent: "center" }}>
                    <QrCodeScannerRoundedIcon sx={{ fontSize: 100, color: "#003366", opacity: 0.8 }} />
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

       {/* 6. BIENESTAR ESTUDIANTIL */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Typography
              variant="overline"
              color="#007BFF"
              fontWeight="bold"
              letterSpacing={2}
              sx={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
            >
              TU SALUD ES PRIMERO
            </Typography>
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              mb={2}
              sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Bienestar Estudiantil
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={4}
              textAlign="justify"
              sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
            >
              El área de Bienestar Estudiantil se encarga de promover la salud
              física y mental, así como el desarrollo personal y social de
              nuestros estudiantes.
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                {
                  icon: <PsychologyIcon />,
                  text: "Atención psicopedagógica individual y grupal.",
                },
                {
                  icon: <ExploreIcon />,
                  text: "Orientación vocacional y profesional.",
                },
                {
                  icon: <LocalHospitalIcon />,
                  text: "Servicio de enfermería y primeros auxilios.",
                },
                {
                  icon: <FavoriteIcon />,
                  text: "Programas de prevención de salud y hábitos saludables.",
                },
                {
                  icon: <Diversity1Icon />,
                  text: "Apoyo en situaciones de vulnerabilidad social.",
                },
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    px: 0,
                    py: { xs: 1, md: 1.5 },
                    borderBottom: index !== 4 ? "1px dashed #ddd" : "none",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "#007BFF" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      color: "#333",
                      fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="zoom-in-left">
            <Box
              sx={{
                position: "relative",
                height: { xs: "350px", sm: "450px", md: "550px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  bgcolor: "rgba(0, 123, 255, 0.05)",
                  zIndex: 0,
                }}
              />

              <Box
                component="img"
                src={Bienestar}
                alt="Bienestar y Apoyo"
                sx={{
                  width: "85%",
                  height: "85%",
                  borderRadius: {
                    xs: "50px 50px 15px 15px",
                    md: "100px 100px 20px 20px",
                  },
                  objectFit: "cover",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              <Paper
                sx={{
                  position: "absolute",
                  top: { xs: "5%", md: "15%" },
                  left: { xs: "5%", md: 0 },
                  p: { xs: 1.5, md: 2 },
                  borderRadius: "16px",
                  bgcolor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, md: 2 },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 123, 255, 0.1)",
                    p: { xs: 0.8, md: 1 },
                    borderRadius: "50%",
                    color: "#007BFF",
                    display: "flex",
                  }}
                >
                  <FavoriteIcon
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#333"
                    sx={{ fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)" }}
                  >
                    Apoyo Constante
                  </Typography>
                  <Typography
                    variant="caption"
                    color="#666"
                    sx={{ fontSize: "clamp(0.7rem, 1vw, 0.75rem)" }}
                  >
                    Físico y Mental
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 8. BANNER FINAL */}
      <Box
        sx={{ bgcolor: "#F0F2F5", pb: { xs: 6, md: 10 }, pt: { xs: 6, md: 10 }, px: { xs: 2, sm: 0 } }}
      >
        <Container maxWidth="md">
          <Paper
            data-aos="fade-up"
            sx={{
              p: { xs: 4, sm: 5, md: 6 },
              borderRadius: "24px",
              textAlign: "center",
              bgcolor: "#007BFF",
              color: "#fff",
              backgroundImage:
                "linear-gradient(135deg, #007BFF 0%, #003366 100%)",
              boxShadow: "0 20px 40px rgba(0, 123, 255, 0.3)",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              mb={2}
              sx={{ color: "#ffffff", fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Tu éxito y bienestar son nuestra prioridad
            </Typography>
            <Typography
              variant="h6"
              fontWeight="400"
              sx={{
                opacity: 0.9,
                color: "#ffffff",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
              }}
            >
              ¡Aprovecha todos los servicios que el Instituto Arco Iris tiene
              para ti!
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}