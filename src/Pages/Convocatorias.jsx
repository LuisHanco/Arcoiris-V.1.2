import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos generales
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';

// Íconos por categoría
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';

export default function Convocatorias() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Lista general del portal actualizada con la nueva convocatoria 2026-II
  const portalConvocatorias = [
    {
      id: "docentes-2026-ii",
      titulo: "Convocatoria Docente 2026-II",
      descripcion: "El Instituto Arco Iris convoca a Profesores o Licenciados en Educación con Maestría para las especialidades de Educación Física y Educación Inicial.",
      categoria: "Docencia",
      estado: "Abierta",
      ruta: "/convocatorias/docentes-2026-ii"
    },
    {
      id: "docentes-2026-i",
      titulo: "Convocatoria Docente 2026-I",
      descripcion: "Proceso de selección para Profesores o Licenciados en Educación con Maestría en diversas especialidades para el semestre 2026-I.",
      categoria: "Docencia",
      estado: "Cerrada",
      ruta: "#"
    },
    {
      id: "admin-2026",
      titulo: "Personal Administrativo y de Soporte",
      descripcion: "Convocatoria para asistentes administrativos, secretariado y soporte técnico de la institución.",
      categoria: "Administrativo",
      estado: "Próximamente",
      ruta: "#"
    },
    {
      id: "mantenimiento-2025",
      titulo: "Personal de Mantenimiento",
      descripcion: "Selección de personal para mantenimiento general e infraestructura.",
      categoria: "Servicios Generales",
      estado: "Cerrada",
      ruta: "#"
    }
  ];

  // Función para obtener el ícono según la categoría
  const getCategoryIcon = (categoria) => {
    switch (categoria) {
      case "Docencia": return <SchoolRoundedIcon />;
      case "Administrativo": return <ComputerRoundedIcon />;
      case "Servicios Generales": return <BuildRoundedIcon />;
      default: return <SchoolRoundedIcon />;
    }
  };

  // Función para obtener los estilos según el estado de la convocatoria
  const getStatusStyles = (estado) => {
    switch (estado) {
      case "Abierta":
        return {
          color: "#10B981", // Verde esmeralda
          bg: "#ECFDF5",
          icon: <EventAvailableRoundedIcon fontSize="small" />,
          cardOpacity: 1,
          borderTop: "#10B981"
        };
      case "Próximamente":
        return {
          color: "#F59E0B", // Naranja/Ambar
          bg: "#FFFBEB",
          icon: <UpdateRoundedIcon fontSize="small" />,
          cardOpacity: 0.9,
          borderTop: "#F59E0B"
        };
      case "Cerrada":
      default:
        return {
          color: "#94A3B8", // Gris
          bg: "#F8FAFC",
          icon: <BlockRoundedIcon fontSize="small" />,
          cardOpacity: 0.65, // Efecto visual de inactivo
          borderTop: "#CBD5E1"
        };
    }
  };

  return (
    <Box sx={{ bgcolor: "#F4F7FA", pb: 12, minHeight: "100vh" }}>
      
      {/* Hero del Portal */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "45vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#001F3F", // Azul corporativo más oscuro
          mb: { xs: 6, md: 10 },
          borderBottom: "6px solid #C59B27", // Detalle dorado institucional
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay"
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Box sx={{ display: "inline-block", bgcolor: "rgba(197, 155, 39, 0.15)", px: 3, py: 1, borderRadius: "30px", mb: 3 }}>
            <Typography variant="overline" sx={{ color: "#FBBF24", fontWeight: 900, letterSpacing: 2 }}>
              TRABAJA CON NOSOTROS
            </Typography>
          </Box>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#ffffff", textTransform: "uppercase", mb: 2, fontSize: { xs: "2.2rem", md: "3.75rem" } }}>
            Convocatorias
          </Typography>
          <Typography variant="h6" sx={{ color: "#CBD5E1", maxWidth: "600px", mx: "auto", fontWeight: 400, fontSize: { xs: "1rem", md: "1.2rem" } }}>
            Encuentra las oportunidades laborales disponibles en el I.E.S.P.P. Arco Iris para áreas académicas y administrativas.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Convocatorias del Portal */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {portalConvocatorias.map((conv, index) => {
            const statusStyle = getStatusStyles(conv.estado);

            return (
              <Grid item xs={12} sm={6} md={4} key={conv.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    opacity: statusStyle.cardOpacity,
                    bgcolor: "#ffffff",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: conv.estado === "Abierta" ? "translateY(-8px)" : "none",
                      boxShadow: conv.estado === "Abierta" ? "0 20px 40px rgba(0, 51, 102, 0.12)" : "0 10px 30px rgba(0,0,0,0.04)",
                      borderColor: conv.estado === "Abierta" ? "#007BFF" : "#E2E8F0"
                    }
                  }}
                >
                  {/* Línea de color superior según estado */}
                  <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", bgcolor: statusStyle.borderTop }} />

                  {/* Cabecera de la tarjeta (Categoría y Estado) */}
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", bgcolor: "#F1F5F9", px: 1.5, py: 0.8, borderRadius: "10px" }}>
                      {getCategoryIcon(conv.categoria)}
                      <Typography variant="caption" fontWeight="bold" sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}>
                        {conv.categoria}
                      </Typography>
                    </Box>
                    
                    <Chip 
                      icon={statusStyle.icon}
                      label={conv.estado} 
                      size="small"
                      sx={{ 
                        fontWeight: "900", 
                        bgcolor: statusStyle.bg, 
                        color: statusStyle.color,
                        border: `1px solid ${statusStyle.color}40`, // Color con transparencia
                        "& .MuiChip-icon": { color: statusStyle.color }
                      }}
                    />
                  </Box>

                  {/* Cuerpo de la tarjeta */}
                  <Typography variant="h5" fontWeight="900" color="#0F172A" mb={2} lineHeight={1.3}>
                    {conv.titulo}
                  </Typography>
                  <Typography variant="body2" color="#475569" mb={4} sx={{ flexGrow: 1, lineHeight: 1.6 }}>
                    {conv.descripcion}
                  </Typography>

                  {/* Botón de acción */}
                  <Button
                    component={conv.estado === "Abierta" ? Link : "button"}
                    to={conv.estado === "Abierta" ? conv.ruta : undefined}
                    disabled={conv.estado !== "Abierta"}
                    variant={conv.estado === "Abierta" ? "contained" : "outlined"}
                    endIcon={<ArrowForwardIcon />}
                    fullWidth
                    sx={{ 
                      borderRadius: "14px", 
                      textTransform: "none", 
                      fontWeight: "bold",
                      py: 1.5,
                      fontSize: "1rem",
                      bgcolor: conv.estado === "Abierta" ? "#003366" : "transparent",
                      color: conv.estado === "Abierta" ? "#fff" : "#94A3B8",
                      borderColor: "#E2E8F0",
                      "&:hover": {
                        bgcolor: conv.estado === "Abierta" ? "#001F3F" : "transparent"
                      }
                    }}
                  >
                    {conv.estado === "Abierta" ? "Ver Detalles y Postular" : conv.estado === "Próximamente" ? "Muy Pronto" : "Convocatoria Cerrada"}
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}