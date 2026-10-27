import React, { useState, useEffect, useRef } from 'react';

// ============================================================================
// CLAVES DE ACCESO Y EVENTOS MAESTROS (+20 ACTIVIDADES INSTITUCIONALES)
// ============================================================================
const PIN_AREA_ENCARGADA = 'arcoiris2026';
const PIN_ADMIN_TI = '1234';

const CATEGORIAS = [
  'Todos',
  'Cultural / Danzas',
  'Deportivo',
  'Académico',
  'Investigación',
  'Institucional',
  'Talleres'
];

const EVENTOS_INICIALES = [
  {
    id: 'evt-1',
    titulo: 'Gran Concurso de Danzas Autóctonas y Folklóricas 2026',
    categoria: 'Cultural / Danzas',
    fecha: '2026-11-20',
    hora: '09:00 AM - 05:00 PM',
    lugar: 'Patio de Honor / Coliseo',
    organizador: 'Coordinación de Arte, Cultura y Bienestar',
    descripcion: 'Presentación oficial de danzas tradicionales por semestres académicos. La inscripción y reserva de danza se realiza únicamente en el área encargada previo pago de derecho de participación.',
    estado: 'En Curso',
    costoInscripcion: 'S/ 50.00',
    etiquetaParticipacion: 'Danza Inscrita', // Se adapta al tipo de evento (Danza, Disciplina, Proyecto)
    cupoMaximo: 20,
    acciones: {
      mostrarInscritos: true,
      mostrarGanadores: false,
    },
    inscritos: [
      {
        id: 101,
        dni: '74859612',
        representante: 'María Fernanda Ttito (Delegada)',
        programa: 'Educación Inicial',
        semestre: 'VI Semestre',
        detalleParticipacion: 'Carnaval de Tinta (Cusco)',
        nroRecibo: 'REC-00142',
        montoPago: '50.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '25/10/2026 - 09:45 AM'
      },
      {
        id: 102,
        dni: '71234568',
        representante: 'Carlos Mamani Quispe (Delegado)',
        programa: 'Educación Física',
        semestre: 'VIII Semestre',
        detalleParticipacion: 'Kachampa de Urcos',
        nroRecibo: 'REC-00145',
        montoPago: '50.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '25/10/2026 - 11:20 AM'
      },
      {
        id: 103,
        dni: '76543219',
        representante: 'Lucía Huamán Ccuno (Delegada)',
        programa: 'Educación Inicial',
        semestre: 'IV Semestre',
        detalleParticipacion: ' Mestiza Qoyacha',
        nroRecibo: 'REC-00149',
        montoPago: '50.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '26/10/2026 - 03:15 PM'
      }
    ],
    ganadores: []
  },
  {
    id: 'evt-2',
    titulo: 'Copa Integración "Arco Iris 2026-II" (Futsal, Vóley y Básquet)',
    categoria: 'Deportivo',
    fecha: '2026-11-12',
    hora: '08:00 AM - 06:00 PM',
    lugar: 'Polideportivo Institucional',
    organizador: 'Área de Educación Física y Deportes',
    descripcion: 'Campeonato oficial inter-semestres. Las delegaciones deben inscribir a sus equipos en coordinación previo abono de inscripción.',
    estado: 'En Curso',
    costoInscripcion: 'S/ 40.00',
    etiquetaParticipacion: 'Disciplina / Categoría',
    cupoMaximo: 24,
    acciones: {
      mostrarInscritos: true,
      mostrarGanadores: false,
    },
    inscritos: [
      {
        id: 201,
        dni: '70112233',
        representante: 'Jorge Luis Condori (Capitán - Los Halcones)',
        programa: 'Educación Física',
        semestre: 'VI Semestre',
        detalleParticipacion: 'Futsal Varones y Vóley Mixto',
        nroRecibo: 'REC-00188',
        montoPago: '40.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '26/10/2026 - 10:10 AM'
      }
    ],
    ganadores: []
  },
  {
    id: 'evt-3',
    titulo: 'I Feria de Investigación e Innovación Pedagógica',
    categoria: 'Investigación',
    fecha: '2026-10-15',
    hora: '08:30 AM - 04:00 PM',
    lugar: 'Auditorio Principal',
    organizador: 'Unidad de Investigación',
    descripcion: 'Exposición y evaluación de proyectos de investigación aplicada y materiales didácticos innovadores.',
    estado: 'Finalizado',
    costoInscripcion: 'S/ 20.00',
    etiquetaParticipacion: 'Proyecto / Tema Inscrito',
    cupoMaximo: 30,
    acciones: {
      mostrarInscritos: true,
      mostrarGanadores: true,
    },
    inscritos: [
      {
        id: 301,
        dni: '73445566',
        representante: 'Ana Belén Paucar',
        programa: 'Educación Inicial',
        semestre: 'X Semestre',
        detalleParticipacion: 'Juegos psicomotrices con material reciclado',
        nroRecibo: 'REC-00092',
        montoPago: '20.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '10/10/2026 - 04:00 PM'
      },
      {
        id: 302,
        dni: '78990011',
        representante: 'Pedro Pablo Ccorimanya',
        programa: 'Educación Física',
        semestre: 'IX Semestre',
        detalleParticipacion: 'Biomecánica aplicada en carreras de altura',
        nroRecibo: 'REC-00095',
        montoPago: '20.00',
        estadoPago: 'Pagado',
        fechaHoraRegistro: '11/10/2026 - 11:30 AM'
      }
    ],
    ganadores: [
      { puesto: '1er Puesto', participante: 'Ana Belén Paucar', proyecto: 'Juegos psicomotrices con material reciclado', programa: 'Educación Inicial - X Semestre' },
      { puesto: '2do Puesto', participante: 'Pedro Pablo Ccorimanya', proyecto: 'Biomecánica aplicada en carreras de altura', programa: 'Educación Física - IX Semestre' }
    ]
  }
];

const STORAGE_KEY = 'arcoiris_eventos_caja_v3';

export default function EventosInstitucionales() {
  const [eventos, setEventos] = useState(() => {
    try {
      const guardados = localStorage.getItem(STORAGE_KEY);
      return guardados ? JSON.parse(guardados) : EVENTOS_INICIALES;
    } catch {
      return EVENTOS_INICIALES;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(eventos));
  }, [eventos]);

  // Filtros
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [busquedaInscrito, setBusquedaInscrito] = useState('');

  // Estado de Autenticación de la Encargada
  const [esAdmin, setEsAdmin] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [errorPin, setErrorPin] = useState('');
  const [alerta, setAlerta] = useState('');

  // Control de Modales
  const [eventoActivo, setEventoActivo] = useState(null);
  // Vistas: 'inscritos' | 'ganadores' | 'inscribir-pago' | 'form-evento' | 'admin-ganadores'
  const [vistaModal, setVistaModal] = useState(null);

  const fileInputRef = useRef(null);

  // Estado para Crear / Editar un Evento
  const [formEvento, setFormEvento] = useState({
    id: '',
    titulo: '',
    categoria: 'Cultural / Danzas',
    fecha: '',
    hora: '',
    lugar: '',
    organizador: '',
    descripcion: '',
    estado: 'En Curso',
    costoInscripcion: 'S/ 30.00',
    etiquetaParticipacion: 'Danza / Tema Inscrito',
    cupoMaximo: 30,
    acciones: {
      mostrarInscritos: true,
      mostrarGanadores: false,
    }
  });

  // Estado Exclusivo de la Encargada para Inscribir Previo Pago
  const [formPagoInscripcion, setFormPagoInscripcion] = useState({
    dni: '',
    representante: '',
    programa: 'Educación Inicial',
    semestre: 'I Semestre',
    detalleParticipacion: '', // Nombre de la danza, disciplina o proyecto
    nroRecibo: '',
    montoPago: '',
    estadoPago: 'Pagado'
  });

  // Estado Ganadores
  const [nuevoGanador, setNuevoGanador] = useState({
    puesto: '1er Puesto',
    participante: '',
    proyecto: '',
    programa: ''
  });

  const lanzarAlerta = (msg) => {
    setAlerta(msg);
    setTimeout(() => setAlerta(''), 3500);
  };

  // Obtener fecha y hora actual formateada (Ej: 27/10/2026 - 08:35 AM)
  const obtenerFechaHoraActual = () => {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const hora = ahora.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${fecha} - ${hora}`;
  };

  // --- LOGIN DE LA ENCARGADA ---
  const verificarAcceso = (e) => {
    e.preventDefault();
    if (pinInput === PIN_AREA_ENCARGADA || pinInput === PIN_ADMIN_TI) {
      setEsAdmin(true);
      setModalLogin(false);
      setPinInput('');
      setErrorPin('');
      lanzarAlerta('🔓 Modo Encargada activado: Ya puedes inscribir previo pago y gestionar eventos');
    } else {
      setErrorPin('Clave incorrecta. Solicite acceso al administrador.');
    }
  };

  // --- CREAR / EDITAR EVENTOS ---
  const abrirNuevoEvento = () => {
    setFormEvento({
      id: '',
      titulo: '',
      categoria: 'Cultural / Danzas',
      fecha: '',
      hora: '',
      lugar: '',
      organizador: '',
      descripcion: '',
      estado: 'En Curso',
      costoInscripcion: 'S/ 50.00',
      etiquetaParticipacion: 'Danza Inscrita',
      cupoMaximo: 25,
      acciones: {
        mostrarInscritos: true,
        mostrarGanadores: false,
      }
    });
    setVistaModal('form-evento');
  };

  const abrirEditarEvento = (ev) => {
    setFormEvento({ ...ev });
    setVistaModal('form-evento');
  };

  const guardarEvento = (e) => {
    e.preventDefault();
    if (formEvento.id) {
      setEventos(eventos.map(ev => ev.id === formEvento.id ? { ...ev, ...formEvento } : ev));
      lanzarAlerta('✅ Evento actualizado correctamente');
    } else {
      const nuevo = {
        ...formEvento,
        id: 'evt-' + Date.now(),
        inscritos: [],
        ganadores: []
      };
      setEventos([nuevo, ...eventos]);
      lanzarAlerta('✅ Nuevo evento agregado');
    }
    setVistaModal(null);
  };

  const eliminarEvento = (id) => {
    if (window.confirm('¿Está segura de eliminar este evento y toda su lista de inscritos?')) {
      setEventos(eventos.filter(ev => ev.id !== id));
      lanzarAlerta('🗑️ Evento eliminado');
    }
  };

  // --- INTERRUPTORES DE VISIBILIDAD PÚBLICA ---
  const cambiarVisibilidad = (eventoId, campo) => {
    setEventos(eventos.map(ev => {
      if (ev.id === eventoId) {
        return {
          ...ev,
          acciones: {
            ...ev.acciones,
            [campo]: !ev.acciones[campo]
          }
        };
      }
      return ev;
    }));
  };

  // --- INSCRIPCIÓN POR PARTE DE LA ENCARGADA (PREVIO PAGO) ---
  const abrirModalInscribirPago = (ev) => {
    setEventoActivo(ev);
    const montoSugerido = ev.costoInscripcion ? ev.costoInscripcion.replace(/[^\d.]/g, '') : '';
    setFormPagoInscripcion({
      dni: '',
      representante: '',
      programa: 'Educación Inicial',
      semestre: 'I Semestre',
      detalleParticipacion: '',
      nroRecibo: `REC-00${ev.inscritos.length + 101}`,
      montoPago: montoSugerido,
      estadoPago: 'Pagado'
    });
    setVistaModal('inscribir-pago');
  };

  const registrarInscripcionConPago = (e) => {
    e.preventDefault();
    if (!eventoActivo) return;

    // Validar que no hayan inscrito la misma danza/tema antes (evita duplicidad de danzas)
    const danzaRepetida = eventoActivo.inscritos.some(
      i => i.detalleParticipacion.trim().toLowerCase() === formPagoInscripcion.detalleParticipacion.trim().toLowerCase()
    );

    if (danzaRepetida) {
      const confirmar = window.confirm(
        `⚠️ ATENCIÓN: "${formPagoInscripcion.detalleParticipacion}" ya fue inscrita por otro grupo en este evento. ¿Desea registrarla de todos modos?`
      );
      if (!confirmar) return;
    }

    const nuevoInscrito = {
      id: Date.now(),
      ...formPagoInscripcion,
      fechaHoraRegistro: obtenerFechaHoraActual()
    };

    const actualizados = eventos.map(ev => {
      if (ev.id === eventoActivo.id) {
        const modificado = {
          ...ev,
          inscritos: [...ev.inscritos, nuevoInscrito],
          acciones: { ...ev.acciones, mostrarInscritos: true }
        };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    });

    setEventos(actualizados);
    lanzarAlerta('✅ Inscripción y pago registrados. Ya es visible en el padrón público.');
    // Reiniciar formulario para el siguiente registro o pasar a ver la lista
    setVistaModal('inscritos');
  };

  const eliminarInscrito = (eventoId, inscritoId) => {
    if (!window.confirm('¿Anular esta inscripción del padrón?')) return;
    setEventos(eventos.map(ev => {
      if (ev.id === eventoId) {
        const modificado = { ...ev, inscritos: ev.inscritos.filter(i => i.id !== inscritoId) };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    }));
    lanzarAlerta('🗑️ Inscripción retirada del padrón');
  };

  // --- GESTIÓN DE GANADORES ---
  const guardarGanador = (e) => {
    e.preventDefault();
    if (!eventoActivo) return;

    const actualizados = eventos.map(ev => {
      if (ev.id === eventoActivo.id) {
        const modificado = {
          ...ev,
          ganadores: [...ev.ganadores, { ...nuevoGanador, id: Date.now() }],
          acciones: { ...ev.acciones, mostrarGanadores: true }
        };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    });

    setEventos(actualizados);
    setNuevoGanador({ puesto: '1er Puesto', participante: '', proyecto: '', programa: '' });
    lanzarAlerta('🏆 Ganador publicado correctamente');
  };

  const borrarGanador = (eventoId, idx) => {
    setEventos(eventos.map(ev => {
      if (ev.id === eventoId) {
        const modificado = { ...ev, ganadores: ev.ganadores.filter((_, i) => i !== idx) };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    }));
  };

  // --- EXPORTAR PADRÓN A EXCEL (CSV) ---
  const descargarPadronCSV = (ev) => {
    if (!ev.inscritos.length) return;
    const cabecera = [
      `Nro,DNI,Delegado o Participante,Programa,Semestre,"${ev.etiquetaParticipacion || 'Danza / Tema'}",Fecha y Hora Inscripcion,Recibo,Monto Pagado`
    ];
    const filas = ev.inscritos.map((i, idx) =>
      `${idx + 1},${i.dni},"${i.representante}","${i.programa}","${i.semestre}","${i.detalleParticipacion}","${i.fechaHoraRegistro}","${i.nroRecibo}","S/ ${i.montoPago}"`
    );
    const csv = 'data:text/csv;charset=utf-8,' + [cabecera, ...filas].join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csv);
    link.download = `Padron_${ev.titulo.replace(/\s+/g, '_')}.csv`;
    link.click();
  };

  // --- RESPALDO Y CONTROL DE CÓDIGO FUENTE ---
  const exportarJSON = () => {
    const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(eventos, null, 2));
    const link = document.createElement('a');
    link.href = data;
    link.download = `respaldo_eventos_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    lanzarAlerta('📥 Archivo de respaldo (.JSON) descargado');
  };

  const importarJSON = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = (ev) => {
      try {
        const datos = JSON.parse(ev.target.result);
        if (Array.isArray(datos)) {
          setEventos(datos);
          lanzarAlerta('📤 Eventos actualizados desde el archivo');
        }
      } catch {
        alert('El archivo seleccionado no es válido.');
      }
    };
    lector.readAsText(archivo);
    e.target.value = null;
  };

  const copiarCodigoJS = () => {
    const codigo = `const EVENTOS_INICIALES = ${JSON.stringify(eventos, null, 2)};`;
    navigator.clipboard.writeText(codigo);
    lanzarAlerta('📋 Código JS copiado al portapapeles');
  };

  // Filtrado de eventos principales
  const eventosFiltrados = eventos.filter(ev => {
    const pasaCat = categoriaActiva === 'Todos' || ev.categoria === categoriaActiva;
    const pasaEst = filtroEstado === 'Todos' || ev.estado === filtroEstado;
    const pasaTxt = ev.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                    ev.organizador.toLowerCase().includes(busqueda.toLowerCase());
    return pasaCat && pasaEst && pasaTxt;
  });

  // Filtrado dentro del modal de inscritos (para buscar qué danza o quién ya se inscribió)
  const inscritosFiltradosModal = eventoActivo
    ? eventoActivo.inscritos.filter(i =>
        i.representante.toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        i.detalleParticipacion.toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        i.programa.toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        i.semestre.toLowerCase().includes(busquedaInscrito.toLowerCase())
      )
    : [];

  return (
    <div className="ev-page">
      <style>{`
        .ev-page {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background-color: #f1f5f9;
          min-height: 100vh;
          padding-bottom: 80px;
          color: #1e293b;
        }
        .ev-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }
        /* CABECERA */
        .ev-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%);
          color: #ffffff;
          padding: 52px 0 64px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .ev-hero-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .ev-pill {
          display: inline-block;
          background: rgba(245, 158, 11, 0.22);
          border: 1px solid rgba(251, 191, 36, 0.45);
          color: #fde68a;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .ev-hero-title {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 10px 0;
        }
        .ev-hero-sub {
          color: #dbeafe;
          font-size: 14.5px;
          max-width: 660px;
          margin: 0;
          line-height: 1.5;
        }
        /* BOTONES */
        .ev-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.18s ease;
          text-decoration: none;
        }
        .ev-btn:hover { transform: translateY(-1px); }
        .ev-btn-glass {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .ev-btn-primary {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
        }
        .ev-btn-primary:hover { background: #1d4ed8; }
        .ev-btn-emerald {
          background: #059669;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
        }
        .ev-btn-emerald:hover { background: #047857; }
        .ev-btn-amber {
          background: #f59e0b;
          color: #0f172a;
        }
        .ev-btn-amber:hover { background: #d97706; color: #fff; }
        .ev-btn-gray {
          background: #f1f5f9;
          color: #334155;
          border: 1px solid #cbd5e1;
        }
        .ev-btn-gray:hover { background: #e2e8f0; }
        .ev-btn-danger {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }
        /* FILTROS */
        .ev-filter-bar {
          background: #ffffff;
          border-radius: 14px;
          padding: 16px 20px;
          margin-top: -28px;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .ev-cats {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ev-cat-item {
          padding: 7px 13px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          border: none;
          background: #f1f5f9;
          color: #475569;
          cursor: pointer;
        }
        .ev-cat-item.active {
          background: #1e40af;
          color: #ffffff;
        }
        .ev-input, .ev-select, .ev-textarea {
          padding: 9px 12px;
          border-radius: 9px;
          border: 1px solid #cbd5e1;
          font-size: 13px;
          background: #ffffff;
          color: #0f172a;
          outline: none;
        }
        .ev-input:focus, .ev-select:focus, .ev-textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        /* BARRA ADMIN */
        .ev-admin-panel {
          background: #0f172a;
          color: #ffffff;
          border: 2px solid #10b981;
          border-radius: 14px;
          padding: 16px 20px;
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        /* GRILLA DE EVENTOS */
        .ev-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
          margin-top: 26px;
        }
        .ev-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        .ev-card-top {
          padding: 15px 20px 12px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ev-tag-cat {
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .ev-badge-est {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
        }
        .est-EnCurso { background: #dcfce7; color: #15803d; }
        .est-Proximo { background: #dbeafe; color: #1e40af; }
        .est-Finalizado { background: #e2e8f0; color: #475569; }
        .ev-card-body { padding: 18px 20px; }
        .ev-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
          line-height: 1.35;
        }
        .ev-card-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0 0 14px 0;
          line-height: 1.5;
        }
        .ev-info-list {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 12.5px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ev-notice-pago {
          margin-top: 12px;
          background: #eff6ff;
          border-left: 4px solid #2563eb;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 11.5px;
          color: #1e3a8a;
          font-weight: 600;
        }
        /* VISTA RÁPIDA DE ÚLTIMOS INSCRITOS EN LA TARJETA */
        .ev-preview-box {
          margin-top: 12px;
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 10px;
          padding: 10px 12px;
        }
        .ev-preview-item {
          font-size: 11.5px;
          padding: 4px 0;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        .ev-preview-item:last-child { border-bottom: none; }
        .ev-card-actions {
          padding: 0 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ev-admin-zone {
          background: #ecfdf5;
          border-top: 2px dashed #34d399;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ev-check-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: #064e3b;
          cursor: pointer;
        }
        /* MODALES */
        .ev-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(3px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .ev-modal {
          background: #ffffff;
          border-radius: 18px;
          max-width: 780px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          max-height: 90vh;
          overflow-y: auto;
        }
        .ev-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }
        .ev-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .ev-full { grid-column: span 2; }
        .ev-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 5px;
        }
        .ev-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12.5px;
        }
        .ev-table th {
          background: #0f172a;
          color: #ffffff;
          text-align: left;
          padding: 11px 12px;
          font-size: 12px;
        }
        .ev-table td {
          padding: 10px 12px;
          border-bottom: 1px solid #e2e8f0;
          vertical-align: middle;
        }
        .ev-table tr:nth-child(even) { background: #f8fafc; }
        .ev-danza-pill {
          display: inline-block;
          background: #dbeafe;
          color: #1e40af;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
        }
        .ev-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #0f172a;
          color: #ffffff;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          border-left: 5px solid #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          z-index: 10000;
        }
        @media (max-width: 640px) {
          .ev-form-grid { grid-template-columns: 1fr; }
          .ev-full { grid-column: span 1; }
          .ev-hero-title { font-size: 25px; }
        }
      `}</style>

      {alerta && <div className="ev-toast">{alerta}</div>}

      {/* CABECERA */}
      <header className="ev-hero">
        <div className="ev-container ev-hero-flex">
          <div>
            <span className="ev-pill">🏛️ Actividades Oficiales IESPP "Arco Iris"</span>
            <h1 className="ev-hero-title">Cronograma de Eventos y Padrón de Inscritos</h1>
            <p className="ev-hero-sub">
              Consulta las actividades institucionales, verifica en tiempo real qué delegaciones o estudiantes ya se inscribieron, qué danza o categoría registraron y la fecha exacta de su inscripción.
            </p>
          </div>

          <div>
            {!esAdmin ? (
              <button className="ev-btn ev-btn-glass" onClick={() => setModalLogin(true)}>
                🔐 Acceso Encargada (Inscripciones)
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', background: 'rgba(0,0,0,0.35)', padding: '8px 12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#6ee7b7' }}>
                  🟢 Modo Encargada Activo
                </span>
                <button className="ev-btn ev-btn-amber" onClick={abrirNuevoEvento}>
                  ➕ Crear Evento
                </button>
                <button className="ev-btn ev-btn-glass" onClick={() => setEsAdmin(false)}>
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="ev-container">
        {/* FILTROS */}
        <div className="ev-filter-bar">
          <div className="ev-cats">
            {CATEGORIAS.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`ev-cat-item ${categoriaActiva === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <select
              className="ev-select"
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
            >
              <option value="Todos">Todos los estados ({eventos.length})</option>
              <option value="En Curso">🟢 En Curso</option>
              <option value="Próximo">🔵 Próximos</option>
              <option value="Finalizado">⚪ Finalizados</option>
            </select>

            <input
              type="text"
              className="ev-input"
              style={{ minWidth: '230px' }}
              placeholder="🔍 Buscar evento o área..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        {/* BARRA DE CONTROL PARA LA ENCARGADA / TI */}
        {esAdmin && (
          <div className="ev-admin-panel">
            <div>
              <div style={{ fontWeight: 800, fontSize: '14px', color: '#34d399' }}>
                💳 Panel de Gestión de Eventos e Inscripciones Previo Pago
              </div>
              <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '3px' }}>
                Los estudiantes NO pueden inscribirse solos. Usa el botón <strong>"Inscribir Previo Pago"</strong> en cada tarjeta para registrarlos tras verificar su voucher/pago.
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button className="ev-btn ev-btn-primary" onClick={copiarCodigoJS}>
                📋 Copiar Código JS
              </button>
              <button className="ev-btn ev-btn-gray" onClick={exportarJSON}>
                📥 Descargar .JSON
              </button>
              <button className="ev-btn ev-btn-gray" onClick={() => fileInputRef.current?.click()}>
                📤 Cargar .JSON
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={importarJSON}
                accept=".json"
                style={{ display: 'none' }}
              />
            </div>
          </div>
        )}

        {/* TARJETAS DE EVENTOS */}
        <div className="ev-grid">
          {eventosFiltrados.map(ev => {
            const claseEst = ev.estado === 'En Curso' ? 'est-EnCurso' : ev.estado === 'Próximo' ? 'est-Proximo' : 'est-Finalizado';
            return (
              <div key={ev.id} className="ev-card">
                <div>
                  <div className="ev-card-top">
                    <span className="ev-tag-cat">{ev.categoria}</span>
                    <span className={`ev-badge-est ${claseEst}`}>{ev.estado}</span>
                  </div>

                  <div className="ev-card-body">
                    <h2 className="ev-card-title">{ev.titulo}</h2>
                    <p className="ev-card-desc">{ev.descripcion}</p>

                    <div className="ev-info-list">
                      <div>📅 <strong>Fecha del Evento:</strong> {ev.fecha} ({ev.hora})</div>
                      <div>📍 <strong>Lugar:</strong> {ev.lugar}</div>
                      <div>🏛️ <strong>Área Encargada:</strong> {ev.organizador}</div>
                      <div>💵 <strong>Derecho de Inscripción:</strong> {ev.costoInscripcion || 'Gratuito'}</div>
                      <div>👥 <strong>Registrados:</strong> {ev.inscritos.length} / {ev.cupoMaximo} cupos</div>
                    </div>

                    <div className="ev-notice-pago">
                      📌 Inscripciones únicamente en el área encargada ({ev.organizador}) previo pago.
                    </div>

                    {/* RESUMEN DIRECTO EN LA TARJETA DE LAS ÚLTIMAS DANZAS/EQUIPOS INSCRITOS */}
                    {ev.acciones.mostrarInscritos && ev.inscritos.length > 0 && (
                      <div className="ev-preview-box">
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>
                          Últimos registrados ({ev.etiquetaParticipacion || 'Danza / Categoría'}):
                        </div>
                        {ev.inscritos.slice(-3).map(ins => (
                          <div key={ins.id} className="ev-preview-item">
                            <span style={{ fontWeight: 700, color: '#1e40af' }}>🎭 {ins.detalleParticipacion}</span>
                            <span style={{ color: '#64748b' }}>{ins.programa} ({ins.semestre})</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {/* BOTONES PÚBLICOS PARA LOS ESTUDIANTES (SOLO LECTURA) */}
                  <div className="ev-card-actions">
                    {ev.acciones.mostrarInscritos && (
                      <button
                        className="ev-btn ev-btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => {
                          setEventoActivo(ev);
                          setBusquedaInscrito('');
                          setVistaModal('inscritos');
                        }}
                      >
                        📋 Ver Quiénes se Inscribieron y Qué Danza/Tema ({ev.inscritos.length})
                      </button>
                    )}

                    {ev.acciones.mostrarGanadores && (
                      <button
                        className="ev-btn ev-btn-amber"
                        style={{ width: '100%' }}
                        onClick={() => {
                          setEventoActivo(ev);
                          setVistaModal('ganadores');
                        }}
                      >
                        🏆 Ver Ganadores Oficiales ({ev.ganadores.length})
                      </button>
                    )}
                  </div>

                  {/* ZONA EXCLUSIVA DE LA ENCARGADA */}
                  {esAdmin && (
                    <div className="ev-admin-zone">
                      <button
                        className="ev-btn ev-btn-emerald"
                        style={{ width: '100%' }}
                        onClick={() => abrirModalInscribirPago(ev)}
                      >
                        💳 + Inscribir Participante / Danza (Previo Pago)
                      </button>

                      <label className="ev-check-row" style={{ marginTop: '4px' }}>
                        <span>Mostrar Padrón de Inscritos a los Alumnos</span>
                        <input
                          type="checkbox"
                          checked={ev.acciones.mostrarInscritos}
                          onChange={() => cambiarVisibilidad(ev.id, 'mostrarInscritos')}
                        />
                      </label>

                      <label className="ev-check-row">
                        <span>Publicar Cuadro de Ganadores</span>
                        <input
                          type="checkbox"
                          checked={ev.acciones.mostrarGanadores}
                          onChange={() => cambiarVisibilidad(ev.id, 'mostrarGanadores')}
                        />
                      </label>

                      <div style={{ display: 'flex', gap: '6px', marginTop: '6px', paddingTop: '8px', borderTop: '1px solid #a7f3d0' }}>
                        <button
                          className="ev-btn ev-btn-gray"
                          style={{ flex: 1, padding: '7px', fontSize: '12px' }}
                          onClick={() => abrirEditarEvento(ev)}
                        >
                          ✏️ Editar Evento
                        </button>
                        <button
                          className="ev-btn ev-btn-amber"
                          style={{ flex: 1, padding: '7px', fontSize: '12px' }}
                          onClick={() => { setEventoActivo(ev); setVistaModal('admin-ganadores'); }}
                        >
                          🏅 Ganadores
                        </button>
                        <button
                          className="ev-btn ev-btn-danger"
                          style={{ padding: '7px 11px', fontSize: '12px' }}
                          onClick={() => eliminarEvento(ev.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =======================================================================
          MODAL 1: PADRÓN PÚBLICO DE INSCRITOS (QUIÉN, QUÉ DANZA Y CUÁNDO)
         ======================================================================= */}
      {vistaModal === 'inscritos' && eventoActivo && (
        <div className="ev-backdrop">
          <div className="ev-modal">
            <div className="ev-modal-head">
              <div>
                <span className="ev-tag-cat">{eventoActivo.categoria}</span>
                <h3 style={{ margin: '6px 0 3px 0', fontSize: '20px' }}>
                  📋 Padrón Oficial de Inscritos ({eventoActivo.inscritos.length})
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                  {eventoActivo.titulo}
                </p>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '5px 11px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            {/* Buscador dentro del Padrón y Botones de la Encargada */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', marginBottom: '14px' }}>
              <input
                type="text"
                className="ev-input"
                style={{ flex: 1, minWidth: '240px' }}
                placeholder="🔍 Buscar por nombre de danza, delegado, carrera o semestre..."
                value={busquedaInscrito}
                onChange={(e) => setBusquedaInscrito(e.target.value)}
              />

              <div style={{ display: 'flex', gap: '8px' }}>
                {esAdmin && (
                  <button className="ev-btn ev-btn-emerald" onClick={() => abrirModalInscribirPago(eventoActivo)}>
                    💳 + Nueva Inscripción
                  </button>
                )}
                {eventoActivo.inscritos.length > 0 && (
                  <button className="ev-btn ev-btn-primary" onClick={() => descargarPadronCSV(eventoActivo)}>
                    📥 Exportar Excel (.CSV)
                  </button>
                )}
              </div>
            </div>

            {inscritosFiltradosModal.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f8fafc', borderRadius: '12px', color: '#64748b' }}>
                Aún no se registran inscripciones con esos datos en este evento.
              </div>
            ) : (
              <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <table className="ev-table">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Quién se Inscribió (Delegado / Grupo)</th>
                      <th>Programa y Ciclo</th>
                      <th>{eventoActivo.etiquetaParticipacion || 'Qué Danza / Categoría Inscribió'}</th>
                      <th>Cuándo se Inscribió (Fecha y Hora)</th>
                      {esAdmin && <th>Pago / Recibo</th>}
                      {esAdmin && <th>Anular</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {inscritosFiltradosModal.map((ins, i) => (
                      <tr key={ins.id}>
                        <td style={{ fontWeight: 800, color: '#64748b' }}>{i + 1}</td>
                        <td>
                          <div style={{ fontWeight: 700, color: '#0f172a' }}>{ins.representante}</div>
                          {esAdmin && <div style={{ fontSize: '11px', color: '#64748b' }}>DNI: {ins.dni}</div>}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{ins.programa}</div>
                          <div style={{ fontSize: '11.5px', color: '#475569' }}>{ins.semestre}</div>
                        </td>
                        <td>
                          <span className="ev-danza-pill">🎭 {ins.detalleParticipacion}</span>
                        </td>
                        <td>
                          <div style={{ fontWeight: 600, color: '#334155' }}>🕒 {ins.fechaHoraRegistro}</div>
                          <span style={{ fontSize: '11px', color: '#15803d', fontWeight: 700 }}>✓ Inscripción Confirmada</span>
                        </td>
                        {esAdmin && (
                          <td>
                            <div style={{ fontWeight: 700, color: '#047857' }}>S/ {ins.montoPago}</div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>{ins.nroRecibo}</div>
                          </td>
                        )}
                        {esAdmin && (
                          <td>
                            <button
                              className="ev-btn ev-btn-danger"
                              style={{ padding: '5px 9px', fontSize: '11px' }}
                              onClick={() => eliminarInscrito(eventoActivo.id, ins.id)}
                            >
                              🗑️
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 2: INSCRIBIR PREVIO PAGO (EXCLUSIVO PARA LA ENCARGADA)
         ======================================================================= */}
      {vistaModal === 'inscribir-pago' && esAdmin && eventoActivo && (
        <div className="ev-backdrop">
          <div className="ev-modal" style={{ maxWidth: '600px' }}>
            <div className="ev-modal-head">
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase' }}>
                  💳 Registro Oficial Previo Pago
                </span>
                <h3 style={{ margin: '4px 0 0 0', fontSize: '19px' }}>
                  Inscribir en: {eventoActivo.titulo}
                </h3>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '5px 11px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            <form onSubmit={registrarInscripcionConPago}>
              <div className="ev-form-grid">
                <div>
                  <label className="ev-label">DNI del Delegado / Estudiante *</label>
                  <input
                    type="text"
                    required
                    maxLength="8"
                    pattern="\d{8}"
                    placeholder="8 dígitos"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.dni}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, dni: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Semestre / Sección *</label>
                  <select
                    className="ev-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.semestre}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, semestre: e.target.value })}
                  >
                    {[
                      'I Semestre', 'II Semestre', 'III Semestre', 'IV Semestre', 'V Semestre',
                      'VI Semestre', 'VII Semestre', 'VIII Semestre', 'IX Semestre', 'X Semestre',
                      'Egresados', 'Plana Docente'
                    ].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="ev-full">
                  <label className="ev-label">Nombre Completo del Delegado o Grupo Responsable *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: María Fernanda Ttito (Delegada Inicial VI)"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.representante}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, representante: e.target.value })}
                  />
                </div>

                <div className="ev-full">
                  <label className="ev-label">Programa de Estudios *</label>
                  <select
                    className="ev-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.programa}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, programa: e.target.value })}
                  >
                    <option value="Educación Inicial">Educación Inicial</option>
                    <option value="Educación Física">Educación Física</option>
                    <option value="Institucional / Mixto">Institucional / Mixto</option>
                  </select>
                </div>

                <div className="ev-full" style={{ background: '#eff6ff', padding: '12px', borderRadius: '10px', border: '1px solid #bfdbfe' }}>
                  <label className="ev-label" style={{ color: '#1e40af', fontSize: '13px' }}>
                    🎭 ¿Qué {eventoActivo.etiquetaParticipacion || 'Danza / Categoría / Tema'} está inscribiendo? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Carnaval de Tinta / Valicha / Futsal Varones..."
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box', fontWeight: 700 }}
                    value={formPagoInscripcion.detalleParticipacion}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, detalleParticipacion: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">N° de Recibo / Voucher *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: REC-00150"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.nroRecibo}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, nroRecibo: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Monto Abonado (S/) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 50.00"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.montoPago}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, montoPago: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <button type="button" className="ev-btn ev-btn-gray" onClick={() => setVistaModal(null)}>
                  Cancelar
                </button>
                <button type="submit" className="ev-btn ev-btn-emerald">
                  ✅ Confirmar Pago e Inscribir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 3: CREAR / EDITAR EVENTO (ENCARGADA)
         ======================================================================= */}
      {vistaModal === 'form-evento' && esAdmin && (
        <div className="ev-backdrop">
          <div className="ev-modal" style={{ maxWidth: '620px' }}>
            <div className="ev-modal-head">
              <h3 style={{ margin: 0 }}>{formEvento.id ? '✏️ Editar Evento' : '➕ Crear Nuevo Evento'}</h3>
              <button className="ev-btn ev-btn-gray" style={{ padding: '4px 10px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            <form onSubmit={guardarEvento}>
              <div className="ev-form-grid">
                <div className="ev-full">
                  <label className="ev-label">Título del Evento *</label>
                  <input
                    type="text"
                    required
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.titulo}
                    onChange={(e) => setFormEvento({ ...formEvento, titulo: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Categoría</label>
                  <select
                    className="ev-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.categoria}
                    onChange={(e) => setFormEvento({ ...formEvento, categoria: e.target.value })}
                  >
                    {CATEGORIAS.filter(c => c !== 'Todos').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="ev-label">Estado</label>
                  <select
                    className="ev-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.estado}
                    onChange={(e) => setFormEvento({ ...formEvento, estado: e.target.value })}
                  >
                    <option value="En Curso">En Curso</option>
                    <option value="Próximo">Próximo</option>
                    <option value="Finalizado">Finalizado</option>
                  </select>
                </div>

                <div>
                  <label className="ev-label">Costo de Inscripción</label>
                  <input
                    type="text"
                    placeholder="Ej: S/ 50.00"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.costoInscripcion}
                    onChange={(e) => setFormEvento({ ...formEvento, costoInscripcion: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Título de Columna (Ej: Danza Inscrita)</label>
                  <input
                    type="text"
                    placeholder="Ej: Danza Inscrita / Disciplina"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.etiquetaParticipacion}
                    onChange={(e) => setFormEvento({ ...formEvento, etiquetaParticipacion: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Fecha del Evento *</label>
                  <input
                    type="date"
                    required
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.fecha}
                    onChange={(e) => setFormEvento({ ...formEvento, fecha: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Hora *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 09:00 AM - 04:00 PM"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.hora}
                    onChange={(e) => setFormEvento({ ...formEvento, hora: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Lugar *</label>
                  <input
                    type="text"
                    required
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.lugar}
                    onChange={(e) => setFormEvento({ ...formEvento, lugar: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Área Encargada *</label>
                  <input
                    type="text"
                    required
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.organizador}
                    onChange={(e) => setFormEvento({ ...formEvento, organizador: e.target.value })}
                  />
                </div>

                <div className="ev-full">
                  <label className="ev-label">Descripción e Indicaciones de Pago *</label>
                  <textarea
                    rows="3"
                    required
                    className="ev-textarea"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.descripcion}
                    onChange={(e) => setFormEvento({ ...formEvento, descripcion: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <button type="button" className="ev-btn ev-btn-gray" onClick={() => setVistaModal(null)}>Cancelar</button>
                <button type="submit" className="ev-btn ev-btn-primary">Guardar Evento</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 4: GANADORES
         ======================================================================= */}
      {(vistaModal === 'ganadores' || vistaModal === 'admin-ganadores') && eventoActivo && (
        <div className="ev-backdrop">
          <div className="ev-modal" style={{ maxWidth: '600px' }}>
            <div className="ev-modal-head">
              <div>
                <h3 style={{ margin: 0 }}>🏆 Cuadro de Honor y Ganadores</h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>{eventoActivo.titulo}</p>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '4px 10px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            {esAdmin && (
              <form onSubmit={guardarGanador} style={{ background: '#fffbeb', padding: '14px', borderRadius: '12px', border: '1px solid #fde68a', marginBottom: '16px' }}>
                <div className="ev-form-grid">
                  <select
                    className="ev-select"
                    value={nuevoGanador.puesto}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, puesto: e.target.value })}
                  >
                    <option value="1er Puesto">🥇 1er Puesto</option>
                    <option value="2do Puesto">🥈 2do Puesto</option>
                    <option value="3er Puesto">🥉 3er Puesto</option>
                    <option value="Mención Honrosa">🏅 Mención Honrosa</option>
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="Programa y Semestre"
                    className="ev-input"
                    value={nuevoGanador.programa}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, programa: e.target.value })}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Delegación / Estudiante Ganador"
                    className="ev-input ev-full"
                    value={nuevoGanador.participante}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, participante: e.target.value })}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Danza / Proyecto Ganador"
                    className="ev-input ev-full"
                    value={nuevoGanador.proyecto}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, proyecto: e.target.value })}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button type="submit" className="ev-btn ev-btn-amber">+ Publicar Ganador</button>
                </div>
              </form>
            )}

            {eventoActivo.ganadores.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#64748b', padding: '25px 0' }}>Aún no se han publicado ganadores.</p>
            ) : (
              eventoActivo.ganadores.map((g, idx) => (
                <div key={idx} style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '14px', borderRadius: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ background: '#f59e0b', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>{g.puesto}</span>
                    <div style={{ fontWeight: 800, fontSize: '15px', marginTop: '5px' }}>{g.participante}</div>
                    <div style={{ fontSize: '13px', color: '#1e40af', fontWeight: 700 }}>🎭 {g.proyecto}</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>{g.programa}</div>
                  </div>
                  {esAdmin && (
                    <button className="ev-btn ev-btn-danger" onClick={() => borrarGanador(eventoActivo.id, idx)}>🗑️</button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 5: LOGIN DE LA ENCARGADA
         ======================================================================= */}
      {modalLogin && (
        <div className="ev-backdrop">
          <div className="ev-modal" style={{ maxWidth: '380px' }}>
            <div className="ev-modal-head">
              <h3 style={{ margin: 0 }}>🔐 Acceso Área Encargada</h3>
              <button className="ev-btn ev-btn-gray" style={{ padding: '4px 10px' }} onClick={() => setModalLogin(false)}>✕</button>
            </div>
            <form onSubmit={verificarAcceso}>
              <label className="ev-label">Clave de Autorización</label>
              <input
                type="password"
                required
                placeholder="Clave (arcoiris2026)"
                className="ev-input"
                style={{ width: '100%', boxSizing: 'border-box', marginBottom: '10px' }}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
              />
              {errorPin && <p style={{ color: '#dc2626', fontSize: '12px', margin: '0 0 10px 0' }}>{errorPin}</p>}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
                <button type="button" className="ev-btn ev-btn-gray" onClick={() => setModalLogin(false)}>Cancelar</button>
                <button type="submit" className="ev-btn ev-btn-primary">Ingresar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}