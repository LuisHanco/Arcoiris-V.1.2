import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Convocatorias() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Lista general del portal (puedes agregar administrativos, limpieza, etc.)
  const portalConvocatorias = [
    {
      id: "docentes-2026",
      titulo: "Convocatoria Docente 2026-I",
      descripcion: "Proceso de selección para Profesores o Licenciados en Educación con Maestría en diversas especialidades para el semestre 2026-I.",
      categoria: "Docencia",
      estado: "Abierta",
      ruta: "/convocatorias/docentes-2026"
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

  return (
    <Box sx={{ bgcolor: "#F0F2F5", pb: 10 }}>
      {/* Hero del Portal */}
      <Box
        sx={{
          position: "relative",
          height: "45vh",
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          mb: 8,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#80bdff", fontWeight: 900, letterSpacing: 2 }}>
            TRABAJA CON NOSOTROS
          </Typography>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#ffffff", textTransform: "uppercase", mb: 2 }}>
            Portal de Convocatorias
          </Typography>
          <Typography variant="h6" sx={{ color: "#F0F2F5", maxWidth: "600px", mx: "auto", fontWeight: 400 }}>
            Encuentra las oportunidades laborales disponibles en el I.E.S.P.P. Arco Iris para áreas académicas y administrativas.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Convocatorias del Portal */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {portalConvocatorias.map((conv) => (
            <Grid item xs={12} md={4} key={conv.id} data-aos="fade-up">
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `5px solid ${conv.estado === "Abierta" ? "#007BFF" : conv.estado === "Próximamente" ? "#f57c00" : "#9e9e9e"}`,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Chip icon={<WorkIcon />} label={conv.categoria} size="small" variant="outlined" />
                  <Chip 
                    label={conv.estado} 
                    color={conv.estado === "Abierta" ? "success" : conv.estado === "Próximamente" ? "warning" : "default"} 
                    size="small" 
                  />
                </Box>
                <Typography variant="h5" fontWeight="bold" color="#003366" mb={2}>
                  {conv.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3} sx={{ flexGrow: 1 }}>
                  {conv.descripcion}
                </Typography>
                <Button
                  component={conv.estado === "Abierta" ? Link : "button"}
                  to={conv.estado === "Abierta" ? conv.ruta : undefined}
                  disabled={conv.estado !== "Abierta"}
                  variant={conv.estado === "Abierta" ? "contained" : "outlined"}
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  sx={{ borderRadius: "8px", textTransform: "none", fontWeight: "bold" }}
                >
                  {conv.estado === "Abierta" ? "Ver Detalles y Postular" : "No disponible"}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}