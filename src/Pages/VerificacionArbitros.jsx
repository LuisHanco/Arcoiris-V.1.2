import React, { useState, useEffect } from "react";
import {
  Box, Container, Typography, Paper, TextField, Button, Grid, Chip, Divider, InputAdornment
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import GppBadRoundedIcon from '@mui/icons-material/GppBadRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';

// =======================================================================
// BASE DE DATOS DE LA COMISIÓN DE ÁRBITROS
// =======================================================================
const baseDatosArbitros = [
  { codigo: "ARB-2026-001", dni: "47496740", nombre: "DOMINIK LINSDAY TITO ACURIO" },
  { codigo: "ARB-2026-002", dni: "71205678", nombre: "MARIO ISRAEL TAPARA ILLATUPA" },
  { codigo: "ARB-2026-003", dni: "60494496", nombre: "C JHILBERT GALLEGOS ÁLVAREZ" },
  { codigo: "ARB-2026-004", dni: "76922943", nombre: "ANDY EDUARDO CENTENO TTITO" },
  { codigo: "ARB-2026-005", dni: "75819085", nombre: "AXEL DARCY CALLER CAÑARI" },
  { codigo: "ARB-2026-006", dni: "73757924", nombre: "CHIRINOS QUISPE ANDERSON" },
  { codigo: "ARB-2026-007", dni: "74024342", nombre: "CRISTIAN OMAR GÁYONA NOLASCO" },
  { codigo: "ARB-2026-008", dni: "61159503", nombre: "RAÚL PÉREZ CASTRO" },
  { codigo: "ARB-2026-009", dni: "46533730", nombre: "DENIS CRISTIAN AGUILAR FIRATA" },
  { codigo: "ARB-2026-010", dni: "75835303", nombre: "ABEL YAISSON QUISPE CONDORI" },
  { codigo: "ARB-2026-011", dni: "62309651", nombre: "MARIO LINO HUAMANGUILLAS BELLIDO" },
  { codigo: "ARB-2026-012", dni: "70991624", nombre: "KEMBERLYN OLABARRERA BARRIENTOS" },
  { codigo: "ARB-2026-013", dni: "60311822", nombre: "ZAVALETA FLORES YOSHET JULIO" },
  { codigo: "ARB-2026-014", dni: "74558529", nombre: "ALICIA ROJAS CATALÁN" },
  { codigo: "ARB-2026-015", dni: "70043079", nombre: "VALID ESTEPHANY CABRERA VELARDE" },
  { codigo: "ARB-2026-016", dni: "71775211", nombre: "YORDAN RAFAEL DOMINGUEZ CHIPA" },
  { codigo: "ARB-2026-017", dni: "60458319", nombre: "CRISTHIAN ROLANDO CAHUANA MAMANI" },
  { codigo: "ARB-2026-018", dni: "60021848", nombre: "RUSBEL ELEAZAR TAPIA RIMACHI" },
  { codigo: "ARB-2026-019", dni: "71818015", nombre: "YEISON TONI SUPHO ÁLVARO" },
  { codigo: "ARB-2026-020", dni: "47339204", nombre: "REYNALDO AUCCAPIÑA VILLALOBOS" },
  { codigo: "ARB-2026-021", dni: "73856167", nombre: "QUISPE TUMILE WILSON" },
  { codigo: "ARB-2026-022", dni: "61092834", nombre: "ESTRELLA MIA JAUREGUI BENITES" },
  { codigo: "ARB-2026-023", dni: "60844267", nombre: "GADIEL MC FERDINAND ROJAS CHAVEZ" },
  { codigo: "ARB-2026-024", dni: "74949458", nombre: "LIDMAN GABRIEL LOPEZ HUANCA" },
  { codigo: "ARB-2026-025", dni: "73195119", nombre: "ZARATE PANTOJA PEPE HUMBERTO" },
  { codigo: "ARB-2026-026", dni: "72194590", nombre: "CHRISTIAN RODRIGUEZ MENDEZ" },
].map(arb => ({
  ...arb,
  rango: "Árbitro Oficial Autorizado",
  fechaEmision: "01/03/2026",
  fechaVencimiento: "31/12/2026",
  estado: "ACTIVO"
}));

// Cargar la imagen usando el DNI
const getLocalArbitroPhoto = (dni) => {
  return new URL(`../assets/Imagenes/arbitros/${dni}.webp`, import.meta.url).href;
};

export default function VerificacionArbitros() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [resultados, setResultados] = useState([]); 
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);
  const [fechaConsulta, setFechaConsulta] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const date = new Date();
    setFechaConsulta(`${date.toLocaleDateString('es-PE')} - ${date.toLocaleTimeString('es-PE')}`);

    const codigoEnUrl = searchParams.get("codigo");
    if (codigoEnUrl && !busquedaRealizada) {
      setInputValue(codigoEnUrl);
      realizarBusqueda(codigoEnUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const realizarBusqueda = (termino) => {
    if (!termino || !termino.trim()) return;
    
    setResultados([]); 
    setBusquedaRealizada(true);
    
    const termLimpio = termino.trim().toUpperCase();

    const arbitrosEncontrados = baseDatosArbitros.filter(
      (arb) => 
        arb.codigo.toUpperCase() === termLimpio || 
        arb.dni === termLimpio ||
        arb.nombre.toUpperCase().includes(termLimpio)
    );

    setResultados(arbitrosEncontrados);

    if (arbitrosEncontrados.length === 1) {
      setSearchParams({ codigo: arbitrosEncontrados[0].codigo }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleBuscarManual = (e) => {
    e.preventDefault();
    realizarBusqueda(inputValue);
  };

  const handleLimpiar = () => {
    setInputValue("");
    setResultados([]);
    setBusquedaRealizada(false);
    setSearchParams({}, { replace: true });
  };

  return (
    <Box sx={{ bgcolor: "#F4F7FA", minHeight: "100vh", pb: 10 }}>
      
      {/* HERO SECTION */}
      <Box
        sx={{
          bgcolor: "#001F3F", pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 12 },
          textAlign: "center", position: "relative", overflow: "hidden",
          borderBottom: "6px solid #C59B27"
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ display: "inline-flex", bgcolor: "rgba(197, 155, 39, 0.15)", p: 2, borderRadius: "50%", mb: 3 }}>
            <PolicyRoundedIcon sx={{ fontSize: { xs: 50, md: 70 }, color: "#FBBF24" }} />
          </Box>
          <Typography variant="h2" fontWeight="900" sx={{ color: "#fff", textTransform: "uppercase", fontSize: { xs: "1.8rem", md: "3.5rem" }, mb: 2, letterSpacing: 1 }}>
            Verificación de Árbitros Estudiantiles
          </Typography>
          <Typography variant="body1" sx={{ color: "#94A3B8", fontWeight: 400, maxWidth: "600px", mx: "auto", px: 2 }}>
            Portal oficial de validación de identidad y vigencia de la Comisión de Árbitros - IESPP Arco Iris.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5, position: "relative", zIndex: 3 }}>
        
        {/* CAJA DE BÚSQUEDA */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", mb: 6, bgcolor: "#ffffff", border: "1px solid #E2E8F0" }}>
          <Typography variant="h5" fontWeight="900" color="#0F172A" textAlign="center" mb={1}>
            Consultar Padrón
          </Typography>
          <Typography variant="body2" color="#64748B" textAlign="center" mb={4}>
            Ingrese el DNI, Código de Registro o Apellido del árbitro para verificar su estado.
          </Typography>

          <form onSubmit={handleBuscarManual}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Ej. 47496740, ARB-2026-001 "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><QrCodeScannerRoundedIcon sx={{ color: "#007BFF" }} /></InputAdornment>,
                  sx: { borderRadius: "16px", bgcolor: "#F8FAFC", fontSize: { xs: "1rem", md: "1.1rem" } }
                }}
              />
              <Button
                type="submit" variant="contained" size="large" startIcon={<SearchRoundedIcon />} disabled={!inputValue.trim()}
                sx={{
                  bgcolor: "#003366", color: "#fff", borderRadius: "16px", px: 4, py: 1.5, fontWeight: "bold", 
                  textTransform: "none", minWidth: { sm: "160px" }, width: { xs: "100%", sm: "auto" },
                  boxShadow: "0 8px 16px rgba(0, 51, 102, 0.2)", "&:hover": { bgcolor: "#001F3F", transform: "translateY(-2px)" }, transition: "all 0.2s"
                }}
              >
                Buscar
              </Button>
            </Box>
          </form>

          {busquedaRealizada && (
            <Button onClick={handleLimpiar} sx={{ mt: 3, color: "#64748B", textTransform: "none", mx: "auto", display: "flex", fontWeight: "bold", borderRadius: "10px", "&:hover": { bgcolor: "#F1F5F9", color: "#0F172A" } }}>
              Limpiar y hacer nueva búsqueda
            </Button>
          )}
        </Paper>

        {/* RESULTADOS DE LA BÚSQUEDA */}
        {busquedaRealizada && (
          <Box data-aos="fade-up">
            
            {/* ESTADO: NO ENCONTRADO */}
            {resultados.length === 0 && (
              <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: "24px", border: "2px solid #FECACA", bgcolor: "#FEF2F2", textAlign: "center", boxShadow: "0 10px 30px rgba(220, 38, 38, 0.1)" }}>
                <GppBadRoundedIcon sx={{ fontSize: 80, color: "#DC2626", mb: 2 }} />
                <Typography variant="h4" fontWeight="900" color="#991B1B" mb={2} sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}>
                  Registro No Encontrado
                </Typography>
                <Typography variant="body1" color="#B91C1C" mb={4} px={{ xs: 0, md: 4 }}>
                  El dato ingresado <strong>no coincide</strong> con ningún árbitro en nuestro padrón oficial.
                </Typography>
                <Chip icon={<WarningAmberRoundedIcon />} label="ALERTA DE SEGURIDAD" sx={{ fontWeight: "900", bgcolor: "#DC2626", color: "#fff", px: 2, py: 2.5, fontSize: "0.9rem", borderRadius: "12px" }} />
              </Paper>
            )}

            {/* ESTADO: ENCONTRADO */}
            {resultados.length > 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                
                {resultados.length > 1 && (
                  <Typography variant="body2" fontWeight="bold" color="#64748B" textAlign="center" bgcolor="#E2E8F0" py={1} borderRadius="8px" width="fit-content" px={3}>
                    Se encontraron {resultados.length} resultados.
                  </Typography>
                )}

                {resultados.map((resultado) => (
                  <Paper 
                    key={resultado.dni} 
                    elevation={0} 
                    sx={{ 
                      borderRadius: "24px", 
                      overflow: "hidden", 
                      border: "1px solid #E2E8F0", 
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)", 
                      bgcolor: "#fff", 
                      position: "relative",
                      maxWidth: { xs: "420px", md: "100%" }, 
                      width: "100%" 
                    }}
                  >
                    
                    {/* ENCABEZADO INSTITUCIONAL */}
                    <Box sx={{ bgcolor: "#001F3F", py: 1.5, px: 3, textAlign: "center" }}>
                      <Typography variant="caption" color="#94A3B8" fontWeight="bold" letterSpacing={1.5} sx={{ fontSize: { xs: "0.65rem", md: "0.75rem" } }}>
                        IESPP ARCO IRIS - COMISIÓN DE ÁRBITROS
                      </Typography>
                    </Box>

                    {/* BARRA DE ESTADO */}
                    <Box sx={{ bgcolor: resultado.estado === "ACTIVO" ? "#10B981" : "#EF4444", py: 1.5, px: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 1, color: "#fff", textAlign: "center" }}>
                      {resultado.estado === "ACTIVO" ? <VerifiedUserRoundedIcon fontSize="small" /> : <GppBadRoundedIcon fontSize="small" />}
                      <Typography variant="subtitle1" fontWeight="900" letterSpacing={1} sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                        {resultado.estado === "ACTIVO" ? "AUTORIZACIÓN VIGENTE" : "CREDENCIAL VENCIDA"}
                      </Typography>
                    </Box>

                    {/* CUERPO DEL CARNET */}
                    <Box sx={{ 
                      display: "flex", 
                      flexDirection: { xs: "column", md: "row" }, 
                      alignItems: { xs: "center", md: "stretch" }, 
                      p: { xs: 3, md: 4 }, 
                      gap: { xs: 3, md: 5 } 
                    }}>
                      
                      {/* Lado Izquierdo (PC) / Arriba (Móvil): Foto y Rango */}
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: { md: "220px" } }}>
                        <Box
                          component="img" 
                          src={getLocalArbitroPhoto(resultado.dni)} 
                          onError={(e) => {
                            e.target.onError = null; 
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(resultado.nombre)}&background=F8FAFC&color=003366&size=256&font-size=0.33&bold=true`;
                          }}
                          alt={resultado.nombre}
                          sx={{ 
                            width: 160, 
                            height: 160, 
                            borderRadius: "20px", 
                            objectFit: "cover", 
                            objectPosition: "top center", 
                            boxShadow: "0 10px 20px rgba(0,0,0,0.15)", 
                            mb: 2, 
                            border: "4px solid #F1F5F9" 
                          }}
                        />
                        <Chip 
                          icon={<WorkspacePremiumRoundedIcon style={{ color: "#B45309" }} />}
                          label={resultado.rango} 
                          sx={{ fontWeight: "900", fontSize: "0.75rem", bgcolor: "#FEF3C7", color: "#92400E", py: 2, px: 1, textAlign: "center", height: "auto", border: "1px solid #FDE68A", "& .MuiChip-label": { display: "block", whiteSpace: "normal" } }} 
                        />
                      </Box>

                      {/* Lado Derecho (PC) / Abajo (Móvil): Datos */}
                      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                        
                        {/* Nombres */}
                        <Box textAlign={{ xs: "center", md: "left" }} mb={3}>
                          <Typography variant="overline" color="#64748B" fontWeight="800" sx={{ display: "block", lineHeight: 1.2, mb: 0.5 }}>
                            Apellidos y Nombres
                          </Typography>
                          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center", gap: 1 }}>
                            <AssignmentIndRoundedIcon sx={{ color: "#007BFF", fontSize: { xs: 28, md: 32 }, display: { xs: "none", md: "block" } }} />
                            <Typography variant="h5" fontWeight="900" color="#0F172A" lineHeight={1.2} sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" } }}>
                              {resultado.nombre}
                            </Typography>
                          </Box>
                        </Box>

                        <Grid container spacing={2}>
                          
                          {/* DNI: 100% ancho y centrado en celular (xs=12), izquierda en PC (md=6) */}
                          <Grid item xs={12} md={6}>
                            <Box sx={{ 
                              bgcolor: "#F8FAFC", p: 2, borderRadius: "12px", border: "1px solid #E2E8F0", 
                              display: "flex", flexDirection: "column", 
                              alignItems: { xs: "center", md: "flex-start" }, 
                              textAlign: { xs: "center", md: "left" }
                            }}>
                              <Typography variant="caption" color="#64748B" fontWeight="bold" display="flex" alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }} gap={0.5} mb={0.5} sx={{ letterSpacing: 0.5 }}>
                                <FingerprintRoundedIcon fontSize="small" sx={{ display: { xs: "none", md: "block" } }}/> DOCUMENTO DNI
                              </Typography>
                              <Typography variant="body1" fontWeight="900" color="#1E293B" sx={{ fontSize: "1.1rem" }}>
                                {resultado.dni}
                              </Typography>
                            </Box>
                          </Grid>
                          
                          {/* CÓDIGO: 100% ancho y centrado en celular (xs=12), izquierda en PC (md=6) */}
                          <Grid item xs={12} md={6}>
                            <Box sx={{ 
                              bgcolor: "#EFF6FF", p: 2, borderRadius: "12px", border: "1px solid #BFDBFE", 
                              display: "flex", flexDirection: "column", 
                              alignItems: { xs: "center", md: "flex-start" }, 
                              textAlign: { xs: "center", md: "left" }
                            }}>
                              <Typography variant="caption" color="#3B82F6" fontWeight="bold" display="flex" alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }} gap={0.5} mb={0.5} sx={{ letterSpacing: 0.5 }}>
                                <BadgeRoundedIcon fontSize="small" sx={{ display: { xs: "none", md: "block" } }}/> CÓDIGO DE REGISTRO
                              </Typography>
                              <Typography variant="body1" fontWeight="900" color="#1D4ED8" sx={{ fontSize: "1.1rem" }}>
                                {resultado.codigo}
                              </Typography>
                            </Box>
                          </Grid>

                        </Grid>
                      </Box>
                    </Box>

                    {/* PIE DE PÁGINA */}
                    <Box sx={{ 
                      bgcolor: "#F8FAFC", 
                      p: { xs: 3, md: 3 }, 
                      borderTop: "1px solid #E2E8F0", 
                      display: "flex", 
                      flexDirection: { xs: "column", md: "row" }, 
                      justifyContent: { xs: "center", md: "space-between" }, 
                      alignItems: "center", 
                      gap: { xs: 2, md: 0 } 
                    }}>
                      
                      {/* Fechas */}
                      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center", width: { xs: "100%", md: "auto" }, gap: { xs: 4, md: 5 } }}>
                        <Box textAlign={{ xs: "center", md: "left" }}>
                          <Typography variant="caption" color="#94A3B8" fontWeight="bold" display="block" sx={{ fontSize: "0.7rem" }}>EMISIÓN</Typography>
                          <Typography variant="body2" fontWeight="700" color="#475569" sx={{ fontSize: "0.95rem" }}>{resultado.fechaEmision}</Typography>
                        </Box>
                        
                        <Divider orientation="vertical" flexItem sx={{ borderColor: "#CBD5E1" }} />
                        
                        <Box textAlign={{ xs: "center", md: "left" }}>
                          <Typography variant="caption" color="#94A3B8" fontWeight="bold" display="block" sx={{ fontSize: "0.7rem" }}>VENCIMIENTO</Typography>
                          <Typography variant="body2" fontWeight="900" color={resultado.estado === "ACTIVO" ? "#10B981" : "#EF4444"} sx={{ fontSize: "0.95rem" }}>{resultado.fechaVencimiento}</Typography>
                        </Box>
                      </Box>

                      {/* Separador solo en celular */}
                      <Divider sx={{ display: { xs: "block", md: "none" }, width: "100%", borderStyle: "dashed", borderColor: "#CBD5E1" }} />

                      {/* Sello */}
                      <Box sx={{ textAlign: { xs: "center", md: "right" }, borderLeft: { xs: "none", md: "2px solid #E2E8F0" }, pl: { xs: 0, md: 3 }, width: { xs: "100%", md: "auto" } }}>
                        <Typography variant="caption" color="#007BFF" fontWeight="900" display="block" sx={{ fontSize: "0.7rem", letterSpacing: 0.5 }}>
                          CONSULTA VERIFICADA EL:
                        </Typography>
                        <Typography variant="caption" color="#64748B" fontWeight="700" sx={{ fontSize: "0.85rem" }}>
                          {fechaConsulta}
                        </Typography>
                      </Box>

                    </Box>

                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}