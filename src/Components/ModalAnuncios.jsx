import React, { useState, useEffect, forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Button,
  Slide,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import ad1 from "../assets/Anuncios/resultados_2026_1.webp";
import ad2 from "../assets/Anuncios/laboral.webp";
import ad3 from "../assets/Anuncios/apertura2026_1.webp";
import ad4 from "../assets/Anuncios/campeon.webp";
import ad5 from "../assets/Anuncios/examen_simulacro.webp";
import ad6 from "../assets/Anuncios/lapre_2026-II.webp";
import ad7 from "../assets/Anuncios/admision-2026-2.webp"

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function ModalAnuncios({
  delaySegundos = 3,
  intervaloCarrusel = 4,
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const anuncios = [
    {
      img: ad7,
    },
    // {
    //   img: ad6,
    // },
    // {
    //   img: ad1,
    //   link: "/admision",
    //   btnText: "Ver Resultados",
    // },
    // {
    //   img: ad2,
    //   link: "/eventos",
    // },
    // {
    //   img: ad3,
    // },
    {
      img: ad4,
    },
    // {
    //   img: ad5,
    // },
    
  ];

  useEffect(() => {
    if (location.pathname !== "/") return;

    const timer = setTimeout(() => setOpen(true), delaySegundos * 1000);
    return () => clearTimeout(timer);
  }, [location.pathname, delaySegundos]);
  useEffect(() => {
    if (location.pathname !== "/") {
      setOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isPaused || !open) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === anuncios.length - 1 ? 0 : prev + 1));
    }, intervaloCarrusel * 1000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, open, anuncios.length, intervaloCarrusel]);

  const handleNext = () =>
    setCurrentIndex((p) => (p === anuncios.length - 1 ? 0 : p + 1));
  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? anuncios.length - 1 : p - 1));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: "16px", md: "24px" },
          bgcolor: "#000",
          maxWidth: "750px",
  width: "90vw",
  "@media (min-width:1024px)": {
    width: "500px",
  },
  "@media (min-width:1440px)": {
    width: "900px",
  },
          height: { xs: "auto", md: "80vh" },
          aspectRatio: { xs: "1 / 1", md: "auto" },
          maxHeight: { xs: "80vh", md: "90vh" },
          margin: { xs: 2, md: 4 },
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          p: 0,
          height: "100%",
          position: "relative",
          bgcolor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover .nav-btn": { opacity: 1 },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: { xs: 10, md: 15 },
            right: { xs: 10, md: 15 },
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.4)",
            color: "#fff",
            backdropFilter: "blur(8px)",
            cursor: "default",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              component="img"
              src={anuncios[currentIndex].img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: { xs: "contain", md: "cover" },
                bgcolor: "#000",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {anuncios[currentIndex].btnText && (
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 20, md: 35 },
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            <Button
              component={Link}
              to={anuncios[currentIndex].link}
              disableElevation
              sx={{
                bgcolor: "#003366",
                color: "#fff",
                px: { xs: 3, md: 5 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "0.9rem", md: "1rem" },
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)",
                position: "relative",
                overflow: "hidden",
                opacity: { xs: 1, md: 0 },
                transform: { xs: "none", md: "translateY(20px)" },
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "default",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transition: "all 0.6s ease",
                },
                "&:hover": {
                  bgcolor: "#004080",
                  transform: {
                    xs: "scale(1.05)",
                    md: "scale(1.08) translateY(0)",
                  },
                  boxShadow: "0 12px 30px rgba(0, 51, 102, 0.8)",
                  "&::before": {
                    left: "100%",
                  },
                },
                ".MuiDialogContent-root:hover &": {
                  opacity: 1,
                  transform: { md: "translateY(0)" },
                },
              }}
            >
              {anuncios[currentIndex].btnText}
            </Button>
          </Box>
        )}

        <IconButton
          onClick={handlePrev}
          className="nav-btn"
          sx={{
            position: "absolute",
            left: { xs: 5, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: { xs: 1, md: 0 },
            transition: "0.4s ease",
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            zIndex: 6,
            backdropFilter: "blur(4px)",
            cursor: "default",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowBackIosNewRoundedIcon
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          />
        </IconButton>

        <IconButton
          onClick={handleNext}
          className="nav-btn"
          sx={{
            position: "absolute",
            right: { xs: 5, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: { xs: 1, md: 0 },
            transition: "0.4s ease",
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            zIndex: 6,
            backdropFilter: "blur(4px)",
            cursor: "default",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowForwardIosRoundedIcon
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
}
