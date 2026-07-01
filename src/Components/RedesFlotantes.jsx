import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function RedesFlotantes({
  scrollBanner = 300, // Píxeles de scroll para sacar redes
  scrollSubir = 1500, // Ajusté un poco para que tu flechón salga a tiempo
}) {
  const [showSocials, setShowSocials] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 350;

      setIsAtFooter(nearBottom);

      setShowSocials(currentScroll > scrollBanner && !nearBottom);
      setShowScrollTop(currentScroll > scrollSubir);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBanner, scrollSubir]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const redes = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />,
      color: "#25D366",
      link: "https://wa.me/51986249212",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />,
      color: "#1877F2",
      link: "https://www.facebook.com/pedagogicoarcoiris/?locale=es_LA",
    },
    //{ name: "TikTok", icon: <TikTokIcon />, color: "#000000", link: "#" },
  ];

  const buttonStyle = {
    width: { xs: 44, sm: 54 },
    height: { xs: 44, sm: 54 },
    bgcolor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    "&:hover": { transform: "scale(1.15)", bgcolor: "#fff" },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 15, sm: 30 },
        left: { xs: 15, sm: 30 },
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1, sm: 1.5 },
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        {/* Flecha pa subir */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip placement="right">
              <IconButton
                onClick={scrollToTop}
                sx={{
                  ...buttonStyle,
                  bgcolor: isAtFooter ? "#0151a8" : "#003366",
                  color: "#fff",
                  "&:hover": { ...buttonStyle["&:hover"], bgcolor: "#1f73cc" },
                }}
              >
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/128/25/25216.png"
                  alt="Subir"
                  sx={{
                    width: { xs: 16, sm: 20 },
                    height: { xs: 16, sm: 20 },
                    filter: "brightness(0) invert(1) contrast(0.9)",
                  }}
                />
              </IconButton>
            </Tooltip>
          </motion.div>
        )}

        {/* Separadorcin */}
        {showScrollTop && showSocials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "2px",
              margin: "4px 0",
            }}
          />
        )}

        {/* Redes Sociales */}
        {showSocials &&
          redes.map((red, index) => (
            <motion.div
              key={red.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Tooltip title={red.name} placement="right">
                <IconButton
                  component="a"
                  href={red.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...buttonStyle,
                    color: red.color,
                    "&:hover": {
                      ...buttonStyle["&:hover"],
                      color: "#fff",
                      bgcolor: red.color,
                    },
                  }}
                >
                  {red.icon}
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
      </AnimatePresence>
    </Box>
  );
}
