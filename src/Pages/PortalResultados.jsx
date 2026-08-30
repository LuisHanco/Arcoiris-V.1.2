import React, { useState, useEffect } from "react";
import {
  Box, Container, Typography, Paper, MenuItem, Select, FormControl, 
  Button, Dialog, DialogTitle, DialogContent, IconButton, Stack
} from "@mui/material";
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AOS from "aos";
import "aos/dist/aos.css";

// =======================================================================
// BASE DE DATOS DE RESULTADOS (SOPORTA MÚLTIPLES PDFs POR EXAMEN)
// =======================================================================
const baseDatosResultados = {
  "simulacro-2026-ii": {
    id: "simulacro-2026-ii",
    titulo: "Examen Simulacro 2026-II",
    fechaPublicacion: "24 de Agosto, 2026",
    descripcion: "Resultados generales del examen de simulacro para los programas de Educación Física y Educación Inicial.",
    estado: "publicado",
    documentos: [
      {
        nombre: "Ver Resultados Generales (Simulacro)",
        driveEnlace: "https://drive.google.com/file/d/TU_ENLACE_DEL_SIMULACRO_AQUI/preview" 
      }
    ]
  },
  "admision-2026-ii": {
    id: "admision-2026-ii",
    titulo: "Examen de Admisión General 2026-II",
    fechaPublicacion: "29 de Agosto, 2026",
    descripcion: "Resultados oficiales (Fase I - Examen de Conocimiento) para los programas de Educación Inicial y Educación Física.",
    estado: "publicado", // Pasó de "pendiente" a "publicado"
    documentos: [
      {
        nombre: "Resultados - Educación Inicial",
        // PEGA AQUÍ EL ENLACE DE DRIVE DEL PDF DE INICIAL (Asegúrate que termine en /preview)
        driveEnlace: "https://drive.google.com/file/d/1osxEpsmU6tzEAEF-RUKB9p-m1jR_9CG3/preview" 
      },
      {
        nombre: "Resultados - Educación Física",
        // PEGA AQUÍ EL ENLACE DE DRIVE DEL PDF DE FÍSICA (Asegúrate que termine en /preview)
        driveEnlace: "https://drive.google.com/file/d/1zCaTHA5o_yWqiIPP_LpMr3FW9hIBpP7h/preview" 
      }
    ]
  }
};

export default function PortalResultados() {
  // Ahora iniciamos por defecto en el examen de admisión, ya que es el más reciente
  const [examenSeleccionado, setExamenSeleccionado] = useState("admision-2026-ii");
  const [pdfActivo, setPdfActivo] = useState(null); // Guardará el documento que se va a mostrar en el modal

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleExamenChange = (event) => {
    setExamenSeleccionado(event.target.value);
  };

  const cerrarModal = () => {
    setPdfActivo(null);
  };

  const examenData = baseDatosResultados[examenSeleccionado];

  return (
    <Box sx={{ bgcolor: "#F4F7FA", minHeight: "100vh", pb: 12 }}>
      
      {/* 1. HERO SECTION */}
      <Box sx={{ 
        bgcolor: "#001F3F", pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 12 }, 
        borderBottom: "6px solid #C59B27", textAlign: "center", position: "relative",
        backgroundImage: "radial-gradient(circle at center, #002b5e 0%, #001F3F 100%)"
      }}>
        <Container maxWidth="md" data-aos="zoom-in">
          <Box sx={{ display: "inline-block", bgcolor: "rgba(197, 155, 39, 0.15)", px: 3, py: 1, borderRadius: "30px", mb: 3 }}>
            <Typography variant="overline" sx={{ color: "#FBBF24", fontWeight: 900, letterSpacing: 2 }}>
              PORTAL INSTITUCIONAL
            </Typography>
          </Box>
          <Typography variant="h2" fontWeight="900" color="#fff" mb={2} sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, textTransform: "uppercase" }}>
            Resultados de Exámenes
          </Typography>
          <Typography variant="h6" color="#CBD5E1" fontWeight="400" sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, px: 2 }}>
            Consulta las actas y resoluciones de calificaciones de manera oficial y transparente.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -6, position: "relative", zIndex: 3 }}>
        
        {/* 2. PANEL DE SELECCIÓN */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", bgcolor: "#fff", border: "1px solid #E2E8F0", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} data-aos="fade-up">
          
          <Typography variant="overline" color="#64748B" fontWeight="900" display="block" mb={1}>
            PASO 1: SELECCIONA LA EVALUACIÓN
          </Typography>
          
          <FormControl fullWidth variant="outlined" sx={{ mb: 5 }}>
            <Select
              value={examenSeleccionado}
              onChange={handleExamenChange}
              displayEmpty
              sx={{ 
                borderRadius: "16px", bgcolor: "#F8FAFC", fontWeight: "900", color: "#003366", 
                fontSize: { xs: "1.1rem", md: "1.2rem" }, "& .MuiSelect-select": { py: 2 } 
              }}
            >
              {Object.values(baseDatosResultados).map((examen) => (
                <MenuItem key={examen.id} value={examen.id} sx={{ fontWeight: "bold", py: 1.5 }}>
                  {examen.titulo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* ÁREA DE INFORMACIÓN Y BOTONES DE DOCUMENTOS */}
          <Box sx={{ textAlign: "center", p: { xs: 3, md: 5 }, bgcolor: examenData.estado === "publicado" ? "#F8FAFC" : "#FFFBEB", borderRadius: "20px", border: "1px dashed", borderColor: examenData.estado === "publicado" ? "#CBD5E1" : "#F59E0B" }}>
            <AssignmentTurnedInRoundedIcon sx={{ fontSize: 60, color: examenData.estado === "publicado" ? "#10B981" : "#F59E0B", mb: 2 }} />
            
            <Typography variant="h5" fontWeight="900" color="#0F172A" mb={1}>
              {examenData.titulo}
            </Typography>
            
            <Typography variant="body1" color="#64748B" mb={1}>
              {examenData.descripcion}
            </Typography>
            
            <Typography variant="subtitle2" color={examenData.estado === "publicado" ? "#003366" : "#B45309"} fontWeight="bold" mb={4}>
              Fecha de publicación: {examenData.fechaPublicacion}
            </Typography>

            {examenData.estado === "publicado" ? (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
                {/* Aquí renderizamos dinámicamente todos los documentos de este examen */}
                {examenData.documentos.map((doc, index) => (
                  <Button 
                    key={index}
                    onClick={() => setPdfActivo(doc)}
                    variant="contained" 
                    size="large"
                    startIcon={<PictureAsPdfRoundedIcon />}
                    sx={{ 
                      borderRadius: "16px", bgcolor: "#DC2626", fontWeight: "900", px: 4, py: 1.5, textTransform: "none", fontSize: "1rem",
                      boxShadow: "0 10px 20px rgba(220, 38, 38, 0.25)", "&:hover": { bgcolor: "#B91C1C", transform: "translateY(-3px)" }, transition: "all 0.3s"
                    }}
                  >
                    {doc.nombre}
                  </Button>
                ))}
              </Stack>
            ) : (
              <Button 
                disabled
                variant="contained" 
                size="large"
                sx={{ borderRadius: "16px", fontWeight: "900", px: 4, py: 1.5, textTransform: "none", fontSize: "1.1rem" }}
              >
                Resultados No Disponibles
              </Button>
            )}
          </Box>
        </Paper>

      </Container>

      {/* 3. MODAL DEL VISOR DE PDF (GOOGLE DRIVE) */}
      <Dialog 
        open={Boolean(pdfActivo)} 
        onClose={cerrarModal} 
        maxWidth="lg" 
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", overflow: "hidden", height: "90vh", bgcolor: "#f1f1f1" } }}
      >
        <DialogTitle sx={{ bgcolor: "#001F3F", color: "#fff", p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center" gap={1} sx={{ pr: 2 }}>
            <PictureAsPdfRoundedIcon sx={{ color: "#FCA5A5" }} /> 
            {pdfActivo ? pdfActivo.nombre : "Documento Oficial"}
          </Typography>
          <IconButton onClick={cerrarModal} sx={{ color: "#fff", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {pdfActivo && pdfActivo.driveEnlace ? (
            <iframe 
              src={pdfActivo.driveEnlace} 
              title={pdfActivo.nombre}
              width="100%" 
              height="100%" 
              style={{ border: "none" }}
              allow="autoplay"
            />
          ) : (
            <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", p: 4, textAlign: "center" }}>
              <Typography color="error" fontWeight="bold">
                Error: El enlace del documento de Google Drive no está configurado correctamente.
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>

    </Box>
  );
}