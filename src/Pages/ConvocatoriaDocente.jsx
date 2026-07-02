import React, { useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ConvocatoriaDocente() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const plazas = [
    { cant: 8, esp: "PROF Y/O LIC EN LA ESPECIALIDAD DE EDUCACION FISICA", req: "TÍTULO PROFESIONAL PEDAGÓGICO.\nESTUDIOS DE POST GRADO EN EL CAMPO PEDAGÓGICO.\nESTUDIOS EN INVESTIGACION.\nEXPERIENCIA NO MENOR A 5 AÑOS EN EDUCACION BÁSICA.\nEXPERIENCIA NO MENOR DE 3 AÑOS EN EDUCACIÓN SUPERIOR." },
    { cant: 1, esp: "PROF. Y/O LIC EN LA ESPECIALIDAD DE EDUCACION INICIAL", req: "TÍTULO PROFESIONAL PEDAGÓGICO O LICENCIADO EN EDUCACIÓN CON MAESTRÍA." },
    { cant: 3, esp: "PROF Y/O LIC EN LA ESPECIALIDAD DE EDUCACION EN CIENCIAS SOCIALES", req: "TÍTULO PROFESIONAL PEDAGÓGICO O LICENCIADO EN EDUCACIÓN CON MAESTRÍA." },
    { cant: 2, esp: "MAG EN EDUCACIÓN CON ESPECIALIDAD EN INVESTIGACIÓN", req: "GRADO DE MAGÍSTER EN EDUCACIÓN." },
    { cant: 2, esp: "PROF Y/O LIC EN EDUCACIÓN, CON ESPECIALIDAD DE CTA O CIENCIAS DE LA SALUD", req: "TÍTULO PROFESIONAL PEDAGÓGICO O LICENCIADO EN EDUCACIÓN CON MAESTRÍA." },
  ];

  const cronograma = [
    { etapa: "PUBLICACIÓN DE LA CONVOCATORIA", fechas: "DEL 09 AL 18 DE FEBRERO" },
    { etapa: "RECEPCIÓN DE EXPEDIENTES", fechas: "DEL 09 AL 20 DE FEBRERO" },
    { etapa: "EVALUACIÓN DE EXPEDIENTES", fechas: "DEL 23 AL 25 DE FEBRERO" },
    { etapa: "PUBLICACIÓN DE POSTULANTES APTOS", fechas: "25 DE FEBRERO" },
    { etapa: "ENTREVISTA", fechas: "DEL 26 DE FEBRERO AL 03 DE MARZO" },
    { etapa: "PUBLICACIÓN DE LA ENTREVISTA Y RESULTADO FINAL EN LA PÁGINA WEB DEL INSTITUTO WWW.ARCOIRIS.EDU.PE", fechas: "04 DE MARZO" },
    { etapa: "FIRMA DE CONTRATO", fechas: "09 DE MARZO" },
  ];

  const anexosDrive = [
    { nombre: "FORMATO DE HOJA DE VIDA", link: "#link-drive-hoja-vida" },
    { nombre: "ANEXO 01", link: "#link-drive-anexo-01" },
    { nombre: "ANEXO 07", link: "#link-drive-anexo-07" },
    { nombre: "ANEXO 09", link: "#link-drive-anexo-09" },
    { nombre: "ANEXO 10", link: "#link-drive-anexo-10" },
  ];

  // Datos extraídos del archivo Excel "APTOS EVALUACIÓN DE EXPEDIENTES"
  const aptos = [
    { apellidos: "HUAMAN QUISPE", nombres: "JULIO CESAR" },
    { apellidos: "VARGAS HUAMAN", nombres: "ROBERTO" },
    { apellidos: "TECSI GONZALES", nombres: "ELIAN ANAI" },
    { apellidos: "SUCSA CHOQUE", nombres: "FIORELA" },
    { apellidos: "HUAMAN MENDOZA", nombres: "BELINDA" },
    { apellidos: "SANTOS PAREDES", nombres: "WILSON ELOY" },
    { apellidos: "RADO CUTIRE", nombres: "CRISDELL MADAI" },
    { apellidos: "MOLINA DIAZ", nombres: "RUTH OLIVIA" },
    { apellidos: "PEREZ CCORIMANYA", nombres: "JUAN CARLOS" },
    { apellidos: "HALANOCCA SARCCA", nombres: "KARINA" },
    { apellidos: "MUÑOZ FIGUEROA", nombres: "PEDRO ANTONIO" },
    { apellidos: "MERCADO MENDOZA", nombres: "PATRICIA ELVIA" },
    { apellidos: "GAMARRA PINO", nombres: "BETSABE" },
    { apellidos: "HUAMAN MELENDEZ", nombres: "ANA MARIA" },
    { apellidos: "LEVA CASCAMAYTA", nombres: "ALICIA" },
    { apellidos: "GAHUANA ORIHUELA", nombres: "RONIA" },
    { apellidos: "CAMASCA CORDOVA", nombres: "MARIA DE LOS ANGELES" },
    { apellidos: "DELGADO QUIPO", nombres: "YAQUELIN" },
  ];

  const tableHeaderStyle = {
    backgroundColor: "#003366",
    color: "#ffffff",
    fontWeight: "bold",
    border: "1px solid #002244",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: { xs: "0.8rem", md: "0.9rem" }
  };

  const tableCellStyle = {
    border: "1px solid #e0e0e0",
    fontSize: { xs: "0.8rem", md: "0.85rem" },
    verticalAlign: "top"
  };

  return (
    <Box sx={{ bgcolor: "#F4F6F8", pb: 10 }}>
      
      {/* ENCABEZADO TIPO HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "35vh", md: "45vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          mb: 4,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#80bdff", fontWeight: 900, letterSpacing: { xs: 1, md: 2 } }}>
            SEGÚN R.D. 104-2026
          </Typography>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#ffffff", textTransform: "uppercase", mb: 2, fontSize: { xs: "1.8rem", md: "3.5rem" } }}>
            Convocatoria Docente 2026-I
          </Typography>
          <Typography variant="h6" sx={{ color: "#F0F2F5", maxWidth: "700px", mx: "auto", fontWeight: 400, fontSize: { xs: "0.9rem", md: "1.2rem" }, px: 2 }}>
            Proceso de selección para Profesores y Licenciados en Educación con Maestría.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* BOTÓN VOLVER */}
        <Button 
          onClick={() => navigate('/convocatorias')} 
          startIcon={<ArrowBackIcon />} 
          sx={{ mb: 4, fontWeight: "bold", color: "#003366", textTransform: "none" }}
        >
          Volver al Portal de Convocatorias
        </Button>

        <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, mb: { xs: 4, md: 5 }, border: "1px solid #ccc", borderRadius: 1 }} data-aos="fade-up">
          <Typography variant="body1" textAlign="justify">
            El Instituto de Educación Superior Pedagógico Privado “ARCO IRIS” convoca a PROFESORES o LICENCIADOS EN EDUCACIÓN con MAESTRIA a las siguientes plazas laborales para el semestre académico 2026-I.
          </Typography>
        </Paper>

        {/* CUADRO 1: PLAZAS */}
        <Box mb={{ xs: 4, md: 6 }} data-aos="fade-up">
          <Typography variant="h6" fontWeight="bold" color="#003366" mb={2} sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            CUADRO N° 1: RELACIÓN DE PLAZAS Y REQUISITOS
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ccc", borderRadius: 0, overflowX: "auto" }}>
            <Table size="small" sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...tableHeaderStyle, width: "15%" }}>CANT. DE PLAZAS</TableCell>
                  <TableCell sx={{ ...tableHeaderStyle, width: "35%" }}>ESPECIALIDAD</TableCell>
                  <TableCell sx={{ ...tableHeaderStyle, width: "50%" }}>REQUISITOS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plazas.map((row, index) => (
                  <TableRow key={index} hover sx={{ '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ ...tableCellStyle, textAlign: "center", fontWeight: "bold", fontSize: "1.1rem" }}>
                      {row.cant}
                    </TableCell>
                    <TableCell sx={{ ...tableCellStyle, fontWeight: "bold" }}>
                      {row.esp}
                    </TableCell>
                    <TableCell sx={{ ...tableCellStyle, whiteSpace: "pre-line" }}>
                      {row.req}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* CUADRO 2: CRONOGRAMA */}
        <Box mb={{ xs: 4, md: 6 }} data-aos="fade-up">
          <Typography variant="h6" fontWeight="bold" color="#003366" mb={2} sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            CUADRO N° 2: CRONOGRAMA DE ACTIVIDADES
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ccc", borderRadius: 0, overflowX: "auto" }}>
            <Table size="small" sx={{ minWidth: 500 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...tableHeaderStyle, width: "60%" }}>ETAPAS DEL PROCESO</TableCell>
                  <TableCell sx={{ ...tableHeaderStyle, width: "40%" }}>FECHAS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cronograma.map((row, index) => (
                  <TableRow key={index} hover sx={{ '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={tableCellStyle}>
                      {row.etapa}
                    </TableCell>
                    <TableCell sx={{ ...tableCellStyle, textAlign: "center", fontWeight: "bold" }}>
                      {row.fechas}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* INSTRUCCIONES DE ENTREGA */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, mb: { xs: 4, md: 5 }, borderLeft: "6px solid #003366", bgcolor: "#e3f2fd", borderRadius: 1 }} data-aos="fade-up">
          <Typography variant="body1" fontWeight="bold" mb={2}>
            INSTRUCCIONES PARA LA ENTREGA DE DOCUMENTOS:
          </Typography>
          <Typography variant="body2" textAlign="justify" mb={2}>
            Para la entrega de documentos debe llenar su hoja de vida de acuerdo con el formato que se encuentra en esta página web y realizar la entrega junto a su <strong>CV DOCUMENTADO</strong>. El plazo máximo de entrega de documentos será el día <strong>20 DE FEBRERO</strong>.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#003366", mt: 2 }}>
            <LocationOnIcon fontSize="small" sx={{ flexShrink: 0 }} />
            <Typography variant="body2" fontWeight="bold">
              Local del Instituto “Arco Iris”: Urb. Tenería IV, fracción II, altura del paradero Enaco San Sebastián, Cusco. (Cel. 966425975)
            </Typography>
          </Box>
        </Paper>

        {/* SECCIÓN DE ARCHIVOS TIPO DRIVE EN LISTA */}
        <Box mb={{ xs: 4, md: 6 }} data-aos="fade-up">
          <Typography variant="h6" fontWeight="bold" color="#003366" mb={2} sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
            ANEXOS Y FORMATOS REQUERIDOS (DESCARGAS)
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Haga clic en los siguientes enlaces para visualizar y descargar los formatos oficiales desde Google Drive.
          </Typography>
          
          <Paper elevation={0} sx={{ border: "1px solid #ccc", borderRadius: 1, bgcolor: "#fff" }}>
            <List disablePadding>
              {anexosDrive.map((archivo, index) => (
                <React.Fragment key={index}>
                  <ListItem 
                    sx={{ 
                      py: 2, 
                      px: { xs: 2, md: 3 }, 
                      display: "flex", 
                      flexDirection: { xs: "column", sm: "row" }, 
                      alignItems: { xs: "flex-start", sm: "center" }, 
                      gap: 2 
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, width: "100%" }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <InsertDriveFileIcon sx={{ color: "#1967D2", fontSize: 28 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={archivo.nombre} 
                        primaryTypographyProps={{ fontWeight: "bold", color: "#333", fontSize: { xs: "0.9rem", md: "1rem" } }} 
                      />
                    </Box>
                    <Button 
                      component="a" 
                      href={archivo.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="contained" 
                      size="small"
                      startIcon={<CloudDownloadIcon />}
                      sx={{ 
                        width: { xs: "100%", sm: "auto" },
                        bgcolor: "#f1f3f4", 
                        color: "#1967D2", 
                        boxShadow: "none",
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": { bgcolor: "#e8eaed", boxShadow: "none" }
                      }}
                    >
                      Descargar
                    </Button>
                  </ListItem>
                  {index < anexosDrive.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>

        {/* SECCIÓN FINAL: RESULTADOS DE EVALUACIÓN DE EXPEDIENTES */}
        <Box mb={4} data-aos="fade-up">
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderLeft: "6px solid #2e7d32", bgcolor: "#e8f5e9", borderRadius: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: { xs: 28, md: 32 } }} />
              <Typography variant="h5" fontWeight="bold" color="#1b5e20" sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                RESULTADOS: EVALUACIÓN DE EXPEDIENTES
              </Typography>
            </Box>
            <Typography variant="body2" mb={3} textAlign="justify" color="#2e7d32">
              Se presenta a continuación la lista oficial de los docentes que han sido declarados <strong>APTOS</strong> para la siguiente etapa de evaluación (Entrevista), habiendo cumplido con los requisitos establecidos en la convocatoria.
            </Typography>
            
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #c8e6c9", borderRadius: 0, overflowX: "auto" }}>
              <Table size="small" sx={{ minWidth: 500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...tableHeaderStyle, backgroundColor: "#2e7d32", width: "10%" }}>N°</TableCell>
                    <TableCell sx={{ ...tableHeaderStyle, backgroundColor: "#2e7d32", width: "40%" }}>APELLIDOS</TableCell>
                    <TableCell sx={{ ...tableHeaderStyle, backgroundColor: "#2e7d32", width: "30%" }}>NOMBRES</TableCell>
                    <TableCell sx={{ ...tableHeaderStyle, backgroundColor: "#2e7d32", width: "20%" }}>CONDICIÓN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {aptos.map((docente, index) => (
                    <TableRow key={index} hover sx={{ '&:nth-of-type(even)': { backgroundColor: '#f1f8e9' } }}>
                      <TableCell sx={{ ...tableCellStyle, textAlign: "center", fontWeight: "bold" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell sx={{ ...tableCellStyle, fontWeight: "bold" }}>
                        {docente.apellidos}
                      </TableCell>
                      <TableCell sx={tableCellStyle}>
                        {docente.nombres}
                      </TableCell>
                      <TableCell sx={{ ...tableCellStyle, textAlign: "center" }}>
                        <Chip label="APTO" color="success" size="small" sx={{ fontWeight: "bold", borderRadius: "4px", fontSize: "0.75rem" }} />
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