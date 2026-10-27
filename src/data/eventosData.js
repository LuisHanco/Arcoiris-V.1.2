// src/data/eventosData.js
// Archivo Maestro de Eventos - Control Total Local

export const PIN_AREA_ENCARGADA = 'arcoiris2026'; // Puedes cambiar la clave aquí
export const PIN_ADMIN_TI = 'ti2026'; // Clave maestra para funciones de código

export const CATEGORIAS_EVENTOS = [
  'Todos',
  'Académico',
  'Deportivo',
  'Cultural',
  'Investigación',
  'Institucional',
  'Talleres',
  'Proyección Social'
];

export const EVENTOS_MAESTROS = [
  {
    id: 'evt-01',
    titulo: 'Taller Deportivo de Balonmano y Voleibol 2026',
    categoria: 'Deportivo',
    fecha: '2026-10-30',
    hora: '09:00 AM - 01:00 PM',
    lugar: 'Polideportivo Institucional',
    organizador: 'Área de Educación Física y Deportes',
    descripcion: 'Jornada de capacitación táctica, reglamento oficial y práctica competitiva inter-semestres.',
    estado: 'En Curso',
    modalidad: 'Individual', // Individual | Grupal
    cupoMaximo: 60,
    linkBases: '', // Opcional: URL de PDF o Drive con las bases
    acciones: {
      registroAbierto: true,
      mostrarInscritos: true,
      mostrarGanadores: false,
      mostrarBases: false
    },
    inscritos: [
      { id: 101, dni: '74859612', nombre: 'Carlos Mamani Quispe', programa: 'Educación Física', semestre: 'VI', equipo: '', fecha: '2026-10-20' },
      { id: 102, dni: '71234568', nombre: 'María Fernanda Ttito', programa: 'Educación Inicial', semestre: 'IV', equipo: '', fecha: '2026-10-21' }
    ],
    ganadores: []
  },
  {
    id: 'evt-02',
    titulo: 'I Feria de Investigación e Innovación Pedagógica',
    categoria: 'Investigación',
    fecha: '2026-10-15',
    hora: '08:30 AM - 04:00 PM',
    lugar: 'Auditorio Principal',
    organizador: 'Unidad de Investigación',
    descripcion: 'Exposición y defensa de proyectos de innovación educativa y material didáctico aplicado.',
    estado: 'Finalizado',
    modalidad: 'Grupal',
    cupoMaximo: 30,
    linkBases: '/documentos/bases-feria-2026.pdf',
    acciones: {
      registroAbierto: false,
      mostrarInscritos: true,
      mostrarGanadores: true,
      mostrarBases: true
    },
    inscritos: [
      { id: 201, dni: '70112233', nombre: 'Lucía Huamán Ccuno', programa: 'Educación Inicial', semestre: 'X', equipo: 'Innovadores Kids', fecha: '2026-10-05' },
      { id: 202, dni: '73445566', nombre: 'Pedro Pablo Ccorimanya', programa: 'Educación Física', semestre: 'IX', equipo: 'Biomecánica Andina', fecha: '2026-10-06' }
    ],
    ganadores: [
      { puesto: '1er Puesto', participante: 'Lucía Huamán Ccuno (Innovadores Kids)', proyecto: 'Juegos psicomotrices con material reciclado en niños de 4 años', programa: 'Educación Inicial - X' },
      { puesto: '2do Puesto', participante: 'Pedro Pablo Ccorimanya (Biomecánica Andina)', proyecto: 'Evaluación del rendimiento aeróbico en altura', programa: 'Educación Física - IX' }
    ]
  },
  {
    id: 'evt-03',
    titulo: 'Copa Integración Arco Iris 2026-II (Futsal y Vóley Mixto)',
    categoria: 'Deportivo',
    fecha: '2026-11-12',
    hora: '08:00 AM - 06:00 PM',
    lugar: 'Complejo Deportivo Institucional',
    organizador: 'Bienestar y Empleabilidad',
    descripcion: 'Campeonato oficial de confraternidad estudiantil y docente en las disciplinas de futsal, vóley y básquet.',
    estado: 'Próximo',
    modalidad: 'Grupal',
    cupoMaximo: 24,
    linkBases: '',
    acciones: {
      registroAbierto: true,
      mostrarInscritos: true,
      mostrarGanadores: false,
      mostrarBases: false
    },
    inscritos: [],
    ganadores: []
  },
  {
    id: 'evt-04',
    titulo: 'Concurso de Danzas Autóctonas y Folklóricas',
    categoria: 'Cultural',
    fecha: '2026-11-20',
    hora: '10:00 AM - 05:00 PM',
    lugar: 'Patio de Honor',
    organizador: 'Coordinación de Arte y Cultura',
    descripcion: 'Presentación artística de danzas tradicionales por semestres académicos celebrando nuestra identidad cultural.',
    estado: 'Próximo',
    modalidad: 'Grupal',
    cupoMaximo: 15,
    linkBases: '',
    acciones: {
      registroAbierto: true,
      mostrarInscritos: false,
      mostrarGanadores: false,
      mostrarBases: false
    },
    inscritos: [],
    ganadores: []
  },
  {
    id: 'evt-05',
    titulo: 'Seminario de Elaboración de Tesis y Normas APA 7ma Edición',
    categoria: 'Académico',
    fecha: '2026-11-05',
    hora: '03:00 PM - 06:00 PM',
    lugar: 'Auditorio Principal',
    organizador: 'Unidad de Investigación',
    descripcion: 'Capacitación metodológica obligatoria para estudiantes de últimos ciclos y egresados en proceso de titulación.',
    estado: 'Próximo',
    modalidad: 'Individual',
    cupoMaximo: 100,
    linkBases: '',
    acciones: {
      registroAbierto: true,
      mostrarInscritos: true,
      mostrarGanadores: false,
      mostrarBases: false
    },
    inscritos: [],
    ganadores: []
  },
  {
    id: 'evt-06',
    titulo: 'Festival de Teatro Infantil y Títeres Pedagógicos',
    categoria: 'Talleres',
    fecha: '2026-11-18',
    hora: '09:00 AM - 01:00 PM',
    lugar: 'Sala de Psicomotricidad',
    organizador: 'Programa de Estudios de Educación Inicial',
    descripcion: 'Puesta en escena de cuentos dramatizados y manejo de títeres orientados a la estimulación temprana.',
    estado: 'Próximo',
    modalidad: 'Grupal',
    cupoMaximo: 20,
    linkBases: '',
    acciones: {
      registroAbierto: true,
      mostrarInscritos: true,
      mostrarGanadores: false,
      mostrarBases: false
    },
    inscritos: [],
    ganadores: []
  }
];