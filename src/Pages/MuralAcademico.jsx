import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Dialog,
  DialogContent,
  IconButton,
  Pagination
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import SearchIcon from "@mui/icons-material/Search";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";

export default function MuralAcademico() {
  // 1. ESTADOS DE LA INTERFAZ
  const [tabActual, setTabActual] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [visorPdf, setVisorPdf] = useState({ open: false, title: "", url: "" });
  
  // Estado para la paginación de tarjetas
  const [pagina, setPagina] = useState(1);
  
  // --- AQUÍ ESTÁ EL CAMBIO: Ahora muestra 10 tarjetas por página ---
  const tarjetasPorPagina = 10; 

  const categorias = ["Todos", "Estudiantes", "Docentes", "Institucional"];

  // 2. BASE DE DATOS
  const publicaciones = [
    {
      id: 5,
      categoria: "Todos",
      titulo: "EXPERIENCIAS PEDAGÓGICAS VALIDADAS COMO BUENAS PRÁCTICAS DEL IESP “ARCO IRIS” – 2026 - 2027",
      descripcion: "Resultados, logros y dificultades del Taller de Socialización con Docentes Formadores sobre la implementación de buenas prácticas pedagógicas en el semestre 2026-I.",
      fecha: "03 Jul 2026",
      url: "https://drive.google.com/file/d/1eJ16dec6Isw77B6M65DmSF4wd6fugkG9/preview", 
    },
    // {
    //   id: 1,
    //   categoria: "Estudiantes",
    //   titulo: "Cronograma de Exámenes Finales 2026-I",
    //   descripcion: "Fechas oficiales y lineamientos para la rendición de exámenes finales de todos los programas de estudio. Revisar el anexo para ver la distribución de aulas.",
    //   fecha: "03 Jul 2026",
    //   url: "https://drive.google.com/file/d/19WakXTCEXDvuuW8yLW4LpIYHzV5dogkQ/preview", 
    // },
    // {
    //   id: 2,
    //   categoria: "Docentes",
    //   titulo: "Directiva de Evaluación Pedagógica",
    //   descripcion: "Nuevas normativas para el registro de calificaciones en el sistema académico institucional correspondiente al presente semestre.",
    //   fecha: "01 Jul 2026",
    //   url: "https://drive.google.com/file/d/1x6FpgImBjNfQ5P3AYNuPw-VzZ_UywW7N/preview",
    // },
    // {
    //   id: 3,
    //   categoria: "Institucional",
    //   titulo: "Resolución Directoral N° 045-2026",
    //   descripcion: "Declaratoria de feriado largo por festividades patrias y suspensión de labores administrativas.",
    //   fecha: "28 Jun 2026",
    //   url: "https://drive.google.com/file/d/1vZzqMVxRGdG6-JeahNa07IbK--xY-slh/preview",
    // },
    // {
    //   id: 4,
    //   categoria: "Estudiantes",
    //   titulo: "Lista de Aptos para Prácticas Pre-Profesionales",
    //   descripcion: "Relación de estudiantes del VIII ciclo habilitados para el inicio de sus prácticas en instituciones aliadas.",
    //   fecha: "25 Jun 2026",
    //   url: "https://drive.google.com/file/d/19WakXTCEXDvuuW8yLW4LpIYHzV5dogkQ/preview",
    // }
  ];

  // 3. LÓGICA DE FILTRADO
  const publicacionesFiltradas = useMemo(() => {
    return publicaciones.filter((pub) => {
      const coincideCategoria = tabActual === 0 || pub.categoria === categorias[tabActual];
      const coincideBusqueda = pub.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
                               pub.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }, [tabActual, busqueda, publicaciones]);

  // 4. LÓGICA DE PAGINACIÓN
  const totalPaginas = Math.ceil(publicacionesFiltradas.length / tarjetasPorPagina);
  const datosPaginados = publicacionesFiltradas.slice(
    (pagina - 1) * tarjetasPorPagina,
    pagina * tarjetasPorPagina
  );

  // MANEJADORES DE EVENTOS
  const handleCambioTab = (e, newValue) => {
    setTabActual(newValue);
    setPagina(1); 
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPagina(1); 
  };

  const abrirDocumento = (titulo, url) => setVisorPdf({ open: true, title: titulo, url });
  const cerrarDocumento = () => setVisorPdf({ ...visorPdf, open: false });

  const obtenerIconoCategoria = (categoria) => {
    switch (categoria) {
      case "Estudiantes": return <SchoolIcon fontSize="small" />;
      case "Docentes": return <WorkIcon fontSize="small" />;
      case "Institucional": return <AccountBalanceIcon fontSize="small" />;
      default: return <EventNoteIcon fontSize="small" />;
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box sx={{ bgcolor: "#F4F7F9", minHeight: "100vh", pb: 10 }}>
      
      {/* HEADER HERO */}
      <Box
        sx={{
          bgcolor: "#003366",
          color: "#fff",
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 10 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: "0 0 20px 20px", md: "0 0 40px 40px" },
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: "#80bdff", fontWeight: 900 }}>
            Unidad Académica
          </Typography>
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, my: 2 }}>
            Mural de Comunicados
          </Typography>
          <Typography variant="h6" sx={{ color: "#e2e8f0", fontWeight: 400 }}>
            Plataforma oficial de publicación de directivas, cronogramas y avisos.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: -4, position: "relative", zIndex: 3 }}>
        
        {/* BARRA DE HERRAMIENTAS */}
        <Paper 
          elevation={4} 
          sx={{ 
            p: { xs: 2, md: 3 }, 
            borderRadius: "24px", 
            mb: 5,
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            alignItems: "center",
            gap: 2
          }}
        >
          <Tabs 
            value={tabActual} 
            onChange={handleCambioTab}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": { fontWeight: "bold", textTransform: "none", fontSize: "1rem", borderRadius: "12px" },
              "& .Mui-selected": { color: "#003366" },
              "& .MuiTabs-indicator": { bgcolor: "#007BFF", height: "4px", borderRadius: "4px" }
            }}
          >
            {categorias.map((cat, index) => (
              <Tab key={index} label={cat} />
            ))}
          </Tabs>

          <TextField
            variant="outlined"
            placeholder="Buscar documento..."
            value={busqueda}
            onChange={handleBusqueda}
            sx={{ width: { xs: "100%", md: "350px" }, "& .MuiOutlinedInput-root": { borderRadius: "50px", bgcolor: "#f8fafc" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        {/* GRILLA DE DOCUMENTOS */}
        {datosPaginados.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <DescriptionIcon sx={{ fontSize: 80, color: "#cbd5e1", mb: 2 }} />
            <Typography variant="h5" color="#64748b" fontWeight="bold">
              No se encontraron documentos
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Intenta con otra palabra clave o cambia de pestaña.
            </Typography>
          </Box>
        ) : (
          <>
            <Grid container spacing={4}>
              {datosPaginados.map((pub, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={pub.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0, 51, 102, 0.1)",
                        borderColor: "#007BFF"
                      }
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                      <Chip 
                        icon={obtenerIconoCategoria(pub.categoria)}
                        label={pub.categoria} 
                        size="small"
                        sx={{ 
                          fontWeight: "bold",
                          bgcolor: pub.categoria === "Estudiantes" ? "#e3f2fd" : pub.categoria === "Docentes" ? "#fce4ec" : "#fff3e0",
                          color: pub.categoria === "Estudiantes" ? "#1565c0" : pub.categoria === "Docentes" ? "#c2185b" : "#ef6c00" 
                        }} 
                      />
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#666" }}>
                        <EventNoteIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption" fontWeight="bold">{pub.fecha}</Typography>
                      </Box>
                    </Box>

                    <Typography 
                      variant="h5" 
                      fontWeight="800" 
                      color="#003366" 
                      sx={{ 
                        mb: 1.5, 
                        lineHeight: 1.3,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}
                    >
                      {pub.titulo}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="#555" 
                      sx={{ 
                        mb: 3, 
                        flexGrow: 1,
                        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}
                    >
                      {pub.descripcion}
                    </Typography>

                    <Button 
                      variant="outlined" 
                      fullWidth 
                      onClick={() => abrirDocumento(pub.titulo, pub.url)}
                      startIcon={<PictureAsPdfIcon />}
                      sx={{ 
                        borderRadius: "12px", 
                        py: 1, 
                        fontWeight: "bold",
                        borderWidth: "2px",
                        "&:hover": { borderWidth: "2px" }
                      }}
                    >
                      Leer Documento
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* CONTROLES DE PAGINACIÓN */}
            {totalPaginas > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Pagination 
                  count={totalPaginas} 
                  page={pagina} 
                  onChange={(e, value) => setPagina(value)} 
                  color="primary" 
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root": { fontWeight: "bold" }
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Container>

      {/* MODAL / VISOR DE PDF INTEGRADO */}
      <Dialog
        open={visorPdf.open}
        onClose={cerrarDocumento}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: "24px", m: { xs: 2, md: 4 } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: { xs: 2, md: 3 }, bgcolor: "#003366", color: "#fff" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PictureAsPdfIcon sx={{ color: "#ff4c4c" }} />
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              {visorPdf.title}
            </Typography>
          </Box>
          <IconButton onClick={cerrarDocumento} sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: { xs: "70vh", md: "85vh" }, bgcolor: "#e0e0e0" }}>
          {visorPdf.url && (
            <iframe
              src={visorPdf.url}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={visorPdf.title}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}