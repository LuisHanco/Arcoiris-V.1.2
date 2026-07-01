import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import HandshakeIcon from "@mui/icons-material/Handshake";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function MisionVision() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out-cubic",
      offset: 100,
    });
  }, []);

  const valores = [
    {
      title: "Compromiso",
      desc: "Dedicación y responsabilidad en todas nuestras acciones, con la comunidad educativa y la sociedad.",
      icon: <HandshakeIcon fontSize="inherit" />,
    },
    {
      title: "Innovación",
      desc: "Búsqueda constante de nuevas ideas y metodologías para mejorar la práctica educativa.",
      icon: <LightbulbCircleIcon fontSize="inherit" />,
    },
    {
      title: "Ética",
      desc: "Actuar con integridad, honestidad y transparencia en todos los ámbitos.",
      icon: <GavelIcon fontSize="inherit" />,
    },
    {
      title: "Solidaridad",
      desc: "Apoyo mutuo y trabajo colaborativo para el bienestar de la comunidad.",
      icon: <VolunteerActivismIcon fontSize="inherit" />,
    },
    {
      title: "Excelencia",
      desc: "Búsqueda de la más alta calidad en la formación académica y profesional.",
      icon: <WorkspacePremiumIcon fontSize="inherit" />,
    },
    {
      title: "Respeto",
      desc: "Valoración de la diversidad, las opiniones y los derechos de los demás.",
      icon: <Diversity1Icon fontSize="inherit" />,
    },
  ];

  const misionBullets = [
    "Formación integral y de calidad",
    "Innovación y transformación",
    "Desarrollo regional",
    "Compromiso social",
    "Diversidad cultural",
  ];

  const visionBullets = [
    "Liderazgo en formación docente",
    "Excelencia e investigación",
    "Impacto social positivo",
    "Interculturalidad",
    "Desafíos globales",
  ];

  return (
    <Box sx={{ bgcolor: "#f4f7fb", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
        }}
      >
        <Box
          data-aos="fade-in"
          data-aos-duration="2000"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "luminosity",
            transition: "transform 10s linear",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,51,102,0.95) 0%, rgba(0,123,255,0.6) 100%)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Box>
                <Box
                  data-aos="fade-right"
                  data-aos-delay="100"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "translateX(10px)",
                    },
                  }}
                >
                  <Box sx={{ width: 40, height: 2, bgcolor: "#007BFF" }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#007BFF",
                      fontWeight: 900,
                      letterSpacing: 4,
                      fontSize: "1rem",
                    }}
                  >
                    IDENTIDAD INSTITUCIONAL
                  </Typography>
                </Box>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="300"
                  variant="h1"
                  fontWeight="900"
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "3rem", md: "5.5rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    mb: 4,
                    transition: "text-shadow 0.4s ease, transform 0.4s ease",
                    "&:hover": {
                      textShadow: "0 10px 30px rgba(0, 123, 255, 0.5)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  Misión, <br />
                  <span style={{ color: "#007BFF" }}>Visión</span> y Valores
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="500"
                  variant="h6"
                  sx={{
                    color: "#F0F2F5",
                    fontWeight: 300,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    lineHeight: 1.6,
                    maxWidth: "700px",
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  Impulsamos el presente para transformar el futuro. Conoce los
                  pilares que sostienen nuestra{" "}
                  <strong>excelencia educativa</strong> y el propósito que guía
                  cada uno de nuestros pasos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          pt: { xs: 10, md: 15 },
          pb: { xs: 15, md: 25 },
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="1500"
          sx={{
            position: "absolute",
            top: { xs: "5%", md: "10%" },
            right: "-5%",
            fontSize: { xs: "8rem", md: "20rem" },
            fontWeight: 900,
            color: "rgba(0, 51, 102, 0.03)",
            lineHeight: 0.8,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            transition: "transform 0.8s ease",
            "&:hover": {
              transform: "scale(1.05) translateX(-20px)",
            },
          }}
        >
          01
        </Typography>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ zIndex: 2 }}
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  p: { xs: 4, md: 7 },
                  boxShadow: "0 30px 60px rgba(0, 51, 102, 0.08)",
                  borderRadius: "0 40px 0 40px",
                  position: "relative",
                  transition:
                    "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 40px 80px rgba(0, 123, 255, 0.15)",
                    "& .mision-icon": {
                      transform: "scale(1.15) rotate(-5deg)",
                    },
                    "&::before": {
                      transform: "translate(10px, 10px)",
                      borderColor: "#003366",
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -15,
                    left: -15,
                    width: 100,
                    height: 100,
                    borderTop: "4px solid #007BFF",
                    borderLeft: "4px solid #007BFF",
                    zIndex: -1,
                    transition: "all 0.5s ease",
                  },
                }}
              >
                <Box
                  className="mision-icon"
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/128/2163/2163253.png"
                  alt="mision"
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 3,
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Typography
                  variant="h2"
                  fontWeight="900"
                  color="#003366"
                  mb={4}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Misión
                </Typography>
                <Typography
                  variant="body1"
                  color="#444444"
                  lineHeight={1.9}
                  fontSize="1.1rem"
                  textAlign="justify"
                >
                  Somos una institución de educación superior pedagógica
                  dedicada a la <strong>Formación Inicial Docente</strong> en
                  Educación Inicial y Educación Física, que brinda una educación
                  de calidad mediante la articulación de la investigación, la{" "}
                  <strong>innovación</strong> y la práctica pedagógica situada,
                  promoviendo el desarrollo de la{" "}
                  <strong>identidad docente</strong>, el pensamiento crítico y
                  el compromiso ético, en un marco de inclusión,
                  interculturalidad y desarrollo sostenible, para responder a las demandas del contexto educativo, local, regional y nacional.
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 7 }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Box
                sx={{
                  bgcolor: "rgba(0, 123, 255, 0.04)",
                  p: { xs: 4, md: 8 },
                  pl: { md: 12 },
                  ml: { md: -6 },
                  borderRadius: "0 40px 40px 0",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  transition: "background-color 0.5s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 123, 255, 0.08)",
                  },
                }}
              >
                {misionBullets.map((item, index) => (
                  <Box
                    key={index}
                    data-aos="zoom-in-up"
                    data-aos-delay={300 + index * 100}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      pr: 3,
                      bgcolor: "#ffffff",
                      borderRadius: "16px",
                      border: "1px solid rgba(0, 51, 102, 0.05)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "5px",
                        bgcolor: "#007BFF",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.03)",
                        boxShadow: "0 15px 30px rgba(0, 123, 255, 0.2)",
                        "& .icon-check": {
                          color: "#ffffff",
                          transform: "scale(1.2) rotate(360deg)",
                        },
                        "& .text-mision": {
                          color: "#ffffff",
                        },
                        "&::before": {
                          width: "100%",
                          bgcolor: "#007BFF",
                          zIndex: -1,
                        },
                      },
                    }}
                  >
                    <CheckCircleOutlineIcon
                      className="icon-check"
                      sx={{
                        color: "#003366",
                        transition: "all 0.6s ease",
                        zIndex: 1,
                      }}
                    />
                    <Typography
                      className="text-mision"
                      variant="body1"
                      fontWeight="700"
                      color="#003366"
                      sx={{ transition: "color 0.3s ease", zIndex: 1 }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#003366",
          position: "relative",
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          mt: { xs: 0, md: -10 },
          borderRadius: { md: "80px 0 0 0" },
          boxShadow: "0 -20px 50px rgba(0,0,0,0.1)",
          transition: "background-color 0.8s ease",
          "&:hover": {
            bgcolor: "#002244",
          },
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="1500"
          sx={{
            position: "absolute",
            top: { xs: "5%", md: "10%" },
            left: "-2%",
            fontSize: { xs: "8rem", md: "20rem" },
            fontWeight: 900,
            color: "rgba(255, 255, 255, 0.02)",
            lineHeight: 0.8,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            transition: "transform 0.8s ease",
            "&:hover": {
              transform: "scale(1.05) translateX(20px)",
            },
          }}
        >
          2031
        </Typography>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={0}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid
              size={{ xs: 12, md: 7 }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  p: { xs: 4, md: 8 },
                  pr: { md: 12 },
                  mr: { md: -6 },
                  borderRadius: "40px 0 0 40px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  backdropFilter: "blur(10px)",
                  transition: "background-color 0.5s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.06)",
                  },
                }}
              >
                {visionBullets.map((item, index) => (
                  <Box
                    key={index}
                    data-aos="zoom-in-up"
                    data-aos-delay={300 + index * 100}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      pr: 3,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "5px",
                        bgcolor: "#ffffff",
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.03)",
                        bgcolor: "#ffffff",
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                        "& .text-vision": {
                          color: "#003366",
                        },
                        "& .icon-vision": {
                          color: "#007BFF",
                          transform: "scale(1.2) rotate(180deg)",
                        },
                        "&::before": {
                          width: "100%",
                          bgcolor: "#ffffff",
                          zIndex: -1,
                        },
                      },
                    }}
                  >
                    <AutoAwesomeIcon
                      className="icon-vision"
                      sx={{
                        color: "#ffffff",
                        transition: "all 0.6s ease",
                        zIndex: 1,
                      }}
                    />
                    <Typography
                      className="text-vision"
                      variant="body1"
                      fontWeight="700"
                      color="#ffffff"
                      sx={{ transition: "color 0.3s ease", zIndex: 1 }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ zIndex: 2 }}
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <Box
                sx={{
                  bgcolor: "#007BFF",
                  p: { xs: 4, md: 7 },
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                  borderRadius: "40px 0 40px 0",
                  position: "relative",
                  transition:
                    "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4)",
                    "& .vision-icon": {
                      transform: "scale(1.15) rotate(5deg)",
                    },
                  },
                }}
              >
                <Box
                  className="vision-icon"
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/128/4149/4149687.png"
                  alt="vision"
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 3,
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Typography
                  variant="h2"
                  fontWeight="900"
                  color="#ffffff"
                  mb={4}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Visión
                </Typography>
                <Typography
                  variant="body1"
                  color="rgba(255,255,255,0.9)"
                  lineHeight={1.9}
                  fontSize="1.1rem"
                  textAlign="justify"
                >
                  Al 2031, la Escuela de Educación Superior Pedagógico Privado
                  “Arco Iris” es una institución <strong>acreditada</strong>,
                  reconocida a nivel nacional por su{" "}
                  <strong>calidad académica</strong>, producción científica e
                  innovación pedagógica, que forma docentes competentes, con
                  sólida identidad profesional e investigativa, comprometidos
                  con la <strong>mejora continua</strong> de la educación, la inclusión, la interculturalidad y el desarrollo sostenible del país.

                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 12, md: 20 }, position: "relative" }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            data-aos="fade-up"
            sx={{ textAlign: "center", mb: { xs: 10, md: 15 } }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              color="#003366"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                mb: 2,
                transition: "transform 0.4s ease, text-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  textShadow: "0 10px 20px rgba(0, 51, 102, 0.2)",
                },
              }}
            >
              Nuestros Pilares
            </Typography>
            <Box
              data-aos="zoom-in"
              data-aos-delay="200"
              sx={{
                width: 80,
                height: 4,
                bgcolor: "#007BFF",
                mx: "auto",
                borderRadius: 2,
                transition: "width 0.5s ease",
                "&:hover": {
                  width: 160,
                },
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {valores.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                sx={{ display: "flex" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    p: 5,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#ffffff",
                    borderRadius: "40px 10px 40px 10px",
                    boxShadow: "0 10px 40px rgba(0, 51, 102, 0.04)",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-20px) scale(1.02)",
                      background:
                        "linear-gradient(135deg, #003366 0%, #007BFF 100%)",
                      boxShadow: "0 25px 60px rgba(0, 123, 255, 0.4)",
                      "& .title-text, & .desc-text": {
                        color: "#ffffff",
                      },
                      "& .icon-main": {
                        color: "#ffffff",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                        transform: "scale(0.9) rotate(10deg)",
                      },
                      "& .icon-bg": {
                        transform: "scale(8) rotate(-25deg)",
                        opacity: 0.08,
                        color: "#ffffff",
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-bg"
                    sx={{
                      position: "absolute",
                      top: "20%",
                      right: "10%",
                      fontSize: 100,
                      color: "#007BFF",
                      opacity: 0,
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
                    <Box
                      className="icon-main"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "16px",
                        bgcolor: "rgba(0, 123, 255, 0.08)",
                        color: "#007BFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 32,
                        mb: 4,
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      className="title-text"
                      variant="h4"
                      fontWeight="800"
                      color="#003366"
                      mb={2}
                      sx={{ transition: "color 0.4s ease", fontSize: "1.5rem" }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      className="desc-text"
                      variant="body1"
                      color="#666666"
                      lineHeight={1.7}
                      sx={{ transition: "color 0.4s ease" }}
                    >
                      {item.desc.split(",").map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {i === 0 ? <strong>{part}</strong> : part}
                          {i < arr.length - 1 ? "," : ""}
                        </React.Fragment>
                      ))}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
