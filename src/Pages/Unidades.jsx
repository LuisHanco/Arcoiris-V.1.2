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
  Chip,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos Principales
import SchoolIcon from "@mui/icons-material/School";
import BiotechIcon from "@mui/icons-material/Biotech";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Íconos Administrativos
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedIcon from "@mui/icons-material/Verified";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export default function Unidades() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // --- DATOS: UNIDADES PRINCIPALES ---
  const unidadesPrincipales = [
    {
      title: "Unidad Académica",
      tagline: "Fomentando un ambiente de aprendizaje innovador.",
      jefe: "Dra. Ida Antonia Mosqueira Sotomayor",
      mision:
        "Asegurar la calidad y pertinencia de los procesos de enseñanza-aprendizaje, la investigación y la extensión educativa, formando profesionales altamente competentes y comprometidos con el desarrollo del país.",
      funciones: [
        "Coordinar y supervisar el diseño, desarrollo y evaluación de los planes de estudio y sílabos.",
        "Realizar el seguimiento y evaluación del rendimiento académico de estudiantes y docentes.",
        "Promover la innovación pedagógica y la actualización curricular en todas las carreras.",
        "Gestionar la programación académica semestral y la asignación de la carga horaria a los docentes.",
        "Implementar estrategias para la mejora continua de la calidad educativa.",
      ],
      icon: <SchoolIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", // Aula / Académico
      hasButton: true,
      buttonLink: "/unidad_academica", 
      buttonText: "Ver Documentos de la Unidad",
    },
    {
      title: "Unidad de Investigación e Innovación",
      tagline: "Impulsando el conocimiento y la creatividad.",
      jefe: "Mag. Víctor Rodríguez Soto",
      mision:
        "Promover y ejecutar la investigación formativa y aplicada, así como la innovación tecnológica y pedagógica, contribuyendo a la generación de conocimiento y a la solución de problemas educativos y sociales.",
      funciones: [
        "Asesorar y supervisar los proyectos de investigación e innovación de estudiantes y docentes.",
        "Gestionar la publicación y difusión de los resultados de investigación.",
        "Organizar y promover eventos académicos como seminarios, talleres y conferencias en investigación.",
        "Establecer y fortalecer alianzas estratégicas con otras instituciones y centros de investigación.",
        "Fomentar una cultura de investigación e innovación en la comunidad educativa.",
      ],
      icon: <BiotechIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", // Investigación
      hasButton: true,
      buttonLink: "/Unidad_investigacion", 
      buttonText: "Ver más sobre Investigación",
    },
    {
      title: "Bienestar Estudiantil y Empleabilidad",
      tagline: "Un espacio seguro para el crecimiento personal.",
      jefe: "Mag. Marleny Puma Concha",
      mision:
        "Contribuir al desarrollo integral de los estudiantes, brindando servicios de apoyo y orientación que favorezcan su permanencia, rendimiento académico y futura inserción laboral, promoviendo un ambiente universitario saludable y motivador.",
      funciones: [
        "Ofrecer asesoría psicopedagógica y emocional a los estudiantes.",
        "Coordinar programas de orientación y consejería estudiantil.",
        "Gestionar la bolsa de trabajo y promover la empleabilidad de egresados.",
        "Organizar actividades deportivas, culturales y recreativas.",
        "Brindar atención de primeros auxilios y orientación en salud básica.",
      ],
      icon: <Diversity3Icon sx={{ fontSize: { xs: 30, md: 40 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop", // Estudiantes
    },
    {
      title: "Unidad de Formación Continua",
      tagline: "Actualización profesional constante.",
      jefe: "Mag. Nelly Roxana Concha Martínez",
      mision:
        "Diseñar y ejecutar programas de actualización, diplomados y cursos de especialización que respondan a las demandas del mercado laboral y a la necesidad de desarrollo profesional continuo de la comunidad, promoviendo la excelencia y la innovación educativa.",
      funciones: [
        "Identificar necesidades de capacitación y desarrollo profesional.",
        "Diseñar y actualizar la oferta de programas de formación continua.",
        "Gestionar la inscripción, el seguimiento y la certificación de participantes.",
        "Establecer convenios con institutions y empresas para programas conjuntos.",
        "Evaluar la pertinencia y el impacto de los programas ofrecidos.",
      ],
      icon: <TrendingUpIcon sx={{ fontSize: { xs: 30, md: 40 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop", // Profesionales estudiando
    },
  ];

  // --- DATOS: OFICINAS ADMINISTRATIVAS ---
  const oficinasAdministrativas = [
    {
      title: "Oficina de Administración",
      tagline: "Trabajando para el soporte integral de la institución.",
      jefe: "Lic. José Alejandro Victoria Caballero",
      mision:
        "Administrar eficientemente los recursos humanos, financieros, materiales y logísticos de la institución, garantizando la transparencia, el control y la optimización de los mismos para el cumplimiento de los objetivos estratégicos.",
      funciones: [
        "Gestionar el presupuesto institucional y la ejecución de los gastos.",
        "Administrar los procesos de contratación, remuneración y bienestar del personal administrativo.",
        "Supervisar la adquisición, almacenamiento y distribución de bienes y servicios.",
        "Mantener y conservar la infraestructura y el equipamiento.",
        "Elaborar informes de gestión económica y financiera.",
      ],
      icon: <BusinessCenterIcon sx={{ fontSize: { xs: 28, md: 35 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop", // Oficina / Administración
    },
    {
      title: "Oficina de Calidad",
      tagline: "Comprometidos con la excelencia y mejora continua.",
      jefe: "Abog. Jania Karin Torres Huaman",
      mision:
        "Implementar, mantener y mejorar continuamente el sistema de gestión de calidad institucional, garantizando el cumplimiento de los estándares de excelencia educativa y los requisitos de acreditación.",
      funciones: [
        "Diseñar y gestionar el sistema de gestión de calidad institucional.",
        "Coordinar los procesos de autoevaluación, evaluación externa y acreditación.",
        "Recopilar, analizar y difundir los indicadores de calidad educativa.",
        "Capacitar a la comunidad educativa en temas de cultura de calidad.",
        "Elaborar y actualizar los manuales y procedimientos de calidad.",
      ],
      icon: <VerifiedIcon sx={{ fontSize: { xs: 28, md: 35 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", // Trabajo en equipo / Calidad
    },
    {
      title: "Asesoría Normativa",
      tagline: "Garantizando la legalidad y transparencia institucional.",
      jefe: "Abog. Jania Karin Torres Huaman",
      mision:
        "Brindar asesoramiento legal especializado a la Dirección y a las diferentes unidades de la institución, asegurando el estricto cumplimiento del marco normativo vigente y la correcta aplicación de las políticas.",
      funciones: [
        "Emitir opiniones legales y dictámenes sobre asuntos institucionales.",
        "Revisar y elaborar proyectos de reglamentos, convenios y otros documentos.",
        "Asesorar en la interpretación y aplicación de la normativa educativa.",
        "Atender consultas legales de la comunidad educativa.",
        "Representar a la institución en procesos administrativos o judiciales.",
      ],
      icon: <GavelIcon sx={{ fontSize: { xs: 28, md: 35 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop", // Leyes / Asesoría
    },
    {
      title: "Secretaría General",
      tagline: "Organización y eficiencia en el servicio al estudiante.",
      jefe: "Mag. Verónica Luz Torres Mamani",
      mision:
        "Gestionar de manera eficiente y transparente los procesos documentarios y académicos, garantizando la custodia y confidencialidad de la información, así como la oportuna emisión de documentos oficiales.",
      funciones: [
        "Recepcionar, registrar, clasificar y archivar la documentación oficial.",
        "Emitir y autenticar constancias, certificados, diplomas y grados.",
        "Custodiar y actualizar los expedientes académicos de los estudiantes.",
        "Apoyar en la organización y ejecución de los procesos de matrícula.",
        "Gestionar la correspondencia y comunicaciones de la institución.",
      ],
      icon: <AssignmentTurnedInIcon sx={{ fontSize: { xs: 28, md: 35 }, color: "#007BFF" }} />,
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop", // Documentos / Organización
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
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-down" sx={{ textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#80bdff",
                fontWeight: 900,
                letterSpacing: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
              }}
            >
              ORGANIZACIÓN INSTITUCIONAL
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
              Nuestras Unidades
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                px: { xs: 2, md: 0 },
              }}
            >
              Descubre las áreas que trabajan día a día para tu desarrollo
              integral y para garantizar la excelencia educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          {unidadesPrincipales.map((unidad, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                key={index}
                direction={{ xs: "column", md: isEven ? "row" : "row-reverse" }}
                sx={{ mb: { xs: 8, md: 15 }, "&:last-child": { mb: 0 } }}
              >
                <Grid
                  size={{ xs: 12, md: 6 }}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                >
                  <Box sx={{ position: "relative", px: { xs: 2, md: 0 } }}>
                    <Box
                      component="img"
                      src={unidad.img}
                      alt={unidad.title}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: { xs: "300px", sm: "400px", md: "450px" },
                        objectFit: "cover",
                        borderRadius: {
                          xs: "20px 50px 20px 20px",
                          md: isEven
                            ? "20px 100px 20px 20px"
                            : "100px 20px 20px 20px",
                        },
                        boxShadow: "0 20px 50px rgba(0, 51, 102, 0.15)",
                      }}
                    />
                    <Paper
                      sx={{
                        position: "absolute",
                        bottom: { xs: -20, md: 30 },
                        [isEven ? "right" : "left"]: { xs: 10, md: -20 },
                        p: { xs: 1.5, md: 2 },
                        pr: { xs: 2, md: 3 },
                        borderRadius: "12px",
                        bgcolor: "#007BFF",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        boxShadow: "0 10px 30px rgba(0, 123, 255, 0.3)",
                        maxWidth: { xs: "250px", md: "300px" },
                        zIndex: 2,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "rgba(255,255,255,0.2)",
                          p: 1,
                          borderRadius: "50%",
                          display: "flex",
                        }}
                      >
                        <ArrowForwardIcon
                          sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        lineHeight={1.2}
                        sx={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}
                      >
                        {unidad.tagline}
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 6 }}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                  sx={{ mt: { xs: 2, md: 0 } }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1, md: 1.5 },
                        bgcolor: "rgba(0, 123, 255, 0.1)",
                        borderRadius: "16px",
                      }}
                    >
                      {unidad.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      fontWeight="900"
                      color="#003366"
                      lineHeight={1.1}
                      sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
                    >
                      {unidad.title}
                    </Typography>
                  </Box>

                  <Chip
                    label={`Jefe(a): ${unidad.jefe}`}
                    sx={{
                      bgcolor: "#003366",
                      color: "#fff",
                      fontWeight: "bold",
                      mb: 3,
                      fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                      height: "auto",
                      py: 0.5,
                      "& .MuiChip-label": { whiteSpace: "normal" },
                    }}
                  />

                  <Typography
                    variant="body1"
                    color="#555"
                    mb={3}
                    textAlign="justify"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
                  >
                    <strong>Misión:</strong> {unidad.mision}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#003366"
                    mb={2}
                    sx={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
                  >
                    Funciones Principales:
                  </Typography>

                  <List sx={{ p: 0, mb: unidad.hasButton ? 3 : 0 }}>
                    {unidad.funciones.map((func, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <CheckCircleIcon
                            sx={{ color: "#007BFF", fontSize: 20 }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={func}
                          primaryTypographyProps={{
                            color: "#444",
                            fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* DISEÑO DEL BOTÓN ORIGINAL (Outlined) */}
                  {unidad.hasButton && (
                    <Button
                      component={Link}
                      to={unidad.buttonLink}
                      variant="outlined"
                      sx={{
                        mt: 2,
                        color: "#007BFF",
                        borderColor: "#007BFF",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": { bgcolor: "rgba(0, 123, 255, 0.05)" },
                      }}
                    >
                      {unidad.buttonText} 
                    </Button>
                  )}
                </Grid>
              </Grid>
            );
          })}
        </Container>
      </Box>

      {/* SECCIÓN OFICINAS ADMINISTRATIVAS */}
      <Box
        sx={{
          bgcolor: "#003366ec",
          py: { xs: 8, md: 14 },
          position: "relative",
          mb: { xs: "-40px", md: "-120px" },
          pb: { xs: 12, md: 30 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.02,
            backgroundImage:
              "radial-gradient(circle at 50% 0%, #ffffff 15%, transparent 15%), radial-gradient(circle at 50% 100%, #ffffff 15%, transparent 15%)",
            backgroundSize: "100px 100px",
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
              Oficinas Administrativas
            </Typography>
            <Typography
              variant="h6"
              color="#80bdff"
              mt={2}
              maxWidth="700px"
              mx="auto"
              sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              El soporte estratégico y legal que garantiza el correcto
              funcionamiento y la mejora continua de nuestra institución.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {oficinasAdministrativas.map((oficina, idx) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 0,
                    borderRadius: "24px",
                    bgcolor: "#ffffff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: { xs: "none", md: "translateY(-8px)" },
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={oficina.img}
                    alt={oficina.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: { xs: "200px", sm: "250px", md: "310px" },
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          fontWeight="900"
                          color="#003366"
                          mb={0.5}
                          sx={{
                            fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                            lineHeight: 1.2,
                          }}
                        >
                          {oficina.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="#007BFF"
                          fontWeight="bold"
                          textTransform="uppercase"
                          letterSpacing={1}
                          sx={{
                            display: "block",
                            fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)",
                          }}
                        >
                          {oficina.tagline}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          p: { xs: 1, md: 1.5 },
                          bgcolor: "rgba(0, 123, 255, 0.1)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {oficina.icon}
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3, pb: 2, borderBottom: "1px dashed #ccc" }}>
                      <Typography
                        variant="body2"
                        color="#666"
                        fontWeight="bold"
                      >
                        Jefe(a):
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333"
                        fontWeight="600"
                        sx={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                      >
                        {oficina.jefe}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="#555"
                      mb={3}
                      textAlign="justify"
                      fontStyle="italic"
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                    >
                      "{oficina.mision}"
                    </Typography>

                    <Box sx={{ mt: "auto" }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="#003366"
                        mb={1}
                        sx={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                      >
                        Funciones:
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {oficina.funciones.map((func, i) => (
                          <ListItem
                            key={i}
                            sx={{ px: 0, py: 0.25, alignItems: "flex-start" }}
                          >
                            <ListItemIcon sx={{ minWidth: 20, mt: 1 }}>
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  bgcolor: "#007BFF",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={func}
                              primaryTypographyProps={{
                                color: "#555",
                                fontSize: "clamp(0.8rem, 1.5vw, 0.85rem)",
                                lineHeight: 1.4,
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
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