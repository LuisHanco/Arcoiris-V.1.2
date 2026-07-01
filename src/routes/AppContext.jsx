// AppContext.jsx
import { createContext, useContext } from "react";
import { obtenerPeriodoActual } from "./Utils";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { periodoActual, inicioClases } = obtenerPeriodoActual();

  const dataGlobal = {
    periodo: periodoActual,
    inicioClases,
  };

  return (
    <AppContext.Provider value={dataGlobal}>{children}</AppContext.Provider>
  );
};
export const useGlobalData = () => useContext(AppContext);
