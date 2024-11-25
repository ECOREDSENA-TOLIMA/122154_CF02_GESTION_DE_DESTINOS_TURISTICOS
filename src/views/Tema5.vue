<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Organizaciones comunitarias

    p.mb-5(data-aos="fade-left") La organización es una herramienta utilizada por grupos de personas con el objetivo de coordinar actividades comunitarias, mediante medios que les permiten valorar sus recursos y alcanzar metas que responden a las necesidades tanto personales como colectivas.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con este concepto, una organización comunitaria puede entenderse como una estructura social promovida por la comunidad en un determinado territorio. Esta se forma a partir de la voluntad de establecer relaciones mutuas, las cuales surgen del interés compartido en actividades sociales. Además, la organización comunitaria forma parte de la estructura social más amplia, representando un esfuerzo consciente de las comunidades pequeñas para abordar sus problemas y mejorar sus condiciones de vida. En consecuencia, se constituye como una forma de relación entre grupos e individuos que actúan de manera conjunta con el fin de crear y mantener identidades locales propias.
          br
          br
          | 

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Generalidades

    p.mb-4(data-aos="fade-left") Es fundamental reconocer la participación de los ciudadanos en las decisiones orientadas a visualizar el desarrollo sostenible en los territorios, de manera representativa y democrática, donde se promuevan valores humanos y talentos individuales para resolver de forma efectiva las problemáticas locales de la comunidad. La organización facilita el entendimiento, la comunicación, el desarrollo integral y la búsqueda de condiciones justas y equitativas para el grupo social.
    p.mb-5(data-aos="fade-left") A continuación, se describen los pasos del proceso organizativo:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-5.col-md-6
            img(src='@/assets/curso/temas/tema5/img02.svg' alt='AvatarTop')
        h4.text-center 1.
        p.text-center Reunión voluntaria y deseo de participación
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-5.col-md-6
            img(src='@/assets/curso/temas/tema5/img03.svg' alt='AvatarTop')
        h4.text-center 2.
        p.text-center Planificación de tareas para alcanzar objetivos
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-5.col-md-6
            img(src='@/assets/curso/temas/tema5/img04.svg' alt='AvatarTop')
        h4.text-center 3.
        p.text-center Ejecución de tareas propuestas
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-5.col-md-6
            img(src='@/assets/curso/temas/tema5/img05.svg' alt='AvatarTop')
        h4.text-center 4.
        p.text-center Evaluación de tareas

    p.mb-5(data-aos="fade-left") Asimismo, es relevante identificar los elementos básicos del proceso organizativo:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <i>Elementos básicos del proceso organizativo.</i>
        .tabla-a.clstabla.color-acento-contenido
          table
            caption Nota. FAO (2008). Organización Comunitaria. Instituto de Formación permanente. Estelí. Nicaragua.
            thead
              tr
                th(style="width: 20%") Elemento
                th(style="width: 80%") Descripción
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-bold Sujeto o personas
                td Son el eje central de un proceso organizativo, sin ellos no hay necesidades, no hay luchas, no hay historia, no hay problemas que resolver.
              tr
                td.text-bold Necesidades
                td Tienen su origen en las condiciones de vida de los sujetos y pueden variar según el sector urbano/rural.
              tr(style="background-color: #F6F6F6")
                td.text-bold Niveles de compromiso
                td Es lograr entender las causas de los problemas y la necesidad de resolverlos por medio de la organización, a esto se llama niveles de conciencia.
              tr
                td.text-bold Carácter histórico
                td Las personas, los grupos, las organizaciones tienen un pasado, una historia; este pasado se compone por los problemas enfrentados, las acciones desarrolladas para enfrentar o solucionar esos problemas.
              tr(style="background-color: #F6F6F6")
                td.text-bold Objetivos
                td Se tienen objetivos comunes de corto, mediano o largo plazo que definen el tipo de organización que se quiere construir y desarrollar, los problemas que trata de solucionar. 
              tr
                td.text-bold Estructura y funcionamiento
                td La modalidad de trabajo con responsabilidades a lo interno de la organización (comisiones, secretarias, presidencia, etc.) se le llama estructura y la forma como se trabaja funcionamiento.
              tr(style="background-color: #F6F6F6")
                td.text-bold Conducción
                td Grupo de personas encargadas de orientar las acciones, líderes(as) que conduzcan los procesos.

    p.mb-5(data-aos="fade-left") Los criterios mencionados son esenciales para garantizar el éxito y la sostenibilidad de las organizaciones comunitarias. Cada uno de ellos contribuye a crear un marco de acción que promueve la participación activa, la cohesión social y el beneficio colectivo. A continuación, se detallan los efectos de estos criterios: 

    .tarjeta.tarjeta--BG10.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Interés común compartido por la mayoría de los miembros de la comunidad
            p Este criterio asegura que las actividades y decisiones tomadas respondan a las verdaderas necesidades e intereses de la comunidad, fortaleciendo la unidad y el compromiso entre los miembros.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img06.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Decisión libre y voluntaria de participar activamente en la organización
            p La participación voluntaria fomenta un sentido de pertenencia y responsabilidad, lo que incrementa la motivación de los miembros para colaborar en la resolución de los problemas locales.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img07.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Toma de decisiones por consenso para lograr participar en la ejecución de las actividades programadas
            p Este enfoque inclusivo en la toma de decisiones refuerza la equidad, ya que todos los miembros tienen voz en los procesos, lo que favorece la aceptación de las acciones emprendidas.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img08.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Planificación conjunta de actividades que busquen beneficiar al mayor número de personas en la comunidad
            p La planificación participativa permite que las iniciativas sean más eficaces y estén alineadas con las necesidades reales de la comunidad, maximizando el impacto positivo.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img09.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Generación de transformación a través de la solidaridad, cooperación y responsabilidad compartida
            p Este enfoque promueve un cambio social y económico sustentado en los principios de apoyo mutuo y trabajo en equipo, lo que facilita el alcance de objetivos comunes.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img10.png', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Producción de cambios sociales y económicos como parte de la mejora del nivel de vida en la comunidad
            p Finalmente, estos esfuerzos organizativos tienen un impacto directo en la calidad de vida de los miembros de la comunidad, al mejorar tanto su bienestar social como económico.
          
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos de organizaciones comunitarias

    p.mb-5(data-aos="fade-left") Las comunidades reconocen la necesidad de organizarse para liderar procesos que beneficien el bienestar colectivo a través de la participación activa. En este contexto, se conforman grupos comunales ubicados tanto en zonas rurales como urbanas, con el objetivo de influir en decisiones clave para el desarrollo local. A continuación, se presentan los tipos de organizaciones comunitarias: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Organización de Acción Comunal (OAC)") Las comunidades se organizan para liderar procesos comunitarios en barrios y veredas, centrados en el quehacer diario de las mismas. Este tipo de organización busca gestionar y promover la participación activa de los miembros en los asuntos locales.
              
              p(numero="2" titulo="Juntas de Acción Comunal (JAC)") Son espacios donde las comunidades se reúnen para unir esfuerzos y recursos con el fin de resolver las necesidades más sentidas como grupo. Estas organizaciones surgen de lo local hacia lo nacional, y están conformadas por líderes sociales y políticos de cada comunidad. Se consideran una organización de primer grado.
              
              p(numero="3" titulo="Asociación Municipal de Juntas de Acción Comunal") Estas asociaciones se crean a nivel municipal para influir en decisiones locales relacionadas con el desarrollo social y los intereses comunes. Su objetivo es unir las juntas de acción comunal para trabajar en el desarrollo sostenible y sustentable, promoviendo la democracia participativa. Se considera una organización de segundo grado.

              p(numero="4" titulo="Federaciones de Acción Comunal departamentales y municipales") Se conforman a nivel departamental con el fin de establecer un canal de interlocución con los gobiernos departamentales y las ciudades capitales. Estas federaciones son organizaciones de tercer grado, y buscan fortalecer la voz comunitaria ante instancias gubernamentales.

              p(numero="5" titulo="Confederación Nacional de Acción Comunal") Esta organización agrupa las federaciones de acción comunal departamentales, municipales y distritales. Se considera una organización de cuarto grado y actúa a nivel nacional, consolidando la estructura organizacional en los niveles primero, segundo, tercero y cuarto dentro de la jerarquía comunal.
          .col-lg-4.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Este esquema jerárquico permite que las comunidades se interrelacionen y colaboren en diferentes niveles, maximizando el impacto de sus acciones y asegurando una representación efectiva ante las autoridades.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Características de las organizaciones comunitarias

    p.mb-3(data-aos="fade-left") Las comunidades presentan rasgos, condiciones y elementos diferenciadores que les permiten destacarse frente a otras ubicadas en zonas cercanas. De manera similar, la organización de estas comunidades posee características particulares que las identifican como un colectivo único. Según Egurrola y Zárraga (2021), es posible definir varios criterios para describir las características de cada organización comunitaria, entre los cuales se incluyen:

    .row.justify-content-center.p-md-5.p-4.mb-3(data-aos="flip-up")
      .col-12
        .tarjeta.tarjeta--BG08.p-4
          SlyderB.p-4(:datos="datosSlyder")

    p.mb-5(data-aos="fade-left") Estas características permiten que las organizaciones comunitarias funcionen de manera efectiva y cohesionada, fortaleciendo su capacidad de acción en beneficio de sus miembros.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Ejemplos de organizaciones comunitarias

    p.mb-5(data-aos="fade-left") Un ejemplo destacado de modelo de organización comunitaria es la Junta de Acción Comunal del barrio Santa Bárbara, en la comuna Cinco de Santiago de Cali. Al ser una organización de primer grado, esta junta fomenta la participación activa de la comunidad y promueve la gobernanza local en temas fundamentales como la identificación de necesidades y la creación de estrategias para resolver las problemáticas presentes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.p-4.mb-3
          p Como organización, se caracteriza por respetar la diversidad de opiniones de sus miembros, lo que se refleja en las decisiones cotidianas. Además, garantiza la divulgación y comunicación de información clave, asegurando que todos los miembros tengan acceso a los mismos datos, lo que fomenta una participación equitativa en la toma de decisiones. La junta también promueve un espacio de colaboración y diálogo entre los vecinos para abordar de manera conjunta las problemáticas del barrio, fortaleciendo los lazos sociales y generando un compromiso colectivo.
        p En este sentido, la organización no solo se dedica a resolver problemas inmediatos, sino que también fomenta un sentido de pertenencia y de responsabilidad compartida. De esta manera, la Junta de Acción Comunal contribuye al bienestar común y a la búsqueda de soluciones sostenibles a los desafíos locales, con un enfoque en el desarrollo integral de la comunidad.
      .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img18.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Se orienta en valores',
        texto:
          'Las organizaciones comunitarias están guiadas por principios y valores fundamentales que influyen en las decisiones y acciones colectivas.',
        imagen: require('@/assets/curso/temas/tema5/img13.png'),
      },
      {
        titulo: 'Se regula mediante normas',
        texto:
          'Estas organizaciones operan bajo un conjunto de normas que regulan el comportamiento y las interacciones dentro de la comunidad.',
        imagen: require('@/assets/curso/temas/tema5/img14.png'),
      },
      {
        titulo: 'Se guía por objetivos',
        texto:
          'Las organizaciones tienen metas claras que orientan sus esfuerzos y actividades hacia el logro de beneficios comunes.',
        imagen: require('@/assets/curso/temas/tema5/img15.png'),
      },
      {
        titulo:
          'Se fundamenta en compromisos y comportamientos individuales con responsabilidad',
        texto:
          'Los miembros asumen compromisos personales para cumplir con las responsabilidades asignadas, contribuyendo al éxito de la organización.',
        imagen: require('@/assets/curso/temas/tema5/img16.png'),
      },
      {
        titulo: 'Cumple roles específicos',
        texto:
          'Cada miembro de la organización tiene un rol definido, con tareas y responsabilidades que contribuyen al funcionamiento y los objetivos de la comunidad.',
        imagen: require('@/assets/curso/temas/tema5/img17.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
