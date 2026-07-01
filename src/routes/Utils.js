export function obtenerPeriodoActual() {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();

  // Sumamos 1 para que Enero sea 1 y Diciembre sea 12
  const mes = fechaActual.getMonth() + 1;

  // Si el mes es menor o igual a 5 (Enero a Mayo), es 'I', sino es 'II'
  const periodo = mes <= 5 ? "I" : "II";
  const inicioClases = mes <= 5 ? "06 de Abril" : "07 de Septiembre";

  return {
    periodoActual: `${año}-${periodo}`,
    inicioClases,
  };
}
