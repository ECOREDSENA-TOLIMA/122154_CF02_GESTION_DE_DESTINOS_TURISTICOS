export default {
  global: {
    componenteFormativo:
      'Estructuración de los actores del turismo en el territorio.',
    descripcionCurso:
      'El turismo se desarrolla en un espacio dinámico, influido por la sociedad y cultura locales. Esto crea una relación entre el espacio físico y el simbólico, articulando a los actores y promoviendo la oferta y demanda de experiencias turísticas en una unidad básica de valor, impulsando así el atractivo y la interacción en el territorio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Superestructura turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Oficina de turismo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructura turística',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cadena de valor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de aplicación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etapas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factor de competitividad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Proceso de monitoreo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actores del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes y características ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Vinculación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Mapa de actores',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La comunidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Participación comunitaria',
            hash: 't_4_1',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Organizaciones comunitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Generalidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de organizaciones comunitarias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Características de las organizaciones comunitarias',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Ejemplos de organizaciones comunitarias',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Importancia',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Convocatorias de participación comunitaria',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Tipos de participación comunitaria',
            hash: 't_6_3',
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
        download: 'downloads/CFA_02_122154_DU.zip',
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
      tema: '1. Superestructura turística',
      referencia:
        'Touristeando (2021). ¿Qué es la estructura turística? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XR37OfcXcR4',
    },
    {
      tema: '2. Cadena de valor',
      referencia:
        'Jaimes G. J. (2020). Cadena de valor del turismo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E_KOYlctajw',
    },
    {
      tema: '2.3 Factor de competitividad',
      referencia:
        'Ocio y saber: experiencias formadoras Caquetá (2021). Tema 10 Competitividad en el turismo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aLF-OKtsCNg',
    },
    {
      tema: '5. Organizaciones comunitarias',
      referencia:
        'Proyecto Enlace del caño Martín Peña (2020). Video de organización comunitaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WS_TjVy_kVw',
    },
    {
      tema: '6. Economía solidaria',
      referencia:
        'Superintendencia de la Economía Solidaria (2019). Economía Solidaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=abucCqSpchc&t=8s',
    },
  ],
  glosario: [
    {
      termino: 'Comité',
      significado:
        'conjunto poco numeroso de personas elegidas o designadas para actuar en un asunto. Actúa en representación de una colectividad.',
    },
    {
      termino: 'Conflicto de interés',
      significado:
        'son aquellas situaciones en las que el juicio de un sujeto, en lo relacionado a un interés primario para él o ella, y la integridad de sus acciones, tienden a estar indebidamente influenciadas por un interés secundario, el cual frecuentemente es de tipo económico o personal.',
    },
    {
      termino: 'Consorcio turístico',
      significado:
        'son asociaciones u organizaciones de <em>marketing</em> que vinculan agencias de viajes independientes de tamaño pequeño a mediano para aprovechar el poder adquisitivo y las oportunidades de comercialización.',
    },
    {
      termino: 'Convenio',
      significado:
        'acuerdos de voluntades suscritos entre dos o más partes, siendo estas personas jurídicas o naturales, a través de los cuales se obligan recíproca o conjuntamente sobre materias o cosas determinadas, a cuyo cumplimiento pueden ser compelidas.',
    },
    {
      termino: 'Enfoque <em>One Village</em>, <em>One Produc</em>',
      significado:
        '“Un Pueblo, Un Producto”, es una filosofía que invita a las personas que habitan un mismo territorio a buscar un objetivo común por el cual trabajar y así desarrollar su territorio y su comunidad.',
    },
    {
      termino: 'Entidad sin ánimo de lucro',
      significado:
        'es una entidad cuyo fin no es la persecución de un beneficio económico, sino que principalmente persigue una finalidad social, altruista, humanitaria, artística o comunitaria.',
    },
    {
      termino: 'Extorsión',
      significado:
        'es un delito que consiste en obligar a una persona, a través de la utilización de violencia, coacción o intimidación, a realizar u omitir un acto o negocio jurídico con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien del sujeto pasivo y bien normalizado.',
    },
    {
      termino: 'Fraude',
      significado:
        'es la acción contraria a la verdad y a la rectitud o ley -fraude de ley-, que perjudica a la persona contra quien se comete.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'es el conjunto de principios que un individuo tiene para influir en la forma de ser y actuar de las personas o en un grupo de trabajo determinado, haciendo que este equipo trabaje con entusiasmo hacia el logro de sus metas y objetivos.',
    },
    {
      termino: 'Soborno',
      significado:
        'también conocido como cohecho, coima o mordida, en el ámbito del derecho, es un delito que consiste en el ofrecimiento de una dádiva a una autoridad o funcionario público a cambio de realizar u omitir un acto inherente a su cargo.',
    },
    {
      termino: 'Tráfico de influencias',
      significado:
        'es una práctica ilegal, o al menos éticamente objetable, que consiste en utilizar la influencia personal a través de conexiones con personas que ejercen autoridad en ámbitos de gobierno o incluso empresariales, con el fin de obtener favores o trato preferencial para un tercero, normalmente a cambio de un pago en dinero o en especie.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benseny, G. (s.f.). El rol de los actores socio-institucionales en la gestión del turismo en centros urbanos del interior de la Provincia de Buenos Aires, Argentina. Centro de Investigaciones Turísticas – Universidad Nacional de Mar del Plata.',
      link: 'https://nulan.mdp.edu.ar/id/eprint/1710/1/01402.pdf',
    },
    {
      referencia:
        'Boullón, L. (2004). Gestión del turismo en destinos turísticos. pp. 31.',
      link: '',
    },
    {
      referencia:
        'C40 Cities Finance Facility –CFF. (2017). Taller de mapa de actores del proyecto.',
      link:
        'https://cff-prod.s3.amazonaws.com/storage/files/BxuvhXdjwvzfBG0QDnQH9jUF5b91QtfnA863WwPb.pdf',
    },
    {
      referencia: 'Conociendodeprevencion.org. (s.f.). Mapa actores tres.',
      link: '',
    },
    {
      referencia: 'Constitución Política Colombiana. (s.f.). Artículo 287.',
      link:
        'https://www.constitucioncolombia.com/titulo-11/capitulo-1/articulo-287',
    },
    {
      referencia:
        'Departamento Administrativo de Planeación Municipal, Santiago de Cali. (2019). Informe diagnóstico Junta de Acción Comunal Ciudadela Santa Bárbara, Comuna 5, Plan Estratégico de Desarrollo Comunal y Comunitario (PEDCC).',
      link: '',
    },
    {
      referencia:
        'Designthinkingespaña.com. (s.f.). Mapa de actores: La herramienta de diseño ideal para visualizar las relaciones entre stakeholders.',
      link:
        'https://designthinkingespaña.com/mapa-de-actores-diseno-de-servicios',
    },
    {
      referencia:
        'Egurrola, M., & Zarraga, I. (2019). Análisis de las cadenas de valor en el sector turístico: Un estudio comparativo de modelos.',
      link: '',
    },
    {
      referencia:
        'FAO. (2008). Organización Comunitaria. Instituto de Formación Permanente. Estelí, Nicaragua.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/3587b985-6cf0-4c6d-8b14-59a6486e4091/content',
    },
    {
      referencia:
        'Figari, M., & Pereira, D. (2020). Mapeo de actores: herramienta para la acción: la experiencia de la Mesa de Desarrollo Rural de Tacuarembó. Revista Scielo Uruguay. Agrociencia Uruguay, 24.',
      link:
        'http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S2301-15482020000301308',
    },
    {
      referencia:
        'Función Pública. (1996). Ley 300 de 1996. Por la cual se expide el régimen del servicio público de empleo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Función Pública. (2012). Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996, en lo relacionado con la prestación de los servicios públicos de empleo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321',
    },
    {
      referencia:
        'Función Pública. (2020). Ley 2068 de 2020. Por medio de la cual se modifica la Ley 300 de 1996 y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558',
    },
    {
      referencia:
        'Gobierno de Chile, Secretaría de Turismo. (s.f.). Organigrama.',
      link: 'https://www.subturismo.gob.cl/organigrama/',
    },
    {
      referencia:
        'Instituto Distrital de Turismo – IDT. (2022). Estructura organizacional del Instituto Distrital de Turismo – IDT. Alcaldía Mayor de Bogotá Distrito Capital.',
      link: 'https://www.idt.gov.co/es/estructura-organica',
    },
    {
      referencia:
        'Jonker, J. (2004). Tourism Destination Value Chain. En Tourism Management and Sustainable Development: Challenges for the New Millennium (pp. 125-140).',
      link: '',
    },
    {
      referencia: 'Miralbell Izard, O. (2007). Gestión de oficinas de turismo.',
      link:
        'https://reader.digitalbooks.pro/book/preview/28740/chap0.xhtml/-?1729467851028',
    },
    {
      referencia:
        'Orellana, M. (2007). La economía solidaria como forma de organización económica alternativa al sistema capitalista global.',
      link: 'https://base.socioeco.org/docs/eco_solidaria_cas.pdf',
    },
    {
      referencia:
        'Organización Mundial de Turismo. (2011). Competitiveness and sustainability in tourism destinations.',
      link: '',
    },
    {
      referencia:
        'Peralta, F. (2023). Actividades primarias de la cadena de valor: cómo implementarlas.',
      link: 'https://driv.in/blog/actividades-primarias-cadena-valor',
    },
    {
      referencia:
        'Peláez López, J. (2016). Manual para la gestión de las oficinas de turismo. International Journal of Scientific Management and Tourism, 2(4), 142-145.',
      link: '',
    },
    {
      referencia:
        'Ponn, J. (1993). Las oficinas de turismo y su rol en la promoción de destinos.',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (1985). Competitive Advantage: Creating and Sustaining Superior Performance. Free Press.',
      link: '',
    },
    {
      referencia:
        'Pulido, R., & López, M. (2013). El turismo y su relación con el desarrollo: La cadena de valor del destino turístico. En J. García (Ed.), Estudios sobre el desarrollo turístico y su impacto económico (pp. 123-145). Editorial Universitaria.',
      link: '',
    },
    {
      referencia:
        'Pulido y López. (2013). Propuesta de contenidos para una política turística sostenible en España. PASOS. Revista de Turismo y Patrimonio Cultural, 529.',
      link: '',
    },
    {
      referencia:
        'Red de redes de Economía Alternativa y Solidaria – REAS. (2022). Carta de principios de economía solidaria.',
      link:
        'https://www.economiasolidaria.org/carta-de-principios-de-la-economia-solidaria/',
    },
    {
      referencia:
        'Turismo y sostenibilidad. (2023). Cadena de valor en turismo.',
      link:
        'https://turismoysostenibilidad.wordpress.com/2013/10/24/cadena-de-valor-en-turismo/',
    },
    {
      referencia:
        'Vianchá Sánchez, Z. (2021). El enfoque de cadenas de valor en turismo. Reflexiones para destinos turísticos con gestión comunitaria. Basado en la cadena de valor del destino turístico de Jonker (2004). En Alternativas y potencialidades de valor agregado en iniciativas turísticas de tipo comunitario: Lecciones a partir del caso de la subprovincia Alto Ricaurte (Boyacá).',
      link: '',
    },
    {
      referencia:
        'Yilmaz, O., & Bititci, U. (2006). Performance measurement in tourism. Tourism Management, 27(2), 184-195.',
      link: '',
    },
    {
      referencia:
        'Universidad Andrés Bello. (2024). Mapa de actores. Vinculación con el medio.',
      link: 'https://vinculacion.unab.cl/wiki/mapa-de-actores/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Liliana Pérez Arteaga',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
