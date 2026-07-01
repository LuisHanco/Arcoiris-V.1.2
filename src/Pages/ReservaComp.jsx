import React, { useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";

// Paleta
const COLORS = {
  bg: "#f1f5f9", // Fondo principal
  surface: "#ffffff", // Espacios en blanco
  text: "#003366", // Texto azul oscuro
  box: "#003366", // Recuadros
  highlight: "#007bff", // Resaltados
  border: "#00336633", // Bordes sutiles
};

// Mock
const reservasDB = [
  {
    id: 1,
    fecha: "2026-06-05",
    inicio: "08:00",
    fin: "10:00",
    docente: "Raul Díaz Castro",
  },
  {
    id: 2,
    fecha: "2026-06-03",
    inicio: "14:00",
    fin: "16:00",
    docente: "María Zavaleta",
  },
];

// Grid
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const HORAS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

// Utils
const getFechasSemana = (fechaBase) => {
  const diaSemana = fechaBase.getDay();
  const lunes = new Date(fechaBase);
  lunes.setDate(fechaBase.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1));

  return DIAS.map((_, i) => {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    return d.toISOString().split("T")[0];
  });
};

export default function ReservaComp() {
  const [fechaActual] = useState(new Date("2026-06-05"));
  const fechasSemana = getFechasSemana(fechaActual);

  const checkReserva = (fecha, hora) => {
    return reservasDB.find(
      (r) => r.fecha === fecha && r.inicio <= hora && r.fin > hora,
    );
  };

  return (
    <Box
      sx={{
        bgcolor: COLORS.bg,
        minHeight: "100vh",
        pt: { xs: 10, md: 14 },
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Encabezado */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: COLORS.surface,
                borderRadius: "24px",
                color: COLORS.text,
                height: "100%",
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Calendario de Reservas
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Visualización de horarios de clases registrados.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: COLORS.surface,
                borderRadius: "24px",
                color: COLORS.text,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Typography variant="overline" sx={{ opacity: 0.8 }}>
                Semana Actual
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={COLORS.highlight}
              >
                {fechasSemana[0]} / {fechasSemana[4]}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Calendario */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: COLORS.surface,
            borderRadius: "24px",
            overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <Box sx={{ display: "flex", overflowX: "auto" }}>
            {/* Columna Horas */}
            <Box
              sx={{
                minWidth: "80px",
                borderRight: `1px solid ${COLORS.border}`,
                bgcolor: COLORS.bg,
              }}
            >
              <Box
                sx={{
                  height: "60px",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              />
              {HORAS.map((hora) => (
                <Box
                  key={hora}
                  sx={{
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    opacity: 0.8,
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {hora}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Columnas Días */}
            {DIAS.map((dia, index) => {
              const fechaDia = fechasSemana[index];
              return (
                <Box
                  key={dia}
                  sx={{
                    flex: 1,
                    minWidth: "150px",
                    borderRight: `1px solid ${COLORS.border}`,
                  }}
                >
                  <Box
                    sx={{
                      height: "60px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: `1px solid ${COLORS.border}`,
                      bgcolor: COLORS.bg,
                      color: COLORS.text,
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      {dia}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {fechaDia}
                    </Typography>
                  </Box>

                  {/* Celdas */}
                  {HORAS.map((hora) => {
                    const reserva = checkReserva(fechaDia, hora);
                    return (
                      <Box
                        key={`${fechaDia}-${hora}`}
                        sx={{
                          height: "100px",
                          borderBottom: `1px solid ${COLORS.border}`,
                          p: 1,
                        }}
                      >
                        {reserva && (
                          <Paper
                            elevation={0}
                            sx={{
                              height: "100%",
                              p: 1.5,
                              bgcolor: COLORS.box,
                              borderRadius: "8px",
                              borderLeft: `4px solid ${COLORS.highlight}`,
                              color: COLORS.bg,
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ opacity: 0.8 }}
                            >
                              {reserva.inicio} - {reserva.fin}
                            </Typography>
                            <Typography
                              variant="body2"
                              fontWeight="bold"
                              noWrap
                            >
                              {reserva.docente}
                            </Typography>
                          </Paper>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
