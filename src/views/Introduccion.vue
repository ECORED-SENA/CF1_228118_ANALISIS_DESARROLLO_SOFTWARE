<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12    
            .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/179.svg', alt='')       
              .col.my-3
                p(data-aos="fade-down").mb-0 Bienvenidos al estudio del presente componente formativo, en el cual se estudiará la caracterización de procesos, para continuar con la ingeniería de requisitos, entendiéndola como el conjunto de actividades y tareas del proceso de desarrollo de sistemas software, donde se definen que las características de un sistema software satisfagan las necesidades de negocio de clientes y usuarios y que se integre con éxito en el entorno en el que se trabaje. 

            .row.justify-content-center.align-items-center.mb-4
              .col-lg-8.my-3 
                .bgi1.brad.p-4.mb-4(data-aos="flip-down")
                  p(data-aos="fade-down") Por este motivo, estudiaremos el ciclo de vida del software, sus fases y los diferentes paradigmas de los modelos de vida del software, haciendo énfasis en los requisitos, su importancia y clasificación.

                  p(data-aos="fade-down").mb-0 Luego trataremos el tema de la recolección de datos, el cual se refiere al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas. 
                .row.justify-content-center.align-items-center
                  .col-lg-auto.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/182.svg', alt='')       
                  .col.my-3
                    h5.t1(data-aos="fade-down").mb-0 Continuaremos con el análisis de requisitos, documento donde se describe lo que se debe hacer, es el estudio de las necesidades. Allí, se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos. 

                p(data-aos="fade-down") Conoceremos diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos, así como diferentes metodologías ágiles que nos ayudarán en la especificación de requisitos.

                h5.mb-5(data-aos="fade-down") #[mark.ti.px-2 Bienvenido, y le deseamos muchos éxitos en el proceso de aprendizaje.]                                                 
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/181.svg', alt='')                        
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
