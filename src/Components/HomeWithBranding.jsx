import React, { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Inicio from "../Pages/Inicio";

const HomeWithBranding = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <PageLoader />;
  }

  return <Inicio />;
};

export default HomeWithBranding;
