import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function DocumentosGestion() {
  const [openViewer, setOpenViewer] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({ title: "", url: "" });

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleOpenViewer = (title, url) => {
    const previewUrl = url.replace("/view", "/preview");
    setSelectedDoc({ title, url: previewUrl });
    setOpenViewer(true);
  };

  const handleCloseViewer = () => {
    setOpenViewer(false);
    setTimeout(() => setSelectedDoc({ title: "", url: "" }), 300);
  };

  const documentosEstrategicos = [
    {
      title: "Proyecto Educativo Institucional (PEI)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Proyecto Curricular Institucional (PCI)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Plan Anual de Trabajo (PAT)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Reglamento Institucional (RI)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Manual de Procesos Institucionales (MPI)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Cuadro de Asignación de Personal (CAP)",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
  ];

  const reglamentos = [
    {
      title: "Reglamento Institucional General",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
    {
      title: "Reglamento de Investigación",
      url: "https://drive.google.com/file/d/1nMJIoxwkvyWe59jOaNTs5NVGV_AGVqnF/view",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", pb: 12 }}>
      <Box
        sx={{
          bgcolor: "#003366",
          pt: { xs: 15, md: 18 },
          pb: { xs: 12, md: 16 },
          position: "relative",
          overflow: "hidden",
          borderRadius: "0 0 50px 50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container
          maxWidth="md"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/128/7460/7460913.png"
            alt="icono file"
            sx={{ width: { xs: 65, md: 85 }, height: { xs: 65, md: 85 } }}
          />
          <Typography
            variant="h1"
            data-aos="fade-up"
            fontWeight={900}
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              mb: 3,
              mt: 2,
            }}
          >
            Documentos de Gestión
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              color: "#e2e8f0",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
              maxWidth: "600px",
              mx: "auto",
              px: { xs: 2, md: 0 },
            }}
          >
            Accede a la documentación oficial que rige el funcionamiento, la
            planificación y la estructura de nuestra institución.
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ mt: { xs: -5, md: -8 }, position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} data-aos="fade-right" data-aos-delay="200">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: "30px",
                height: "100%",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={900}
                color="#003366"
                mb={2}
                sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
              >
                Documentos de Gestión
              </Typography>
              <Typography variant="body1" color="#555" mb={4} lineHeight={1.6}>
                Estos documentos son fundamentales para la planificación,
                organización, dirección y control de las actividades académicas
                y administrativas del instituto.
              </Typography>

              <List
                sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}
              >
                {documentosEstrategicos.map((doc, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    onClick={() => handleOpenViewer(doc.title, doc.url)}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      bgcolor: "#F4F7F9",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      border: "1px solid transparent",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#ffffff",
                        borderColor: "#007BFF",
                        boxShadow: "0 10px 20px rgba(0, 123, 255, 0.1)",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        pr: 1,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          bgcolor: "rgba(220, 53, 69, 0.1)",
                          color: "#DC3545",
                          borderRadius: "10px",
                          display: "flex",
                          minWidth: "fit-content",
                        }}
                      >
                        <PictureAsPdfRoundedIcon />
                      </Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#333"
                        sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
                      >
                        {doc.title}
                      </Typography>
                    </Box>
                    <IconButton
                      disableRipple
                      sx={{
                        color: "#007BFF",
                        minWidth: "fit-content",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      <OpenInNewIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                    </IconButton>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5} data-aos="fade-left" data-aos-delay="300">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: "30px",
                height: "100%",
                bgcolor: "#003366",
                color: "#fff",
                boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)",
              }}
            >
              <GavelRoundedIcon
                sx={{ fontSize: { xs: 40, md: 50 }, color: "#007BFF", mb: 3 }}
              />
              <Typography
                variant="h4"
                fontWeight={900}
                color="#fff"
                mb={2}
                sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
              >
                Reglamentos Institucionales
              </Typography>
              <Typography
                variant="body1"
                color="rgba(255,255,255,0.8)"
                mb={4}
                lineHeight={1.6}
              >
                Nuestros reglamentos establecen las normas y procedimientos que
                aseguran un ambiente educativo ordenado y justo para toda la
                comunidad.
              </Typography>

              <List
                sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}
              >
                {reglamentos.map((reg, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    onClick={() => handleOpenViewer(reg.title, reg.url)}
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "rgba(0, 123, 255, 0.2)",
                        borderColor: "#007BFF",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        pr: 1,
                      }}
                    >
                      <PictureAsPdfRoundedIcon
                        sx={{ color: "#DC3545", minWidth: "fit-content" }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#fff"
                        sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
                      >
                        {reg.title}
                      </Typography>
                    </Box>
                    <IconButton
                      disableRipple
                      sx={{
                        color: "#fff",
                        minWidth: "fit-content",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      <OpenInNewIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                    </IconButton>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={openViewer}
        onClose={handleCloseViewer}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          },
        }}
      >
        <Fade in={openViewer}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
              height: { xs: "90vh", md: "85vh" },
              bgcolor: "#fff",
              borderRadius: "16px",
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
                bgcolor: "#f8f9fa",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="#333"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  mr: 2,
                }}
              >
                {selectedDoc.title}
              </Typography>
              <IconButton
                onClick={handleCloseViewer}
                size="small"
                sx={{ color: "#555" }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, position: "relative", bgcolor: "#eceff1" }}>
              {selectedDoc.url && (
                <iframe
                  src={selectedDoc.url}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Visor de PDF"
                  allow="autoplay"
                />
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
