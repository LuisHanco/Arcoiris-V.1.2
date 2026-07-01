import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapIcon from "@mui/icons-material/Map";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    const { nombre, correo, telefono, asunto, mensaje } = formData;

    if (!nombre || !correo || !asunto || !mensaje) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }

    const textoMensaje = `*NUEVO MENSAJE DE CONTACTO (WEB)*\n\n*Nombre:* ${nombre}\n*Correo:* ${correo}\n*Teléfono:* ${
      telefono || "No proporcionado"
    }\n*Asunto:* ${asunto}\n*Mensaje:*\n${mensaje}`;

    const numeroWhatsApp = "51966425975";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      textoMensaje,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden", pb: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "55vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516387622842-87db70912185?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-down" sx={{ textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#80bdff",
                fontWeight: 900,
                letterSpacing: { xs: 2, md: 3 },
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              }}
            >
              ATENCIÓN AL ESTUDIANTE
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                mb: 2,
                px: { xs: 2, md: 0 },
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                px: { xs: 2, md: 0 },
              }}
            >
              Estamos aquí para escucharte y resolver tus dudas de manera rápida
              y eficiente.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 4, md: 6 }, position: "relative", zIndex: 3 }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: { xs: "16px", md: "24px" },
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0, 51, 102, 0.15)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            data-aos="fade-right"
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              bgcolor: "#003366",
              color: "#ffffff",
              p: { xs: 3, sm: 5, md: 6 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                bgcolor: "rgba(0, 123, 255, 0.1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: -50,
                width: 250,
                height: 250,
                borderRadius: "50%",
                bgcolor: "rgba(0, 123, 255, 0.1)",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h4"
                fontWeight="900"
                mb={1}
                sx={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
              >
                Nuestra Información
              </Typography>
              <Typography
                variant="body2"
                color="#80bdff"
                mb={5}
                sx={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
              >
                Visítanos o comunícate a través de nuestros canales oficiales.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOnIcon
                    sx={{ color: "#007BFF", fontSize: { xs: 26, md: 30 } }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                      sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                    >
                      Dirección
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      mb={1}
                      sx={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                    >
                      Urb. Tenería IV, Fracción II - Paradero Enaco,
                      San Sebastian, Cusco.
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        color: "#007BFF",
                        p: 0,
                        minWidth: "auto",
                        fontWeight: "bold",
                        "&:hover": { color: "#ffffff", bgcolor: "transparent" },
                      }}
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/asdBtSkJ7CJ3VhTz5",
                          "_blank",
                        )
                      }
                    >
                      Ver en Google Maps
                    </Button>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <PhoneInTalkIcon
                    sx={{ color: "#007BFF", fontSize: { xs: 26, md: 30 } }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                      sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                    >
                      Teléfono
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      sx={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                    >
                      +51 966 425 975{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (Informes)
                      </Typography>
                    </Typography>
                    {/*
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      sx={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                    >
                      +51 952 423 842{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (Mesa de Partes)
                      </Typography>
                    </Typography>
                    */}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <EmailIcon
                    sx={{ color: "#007BFF", fontSize: { xs: 26, md: 30 } }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                      sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                    >
                      Correo Electrónico
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      sx={{
                        fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        wordBreak: "break-all",
                      }}
                    >
                      informes@arcoiris.edu.pe{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (General)
                      </Typography>
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <AccessTimeIcon
                    sx={{ color: "#007BFF", fontSize: { xs: 26, md: 30 } }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                      sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                    >
                      Horario de Atención
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      sx={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}
                    >
                      Lunes a Viernes:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.8)"
                      sx={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}
                    >
                      8:00 AM - 1:00 PM
                      <br />
                      2:00 PM - 5:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.1)",
                  my: { xs: 3, md: 4 },
                }}
              />

              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="#80bdff"
                  mb={2}
                >
                  Síguenos en Redes:
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/pedagogicoarcoiris/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        bgcolor: "#007BFF",
                        transform: "translateY(-5px) scale(1.1)",
                        boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                      },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://wa.me/51986249212"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        bgcolor: "#007BFF",
                        transform: "translateY(-5px) scale(1.1)",
                        boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                      },
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            data-aos="fade-left"
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 60%" },
              bgcolor: "#ffffff",
              p: { xs: 3, sm: 5, md: 8 },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              mb={1}
              sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              ¡Ponte en Contacto con Nosotros!
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={5}
              sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
            >
              Ya sea para información académica, trámites administrativos o
              cualquier consulta, estamos listos para asistirte. Envíanos un
              mensaje.
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Nombre Completo"
                    variant="outlined"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Correo Electrónico"
                    variant="outlined"
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Número de Teléfono (Opcional)"
                    variant="outlined"
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Asunto"
                    variant="outlined"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Tu Mensaje"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    onClick={handleWhatsAppSubmit}
                    sx={{
                      bgcolor: "#007BFF",
                      color: "#fff",
                      borderRadius: "30px",
                      px: { xs: 3, md: 5 },
                      py: 1.5,
                      width: { xs: "100%", sm: "auto" },
                      fontWeight: "bold",
                      fontSize: "clamp(0.95rem, 1.5vw, 1rem)",
                      textTransform: "none",
                      boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                      "&:hover": {
                        bgcolor: "#0056b3",
                        boxShadow: "0 15px 30px rgba(0, 123, 255, 0.4)",
                      },
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 6, md: 10 } }}
      >
        <Box
          data-aos="fade-up"
          sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#007BFF",
              fontWeight: 900,
              letterSpacing: 2,
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
            }}
          >
            UBICACIÓN ESTRATÉGICA
          </Typography>
          <Typography
            variant="h3"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", mt: 1 }}
          >
            Encuéntranos en el Corazón de Cusco
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "400px", sm: "500px", md: "700px" },
          }}
          data-aos="zoom-in"
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: { xs: "24px", md: "80px 24px 80px 24px" },
              overflow: "hidden",
              position: "relative",
              border: { xs: "4px solid #ffffff", md: "8px solid #ffffff" },
              boxShadow: "0 40px 80px rgba(0, 51, 102, 0.12)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.067407932292!2d-71.9115345!3d-13.5314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd79210b3ff55%3A0x8bbc894355fce762!2sInstituto%20De%20Educaci%C3%B3n%20Superior%20Pedag%C3%B3gico%20Privado%20%22Arco%20Iris%22%20-%20Cusco!5e0!3m2!1ses!2spe!4v1775448815673!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Instituto Arco Iris"
            ></iframe>
          </Paper>

          <Paper
            sx={{
              position: "absolute",
              bottom: { xs: 15, sm: 30, md: 50 },
              left: { xs: 15, sm: 30, md: 50 },
              right: { xs: 15, sm: "auto" },
              p: { xs: 2, md: 4 },
              maxWidth: { xs: "none", sm: "320px", md: "380px" },
              borderRadius: "24px",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: { xs: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  bgcolor: "#003366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  position: "relative",
                  flexShrink: 0,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "2px solid #007BFF",
                    animation: "pulse 2s infinite",
                  },
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "100%": { transform: "scale(1.8)", opacity: 0 },
                  },
                }}
              >
                <LocationOnIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#003366"
                  sx={{
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    lineHeight: 1.2,
                  }}
                >
                  Nuestra Sede
                </Typography>
                <Typography
                  variant="body2"
                  color="#007BFF"
                  fontWeight="bold"
                  sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                >
                  San Sebastián, Cusco
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              color="#555"
              mb={{ xs: 2, md: 3 }}
              lineHeight={1.6}
              sx={{ fontSize: "clamp(0.8rem, 1.2vw, 0.875rem)" }}
            >
              Tenería 4 Fracción II Enaco San Sebastián. Ubicados en una zona
              accesible para toda nuestra comunidad estudiantil.
            </Typography>

            <Button
              fullWidth
              variant="contained"
              startIcon={<MapIcon />}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.067407932292!2d-71.9115345!3d-13.5314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd79210b3ff55%3A0x8bbc894355fce762!2sInstituto%20De%20Educaci%C3%B3n%20Superior%20Pedag%C3%B3gico%20Privado%20%22Arco%20Iris%22%20-%20Cusco!5e0!3m2!1ses!2spe!4v1775448815673!5m2!1ses!2spe",
                  "_blank",
                )
              }
              sx={{
                bgcolor: "#003366",
                color: "#fff",
                borderRadius: "15px",
                py: { xs: 1, md: 1.5 },
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                "&:hover": { bgcolor: "#007BFF" },
              }}
            >
              Obtener Indicaciones
            </Button>
          </Paper>

          <Box
            sx={{
              position: "absolute",
              top: { xs: -20, md: -50 },
              right: { xs: -20, md: -50 },
              width: { xs: "100px", md: "200px" },
              height: { xs: "100px", md: "200px" },
              bgcolor: "rgba(0, 123, 255, 0.05)",
              borderRadius: "50%",
              zIndex: -1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
