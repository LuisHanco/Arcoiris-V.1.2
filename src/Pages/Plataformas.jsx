import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LanguageIcon from "@mui/icons-material/Language";

export default function Plataformas() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const getLinkProps = (plat) => {
    const isExternal = plat.target === "_blank";

    return {
      component: isExternal ? "a" : "a",
      [isExternal ? "href" : "href"]: plat.ref,
      target: plat.target,
      ...(isExternal && { rel: "noopener noreferrer" }),
    };
  };

  // --- DATOS DE LAS PLATAFORMAS ---
  const plataformas = [
    {
      id: "01",
      title: "Intranet Institucional",
      subtitle: "Tu Espacio Administrativo",
      tagline: "Plataforma para gestión académica y administrativa.",
      desc: "La Intranet es tu portal personal para gestionar trámites académicos y administrativos de forma rápida y segura. Todo lo que necesitas como estudiante, en un solo lugar.",
      features: [
        "Consultar tus notas y récord académico.",
        "Acceder a tu horario de clases.",
        "Realizar pagos y consultar estados de cuenta.",
        "Actualizar tus datos personales.",
        "Descargar documentos y constancias.",
      ],
      cta: "Acceder a la Intranet",
      ref: "https://intranet.arcoiris.edu.pe/",
      target: "_blank",
      icon: (
        <DashboardCustomizeRoundedIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
      ),
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      darkTheme: false,
    },
    {
      id: "02",
      title: "Aula Virtual",
      subtitle: "Tu Salón de Clases en Línea",
      tagline: "Ambiente de aprendizaje online flexible y colaborativo.",
      desc: "Nuestra Aula Virtual es el entorno de aprendizaje donde encontrarás todo el material de tus cursos, participarás en foros y entregarás tus trabajos. Diseñada para una experiencia educativa flexible y colaborativa.",
      features: [
        "Materiales de lectura y videos.",
        "Foros de discusión y colaboración.",
        "Entrega de tareas y proyectos.",
        "Evaluaciones en línea.",
        "Comunicación directa con docentes y compañeros.",
      ],
      cta: "Ir al Aula Virtual",
      ref: "https://aulavirtual.arcoiris.edu.pe/",
      target: "_blank",
      icon: <LaptopMacRoundedIcon sx={{ fontSize: { xs: 35, md: 50 } }} />,
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      darkTheme: true,
    },
    {
      id: "03",
      title: "Biblioteca Virtual",
      subtitle: "Un Mundo de Conocimiento a tu Alcance",
      tagline: "Acceso a una extensa colección de recursos digitales.",
      desc: "Nuestra Biblioteca Virtual te ofrece acceso ilimitado a una vasta colección de recursos digitales, desde libros y revistas especializadas hasta bases de datos académicas y tesis. Es un recurso esencial para tu investigación y estudio.",
      features: [
        "Miles de libros electrónicos en diversas áreas.",
        "Acceso a revistas científicas y publicaciones periódicas.",
        "Bases de datos especializadas para investigación.",
        "Recursos multimedia y audiovisuales.",
        "Guías y tutoriales para la investigación.",
      ],
      cta: "Explorar Biblioteca Virtual",
      ref: "https://elibro.net/es/lc/arcoiris/login_usuario/?next=/es/lc/arcoiris/inicio/",
      target: "_blank",
      icon: <LocalLibraryRoundedIcon sx={{ fontSize: { xs: 35, md: 50 } }} />,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
      darkTheme: false,
    },
    {
      id: "04",
      title: "Repositorio Institucional",
      subtitle: "Centro de Producción Académica",
      tagline: "Preservando y difundiendo la producción académica.",
      desc: "Nuestro Repositorio Institucional es la plataforma donde se recopila, organiza, preserva y difunde la producción intelectual y académica de la institución. Aquí encontrarás tesis, proyectos de investigación, artículos y otros documentos generados por nuestra comunidad.",
      features: [
        "Tesis de grado y trabajos de investigación de estudiantes.",
        "Artículos científicos y ponencias de docentes.",
        "Publicaciones institucionales y memorias.",
        "Acceso abierto a la producción académica.",
        "Herramienta para la visibilidad y el impacto de la investigación.",
      ],
      cta: "Explorar Repositorio",
      ref: "https://repositorio.arcoiris.edu.pe/",
      target: "_blank",
      icon: <Inventory2RoundedIcon sx={{ fontSize: { xs: 35, md: 50 } }} />,
      img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop",
      darkTheme: false,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      {/* 1. HERO SECTION DIGITAL */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            mixBlendMode: "luminosity",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,51,102,1) 0%, rgba(0,123,255,0.4) 100%)",
            zIndex: 1,
          }}
        />

        <Box
          component={motion.div}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            right: { xs: "-30%", md: "-10%" },
            top: { xs: "-10%", md: "-20%" },
            width: { xs: "400px", md: "600px" },
            height: { xs: "400px", md: "600px" },
            borderRadius: "50%",
            border: "2px dashed rgba(255,255,255,0.2)",
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-right">
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <LanguageIcon
                sx={{
                  color: "#80bdff",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="overline"
                sx={{
                  color: "#80bdff",
                  fontWeight: 900,
                  letterSpacing: { xs: 2, md: 3 },
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                }}
              >
                CAMPUS VIRTUAL
              </Typography>
            </Box>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Nuestras <br /> Plataformas
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e2e8f0",
                maxWidth: "600px",
                fontWeight: 400,
                borderLeft: "4px solid #007BFF",
                pl: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
              }}
            >
              Accede a todas las herramientas y recursos en línea que el
              Instituto Arco Iris tiene para ti. Tu educación, sin fronteras.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. PLATAFORMAS */}
      <Box sx={{ py: { xs: 4, md: 0 } }}>
        {plataformas.map((plat, index) => {
          const isEven = index % 2 === 0;
          const bgSection = plat.darkTheme
            ? "#003366"
            : isEven
              ? "#ffffff"
              : "#F8FAFC";
          const textColor = plat.darkTheme ? "#ffffff" : "#003366";
          const subTextColor = plat.darkTheme ? "#e2e8f0" : "#555555";
          const iconColor = plat.darkTheme ? "#80bdff" : "#007BFF";

          return (
            <Box
              key={plat.id}
              sx={{
                bgcolor: bgSection,
                py: { xs: 8, md: 6 },
                position: "relative",
                overflow: "hidden",
                borderBottom: "1px solid rgba(0,0,0,0.03)",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  position: "absolute",
                  top: { xs: "2%", md: "10%" },
                  [isEven ? "right" : "left"]: { xs: "5%", md: "5%" },
                  fontSize: "clamp(8rem, 20vw, 25rem)",
                  fontWeight: 900,
                  color: plat.darkTheme
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.03)",
                  lineHeight: 1,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              >
                {plat.id}
              </Typography>

              <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 6, md: 8 }}
                  alignItems="center"
                  direction={{
                    xs: "column",
                    md: isEven ? "row" : "row-reverse",
                  }}
                >
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1.5, md: 2 },
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          p: { xs: 1, md: 1.5 },
                          bgcolor: plat.darkTheme
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0, 123, 255, 0.1)",
                          borderRadius: "16px",
                          color: iconColor,
                          display: "flex",
                        }}
                      >
                        {plat.icon}
                      </Box>
                      <Typography
                        variant="overline"
                        color={iconColor}
                        fontWeight="bold"
                        letterSpacing={2}
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
                      >
                        {plat.subtitle}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h2"
                      fontWeight="900"
                      color={textColor}
                      mb={3}
                      lineHeight={1.1}
                      sx={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                    >
                      {plat.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color={subTextColor}
                      mb={4}
                      lineHeight={1.7}
                      sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                    >
                      {plat.desc}
                    </Typography>

                    <List sx={{ mb: { xs: 4, md: 5 } }}>
                      {plat.features.map((feature, i) => (
                        <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: { xs: 30, md: 35 } }}>
                            <CheckCircleOutlineRoundedIcon
                              sx={{
                                color: iconColor,
                                fontSize: { xs: 20, md: 22 },
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              color: subTextColor,
                              fontWeight: 500,
                              fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      {...getLinkProps(plat)}
                      variant={plat.darkTheme ? "contained" : "outlined"}
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        bgcolor: plat.darkTheme ? "#007BFF" : "transparent",
                        color: plat.darkTheme ? "#ffffff" : "#007BFF",
                        borderColor: "#007BFF",
                        borderRadius: "30px",
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.2, md: 1.5 },
                        fontWeight: "bold",
                        width: { xs: "100%", sm: "auto" },
                        textTransform: "none",
                        fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        "&:hover": {
                          bgcolor: plat.darkTheme
                            ? "#0056b3"
                            : "rgba(0, 123, 255, 0.05)",
                          borderColor: plat.darkTheme
                            ? "transparent"
                            : "#0056b3",
                          transform: { xs: "none", md: "translateX(5px)" },
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {plat.cta}
                    </Button>
                  </Grid>

                  <Grid
                    size={{ xs: 12, md: 6 }}
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    sx={{ width: "100%" }}
                  >
                    <Box sx={{ position: "relative", px: { xs: 1, md: 0 } }}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: { xs: -10, md: -20 },
                          [isEven ? "right" : "left"]: { xs: -5, md: -20 },
                          width: { xs: "90%", md: "80%" },
                          height: "100%",
                          borderRadius: { xs: "20px", md: "30px" },
                          bgcolor: plat.darkTheme
                            ? "rgba(0, 123, 255, 0.2)"
                            : "rgba(0, 123, 255, 0.05)",
                          zIndex: 0,
                        }}
                      />

                      <Box
                        component="img"
                        src={plat.img}
                        alt={plat.title}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: { xs: "300px", sm: "400px", md: "500px" },
                          objectFit: "cover",
                          borderRadius: { xs: "20px", md: "30px" },
                          position: "relative",
                          zIndex: 1,
                          boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                        }}
                      />

                      <Paper
                        sx={{
                          position: "absolute",
                          bottom: { xs: -20, md: 40 },
                          [isEven ? "left" : "right"]: { xs: 10, md: -30 },
                          p: { xs: 2, md: 3 },
                          maxWidth: { xs: "240px", md: "280px" },
                          borderRadius: "20px",
                          bgcolor: plat.darkTheme
                            ? "rgba(0, 51, 102, 0.85)"
                            : "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(12px)",
                          border: `1px solid ${plat.darkTheme ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.5)"}`,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                          zIndex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: { xs: 1.5, md: 2 },
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: { xs: 30, md: 40 },
                              bgcolor: iconColor,
                              borderRadius: "4px",
                            }}
                          />
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            lineHeight={1.4}
                            color={plat.darkTheme ? "#ffffff" : "#003366"}
                            sx={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
                          >
                            "{plat.tagline}"
                          </Typography>
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
