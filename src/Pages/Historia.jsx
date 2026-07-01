import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TimelineIcon from "@mui/icons-material/Timeline";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";

import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

import GavelIcon from "@mui/icons-material/Gavel";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
const blueFilter =
  "invert(39%) sepia(88%) saturate(1537%) hue-rotate(190deg) brightness(101%) contrast(103%)";
const darkBlueFilter =
  "invert(14%) sepia(94%) saturate(1480%) hue-rotate(193deg) brightness(85%) contrast(101%)";
const whiteFilter = "invert(100%) brightness(200%)";
export default function Historia() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const valores = [
    {
      title: "Compromiso",
      desc: "Dedicación inquebrantable a la excelencia educativa y al desarrollo integral de nuestros estudiantes.",
      icon: <HandshakeIcon fontSize="inherit" />,
    },
    {
      title: "Innovación",
      desc: "Búsqueda constante de nuevas metodologías y tecnologías para enriquecer el proceso de enseñanza-aprendizaje.",
      icon: <LightbulbCircleIcon fontSize="inherit" />,
    },
    {
      title: "Ética",
      desc: "Actuar con integridad, transparencia y responsabilidad en todas nuestras acciones y decisiones.",
      icon: <GavelIcon fontSize="inherit" />,
    },
    {
      title: "Solidaridad",
      desc: "Fomentar un ambiente de apoyo mutuo y colaboración, contribuyendo al bienestar de la comunidad.",
      icon: <VolunteerActivismIcon fontSize="inherit" />,
    },
    {
      title: "Excelencia",
      desc: "Perseguir la más alta calidad en la formación académica, la investigación y la gestión institucional.",
      icon: <WorkspacePremiumIcon fontSize="inherit" />,
    },
    {
      title: "Respeto",
      desc: "Valorar la diversidad, la dignidad humana y las opiniones de todos los miembros de nuestra comunidad educativa.",
      icon: <Diversity1Icon fontSize="inherit" />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", sm: "55vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
            mixBlendMode: "luminosity",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0, 51, 102, 0.55) 0%, rgba(0, 51, 102, 0.11) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
        >
          <Box data-aos="fade-right">
            <Typography
              variant="overline"
              sx={{
                color: "#007BFF",
                fontWeight: 900,
                letterSpacing: { xs: 1.5, md: 3 },
                fontSize: { xs: "0.9rem", md: "1.2rem" },
              }}
            >
              NUESTRAS RAÍCES
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5.5rem" },
                lineHeight: 1.1,
                mb: { xs: 1, md: 2 },
              }}
            >
              Nuestra Historia
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "650px",
                fontWeight: 400,
                borderLeft: "4px solid #007BFF",
                pl: { xs: 2, md: 3 },
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
              }}
            >
              Un viaje a través de los años que nos han forjado.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, sm: 8, md: 12 }, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Box
          data-aos="fade-up"
          sx={{ mb: { xs: 5, md: 8 }, textAlign: "center" }}
        >
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/128/2201/2201563.png"
            alt="Account Balance Icon"
            sx={{
              width: { xs: 40, md: 70 },
              height: { xs: 40, md: 70 },
              mb: { xs: 1, md: 2 },
              filter: darkBlueFilter,
            }}
          />
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.75rem" } }}
          >
            Los Inicios del <br /> Instituto Arco Iris
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Typography
              variant="body1"
              color="#333333"
              lineHeight={1.9}
              textAlign="justify"
              sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}
            >
              El instituto de Educacion Superior Pedagogico Privado "Arco Iris"
              Cusco, creado po Decreto Supremo N° 073-94-ED. Dado en el Palacio
              de Gobierno el 18 de noviembre de 1994. con el funcionamiento de
              la carrera profesional de Educacion Fisica y para el a 1997 se
              amplia las carreras profesinales de Educacion Inicial y Educacion
              Primaria en merito a R.M. N° 0440-97-ED. Revalidado con Resolucion
              N° 022-2019-MINEDU. La Institucion Educativa Superior, desde sus
              inicios toma rumbos ascendentes en merito a la perseverancia de
              sus legitimos gestores, el Lic. Aquilino Espinoza Challco y la
              Señora Directora CPC. Betty Elisabeth Rojas Pinto, Quienes con
              Vision y vocacion profesional supieron promover la inversion
              privada en educacion, para generar un servicio y una gestion que
              proyectata la formacion de docentes poniendo en vigencia nuestra
              identidada cultural ancestral con valores como:Yachay, Munay,
              Llankay, Ayni, Ama sua, Ama llulla, Ama q'uella y valores
              institucionales de puntualidad, responsabilidad, honestidad y
              trabajo
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Box
              sx={{
                position: "relative",
                p: { xs: 1.5, md: 2 },
                bgcolor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0, 51, 102, 0.1)",
                borderRadius: "16px",
                transform: { xs: "none", md: "rotate(2deg)" },
                transition: "transform 0.4s ease",
                "&:hover": { transform: "rotate(0deg) scale(1.02)" },
              }}
            >
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Antiguas/jpg-26.jpg"
                alt="Desfile en la Plaza de Armas Cusco"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  pointerEvents: "none",
                  borderRadius: "16px",
                  opacity: 0.5,
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                color="#0056B3"
                fontWeight="bold"
                sx={{
                  mt: 2,
                  fontStyle: "italic",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                }}
              >
                Desfile en la Plaza de Armas Cusco, en frente el Lic. Aquilino
                Espinoza Challco
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Box
              sx={{
                position: "relative",
                p: { xs: 1.5, md: 2 },
                bgcolor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0, 51, 102, 0.1)",
                borderRadius: "16px",
                transform: { xs: "none", md: "rotate(-2deg)" },
                transition: "transform 0.4s ease",
                "&:hover": { transform: "rotate(0deg) scale(1.02)" },
              }}
            >
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Antiguas/jpg-3.jpg"
                alt="Nuestras primeras instalaciones"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  filter: "sepia(30%)",
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                color="#0056B3"
                fontWeight="bold"
                sx={{
                  mt: 2,
                  fontStyle: "italic",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                }}
              >
                Nuestras primeras instalaciones, un sueño hecho realidad.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Typography
              variant="body1"
              color="#333333"
              lineHeight={1.9}
              textAlign="justify"
              sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}
            >
              Despues de 30 años, el Instituto Arco Iris ha traspasado las
              fronteras de la Region, transformandose en una institucion lider
              en investigacion y docencia, asi como tambien en el analisis
              interdisciplinario de tematicas propias de nuestos estudios que
              nos permiten atender los mas exigentes y diversos requerimientos
              academicos y administrativos de formadores y estudiantes
              cumpliendo con los estandares requeridos po el Ministreio de
              Educacion DIFOID, ademas de las actividades extracurriculares
              destinada a brindar una formacion integral.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{ bgcolor: "#003366", py: { xs: 8, md: 12 }, position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            width: { xs: "100%", md: "40%" },
            height: "100%",
            bgcolor: "#002244",
            clipPath: {
              xs: "none",
              md: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            },
            opacity: { xs: 0.5, md: 1 },
            zIndex: 0,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
        >
          <Box data-aos="fade-up" sx={{ mb: { xs: 5, md: 8 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
                mb: { xs: 1, md: 2 },
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/128/1589/1589131.png"
                alt="Account Balance Icon"
                sx={{
                  width: { xs: 40, md: 60 },
                  height: { xs: 40, md: 60 },
                  mb: { xs: 1, md: 2 },
                  filter: blueFilter,
                }}
              />
              <Typography
                variant="overline"
                color="#007BFF"
                fontWeight="bold"
                letterSpacing={{ xs: 1, md: 2 }}
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                EVOLUCIÓN CONSTANTE
              </Typography>
            </Box>
            <Typography
              variant="h2"
              fontWeight="900"
              color="#ffffff"
              textTransform="uppercase"
              sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.75rem" } }}
            >
              Crecimiento y Consolidación
            </Typography>
            <Typography
              variant="h6"
              color="#F0F2F5"
              fontWeight="400"
              sx={{
                mt: { xs: 1, md: 2 },
                maxWidth: "600px",
                fontSize: { xs: "0.95rem", md: "1.25rem" },
              }}
            >
              Momentos clave que marcan nuestro desarrollo institucional.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, lg: 5 }} data-aos="zoom-in-right">
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: { xs: "300px", sm: "400px", md: "600px" },
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Box
                  component="img"
                  src="https://arcoiris.edu.pe/assets/Img/Fotos%20Multiple/hero-bg-3.jpg"
                  alt="Consolidación Institucional"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 15, md: 30 },
                    left: { xs: 15, md: 30 },
                    right: { xs: 15, md: 30 },
                    bgcolor: "rgba(0, 123, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    p: { xs: 1.5, md: 2 },
                    borderRadius: "16px",
                    color: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="900"
                    mb={0.5}
                    sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
                  >
                    30+ Años
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                  >
                    De excelencia académica ininterrumpida.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 3, md: 4 },
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    left: { sm: "24px", md: "28px" },
                    top: "40px",
                    bottom: "40px",
                    width: "2px",
                    bgcolor: "rgba(255,255,255,0.1)",
                    zIndex: 0,
                  }}
                />

                {[
                  {
                    icon: (
                      <Box
                        component="img"
                        src="https://cdn-icons-png.flaticon.com/128/3197/3197944.png"
                        alt="School Icon"
                        sx={{ width: 28, height: 35, filter: whiteFilter }}
                      />
                    ),
                    text: "A lo largo de las décadas, el Instituto Arco Iris ha experimentado un crecimiento significativo, tanto en infraestructura como en oferta académica. Hemos ampliado nuestras instalaciones, incorporado tecnología de vanguardia y desarrollado nuevos programas educativos para satisfacer la demanda de profesionales altamente calificados.",
                  },
                  {
                    icon: (
                      <Box
                        component="img"
                        src="https://cdn-icons-png.flaticon.com/128/10929/10929932.png"
                        alt="School Icon"
                        sx={{ width: 28, height: 35, filter: whiteFilter }}
                      />
                    ),
                    text: "La consolidación de nuestra institución se ha basado en un compromiso inquebrantable con la calidad y la mejora continua. Hemos implementado rigurosos procesos de autoevaluación y acreditación, lo que nos ha permitido obtener el reconocimiento de organismos nacionales e internacionales, validando la excelencia de nuestra propuesta educativa.",
                  },
                  {
                    icon: (
                      <Box
                        component="img"
                        src="https://cdn-icons-png.flaticon.com/128/708/708739.png"
                        alt="School Icon"
                        sx={{ width: 28, height: 35, filter: whiteFilter }}
                      />
                    ),
                    text: "Nuestra historia es también la historia de miles de egresados que han dejado una huella positiva en la educación peruana, transformando vidas y comunidades. Nos enorgullece ser parte de su trayectoria y seguir construyendo un futuro prometedor para las nuevas generaciones de educadores.",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 150}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 2, sm: 3 },
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: "50%",
                        bgcolor: "#0056B3",
                        border: "4px solid #003366",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)",
                        alignSelf: { xs: "flex-start", sm: "auto" },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: { xs: "20px", sm: "0 20px 20px 20px" },
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                        flex: 1,
                        "&:hover": {
                          bgcolor: "rgba(0, 123, 255, 0.15)",
                          borderColor: "#007BFF",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        lineHeight={1.8}
                        textAlign="justify"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        {item.text}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Box
          data-aos="zoom-in"
          sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#007BFF",
              fontWeight: 900,
              letterSpacing: { xs: 1.5, md: 2 },
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            NUESTRA ESENCIA
          </Typography>
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            mb={2}
            sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.75rem" } }}
          >
            Valores Fundamentales
          </Typography>
          <Typography
            variant="h6"
            color="#333333"
            fontWeight="400"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.25rem" },
            }}
          >
            Estos principios guían cada paso de nuestra institución y reflejan
            el espíritu de nuestra comunidad.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {valores.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              sx={{ mt: { md: index % 3 === 1 ? 6 : 0 } }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  bgcolor: "#ffffff",
                  borderRadius: "40px 10px 40px 10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0, 123, 255, 0.1)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  zIndex: 1,
                  "&:hover": {
                    transform: "translateY(-12px)",
                    bgcolor: "#0056B3",
                    boxShadow: "0 25px 50px rgba(0, 51, 102, 0.3)",
                    borderColor: "transparent",
                    borderRadius: "10px 40px 10px 40px",
                  },
                  "&:hover .value-icon": {
                    color: "#007BFF",
                    transform: "scale(1.15) translateY(-5px)",
                  },
                  "&:hover .value-title": { color: "#ffffff" },
                  "&:hover .value-desc": { color: "#F0F2F5" },
                  "&:hover .bg-watermark": {
                    opacity: 0.08,
                    transform: "scale(1) rotate(-15deg)",
                  },
                  "&:hover .accent-line": {
                    width: "60px",
                    bgcolor: "#007BFF",
                  },
                }}
              >
                <Box
                  className="bg-watermark"
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    right: -30,
                    opacity: 0,
                    color: "#ffffff",
                    transform: "scale(0.5) rotate(0deg)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: -1,
                    fontSize: { xs: 120, md: 180 },
                    display: "flex",
                  }}
                >
                  {item.icon}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    className="value-icon"
                    sx={{
                      color: "#003366",
                      fontSize: { xs: 32, md: 40 },
                      transition: "all 0.4s ease",
                      display: "flex",
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    className="value-title"
                    variant="h5"
                    fontWeight="900"
                    color="#003366"
                    sx={{
                      transition: "color 0.4s ease",
                      m: 0,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                <Box
                  className="accent-line"
                  sx={{
                    height: "4px",
                    width: "25px",
                    bgcolor: "#003366",
                    mb: 3,
                    borderRadius: "2px",
                    transition: "all 0.4s ease",
                  }}
                />

                <Typography
                  className="value-desc"
                  variant="body1"
                  color="#333333"
                  lineHeight={1.7}
                  sx={{
                    transition: "color 0.4s ease",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
