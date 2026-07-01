import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom"; // <-- Importación necesaria para las rutas

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import logo from "../assets/logo_arcoiris_blanco.png";

export default function Footer() {
  const footerColor = "#003366";

  const handleWhatsAppClick = () => {
    const numero = "51966425975";
    const mensaje = "Hola, tengo una consulta";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: footerColor,
        color: "#fff",
        pt: { xs: 8, md: 6 },
        pb: { xs: 12, md: 4 },
        paddingX: { xs: 3, md: 0 },
        position: "relative",
        zIndex: 2,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "30px", md: "50px" },
          transform: "translateY(-99%)",
          lineHeight: 0,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            transform: "rotateX(180deg) scaleX(-1)",
          }}
        >
          <path
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            fill={footerColor}
          ></path>
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} mb={8}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                gap: 1,
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo Arco Iris"
                sx={{
                  height: 160,
                  width: "auto",
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              textAlign="justify"
              sx={{
                color: "#F0F2F5",
                mb: 3,
                lineHeight: 1.8,
                pr: { xs: 0, md: 2 },
              }}
            >
              Formando educadores líderes con vocación de servicio, pensamiento
              crítico y valores éticos para el desarrollo de la región Cusco y
              el Perú.
            </Typography>
            <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
              RUC: 20564481018
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 2 }}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Institucional
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: { xs: 2, sm: 0 },
              }}
            >
              {[
                // { label: "Nosotros", path: "/nosotros" },
                // { label: "Autoridades", path: "/autoridades" },
                // { label: "Docentes", path: "/docentes" },
                { label: "Transparencia", path: "/transparencia" },
                // { label: "Reclamaciones", path: "/reclamaciones" },
                { label: "Convocatorias", path: "/convocatorias" },
                { label: "Laboratorio de Cómputo", path: "/laboratorio" }
              ].map((item) => (
                <Typography
                  key={item.label}
                  component={Link} // <-- Convierte el Typography en un Link de React Router
                  to={item.path}   // <-- Indica la ruta destino
                  variant="body2"
                  sx={{
                    color: "#F0F2F5",
                    mb: { xs: 0, sm: 1.5 },
                    cursor: "pointer",
                    textDecoration: "none", // <-- Evita el subrayado predeterminado de los enlaces
                    transition: "color 0.3s ease",
                    display: "block",
                    "&:hover": {
                      color: "#ffffff",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ textAlign: { xs: "left", sm: "left" } }}
          >
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Contacto
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 2,
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: "flex-start",
              }}
            >
              <LocationOnIcon
                sx={{ color: "#007BFF", fontSize: 20, flexShrink: 0 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#F0F2F5", textAlign: "left" }}
              >
                Urb. Tenería IV, Fracción II - Paradero Enaco, San Sebastián, Cusco.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 2,
                justifyContent: { xs: "left", sm: "flex-start" },
                alignItems: "center",
              }}
            >
              <PhoneIcon sx={{ color: "#007BFF", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
                +51 966425975
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 2,
                justifyContent: { xs: "left", sm: "flex-start" },
                alignItems: "center",
              }}
            >
              <EmailIcon sx={{ color: "#007BFF", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
                informes@arcoiris.edu.pe
              </Typography>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ textAlign: { xs: "left", md: "left" } }}
          >
            <Typography variant="h6" fontWeight="bold" mb={3}>
              ¿Tienes dudas?
            </Typography>
            <Typography variant="body2" sx={{ color: "#F0F2F5", mb: 3 }}>
              Nuestro equipo está listo para ayudarte con tu proceso.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={handleWhatsAppClick}
              sx={{
                bgcolor: "#007BFF",
                color: "#fff",
                py: 1.5,
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { bgcolor: "#0056B3" },
              }}
            >
              Contáctanos Ahora
            </Button>
            <Box
              sx={{
                pt: 6,
                width: "236px",
                height: "54px",
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mx: { xs: "auto", md: 0 },
              }}
            >
              <IconButton
                component="a"
                href="https://www.facebook.com/pedagogicoarcoiris/?locale=es_LA"
                target="_blank"
                sx={{
                  width: "46px",
                  height: "46px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <FacebookIcon sx={{ fontSize: 26 }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/51966425975"
                target="_blank"
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:informes@arcoiris.edu.pe"
                sx={{
                  width: "46px",
                  height: "46px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <EmailIcon sx={{ fontSize: 26 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            pr: { xs: 0, sm: "240px", md: 0 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#F0F2F5", mb: { xs: 2, sm: 0 } }}
          >
            © 2026 IESPP Arco Iris. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}