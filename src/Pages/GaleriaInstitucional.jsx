import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Tabs,
  Tab,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
  useMediaQuery,
  Tooltip,
  Button
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from '@mui/icons-material/Collections';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import CircularProgress from '@mui/material/CircularProgress';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import img1 from "../assets/Imagenes/Fachada1.webp";

export default function GaleriaInstitucional() {
  const [categoriaActual, setCategoriaActual] = useState(0);
  const [anioActual, setAnioActual] = useState("TODOS");
  
  // Controles de los modales (Ventanas emergentes)
  const [albumSeleccionado, setAlbumSeleccionado] = useState(null);
  const [fotoExpandida, setFotoExpandida] = useState(null);
  const [descargando, setDescargando] = useState(false);

  const categorias = ["Todos", "Institucional", "Académico", "Deportivo", "Cultural"];
  const anios = ["TODOS", "2026", "2025", "2024"];

  const theme = useTheme();
  const esCelular = useMediaQuery(theme.breakpoints.down("sm"));
  const esTablet = useMediaQuery(theme.breakpoints.down("md"));
  const columnasMosaico = esCelular ? 1 : esTablet ? 2 : 3;

  // BASE DE DATOS DE MUESTRA
  const albumes = [
    {
      id: 1,
      titulo: "Taller de Prácticas Pedagógicas",
      categoria: "Académico",
      fecha: "03 Jul 2026",
      anio: "2026",
      portada: img1,
      fotos: [
        img1,
        img1,
        img1,
        img1,
        img1
      ]
    },
    {
      id: 2,
      titulo: "Ceremonia de Graduación 2025",
      categoria: "Institucional",
      fecha: "15 Dic 2025",
      anio: "2025",
      portada: "https://images.unsplash.com/photo-1523580494112-071d31174c86?q=80&w=800&auto=format&fit=crop",
      fotos: [
        "https://images.unsplash.com/photo-1523580494112-071d31174c86?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      titulo: "Olimpiadas Inter-Especialidades",
      categoria: "Deportivo",
      fecha: "20 May 2026",
      anio: "2026",
      portada: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
      fotos: [
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518605368461-1e1e38ce8ba9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      titulo: "Festival Folclórico Cusqueño",
      categoria: "Cultural",
      fecha: "12 Oct 2025",
      anio: "2025",
      portada: "https://images.unsplash.com/photo-1533174000255-a63b0636f4c5?q=80&w=800&auto=format&fit=crop",
      fotos: [
        "https://images.unsplash.com/photo-1533174000255-a63b0636f4c5?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ];

  const albumesFiltrados = useMemo(() => {
    return albumes.filter((album) => {
      const coincideCategoria = categoriaActual === 0 || album.categoria === categorias[categoriaActual];
      const coincideAnio = anioActual === "TODOS" || album.anio === anioActual;
      return coincideCategoria && coincideAnio;
    });
  }, [categoriaActual, anioActual]);

  const descargarImagen = async (url) => {
    setDescargando(true);
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error de red");
      const blob = await respuesta.blob();
      const urlBlob = window.URL.createObjectURL(blob);
      const enlace = document.createElement("a");
      enlace.href = urlBlob;
      enlace.download = `IESPP_ArcoIris_${new Date().getTime()}.jpg`; 
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
      window.URL.revokeObjectURL(urlBlob);
    } catch (error) {
      window.open(url, "_blank");
    } finally {
      setDescargando(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box sx={{ bgcolor: "#F0F4F8", minHeight: "100vh", pb: 10 }}>
      
      {/* HERO SECTION PREMIUM */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 14, md: 18 },
          pb: { xs: 10, md: 14 },
          textAlign: "center",
          overflow: "hidden",
          borderRadius: { xs: "0 0 20px 20px", md: "0 0 50px 50px" },
          boxShadow: "0 15px 40px rgba(0,51,102,0.2)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0, 31, 63, 0.95) 0%, rgba(0, 80, 158, 0.85) 100%), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, color: "#fff" }}>
          <SchoolRoundedIcon sx={{ fontSize: 60, color: "#60A5FA", mb: 2, filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.3))" }} />
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: "2.2rem", md: "4rem" }, letterSpacing: "-1px", mb: 2, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            Galería Institucional
          </Typography>
          <Typography variant="h6" sx={{ color: "#E2E8F0", fontWeight: 400, fontSize: { xs: "1rem", md: "1.3rem" }, maxWidth: "700px", mx: "auto" }}>
            Un recorrido visual por los momentos, logros y vivencias que construyen la historia de nuestra comunidad educativa.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: -5, position: "relative", zIndex: 3 }}>
        
        {/* BARRA DE FILTROS */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 2, md: 2.5 }, 
            borderRadius: "20px", 
            mb: 6,
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            alignItems: "center",
            gap: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)",
            bgcolor: "rgba(255,255,255,0.9)"
          }}
        >
          <Tabs 
            value={categoriaActual} 
            onChange={(e, val) => setCategoriaActual(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              width: { xs: "100%", md: "auto" },
              minHeight: "44px",
              "& .MuiTab-root": { fontWeight: "700", textTransform: "none", fontSize: "0.95rem", borderRadius: "10px", minHeight: "44px", py: 1 },
              "& .Mui-selected": { color: "#003366" },
              "& .MuiTabs-indicator": { bgcolor: "#007BFF", height: "3px", borderRadius: "3px" }
            }}
          >
            {categorias.map((cat, index) => (
              <Tab key={index} label={cat} />
            ))}
          </Tabs>

          <FormControl size="small" sx={{ minWidth: 160, width: { xs: "100%", md: "auto" } }}>
            <InputLabel fontWeight="bold">Año Académico</InputLabel>
            <Select
              value={anioActual}
              label="Año Académico"
              onChange={(e) => setAnioActual(e.target.value)}
              sx={{ borderRadius: "10px", bgcolor: "#F8FAFC", fontWeight: "600" }}
            >
              {anios.map(anio => <MenuItem key={anio} value={anio} sx={{ fontWeight: "500" }}>{anio}</MenuItem>)}
            </Select>
          </FormControl>
        </Paper>

        {/* GRILLA DE ÁLBUMES */}
        {albumesFiltrados.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <CollectionsIcon sx={{ fontSize: 80, color: "#CBD5E1", mb: 2 }} />
            <Typography variant="h5" color="#64748B" fontWeight="bold">No hay álbumes disponibles</Typography>
            <Typography variant="body1" color="#94A3B8">Intenta seleccionar otra categoría o año.</Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {albumesFiltrados.map((album, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={album.id} data-aos="fade-up" data-aos-delay={index * 100}>
                
                {/* TARJETA DEL ÁLBUM */}
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    bgcolor: "#fff",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 20px 40px rgba(0, 51, 102, 0.12)",
                      borderColor: "#93C5FD"
                    },
                    "&:hover .portada-img": { transform: "scale(1.05)" }
                  }}
                >
                  {/* IMAGEN DE PORTADA */}
                  <Box sx={{ position: "relative", height: "220px", overflow: "hidden", bgcolor: "#f1f5f9" }}>
                    <Box
                      component="img"
                      className="portada-img"
                      src={album.portada}
                      alt={album.titulo}
                      loading="lazy"
                      sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                    />
                    
                    <Chip 
                      label={album.categoria} 
                      size="small"
                      sx={{ position: "absolute", top: 16, left: 16, bgcolor: "rgba(255,255,255,0.95)", color: "#0F172A", fontWeight: "800", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }} 
                    />
                  </Box>

                  {/* CONTENIDO Y BOTÓN EXPLÍCITO */}
                  <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", mb: 1.5 }}>
                      <CalendarMonthIcon sx={{ fontSize: 18 }} />
                      <Typography variant="caption" fontWeight="700" letterSpacing={0.5}>{album.fecha}</Typography>
                    </Box>
                    <Typography variant="h6" fontWeight="800" color="#0F172A" sx={{ mb: 3, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', flexGrow: 1 }}>
                      {album.titulo}
                    </Typography>

                    {/* ESTE BOTÓN ASEGURA QUE EL CLIC NUNCA FALLE */}
                    <Button 
                      variant="contained" 
                      fullWidth
                      startIcon={<CollectionsIcon />}
                      onClick={() => setAlbumSeleccionado(album)}
                      sx={{ 
                        bgcolor: "#003366", 
                        color: "#fff", 
                        borderRadius: "12px", 
                        py: 1.2,
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 8px 20px rgba(0,51,102,0.2)",
                        "&:hover": { bgcolor: "#00509e", boxShadow: "0 10px 25px rgba(0,51,102,0.3)" } 
                      }}
                    >
                      Ver Álbum ({album.fotos.length})
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* MODAL 1: VISOR MASONRY (Galería Interna) */}
      <Dialog
        open={albumSeleccionado !== null}
        onClose={() => setAlbumSeleccionado(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: { xs: "16px", md: "24px" }, m: { xs: 2, md: 4 }, minHeight: "85vh", bgcolor: "#F8FAFC", overflow: "hidden" } }}
      >
        {albumSeleccionado && (
          <>
            <Box sx={{ 
              display: "flex", justifyContent: "space-between", alignItems: "center", p: { xs: 2, md: 3 }, 
              position: "sticky", top: 0, zIndex: 10, 
              bgcolor: "rgba(255, 255, 255, 0.95)", borderBottom: "1px solid rgba(0,0,0,0.05)"
            }}>
              <Box>
                <Typography variant="h5" fontWeight="900" color="#0F172A" sx={{ fontSize: { xs: "1.2rem", md: "1.6rem" } }}>
                  {albumSeleccionado.titulo}
                </Typography>
                <Typography variant="body2" color="#64748B" fontWeight="600" mt={0.5}>
                  {albumSeleccionado.fecha} • {albumSeleccionado.fotos.length} fotografías
                </Typography>
              </Box>
              <IconButton onClick={() => setAlbumSeleccionado(null)} sx={{ bgcolor: "#E2E8F0", color: "#475569", "&:hover": { bgcolor: "#CBD5E1", color: "#0F172A" } }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <DialogContent sx={{ p: { xs: 1.5, sm: 3, md: 4 }, bgcolor: "#F8FAFC" }}>
              <ImageList variant="masonry" cols={columnasMosaico} gap={esCelular ? 12 : 20}>
                {albumSeleccionado.fotos?.map((foto, index) => (
                  <ImageListItem 
                    key={index} 
                    onClick={() => setFotoExpandida(foto)} 
                    sx={{ 
                      borderRadius: "16px", overflow: "hidden", cursor: "zoom-in",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                      "&:hover img": { filter: "brightness(0.7) scale(1.02)" }
                    }}
                  >
                    <img
                      src={`${foto}`}
                      alt={`Momento ${index + 1}`}
                      loading="lazy"
                      style={{ transition: "all 0.4s ease", display: "block", width: "100%" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* MODAL 2: PANTALLA COMPLETA OSCURA (Lightbox) */}
      <Dialog
        open={fotoExpandida !== null}
        onClose={() => setFotoExpandida(null)}
        maxWidth="xl"
        fullScreen={esCelular}
        PaperProps={{ sx: { bgcolor: "rgba(0,0,0,0.95)", boxShadow: "none", m: 0, overflow: "hidden" } }}
      >
        <Box sx={{ position: "relative", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          <Box sx={{ position: "absolute", top: { xs: 16, md: 30 }, right: { xs: 16, md: 30 }, display: "flex", gap: 2, zIndex: 10 }}>
            <Tooltip title="Descargar imagen en alta calidad" placement="bottom">
              <IconButton 
                onClick={() => descargarImagen(fotoExpandida)} 
                disabled={descargando}
                sx={{ 
                  color: "#fff", bgcolor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  "&:hover": { bgcolor: "rgba(0, 123, 255, 0.8)", transform: "scale(1.05)" }, transition: "all 0.2s"
                }}
              >
                {descargando ? <CircularProgress size={24} color="inherit" /> : <DownloadRoundedIcon />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Cerrar visor" placement="bottom">
              <IconButton 
                onClick={() => setFotoExpandida(null)} 
                sx={{ 
                  color: "#fff", bgcolor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  "&:hover": { bgcolor: "rgba(239, 68, 68, 0.8)", transform: "scale(1.05)" }, transition: "all 0.2s"
                }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {fotoExpandida && (
            <img 
              src={fotoExpandida} 
              alt="Visor expandido" 
              style={{ 
                maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", 
                borderRadius: esCelular ? "0px" : "12px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)" 
              }} 
            />
          )}
        </Box>
      </Dialog>

    </Box>
  );
}