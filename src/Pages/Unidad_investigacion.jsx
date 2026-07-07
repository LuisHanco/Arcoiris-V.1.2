import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  Chip
} from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import BiotechIcon from "@mui/icons-material/Biotech";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CloseIcon from "@mui/icons-material/Close";
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function UnidadInvestigacion() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const objetivos = [
    "Establecer los lineamientos y procedimientos para la ejecución de proyectos de investigación.",
    "Promover la cultura de investigación entre docentes y estudiantes.",
    "Regular la difusión y publicación de los resultados de investigación.",
    "Garantizar la calidad y pertinencia de los trabajos de investigación.",
  ];

  // 1. Documentos Normativos
  const documentosNormativos = [
    {
      titulo: "Documentos para el Desarrollo de la Investigación",
      url: "https://padlet.com/documentos3/documentos-para-el-desarrollo-de-la-investigacion-e-innovaci-srbymr1v1nwbpweu", 
      tipo: "padlet", 
    },
    {
      titulo: "Reglamento de Investigación Institucional",
      url: "https://drive.google.com/file/d/1Ig7nc9LbsiBJlXGDoxPtBL__hMLtIa_d/preview", 
      tipo: "drive", 
    },
    {
      titulo: "Guía de Tesis y Proyectos de Investigación",
      url: "https://drive.google.com/file/d/1bZ4lFGze5KiyDgztd8CKW4PD2fj-VuIV/preview", 
      tipo: "drive",
    },
  ];

  // 2. Publicaciones y Líneas
  const publicaciones = [
    {
      titulo: "Líneas de Investigación: Educación Inicial",
      url: "https://drive.google.com/file/d/1kg7XPJSPZaLkZm9MFBQZh_9OiV8GGxBj/preview", 
      tipo: "drive",
    },
    {
      titulo: "Líneas de Investigación: Educación Física",
      url: "https://drive.google.com/file/d/1nkPcNgOf1gNEVTBB9GebbmIC-JX9WKT7/preview", 
      tipo: "drive",
    },
    {
      titulo: "Esquema estándar del proyecto de investigación",
      url: "https://drive.google.com/file/d/1anX_TZTuBzPzx9ANb9qasO-bZAMp8Fsg/preview", 
      tipo: "drive",
    },
    {
      titulo: "Formato oficial para el Informe de Tesis",
      url: "https://drive.google.com/file/d/1oU78Oi-Z8GAjVUxHA5of2IwD5-S16xEq/preview", 
      tipo: "drive",
    },
  ];

  // 3. Boletines (Lista Escalable)
  const boletines = [
    {
      titulo: "Boletín Académico Vol. 3",
      fecha: "Julio 2026",
      url: "https://drive.google.com/file/d/TU_ENLACE_AQUI/preview", 
      tipo: "drive",
    },
    {
      titulo: "Boletín Académico Vol. 2",
      fecha: "Mayo 2026",
      url: "https://drive.google.com/file/d/TU_ENLACE_AQUI/preview", 
      tipo: "drive",
    },
    {
      titulo: "Boletín Académico Vol. 1",
      fecha: "Marzo 2026",
      url: "https://drive.google.com/file/d/TU_ENLACE_AQUI/preview", 
      tipo: "drive",
    }
  ];

  const handleDocClick = (doc) => {
    if (doc.tipo === "padlet" || doc.tipo === "enlace") {
      window.open(doc.url, "_blank", "noopener,noreferrer");
    } else {
      setSelectedDoc(doc);
      setOpenModal(true);
    }
  };

  const DocButton = ({ doc }) => (
    <Button
      onClick={() => handleDocClick(doc)}
      variant="outlined"
      fullWidth
      startIcon={
        doc.tipo === "padlet" || doc.tipo === "enlace" ? (
          <OpenInNewRoundedIcon sx={{ color: "#007BFF" }} />
        ) : (
          <PictureAsPdfRoundedIcon sx={{ color: "#D32F2F" }} />
        )
      }
      sx={{
        justifyContent: "flex-start",
        textAlign: "left",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 },
        borderRadius: "12px",
        color: "#333",
        borderColor: "rgba(0, 123, 255, 0.2)",
        bgcolor: "#fff",
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          bgcolor: "#F8FAFC",
          borderColor: "#007BFF",
          color: "#003366",
          transform: "translateY(-3px)",
          boxShadow: "0 10px 20px rgba(0, 123, 255, 0.12)",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        <Typography variant="body1" fontWeight="700" sx={{ lineHeight: 1.2, fontSize: { xs: "0.95rem", md: "1rem" } }}>
          {doc.titulo}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight="500">
          {doc.tipo === "padlet" || doc.tipo === "enlace" ? "Abrir enlace en nueva pestaña" : "Visualizar en pantalla"}
        </Typography>
      </Box>
    </Button>
  );

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", pb: 0 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#003366",
          pt: { xs: 12, md: 18 },
          pb: { xs: 8, md: 14 },
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", top: -100, right: -100, width: { xs: 250, md: 400 }, height: { xs: 250, md: 400 }, bgcolor: "rgba(0, 123, 255, 0.1)", borderRadius: "50%", filter: "blur(60px)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: { xs: 2, md: 4 } }}>
          <Box sx={{ p: 3, bgcolor: "rgba(0, 123, 255, 0.15)", borderRadius: "24px", display: { xs: "none", md: "block" }, backdropFilter: "blur(10px)" }} data-aos="fade-right">
            <BiotechIcon sx={{ fontSize: 90, color: "#4dabf5" }} />
          </Box>
          <Box data-aos="fade-left" sx={{ textAlign: { xs: "center", md: "left" }, width: "100%" }}>
            <Typography variant="overline" sx={{ letterSpacing: { xs: 2, md: 3 }, color: "#80bdff", fontWeight: 900, fontSize: { xs: "0.8rem", md: "0.9rem" } }}>
              DESARROLLO ACADÉMICO
            </Typography>
            <Typography variant="h1" fontWeight={900} sx={{ color: "#fff", textTransform: "uppercase", fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" }, lineHeight: 1.1, mt: 1 }}>
              Unidad de Investigación <br/> e Innovación
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* INTRODUCCIÓN & OBJETIVOS */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 12 }, mb: { xs: 6, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, md: 3 } }}>
              <SchoolRoundedIcon sx={{ fontSize: { xs: 35, md: 40 }, color: "#003366" }} />
              <Typography variant="h3" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
                Propósito
              </Typography>
            </Box>
            <Typography variant="body1" color="#444" sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, lineHeight: 1.8, textAlign: "justify" }}>
              De acuerdo con la misión del Instituto de Educación Superior Pedagógico Privado "Arco Iris" de Cusco, la Unidad de Investigación e Innovación tiene como propósito fundamental promover, organizar, ejecutar y difundir la investigación formativa, aplicada, e innovación que responda a las necesidades educativas de la región y del país.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="100">
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4, md: 5 }, bgcolor: "#F8FAFC", borderRadius: "24px", borderLeft: "8px solid #007BFF", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 2, md: 4 } }}>
                <TrackChangesIcon sx={{ color: "#007BFF", fontSize: { xs: 30, md: 35 } }} />
                <Typography variant="h4" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.4rem", md: "2rem" } }}>
                  Objetivos
                </Typography>
              </Box>
              <List sx={{ p: 0 }}>
                {objetivos.map((obj, i) => (
                  <ListItem key={i} sx={{ px: 0, py: { xs: 1, md: 1.5 }, alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: { xs: 25, md: 35 }, mt: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#007BFF" }} />
                    </ListItemIcon>
                    <ListItemText primary={obj} primaryTypographyProps={{ color: "#444", fontWeight: 500, fontSize: { xs: "0.95rem", md: "1.05rem" } }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CENTRAL DE RECURSOS Y DIFUSIÓN */}
      <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 12 }, borderTop: "1px solid #eaeaea" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 5, md: 8 }} data-aos="fade-up">
            <Typography variant="overline" sx={{ letterSpacing: 2, color: "#007BFF", fontWeight: 900 }}>
              CENTRO DE INFORMACIÓN
            </Typography>
            <Typography variant="h2" fontWeight={900} color="#003366" mt={1} sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
              Recursos y Difusión
            </Typography>
            <Typography variant="body1" color="#666" mt={2} maxWidth="700px" mx="auto" sx={{ px: { xs: 2, md: 0 }, fontSize: { xs: "0.95rem", md: "1rem" } }}>
              Accede a los manuales normativos, explora las líneas de investigación, consulta el registro histórico de tesis y mantente al día con nuestros boletines.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            
            {/* SUBTÍTULO 1 */}
            <Grid size={{ xs: 12 }} sx={{ mt: { xs: 0, md: 2 } }}>
              <Divider textAlign="left" sx={{ "&::before, &::after": { borderColor: "#cbd5e1" } }}>
                <Chip label="I. Documentación Oficial" sx={{ bgcolor: "#e2e8f0", color: "#003366", fontWeight: "bold", fontSize: "0.9rem" }} />
              </Divider>
            </Grid>

            {/* 1. Documentos Normativos */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="0">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", bgcolor: "#ffffff", height: "100%", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", transition: "box-shadow 0.3s", "&:hover": { boxShadow: "0 15px 35px rgba(0, 51, 102, 0.08)" } }}>
                <Box sx={{ mb: { xs: 3, md: 4 }, display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ p: 1.5, bgcolor: "#e0f2fe", borderRadius: "12px" }}>
                    <ArticleRoundedIcon sx={{ fontSize: 35, color: "#0284c7" }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>Documentos Normativos</Typography>
                    <Typography variant="body2" color="#64748b" mt={0.5}>Manuales y guías institucionales.</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: "auto" }}>
                  {documentosNormativos.map((doc, idx) => (
                    <DocButton key={idx} doc={doc} />
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* 2. Líneas y Formatos */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="100">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", bgcolor: "#ffffff", height: "100%", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", transition: "box-shadow 0.3s", "&:hover": { boxShadow: "0 15px 35px rgba(0, 51, 102, 0.08)" } }}>
                <Box sx={{ mb: { xs: 3, md: 4 }, display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ p: 1.5, bgcolor: "#e0e7ff", borderRadius: "12px" }}>
                    <LibraryBooksRoundedIcon sx={{ fontSize: 35, color: "#4f46e5" }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>Líneas y Formatos</Typography>
                    <Typography variant="body2" color="#64748b" mt={0.5}>Esquemas oficiales para proyectos.</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: "auto" }}>
                  {publicaciones.map((pub, idx) => (
                    <DocButton key={idx} doc={pub} />
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* SUBTÍTULO 2 */}
            <Grid size={{ xs: 12 }} sx={{ mt: { xs: 2, md: 4 } }}>
              <Divider textAlign="left" sx={{ "&::before, &::after": { borderColor: "#cbd5e1" } }}>
                <Chip label="II. Producción y Difusión Científica" sx={{ bgcolor: "#e2e8f0", color: "#003366", fontWeight: "bold", fontSize: "0.9rem" }} />
              </Divider>
            </Grid>

            {/* 3. Tesis Sustentadas */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="200">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 }, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", height: "100%",
                  display: "flex", flexDirection: "column", transition: "all 0.3s ease",
                  "&:hover": { transform: { xs: "none", md: "translateY(-6px)" }, boxShadow: "0 15px 35px rgba(0, 51, 102, 0.08)", borderColor: "#007BFF" }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={{ p: 1.5, bgcolor: "#dbeafe", borderRadius: "12px" }}>
                    <WorkspacePremiumRoundedIcon sx={{ fontSize: 35, color: "#2563eb" }} />
                  </Box>
                  <Typography variant="h5" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>Trabajos de Investigacion</Typography>
                </Box>
                <Typography variant="body1" color="#475569" mb={4} sx={{ flexGrow: 1, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                  Explora el registro histórico y la base de datos de los trabajos de investigación y tesis sustentadas con éxito por nuestros egresados.
                </Typography>
                <Button
                  component={Link}
                  to="/tesis-sustentadas" 
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    bgcolor: "#007BFF", color: "#fff", borderRadius: "12px", py: 1.5, fontWeight: "bold", textTransform: "none",
                    boxShadow: "0 8px 16px rgba(0, 123, 255, 0.25)", "&:hover": { bgcolor: "#0056b3" }, mt: "auto"
                  }}
                >
                  Ver Registro de Tesis
                </Button>
              </Paper>
            </Grid>

            {/* 4. Boletines Académicos */}
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" data-aos-delay="300">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 }, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", height: "100%",
                  display: "flex", flexDirection: "column", transition: "all 0.3s ease",
                  "&:hover": { transform: { xs: "none", md: "translateY(-6px)" }, boxShadow: "0 15px 35px rgba(0, 51, 102, 0.08)", borderColor: "#007BFF" }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box sx={{ p: 1.5, bgcolor: "#e0f2fe", borderRadius: "12px" }}>
                    <NewspaperRoundedIcon sx={{ fontSize: 35, color: "#0284c7" }} />
                  </Box>
                  <Typography variant="h5" fontWeight={900} color="#003366" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>Boletines Académicos</Typography>
                </Box>
                <Typography variant="body1" color="#475569" mb={3} sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}>
                  Mantente informado con nuestras últimas publicaciones, artículos científicos y avances académicos.
                </Typography>

                {/* Lista interactiva con Scroll interno amigable en móviles */}
                <Box 
                  sx={{ 
                    display: "flex", flexDirection: "column", gap: 1.5, flexGrow: 1, mt: "auto",
                    maxHeight: { xs: "180px", md: "200px" }, overflowY: "auto", pr: 1,
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-track": { bgcolor: "#f1f5f9", borderRadius: "10px" },
                    "&::-webkit-scrollbar-thumb": { bgcolor: "#cbd5e1", borderRadius: "10px" },
                  }}
                >
                  {boletines.map((boletin, index) => (
                    <Button
                      key={index}
                      onClick={() => handleDocClick(boletin)}
                      variant="outlined"
                      fullWidth
                      startIcon={<PictureAsPdfRoundedIcon sx={{ color: "#D32F2F" }} />}
                      sx={{
                        justifyContent: "flex-start", textAlign: "left", px: 2, py: 1.5, borderRadius: "12px",
                        color: "#333", borderColor: "rgba(0, 123, 255, 0.2)", bgcolor: "#fff", textTransform: "none",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
                        "&:hover": { bgcolor: "#F8FAFC", borderColor: "#007BFF", color: "#003366" }
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2" fontWeight="700" sx={{ lineHeight: 1.2, mb: 0.3 }}>{boletin.titulo}</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight="500">{boletin.fecha}</Typography>
                      </Box>
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* 5. Repositorio Institucional (Banner Final) */}
            <Grid size={{ xs: 12 }} data-aos="fade-up" data-aos-delay="400" sx={{ mt: { xs: 1, md: 2 } }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 }, borderRadius: "24px", bgcolor: "#003366", color: "#fff",
                  display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: { xs: 3, md: 4 },
                  boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)", position: "relative", overflow: "hidden"
                }}
              >
                <Box sx={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", pointerEvents: "none" }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, zIndex: 1, flexDirection: { xs: "column", sm: "row" }, textAlign: { xs: "center", sm: "left" } }}>
                  <Box sx={{ p: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "16px" }}>
                    <StorageRoundedIcon sx={{ fontSize: { xs: 40, md: 50 }, color: "#80bdff" }} />
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight={900} mb={1} sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}>
                      Repositorio Institucional
                    </Typography>
                    <Typography variant="body1" color="#a0b8d1" sx={{ maxWidth: "700px", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Accede a la base de datos oficial donde se almacenan, preservan y difunden las tesis, artículos y proyectos de investigación de nuestra comunidad académica.
                    </Typography>
                  </Box>
                </Box>
                <Button
                  component="a" href="https://repositorio.arcoiris.edu.pe/" target="_blank" rel="noopener noreferrer"
                  variant="contained" size="large" endIcon={<OpenInNewRoundedIcon />}
                  sx={{
                    bgcolor: "#007BFF", color: "#fff", borderRadius: "12px", py: 1.5, px: { xs: 2, md: 4 }, width: { xs: "100%", md: "auto" },
                    fontWeight: "bold", textTransform: "none", whiteSpace: "nowrap",
                    boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)", zIndex: 1, "&:hover": { bgcolor: "#0056b3" },
                  }}
                >
                  Ingresar al Repositorio
                </Button>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* MODAL PARA VISUALIZAR PDF DE GOOGLE DRIVE */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", m: { xs: 2, md: 4 } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: { xs: 2, md: 3 }, bgcolor: "#003366", color: "#ffffff" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            {selectedDoc?.titulo}
          </Typography>
          <IconButton onClick={() => setOpenModal(false)} sx={{ color: "#ffffff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, bgcolor: "#333333" }}>
          {selectedDoc?.url && selectedDoc.url !== "#" ? (
            <iframe src={selectedDoc.url} width="100%" height="100%" style={{ border: "none" }} title={selectedDoc.titulo} allow="autoplay" />
          ) : (
            <Typography color="white" textAlign="center" mt={10}>
              El documento está siendo actualizado y no se encuentra disponible en este momento.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}