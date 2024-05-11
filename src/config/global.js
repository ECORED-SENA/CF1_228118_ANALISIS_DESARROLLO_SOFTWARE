export default {
  global: {
    componenteFormativo: 'Fundamentos de análisis y diseño de <i>software</i> ',
    descripcionCurso:
      'En este componente formativo se abordan los saberes de ingeniería de requisitos, la fase de elicitación de requisitos y el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caracterización de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Teoría general de sistemas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque de sistemas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Definiendo los sistemas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Análisis de los procesos a nivel de negocio',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ingeniería de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo de vida del <i>software</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fase de definición de requisitos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Requisitos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La fase de elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planeación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas e instrumentos para elicitar requisitos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas para captura de requisitos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Herramientas de modelado',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de análisis y especificación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de análisis de requisitos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Especificación de requisitos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de los procesos a nivel de negocio',
      referencia:
        'Saber programas. (2021). <i>Cómo crear un DIAGRAMA de FLUJO en WORD paso a paso 2021</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nJq8A85zNZU',
    },
    {
      tema: 'Análisis de los procesos a nivel de negocio',
      referencia: 'Lucidchart Software. (2021). <i>Lucichart.com</i>.',
      tipo: 'Página web',
      link: 'https://www.lucidchart.com/pages/es',
    },
    {
      tema: 'Análisis de los procesos a nivel de negocio',
      referencia:
        'Digignos. (2013). <i>Elaboración de procesos. Sugerencia de una metodología</i>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-U-RQKJ9KKg&abchannel=Digignos',
    },
    {
      tema: 'Ingeniería del <i>software</i> - Ciclo de vida',
      referencia:
        'Universidad Católica de Murcia. (2015). <i>Ingeniería del software - Ciclo de vida - Raquel Martínez</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s',
    },
    {
      tema: 'Tipos de requerimientos',
      referencia:
        'Itunes U – UAEH. (2019). <i>Tipos de requerimientos</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
    {
      tema: 'Planeación',
      referencia:
        'todopmp.com. (s.f.). <i>Guía PMBOK 6 – 49 procesos, entradas, herramientas y salidas</i>.',
      tipo: 'Página web',
      link: 'https://todopmp.com/cards/',
    },
    {
      tema: 'Planeación',
      referencia:
        'EDAP – Project Business School. (2016). <i>MOOC PMP 302 Identificar Interesados</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aUkTxgaajBo',
    },
    {
      tema: 'Planeación',
      referencia:
        'Virtual Training Lteam. (2016). <i>Partes Interesadas Stakeholders</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: 'Planeación',
      referencia:
        'Calle, M. (2020). <i>Análisis de Interesados Matriz Poder Interés - PMI</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hDZ0uu0H1wc',
    },
    {
      tema: 'Técnicas e instrumentos para elicitar requisitos',
      referencia: 'Jibaro X. (2019). <i>Tipos de Preguntas en una encuesta</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
    },
    {
      tema: 'Especificación de requisitos',
      referencia:
        'UMNG. (2019). <i>Elementos de la norma IEEE 830</i>. YouTube.',
      tipo: 'Video',
      link:
        'http://www.foss2serve.org/index.php/RequirementsEngineering,CSULongBeach,Penzenstadler',
    },
    {
      tema: 'Especificación de requisitos',
      referencia:
        'UMNG. (2019). <i>Elementos de la norma IEEE 830</i>. YouTube.',
      tipo: 'Video',
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      tema: 'Estándar IEEE 830',
      referencia: 'SO/IEC/IEEE 29148:2011. (s. f.). ISO.',
      tipo: 'Página web',
      link: '',
    },
    {
      tema: 'Estándar IEEE 830',
      referencia:
        'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.).ScrumStudy.',
      tipo: 'Video',
      link: 'https://www.scrumstudy.com/',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'ANSI',
      significado: 'American National Standards Institute.',
    },
    {
      termino: 'Ciclo de vida de <i>software</i>',
      significado:
        'aplicación de metodologías para el desarrollo del sistema <i>software</i> [AECC, 1986].',
    },
    {
      termino: 'Estándar',
      significado:
        'referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito.',
    },
    {
      termino: 'Marcos de trabajo ágiles',
      significado:
        'conjunto de estándares, metodologías, técnicas, <i>frameworks</i> o guías que rigen un proceso de desarrollo de <i>software</i> basadas en principios y/o valores ágiles como, por ejemplo: Scrum, Lean <i>Software</i>, XP, TDD, entre otros.',
    },
    {
      termino: 'Marcos de trabajo tradicionales',
      significado:
        'conjunto de estándares, metodologías, técnicas, <i>frameworks</i> o guías que rigen un proceso de desarrollo de <i>software</i> basadas en el ciclo de vida tradicional del <i>software</i> como, por ejemplo: RUP, CMMI, ISO 9001, Microsoft Solution <i>Framework</i>, entre otros.',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <i>software</i>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado:
        'síntesis de un conjunto de técnicas, métodos y procedimientos que se deben seguir durante el desarrollo de un proyecto.',
    },
    {
      termino: 'Pert',
      significado: '<i>Program Evaluation Research Task.</i>',
    },
    {
      termino: 'Pruebas de integración',
      significado:
        'prueba que se ejecuta una vez se aprueban las pruebas unitarias y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'forma de comprobar el correcto funcionamiento de una unidad de código.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'el requerimiento se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'es la condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'cuando parte de un mensaje de salida se convierte nuevamente en entrada.',
    },
    {
      termino: 'Simulación',
      significado:
        'corresponde a la posibilidad de conducir experimentos en una computadora.',
    },
    {
      termino: 'Sinergia',
      significado:
        'cuando varios elementos de una organización actúan de manera concentrada.',
    },
    {
      termino: '<i>Stakeholders</i>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas (ISO 29148).',
    },
    {
      termino: 'Técnica',
      significado:
        'manera en la que un conjunto de procedimientos es aplicado en una tarea específica, con base en un conocimiento para obtener un resultado específico.',
    },
    {
      termino: 'Teoría de colas',
      significado:
        'teoría que estudia los tiempos de espera dentro de un sistema.',
    },
    {
      termino: 'Teoría de comportamientos',
      significado:
        'orientada al estudio del comportamiento humano en la administración.',
    },
    {
      termino: 'Teoría de juegos',
      significado:
        'corresponde a la aplicación de un modelo matemático juego para entender la toma de decisiones.',
    },
    {
      termino: 'TGS',
      significado: 'Teoría General de sistemas.',
    },
  ],
  referencias: [
    {
      referencia:
        '830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.',
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      referencia:
        'Baar, B. (2006). Using Stakeholder Analysis in Software Project Management. Universidad de Amsterdam.',
    },
    {
      referencia: 'Bertalanffy, L. (1968). Theory General Systems.',
    },
    {
      referencia:
        'Boehm, B. W. (1979). A Spiral Model of Software Development and Enhancement. ACM Software Engineering Notes, 11(4), 22-42.',
    },
    {
      referencia:
        'Braude, J. (2003). Ingeniería de software, una perspectiva orientada a objetos. Alfaomega.',
    },
    {
      referencia: 'Centro Tic de Andalucía. (2019). El enfoque sistémico.',
    },
    {
      referencia:
        'Cohen, L. (2011). Métodos de investigación educativa. La Muralla.',
    },
    {
      referencia:
        'Cohn, M. (2004). User Stories Applied for Agile Software Development. Pearson Education, Inc.',
    },
    {
      referencia:
        'Cox, K., Niazi, M., y Verner, J. (2009). Empirical study of Sommerville and Sawyer’s requirements engineering practices. IET Software, 3(5), 339.',
      link: 'https://doi.org/10.1049/iet-sen.2008.0076',
    },
    {
      referencia:
        'Curso de interacción persona-ordenador. (2021). Storyboarding.',
      link: 'https://mpiua.invid.udl.cat/storyboarding',
    },
    {
      referencia:
        'Denscombe, M. (2010). The Good Research Guide. McGraw-Hill Education.',
    },
    {
      referencia:
        'Dornyei, Z. (2010). Questionnaires in Second Language Research: Construction, Administration, and Processing. Routledge.',
    },
    {
      referencia:
        'Durán, A., Bernárdez, B., Ruiz, A. y Toro, M. (1999). A Requirements Elicitation Approach Based in Templates and Patterns.',
    },
    {
      referencia:
        'Ekon, E. (2020). ¿Qué es un diagrama de procesos y por qué es tan importante para tu empresa?',
      link: 'https://www.ekon.es/diagrama-procesos-empresa/',
    },
    {
      referencia:
        'ESAN Graduate School of Business. (2019). ¿Qué es el análisis de procesos de negocio y cómo aplicarlo en mi empresa?).',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2019/11/que-es-el-analisis-de-procesos-de-negocio-y-como-aplicarlo-en-mi-empresa/',
    },
    {
      referencia:
        'Espinal, I., Gimeno, A. y González, F. (1998). El enfoque sistémico en los estudios sobre la familia.',
      link: 'https://www.uv.es/jugar2/Enfoque%20Sistemico.pdf',
    },
    {
      referencia:
        'Gause, C., & Weinberg, G. M. (1989). Exploring Requirements: Quality Before Design. Dorset House.',
    },
    {
      referencia:
        'Granollers, T., Lorés, J., y Perdrix F. (2002). Prototipado. Capítulo 5: modelo de proceso de la ingeniería de la usabilidad y de la accesibilidad.',
    },
    {
      referencia:
        'Hernández, S., Fernández C., y Baptista L. (2006). Metodología de la investigación. McGraw Hill.',
    },
    {
      referencia:
        'Herrera J., Lizka J. (2003). Ingeniería de requerimientos, ingeniería de software.',
      link: 'http://www.monografias.com/trabajos6/resof/resof.shtml',
    },
    {
      referencia:
        'La oficina de proyectos de informática (2012). PMOinformatica.com.',
      link:
        'http://www.pmoinformatica.com/2012/10/plantillas-scrum-historias-de-usuario.html',
    },
    {
      referencia:
        'McCracken, D., y Jackson, M. A. (1981). “A Minority Dissenting Opinion”. En W. W. Cotterman, J. D. Couger, N. L. Enger, F. Harold (Eds.). Systems Analysis and Design: A Foundation for the 1980s (pp. 551-553). Elsevier.',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo, L. (2018). Ingeniería de software. Alfaomega.https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en',
    },
    {
      referencia:
        'Pantaleo, L., y Rinaudo. (2018). Ingeniería de software. Alfaomega.',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). Requirements Engineering. CSU Long Beach.',
      link:
        'http://www.foss2serve.org/index.php/RequirementsEngineering,CSULongBeach,Penzenstadler',
    },
    {
      referencia:
        'Pfleeger, Sh. (2002). Ingeniería del software. Teoría y práctica. Prentice Hall.',
    },
    {
      referencia:
        'Piattini M., Calvo-Manzano J., Cervera J., y Fernández, L. (2004). Análisis y diseño de aplicaciones informáticas de gestión. Una perspectiva de ingeniería de software. Alfaomega-Rama.',
    },
    {
      referencia:
        'Porfirio, C. (2021). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades.',
      link:
        'https://www.knowmadmood.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M., S. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.). ScrumStudy.',
      link: 'https://www.scrumstudy.com',
    },
    {
      referencia:
        'Sommerville I. (2011). Ingeniería del software. Addison-Wesley.',
    },
    {
      referencia: 'Tamayo. A (1999). Teoría general de sistemas.',
    },
    {
      referencia:
        'Torres. A (2021). La Teoría General de Sistemas, de Ludwig von Bertalanffy.',
      link:
        'https://psicologiaymente.com/psicologia/teoria-general-de-sistemas-ludwig-von-bertalanffy',
    },
    {
      referencia:
        'Ventura, M. T. (2002). La ingeniería de requerimientos como factor clave para el éxito de los proyectos de desarrollo de software.',
      link: 'http://132.248.9.195/ppt2002/0307178/Index.html',
    },
    {
      referencia:
        'Wessinger, K., (2012) Project Stakeholder Management. Engineering Management Journal, 14(84), 19-24.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Hernán Muñoz Carvajal',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
