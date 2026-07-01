import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  useScrollTrigger,
  Paper,
  Divider,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage1 from "../assets/Imagenes/DocentesVarones.webp";
import bgImage2 from "../assets/Imagenes/DocentesMujeres.webp";
import bgImage3 from "../assets/Imagenes/FachadaInterior1.webp";
import bgImage4 from "../assets/Imagenes/FachadaInterior2.webp";

import Inicial from "../assets/Imagenes/Inicial1.webp";
import Fisica from "../assets/Imagenes/Basquet.webp";

import Formacion from "../assets/Imagenes/Formacion.webp";
import Inicial3 from "../assets/Imagenes/Inicial3.webp";
import InicialDisfraz from "../assets/Imagenes/InicialDisfraz.webp";

import logo_muni_sb from "../assets/Logos/logo_muni_sb_rm.webp";
import logo_perueduca from "../assets/Logos/logo_perueduca_rm.webp";
import logo_pronabec from "../assets/Logos/logo_pronabec.webp";
import logo_geredu from "../assets/Logos/logo_GEREDU_rm.webp";

const floatSubtle = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const marquee = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const carouselData = [
  {
    eslogan: "Formando los futuros líderes de la educación en Cusco",
    texto:
      "Educación de calidad con valores, comprometidos con el desarrollo de la región.",
    boton: "¡Postula Aquí!",
    ref: "/admision",
    bgImage: bgImage1,
  },
  {
    eslogan: "Docentes Expertos, Tu Guía hacia el Éxito",
    texto:
      "Un equipo pedagógico altamente calificado y comprometido con tu formación.",
    boton: "Conoce a Nuestros Docentes",
    ref: "/directorio",
    bgImage: bgImage2,
  },
  {
    eslogan: "Instalaciones Modernas para tu Aprendizaje",
    texto:
      "Ambientes equipados con tecnología de punta para una experiencia educativa de primer nivel.",
    boton: "Ver Transparencia",
    ref: "/transparencia",
    bgImage: bgImage4,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const logosAcreditaciones = [
  "https://www.iesppazangaro.edu.pe/wp-content/uploads/2021/01/link_difoid.png",
  logo_muni_sb,
  logo_perueduca,
  logo_pronabec,
  logo_geredu,
  "https://sunedu.us-east-1.linodeobjects.com/renati%2Flogo.png",
];

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 10 + 15}s`,
  type: i % 3,
}));

export default function Inicio() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        AOS.refresh();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % carouselData.length);
        setIsTransitioning(false);
      }, 800);
    }, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "#ffffff", color: "#0A192F", position: "relative" }}>
      <style>{`
        ::-webkit-scrollbar { display: none; }
        html, body { scrollbar-width: none; -ms-overflow-style: none; overflow-x: hidden; }
      `}</style>

      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {particles.map((p) => (
          <Box
            key={p.id}
            sx={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: p.type === 0 ? "50%" : p.type === 1 ? "4px" : "0",
              clipPath:
                p.type === 2 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
              bgcolor: "rgba(25, 118, 210, 0.04)",
              animation: `${floatSubtle} ${p.duration} infinite alternate ease-in-out ${p.delay}`,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          height: { xs: "100dvh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          bgcolor: "#0A192F",
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${carouselData[activeSlide].bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.3) 100%)",
                },
              }}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#1976d252",
                zIndex: 3,
                skewX: "-15deg",
                transformOrigin: "bottom",
              }}
            />
          )}
        </AnimatePresence>

        {/* Contenido principal del Slide */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 4,
            pt: { xs: 6, sm: 8, md: 10 },
            px: { xs: 3, sm: 4, md: 3 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Typography
                variant="h2"
                fontWeight="900"
                sx={{
                  color: "#ffffff",
                  mb: { xs: 2, md: 3 },
                  fontSize: {
                    xs: "clamp(2.5rem, 10vw, 3.2rem)",
                    sm: "3.5rem",
                    md: "3rem",
                    lg: "4rem",
                  },
                  lineHeight: { xs: 1.15, md: 1.1 },
                  letterSpacing: "-0.02em",
                }}
              >
                {carouselData[activeSlide].eslogan}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: { xs: 4, md: 5 },
                  fontWeight: 300,
                  color: "#e0e0e0",
                  maxWidth: { xs: "100%", md: "700px" },
                  lineHeight: { xs: 1.5, md: 1.6 },
                  fontSize: {
                    xs: "1.05rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.5rem",
                  },
                }}
              >
                {carouselData[activeSlide].texto}
              </Typography>

              <Button
                component={Link}
                to={carouselData[activeSlide].ref}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#0A192F",
                  px: { xs: 3, md: 4.5 },
                  py: { xs: 1.5, md: 1.5 },
                  width: { xs: "100%", sm: "auto" },
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  borderRadius: "30px",
                  textTransform: "none",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    bgcolor: "#1976d2",
                    color: "#ffffff",
                    transform: "translateX(8px)",
                  },
                }}
              >
                {carouselData[activeSlide].boton}
              </Button>
            </motion.div>
          </AnimatePresence>
        </Container>

        {/* Indicador animado de Scroll */}
        <Box
          component={motion.div}
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          sx={{
            position: "absolute",
            bottom: { xs: 30, md: 40 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardDoubleArrowDownIcon
            cursor="pointer"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "3rem", md: "3.5rem" },
            }}
          />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 15, position: "relative", zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "5%",
            left: "-10%",
            fontSize: { xs: "6rem", md: "14rem" },
            color: "rgba(25,118,210,0.02)",
            fontWeight: 900,
            textTransform: "uppercase",
            zIndex: -1,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          EDUCACIÓN
        </Typography>
        <Grid container spacing={8} alignItems="center">
          <Grid
            size={{ xs: 12, md: 5.5 }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            sx={{ position: "relative", zIndex: 4 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                bgcolor: "rgba(25,118,210,0.05)",
                px: 2.5,
                py: 1,
                borderRadius: "30px",
                border: "1px solid rgba(25,118,210,0.1)",
              }}
            >
              <SchoolIcon sx={{ color: "#1976d2", fontSize: 22 }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#1976d2",
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  m: 0,
                }}
              >
                Bienvenidos al IESPP Arco Iris
              </Typography>
            </Box>

            <Typography
              variant="h3"
              fontWeight="900"
              sx={{
                mb: 3,
                color: "#0A192F",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                width: { xs: "100%", md: "135%" },
                position: "relative",
                top: "-10px",
                fontSize: "10px6",
              }}
            >
              Nuestra Institución: <br />
              <Box
                component="span"
                sx={{ color: "#1976d2", position: "relative" }}
              >
                Forjando el Futuro
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 4,
                    left: 0,
                    width: "100%",
                    height: "30%",
                    bgcolor: "rgba(25,118,210,0.15)",
                    zIndex: -1,
                    borderRadius: "4px",
                  }}
                />
              </Box>{" "}
              de la Educación
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#444",
                mb: 3,
                lineHeight: 1.8,
                fontSize: "1.1rem",
                fontWeight: 500,
                textAlign: "justify",
                pr: { md: 3 },
              }}
            >
              En el corazón de Cusco, el Instituto Superior Pedagógico Privado
              Arco Iris del Cusco se alza como un faro de conocimiento y
              transformación. Con más de dos décadas de trayectoria, hemos
              dedicado nuestra pasión a la formación de educadores que no solo
              enseñan, sino que inspiran, innovan y lideran el cambio en sus
              comunidades.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 5,
                lineHeight: 1.8,
                textAlign: "justify",
                pr: { md: 3 },
              }}
            >
              Nuestra filosofía se arraiga en una educación integral que
              trasciende las aulas. Aquí, cada estudiante desarrolla no solo
              sólidos conocimientos pedagógicos y disciplinares, sino también
              una profunda vocación de servicio, pensamiento crítico y valores
              éticos inquebrantables. Creemos en el potencial ilimitado de
              nuestros futuros docentes para construir un Perú más justo y
              equitativo.
            </Typography>

            <Box
              sx={{
                position: "relative",
                p: 4,
                width: { xs: "100%", md: "135%" },
                zIndex: 5,
                bgcolor: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(10,25,47,0.08)",
                borderLeft: "6px solid #1976d2",
                transition: "all 0.4s ease-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 30px 60px rgba(10,25,47,0.10)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="800"
                sx={{ color: "#0A192F", lineHeight: 1.5 }}
              >
                Te invitamos a ser parte de nuestra historia... <br />
                <Box component="span" sx={{ color: "#1976d2" }}>
                  ¡Tu futuro comienza aquí, en el Instituto Arco Iris!
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6.5 }}
            sx={{
              position: "relative",
              minHeight: { xs: "400px", md: "550px" },
              display: "flex",
              alignItems: "center",
              mt: { xs: 5, md: 0 },
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              sx={{
                position: "absolute",
                top: "0%",
                right: "-5%",
                width: "250px",
                height: "250px",
                backgroundImage:
                  "radial-gradient(#1976d2 2px, transparent 2px)",
                backgroundSize: "24px 24px",
                opacity: 0.15,
                zIndex: 0,
              }}
            />
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "0%",
                width: "95%",
                height: "85%",
                bgcolor: "#f4f7fb",
                borderRadius: "40px",
                zIndex: 0,
                border: "1px solid rgba(25,118,210,0.05)",
              }}
            />
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "auto", md: "4/3" },
                minHeight: { xs: "350px", md: "auto" },
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(10,25,47,0.15)",
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={bgImage4}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "all 0.4s ease-out",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 30px 60px rgba(10,25,47,0.10)",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,25,47,0.2) 0%, rgba(0,0,0,0) 100%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              sx={{
                position: "absolute",
                top: "10%",
                left: "-5%",
                bgcolor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                px: 2.5,
                py: 1.5,
                borderRadius: "16px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                border: "1px solid rgba(255,255,255,0.8)",
                cursor: "default",
                transition: "all 0.6s ease-out",
                "&:hover": {
                  transform: "translateY(8px) !important",
                  boxShadow: "0 30px 60px rgba(10,25,47,0.10)",
                },
              }}
            >
              <VerifiedIcon sx={{ color: "#42A5F5", fontSize: 24 }} />
              <Typography
                variant="body2"
                fontWeight="800"
                color="#0A192F"
                letterSpacing={0.5}
              >
                Excelencia Académica
              </Typography>
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              sx={{
                position: "absolute",
                bottom: "-5%",
                right: "-2%",
                bgcolor: "#0A192F",
                color: "#fff",
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(10,25,47,0.3)",
                zIndex: 3,
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.4s ease-out",
                "&:hover": {
                  transform: "translateY(-7px) !important",
                  boxShadow: "0 30px 60px rgba(10,25,47,0.10)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(circle, rgba(66,165,245,0.2) 0%, rgba(0,0,0,0) 70%)",
                  zIndex: 0,
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h2"
                    fontWeight="900"
                    sx={{ color: "#42A5F5", lineHeight: 1 }}
                  >
                    30<span style={{ fontSize: "0.6em" }}>+</span>
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Años de Trayectoria
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#a0aec0", maxWidth: "180px", lineHeight: 1.5 }}
                >
                  Formando líderes en la educación peruana.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#fbfcfd", py: 15, position: "relative", zIndex: 2 }}>
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            sx={{ textAlign: "center", mb: 10 }}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              sx={{ color: "#0A192F", mb: 2 }}
            >
              Nuestros Programas
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              En el Instituto Arco Iris, te ofrecemos programas de estudio de
              alta calidad, alineados con las demandas del sector educativo y
              los estándares del MINEDU.
            </Typography>
          </Box>
          <Grid
            container
            spacing={4}
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              variants={fadeInUp}
            >
              <Card
                sx={{
                  position: "relative",
                  height: "500px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 1s ease-out",
                  "&:hover .bg-img": { transform: "scale(1.08)" },
                  "&:hover .overlay": {
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(25,118,210,0.6) 100%)",
                  },
                  "&:hover .content-hidden": {
                    maxHeight: "500px",
                    opacity: 1,
                    mt: 3,
                  },
                }}
              >
                <Box
                  className="bg-img"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${Inicial})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.8s ease",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.1) 100%)",
                    transition: "background 0.6s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 5,
                    zIndex: 2,
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/7456/7456976.png"
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: "contain",
                        transition: "all 0.4s ease",
                        filter: `brightness(0) saturate(100%) invert(70%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                      }}
                    />
                    <Typography variant="h4" fontWeight="800">
                      Educación Inicial
                    </Typography>
                  </Box>
                  <Box
                    className="content-hidden"
                    sx={{
                      maxHeight: 0,
                      opacity: 0,
                      transition: "all 0.6s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#e0e0e0",
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        textAlign: "justify",
                      }}
                    >
                      Sumérgete en el fascinante mundo de la primera infancia.
                      Nuestro programa te capacita para ser un educador
                      innovador, capaz de estimular el desarrollo integral de
                      niños de 0 a 5 años.
                    </Typography>
                    <Box sx={{ borderLeft: "3px solid #42A5F5", pl: 2, mb: 4 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", mb: 0.5 }}
                      >
                        <strong>Duración:</strong> 5 años (10 semestres)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", mb: 0.5 }}
                      >
                        <strong>Modalidad:</strong> Presencial
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        <strong>Enfoque:</strong> Desarrollo integral,
                        metodologías innovadoras.
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      to="/Inicial"
                      onClick={() => window.scrollTo(0, 0)}
                      variant="contained"
                      sx={{
                        bgcolor: "#42A5F5",
                        color: "#0A192F",
                        borderRadius: "30px",
                        px: 4,
                        py: 1.2,
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": { bgcolor: "#fff" },
                      }}
                    >
                      Ver Detalles
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              variants={fadeInUp}
            >
              <Card
                sx={{
                  position: "relative",
                  height: "500px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 1s ease in-out",
                  "&:hover .bg-img": { transform: "scale(1.08)" },
                  "&:hover .overlay": {
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(38,166,154,0.6) 100%)",
                  },
                  "&:hover .content-hidden": {
                    maxHeight: "500px",
                    opacity: 1,
                    mt: 3,
                  },
                }}
              >
                <Box
                  className="bg-img"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${Fisica})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.8s ease",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.1) 100%)",
                    transition: "background 0.6s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 5,
                    zIndex: 2,
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/128/3048/3048355.png"
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: "contain",
                        transition: "all 0.4s ease",
                        filter: `brightness(0) saturate(100%) invert(55%) sepia(45%)
                        saturate(600%) hue-rotate(130deg) brightness(95%) contrast(90%)`,
                      }}
                    />
                    <Typography variant="h4" fontWeight="800">
                      Educación Física
                    </Typography>
                  </Box>
                  <Box
                    className="content-hidden"
                    sx={{
                      maxHeight: 0,
                      opacity: 0,
                      transition: "all 0.6s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#e0e0e0",
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        textAlign: "justify",
                      }}
                    >
                      Conviértete en un agente de cambio para la salud y el
                      bienestar. Prepárate para diseñar y ejecutar planes de
                      actividad física y deporte, promoviendo estilos de vida
                      saludables en todas las etapas educativas.
                    </Typography>
                    <Box sx={{ borderLeft: "3px solid #26A69A", pl: 2, mb: 4 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", mb: 0.5 }}
                      >
                        <strong>Duración:</strong> 5 años (10 semestres)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff", mb: 0.5 }}
                      >
                        <strong>Modalidad:</strong> Presencial
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        <strong>Enfoque:</strong> Actividad física, deporte,
                        salud.
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/Fisica"
                      onClick={() => window.scrollTo(0, 0)}
                      sx={{
                        bgcolor: "#26A69A",
                        color: "#fff",
                        borderRadius: "30px",
                        px: 4,
                        py: 1.2,
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": { bgcolor: "#fff", color: "#0A192F" },
                      }}
                    >
                      Ver Detalles
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10, position: "relative", zIndex: 2 }}>
        <Typography
          data-aos="fade-down"
          variant="h3"
          fontWeight="900"
          textAlign="center"
          sx={{ color: "#0A192F", mb: 10 }}
        >
          Servicios Destacados
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              size: 8,
              img: "https://cdn-icons-png.flaticon.com/128/746/746964.png",
              title: "Psicopedagógico",
              desc: "Orientación profesional integral para potenciar el desarrollo cognitivo y emocional de nuestros estudiantes. Un acompañamiento continuo hacia tu éxito.",
              color: "#0a192f",
              aos: "fade-right",
            },
            {
              size: 4,
              img: "https://cdn-icons-png.flaticon.com/128/7068/7068006.png",
              title: "Administrativo",
              desc: "Gestión eficiente, transparente y ágil de todos los trámites documentarios y académicos.",
              color: "#0a192f",
              aos: "fade-left",
            },
            {
              size: 4,
              img: "https://cdn-icons-png.flaticon.com/128/7310/7310705.png",
              title: "Soporte Médico",
              desc: "Atención primaria, primeros auxilios y campañas de prevención.",
              color: "#0a192f",
              aos: "fade-right",
            },
            {
              size: 8,
              img: "https://cdn-icons-png.flaticon.com/128/8445/8445679.png",
              title: "Tecnología (TI)",
              desc: "Soporte continuo en el manejo de plataformas, aulas virtuales y herramientas digitales de vanguardia. Equipamiento moderno para tu aprendizaje.",
              color: "#0a192f",
              aos: "fade-left",
            },
            {
              size: 6,
              img: "https://cdn-icons-png.flaticon.com/128/11210/11210017.png",
              title: "Servicio Social",
              desc: "Acompañamiento y apoyo constante a estudiantes que enfrentan situaciones de vulnerabilidad.",
              color: "#0a192f",
              aos: "fade-right",
            },
            {
              size: 6,
              img: "https://cdn-icons-png.flaticon.com/128/6012/6012178.png",
              title: "Investigación",
              desc: "Asesoría metodológica especializada para la elaboración y ejecución de proyectos académicos.",
              color: "#0a192f",
              aos: "fade-left",
            },
          ].map((servicio, index) => (
            <Grid
              size={{ xs: 12, md: servicio.size }}
              key={index}
              data-aos={servicio.aos}
              data-aos-delay={index * 50}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: "260px",
                  p: 4,
                  borderRadius: "28px",
                  bgcolor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "default",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid",
                  borderColor: `${servicio.color}20`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  "&:hover": {
                    borderColor: "transparent",
                    boxShadow: `0 22px 45px ${servicio.color}25, inset 0 0 0 2px ${servicio.color}`,
                    transform: "translateY(-10px) scale(1.02)",
                  },
                  "&:hover .icon-img": {
                    transform: "scale(1.25)",
                  },
                  "&:hover .title-text": {
                    color: servicio.color,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "20px",
                      bgcolor: `${servicio.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      className="icon-img"
                      src={servicio.img}
                      alt={`Icono de ${servicio.title}`}
                      sx={{
                        width: 35,
                        height: 35,
                        objectFit: "contain",
                        transition:
                          "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    className="title-text"
                    sx={{
                      color: "#0A192F",
                      transition: "color 0.4s ease",
                      lineHeight: 1.2,
                    }}
                  >
                    {servicio.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#546E7A",
                    lineHeight: 1.7,
                    fontWeight: 500,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {servicio.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{ bgcolor: "#0A192F", color: "#fff", py: 12, position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.05,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              size={{ xs: 12, md: 4 }}
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{ color: "#42A5F5", fontWeight: "bold", letterSpacing: 2 }}
              >
                Multimedia
              </Typography>
              <Typography variant="h3" fontWeight="900" mb={3} mt={1}>
                Descubre Nuestra Experiencia
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#b0b8c4", lineHeight: 1.8 }}
              >
                Conoce más sobre la vida estudiantil, nuestras modernas
                instalaciones y la comunidad educativa a través de nuestro
                recorrido.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 8 }}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/9",
                  bgcolor: "#000",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/g-9xDGkzrLQ?si=G-Q3053Fju-feg3T"
                  title="IESPP Arco Iris Cusco"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#ffffff", py: 15, position: "relative", zIndex: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 8,
            }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#1976d2", fontWeight: 800, letterSpacing: 2 }}
              >
                Actualidad Institucional
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                sx={{ color: "#0A192F", mt: 1 }}
              >
                Noticias y Eventos
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  height: "4px",
                  bgcolor: "#1976d2",
                  mt: 2,
                  borderRadius: "2px",
                }}
              />
            </Box>
            <Button
              component="a"
              href="https://www.facebook.com/pedagogicoarcoiris/photos?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                color: "#1976d2",
                display: { xs: "none", md: "flex" },
                "&:hover": { bgcolor: "rgba(25,118,210,0.05)" },
              }}
            >
              Visitar nuestra página de Facebook
            </Button>
          </Box>

          <Grid
            container
            spacing={4}
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid
              size={{ xs: 12, md: 7 }}
              component={motion.div}
              variants={fadeInUp}
            >
              <Paper
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: { xs: "450px", md: "550px" },
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
                  transition: "all 0.5s ease",
                  "&:hover .main-img": { transform: "scale(1.05)" },
                  "&:hover .main-overlay": {
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.2) 100%)",
                  },
                  "&:hover .arrow-icon": { transform: "translateX(8px)" },
                }}
              >
                <Box
                  className="main-img"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${Formacion})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.8s ease",
                  }}
                />
                <Box
                  className="main-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0) 100%)",
                    transition: "background 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: 24,
                    bgcolor: "#42A5F5",
                    color: "#0A192F",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    fontWeight: "900",
                    fontSize: "0.8rem",
                    zIndex: 2,
                  }}
                >
                  Académico
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 3, md: 5 },
                    zIndex: 2,
                    color: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{ color: "#42A5F5", fontWeight: 800 }}
                    >
                      15 Mar, 2026
                    </Typography>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#fff",
                        opacity: 0.5,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "#e0e0e0", letterSpacing: 1 }}
                    >
                      5 MIN LECTURA
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    fontWeight="900"
                    sx={{ mb: 2, lineHeight: 1.2 }}
                  >
                    Inicio del Semestre Académico 2026-I
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#e0e0e0",
                      mb: 4,
                      maxWidth: "90%",
                      lineHeight: 1.6,
                    }}
                  >
                    Prepárate para un nuevo ciclo lleno de retos y
                    oportunidades. Conoce las nuevas metodologías y a los
                    docentes que te guiarán este semestre.
                  </Typography>
                  <Button
                    className="arrow-icon"
                    component="a"
                    href="https://www.facebook.com/pedagogicoarcoiris/photos?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: "#fff",
                      p: 0,
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "1.05rem",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        background: "transparent",
                        color: "#42A5F5",
                      },
                    }}
                  >
                    Ver más
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <Paper
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flex: 1,
                  minHeight: "260px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid #f0f0f0",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    transform: "translateY(-5px)",
                    borderColor: "transparent",
                  },
                  "&:hover .sec-img-1": { transform: "scale(1.08)" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "45%" },
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="sec-img-1"
                    sx={{
                      width: "100%",
                      height: "100%",
                      minHeight: { xs: "200px", sm: "100%" },
                      backgroundImage: `url(${Inicial3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.7s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#0A192F",
                      color: "#fff",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                    }}
                  >
                    Eventos
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "55%" },
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: "#fff",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "#1976d2", fontWeight: 800 }}
                  >
                    28 Abr, 2026
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="900"
                    sx={{ color: "#0A192F", mt: 0.5, mb: 1.5, lineHeight: 1.3 }}
                  >
                    Feria de Innovación Pedagógica
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mb: 3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.6,
                    }}
                  >
                    Descubre los proyectos y estrategias de enseñanza
                    desarrolladas por nuestros estudiantes.
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Button
                      component="a"
                      href="https://www.facebook.com/pedagogicoarcoiris/photos?locale=es_LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      sx={{
                        p: 0,
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "#1976d2",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Leer más
                    </Button>
                  </Box>
                </Box>
              </Paper>
              <Paper
                component={motion.div}
                variants={fadeInUp}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flex: 1,
                  minHeight: "260px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid #f0f0f0",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    transform: "translateY(-5px)",
                    borderColor: "transparent",
                  },
                  "&:hover .sec-img-2": { transform: "scale(1.08)" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "45%" },
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="sec-img-2"
                    sx={{
                      width: "100%",
                      height: "100%",
                      minHeight: { xs: "200px", sm: "100%" },
                      backgroundImage: `url(${InicialDisfraz})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.7s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#0A192F",
                      color: "#fff",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                    }}
                  >
                    Seminario
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "55%" },
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: "#fff",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "#1976d2", fontWeight: 800 }}
                  >
                    10 Jul, 2026
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="900"
                    sx={{ color: "#0A192F", mt: 0.5, mb: 1.5, lineHeight: 1.3 }}
                  >
                    Jornada de Voluntariado Comunitario
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mb: 3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.6,
                    }}
                  >
                    Únete a nuestra iniciativa de responsabilidad social y marca
                    la diferencia en las comunidades.
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Button
                      component="a"
                      href="https://www.facebook.com/pedagogicoarcoiris/photos?locale=es_LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      sx={{
                        p: 0,
                        fontWeight: "bold",
                        textTransform: "none",
                        color: "#1976d2",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Leer más
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          position: "relative",
          py: 4,
          bgcolor: "#f5f8fa",
          borderRadius: 0,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          borderLeft: "none",
          borderRight: "none",
          boxShadow:
            "inset 0px 8px 15px -10px rgba(0,0,0,0.15), inset 0px -8px 15px -10px rgba(0,0,0,0.15)",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: "15%",
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background:
              "linear-gradient(to right, #fbfcfd 20%, rgba(251,252,253,0) 100%)",
          },
          "&::after": {
            right: 0,
            background:
              "linear-gradient(to left, #fbfcfd 20%, rgba(251,252,253,0) 100%)",
          },
          "&:hover .marquee-track": { animationPlayState: "paused" },
        }}
      >
        <Box
          className="marquee-track"
          sx={{
            display: "flex",
            animation: `${marquee} 35s linear infinite`,
            width: "max-content",
          }}
        >
          {[...logosAcreditaciones, ...logosAcreditaciones].map(
            (logoSrc, index) => (
              <Box
                key={index}
                sx={{
                  width: "220px",
                  mx: 5,
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  p: 1.5,
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  opacity: 0.9,
                  filter: "grayscale(10%)",
                  "&:hover": {
                    opacity: 1,
                    filter:
                      "grayscale(0%) drop-shadow(0 10px 15px rgba(0,0,0,0.1))",
                    transform: "translateY(-5px) scale(1.08)",
                    bgcolor: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logoSrc}
                  alt={`Logo convenio ${index}`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ),
          )}
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#f4f7fb",
          pt: { xs: 12, md: 18 },
          pb: { xs: 10, md: 15 },
          position: "relative",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(25,118,210,0.05) 0%, rgba(25,118,210,0) 70%)",
            borderRadius: "50%",
            zIndex: -1,
          }}
        />
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="stretch" mb={10}>
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  bgcolor: "rgba(25,118,210,0.1)",
                  borderRadius: "20px",
                  mb: 2,
                  width: "fit-content",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#1976d2",
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    m: 0,
                  }}
                >
                  Excelencia Comprobada
                </Typography>
              </Box>
              <Typography
                variant="h3"
                fontWeight="900"
                sx={{ color: "#0A192F", mb: 4, lineHeight: 1.1 }}
              >
                Convenios y <br />
                <Box
                  component="span"
                  sx={{ color: "#1976d2", position: "relative" }}
                >
                  Acreditaciones
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 6,
                      left: 0,
                      width: "100%",
                      height: "30%",
                      bgcolor: "rgba(25,118,210,0.15)",
                      zIndex: -1,
                      borderRadius: "4px",
                    }}
                  />
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  mb: 5,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  textAlign: "justify",
                }}
              >
                Fortalecemos nuestra calidad educativa a través de alianzas
                estratégicas y el reconocimiento de prestigiosas instituciones
                nacionales e internacionales.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                <Typography
                  variant="h6"
                  fontWeight="800"
                  sx={{ color: "#0A192F", mb: 0 }}
                >
                  Ejes de Nuestra Red de Alianzas
                </Typography>
                {[
                  {
                    icon: <SchoolIcon />,
                    title: "Acuerdos Universitarios",
                    text: "Acuerdos estratégicos para fomentar el desarrollo de carrera y la empleabilidad de nuestros egresados.",
                  },
                  {
                    icon: <GroupsIcon />,
                    title: "Alianzas Sociales",
                    text: "Alianzas con instituciones educativas y sociales para generar experiencias de aprendizaje y servicio comunitario.",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 2.5,
                      p: 3,
                      bgcolor: "#ffffff",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(10,25,47,0.03)",
                      border: "1px solid #eee",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "rgba(25,118,210,0.1)",
                        p: 1.5,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        color: "#1976d2",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="700"
                        color="#0A192F"
                        sx={{ lineHeight: 1.2, mb: 0.5 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#666"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box
                sx={{
                  p: { xs: 4, md: 6 },
                  bgcolor: "#0A192F",
                  borderRadius: "32px",
                  boxShadow: "0 30px 60px rgba(10,25,47,0.2)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    background:
                      "radial-gradient(circle, rgba(25,118,210,0.3) 0%, rgba(10,25,47,0) 70%)",
                    zIndex: 0,
                  }}
                />
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    sx={{ color: "#ffffff", mb: 2 }}
                  >
                    Nuestras Certificaciones
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#a0aec0", mb: 5, lineHeight: 1.7 }}
                  >
                    Nuestro compromiso inquebrantable con la calidad se refleja
                    en las acreditaciones obtenidas, validando la excelencia de
                    nuestros programas.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3.5,
                      mb: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "rgba(25,118,210,0.15)",
                          p: 1,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#42A5F5",
                        }}
                      >
                        <VerifiedIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight="700"
                          color="#ffffff"
                          sx={{ lineHeight: 1.2, mb: 0.5 }}
                        >
                          SINEACE
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#a0aec0"
                          sx={{ lineHeight: 1.6 }}
                        >
                          Acreditación de la carrera de Educación Inicial por el
                          Sistema Nacional de Evaluación.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "rgba(25,118,210,0.15)",
                          p: 1,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#42A5F5",
                        }}
                      >
                        <WorkspacePremiumIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight="700"
                          color="#ffffff"
                          sx={{ lineHeight: 1.2, mb: 0.5 }}
                        >
                          MINEDU
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#a0aec0"
                          sx={{ lineHeight: 1.6 }}
                        >
                          Reconocimiento y respaldo oficial del Ministerio de
                          Educación del Perú.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to="/Documentos_gestion"
                    onClick={() => window.scrollTo(0, 0)}
                    variant="contained"
                    disableElevation
                    sx={{
                      mt: 6,
                      borderRadius: "30px",
                      px: 4,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "1rem",
                      bgcolor: "#1976d2",
                      color: "#fff",
                      width: { xs: "100%", sm: "fit-content" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#1565c0",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(25,118,210,0.4)",
                      },
                    }}
                  >
                    Explorar Documentación Oficial
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
