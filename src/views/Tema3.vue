<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Actores del turismo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El mapa de actores es una herramienta utilizada para identificar a las personas, empresas, entidades e involucrados que participan y se relacionan dentro del sistema turístico en un territorio. Se considera una estructura porque surge de la influencia de las distintas áreas en relación con el turista. A nivel de planificación, permite comprender de forma visual cómo se establecen las relaciones entre los actores, sus acciones y los motivos por los cuales se vinculan en el sistema. Esto es fundamental para establecer estrategias que propicien un cambio en la realidad social en la que están inmersos.
          br
          br
          | 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Componentes y características

    p.mb-5(data-aos="fade-left") El mapa de actores se compone de cuatro círculos en los cuales se ubican los actores según las siguientes categorías:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img02.svg' alt='AvatarTop')
        h4.text-center Usuario
        p.text-center Situado en el círculo central, el más pequeño. El mapa se estructura en torno a él y a las relaciones que establece con los actores de los otros círculos.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img03.svg' alt='AvatarTop')
        h4.text-center Actores internos
        p.text-center Ubicados en el segundo círculo, el más cercano al central. En esta categoría se encuentran los actores que interactúan de forma directa con el usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img04.svg' alt='AvatarTop')
        h4.text-center Actores externos
        p.text-center Aquellos cuya relación con los actores internos permite la producción o entrega del producto o servicio al usuario. Estos actores también se sitúan dentro del segundo círculo.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img05.svg' alt='AvatarTop')
        h4.text-center Administraciones públicas
        p.text-center Entidades públicas que se relacionan de manera directa o indirecta con el usuario.

    p.mb-5(data-aos="fade-left") A continuación, se presenta un esquema grafico de la ubicación de cada uno de los actores:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span <i>Ubicación de los actores.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img06.svg', alt='En la figura 9, se presenta la ubicación de los actores en un mapa estructurado en cuatro círculos concéntricos: en el centro, el usuario; en el segundo círculo, los actores internos; en el tercero, los actores externos; y en el círculo exterior, las administraciones públicas. Este esquema ilustra cómo se organizan y relacionan los distintos actores en el sistema turístico.')
            figcaption Nota. Tomado de designthinkingespaña.com (s.f.). Mapa de actores.
          figure.movil
            img(src='@/assets/curso/temas/tema3/img07.svg', alt='En la figura 9, se presenta la ubicación de los actores en un mapa estructurado en cuatro círculos concéntricos: en el centro, el usuario; en el segundo círculo, los actores internos; en el tercero, los actores externos; y en el círculo exterior, las administraciones públicas. Este esquema ilustra cómo se organizan y relacionan los distintos actores en el sistema turístico.')
            figcaption Nota. Tomado de designthinkingespaña.com (s.f.). Mapa de actores.

    p.mb-5(data-aos="fade-left") Como herramienta, el mapa de actores refleja la participación de diversos actores en torno a un tema específico y de interés. Se caracteriza por mostrar diferentes tipos de relaciones, las cuales se comprenden según la posición de cada actor dentro de la estructura.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2
            LineaTiempoD.color-acento-botones.especial
              p(numero="1" titulo="Actores clave") Son los individuos cuyo involucramiento es esencial para alcanzar los objetivos y metas del proyecto. Tienen autoridad, capacidad y recursos necesarios para tomar decisiones que influyan directamente el avance o el éxito del proyecto.
              
              p(numero="2" titulo="Actores primarios") Se refiere a las personas o grupos que están directamente impactados por el proyecto, ya sea como beneficiarios directos o porque su poder  y privilegios pueden verse alterados como consecuencia del mismo.
              
              p(numero="3" titulo="Actores secundarios") Son aquellas personas o grupos que, aunque no son los principales afectados, tienen una influencia sobre los actores primarios o sufren consecuencias indirectas del desarrollo del proyecto.

              p(numero="4" titulo="Actores veto") Se trata de aquellos actores poderosos cuya participación o apoyo es crucial para la realización del proyecto. Su falta de apoyo puede impedir la consecución de los resultados esperados, e incluso podrían tener la capacidad de frenar el proyecto.
          .col-lg-4.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span <i>Símbolos para identificar los actores.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img09.svg', alt='En la figura 10, se presentan los símbolos utilizados para identificar distintos tipos de actores en un proyecto. Los actores clave o primarios con baja influencia están representados por un círculo pequeño; los actores clave o primarios con alta influencia, por un círculo grande; los actores secundarios, por un rectángulo; y los actores veto, por un símbolo "V" dentro de un círculo.')
            figcaption Nota. Tomado de C40 Cities Finance Facility – CFF. (2017). Taller de mapa de actores del proyecto.
          figure.movil
            img(src='@/assets/curso/temas/tema3/img10.svg', alt='En la figura 10, se presentan los símbolos utilizados para identificar distintos tipos de actores en un proyecto. Los actores clave o primarios con baja influencia están representados por un círculo pequeño; los actores clave o primarios con alta influencia, por un círculo grande; los actores secundarios, por un rectángulo; y los actores veto, por un símbolo "V" dentro de un círculo.')
            figcaption Nota. Tomado de C40 Cities Finance Facility – CFF. (2017). Taller de mapa de actores del proyecto.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Vinculación

    p.mb-4(data-aos="fade-left") El mapa de actores evidencia la vinculación entre los involucrados al identificar, analizar y visualizar a todas las partes interesadas en un proyecto turístico. Los actores pueden ser personas, grupos, organizaciones o instituciones con intereses individuales o colectivos que pueden beneficiarse o verse afectados según el éxito del proyecto. El objetivo del mapa es comprender las relaciones entre los actores y la dinámica de sus interacciones, permitiendo identificar compromisos y niveles de participación según los intereses de cada uno y su influencia basada en el rol que asumen a partir de la planificación y estrategia trazadas.
    p.mb-5(data-aos="fade-left") Una vez definida la lista de actores, es importante analizar el tipo de vinculación que tendrán en el proyecto turístico mediante líneas y flechas, que permiten categorizar las relaciones. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span <i>Tipo de vínculo entre los actores mapeados.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img11.svg', alt=' En la figura 11, se presentan los diferentes tipos de vínculos posibles entre actores en un proyecto turístico, destacando cómo las líneas y flechas representan la categorización de relaciones y niveles de interacción entre las partes involucradas en la planificación y estrategia del proyecto.')
            figcaption Nota. Figari M. & Pereira D. (2020). Mapeo de actores: herramienta para la acción: la experiencia de la Mesa de Desarrollo Rural de Tacuarembó.
          figure.movil
            img(src='@/assets/curso/temas/tema3/img12.svg', alt=' En la figura 11, se presentan los diferentes tipos de vínculos posibles entre actores en un proyecto turístico, destacando cómo las líneas y flechas representan la categorización de relaciones y niveles de interacción entre las partes involucradas en la planificación y estrategia del proyecto.')
            figcaption Nota. Figari M. & Pereira D. (2020). Mapeo de actores: herramienta para la acción: la experiencia de la Mesa de Desarrollo Rural de Tacuarembó.

    p.mb-5(data-aos="fade-left") Al identificar y comprender las partes interesadas, se logran proponer estrategias efectivas de involucramiento para asegurar el éxito de los proyectos turísticos a través de la colaboración y el manejo adecuado de las relaciones. Esto puede incluir: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12          
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-2.order-2
            .cajon.cajon1.p-4.mb-4
              ul.lista-ul
                li.mb-2 
                  i.fas.fa-angle-right
                  p.mb-0 Reuniones periódicas entre actores.
                li.mb-2
                  i.fas.fa-angle-right
                  p.mb-0 Consultas y encuestas sobre las acciones o actividades realizadas.
                li.mb-2 
                  i.fas.fa-angle-right
                  p.mb-0 Alianzas estratégicas entre actores, dependiendo de las líneas económicas y los aportes estratégicos.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Comunicaciones específicas según las acciones y avances.
          .col-lg-3.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span <i>Vinculación entre actores.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img14.svg', alt='En la figura 12 se presenta la vinculación entre actores en un mapa, señalando cómo se establecen relaciones y colaboraciones estratégicas entre los distintos actores en función de sus intereses y su nivel de participación en el proyecto turístico.')
            figcaption Nota. conociendodeprevencion.org (s.f.). Mapa actores tres.
          figure.movil
            img(src='@/assets/curso/temas/tema3/img15.svg', alt=' En la figura 12 se presenta la vinculación entre actores en un mapa, señalando cómo se establecen relaciones y colaboraciones estratégicas entre los distintos actores en función de sus intereses y su nivel de participación en el proyecto turístico.')
            figcaption Nota. conociendodeprevencion.org (s.f.). Mapa actores tres.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Mapa de actores

    p.mb-5(data-aos="fade-left") El mapa de actores requiere un protocolo que oriente su diseño e implementación en los territorios, siendo esencial identificar aspectos básicos que guíen el desarrollo del proceso de manera estratégica. Es recomendable utilizar esta herramienta al inicio de un proyecto, ya que permite involucrar a los actores relevantes que facilitan el progreso turístico y, además, hace posible el monitoreo durante su ejecución.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12.order-lg-1.order-2
            .cajon.cajon.color-secundario.p-4.mb-3
              p Este mapa facilita observar los distintos tipos de relaciones que se establecen entre los actores de un territorio a través de la cooperación. También permite la generación de hipótesis y conclusiones en torno a un proyecto, basándose en los roles y las alianzas estratégicas establecidas.
            p El mapa de actores revela brechas de información, carencias en la participación y compromisos no cumplidos. Esto permite proponer acciones que involucren activamente a los actores según los compromisos previamente pactados. Además, refleja cómo algunos actores, que inicialmente parecían importantes, pueden perder relevancia, mientras que otros, considerados menos significativos, pueden ganar protagonismo en el desarrollo del proyecto.
            p Es importante seguir los siguientes pasos al preparar un mapa de actores:
          .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") A continuación, se presentan los pasos para elaborar un diagrama o mapa de actores:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .tarjeta.tarjeta--BG06.p-4.mb-5
        LineaTiempoC.color-acento-botones.especial
          .row.justify-content-center.align-items-center(titulo="1")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Definir cuestión central
              P Establecer el tema que se desea abordar en una fase especifica del proyecto.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="2")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Identificar los actores
              P Determinar quienes son los involucrados clave, primarios, secundarios y de veto.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="3")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Elegir formato de presentación
              P Visualizar el mapa utilizando dos posibles configuraciones: cebolla o arcoíris, distribuyendo los sectores del estado, la sociedad civil o el sector privado.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="4")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Asignar los actores
              P Asignar un símbolo a cada actor en función de su grado de participación en el proyecto.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img20.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="5")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Mostrar las relaciones entre actores
              P Utilizar símbolos para reflejar el tipo de vínculos que existen entre los actores involucrados.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img21.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="6")
            .col-lg-9.col-12.order-lg-2.order-2
              h4 Evaluar los resultados
              P Registrar los resultados principales y las conclusiones obtenidas del análisis.
          
            .col-lg-2.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img22.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo de diagrama de actores, que especifica cómo los actores clave, primarios y secundarios están organizados en torno a un tema específico y objetivo, divididos en los sectores de sociedad civil, sector privado y estado.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span <i>Ejemplo de diagrama de actores.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img23.svg', alt='En la figura 13 se presenta un diagrama de actores, que incluye actores clave, primarios y secundarios organizados en círculos alrededor de un tema central, y divididos por sector: sociedad civil, sector privado y estado.')
            figcaption Nota. C40 Cities Finance Facility –CFF. (2017). Taller de mapa de actores del proyecto.
          figure.movil
            img(src='@/assets/curso/temas/tema3/img24.svg', alt='En la figura 13 se presenta un diagrama de actores, que incluye actores clave, primarios y secundarios organizados en círculos alrededor de un tema central, y divididos por sector: sociedad civil, sector privado y estado.')
            figcaption Nota. C40 Cities Finance Facility –CFF. (2017). Taller de mapa de actores del proyecto.

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
