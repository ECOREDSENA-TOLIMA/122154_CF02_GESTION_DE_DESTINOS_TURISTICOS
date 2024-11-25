<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cadena de valor

    .col-auto.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") En los destinos turísticos, la implicación activa de los actores y sus diversas actividades resulta esencial para recibir a los turistas y satisfacer sus expectativas. La experiencia del visitante se enriquece a través de los diferentes eslabones de la cadena de valor, que integra múltiples acciones y actividades diseñadas para el consumo turístico. La capacidad de esta cadena, para generar valor percibido, es fundamental para la satisfacción del visitante.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .bloque-texto-f.color-primario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-bold.bloque-texto-f__texto.text-center - Michael Porter (1985)
          p.text-regular.bloque-texto-f__texto.text-center define el valor como la suma de los beneficios percibidos por un cliente, restando los costos asociados con la adquisición y el uso de un producto o servicio. Para una empresa, el valor se crea a través de una serie de actividades, desde el diseño y fabricación, hasta la venta del producto o servicio. En cada etapa del proceso, el producto o servicio gana valor, el cual se refleja en el precio que los clientes están dispuestos a pagar.

    p.mb-5(data-aos="fade-left") Por tanto, la cadena de valor es una red de actividades interrelacionadas en la que la eficiencia de cada actividad influye en el costo o efectividad de otra. Esta estructura, organizada y articulada, permite crear ventajas competitivas al optimizar las conexiones entre proveedores, empresas y canales, generando un sistema de valor que depende de las interdependencias entre todos los actores involucrados, en lugar de ser una simple suma de partes independientes.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <i>Cadena de valor del turismo.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img02.svg', alt='En la figura 5, se presenta un esquema de la cadena de valor del turismo, que muestra la interacción entre el sector público y el sector privado.')
            figcaption Nota. Turismo y sostenibilidad (2023). Cadena de valor en turismo. 
          figure.movil
            .col-auto(data-aos="fade-left")
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Figura_5_Cadena_de_valor_del_turismo.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Cadena de valor del turismo

    p.mb-5(data-aos="fade-left") A continuación, se relaciona la cadena de valor para los destinos turísticos propuesta por Jonker (2004), en donde se evidencia la participación de las actividades necesarias para agregar valor al turismo en un territorio:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <i>Cadena de valor del destino turístico.</i>
      .row.justify-content-center
        .col-auto
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img03.svg', alt=' En la figura 6, se presenta la cadena de valor del turismo, dividida en actividades primarias y actividades de apoyo. Las actividades primarias incluyen la creación de productos, promoción, logística interna, servicios del destino y servicios postventa. Las actividades de apoyo abarcan la planificación del destino e infraestructura, gestión de recursos humanos, desarrollo de recursos y productos, y tecnología y sistemas de información.')
            figcaption Nota. Adaptado de Vianchá Sánchez, Z. (2021). Basado en la cadena de valor del destino turístico de Jonker (2004).
          figure.movil
            .col-auto(data-aos="fade-left")
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Figura_6_Cadena_de_valor_del_destino_turístico.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Figura 6 Cadena de valor del destino turístico

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Criterios de aplicación

    p.mb-5(data-aos="fade-left") La cadena de valor del turismo organiza el sector en los territorios, integrando a distintos proveedores de productos y servicios que participan en la experiencia turística del viajero, desde la planificación del viaje hasta el regreso al lugar de origen.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cadena de valor permite una redistribución equitativa de los ingresos y beneficios en las regiones, facilitando el acceso al mercado mediante la negociación entre actores turísticos, especialmente pequeños productores y microempresarios del sector. Para lograrlo, se aplican criterios de integración, cooperación y compromiso entre los actores del turismo, tanto directos como indirectos.
          br
          br
          | 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Etapas

    p.mb-5(data-aos="fade-left") Para entregar un producto o servicio al turista se requiere de una serie de actividades reflejadas en pasos que están relacionadas con la creación y entrega del producto de forma directa y soportadas por otras acciones que ayudad a optimizar el rendimiento de las primeras como lo expresa Porter en 1985 y las cuales dan soporte como fuentes de ventajas competitivas generadoras de valor. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <i>Etapas de la cadena de valor.</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img05.svg', alt='En la figura 7 se presentan las etapas de la cadena de valor de Michael Porter, que abarcan tanto las actividades primarias como las actividades de apoyo.')
            figcaption Nota. Adaptada de Peralta F. (2023). Actividades primarias de la cadena de valor: cómo implementarlas.
          figure.movil
            .col-auto(data-aos="fade-left")
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Figura_7_Etapas_de_la_cadena_de_valor.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Figura 7 Etapas de la cadena de valor

    p.mb-5(data-aos="fade-left") Según Pulido y López (2013), es esencial entender que el turismo está intrínsecamente relacionado con el desarrollo a través de los eslabones que conforman la cadena de valor del destino turístico de manera secuencial. Esta cadena se refleja en tres etapas: elección de valor, comercialización de valor y creación de valor. Estas etapas se llevan a cabo a través de nueve eslabones, que se describen a continuación.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <i>Etapas de la cadena de valor del destino turístico.</i>
      .row.justify-content-center
        .col-auto
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img06.svg', alt='En la figura 8 se presentan las etapas de la cadena de valor del destino turístico, de acuerdo con la propuesta de Pulido y López (2013), que abarcan las fases esenciales del desarrollo y la gestión del turismo en un destino.')
            figcaption Nota. Pulido y López (2013). Propuesta de contenidos para una política turística sostenible en España. PASOS. Revista de Turismo y Patrimonio Cultural, p. 529.
          figure.movil
            .col-auto(data-aos="fade-left")
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Figura_8_Etapas_de_la_cadena_de_valor_del_destino_turístico.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Figura 8. Etapas de la cadena de valor del destino turístico

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Factor de competitividad
    
    p.mb-5(data-aos="fade-left") Las cadenas de valor buscan aumentar la competitividad mediante la reducción de costos de producción y la mejora de la calidad. Esto requiere una variedad de insumos que fomenten la innovación y un direccionamiento articulado. En el ámbito del turismo, la cadena de valor se centra en los atractivos turísticos y en las acciones organizadas que impulsan el desarrollo. Para lograrlo, es esencial responder a las emergentes necesidades y preferencias de los turistas, con el objetivo de posicionar adecuadamente el destino turístico.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.p-4.mb-3
          p La competencia implica integrarse en la dinámica del mercado, donde los destinos luchan por atraer visitantes. Según la Organización Mundial de Turismo (2011), los factores que influyen en esta competencia incluyen aspectos económicos, de marketing, del visitante y otros, como la innovación, la estrategia y el entretenimiento. Además, es fundamental reconocer la evolución del mercado y las nuevas tendencias en turismo, lo que impulsa a las empresas a desarrollar estrategias orientadas a la competitividad. Esto les permite mejorar y crear ventajas en relación con otras empresas, incluso dentro del mismo sector económico.
        p Una alternativa para fortalecer la competitividad es la creación de clústeres dentro de las etapas o eslabones de la cadena productiva. Al articular las relaciones entre los diferentes participantes, se genera un valor que involucra tanto el factor precio como el factor servicio turístico. Esta colaboración estratégica entre los diversos actores de la cadena de valor turística es crucial para establecer una posición significativa y duradera en el mercado.
      .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Conforme a las nuevas tendencias y la implementación de estrategias competitivas, se ha logrado aumentar el volumen de llegadas e ingresos a los destinos, lo que eleva la cuota de mercado. Asimismo, se ha observado una mejora en el nivel de vida y el bienestar de las comunidades locales directamente relacionadas con el turismo en estos destinos.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Proceso de monitoreo

    p.mb-4(data-aos="fade-left") Una vez que la cadena de valor turística se implementa en los destinos, es fundamental llevar a cabo un seguimiento y control de los procesos para identificar cuáles se están cumpliendo y cuáles son los objetivos alcanzados. Este monitoreo permite garantizar la mejora continua en el sistema.
    p.mb-4(data-aos="fade-left") La gestión de la cadena de valor de un destino turístico implica evaluar los resultados de los diferentes procesos integrados en el desarrollo turístico del territorio. Esto genera un grado de exigencia para los actores involucrados en la prestación de servicios dentro del sistema turístico.
    p.mb-5(data-aos="fade-left") Construir un sistema eficiente en cada eslabón de la cadena de valor, adaptado a las necesidades del cliente, requiere procesos que aseguren la calidad en cada fase. Es importante considerar que, si un actor falla en la ejecución de sus procesos, las repercusiones pueden afectar a toda la cadena. Por lo tanto, Yilmaz y Bititci (2006) destacan la necesidad de desarrollar un sistema que satisfaga al turista en cada etapa y garantice el cumplimiento de las acciones propuestas mediante un modelo de medición del rendimiento de cada actor, enfocado en el cliente.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img08.svg", alt="alt").img90.m-auto
          h4.text-center 1
          p.text-center.mb-0 La coordinación de procesos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img09.svg", alt="alt").img90.m-auto
          h4.text-center 2
          p.text-center.mb-0 La mejora de la comunicación.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img90.m-auto
          h4.text-center 3
          p.text-center.mb-0 La medición de las necesidades de los turistas.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img90.m-auto
          h4.text-center 4
          p.text-center.mb-0 El control del rendimiento interno en la cadena de valor.

</template>

<script>
export default {
  name: 'Tema2',
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
