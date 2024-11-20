<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-left") El estudio del turismo ha permitido el desarrollo de teorías y modelos que posibilitan entender, a través de metodologías su funcionamiento. Uno de ellos está relacionado con el sistema y el conjunto de recursos que interactúan en él de forma espacial, es decir, en el territorio. Reconocido como sistema turístico, este involucra elementos intrínsecos como el turista, prestadores de servicios turísticos y el destino en sí, con sus atractivos naturales y culturales ofrecido por las comunidades locales y su trayectoria. También, lo conforman elementos extrínsecos que son ajenos al sistema pero que requieren ser parte de él, como lo económico, social, político, cultural, natural y tecnológico. Estos componentes interactúan entre ellos y dependen entre sí.

    .row.justify-content-center.mb-5
      .col-lg-7.col-12.mb-3.order-lg-1.order-2
        .cajon-b.color-primario.p-3.mb-0
          p.mb-0 La importancia de esta temática radica en la posibilidad de encontrar y vincular herramientas que permitan una gestión del destino turístico a partir de los actores que se encuentran en el territorio y que son parte del sistema turístico. De ahí, la necesidad de caracterizarlos e involucrarlos en los procesos de desarrollo turístico partiendo de los intereses individuales y colectivos, como parte de los eslabones de la cadena de valor del turismo, generando competitividad sostenible. A partir de la caracterización de los actores turísticos, es importante reconocer el valor de la comunidad en los procesos de planificación para el logro de un verdadero turismo, porque son ellos quienes reciben el mayor beneficio dejado por la actividad. Para alcanzar estas expectativas, se requiere de la identificación de potencialidades presentes en las regiones y cómo de forma organizada se logra obtener una oferta turística diversificada y en las condiciones que son motivo de viaje para los visitantes. Basado en la descripción anterior, es importante que acceda al siguiente video, para comprender la importancia del contenido y los diferentes temas: 
      .col-lg-5.col-md-7.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')

    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
