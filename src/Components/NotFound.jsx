import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import logo from "../assets/logo_arcoiris_blanco.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0A192F",
        position: "relative",
        overflow: "hidden",
        p: { xs: 2, md: 4 },
      }}
    >
      <Box
        component={motion.div}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-15%",
          width: { xs: "120vw", md: "80vw" },
          height: { xs: "120vw", md: "80vw" },
          borderRadius: "50%",
          background: "radial-gradient(circle, #003366 0%, transparent 60%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          x: [0, -100, 40, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        sx={{
          position: "absolute",
          bottom: "-30%",
          right: "-20%",
          width: { xs: "130vw", md: "90vw" },
          height: { xs: "130vw", md: "90vw" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 51, 102, 0.8) 0%, transparent 60%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: { xs: "95%", md: "85%" },
          maxWidth: "1400px",
          p: { xs: 4, md: 8 },
          borderRadius: "24px",
          bgcolor: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          component={motion.img}
          variants={fadeUp}
          src={logo}
          alt="Logo IESPP Arco Iris"
          sx={{
            height: { xs: "115px", sm: "95px", md: "95px" },
            objectFit: "contain",
            mb: 4,
            filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.2))",
          }}
        />

        <motion.div variants={fadeUp}>
          <Typography
            variant="h1"
            component={motion.div}
            animate={{ scale: [1, 1.02, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              fontSize: { xs: "6rem", sm: "12rem", md: "18rem" },
              fontWeight: 950,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              userSelect: "none",
              background: "linear-gradient(135deg, #003366 10%, #ffffff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
              filter: "drop-shadow(0px 8px 20px rgba(0, 51, 102, 0.4))",
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.8px",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2.8rem" },
            }}
          >
            Página no encontrada
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "600px",
              mx: "auto",
              mb: 6,
              px: { xs: 0, sm: 2 },
            }}
          >
            Tu camino te ha traído a una ruta desconocida. Explora nuestra
            página desde el inicio.
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            disableElevation
            sx={{
              bgcolor: "#003366",
              color: "#ffffff",
              px: 5,
              py: 1.8,
              fontWeight: 700,
              fontSize: "1.05rem",
              textTransform: "none",
              borderRadius: "50px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#002244",
                boxShadow: "0 8px 25px rgba(0, 51, 102, 0.5)",
              },
            }}
          >
            Regresar al Inicio
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
