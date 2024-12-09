<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 La comunidad

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una comunidad es un conjunto de personas que comparten rasgos comunes, como costumbres, idiosincrasia, principios, valores, comportamientos sociales e incluso idioma o lengua, lo que los caracteriza y une en un espacio geográfico determinado. Esta conexión permite la formación de una red social estable, con servicios y equipamientos comunes en un área delimitada, donde se cumplen objetivos previamente definidos alrededor de símbolos locales que impulsan la producción, distribución y consumo de bienes y servicios propios de esa región. Esta socialización promueve entornos con participación, apoyo y control social, sustentados en la integración de intereses individuales y colectivos.
          br
          br
          | 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p La relación entre la comunidad y el turismo radica en el desarrollo local sostenible que esta actividad puede generar, con beneficios propios de la interacción turística. Para el desarrollo de los destinos turísticos, es fundamental contar con la participación activa de la comunidad como elemento clave para alcanzar los objetivos de progreso asociados al turismo. Por ello, la percepción de las comunidades sobre el turismo debe ser tenida en cuenta y promovida, permitiendo su participación en la búsqueda de soluciones y en la prevención de problemáticas relacionadas con esta actividad y sus efectos.

    p.mb-5(data-aos="fade-left") Las comunidades expresan y comparten su sentir con los visitantes como parte de la hospitalidad en la actividad turística. Además, están expuestas a recibir impactos y efectos derivados del turismo, lo que hace importante conocer su percepción sobre los beneficios y las consecuencias de esta actividad. Esta percepción comunitaria contribuye a identificar problemas, necesidades y soluciones vinculadas al desarrollo turístico, las cuales se reflejan en proyectos específicos. A través de esta participación, se fomenta el empoderamiento, se desarrollan y fortalecen capacidades locales, y se incrementa el compromiso comunitario con responsabilidades concretas.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Participación comunitaria

    p.mb-4(data-aos="fade-left") La participación comunitaria se entiende como un proceso social en el que un grupo específico de una comunidad, que comparte un interés común, necesidad o problema, establece un diálogo y una concertación para tomar decisiones y definir mecanismos de respuesta y solución.
    p.mb-5(data-aos="fade-left") Los mecanismos de comunicación que contribuyen a una relación óptima entre las comunidades incluyen:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img02.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Concertación
            p.text-center.mb-0.px-3 Es el esfuerzo por el cual partes con intereses distintos llegan a acuerdos sobre un objetivo común.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img03.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Negociación
            p.text-center.mb-0.px-3 Consiste en resolver diferencias de manera armoniosa, en un entorno basado en principios de solidaridad, hermandad y compañerismo.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img04.svg' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Participación
            p.text-center.mb-0.px-3 Se da cuando grupos de personas que comparten alguna necesidad, problema o interés, y que viven en una misma comunidad, se organizan para identificar esas cuestiones y buscan soluciones mediante la toma de decisiones.

    p.mb-5(data-aos="fade-left") En el contexto del desarrollo turístico, la participación comunitaria mejora la calidad de vida de la población local, genera empleos, y promueve el bienestar social y económico. Su contribución en actividades orientadas al turismo permite establecer reglas y normas de organización dentro de las comunidades, facilitando una adecuada atención al turista y potenciando la oferta turística local.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.p-4.mb-3
          p La participación comunitaria requiere un enfoque democrático que promueva el compromiso de la comunidad en los procesos de toma de decisiones, fortaleciendo las capacidades locales y descentralizando la industria del turismo. Este enfoque estimula la producción local, integrándola en la cadena de valor del territorio.
        p La participación comunitaria se caracteriza por el reconocimiento de los valores y potencialidades de la comunidad, buscando transformar la realidad local mediante un análisis del contexto y decisiones orientadas al cambio.
      .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img05.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Según el nivel de involucramiento de la comunidad, existen distintos tipos de participación comunitaria:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Participación pasiva") Implica una disposición voluntaria hacia la información recibida, pero con un bajo nivel de interés y compromiso, lo que puede llevar a una rápida pérdida de motivación.
              
              p(numero="2" titulo="Participación mediante la consulta") Permite a los habitantes discutir temas de interés comunitario, contribuyendo con sus opiniones en la toma de decisiones.
              
              p(numero="3" titulo="Participación funcional") La comunidad realiza acciones y análisis conjuntos sobre problemáticas locales, desarrollando planes estratégicos y fortaleciendo el tejido social.

              p(numero="4" titulo="Participación desarrollada") Implica la toma de iniciativas independientes, con capacidad para responder por las metas colectivas, reflejando un alto nivel de madurez en la organización comunitaria.
          .col-lg-4.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img06.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
