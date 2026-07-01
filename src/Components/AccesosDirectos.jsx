import React, { useState, useEffect } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function AccesosDirectos({
  scrollBanner = 300,
  footerThreshold = 350,
}) {
  const [showWidget, setShowWidget] = useState(false);
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 600;
    }
    return true;
  });
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowWidget(scrollY > scrollBanner);
      if (scrollY <= scrollBanner) {
        setIsOpen(window.innerWidth >= 600);
      }

      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const distanceToBottom = documentHeight - (scrollY + windowHeight);

      setIsAtFooter(distanceToBottom < footerThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBanner, footerThreshold]);

  const accesos = [
    {
      name: "Transparencia",
      icon: "https://cdn-icons-png.flaticon.com/128/5165/5165915.png",
      link: "/transparencia",
    },
    {
      name: "Aula Virtual",
      icon: "https://cdn-icons-png.flaticon.com/128/15748/15748451.png",
      link: "https://aulavirtual.arcoiris.edu.pe/",
      target: "_blank",
    },
    {
      name: "Intranet",
      icon: "https://cdn-icons-png.flaticon.com/128/1865/1865721.png",
      link: "https://intranet.arcoiris.edu.pe/",
      target: "_blank",
    },
    {
      name: "Biblioteca",
      icon: "https://cdn-icons-png.flaticon.com/128/2997/2997608.png",
      link: "https://elibro.net/es/lc/arcoiris/login_usuario/?next=/es/lc/arcoiris/inicio/",
      target: "_blank",
    },
    {
      name: "Repositorio",
      icon: "https://cdn-icons-png.flaticon.com/128/1156/1156975.png",
      link: "https://repositorio.arcoiris.edu.pe/",
      target: "_blank",
    },
    {
      name: "Laboratorio",
      icon: "https://cdn-icons-png.flaticon.com/128/2888/2888407.png", // Icono de computadora/laboratorio
      link: "/laboratorio",
    },
  ];

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "65px", sm: "87px" },
    height: { xs: "65px", sm: "87px" },
    bgcolor: isAtFooter ? "rgba(1, 81, 168, 0.9)" : "rgba(0, 51, 102, 0.9)",
    backdropFilter: "blur(8px)",
    color: "#fff",
    borderRadius: "16px 0 0 16px",
    boxShadow: "-2px 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRight: "none",
    borderLeft: "2px solid transparent",
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    padding: { xs: "4px", sm: "4px" },
    textDecoration: "none",
    "&:hover": {
      transform: "translateX(-8px)",
      bgcolor: isAtFooter ? "#0151a8" : "#1f73cc",
      borderLeft: "2px solid #0151a8",
      boxShadow: "-6px 8px 20px rgba(0,0,0,0.25)",
      "& img": {
        transform: "scale(1.15) translateY(-2px)",
        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.3))",
      },
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "20%", sm: "30%" },
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <AnimatePresence>
        {showWidget && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            style={{ display: "flex" }}
          >
            <ButtonBase
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                bgcolor: isAtFooter ? "#004992" : "rgba(1, 81, 168, 0.9)",
                color: "#fff",
                width: { xs: 24, sm: 30 },
                height: { xs: 44, sm: 54 },
                borderRadius: "16px 0 0 16px",
                boxShadow: "-2px 4px 12px rgba(0,0,0,0.15)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
                mt: 1,
                mr: isOpen ? "-2px" : 0,
                "&:hover": {
                  bgcolor: isAtFooter ? "#0151a8" : "#1f73cc",
                },
              }}
            >
              {isOpen ? (
                <KeyboardArrowRightIcon fontSize="small" />
              ) : (
                <KeyboardArrowLeftIcon fontSize="small" />
              )}
            </ButtonBase>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "2px", sm: "3px" },
              }}
            >
              <AnimatePresence>
                {isOpen &&
                  accesos.map((acceso, index) => {
                    // Determinamos si es un enlace externo
                    const isExternal = acceso.link.startsWith("http");

                    return (
                      <motion.div
                        key={acceso.name}
                        initial={{ opacity: 0, width: 0, x: 50 }}
                        animate={{ opacity: 1, width: "auto", x: 0 }}
                        exit={{ opacity: 0, width: 0, x: 50 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <ButtonBase
                          // Si es externo usa 'a', si es interno usa 'Link' de React Router
                          component={isExternal ? "a" : Link}
                          // Si es externo usa 'href', si es interno usa 'to'
                          href={isExternal ? acceso.link : undefined}
                          to={!isExternal ? acceso.link : undefined}
                          target={acceso.target} // Esto aplicará el "_blank" a los externos
                          sx={buttonStyle}
                        >
                          <Box
                            component="img"
                            src={acceso.icon}
                            alt={acceso.name}
                            sx={{
                              width: { xs: 24, sm: 35 },
                              height: { xs: 24, sm: 35 },
                              mb: { xs: 0.2, sm: 0.8 },
                              transition: "all 0.3s ease",
                            }}
                          />
                          <Typography
                            sx={{
                              color: "inherit",
                              fontWeight: 600,
                              fontSize: { xs: "0.5rem", sm: "0.6rem" },
                              lineHeight: 1.1,
                              textAlign: "center",
                              letterSpacing: "0.2px",
                              px: 0.5,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              wordBreak: "break-word",
                            }}
                          >
                            {acceso.name}
                          </Typography>
                        </ButtonBase>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}