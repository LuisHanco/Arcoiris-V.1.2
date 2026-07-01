import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  IconButton,
  Tooltip,
  Skeleton,
  Alert,
  Snackbar
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import ComputerIcon from '@mui/icons-material/Computer';
import RuleIcon from '@mui/icons-material/Rule';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PrintIcon from '@mui/icons-material/Print';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function HorarioLaboratorio() {
  const [horarios, setHorarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState("");

  // 🔴 AQUÍ PEGARÁS EL ENLACE CSV QUE TE DIO GOOGLE SHEETS 🔴
  const GOOGLE_SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbUn0hm7sKxDT8TSbBub1xHdiz-0tlGCjFZx-9Uf9t1Xvlo7QgKqC2898GIUnjJKIyetE7bYTP5GCx/pub?output=csv";

  const obtenerHorario = async () => {
    try {
      setCargando(true);
      setError(null);
      
      const respuesta = await fetch(GOOGLE_SHEETS_CSV_URL);
      if (!respuesta.ok) throw new Error("No se pudo establecer conexión con el servidor de horarios.");
      
      const datosCSV = await respuesta.text();
      
      // Separar por líneas
      const lineas = datosCSV.split('\n').filter(linea => linea.trim() !== "");
      const datosProcesados = [];

      // Procesar CSV respetando comillas (por si escriben comas dentro de las celdas de Excel)
      for (let i = 1; i < lineas.length; i++) {
        const columnas = lineas[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(col => col.replace(/^"|"$/g, '').trim());
        
        datosProcesados.push({
          hora: columnas[0] || "",
          lunes: columnas[1] || "",
          martes: columnas[2] || "",
          miercoles: columnas[3] || "",
          jueves: columnas[4] || "",
          viernes: columnas[5] || ""
        });
      }
      
      setHorarios(datosProcesados);
      
      // Guardar la hora exacta de sincronización
      const ahora = new Date();
      setUltimaActualizacion(`${ahora.getHours().toString().padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')} hrs`);

    } catch (err) {
      console.error(err);
      setError("No se pudo cargar el horario. Por favor, intente actualizar la página.");
    } finally {
      setTimeout(() => setCargando(false), 800); // Pequeño delay visual para que la animación de carga se aprecie
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    if (GOOGLE_SHEETS_CSV_URL.includes("TU_ID_DE_GOOGLE")) {
      // Datos de demostración si aún no has puesto tu link de Google Sheets
      setHorarios([
        { hora: "08:00 AM - 09:30 AM", lunes: "Educación Inicial I", martes: "Educación Física III", miercoles: "Mantenimiento", jueves: "Ciencias Sociales I", viernes: "Libre / Prácticas" },
        { hora: "09:30 AM - 11:00 AM", lunes: "Educación Inicial I", martes: "Educación Física III", miercoles: "Mantenimiento", jueves: "Ciencias Sociales I", viernes: "Libre / Prácticas" },
        { hora: "11:00 AM - 11:30 AM", lunes: "RECESO", martes: "RECESO", miercoles: "RECESO", jueves: "RECESO", viernes: "RECESO" },
        { hora: "11:30 AM - 01:00 PM", lunes: "Libre / Prácticas", martes: "Investigación V", miercoles: "Educación Inicial V", jueves: "Educación Física I", viernes: "Investigación I" },
        { hora: "01:00 PM - 02:00 PM", lunes: "REFRIGERIO", martes: "REFRIGERIO", miercoles: "REFRIGERIO", jueves: "REFRIGERIO", viernes: "REFRIGERIO" },
        { hora: "02:00 PM - 03:30 PM", lunes: "Ciencias Sociales III", martes: "Libre / Prácticas", miercoles: "Investigación III", jueves: "Educación Inicial III", viernes: "Mantenimiento" },
      ]);
      setUltimaActualizacion("Modo Prueba");
      setCargando(false);
    } else {
      obtenerHorario();
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Función para dar formato visual inteligente a las celdas
  const renderCellContent = (texto) => {
    if (!texto || texto === "-") return <Typography color="text.disabled">-</Typography>;
    
    const textoUpper = texto.toUpperCase();
    
    if (textoUpper.includes("LIBRE") || textoUpper.includes("PRÁCTICA") || textoUpper.includes("PRACTICA")) {
      return <Chip label={texto} color="success" size="small" variant="outlined" sx={{ fontWeight: "bold", bgcolor: "#e8f5e9" }} />;
    }
    if (textoUpper.includes("MANTENIMIENTO")) {
      return <Chip label={texto} color="error" size="small" variant="outlined" sx={{ fontWeight: "bold", bgcolor: "#ffebee" }} />;
    }
    if (textoUpper.includes("RECESO") || textoUpper.includes("REFRIGERIO")) {
      return <Typography fontWeight="800" sx={{ letterSpacing: 2, color: "#9e9e9e", }}>{textoUpper}</Typography>;
    }
    
    return <Typography variant="body2" fontWeight="600" color="#333">{texto}</Typography>;
  };

  const normas = [
    "Está estrictamente prohibido ingresar con alimentos o bebidas.",
    "El uso de los equipos es exclusivamente para fines académicos e investigativos.",
    "Cualquier falla en los equipos debe ser reportada inmediatamente al encargado de soporte.",
    "Al finalizar su turno, debe apagar el equipo y dejar su área de trabajo limpia.",
  ];

  const tableHeaderStyle = {
    backgroundColor: "#003366",
    color: "#ffffff",
    fontWeight: "bold",
    border: "1px solid #002244",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: { xs: "0.75rem", md: "0.85rem" },
    py: 2
  };

  const tableCellStyle = {
    border: "1px solid #e0e0e0",
    textAlign: "center",
    verticalAlign: "middle",
    py: 2
  };

  return (
    <Box sx={{ bgcolor: "#F4F6F8", pb: 10 }}>
      {/* 1. ENCABEZADO TIPO HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "35vh", md: "45vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          mb: { xs: 4, md: 6 },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#80bdff", fontWeight: 900, letterSpacing: { xs: 1, md: 2 } }}>
            INFRAESTRUCTURA Y EQUIPAMIENTO
          </Typography>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#ffffff", textTransform: "uppercase", mb: 2, fontSize: { xs: "2rem", md: "3.5rem" } }}>
            Laboratorio Institucional
          </Typography>
          <Typography variant="h6" sx={{ color: "#F0F2F5", maxWidth: "700px", mx: "auto", fontWeight: 400, fontSize: { xs: "0.9rem", md: "1.2rem" }, px: 2 }}>
            Consulta la disponibilidad en tiempo real para prácticas e investigación académica.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* PRESENTACIÓN Y CONTROLES */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} gap={2} mb={4} data-aos="fade-up">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ p: 1.5, bgcolor: "#e3f2fd", borderRadius: "12px", display: "flex" }}>
              <ComputerIcon sx={{ color: "#007BFF", fontSize: 32 }} />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold" color="#003366">
                Horario Semanal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ultimaActualizacion && `Última sincronización: Hoy a las ${ultimaActualizacion}`}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignSelf: { xs: "flex-end", md: "auto" } }}>
            <Tooltip title="Actualizar datos">
              <IconButton onClick={obtenerHorario} sx={{ bgcolor: "#ffffff", border: "1px solid #e0e0e0", "&:hover": { bgcolor: "#f5f5f5" } }}>
                <RefreshIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Imprimir Horario">
              <IconButton onClick={handlePrint} sx={{ bgcolor: "#ffffff", border: "1px solid #e0e0e0", "&:hover": { bgcolor: "#f5f5f5" } }}>
                <PrintIcon sx={{ color: "#333" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* ALERTA DE ERROR */}
        {error && (
          <Alert severity="error" sx={{ mb: 4, borderRadius: "12px" }}>
            {error}
          </Alert>
        )}

        {/* TABLA DE HORARIOS */}
        <Box mb={{ xs: 6, md: 8 }} data-aos="fade-up">
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "16px", overflowX: "auto", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
            <Table size="medium" sx={{ minWidth: 900 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...tableHeaderStyle, width: "15%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                      <AccessTimeIcon fontSize="small" /> HORARIO
                    </Box>
                  </TableCell>
                  <TableCell sx={tableHeaderStyle}>LUNES</TableCell>
                  <TableCell sx={tableHeaderStyle}>MARTES</TableCell>
                  <TableCell sx={tableHeaderStyle}>MIÉRCOLES</TableCell>
                  <TableCell sx={tableHeaderStyle}>JUEVES</TableCell>
                  <TableCell sx={tableHeaderStyle}>VIERNES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cargando ? (
                  /* ESQUELETO DE CARGA (SKELETONS) */
                  Array.from(new Array(6)).map((_, index) => (
                    <TableRow key={index}>
                      {Array.from(new Array(6)).map((_, colIndex) => (
                        <TableCell key={colIndex} sx={tableCellStyle}>
                          <Skeleton animation="wave" height={30} width={colIndex === 0 ? "80%" : "90%"} sx={{ mx: "auto", borderRadius: 1 }} />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  /* DATOS REALES */
                  horarios.map((row, index) => {
                    const isBreak = row.lunes?.toUpperCase().includes("RECESO") || row.lunes?.toUpperCase().includes("REFRIGERIO");
                    
                    return (
                      <TableRow key={index} hover sx={{ transition: "all 0.2s", '&:hover': { backgroundColor: '#f5f9ff' } }}>
                        <TableCell sx={{ ...tableCellStyle, fontWeight: "900", color: "#003366", bgcolor: "#fafafa" }}>
                          {row.hora}
                        </TableCell>
                        
                        {isBreak ? (
                          <TableCell colSpan={5} sx={{ ...tableCellStyle, bgcolor: "#f5f5f5" }}>
                            {renderCellContent(row.lunes)}
                          </TableCell>
                        ) : (
                          <>
                            <TableCell sx={tableCellStyle}>{renderCellContent(row.lunes)}</TableCell>
                            <TableCell sx={tableCellStyle}>{renderCellContent(row.martes)}</TableCell>
                            <TableCell sx={tableCellStyle}>{renderCellContent(row.miercoles)}</TableCell>
                            <TableCell sx={tableCellStyle}>{renderCellContent(row.jueves)}</TableCell>
                            <TableCell sx={tableCellStyle}>{renderCellContent(row.viernes)}</TableCell>
                          </>
                        )}
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* NORMAS DEL LABORATORIO */}
        <Box data-aos="fade-up">
          <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, bgcolor: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, borderBottom: "2px solid #f0f0f0", pb: 2 }}>
              <RuleIcon sx={{ color: "#d84315", fontSize: 36 }} />
              <Typography variant="h5" fontWeight="900" color="#003366">
                Reglamento Interno del Laboratorio
              </Typography>
            </Box>
            
            <List disablePadding>
              {normas.map((norma, index) => (
                <ListItem key={index} sx={{ py: 1.5, alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: "#007BFF", fontSize: 24 }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={norma} 
                    primaryTypographyProps={{ color: "#424242", fontSize: "1rem", fontWeight: "500", lineHeight: 1.6 }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
}