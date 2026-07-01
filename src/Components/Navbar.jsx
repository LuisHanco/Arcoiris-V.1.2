import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
  Typography,
  Paper,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Iconos
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import logo1 from "../assets/logo_arcoiris_rm.png";
import logo2 from "../assets/logo_arcoiris_blanco.png";

export default function Navbar() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const location = useLocation();
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    const theme = document.body.getAttribute("data-theme");
    setIsLight(theme === "light");
  }, []);

  const handleNavigation = (path) => navigate(path);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMobileNavigation = (path) => {
    handleNavigation(path);
    setMobileOpen(false);
  };

  const handleSubMenuToggle = (label) => {
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const navItems = [
    { label: "Inicio", path: "/" },
    {
      label: "Institucional",
      subItems: [
        {
          label: "Misión y Visión",
          path: "/mision_vision",
          icon: "https://cdn-icons-png.flaticon.com/128/14250/14250086.png",
          desc: "Nuestro propósito y proyección",
        },
        {
          label: "Historia",
          path: "/historia",
          icon: "https://cdn-icons-png.flaticon.com/128/2201/2201563.png",
          desc: "Nuestra trayectoria educativa",
        },
        {
          label: "Directorio",
          path: "/directorio",
          icon: "https://cdn-icons-png.flaticon.com/128/6501/6501114.png",
          desc: "Conoce a nuestro equipo líder",
        },
        {
          label: "Transparencia",
          path: "/transparencia",
          icon: "https://cdn-icons-png.flaticon.com/128/5165/5165914.png",
          desc: "Conoce toda nuestra información",
        },
        {
          label: "Documentos",
          path: "/documentos_gestion",
          icon: "https://cdn-icons-png.flaticon.com/128/3396/3396237.png",
          desc: "Normativas y gestión oficial",
        },
      ],
    },
    {
      label: "Programas",
      subItems: [
        {
          label: "Educación Inicial",
          path: "/inicial",
          icon: "https://cdn-icons-png.flaticon.com/512/7456/7456976.png",
          desc: "Formando el futuro desde la niñez",
        },
        {
          label: "Educación Física",
          path: "/fisica",
          icon: "https://cdn-icons-png.flaticon.com/128/3048/3048355.png",
          desc: "Salud, deporte y disciplina",
        },
      ],
    },
    { label: "Admisión", path: "/admision" },
    { label: "Estudiantes", path: "/estudiantes" },
    { label: "Egresados", path: "/egresados" },
    { label: "Unidades", path: "/unidades" },
    { label: "Plataformas", path: "/plataformas" },
    { label: "Servicios", path: "/servicios" },
    { label: "Contacto", path: "/contacto" },
  ];

  // 1. Menú Celular
  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        bgcolor: "#ffffff",
      }}
    >
      {/* Figuras de fondo animadas*/}
      {mobileOpen && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              left: "-30px",
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              bgcolor: "rgba(0, 123, 255, 0.05)",
              animation: "floatDiag 8s ease-in-out infinite",
              "@keyframes floatDiag": {
                "0%, 100%": { transform: "rotate(45deg) translate(0, 0)" },
                "50%": { transform: "rotate(45deg) translate(20px, -20px)" },
              },
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "45%",
              right: "-40px",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "4px dashed rgba(0, 123, 255, 0.2)",
              animation: "spinSlow 45s linear infinite",
              "@keyframes spinSlow": {
                "100%": { transform: "rotate(360deg)" },
              },
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              right: "-20px",
              width: "120px",
              height: "120px",
              borderRadius: "32px",
              border: "3px solid rgba(186, 230, 253, 0.6)",
              bgcolor: "rgba(186, 230, 253, 0.15)",
              animation: "floatDiagRev 10s ease-in-out infinite",
              "@keyframes floatDiagRev": {
                "0%, 100%": { transform: "rotate(-20deg) translate(0, 0)" },
                "50%": { transform: "rotate(-20deg) translate(-25px, 20px)" },
              },
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Lista de navegación */}
      <List
        sx={{
          px: 0,
          pt: "120px",
          pb: 2,
          position: "relative",
          zIndex: 1,
          flexGrow: 1,
        }}
      >
        {navItems.map((item, index) => {
          const isMainActive = item.path
            ? location.pathname === item.path
            : false;
          const isSubActive = item.subItems?.some(
            (sub) => location.pathname === sub.path,
          );
          const isActive = isMainActive || isSubActive;

          return (
            <React.Fragment key={item.label}>
              {/* Opciones Mayores */}
              <ListItemButton
                onClick={() =>
                  item.subItems
                    ? handleSubMenuToggle(item.label)
                    : handleMobileNavigation(item.path)
                }
                sx={{
                  mx: 0,
                  mb: 0.5,
                  borderRadius: 0,
                  py: 1.2,
                  px: 4,
                  bgcolor: isActive ? "rgba(0, 123, 255, 0.08)" : "transparent",
                  color: isActive ? "#007BFF" : "#1e293b",
                  borderLeft: isActive
                    ? "4px solid #007BFF"
                    : "4px solid transparent",
                  transition: "all 0.3s ease",
                  "&:hover": { bgcolor: "rgba(0, 123, 255, 0.05)" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 600,
                    fontSize: "1.05rem",
                  }}
                />
                {item.subItems && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.3s",
                      transform: openSubMenus[item.label]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      color: isActive ? "#007BFF" : "#64748b",
                    }}
                  >
                    <ExpandMore />
                  </Box>
                )}
              </ListItemButton>

              {/* Opciones Hijas */}
              {item.subItems && (
                <Collapse
                  in={openSubMenus[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{ mb: 1, pl: 4, pr: 3 }}
                  >
                    {item.subItems.map((sub) => {
                      const isSubItemActive = location.pathname === sub.path;
                      return (
                        <ListItemButton
                          key={sub.label}
                          onClick={() => handleMobileNavigation(sub.path)}
                          sx={{
                            pl: 2,
                            pr: 2,
                            py: 1,
                            borderRadius: "10px",
                            mb: 0.5,
                            bgcolor: isSubItemActive
                              ? "rgba(0, 123, 255, 0.06)"
                              : "transparent",
                            color: isSubItemActive ? "#007BFF" : "#475569",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "rgba(0, 123, 255, 0.1)",
                              color: "#007BFF",
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={sub.icon}
                            sx={{
                              width: 20,
                              height: 20,
                              mr: 2,
                              filter: isSubItemActive
                                ? "invert(36%) sepia(82%) saturate(2853%) hue-rotate(195deg) brightness(103%) contrast(105%)"
                                : "grayscale(100%) opacity(60%)",
                            }}
                          />
                          <ListItemText
                            primary={sub.label}
                            primaryTypographyProps={{
                              fontSize: "0.95rem",
                              fontWeight: isSubItemActive ? 600 : 500,
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}

              {/* Separadores entre grupos */}
              {(index === 2 || index === 5) && (
                <Box
                  sx={{
                    mx: 4,
                    my: 1.5,
                    borderTop: "1px dashed rgba(0, 123, 255, 0.2)",
                  }}
                />
              )}
            </React.Fragment>
          );
        })}

        {/* Separador y Redes Sociales Funcionales */}
        <Box
          sx={{
            mx: 4,
            mt: 0,
            pt: 2,
            borderTop: "2px solid rgba(0, 123, 255, 0.1)",
            display: "flex",
            justifyContent: "center",
            gap: 2.5,
          }}
        >
          <IconButton
            component="a"
            href="https://www.facebook.com/pedagogicoarcoiris/?locale=es_LA"
            target="_blank"
            sx={{
              width: "46px",
              height: "46px",
              backgroundColor: "#007BFF",
              color: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#003366",
                color: "#fff",
                transform: "translateY(-3px)",
              },
            }}
          >
            <FacebookIcon sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/51966425975"
            target="_blank"
            sx={{
              width: "46px",
              height: "46px",
              backgroundColor: "#007BFF",
              color: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#003366",
                color: "#fff",
                transform: "translateY(-3px)",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:informes@arcoiris.edu.pe"
            target="_blank"
            sx={{
              width: "46px",
              height: "46px",
              backgroundColor: "#007BFF",
              color: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#003366",
                color: "#fff",
                transform: "translateY(-3px)",
              },
            }}
          >
            <EmailIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>
      </List>
    </Box>
  );

  // 2. Barra de Navegación Principal
  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger && !mobileOpen ? 2 : 0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: mobileOpen
            ? "#0A192F"
            : trigger
              ? "rgba(255, 255, 255, 0.95)"
              : "transparent",
          backdropFilter: trigger && !mobileOpen ? "blur(10px)" : "none",
          color: mobileOpen
            ? "#ffffff"
            : trigger
              ? "#003366"
              : isLight
                ? "#0A192F"
                : "#ffffff",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: mobileOpen
            ? "3px solid #007BFF"
            : trigger && !mobileOpen
              ? "1px solid rgba(0,0,0,0.05)"
              : "none",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 0, md: 4, lg: 5 } }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: trigger ? "70px" : "90px",
              transition: "minHeight 0.4s ease",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0, lg: 10 },
                flexGrow: 1,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  zIndex: 1,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Box
                  component="img"
                  onClick={() => handleNavigation("/")}
                  src={mobileOpen ? logo2 : trigger ? logo1 : logo2}
                  sx={{
                    height: trigger && !mobileOpen ? 60 : 75,
                    cursor: "pointer",
                    transition: "height 0.4s ease",
                    filter:
                      !trigger && !mobileOpen && isLight
                        ? "brightness(0) saturate(100%)"
                        : "none",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  alignItems: "stretch",
                  gap: 1.5,
                  alignSelf: "stretch",
                }}
              >
                {navItems.map((item) => {
                  const isMainActive = item.path
                    ? location.pathname === item.path
                    : false;
                  const isSubActive = item.subItems?.some(
                    (sub) => location.pathname === sub.path,
                  );
                  const isActive = isMainActive || isSubActive;

                  return (
                    <Box
                      key={item.label}
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "stretch",
                        "&:hover .dropdown-menu": {
                          opacity: 1,
                          visibility: "visible",
                          transform: "translateX(-50%) translateY(0)",
                        },
                      }}
                    >
                      <Button
                        onClick={() => {
                          if (!item.subItems && item.path)
                            handleNavigation(item.path);
                        }}
                        disableRipple={!!item.subItems}
                        endIcon={
                          item.subItems ? (
                            <KeyboardArrowDownIcon sx={{ ml: -0.5 }} />
                          ) : null
                        }
                        sx={{
                          height: "100%",
                          px: 2,
                          borderRadius: 0,
                          color: isActive
                            ? trigger && !mobileOpen
                              ? "#007BFF"
                              : "#ffffff"
                            : "inherit",
                          fontWeight: isActive ? 800 : 600,
                          fontSize: "0.85rem",
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          cursor: item.subItems ? "default" : "pointer",
                          "&:hover": {
                            color:
                              trigger && !mobileOpen ? "#007BFF" : "inherit",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "10%",
                            width: "80%",
                            height: "4px",
                            borderRadius: "4px 4px 0 0",
                            bgcolor: isActive ? "#ffffff" : "transparent",
                            boxShadow:
                              isActive && trigger && !mobileOpen
                                ? "0 -4px 18px 2px rgba(0, 123, 255, 0.6)"
                                : "none",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          },
                          "&:hover::after": {
                            bgcolor: "#007BFF",
                            width: "100%",
                            left: "0%",
                          },
                        }}
                      >
                        {item.label}
                      </Button>

                      {item.subItems && (
                        <Box
                          className="dropdown-menu"
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(10px)",
                            opacity: 0,
                            visibility: "hidden",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            pt: 2.5,
                            zIndex: 10,
                          }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              position: "relative",
                              minWidth: "320px",
                              bgcolor: "#ffffff",
                              borderRadius: "20px",
                              boxShadow: "0 25px 50px rgba(0,51,102,0.15)",
                              border: "1px solid rgba(0,0,0,0.06)",
                              p: 1.5,
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "-6px",
                                left: "50%",
                                transform: "translateX(-50%) rotate(45deg)",
                                width: "12px",
                                height: "12px",
                                bgcolor: "#ffffff",
                                borderLeft: isActive
                                  ? "4px solid #3ea6ff"
                                  : "4px solid transparent",
                                borderTop: "1px solid rgba(0,0,0,0.06)",
                                zIndex: 0,
                              },
                            }}
                          >
                            {item.subItems.map((subItem) => {
                              const isSubItemActive =
                                location.pathname === subItem.path;
                              return (
                                <Box
                                  key={subItem.path}
                                  onClick={() => handleNavigation(subItem.path)}
                                  sx={{
                                    position: "relative",
                                    zIndex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2.5,
                                    px: 2,
                                    py: 1.5,
                                    borderRadius: "14px",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    bgcolor: isSubItemActive
                                      ? "rgba(0, 123, 255, 0.05)"
                                      : "transparent",
                                    "&:hover": {
                                      bgcolor: "rgba(0, 123, 255, 0.04)",
                                      transform: "translateX(5px)",
                                    },
                                    "&:hover .icon-box": {
                                      bgcolor: "#007BFF",
                                      boxShadow:
                                        "0 6px 15px rgba(0, 123, 255, 0.3)",
                                      transform: "scale(1.05)",
                                    },
                                    "&:hover .flaticon-icon": {
                                      filter: "brightness(0) invert(1)",
                                    },
                                  }}
                                >
                                  <Box
                                    className="icon-box"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: 45,
                                      height: 45,
                                      flexShrink: 0,
                                      borderRadius: "12px",
                                      bgcolor: isSubItemActive
                                        ? "#007BFF"
                                        : "rgba(0, 123, 255, 0.08)",
                                      transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      src={subItem.icon}
                                      className="flaticon-icon"
                                      sx={{
                                        width: "60%",
                                        height: "60%",
                                        filter: isSubItemActive
                                          ? "brightness(0) invert(1)"
                                          : "invert(36%) sepia(82%) saturate(2853%) hue-rotate(195deg) brightness(103%) contrast(105%)",
                                        transition:
                                          "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                      }}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      color={
                                        isSubItemActive ? "#007BFF" : "#003366"
                                      }
                                      fontWeight={isSubItemActive ? 800 : 700}
                                      sx={{ lineHeight: 1.2, mb: 0.5 }}
                                    >
                                      {subItem.label}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="#666666"
                                      sx={{ lineHeight: 1.2 }}
                                    >
                                      {subItem.desc}
                                    </Typography>
                                  </Box>
                                </Box>
                              );
                            })}
                          </Paper>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                zIndex: mobileOpen ? 1 : "auto",
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: "inherit", p: 1.5 }}
                disableRipple
              >
                <Box sx={{ position: "relative", width: 20, height: 16 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: mobileOpen ? 7 : 0,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "rotate(45deg)" : "none",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 7,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: mobileOpen ? 0 : 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: mobileOpen ? 7 : 14,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "rotate(-45deg)" : "none",
                    }}
                  />
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: { xs: "100%", sm: "380px" } } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
