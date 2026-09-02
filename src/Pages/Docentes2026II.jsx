import React, { useEffect } from "react";
import {
  Box, Container, Typography, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, alpha
} from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Docentes2026II() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0); 
  }, []);

  const plazas = [
    {
      cantidad: 2,
      especialidad: "Profesor(a) y/o Licenciado(a) en la Especialidad de Educación Física",
      requisitos: [
        "Título Profesional Pedagógico.",
        "Estudios de Post Grado o Especialización en el campo pedagógico.",
        "Experiencia no menor a 5 años en Educación Básica.",
        "Experiencia no menor de 3 años en Educación Superior."
      ]
    },
    {
      cantidad: 1,
      especialidad: "Profesor(a) y/o Licenciado(a) en la Especialidad de Educación Inicial",
      requisitos: [
        "Título Profesional Pedagógico.",
        "Grado de Maestría.",
        "Experiencia profesional comprobada en su especialidad."
      ]
    }
  ];

  // Fechas adaptadas al mes de septiembre para coincidir con la evaluación reciente
  const cronograma = [
    { fecha: "Del 26 al 28 de Agosto", actividad: "Publicación de la Convocatoria", estado: "completado" },
    { fecha: "Del 26 al 28 de Agosto", actividad: "Recepción de Expedientes", estado: "completado" },
    { fecha: "31 de Agosto", actividad: "Evaluación de Expedientes", estado: "completado" },
    { fecha: "1 de Septiembre", actividad: "Publicación de Postulantes Aptos", estado: "completado" },
    { fecha: "2 y 3 de Septiembre", actividad: "Entrevista Personal", estado: "actual" },
    { fecha: "4 de Septiembre", actividad: "Publicación de Resultados Finales", estado: "pendiente" },
    { fecha: "7 de Septiembre", actividad: "Firma de Contrato", estado: "pendiente" }
  ];

  const anexos = [
    { nombre: "Formato de Hoja de Vida", archivo: "https://docs.google.com/document/d/1qQR5U5BYLNZDRo2Dvo2TcSfQUjOWcmhC/edit?usp=drive_link&ouid=103368367490034302982&rtpof=true&sd=true" },
    { nombre: "Anexo 01", archivo: "https://drive.google.com/file/d/1QbtLjXxf07F7bO8adzO8YSPIPOLJXwzG/view?usp=sharing" },
    { nombre: "Anexo 07", archivo: "https://drive.google.com/file/d/1Yls7MvjlpF44ISp78IhrSOB8fyJEHBkM/view?usp=drive_link" },
    { nombre: "Anexo 09", archivo: "https://drive.google.com/file/d/1rrEJO1ZD9EPLIsjAupUMhJzqa73Ob3Dd/view?usp=drive_link" },
    { nombre: "Anexo 10", archivo: "https://drive.google.com/file/d/1ydCG4ar_zFLJmid2tPqmxFTk5A1eIHCW/view?usp=drive_link" }
  ];

  const resultadosEvaluacion = [
    { id: 1, postulante: "Bach. Yana Quispe Javier", plaza: "Educación Física", estado: "No Apto", observaciones: ["No cuenta con Maestría inscrita en SUNEDU", "No cuenta con la Experiencia Minima en Educación Superior"] },
    { id: 2, postulante: "Mtra. Mercado Machaca Katya", plaza: "Educación Inicial", estado: "No Apto", observaciones: ["No cuenta con la Especialidad para el PE Educación Inicial"] },
    { id: 3, postulante: "Mtra. Pino Loaiza Lulia Beliña", plaza: "Educación Inicial y Primaria", estado: "No Apto", observaciones: ["No cuenta con la Experiencia Minima en Educación Basica Regular", "No cuenta con la Experiencia Minima en Educación Superior"] },
    { id: 4, postulante: "Lic. Castilla Enciso Heldy Guadalupe", plaza: "Educación Inicial y Primaria", estado: "No Apto", observaciones: ["No cuenta con Maestría inscrita en SUNEDU", "No cuenta con el perfil requerido para el PE Educación Inicial"] },
    { id: 5, postulante: "Mtra. Challanca Huillca Fany Odaliz", plaza: "Educación Lengua y Literatura", estado: "No Apto", observaciones: ["No cuenta con el perfil requerido para el PE Educación Inicial"] }
  ];

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", pb: 12 }}>
      
      {/* 1. CABECERA / HERO */}
      <Box sx={{ 
        bgcolor: "#001F3F", 
        pt: { xs: 12, md: 15 }, pb: { xs: 10, md: 14 }, 
        borderBottom: "6px solid #C59B27", 
        px: 2,
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)"
      }}>
        <Container maxWidth="lg">
          <Button component={Link} to="/convocatorias" startIcon={<ArrowBackRoundedIcon />} sx={{ color: "#94A3B8", mb: 4, textTransform: "none", fontWeight: "bold", "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.1)" } }}>
            Volver a Convocatorias
          </Button>
          
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} data-aos="fade-right">
              <Chip label="PROCESO ACTIVO" sx={{ fontWeight: "900", mb: 3, bgcolor: "#10B981", color: "#fff", px: 1, letterSpacing: 1 }} />
              <Typography variant="h2" fontWeight="900" color="#fff" mb={2} sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, textTransform: "uppercase", letterSpacing: "-1px" }}>
                Convocatoria Docente 2026-II
              </Typography>
              <Typography variant="h6" color="#CBD5E1" fontWeight="400" sx={{ maxWidth: { xs: "100%", md: "90%" }, lineHeight: 1.6 }}>
                El Instituto de Educación Superior Pedagógico Privado “ARCO IRIS” invita a profesionales de la educación a formar parte de nuestra plana docente.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} data-aos="fade-left">
              <Paper sx={{ p: { xs: 3, sm: 4 }, bgcolor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", color: "#fff", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 2 }}>
                  <Box sx={{ bgcolor: alpha("#FBBF24", 0.2), p: 1.5, borderRadius: "16px" }}>
                    <CalendarMonthRoundedIcon sx={{ color: "#FBBF24", fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="#94A3B8" display="block" fontWeight="bold" letterSpacing={1}>ETAPA ACTUAL</Typography>
                    <Typography variant="h5" fontWeight="900" color="#FBBF24">Entrevista Personal</Typography>
                  </Box>
                </Box>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2.5 }} />
                <Typography variant="body2" color="#CBD5E1" lineHeight={1.6}>
                  Estamos en la fase de evaluación. Revisa los resultados publicados en la sección inferior.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6, position: "relative", zIndex: 3 }}>
        
        {/* 2. PLAZAS Y REQUISITOS */}
        <Paper elevation={0} sx={{ p: { xs: 2.5, md: 5 }, borderRadius: "24px", mb: 6, border: "1px solid #E2E8F0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }} data-aos="fade-up">
          <Typography variant="h4" fontWeight="900" color="#0F172A" mb={1} display="flex" alignItems="center" gap={1.5} sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}>
            <SchoolRoundedIcon sx={{ color: "#0284C7", fontSize: { xs: 28, md: 35 } }} /> Plazas Disponibles
          </Typography>
          <Typography variant="body1" color="#64748B" mb={4}>
            Perfiles profesionales requeridos para el desarrollo del semestre académico 2026-II.
          </Typography>

          <TableContainer sx={{ border: "1px solid #E2E8F0", borderRadius: "16px", overflowX: "auto", overflowY: "hidden", bgcolor: "#fff" }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ bgcolor: "#F1F5F9" }}>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "800", color: "#475569", width: "12%", py: 2 }}>VACANTES</TableCell>
                  <TableCell sx={{ fontWeight: "800", color: "#475569", width: "38%", py: 2 }}>ESPECIALIDAD</TableCell>
                  <TableCell sx={{ fontWeight: "800", color: "#475569", width: "50%", py: 2 }}>REQUISITOS MÍNIMOS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plazas.map((plaza, index) => (
                  <TableRow key={index} hover sx={{ "&:last-child td, &:last-child th": { border: 0 }, transition: "all 0.2s" }}>
                    <TableCell align="center">
                      <Box sx={{ bgcolor: alpha("#0284C7", 0.1), color: "#0284C7", display: "inline-block", px: 2, py: 1, borderRadius: "12px", fontWeight: "900", fontSize: "1.2rem" }}>
                        {plaza.cantidad}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight="800" color="#0F172A">
                        {plaza.especialidad}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <List dense disablePadding>
                        {plaza.requisitos.map((req, i) => (
                          <ListItem key={i} disableGutters sx={{ alignItems: "flex-start", py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                              <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#10B981" }} />
                            </ListItemIcon>
                            <ListItemText primary={req} primaryTypographyProps={{ variant: "body2", color: "#475569", fontWeight: "500" }} />
                          </ListItem>
                        ))}
                      </List>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          
          {/* 3. CRONOGRAMA DE ACTIVIDADES */}
          <Grid size={{ xs: 12, md: 7 }} data-aos="fade-right">
            <Typography variant="h4" fontWeight="900" color="#0F172A" mb={4} display="flex" alignItems="center" gap={1.5} sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}>
              <EventAvailableRoundedIcon sx={{ color: "#F59E0B", fontSize: { xs: 28, md: 35 } }} /> Cronograma
            </Typography>
            
            <Box sx={{ position: "relative", ml: { xs: 1, md: 2 } }}>
              <Box sx={{ position: "absolute", top: "24px", bottom: "24px", left: "11px", width: "2px", bgcolor: "#E2E8F0" }} />

              {cronograma.map((item, index) => {
                const isCurrent = item.estado === "actual";
                const isDone = item.estado === "completado";
                
                return (
                  <Box key={index} sx={{ position: "relative", pl: { xs: 4, md: 5 }, mb: index === cronograma.length - 1 ? 0 : 3 }}>
                    
                    <Box sx={{
                      position: "absolute", left: 0, 
                      top: { xs: "36px", sm: "50%" }, 
                      transform: "translateY(-50%)",
                      width: "24px", height: "24px", borderRadius: "50%", 
                      bgcolor: isCurrent ? "#0284C7" : (isDone ? "#10B981" : "#fff"),
                      border: `4px solid ${isCurrent || isDone ? (isCurrent ? "#0284C7" : "#10B981") : "#CBD5E1"}`, 
                      zIndex: 2, boxShadow: "0 0 0 4px #F8FAFC" 
                    }} />

                    <Paper elevation={0} sx={{
                      p: { xs: 2, sm: 2.5 }, borderRadius: "16px", 
                      border: `1px solid ${isCurrent ? "#0284C7" : "#E2E8F0"}`, 
                      bgcolor: isCurrent ? alpha("#0284C7", 0.03) : "#fff",
                      display: "flex", flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" }, gap: { xs: 1, sm: 3 },
                      position: "relative", overflow: "hidden"
                    }}>
                      {isCurrent && (
                        <Box sx={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", bgcolor: "#0284C7" }} />
                      )}

                      <Box sx={{ minWidth: { xs: "100%", sm: "160px" } }}>
                        <Typography variant="caption" color={isCurrent ? "#0284C7" : "#94A3B8"} fontWeight="bold" textTransform="uppercase" display="block">
                          {isCurrent ? "Etapa Actual" : "Fecha"}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="900" color={isDone || isCurrent ? "#0F172A" : "#64748B"} lineHeight={1.2}>
                          {item.fecha}
                        </Typography>
                      </Box>
                      
                      <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" }, borderColor: "#E2E8F0" }} />
                      
                      <Box>
                        <Typography variant="body1" fontWeight={isCurrent ? "900" : "700"} color={isDone || isCurrent ? "#0F172A" : "#64748B"}>
                          {item.actividad}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* 4. DOCUMENTOS Y ENTREGA */}
          <Grid size={{ xs: 12, md: 5 }} data-aos="fade-left">
            <Typography variant="h4" fontWeight="900" color="#0F172A" mb={4} display="flex" alignItems="center" gap={1.5} sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}>
              <DescriptionRoundedIcon sx={{ color: "#10B981", fontSize: { xs: 28, md: 35 } }} /> Postulación
            </Typography>

            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, borderRadius: "24px", bgcolor: "#fff", border: "1px solid #E2E8F0", mb: 4, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
              <Typography variant="subtitle1" fontWeight="900" color="#0F172A" mb={1}>
                Descarga de Anexos
              </Typography>
              <Typography variant="body2" color="#64748B" mb={3}>
                Imprima, complete y adjunte los siguientes formatos obligatorios a su currículum vitae.
              </Typography>
              
              <Grid container spacing={2}>
                {anexos.map((anexo, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <Button 
                      fullWidth variant="outlined" startIcon={<DescriptionRoundedIcon />}
                      component="a" href={anexo.archivo} target="_blank" rel="noopener noreferrer"
                      sx={{ 
                        justifyContent: "flex-start", borderRadius: "12px", color: "#334155", borderColor: "#CBD5E1", 
                        textTransform: "none", fontWeight: "700", py: 1.2, textAlign: "left",
                        "&:hover": { bgcolor: "#F8FAFC", borderColor: "#0284C7", color: "#0284C7", boxShadow: "0 4px 6px -1px rgba(2, 132, 199, 0.1)" } 
                      }}
                    >
                      {anexo.nombre}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, borderRadius: "24px", bgcolor: "#003366", color: "#fff", backgroundImage: "linear-gradient(135deg, #003366 0%, #001F3F 100%)", boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)" }}>
              <Typography variant="subtitle1" fontWeight="900" color="#FBBF24" mb={2} display="flex" alignItems="center" gap={1}>
                <LocationOnRoundedIcon /> Recepción de Expedientes
              </Typography>
              <Typography variant="body2" color="#E2E8F0" mb={3} lineHeight={1.8}>
                Entregue su expediente físico (CV documentado + Anexos) en Mesa de Partes de nuestra institución.
              </Typography>
              
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ p: 1, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}><LocationOnRoundedIcon fontSize="small" /></Box>
                <Typography variant="body2" color="#fff" fontWeight="bold">Tenería IV fracción II, altura del paradero Enaco San Sebastián, Cusco.</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box sx={{ p: 1, bgcolor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}><PhoneIphoneRoundedIcon fontSize="small" /></Box>
                <Typography variant="body2" color="#fff" fontWeight="bold">Cel: 966425975</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* ========================================== */}
        {/* 5. RESULTADOS DE EVALUACIÓN CURRICULAR    */}
        {/* ========================================== */}
        <Box mt={{ xs: 4, md: 6 }} data-aos="fade-up">
          <Paper elevation={0} sx={{ 
            p: { xs: 2.5, md: 5 }, borderRadius: "24px", 
            background: "linear-gradient(135deg, #ffffff 0%, #F0F9FF 100%)", 
            border: "1px solid #BAE6FD",
            boxShadow: "0 10px 30px rgba(2, 132, 199, 0.1)"
          }}>
            <Typography variant="h4" fontWeight="900" color="#0F172A" mb={1} display="flex" alignItems="center" gap={1.5} sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}>
              <WorkspacePremiumRoundedIcon sx={{ color: "#0284C7", fontSize: { xs: 28, md: 38 } }} /> 
              Evaluación Curricular
            </Typography>
            <Typography variant="body1" color="#64748B" mb={4}>
              A continuación se presenta el cuadro oficial con los resultados de la evaluación de expedientes.
            </Typography>

            <TableContainer sx={{ border: "1px solid #BAE6FD", borderRadius: "16px", overflowX: "auto", overflowY: "hidden", bgcolor: "#fff" }}>
              <Table sx={{ minWidth: 800 }}>
                <TableHead sx={{ bgcolor: "#E0F2FE" }}>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "800", color: "#0369A1", width: "5%", py: 2 }}>N°</TableCell>
                    <TableCell sx={{ fontWeight: "800", color: "#0369A1", width: "25%", py: 2 }}>POSTULANTE</TableCell>
                    <TableCell sx={{ fontWeight: "800", color: "#0369A1", width: "15%", py: 2 }}>PLAZA</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "800", color: "#0369A1", width: "15%", py: 2 }}>CONDICIÓN</TableCell>
                    <TableCell sx={{ fontWeight: "800", color: "#0369A1", width: "40%", py: 2 }}>OBSERVACIONES</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resultadosEvaluacion.map((resultado) => (
                    <TableRow key={resultado.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="800" color="#64748B">{resultado.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" fontWeight="700" color="#0F172A">{resultado.postulante}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="#475569" fontWeight="500">{resultado.plaza}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Chip 
                          icon={<CancelRoundedIcon />} 
                          label={resultado.estado} 
                          color="error" 
                          size="small" 
                          sx={{ fontWeight: "bold", borderRadius: "8px" }} 
                        />
                      </TableCell>
                      <TableCell>
                        <List dense disablePadding>
                          {resultado.observaciones.map((obs, idx) => (
                            <ListItem key={idx} disableGutters sx={{ alignItems: "flex-start", py: 0.2 }}>
                              <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}>
                                <FiberManualRecordIcon sx={{ fontSize: 10, color: "#94A3B8" }} />
                              </ListItemIcon>
                              <ListItemText primary={obs} primaryTypographyProps={{ variant: "body2", color: "#475569" }} />
                            </ListItem>
                          ))}
                        </List>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
}