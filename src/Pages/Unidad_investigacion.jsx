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
  IconButton
} from "@mui/material";
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

export default function UnidadInvestigacion() {
  // Estados para el Modal
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

  // Documentos Normativos
  const documentosNormativos = [
    {
      titulo: "Documentos para el Desarrollo de la Investigación e Innovación Institucional",
      url: "https://padlet.com/documentos3/documentos-para-el-desarrollo-de-la-investigacion-e-innovaci-srbymr1v1nwbpweu", 
      tipo: "padlet", // Se abrirá en nueva pestaña
    },
    {
      titulo: "Reglamento de Investigación 2026-2031",
      // REEMPLAZA EL ID DEL ENLACE POR TU ARCHIVO DE DRIVE. ¡Asegúrate que termine en /preview!
      url: "https://drive.google.com/file/d/1Ig7nc9LbsiBJlXGDoxPtBL__hMLtIa_d/preview", 
      tipo: "drive", // Se abrirá en el Modal
    },
    {
      titulo: "Guía de Tesis y Proyectos de Investigación",
      url: "https://drive.google.com/file/d/1bZ4lFGze5KiyDgztd8CKW4PD2fj-VuIV/preview", 
      tipo: "drive",
    },
  ];

  // Publicaciones y Líneas
  const publicaciones = [
    {
      titulo: "Líneas de Investigación: Programa de Educación Inicial",
      url: "https://drive.google.com/file/d/1kg7XPJSPZaLkZm9MFBQZh_9OiV8GGxBj/preview", 
      tipo: "drive",
    },
    {
      titulo: "Líneas de Investigación: Programa de Educación Física",
      url: "https://drive.google.com/file/d/1nkPcNgOf1gNEVTBB9GebbmIC-JX9WKT7/preview", 
      tipo: "drive",
    },
    {
      titulo: "Esquema estándar del proyecto de investigación",
      url: "https://drive.google.com/file/d/1anX_TZTuBzPzx9ANb9qasO-bZAMp8Fsg/preview", 
      tipo: "drive",
    },
    {
      titulo: "Formato oficial para Informe de Tesis",
      url: "https://drive.google.com/file/d/1oU78Oi-Z8GAjVUxHA5of2IwD5-S16xEq/preview", 
      tipo: "drive",
    },
  ];

  // Función para manejar el clic en los documentos
  const handleDocClick = (doc) => {
    if (doc.tipo === "padlet") {
      // Abre en una nueva pestaña
      window.open(doc.url, "_blank", "noopener,noreferrer");
    } else {
      // Abre en el Modal
      setSelectedDoc(doc);
      setOpenModal(true);
    }
  };

  // Componente Reutilizable para Botones de Documentos
  const DocButton = ({ doc }) => (
    <Button
      onClick={() => handleDocClick(doc)}
      variant="outlined"
      fullWidth
      startIcon={
        doc.tipo === "padlet" ? (
          <OpenInNewRoundedIcon sx={{ color: "#007BFF" }} />
        ) : (
          <PictureAsPdfRoundedIcon sx={{ color: "#D32F2F" }} />
        )
      }
      sx={{
        justifyContent: "flex-start",
        textAlign: "left",
        px: 3,
        py: 2.5,
        borderRadius: "16px",
        color: "#333",
        borderColor: "rgba(0, 123, 255, 0.2)",
        bgcolor: "#fff",
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          bgcolor: "#F4F7F9",
          borderColor: "#007BFF",
          color: "#003366",
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0, 123, 255, 0.15)",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="body1" fontWeight="700" sx={{ lineHeight: 1.3 }}>
          {doc.titulo}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight="500">
          {doc.tipo === "padlet" ? "Abrir Padlet en nueva pestaña" : "Visualizar documento en pantalla"}
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
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
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
            bgcolor: "rgba(0, 123, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              p: 3,
              bgcolor: "rgba(0, 123, 255, 0.15)",
              borderRadius: "24px",
              display: { xs: "none", sm: "block" },
              backdropFilter: "blur(10px)"
            }}
            data-aos="fade-right"
          >
            <BiotechIcon sx={{ fontSize: 90, color: "#4dabf5" }} />
          </Box>
          <Box data-aos="fade-left">
            <Typography
              variant="overline"
              sx={{ letterSpacing: 3, color: "#80bdff", fontWeight: 900, fontSize: "0.9rem" }}
            >
              DESARROLLO ACADÉMICO
            </Typography>
            <Typography
              variant="h1"
              fontWeight={900}
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontSize: { xs: "2.5rem", md: "4rem" },
                lineHeight: 1.1,
                mt: 1
              }}
            >
              Unidad de Investigación <br/> e Innovación
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* INTRODUCCIÓN & OBJETIVOS */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <SchoolRoundedIcon sx={{ fontSize: 40, color: "#003366" }} />
              <Typography variant="h3" fontWeight={900} color="#003366">
                Propósito
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="#444"
              fontSize="1.15rem"
              lineHeight={1.8}
              textAlign="justify"
            >
              De acuerdo con la misión del Instituto de Educación Superior
              Pedagógico Privado "Arco Iris" de Cusco, la Unidad de
              Investigación e Innovación tiene como propósito fundamental
              promover, organizar, ejecutar y difundir la investigación
              formativa, aplicada, e innovación que responda a las necesidades
              educativas de la región y del país.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="100">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                bgcolor: "#F8FAFC",
                borderRadius: "30px",
                borderLeft: "8px solid #007BFF",
                boxShadow: "0 20px 40px rgba(0,0,0,0.03)"
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <TrackChangesIcon sx={{ color: "#007BFF", fontSize: 35 }} />
                <Typography variant="h4" fontWeight={900} color="#003366">
                  Objetivos del Reglamento
                </Typography>
              </Box>
              <List sx={{ p: 0 }}>
                {objetivos.map((obj, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 1.5, alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#007BFF",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={obj}
                      primaryTypographyProps={{
                        color: "#444",
                        fontWeight: 500,
                        fontSize: "1.05rem"
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* SECCIÓN DE RECURSOS Y REPOSITORIO INSTITUCIONAL */}
      <Box
        sx={{
          bgcolor: "#F8FAFC",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="xl">
          <Box textAlign="center" mb={8} data-aos="fade-up">
            <Typography variant="overline" sx={{ letterSpacing: 2, color: "#007BFF", fontWeight: 900 }}>
              MATERIAL ACADÉMICO
            </Typography>
            <Typography variant="h2" fontWeight={900} color="#003366" mt={1}>
              Recursos de Investigación
            </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center" mb={6}>
            {/* Documentos Normativos */}
            <Grid item xs={12} md={5} lg={5} data-aos="fade-right">
              <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "#ffffff", height: "100%", border: "1px solid #f0f0f0" }}>
                <Box
                  sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box sx={{ p: 1.5, bgcolor: "#e3f2fd", borderRadius: "12px" }}>
                    <ArticleRoundedIcon sx={{ fontSize: 35, color: "#007BFF" }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={900} color="#003366">
                      Documentos Normativos
                    </Typography>
                    <Typography variant="body2" color="#666" mt={0.5}>
                      Manuales y guías para el desarrollo de la investigación.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {documentosNormativos.map((doc, idx) => (
                    <DocButton key={idx} doc={doc} />
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Publicaciones y Líneas */}
            <Grid item xs={12} md={5} lg={5} data-aos="fade-left" data-aos-delay="100">
              <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", bgcolor: "#ffffff", height: "100%", border: "1px solid #f0f0f0" }}>
                <Box
                  sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box sx={{ p: 1.5, bgcolor: "#f3e5f5", borderRadius: "12px" }}>
                    <LibraryBooksRoundedIcon sx={{ fontSize: 35, color: "#9c27b0" }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={900} color="#003366">
                      Líneas y Formatos
                    </Typography>
                    <Typography variant="body2" color="#666" mt={0.5}>
                      Esquemas oficiales para la presentación de tesis.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {publicaciones.map((pub, idx) => (
                    <DocButton key={idx} doc={pub} />
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* BANNER DEL REPOSITORIO INSTITUCIONAL */}
            <Grid item xs={12} md={10} lg={10} data-aos="fade-up" data-aos-delay="200">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: "24px",
                  bgcolor: "#003366",
                  color: "#fff",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 4,
                  boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Elemento de diseño de fondo */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 3, zIndex: 1 }}>
                  <Box sx={{ p: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "16px", display: { xs: "none", sm: "block" } }}>
                    <StorageRoundedIcon sx={{ fontSize: 50, color: "#80bdff" }} />
                  </Box>
                  <Box textAlign={{ xs: "center", md: "left" }}>
                    <Typography variant="h4" fontWeight={900} mb={1}>
                      Repositorio Institucional
                    </Typography>
                    <Typography variant="body1" color="#a0b8d1" sx={{ maxWidth: "600px" }}>
                      Accede a la base de datos oficial donde se almacenan, preservan y difunden las tesis, artículos y proyectos de investigación de nuestra comunidad académica.
                    </Typography>
                  </Box>
                </Box>
                
                <Button
                  component="a"
                  href="https://repositorio.arcoiris.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  endIcon={<OpenInNewRoundedIcon />}
                  sx={{
                    bgcolor: "#007BFF",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    px: 4,
                    fontWeight: "bold",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                    zIndex: 1,
                    "&:hover": {
                      bgcolor: "#0056b3",
                    },
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 2, md: 3 },
            bgcolor: "#003366",
            color: "#ffffff",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            {selectedDoc?.titulo}
          </Typography>
          <IconButton
            onClick={() => setOpenModal(false)}
            sx={{ color: "#ffffff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, bgcolor: "#333333" }}
        >
          {selectedDoc?.url && selectedDoc.url !== "#" ? (
            <iframe
              src={selectedDoc.url}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={selectedDoc.titulo}
              allow="autoplay"
            />
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