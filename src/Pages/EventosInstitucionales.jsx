import React, { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ============================================================================
// 🌐 BASE DE DATOS EN LA NUBE DEL IESPP "ARCO IRIS" (FIREBASE REALTIME DB)
// ============================================================================
const CLOUD_DB_URL_FIJA = 'https://iespp-arco-iris-default-rtdb.firebaseio.com';

// ============================================================================
// CLAVES DE ACCESO, CATEGORÍAS E IMÁGENES POR DEFECTO
// ============================================================================
const PIN_AREA_ENCARGADA = 'eduardo';
const PIN_ADMIN_TI = '70517426';

const CATEGORIAS = [
  'Todos',
  'Cultural / Danzas',
  'Deportivo',
  'Académico',
  'Investigación',
  'Institucional',
  'Talleres'
];

const LISTA_SEMESTRES = [
  'I Semestre', 'II Semestre', 'III Semestre', 'IV Semestre', 'V Semestre',
  'VI Semestre', 'VII Semestre', 'VIII Semestre', 'IX Semestre', 'X Semestre',
  'Egresados', 'Plana Docente'
];

const IMAGENES_POR_CATEGORIA = {
  'Cultural / Danzas': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
  'Deportivo': 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop',
  'Académico': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop',
  'Investigación': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
  'Institucional': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Talleres': 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop'
};

const EVENTOS_INICIALES = [
  {
    id: 'evt-1',
    titulo: 'Gran Concurso de Danzas Autóctonas y Folklóricas 2026',
    categoria: 'Cultural / Danzas',
    imagen: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop',
    fecha: '2026-11-20',
    hora: '09:00 AM - 05:00 PM',
    lugar: 'Patio de Honor / Coliseo',
    organizador: 'Coordinación de Arte, Cultura y Bienestar',
    descripcion: 'Presentación oficial de danzas tradicionales por semestres académicos (individuales o unidos). La inscripción y reserva de danza se realiza en el área encargada.',
    estado: 'En Curso',
    costoInscripcion: 'S/ 50.00',
    etiquetaParticipacion: 'Danza Inscrita',
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
        semestre: 'II Semestre + VIII Semestre',
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
        detalleParticipacion: 'Mestiza Qoyacha',
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
    imagen: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000&auto=format&fit=crop',
    fecha: '2026-11-12',
    hora: '08:00 AM - 06:00 PM',
    lugar: 'Polideportivo Institucional',
    organizador: 'Área de Educación Física y Deportes',
    descripcion: 'Campeonato oficial inter-semestres. Las delegaciones pueden inscribir a sus equipos en coordinación.',
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
    imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
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

const STORAGE_KEY = 'arcoiris_eventos_caja_v4';

const normalizarEventos = (lista) => {
  if (!Array.isArray(lista)) return EVENTOS_INICIALES;
  return lista.map(ev => ({
    ...ev,
    imagen: ev.imagen || IMAGENES_POR_CATEGORIA[ev.categoria] || IMAGENES_POR_CATEGORIA['Institucional'],
    inscritos: Array.isArray(ev.inscritos) ? ev.inscritos : [],
    ganadores: Array.isArray(ev.ganadores) ? ev.ganadores : [],
    acciones: ev.acciones || { mostrarInscritos: true, mostrarGanadores: false }
  }));
};

export default function EventosInstitucionales() {
  const [estadoNube, setEstadoNube] = useState('conectado');
  const [eventos, setEventos] = useState(() => {
    try {
      const guardados = localStorage.getItem(STORAGE_KEY);
      return guardados ? normalizarEventos(JSON.parse(guardados)) : EVENTOS_INICIALES;
    } catch {
      return EVENTOS_INICIALES;
    }
  });

  // Filtros
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [busquedaInscrito, setBusquedaInscrito] = useState('');

  // Autenticación
  const [esAdmin, setEsAdmin] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [errorPin, setErrorPin] = useState('');
  const [alerta, setAlerta] = useState('');

  // Control de Modales ('inscritos' | 'ganadores' | 'inscribir-pago' | 'form-evento')
  const [eventoActivo, setEventoActivo] = useState(null);
  const [vistaModal, setVistaModal] = useState(null);
  const [cargandoImagen, setCargandoImagen] = useState(false);

  // Estado Crear / Editar Evento (Todos los campos son opcionales)
  const [formEvento, setFormEvento] = useState({
    id: '',
    titulo: '',
    categoria: 'Cultural / Danzas',
    imagen: '',
    fecha: '',
    hora: '',
    lugar: '',
    organizador: '',
    descripcion: '',
    estado: 'En Curso',
    costoInscripcion: '',
    etiquetaParticipacion: 'Danza / Tema Inscrito',
    cupoMaximo: 30,
    acciones: {
      mostrarInscritos: true,
      mostrarGanadores: false,
    }
  });

  // Estado Inscribir Previo Pago + Selección Múltiple de Semestres
  const [semestresSeleccionados, setSemestresSeleccionados] = useState(['I Semestre']);
  const [formPagoInscripcion, setFormPagoInscripcion] = useState({
    dni: '',
    representante: '',
    programa: 'Educación Inicial',
    semestre: 'I Semestre',
    detalleParticipacion: '',
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

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // ==========================================================================
  // 🖼️ COMPRESOR DE IMÁGENES PARA SUBIR DESDE PC/CELULAR A FIREBASE
  // ==========================================================================
  const procesarImagenSubida = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCargandoImagen(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 900;
        const scale = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.78);

        setFormEvento(prev => ({ ...prev, imagen: dataUrl }));
        setCargandoImagen(false);
        lanzarAlerta('🖼️ Imagen cargada y optimizada correctamente');
      };
      img.onerror = () => {
        setCargandoImagen(false);
        lanzarAlerta('⚠️ No se pudo procesar la imagen seleccionada');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // ==========================================================================
  // 🤝 UNIÓN DE 2 O MÁS SEMESTRES EN INSCRIPCIONES
  // ==========================================================================
  const toggleSemestreChip = (sem) => {
    setSemestresSeleccionados(prev => {
      const existe = prev.includes(sem);
      const nuevaLista = existe ? prev.filter(s => s !== sem) : [...prev, sem];
      const textoUnido = nuevaLista.join(' + ');
      setFormPagoInscripcion(f => ({ ...f, semestre: textoUnido }));
      return nuevaLista;
    });
  };

  // ==========================================================================
  // ☁️ CONEXIÓN CON FIREBASE REALTIME DATABASE
  // ==========================================================================
  const endpointFirebase = `${CLOUD_DB_URL_FIJA.replace(/\/+$/, '')}/eventos_arcoiris.json`;

  const cargarDesdeBaseDeDatos = useCallback(async (silencioso = false) => {
    if (!silencioso) setEstadoNube('sincronizando');
    try {
      const resp = await fetch(endpointFirebase, { cache: 'no-store' });
      if (!resp.ok) throw new Error('Error HTTP');
      const data = await resp.json();

      if (data && Array.isArray(data)) {
        const normalizados = normalizarEventos(data);
        setEventos(normalizados);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizados));
        setEventoActivo(prev => prev ? normalizados.find(e => e.id === prev.id) || prev : null);
      } else if (data === null) {
        await fetch(endpointFirebase, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(EVENTOS_INICIALES)
        });
        setEventos(EVENTOS_INICIALES);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(EVENTOS_INICIALES));
      }
      setEstadoNube('conectado');
    } catch (err) {
      console.error('Error Firebase:', err);
      setEstadoNube('error');
    }
  }, [endpointFirebase]);

  const persistirCambios = async (nuevosEventos, mensajeExito) => {
    const normalizados = normalizarEventos(nuevosEventos);
    setEventos(normalizados);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizados));

    setEstadoNube('sincronizando');
    try {
      const resp = await fetch(endpointFirebase, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalizados)
      });
      if (!resp.ok) throw new Error('Error al guardar');
      setEstadoNube('conectado');
      if (mensajeExito) lanzarAlerta(mensajeExito);
    } catch {
      setEstadoNube('error');
      lanzarAlerta('⚠️ Guardado localmente. Revisa la conexión.');
    }
  };

  useEffect(() => {
    cargarDesdeBaseDeDatos();
    const intervalo = setInterval(() => cargarDesdeBaseDeDatos(true), 10000);
    return () => clearInterval(intervalo);
  }, [cargarDesdeBaseDeDatos]);

  const obtenerFechaHoraActual = () => {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const hora = ahora.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${fecha} - ${hora}`;
  };

  // --- LOGIN ---
  const verificarAcceso = (e) => {
    e.preventDefault();
    if (pinInput === PIN_AREA_ENCARGADA || pinInput === PIN_ADMIN_TI) {
      setEsAdmin(true);
      setModalLogin(false);
      setPinInput('');
      setErrorPin('');
      lanzarAlerta('🔓 Modo Gestión activado');
    } else {
      setErrorPin('Clave incorrecta. Intente nuevamente.');
    }
  };

  // --- GESTIÓN DE EVENTOS (CAMPOS OPCIONALES) ---
  const abrirNuevoEvento = () => {
    setFormEvento({
      id: '',
      titulo: '',
      categoria: 'Cultural / Danzas',
      imagen: '',
      fecha: '',
      hora: '',
      lugar: '',
      organizador: '',
      descripcion: '',
      estado: 'En Curso',
      costoInscripcion: '',
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

  const guardarEvento = async (e) => {
    e.preventDefault();
    const datosLimpios = {
      ...formEvento,
      titulo: formEvento.titulo.trim() || 'Evento Institucional IESPP "Arco Iris"',
      imagen: formEvento.imagen.trim() || IMAGENES_POR_CATEGORIA[formEvento.categoria] || IMAGENES_POR_CATEGORIA['Institucional'],
      fecha: formEvento.fecha || 'Por definir',
      hora: formEvento.hora.trim() || 'Horario por confirmar',
      lugar: formEvento.lugar.trim() || 'Campus Institucional',
      organizador: formEvento.organizador.trim() || 'Comisión Organizadora',
      descripcion: formEvento.descripcion.trim() || 'Actividad oficial del IESPP "Arco Iris".',
      costoInscripcion: formEvento.costoInscripcion.trim() || 'Libre / Gratuito',
      etiquetaParticipacion: formEvento.etiquetaParticipacion.trim() || 'Danza / Categoría',
      cupoMaximo: Number(formEvento.cupoMaximo) > 0 ? Number(formEvento.cupoMaximo) : 30
    };

    if (formEvento.id) {
      const actualizados = eventos.map(ev => ev.id === formEvento.id ? { ...ev, ...datosLimpios } : ev);
      await persistirCambios(actualizados, '✅ Evento actualizado');
    } else {
      const nuevo = {
        ...datosLimpios,
        id: 'evt-' + Date.now(),
        inscritos: [],
        ganadores: []
      };
      await persistirCambios([nuevo, ...eventos], '✅ Nuevo evento creado');
    }
    setVistaModal(null);
  };

  const eliminarEvento = async (id) => {
    if (window.confirm('¿Está segura de eliminar este evento y su padrón de inscritos?')) {
      const actualizados = eventos.filter(ev => ev.id !== id);
      await persistirCambios(actualizados, '🗑️ Evento eliminado');
    }
  };

  const cambiarVisibilidad = async (eventoId, campo) => {
    const actualizados = eventos.map(ev => {
      if (ev.id === eventoId) {
        return {
          ...ev,
          acciones: { ...ev.acciones, [campo]: !ev.acciones[campo] }
        };
      }
      return ev;
    });
    await persistirCambios(actualizados, '👁️ Visibilidad actualizada');
  };

  // --- INSCRIPCIÓN PREVIO PAGO (CAMPOS OPCIONALES Y MULTISEMESTRE) ---
  const abrirModalInscribirPago = (ev) => {
    setEventoActivo(ev);
    const montoSugerido = ev.costoInscripcion ? ev.costoInscripcion.replace(/[^\d.]/g, '') : '';
    setSemestresSeleccionados(['I Semestre']);
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

  const registrarInscripcionConPago = async (e) => {
    e.preventDefault();
    if (!eventoActivo) return;

    const detalleFinal = formPagoInscripcion.detalleParticipacion.trim() || 'Participación General';

    if (formPagoInscripcion.detalleParticipacion.trim()) {
      const danzaRepetida = eventoActivo.inscritos.some(
        i => (i.detalleParticipacion || '').trim().toLowerCase() === detalleFinal.toLowerCase()
      );
      if (danzaRepetida) {
        const confirmar = window.confirm(
          `⚠️ "${detalleFinal}" ya fue inscrita por otro grupo. ¿Desea registrarla de todos modos?`
        );
        if (!confirmar) return;
      }
    }

    const nuevoInscrito = {
      id: Date.now(),
      dni: formPagoInscripcion.dni.trim() || 'S/N',
      representante: formPagoInscripcion.representante.trim() || 'Delegación Inscrita',
      programa: formPagoInscripcion.programa || 'Institucional / Mixto',
      semestre: formPagoInscripcion.semestre.trim() || 'Semestre General',
      detalleParticipacion: detalleFinal,
      nroRecibo: formPagoInscripcion.nroRecibo.trim() || 'S/R',
      montoPago: formPagoInscripcion.montoPago.trim() || '0.00',
      estadoPago: formPagoInscripcion.estadoPago || 'Registrado',
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

    await persistirCambios(actualizados, '✅ Inscripción registrada con éxito');
    setVistaModal('inscritos');
  };

  const eliminarInscrito = async (eventoId, inscritoId) => {
    if (!window.confirm('¿Anular esta inscripción del padrón?')) return;
    const actualizados = eventos.map(ev => {
      if (ev.id === eventoId) {
        const modificado = { ...ev, inscritos: ev.inscritos.filter(i => i.id !== inscritoId) };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    });
    await persistirCambios(actualizados, '🗑️ Inscripción retirada');
  };

  // --- GESTIÓN DE GANADORES ---
  const guardarGanador = async (e) => {
    e.preventDefault();
    if (!eventoActivo) return;

    const ganadorLimpio = {
      id: Date.now(),
      puesto: nuevoGanador.puesto || '1er Puesto',
      participante: nuevoGanador.participante.trim() || 'Delegación Ganadora',
      proyecto: nuevoGanador.proyecto.trim() || 'Participación Destacada',
      programa: nuevoGanador.programa.trim() || 'IESPP Arco Iris'
    };

    const actualizados = eventos.map(ev => {
      if (ev.id === eventoActivo.id) {
        const modificado = {
          ...ev,
          ganadores: [...ev.ganadores, ganadorLimpio],
          acciones: { ...ev.acciones, mostrarGanadores: true }
        };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    });

    setNuevoGanador({ puesto: '1er Puesto', participante: '', proyecto: '', programa: '' });
    await persistirCambios(actualizados, '🏆 Ganador publicado');
  };

  const borrarGanador = async (eventoId, idx) => {
    const actualizados = eventos.map(ev => {
      if (ev.id === eventoId) {
        const modificado = { ...ev, ganadores: ev.ganadores.filter((_, i) => i !== idx) };
        setEventoActivo(modificado);
        return modificado;
      }
      return ev;
    });
    await persistirCambios(actualizados, '🗑️ Ganador eliminado');
  };

  // --- EXPORTAR EXCEL (CSV) ---
  const descargarPadronCSV = (ev) => {
    if (!ev.inscritos.length) return;
    const cabecera = [
      `Nro,DNI,Delegado o Participante,Programa,Semestres,"${ev.etiquetaParticipacion || 'Danza / Tema'}",Fecha y Hora Inscripcion,Recibo,Monto Pagado`
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

  // Filtrado
  const eventosFiltrados = eventos.filter(ev => {
    const pasaCat = categoriaActiva === 'Todos' || ev.categoria === categoriaActiva;
    const pasaEst = filtroEstado === 'Todos' || ev.estado === filtroEstado;
    const pasaTxt = (ev.titulo || '').toLowerCase().includes(busqueda.toLowerCase()) ||
                    (ev.organizador || '').toLowerCase().includes(busqueda.toLowerCase());
    return pasaCat && pasaEst && pasaTxt;
  });

  const inscritosFiltradosModal = eventoActivo
    ? eventoActivo.inscritos.filter(i =>
        (i.representante || '').toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        (i.detalleParticipacion || '').toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        (i.programa || '').toLowerCase().includes(busquedaInscrito.toLowerCase()) ||
        (i.semestre || '').toLowerCase().includes(busquedaInscrito.toLowerCase())
      )
    : [];

  return (
    <div className="ev-page">
      <style>{`
        .ev-page {
          font-family: 'Inter', 'Roboto', 'Segoe UI', system-ui, -apple-system, sans-serif;
          background-color: #f4f7fb;
          min-height: 100vh;
          padding-bottom: 80px;
          color: #0f2942;
          overflow-x: hidden;
        }
        .ev-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          box-sizing: border-box;
        }

        /* HERO BANNER */
        .ev-hero {
          position: relative;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #002244 0%, #003b73 60%, #0056b3 100%);
          color: #ffffff;
          padding: 130px 0 90px;
          overflow: hidden;
        }
        .ev-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.18;
          mix-blend-mode: luminosity;
          pointer-events: none;
        }
        .ev-hero-flex {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          width: 100%;
        }
        .ev-hero-content {
          flex: 1 1 540px;
          max-width: 720px;
        }
        .ev-hero-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          flex-shrink: 0;
        }
        .ev-overline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 120, 249, 0.28);
          border: 1px solid rgba(124, 192, 255, 0.45);
          color: #93c5fd;
          font-weight: 800;
          letter-spacing: 1.2px;
          font-size: 11px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 30px;
          margin-bottom: 14px;
          max-width: 100%;
        }
        .ev-hero-title {
          color: #ffffff;
          font-weight: 900;
          font-size: clamp(1.75rem, 4.2vw, 3.3rem);
          line-height: 1.14;
          margin: 0 0 14px 0;
          letter-spacing: -0.5px;
          word-break: break-word;
        }
        .ev-hero-sub {
          color: #e2e8f0;
          max-width: 620px;
          font-weight: 400;
          border-left: 4px solid #f59e0b;
          padding-left: 14px;
          font-size: clamp(0.92rem, 1.8vw, 1.08rem);
          margin: 0;
          line-height: 1.55;
        }

        /* BOTONES */
        .ev-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 700;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .ev-btn:active { transform: scale(0.98); }
        .ev-btn-glass {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
        }
        .ev-btn-glass:hover {
          background: rgba(255, 255, 255, 0.24);
          border-color: #ffffff;
        }
        .ev-btn-primary {
          background: #003366;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 51, 102, 0.18);
        }
        .ev-btn-primary:hover { background: #00509e; }
        .ev-btn-emerald {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.22);
        }
        .ev-btn-emerald:hover { background: #0369a1; }
        .ev-btn-amber {
          background: #d97706;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.22);
        }
        .ev-btn-amber:hover { background: #b45309; }
        .ev-btn-gray {
          background: #f1f5f9;
          color: #1e293b;
          border: 1px solid #cbd5e1;
        }
        .ev-btn-gray:hover { background: #e2e8f0; }
        .ev-btn-danger {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }
        .ev-btn-danger:hover {
          background: #dc2626;
          color: #ffffff;
        }

        /* BARRA DE FILTROS FLOTANTE */
        .ev-filter-bar {
          background: #ffffff;
          border-radius: 20px;
          padding: 18px 22px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
          box-shadow: 0 12px 32px rgba(0, 34, 68, 0.08);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ev-cats {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          max-width: 100%;
        }
        .ev-cats::-webkit-scrollbar { display: none; }
        .ev-cat-item {
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ev-cat-item:hover {
          border-color: #0284c7;
          color: #0284c7;
        }
        .ev-cat-item.active {
          background: #003366;
          color: #ffffff;
          border-color: #003366;
          box-shadow: 0 4px 12px rgba(0, 51, 102, 0.2);
        }
        .ev-search-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          width: 100%;
        }
        .ev-input, .ev-select, .ev-textarea {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          font-size: 13.5px;
          background: #ffffff;
          color: #0f2942;
          outline: none;
          transition: all 0.2s;
        }
        .ev-input:focus, .ev-select:focus, .ev-textarea:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.14);
        }

        /* GRILLA Y TARJETAS CON IMAGEN REPRESENTATIVA */
        .ev-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));
          gap: 24px;
          margin-top: 28px;
        }
        .ev-card {
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 34, 68, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .ev-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0, 34, 68, 0.12);
        }
        .ev-card-media {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          background: #002244;
        }
        .ev-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }
        .ev-card:hover .ev-card-img {
          transform: scale(1.06);
        }
        .ev-card-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 25, 55, 0.55) 0%, rgba(0, 25, 55, 0.05) 50%, rgba(0, 25, 55, 0.65) 100%);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 14px 16px;
        }
        .ev-tag-cat {
          background: rgba(255, 255, 255, 0.92);
          color: #003366;
          font-size: 11px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .ev-badge-est {
          font-size: 11.5px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 30px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .est-EnCurso { background: #22c55e; color: #ffffff; }
        .est-Proximo { background: #0284c7; color: #ffffff; }
        .est-Finalizado { background: #64748b; color: #ffffff; }

        .ev-card-body {
          padding: 18px 20px 20px;
        }
        .ev-card-title {
          font-size: 1.22rem;
          font-weight: 800;
          color: #002b56;
          margin: 0 0 8px 0;
          line-height: 1.32;
        }
        .ev-card-desc {
          font-size: 13.5px;
          color: #475569;
          margin: 0 0 16px 0;
          line-height: 1.5;
        }

        /* METADATOS EN GRILLA 2x2 */
        .ev-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px;
          font-size: 12.5px;
        }
        .ev-meta-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ev-meta-label {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }
        .ev-meta-val {
          font-weight: 700;
          color: #0f2942;
        }

        /* BARRA DE CUPOS */
        .ev-cupo-bar-wrap {
          margin-top: 14px;
        }
        .ev-cupo-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 5px;
          color: #334155;
        }
        .ev-cupo-track {
          height: 7px;
          background: #e2e8f0;
          border-radius: 99px;
          overflow: hidden;
        }
        .ev-cupo-fill {
          height: 100%;
          background: linear-gradient(90deg, #0284c7, #003366);
          border-radius: 99px;
          transition: width 0.4s ease;
        }

        /* VISTA RÁPIDA DE INSCRITOS */
        .ev-preview-box {
          margin-top: 14px;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          padding: 10px 12px;
        }
        .ev-preview-item {
          font-size: 12px;
          padding: 4px 0;
          border-bottom: 1px dashed #bae6fd;
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        .ev-preview-item:last-child { border-bottom: none; }

        /* ACCIONES DE TARJETA */
        .ev-card-actions {
          padding: 0 20px 20px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ev-admin-zone {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ev-admin-switches {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
        }

        /* CHIPS PARA UNIR SEMESTRES */
        .ev-sem-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
          margin-bottom: 10px;
        }
        .ev-sem-chip {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .ev-sem-chip:hover {
          border-color: #0284c7;
          color: #0284c7;
        }
        .ev-sem-chip.selected {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.25);
        }

        /* SUBIDA DE IMAGEN */
        .ev-img-upload-box {
          border: 2px dashed #93c5fd;
          background: #f0f9ff;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ev-img-preview {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #bae6fd;
        }

        /* MODALES */
        .ev-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .ev-modal {
          background: #ffffff;
          border-radius: 22px;
          max-width: 840px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
          max-height: 90vh;
          overflow-y: auto;
          color: #0f2942;
        }
        .ev-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 14px;
          margin-bottom: 18px;
          position: sticky;
          top: -24px;
          background: #ffffff;
          z-index: 5;
          padding-top: 4px;
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
        .ev-opt-tag {
          font-weight: 500;
          color: #64748b;
          font-size: 11px;
        }

        /* TABLA PC Y TARJETAS MÓVIL PARA EL PADRÓN */
        .ev-table-wrap {
          overflow-x: auto;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
        }
        .ev-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .ev-table th {
          background: #003366;
          color: #ffffff;
          text-align: left;
          padding: 12px 14px;
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .ev-table td {
          padding: 12px 14px;
          border-bottom: 1px solid #e2e8f0;
          vertical-align: middle;
        }
        .ev-table tr:nth-child(even) { background: #f8fafc; }
        .ev-danza-pill {
          display: inline-block;
          background: #e0f2fe;
          color: #0369a1;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
        }
        .ev-mobile-padron {
          display: none;
          flex-direction: column;
          gap: 10px;
        }
        .ev-mobile-padron-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ev-toast {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #002b56;
          color: #ffffff;
          padding: 14px 20px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 700;
          border-left: 5px solid #38bdf8;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          z-index: 10000;
        }

        @media (max-width: 768px) {
          .ev-hero {
            padding: 118px 0 64px;
            min-height: auto;
          }
          .ev-hero-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }
          .ev-hero-content {
            flex: 1 1 auto;
            width: 100%;
          }
          .ev-hero-actions {
            width: 100%;
            align-items: stretch;
          }
          .ev-hero-actions > .ev-btn {
            width: 100%;
          }
          .ev-admin-bar-hero {
            width: 100%;
            justify-content: space-between;
            box-sizing: border-box;
          }
          .ev-overline {
            font-size: 10px;
            padding: 5px 12px;
            letter-spacing: 0.8px;
          }
          .ev-hero-title br { display: none; }
          .ev-filter-bar {
            padding: 14px;
            margin-top: -28px;
            border-radius: 16px;
          }
          .ev-search-group { flex-direction: column; }
          .ev-search-group .ev-input,
          .ev-search-group .ev-select {
            width: 100%;
            box-sizing: border-box;
          }
          .ev-form-grid { grid-template-columns: 1fr; }
          .ev-full { grid-column: span 1; }
          .ev-table-wrap { display: none; }
          .ev-mobile-padron { display: flex; }
          .ev-modal { padding: 18px; max-height: 92vh; border-radius: 18px; }
          .ev-meta-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {alerta && <div className="ev-toast">{alerta}</div>}

      {/* CABECERA */}
      <header className="ev-hero">
        <div className="ev-container ev-hero-flex">
          <div className="ev-hero-content" data-aos="fade-right">
            <span className="ev-overline">
              {estadoNube === 'sincronizando' ? '🔄 Sincronizando...' : estadoNube === 'error' ? '⚠️ Modo Sin Conexión' : '🏛️ Actividades Oficiales IESPP "Arco Iris"'}
            </span>
            <h1 className="ev-hero-title">
              Cronograma de Eventos <br /> y Padrón de Inscritos
            </h1>
            <p className="ev-hero-sub">
              Consulta las actividades institucionales, verifica en tiempo real qué delegaciones o semestres unidos ya se inscribieron y qué danza o categoría registraron.
            </p>
          </div>

          <div className="ev-hero-actions" data-aos="fade-left">
            {!esAdmin ? (
              <button className="ev-btn ev-btn-glass" onClick={() => setModalLogin(true)}>
                🔐 Acceso Encargada
              </button>
            ) : (
              <div className="ev-admin-bar-hero" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', background: 'rgba(0, 25, 55, 0.78)', border: '1px solid rgba(124, 192, 255, 0.35)', padding: '8px 12px', borderRadius: '14px' }}>
                <button className="ev-btn ev-btn-amber" style={{ flex: 1, padding: '9px 14px', fontSize: '12.5px' }} onClick={abrirNuevoEvento}>
                  ➕ Nuevo Evento
                </button>
                <button className="ev-btn ev-btn-glass" style={{ padding: '9px 14px', fontSize: '12.5px' }} onClick={() => setEsAdmin(false)}>
                  Salir
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="ev-container">
        {/* FILTROS */}
        <div className="ev-filter-bar" data-aos="fade-up">
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

          <div className="ev-search-group">
            <input
              type="text"
              className="ev-input"
              style={{ flex: 1, minWidth: '200px' }}
              placeholder="🔍 Buscar evento o área encargada..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
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
          </div>
        </div>

        {/* TARJETAS DE EVENTOS CON IMAGEN REPRESENTATIVA */}
        <div className="ev-grid">
          {eventosFiltrados.map((ev, idx) => {
            const claseEst = ev.estado === 'En Curso' ? 'est-EnCurso' : ev.estado === 'Próximo' ? 'est-Proximo' : 'est-Finalizado';
            const porcentajeCupo = Math.min(100, Math.round((ev.inscritos.length / (ev.cupoMaximo || 1)) * 100));
            const imgMostrada = ev.imagen || IMAGENES_POR_CATEGORIA[ev.categoria] || IMAGENES_POR_CATEGORIA['Institucional'];

            return (
              <div
                key={ev.id}
                className="ev-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 80}
              >
                <div>
                  {/* CABECERA CON IMAGEN DEL EVENTO */}
                  <div className="ev-card-media">
                    <img
                      src={imgMostrada}
                      alt={ev.titulo}
                      className="ev-card-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = IMAGENES_POR_CATEGORIA['Institucional'];
                      }}
                    />
                    <div className="ev-card-media-overlay">
                      <span className="ev-tag-cat">{ev.categoria}</span>
                      <span className={`ev-badge-est ${claseEst}`}>{ev.estado}</span>
                    </div>
                  </div>

                  <div className="ev-card-body">
                    <h2 className="ev-card-title">{ev.titulo}</h2>
                    {ev.descripcion && <p className="ev-card-desc">{ev.descripcion}</p>}

                    <div className="ev-meta-grid">
                      <div className="ev-meta-item">
                        <span className="ev-meta-label">📅 Fecha y Hora</span>
                        <span className="ev-meta-val">{ev.fecha || 'Por definir'} {ev.hora ? `(${ev.hora})` : ''}</span>
                      </div>
                      <div className="ev-meta-item">
                        <span className="ev-meta-label">📍 Lugar</span>
                        <span className="ev-meta-val">{ev.lugar || 'Campus Institucional'}</span>
                      </div>
                      <div className="ev-meta-item">
                        <span className="ev-meta-label">🏛️ Área Encargada</span>
                        <span className="ev-meta-val">{ev.organizador || 'Comisión'}</span>
                      </div>
                      <div className="ev-meta-item">
                        <span className="ev-meta-label">💵 Inscripción</span>
                        <span className="ev-meta-val">{ev.costoInscripcion || 'Gratuito'}</span>
                      </div>
                    </div>

                    {/* BARRA DE PROGRESO DE CUPOS */}
                    <div className="ev-cupo-bar-wrap">
                      <div className="ev-cupo-header">
                        <span>👥 Delegaciones / Inscritos</span>
                        <span>{ev.inscritos.length} de {ev.cupoMaximo || 30} cupos</span>
                      </div>
                      <div className="ev-cupo-track">
                        <div className="ev-cupo-fill" style={{ width: `${porcentajeCupo}%` }} />
                      </div>
                    </div>

                    {/* ÚLTIMOS INSCRITOS */}
                    {ev.acciones.mostrarInscritos && ev.inscritos.length > 0 && (
                      <div className="ev-preview-box">
                        <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#0369a1', marginBottom: '4px', textTransform: 'uppercase' }}>
                          Últimos registrados ({ev.etiquetaParticipacion || 'Participación'}):
                        </div>
                        {ev.inscritos.slice(-3).map(ins => (
                          <div key={ins.id} className="ev-preview-item">
                            <span style={{ fontWeight: 700, color: '#0f2942' }}>🎭 {ins.detalleParticipacion}</span>
                            <span style={{ color: '#0284c7', fontWeight: 700, textAlign: 'right' }}>{ins.semestre}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {/* BOTONES PÚBLICOS */}
                  <div className="ev-card-actions">
                    {(ev.acciones.mostrarInscritos || esAdmin) && (
                      <button
                        className="ev-btn ev-btn-primary"
                        style={{ flex: 1 }}
                        onClick={() => {
                          setEventoActivo(ev);
                          setBusquedaInscrito('');
                          setVistaModal('inscritos');
                        }}
                      >
                        📋 Padrón de Inscritos ({ev.inscritos.length})
                      </button>
                    )}

                    {(ev.acciones.mostrarGanadores || esAdmin) && (
                      <button
                        className="ev-btn ev-btn-amber"
                        style={{ flex: ev.acciones.mostrarGanadores ? 1 : 'unset' }}
                        onClick={() => {
                          setEventoActivo(ev);
                          setVistaModal('ganadores');
                        }}
                      >
                        🏆 Ganadores ({ev.ganadores.length})
                      </button>
                    )}
                  </div>

                  {/* BARRA COMPACTA DE ADMINISTRACIÓN */}
                  {esAdmin && (
                    <div className="ev-admin-zone">
                      <div className="ev-admin-switches">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={ev.acciones.mostrarInscritos}
                            onChange={() => cambiarVisibilidad(ev.id, 'mostrarInscritos')}
                          />
                          Padrón Público
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={ev.acciones.mostrarGanadores}
                            onChange={() => cambiarVisibilidad(ev.id, 'mostrarGanadores')}
                          />
                          Mostrar Ganadores
                        </label>
                      </div>

                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          className="ev-btn ev-btn-emerald"
                          style={{ flex: 1, padding: '8px 10px', fontSize: '12px' }}
                          onClick={() => abrirModalInscribirPago(ev)}
                        >
                          💳 + Inscribir
                        </button>
                        <button
                          className="ev-btn ev-btn-gray"
                          style={{ padding: '8px 12px', fontSize: '12px' }}
                          onClick={() => abrirEditarEvento(ev)}
                          title="Editar Evento"
                        >
                          ✏️ Editar
                        </button>
                        <button
                          className="ev-btn ev-btn-danger"
                          style={{ padding: '8px 12px', fontSize: '12px' }}
                          onClick={() => eliminarEvento(ev.id)}
                          title="Eliminar Evento"
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
          MODAL 1: PADRÓN DE INSCRITOS (TABLA EN PC / TARJETAS EN MÓVIL)
         ======================================================================= */}
      {vistaModal === 'inscritos' && eventoActivo && (
        <div className="ev-backdrop" onClick={() => setVistaModal(null)}>
          <div className="ev-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ev-modal-head">
              <div>
                <span className="ev-tag-cat" style={{ background: '#e0f2fe' }}>{eventoActivo.categoria}</span>
                <h3 style={{ margin: '6px 0 2px 0', fontSize: '1.25rem', fontWeight: 900 }}>
                  📋 Padrón Oficial de Inscritos ({eventoActivo.inscritos.length})
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#0284c7', fontWeight: 600 }}>
                  {eventoActivo.titulo}
                </p>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '6px 12px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', marginBottom: '16px' }}>
              <input
                type="text"
                className="ev-input"
                style={{ flex: 1, minWidth: '200px' }}
                placeholder="🔍 Buscar danza, delegado, programa o semestres..."
                value={busquedaInscrito}
                onChange={(e) => setBusquedaInscrito(e.target.value)}
              />

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {esAdmin && (
                  <button className="ev-btn ev-btn-emerald" onClick={() => abrirModalInscribirPago(eventoActivo)}>
                    💳 + Inscribir
                  </button>
                )}
                {eventoActivo.inscritos.length > 0 && (
                  <button className="ev-btn ev-btn-gray" onClick={() => descargarPadronCSV(eventoActivo)}>
                    📥 Exportar CSV
                  </button>
                )}
              </div>
            </div>

            {inscritosFiltradosModal.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '36px 20px', background: '#f8fafc', borderRadius: '14px', color: '#64748b' }}>
                No se encontraron inscripciones registradas.
              </div>
            ) : (
              <>
                {/* VISTA PC: TABLA */}
                <div className="ev-table-wrap">
                  <table className="ev-table">
                    <thead>
                      <tr>
                        <th>N°</th>
                        <th>Delegado / Grupo</th>
                        <th>Programa y Semestre(s)</th>
                        <th>{eventoActivo.etiquetaParticipacion || 'Danza / Categoría'}</th>
                        <th>Fecha de Registro</th>
                        {esAdmin && <th>Recibo</th>}
                        {esAdmin && <th></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {inscritosFiltradosModal.map((ins, i) => (
                        <tr key={ins.id}>
                          <td style={{ fontWeight: 800, color: '#0284c7' }}>{i + 1}</td>
                          <td>
                            <div style={{ fontWeight: 700 }}>{ins.representante}</div>
                            {esAdmin && ins.dni && <div style={{ fontSize: '11px', color: '#64748b' }}>DNI: {ins.dni}</div>}
                          </td>
                          <td>
                            <div style={{ fontWeight: 700 }}>{ins.programa}</div>
                            <div style={{ fontSize: '12px', color: '#0284c7', fontWeight: 700 }}>🤝 {ins.semestre}</div>
                          </td>
                          <td>
                            <span className="ev-danza-pill">🎭 {ins.detalleParticipacion}</span>
                          </td>
                          <td>
                            <div style={{ fontSize: '12px', fontWeight: 600 }}>🕒 {ins.fechaHoraRegistro}</div>
                          </td>
                          {esAdmin && (
                            <td>
                              <div style={{ fontWeight: 800, color: '#15803d' }}>S/ {ins.montoPago}</div>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>{ins.nroRecibo}</div>
                            </td>
                          )}
                          {esAdmin && (
                            <td>
                              <button
                                className="ev-btn ev-btn-danger"
                                style={{ padding: '5px 10px', fontSize: '11px' }}
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

                {/* VISTA MÓVIL: TARJETAS APILADAS */}
                <div className="ev-mobile-padron">
                  {inscritosFiltradosModal.map((ins, i) => (
                    <div key={ins.id} className="ev-mobile-padron-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#0284c7' }}>
                          #{i + 1} • {ins.programa}
                        </span>
                        {esAdmin && (
                          <button
                            className="ev-btn ev-btn-danger"
                            style={{ padding: '4px 8px', fontSize: '11px' }}
                            onClick={() => eliminarInscrito(eventoActivo.id, ins.id)}
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#0369a1' }}>
                        🤝 {ins.semestre}
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '14px' }}>{ins.representante}</div>
                      <div>
                        <span className="ev-danza-pill">🎭 {ins.detalleParticipacion}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#64748b', marginTop: '4px' }}>
                        <span>🕒 {ins.fechaHoraRegistro}</span>
                        {esAdmin && <span style={{ color: '#15803d', fontWeight: 700 }}>{ins.nroRecibo} (S/ {ins.montoPago})</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 2: INSCRIBIR PARTICIPANTE (CAMPOS OPCIONALES + UNIÓN DE SEMESTRES)
         ======================================================================= */}
      {vistaModal === 'inscribir-pago' && esAdmin && eventoActivo && (
        <div className="ev-backdrop" onClick={() => setVistaModal(null)}>
          <div className="ev-modal" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
            <div className="ev-modal-head">
              <div>
                <span className="ev-tag-cat" style={{ background: '#e0f2fe' }}>💳 Registro de Inscripción (Campos Opcionales)</span>
                <h3 style={{ margin: '6px 0 0 0', fontSize: '1.2rem', fontWeight: 900 }}>
                  {eventoActivo.titulo}
                </h3>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '6px 12px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            <form onSubmit={registrarInscripcionConPago}>
              <div className="ev-form-grid">
                <div>
                  <label className="ev-label">DNI del Delegado <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    maxLength="12"
                    placeholder="Ej: 74859612"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.dni}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, dni: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Programa de Estudios <span className="ev-opt-tag">(Opcional)</span></label>
                  <select
                    className="ev-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.programa}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, programa: e.target.value })}
                  >
                    <option value="Educación Inicial">Educación Inicial</option>
                    <option value="Educación Física">Educación Física</option>
                    <option value="Inicial + Física (Unidos)">Inicial + Física (Unidos)</option>
                    <option value="Institucional / Mixto">Institucional / Mixto</option>
                  </select>
                </div>

                {/* SELECTOR MÚLTIPLE DE SEMESTRES (UNIÓN DE 2 O MÁS SEMESTRES) */}
                <div className="ev-full" style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <label className="ev-label" style={{ marginBottom: '2px' }}>
                    🤝 Semestre(s) Participante(s) <span className="ev-opt-tag">(Puedes marcar 1, 2 o más semestres para unirlos)</span>
                  </label>
                  <div className="ev-sem-chips">
                    {LISTA_SEMESTRES.map(sem => {
                      const activo = semestresSeleccionados.includes(sem);
                      return (
                        <button
                          type="button"
                          key={sem}
                          onClick={() => toggleSemestreChip(sem)}
                          className={`ev-sem-chip ${activo ? 'selected' : ''}`}
                        >
                          {activo ? `✓ ${sem}` : `+ ${sem}`}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    placeholder="Resultado o escribe manualmente (Ej: II Semestre + IV Semestre)"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box', fontWeight: 700, color: '#0369a1' }}
                    value={formPagoInscripcion.semestre}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, semestre: e.target.value })}
                  />
                </div>

                <div className="ev-full">
                  <label className="ev-label">Nombre del Delegado o Grupo Responsable <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: María Fernanda Ttito / Delegación Unida"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.representante}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, representante: e.target.value })}
                  />
                </div>

                <div className="ev-full" style={{ background: '#f0f9ff', padding: '14px', borderRadius: '14px', borderLeft: '4px solid #0284c7' }}>
                  <label className="ev-label" style={{ color: '#0369a1' }}>
                    🎭 ¿Qué {eventoActivo.etiquetaParticipacion || 'Danza / Categoría'} inscribe? <span className="ev-opt-tag">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Carnaval de Tinta / Futsal Varones..."
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box', fontWeight: 700 }}
                    value={formPagoInscripcion.detalleParticipacion}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, detalleParticipacion: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">N° de Recibo <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: REC-00150"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formPagoInscripcion.nroRecibo}
                    onChange={(e) => setFormPagoInscripcion({ ...formPagoInscripcion, nroRecibo: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Monto Abonado (S/) <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
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
                  ✅ Guardar Inscripción
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL 3: CREAR / EDITAR EVENTO (CON SUBIDA DE IMAGEN Y CAMPOS OPCIONALES)
         ======================================================================= */}
      {vistaModal === 'form-evento' && esAdmin && (
        <div className="ev-backdrop" onClick={() => setVistaModal(null)}>
          <div className="ev-modal" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <div className="ev-modal-head">
              <div>
                <h3 style={{ margin: 0, fontWeight: 900 }}>
                  {formEvento.id ? '✏️ Editar Evento' : '➕ Crear Nuevo Evento'}
                </h3>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Todos los campos son opcionales. Puedes completarlos o actualizarlos después.
                </span>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '6px 12px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            <form onSubmit={guardarEvento}>
              <div className="ev-form-grid">
                <div className="ev-full">
                  <label className="ev-label">Título del Evento <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: Gran Concurso de Danzas 2026"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.titulo}
                    onChange={(e) => setFormEvento({ ...formEvento, titulo: e.target.value })}
                  />
                </div>

                {/* SUBIDA DE IMAGEN REPRESENTATIVA DEL EVENTO */}
                <div className="ev-full">
                  <label className="ev-label">🖼️ Imagen Representativa del Evento <span className="ev-opt-tag">(Subir archivo o pegar URL)</span></label>
                  <div className="ev-img-upload-box">
                    {(formEvento.imagen || IMAGENES_POR_CATEGORIA[formEvento.categoria]) && (
                      <img
                        src={formEvento.imagen || IMAGENES_POR_CATEGORIA[formEvento.categoria]}
                        alt="Vista previa"
                        className="ev-img-preview"
                      />
                    )}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <label className="ev-btn ev-btn-emerald" style={{ cursor: 'pointer', margin: 0, fontSize: '12.5px', padding: '9px 14px' }}>
                        {cargandoImagen ? '⏳ Procesando...' : '📤 Subir Foto desde PC / Celular'}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={procesarImagenSubida}
                          style={{ display: 'none' }}
                        />
                      </label>
                      {formEvento.imagen && (
                        <button
                          type="button"
                          className="ev-btn ev-btn-danger"
                          style={{ padding: '8px 12px', fontSize: '12px' }}
                          onClick={() => setFormEvento({ ...formEvento, imagen: '' })}
                        >
                          Usar Imagen por Defecto
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="O pega aquí el enlace URL de una imagen (https://...)"
                      className="ev-input"
                      style={{ width: '100%', boxSizing: 'border-box', fontSize: '12.5px' }}
                      value={formEvento.imagen}
                      onChange={(e) => setFormEvento({ ...formEvento, imagen: e.target.value })}
                    />
                  </div>
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
                  <label className="ev-label">Costo de Inscripción <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: S/ 50.00 o Gratuito"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.costoInscripcion}
                    onChange={(e) => setFormEvento({ ...formEvento, costoInscripcion: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Cupo Máximo <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="number"
                    placeholder="Ej: 25"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.cupoMaximo}
                    onChange={(e) => setFormEvento({ ...formEvento, cupoMaximo: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Fecha <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="date"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.fecha}
                    onChange={(e) => setFormEvento({ ...formEvento, fecha: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Hora <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: 09:00 AM - 04:00 PM"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.hora}
                    onChange={(e) => setFormEvento({ ...formEvento, hora: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Lugar <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: Patio de Honor"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.lugar}
                    onChange={(e) => setFormEvento({ ...formEvento, lugar: e.target.value })}
                  />
                </div>

                <div>
                  <label className="ev-label">Área Encargada <span className="ev-opt-tag">(Opcional)</span></label>
                  <input
                    type="text"
                    placeholder="Ej: Coordinación de Arte y Cultura"
                    className="ev-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                    value={formEvento.organizador}
                    onChange={(e) => setFormEvento({ ...formEvento, organizador: e.target.value })}
                  />
                </div>

                <div className="ev-full">
                  <label className="ev-label">Descripción <span className="ev-opt-tag">(Opcional)</span></label>
                  <textarea
                    rows="3"
                    placeholder="Detalles o indicaciones del evento..."
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
          MODAL 4: GANADORES (CAMPOS OPCIONALES)
         ======================================================================= */}
      {vistaModal === 'ganadores' && eventoActivo && (
        <div className="ev-backdrop" onClick={() => setVistaModal(null)}>
          <div className="ev-modal" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
            <div className="ev-modal-head">
              <div>
                <h3 style={{ margin: 0, fontWeight: 900 }}>🏆 Cuadro de Honor y Ganadores</h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#0284c7', fontWeight: 600 }}>{eventoActivo.titulo}</p>
              </div>
              <button className="ev-btn ev-btn-gray" style={{ padding: '6px 12px' }} onClick={() => setVistaModal(null)}>✕</button>
            </div>

            {esAdmin && (
              <form onSubmit={guardarGanador} style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
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
                    placeholder="Programa y Semestre(s) (Opcional)"
                    className="ev-input"
                    value={nuevoGanador.programa}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, programa: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Delegación / Estudiante Ganador (Opcional)"
                    className="ev-input ev-full"
                    value={nuevoGanador.participante}
                    onChange={(e) => setNuevoGanador({ ...nuevoGanador, participante: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Danza / Proyecto Ganador (Opcional)"
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
              <p style={{ textAlign: 'center', color: '#64748b', padding: '24px 0' }}>Aún no se han registrado ganadores en este evento.</p>
            ) : (
              eventoActivo.ganadores.map((g, idx) => (
                <div key={idx} style={{ background: '#fffbeb', border: '1px solid #fde68a', borderLeft: '5px solid #d97706', padding: '14px', borderRadius: '14px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ background: '#d97706', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '20px' }}>{g.puesto}</span>
                    <div style={{ fontWeight: 800, fontSize: '15px', marginTop: '6px' }}>{g.participante}</div>
                    <div style={{ fontSize: '13px', color: '#0369a1', fontWeight: 700 }}>🎭 {g.proyecto}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{g.programa}</div>
                  </div>
                  {esAdmin && (
                    <button className="ev-btn ev-btn-danger" style={{ padding: '6px 10px' }} onClick={() => borrarGanador(eventoActivo.id, idx)}>🗑️</button>
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
        <div className="ev-backdrop" onClick={() => setModalLogin(false)}>
          <div className="ev-modal" style={{ maxWidth: '380px' }} onClick={(e) => e.stopPropagation()}>
            <div className="ev-modal-head">
              <h3 style={{ margin: 0, fontWeight: 900 }}>🔐 Acceso Área Encargada</h3>
              <button className="ev-btn ev-btn-gray" style={{ padding: '6px 12px' }} onClick={() => setModalLogin(false)}>✕</button>
            </div>
            <form onSubmit={verificarAcceso}>
              <label className="ev-label">Clave de Autorización</label>
              <input
                type="password"
                placeholder="Ingrese su clave..."
                className="ev-input"
                style={{ width: '100%', boxSizing: 'border-box', marginBottom: '12px' }}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
              />
              {errorPin && <p style={{ color: '#dc2626', fontSize: '12px', fontWeight: 700, margin: '0 0 12px 0' }}>{errorPin}</p>}
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