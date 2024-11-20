<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La estructuración de los actores del turismo en el territorio es fundamental para promover el desarrollo sostenible. La participación activa de las comunidades y la identificación de los actores sociales permiten crear redes que favorecen el progreso social. El mapeo de actores, al visualizar sus atributos y relaciones, facilita la comprensión de su influencia y poder en las actividades turísticas. Esto, a su vez, contribuye a definir los actores clave en el proceso de planificación turística, promoviendo una cadena de valor local efectiva y participativa.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Estructuración de los actores del turismo en el territorio”, se destaca la importancia de la organización del desarrollo turístico, la cadena de valor y la participación de actores clave. La comunidad y sus organizaciones son esenciales para fomentar la cooperación y el bienestar social, apoyando la planificación turística sostenible.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
