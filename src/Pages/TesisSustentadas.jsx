import React, { useEffect } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Nota: He eliminado los import de Navbar/Footer porque deben estar en App.jsx
// Si los necesitas aquí por alguna razón especial, descoméntalos.

export default function TesisSustentadas() {
  const URL_GOOGLE_SHEETS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHK3PwUOe8IPlSun4LLHj3fTMhXYl-fHUp7lFwp7a4zagpFHKzDDk-G3jRhxWRryOsjCfC_eX8KizG/pubhtml?gid=2108725596&single=true&widget=true&headers=false";

  

  return (
    <Box sx={{ bgcolor: "#F4F7F9", minHeight: "100vh", pb: 5 }}>
      
      {/* HEADER INSTITUCIONAL (Estilo Premium) */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 10 },
          bgcolor: "#003366",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", top: -50, right: -50, width: 300, height: 300, bgcolor: "rgba(0, 123, 255, 0.15)", borderRadius: "50%", filter: "blur(60px)" }} />
        
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="overline" sx={{ letterSpacing: 3, color: "#80bdff", fontWeight: 900 }}>
              Oficina de Investigación
            </Typography>
            <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, my: 2 }}>
              Registro Histórico de Tesis
            </Typography>
            <Typography variant="h6" sx={{ color: "#e2e8f0", fontWeight: 400 }}>
              Trabajos sustentados para la obtención del título profesional (Periodo 2024-2026).
            </Typography>
          </motion.div>
        </Container>
      </Box>

{/* CONTENEDOR DE LA TABLA MEJORADO */}
<Container maxWidth="xl" sx={{ mt: -6, position: "relative", zIndex: 2, pb: 8 }}>
  <Paper 
    elevation={0} 
    sx={{ 
      height: '72vh', 
      borderRadius: '32px', 
      overflow: 'hidden', 
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 25px 50px -12px rgba(0, 51, 102, 0.25)',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}
  >
    {/* Barra superior del contenedor para dar sensación de ventana de aplicación */}
    <Box sx={{ 
      px: 3, 
      py: 1.5, 
      bgcolor: '#f8fafc', 
      borderBottom: '1px solid #e2e8f0',
      display: 'flex', 
      alignItems: 'center', 
      gap: 1 
    }}>
      <Box sx={{ display: 'flex', gap: 0.8 }}>
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
      </Box>
      <Typography variant="caption" sx={{ color: '#64748b', ml: 2, fontWeight: 600, letterSpacing: 0.5 }}>
        SISTEMA DE GESTIÓN DE TESIS - IESPP ARCO IRIS
      </Typography>
    </Box>

    {/* Iframe que ocupa el resto del espacio */}
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <iframe
        src={URL_GOOGLE_SHEETS}
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        title="Relación de Tesis Sustentadas"
      />
    </Box>
  </Paper>
</Container>
    </Box>
  );
}