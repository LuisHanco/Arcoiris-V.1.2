import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import img1 from "../assets/logo_0_part1.png";
import img2 from "../assets/logo_0_part2.png";
import img3 from "../assets/logo_0_part3.png";

// Animaciones desde distintas direcciones
const slideFromTopLeft = keyframes`
  0% { transform: translate(-100px, -100px); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
`;

const slideFromRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideFromTop = keyframes`
  0% { transform: translateY(-100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export default function PageLoader() {
  // Eliminamos isLoading, useEffect y useLocation.
  // Si este componente se llama, simplemente se muestra.

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box sx={{ position: "relative", width: 350, height: 350 }}>
        {/* PARTE 1: Desde arriba a la izquierda */}
        <Box
          component="img"
          src={img1}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            animation: `${slideFromTopLeft} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
          }}
        />

        {/* PARTE 2: Desde la derecha */}
        <Box
          component="img"
          src={img2}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            animation: `${slideFromRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards`,
            opacity: 0,
          }}
        />

        {/* PARTE 3: Desde abajo */}
        <Box
          component="img"
          src={img3}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            animation: `${slideFromTop} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards`,
            opacity: 0,
          }}
        />
      </Box>
    </Box>
  );
}
