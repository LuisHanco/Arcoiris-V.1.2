import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Slider,
  Collapse,
  Chip,
  IconButton,
  Fade,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Grid from "@mui/material/Grid";

// Iconos
const ChevronLeft = () => (
  <span style={{ fontSize: "20px", fontWeight: "bold" }}>{"<"}</span>
);
const ChevronRight = () => (
  <span style={{ fontSize: "20px", fontWeight: "bold" }}>{">"}</span>
);
const DeleteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

// Paleta Corporativa
const COLORS = {
  bg: "#f1f5f9",
  surface: "#ffffff",
  text: "#003366",
  box: "#003366", // Azul Oscuro (Ahora usado para focus de hora)
  highlight: "#0288D1",
  highlightGradient: "linear-gradient(90deg, #003366 0%, #0288D1 100%)",
  border: "#00336622",
  shadow: "0px 14px 40px rgba(0, 51, 102, 0.12)",
  danger: "#d32f2f",
  disabled: "rgba(0, 51, 102, 0.08)",
};

// Data Mock
const initialReservasDB = [
  {
    id: 1,
    fecha: "2026-06-05",
    inicio: "08:00",
    fin: "10:00",
    docente: "Raul Díaz Castro",
    ciclo: "III-A",
  },
  {
    id: 2,
    fecha: "2026-06-05",
    inicio: "10:00",
    fin: "12:00",
    docente: "Luis Gómez",
    ciclo: "VIII-C",
  },
];

const DIAS_SEMANA = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const NOMBRES_DIAS_LABORALES = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
];
const HORAS_QUICK = ["08:00", "10:00", "14:00", "16:00"];

// Marcas estilo regla para el Slider (de 0.5h a 8h)
const SLIDER_MARKS = Array.from({ length: 16 }).map((_, i) => ({
  value: 0.5 + i * 0.5,
  label: i % 2 === 1 ? `${0.5 + i * 0.5}h` : "",
}));

export default function AdminReservaInteractivo() {
  const [reservas, setReservas] = useState(initialReservasDB);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 5, 1));
  const [selectedDate, setSelectedDate] = useState("2026-06-05");

  // Estados UI y Formulario
  const [showForm, setShowForm] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false); // Switch State
  const [formData, setFormData] = useState({
    docente: "",
    cicloSeccion: "",
    horaInicio: "08:00",
    horaFin: "10:00",
    duracion: 2,
  });

  // Estado Dialog Eliminar
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });

  // Utils Calendario
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay();

  const changeMonth = (offset) =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1),
    );

  const handleDayClick = (day) => {
    const formatDate = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(formatDate);
    setShowForm(false);
  };

  const reservasDelDia = useMemo(() => {
    return reservas
      .filter((r) => r.fecha === selectedDate)
      .sort((a, b) => a.inicio.localeCompare(b.inicio));
  }, [selectedDate, reservas]);

  const tieneReserva = (day) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return reservas.some((r) => r.fecha === dateStr);
  };

  // Manejadores Formulario
  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "cicloSeccion") value = value.toUpperCase();
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSliderChange = (e, newValue) =>
    setFormData({ ...formData, duracion: newValue });
  const handleQuickTime = (time) =>
    setFormData({ ...formData, horaInicio: time });

  // --- LÓGICA DE HORA NULA (13:00 - 14:00) ---
  const calcularHoraFin = (inicio, duracion) => {
    if (!inicio) return "--:--";
    let [h, m] = inicio.split(":").map(Number);

    // Si empieza dentro de la hora de almuerzo, forzamos inicio a las 14:00 (lógica base)
    if (h === 13) {
      h = 14;
      m = 0;
    }

    let startMins = h * 60 + m;
    let endMins = startMins + duracion * 60;

    // Si atraviesa la hora de almuerzo (Empieza antes de las 13:00 y termina después de las 13:00)
    if (startMins < 13 * 60 && endMins > 13 * 60) {
      endMins += 60; // Se suma 1 hora de aplazamiento
    }

    const finH = Math.floor(endMins / 60) % 24;
    const finM = endMins % 60;
    return `${String(finH).padStart(2, "0")}:${String(finM).padStart(2, "0")}`;
  };

  const horaFinFinal = !isManualMode
    ? calcularHoraFin(formData.horaInicio, formData.duracion)
    : formData.horaFin;

  const handleConfirmarReserva = () => {
    if (!formData.docente || !formData.cicloSeccion) return;
    const nuevaReserva = {
      id: Date.now(),
      fecha: selectedDate,
      inicio: formData.horaInicio,
      fin: horaFinFinal,
      docente: formData.docente,
      ciclo: formData.cicloSeccion,
    };
    setReservas([...reservas, nuevaReserva]);
    setFormData({ ...formData, docente: "", cicloSeccion: "" });
    setShowForm(false);
  };

  // Eliminación
  const confirmarEliminacion = () => {
    setReservas(reservas.filter((r) => r.id !== deleteDialog.id));
    setDeleteDialog({ open: false, id: null });
  };

  // Vista Semanal
  const fechasSemanaActual = useMemo(() => {
    const [y, m, d] = selectedDate.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    const day = dateObj.getDay() || 7;
    dateObj.setDate(dateObj.getDate() - (day - 1));
    return NOMBRES_DIAS_LABORALES.map((_, i) => {
      const iterDate = new Date(dateObj);
      iterDate.setDate(dateObj.getDate() + i);
      return iterDate.toISOString().split("T")[0];
    });
  }, [selectedDate]);

  // Estilos
  const inputStyles = {
    "& .MuiInputLabel-root": { color: COLORS.text, opacity: 0.8 },
    "& .MuiOutlinedInput-root": {
      color: COLORS.text,
      transition: "all 0.3s ease",
      "& fieldset": { borderColor: COLORS.border, borderRadius: "12px" },
      "&:hover fieldset": { borderColor: COLORS.highlight },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.highlight,
        borderWidth: "2px",
      },
    },
  };

  // Sombreado AZUL OSCURO para los selectores de hora
  const timeInputStyles = {
    ...inputStyles,
    "& .MuiOutlinedInput-root": {
      ...inputStyles["& .MuiOutlinedInput-root"],
      "&.Mui-focused fieldset": {
        borderColor: COLORS.box,
        borderWidth: "2px",
        boxShadow: `0 0 0 4px ${COLORS.box}33`,
      },
    },
  };

  const paperStyles = {
    bgcolor: COLORS.surface,
    borderRadius: "24px",
    border: `1px solid ${COLORS.border}`,
    boxShadow: COLORS.shadow,
    overflow: "hidden",
  };

  return (
    <Box sx={{ bgcolor: COLORS.bg, minHeight: "100vh", pb: 10 }}>
      {/* Hero Banner */}
      <Box
        sx={{
          pt: { xs: 12, md: 14 },
          pb: 6,
          bgcolor: COLORS.box,
          backgroundImage: "linear-gradient(135deg, #003366 0%, #01579B 100%)",
          color: COLORS.surface,
          boxShadow: "0px 10px 30px rgba(0, 51, 102, 0.3)",
          mb: 6,
          borderRadius: "0 0 40px 40px",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={1}
            sx={{ letterSpacing: "-0.5px" }}
          >
            Reserva de Centro de Cómputo
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: "regular" }}>
            Panel de Administración • Gestión y Asignación de Horarios
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* COLUMNA IZQUIERDA: Calendario y Lista */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper elevation={0} sx={{ ...paperStyles, p: 3, mb: 4 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <IconButton
                  onClick={() => changeMonth(-1)}
                  sx={{ color: COLORS.text }}
                >
                  <ChevronLeft />
                </IconButton>
                <Typography variant="h6" fontWeight="bold" color={COLORS.text}>
                  {currentMonth
                    .toLocaleString("es-ES", { month: "long", year: "numeric" })
                    .toUpperCase()}
                </Typography>
                <IconButton
                  onClick={() => changeMonth(1)}
                  sx={{ color: COLORS.text }}
                >
                  <ChevronRight />
                </IconButton>
              </Box>

              <Grid container spacing={1}>
                {DIAS_SEMANA.map((dia) => (
                  <Grid size={{ xs: 12 / 7 }} key={dia} textAlign="center">
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      sx={{ opacity: 0.6, color: COLORS.text }}
                    >
                      {dia}
                    </Typography>
                  </Grid>
                ))}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <Grid size={{ xs: 12 / 7 }} key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                  const isSelected = dateStr === selectedDate;
                  const hasDots = tieneReserva(day);

                  return (
                    <Grid size={{ xs: 12 / 7 }} key={day} sx={{ p: 0.5 }}>
                      <Box
                        onClick={() => handleDayClick(day)}
                        sx={{
                          height: 42,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "12px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          bgcolor: isSelected ? COLORS.box : "transparent",
                          color: isSelected ? COLORS.surface : COLORS.text,
                          boxShadow: isSelected
                            ? "0px 4px 10px rgba(0, 51, 102, 0.3)"
                            : "none",
                          "&:hover": {
                            bgcolor: isSelected
                              ? COLORS.box
                              : "rgba(0, 51, 102, 0.05)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight={isSelected ? "bold" : "regular"}
                        >
                          {day}
                        </Typography>
                        {hasDots && (
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor: isSelected
                                ? COLORS.highlight
                                : COLORS.text,
                              mt: 0.5,
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                ...paperStyles,
                p: 3,
                display: "flex",
                flexDirection: "column",
                minHeight: "350px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Typography variant="h6" fontWeight="bold" color={COLORS.text}>
                  Reservas del día {selectedDate.split("-")[2]}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setShowForm(!showForm)}
                  sx={{
                    color: COLORS.box,
                    borderColor: COLORS.box,
                    borderRadius: "8px",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: `${COLORS.box}11` },
                  }}
                >
                  {showForm ? "Cerrar" : "+ Nueva"}
                </Button>
              </Box>

              {reservasDelDia.length === 0 ? (
                <Box
                  display="flex"
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.6, color: COLORS.text }}
                  >
                    Día libre. No hay reservas.
                  </Typography>
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                  {reservasDelDia.map((r) => (
                    <Paper
                      key={r.id}
                      elevation={0}
                      sx={{
                        p: 2.5,
                        bgcolor: COLORS.bg,
                        borderLeft: `5px solid ${COLORS.box}`,
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "transform 0.2s ease",
                        "&:hover": { transform: "translateX(4px)" },
                      }}
                    >
                      <Box display="flex" flexDirection="column" gap={0.5}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: COLORS.box,
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                          }}
                        >
                          {r.inicio} - {r.fin}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          color={COLORS.text}
                          sx={{ lineHeight: 1.2 }}
                        >
                          {r.docente}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ opacity: 0.7, color: COLORS.text, mt: 0.5 }}
                        >
                          Ciclo/Sección: {r.ciclo}
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() =>
                          setDeleteDialog({ open: true, id: r.id })
                        }
                        sx={{
                          color: COLORS.danger,
                          bgcolor: `${COLORS.danger}11`,
                          "&:hover": { bgcolor: `${COLORS.danger}22` },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Paper>
                  ))}
                </Box>
              )}
            </Paper>
          </Grid>

          {/* COLUMNA DERECHA: Formulario Dinámico y Vista Previa */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Collapse in={showForm} unmountOnExit>
              <Fade in={showForm}>
                <Paper
                  elevation={0}
                  sx={{ ...paperStyles, p: { xs: 3, md: 5 }, mb: 4 }}
                >
                  <Typography
                    variant="h5"
                    color={COLORS.box}
                    fontWeight="bold"
                    mb={1}
                  >
                    Registrar Nueva Reserva
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.7, color: COLORS.text, mb: 4 }}
                  >
                    Agendando para la fecha: <strong>{selectedDate}</strong>
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        label="Ciclo y Sección"
                        name="cicloSeccion"
                        placeholder="Ej. VIII-C"
                        value={formData.cicloSeccion}
                        onChange={handleChange}
                        sx={inputStyles}
                        helperText="Se convertirá a mayúsculas"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <TextField
                        fullWidth
                        label="Nombre del Docente"
                        name="docente"
                        placeholder="Ej. Raul Díaz Castro"
                        value={formData.docente}
                        onChange={handleChange}
                        sx={inputStyles}
                      />
                    </Grid>

                    {/* Selector de Hora Inicial */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        sx={{
                          color: COLORS.text,
                          ml: 1,
                          mb: 1,
                          display: "block",
                        }}
                      >
                        Hora de Inicio
                      </Typography>
                      <Box display="flex" gap={2} alignItems="center">
                        <TextField
                          type="time"
                          name="horaInicio"
                          value={formData.horaInicio}
                          onChange={handleChange}
                          sx={{ ...timeInputStyles, width: "140px" }}
                        />
                        <Box display="flex" gap={1} flexWrap="wrap">
                          {HORAS_QUICK.map((time) => (
                            <Chip
                              key={time}
                              label={time}
                              clickable
                              onClick={() => handleQuickTime(time)}
                              sx={{
                                bgcolor:
                                  formData.horaInicio === time
                                    ? COLORS.box
                                    : COLORS.bg,
                                color:
                                  formData.horaInicio === time
                                    ? COLORS.surface
                                    : COLORS.text,
                                fontWeight: "bold",
                                "&:hover": {
                                  bgcolor:
                                    formData.horaInicio === time
                                      ? COLORS.box
                                      : COLORS.border,
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Grid>

                    {/* Interruptor (Switch) y Finalización */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={1}
                        px={1}
                      >
                        <Typography
                          variant="caption"
                          fontWeight="bold"
                          sx={{ color: COLORS.text }}
                        >
                          Fin de Reserva
                        </Typography>

                        {/* Control de Modo (Switch) */}
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: !isManualMode
                                ? COLORS.box
                                : "text.secondary",
                              fontWeight: !isManualMode ? "bold" : "normal",
                            }}
                          >
                            Duración
                          </Typography>
                          <Switch
                            size="small"
                            checked={isManualMode}
                            onChange={(e) => setIsManualMode(e.target.checked)}
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: COLORS.box,
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                { backgroundColor: COLORS.box },
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: isManualMode
                                ? COLORS.box
                                : "text.secondary",
                              fontWeight: isManualMode ? "bold" : "normal",
                            }}
                          >
                            Manual
                          </Typography>
                        </Box>
                      </Box>

                      {!isManualMode ? (
                        <Box sx={{ px: 2, pt: 1 }}>
                          <Typography
                            variant="caption"
                            fontWeight="bold"
                            sx={{ color: COLORS.box, mb: 3, display: "block" }}
                          >
                            Duración: {formData.duracion} hr(s) → Fin calculado:{" "}
                            {horaFinFinal}
                          </Typography>
                          <Slider
                            value={formData.duracion}
                            onChange={handleSliderChange}
                            min={0.5}
                            max={8}
                            step={0.5}
                            marks={SLIDER_MARKS}
                            valueLabelDisplay="auto"
                            sx={{
                              color: COLORS.box,
                              height: 8,
                              "& .MuiSlider-track": {
                                border: "none",
                                background: COLORS.highlightGradient,
                              },
                              "& .MuiSlider-thumb": {
                                height: 28,
                                width: 28,
                                backgroundColor: COLORS.surface,
                                border: `3px solid ${COLORS.box}`,
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                                "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
                                  {
                                    boxShadow: `0px 0px 0px 8px ${COLORS.box}33`,
                                    transform: "scale(1.1)",
                                  },
                              },
                              // Estilos tipo Regla
                              "& .MuiSlider-mark": {
                                backgroundColor: COLORS.box,
                                width: 2,
                                height: 6,
                                opacity: 0.3,
                              },
                              "& .MuiSlider-mark[data-index]:nth-of-type(even)":
                                { height: 10, opacity: 0.8 },
                              "& .MuiSlider-markLabel": {
                                fontSize: "0.65rem",
                                fontWeight: "bold",
                                top: 30,
                              },
                            }}
                          />
                        </Box>
                      ) : (
                        <Box sx={{ px: 1, pt: 1 }}>
                          <TextField
                            fullWidth
                            type="time"
                            name="horaFin"
                            value={formData.horaFin}
                            onChange={handleChange}
                            sx={timeInputStyles}
                          />
                        </Box>
                      )}
                    </Grid>
                  </Grid>

                  <Box display="flex" justifyContent="flex-end" mt={5}>
                    <Button
                      variant="contained"
                      onClick={handleConfirmarReserva}
                      disabled={!formData.docente || !formData.cicloSeccion}
                      sx={{
                        bgcolor: COLORS.box,
                        color: COLORS.surface,
                        px: 4,
                        py: 1.5,
                        borderRadius: "12px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: COLORS.highlight,
                          transform: "translateY(-3px)",
                          boxShadow: `0px 10px 20px ${COLORS.box}66`,
                        },
                        "&:disabled": { bgcolor: COLORS.border },
                      }}
                    >
                      Confirmar Reserva
                    </Button>
                  </Box>
                </Paper>
              </Fade>
            </Collapse>

            {/* Vista Previa Semanal */}
            <Paper
              elevation={0}
              sx={{
                ...paperStyles,
                bgcolor: COLORS.shadow,
                color: COLORS.text,
                p: { xs: 2, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                color={COLORS.box}
              >
                Vista Semanal en Tiempo Real
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
                Semana del {fechasSemanaActual[0]}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  overflowX: "auto",
                  pb: 2,
                  "&::-webkit-scrollbar": { height: "8px" },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: COLORS.border,
                    borderRadius: "4px",
                  },
                }}
              >
                {NOMBRES_DIAS_LABORALES.map((dia, idx) => {
                  const fechaColumna = fechasSemanaActual[idx];
                  const reservasColumna = reservas.filter(
                    (r) => r.fecha === fechaColumna,
                  );

                  return (
                    <Box
                      key={dia}
                      sx={{
                        flex: 1,
                        minWidth: "140px",
                        bgcolor: COLORS.bg,
                        borderRadius: "16px",
                        p: 1.5,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        display="block"
                        textAlign="center"
                        mb={2}
                        sx={{ letterSpacing: 1 }}
                      >
                        {dia.toUpperCase()}
                      </Typography>

                      <Box
                        sx={{
                          height: "240px",
                          position: "relative",
                          borderTop: `1px solid ${COLORS.border}`,
                        }}
                      >
                        {/* Líneas Base (8am a 6pm = 10 horas) */}
                        {[0, 25, 50, 75, 100].map((p) => (
                          <Box
                            key={p}
                            sx={{
                              position: "absolute",
                              top: `${p}%`,
                              width: "100%",
                              borderTop: `1px dashed ${COLORS.border}`,
                            }}
                          />
                        ))}

                        {/* Franja de Almuerzo (13:00 a 14:00 -> del 50% al 60% de top) */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            height: "10%",
                            width: "100%",
                            zIndex: 1,
                            backgroundColor: COLORS.disabled,
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 8px)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "0.55rem",
                              fontWeight: "bold",
                              opacity: 0.5,
                              letterSpacing: 1,
                            }}
                          >
                            ALMUERZO
                          </Typography>
                        </Box>

                        {/* Dibujo de Bloques */}
                        {reservasColumna.map((r) => {
                          const [sH, sM] = r.inicio.split(":").map(Number);
                          const [eH, eM] = r.fin.split(":").map(Number);

                          const startMins = sH * 60 + sM;
                          const endMins = eH * 60 + eM;
                          const lunchStart = 13 * 60;
                          const lunchEnd = 14 * 60;

                          const blocksToDraw = [];

                          // Lógica de división visual si cruza el almuerzo
                          if (startMins < lunchStart && endMins > lunchEnd) {
                            blocksToDraw.push({ s: startMins, e: lunchStart });
                            blocksToDraw.push({ s: lunchEnd, e: endMins });
                          } else if (
                            startMins >= lunchStart &&
                            startMins < lunchEnd
                          ) {
                            blocksToDraw.push({
                              s: lunchEnd,
                              e: Math.max(lunchEnd, endMins),
                            });
                          } else if (
                            endMins > lunchStart &&
                            endMins <= lunchEnd
                          ) {
                            blocksToDraw.push({ s: startMins, e: lunchStart });
                          } else {
                            blocksToDraw.push({ s: startMins, e: endMins });
                          }

                          return blocksToDraw.map((b, bIdx) => {
                            const startPercent = Math.max(
                              0,
                              ((b.s / 60 - 8) / 10) * 100,
                            );
                            const heightPercent = Math.min(
                              100 - startPercent,
                              ((b.e - b.s) / 60 / 10) * 100,
                            );

                            return (
                              <Fade in={true} key={`${r.id}-${bIdx}`}>
                                <Box
                                  sx={{
                                    position: "absolute",
                                    top: `${startPercent}%`,
                                    height: `${heightPercent}%`,
                                    width: "100%",
                                    bgcolor: COLORS.box,
                                    borderRadius: "8px",
                                    p: 0.75,
                                    overflow: "hidden",
                                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    color: COLORS.surface,
                                    zIndex: 2,
                                    borderLeft: `3px solid ${COLORS.highlight}`,
                                  }}
                                >
                                  {bIdx === 0 && (
                                    <>
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          fontSize: "0.6rem",
                                          display: "block",
                                          opacity: 0.9,
                                          lineHeight: 1,
                                        }}
                                      >
                                        {r.inicio}-{r.fin}
                                      </Typography>
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          fontSize: "0.7rem",
                                          fontWeight: "bold",
                                          lineHeight: 1.1,
                                          mt: 0.2,
                                        }}
                                      >
                                        {r.ciclo}
                                      </Typography>
                                    </>
                                  )}
                                </Box>
                              </Fade>
                            );
                          });
                        })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Dialog Confirmar Eliminación */}
      <Dialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, id: null })}
        PaperProps={{ sx: { borderRadius: "20px", p: 1 } }}
      >
        <DialogTitle sx={{ fontWeight: "bold", color: COLORS.box }}>
          Eliminar Reserva
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: COLORS.text, opacity: 0.8 }}>
            ¿Estás seguro de que deseas eliminar esta reserva? Esta acción
            liberará el horario de manera permanente.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setDeleteDialog({ open: false, id: null })}
            sx={{ color: COLORS.text, fontWeight: "bold" }}
          >
            Cancelar
          </Button>
          <Button
            onClick={confirmarEliminacion}
            variant="contained"
            sx={{
              bgcolor: COLORS.danger,
              "&:hover": { bgcolor: "#b71c1c" },
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            Sí, Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
