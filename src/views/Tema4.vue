<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Técnicas de análisis y especificación de requisitos 

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")
      .col.my-3
        p(data-aos="fade-down").mb-0 A continuación, abordaremos el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil).               
      .col-lg-auto.my-3
        img.img-a.img-t(src='@/assets/curso/temas/178.png', alt='')       

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 4.1 Técnicas de análisis de requisitos  

    .cont_1_1.p-4.p-lg-5
      .cont_1_2
        .row
          .col-lg-4.col-xl-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-md-5.col-lg-12.col-8
              img.img-t(src="@/assets/curso/tema1/1.png" style="z-index:1;")
          .col-lg-8.col-xl-8(data-aos="fade-left" style="place-self:center;")
            .p-4.p-lg-0
              p.mb-0.mt-0.mt-lg-4 El proceso de análisis de requisitos #[strong.t1 permite, principalmente, el estudio de las necesidades de los usuarios para definir requisitos del sistema por medio de la producción del documento de especificación de requisitos donde se describe lo que el sistema debe hacer], pero no el cómo. Así es como este proceso, además de involucrar un proceso de análisis, también requiere de la síntesis de la información existente. 

    p.mt-5(data-aos="fade-right" style="color:#8722E2;font-weight:bold;") A continuación, se describen algunas técnicas que pueden ser utilizadas para entender y ordenar los requisitos identificados para su posterior redacción en un artefacto formal dependiendo del marco de desarrollo de #[em(style="color:#8722E2;font-weight:bold;") software] utilizado.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Priorización de requisitos
    
    p(data-aos="fade-right") Esta es una actividad clave para el éxito en la construcción de producto de #[em software] y su objetivo es maximizar el valor entregado por el proyecto a sus clientes; es decir, identificar cuáles requisitos se deben priorizar tomando en cuenta factores como la complejidad, las dependencias y el retorno de inversión a los clientes, entre otros indicadores.

    .row.bgt41.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                .p-4(style="background-color:#DEBEFB;border-radius:15px;")
                  p.mb-0 La priorización de requisitos, por lo general, es responsabilidad de los gerentes del proyecto o dueños de producto dependiendo del tipo de enfoque utilizado; sin embargo, se requiere de la participación activa de los analistas de requisitos, ya que si bien es el cliente o su representante quien determina cuáles requisitos son más importantes para su negocio, el analista debe asesorar, facilitar e informarle al cliente para no darle prioridad superior a requisitos que tienen otras dependencias no resueltas; por ejemplo, no se podría priorizar un requerimiento asociado a un carrito de compras sin antes tener resuelto los requerimientos asociados al registro y consulta de productos.
                .p-4.mt-4(style="background-color:#fff;border-radius:15px;")
                  p.mb-0 El proceso de priorización es continuo, es decir, la prioridad de un requisito puede variar a lo largo del proyecto, así como los requisitos también pueden variar a lo largo del mismo. La priorización no es un proceso sencillo, por lo que, además de conocer las diferentes técnicas, es importante la toma de decisiones y estas, en el marco de un proyecto, siempre van a generar inconformidades, pero si no se decide respecto a la priorización de requisitos es como si no se fundamentaran las bases sobre las que el equipo de desarrollo va a construir el sistema.
                  figure.text-end.mt-2
                    img(src="@/assets/curso/tema1/4.svg" style="max-width:100px;display:inline;")
              .col-lg-5(data-aos="fade-left")
                figure.m-auto.col-md-7.col-lg-12.col-8
                  img(src="@/assets/curso/tema1/2.png")
            
            .row.justify-content-start.mb-4.mt-5 
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Técnica de clasificación de lista 
            
            p(data-aos="fade-left").mt-5 Esta técnica de clasificación no requiere ningún tipo de entrenamiento o preparación, ya que es una forma de priorización natural que se usa en la vida cotidiana. Este tipo de priorización simple es una de las más utilizadas y consiste en darle un valor numérico a cada requerimiento iniciando por el número 1 y continuando de forma sucesiva con 2, 3 y hasta el número total de requisitos definidos (Porfirio, 2021).

            .col-xl-10.m-auto.mt-5
              .row
                .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
                  .bg5.brad.h-100.text-white.p-4.p-lg-5.pt-4.pt-lg-4
                    .d-flex.justify-content-between
                      div
                        figure
                          img(src="@/assets/curso/tema1/7.png" style="max-width:100px;display:inline;")
                    p.mt-3.mb-0 Esta técnica tiene la ventaja de que solo puede existir un número 1, lo cual evita muchos problemas por parte de los interesados o responsables del negocio que quieren que todos los requerimientos tengan prioridad 1; adicionalmente, aporta claridad y evita confusiones. Cada elemento se prioriza con relación al resto de elementos, lo que simplifica el proceso.
                .col-lg(data-aos="fade-left")
                  .bg5.brad.h-100.text-white.p-4.p-lg-5.pt-4.pt-lg-4
                    .d-flex.justify-content-between
                      div
                        figure
                          img(src="@/assets/curso/tema1/9.png" style="max-width:100px;display:inline;")
                    p.mt-3.mb-0 Para usar adecuadamente esta técnica, se requiere de un profundo conocimiento de todos los requerimientos definidos y si bien el proceso parece simple, se requiere de un gran esfuerzo por parte del equipo para situar a cada requerimiento en la posición correcta.
    
    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Técnica de puntos de historia y valor del negocio
    
    p(data-aos="fade-left") Esta consiste en realizar el proceso de priorización de acuerdo con factores como el esfuerzo y la opinión de los gerentes de proyecto o dueños de producto, los clientes, el equipo de desarrollo o incluso una combinación de los anteriores. El valor del negocio corresponde a un valor numérico que cuanto más alto sea, más valor representa para el cliente (Porfirio, 2021).

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/10.png")
      .col-lg-7(data-aos="fade-left")
        .p-4(style="background-color:#D6E1FD;border-radius:12px;")
          p.mb-0 Usar solo el valor del negocio como elemento de priorización puede generar problemas, ya que el valor asociado por el cliente a un requerimiento puede ser muy superfluo y, además, no considera detalles clave como el esfuerzo que se requiere para su desarrollo; por esta razón, también se usa el valor de puntos de historia, que no es más que otro valor numérico asignado por el equipo de desarrolladores a cada requerimiento, en el que se expresa una estimación de esfuerzo. Cuanto más grande sea el número, implica más esfuerzo requerido con miras a realizar el requerimiento.
        p.mt-4 Para lograr la priorización de los requerimientos, se debe realizar el cálculo del cociente obtenido a partir de los puntos de valor del negocio dividido entre los puntos de historia, quedando entonces una priorización donde estarán en los primeros lugares los requerimientos más sencillos de resolver por los desarrolladores y que tengan mayor interés por parte del cliente. #[strong(style="color:#8722E2;") A continuación se da un ejemplo].
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5
      span #[b Tabla 6.] Ejemplo de aplicación técnica de puntos de historia y valor del negocio
    
    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        thead.bgh
          tr
            th.text-center(style="border:0;") Requerimientos
            th.text-center(style="border:0;") Valor del negocio
            th.text-center(style="border:0;") Puntos de historia
            th.text-center(style="border:0;") Cociente
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R01
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 6
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R02
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 7
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;") 7
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R03
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 9
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;") 1,8
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R04
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;") 1
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R05
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R06
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;") 1,25
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R07
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 8
            td.text-center(style="border:0;") 0,25
    
    p.mt-4(data-aos="fade-right") Si se trata de un proyecto de siete (7) requerimientos con los valores de negocio, puntos de historia y cocientes como se describe en la tabla anterior, al realizar el proceso de priorización quedaría en el primer lugar el requerimiento R02 ya que tiene el cociente más alto; es decir, representa un requerimiento fácil de construir para el grupo de desarrolladores y, adicionalmente, tiene un alto valor de negocio para el cliente; luego, en el segundo lugar, el requerimiento R01 y R05 y así sucesivamente se registran las prioridades de acuerdo con el valor del cociente de mayor a menor.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Técnica urgente
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Aquí se utiliza una tabla de dos dimensiones, donde la horizontal estará determinada por el valor de la urgencia en el requerimiento, el cual corresponde a un valor numérico entre 1 y 5, donde un valor de 5 implica la mayor urgencia y 1 que no hay tanto apuro en el desarrollo de requerimiento; y la dimensión vertical estará determinada por el valor del negocio, solo que esta vez, a diferencia de la técnica anterior, el valor del negocio también se rige por una escala de 1 a 5, siendo 5 el de mayor valor de negocio posible para un requerimiento (Porfirio, 2021).
        .p-3.p-lg-4.mt-4(style="background-color:#D6E1FD;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col(style="place-self:center;")
              p.mb-0 Para determinar la prioridad final de un requerimiento, se utiliza una escala de colores que surge a partir de la multiplicación de los valores de las escalas de urgencia y de valor de negocio según la #[strong(style="color:#8722E2;") siguiente tabla:]
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/11.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 
      span #[b Tabla 7.] Referencia para la técnica urgente
    
    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal(style="background-color:#F6F6F6;color:#636363;") Nota: Tomado de Porfirio (2021).
        thead(style="border:0;")
        tbody
          tr
            td.fw-bold.text-center(style="border:1px #345382 solid;" rowspan="8" colspan="3") Valor del negocio
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 5
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 5
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 10
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 15
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 20
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#F37474;") 25
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 8
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 12
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 16
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 20
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 6
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 9
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 12
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 15
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 6
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 8
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 10
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 5
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 5
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#F6F6F6;" colspan="6") Urgencia
    
    p.mt-4(data-aos="fade-right") Luego, se consideran los requerimientos de mayor prioridad que están en el sector de color rojo, después los de color naranja, seguido de los de color amarillo y, por último, los requerimientos del sector de color verde. Para entender mejor este estilo de priorización, observar el siguiente ejemplo:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5
      span #[b Tabla 8.] Ejemplo de aplicación técnica urgente

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        thead.bgh
          tr
            th.text-center(style="border:0;") Requerimientos
            th.text-center(style="border:0;") Valor del negocio
            th.text-center(style="border:0;") Urgencia
            th.text-center(style="border:0;") Sector
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R01
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R02
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#FFF2AE;") Amarillo
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R03
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center.fw-bold(style="border:0;background-color:#FF8B8B;") Rojo
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R04
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center.fw-bold(style="border:0;background-color:#FFF2AE;") Amarillo
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R05
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#FFD574;") Naranja
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R06
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R07
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
    
    p.mt-4(data-aos="fade-right") Al realizar la multiplicación de los valores de negocio y el valor de la urgencia, se puede establecer en qué sector se encuentra cada requerimiento. Ahora bien, tomando en cuenta los valores del ejemplo de la tabla anterior, se puede concluir que el primer requerimiento a abordar sería el R03 que está en el sector de color rojo, luego el requerimiento R05, que está en el sector de color naranja, y así sucesivamente.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Técnica MoSCoW
    
    p(data-aos="fade-right") Esta técnica se basa en la asignación de etiquetas a cada requerimiento, y las disponibles se relacionan a continuación:

    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white

          .text-center 
            figure
              img(src="@/assets/curso/tema1/14.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 M: indica una funcionalidad que debe estar (#[em Must]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white

          .text-center 
            figure
              img(src="@/assets/curso/tema1/15.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 S: indica una funcionalidad que debería estar (#[em Should]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white

          .text-center 
            figure
              img(src="@/assets/curso/tema1/16.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 C: indica una funcionalidad que podría estar (#[em Could]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white

          .text-center 
            figure
              img(src="@/assets/curso/tema1/17.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 W: indica una funcionalidad que no estará por ahora, de pronto más adelante (#[em Wont]).
    
    p.mt-4(data-aos="fade-right") Los requerimientos son priorizados utilizando el siguiente orden: primero los que tienen etiqueta #[strong(style="color:#8722E2;") M], luego los requerimientos con etiqueta #[strong(style="color:#8722E2;") S], después aquellos con #[strong(style="color:#8722E2;") C] y, finalmente, los etiquetados como #[strong(style="color:#8722E2;") W].

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/19.svg")
      .col-lg-9(data-aos="fade-left")
        .p-4(style="background-color:#F2E5FD;border-radius:12px;")
          p.mb-0 Esta técnica requiere de un proceso de consenso sobre el significado de cada una de las etiquetas asignables a cada requerimiento. Los requisitos de tipo #[strong(style="color:#8722E2;") M] son aquellos obligatorios y que, de no ser abordados, implicaría directamente el fracaso; es importante entonces acordar qué se puede entregar y que sea útil, adicionalmente deben formar parte de un conjunto coherente, ya que si, sencillamente se seleccionan todos los requerimientos de tipo #[strong(style="color:#8722E2;") M], automáticamente todos se transforman en requerimientos de tipo #[strong(style="color:#8722E2;") M] y se pierde la dinámica de la técnica.
        .row.mt-4
          .col-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col(style="place-self:center;")
            p.mb-0 Normalmente el proceso de desarrollo de #[em software] es iterativo e incremental por lo que dependiendo del momento en que se encuentre un requerimiento, que ahora puede ser #[strong(style="color:#8722E2;") W], en la siguiente iteración puede asumir un valor de #[strong(style="color:#8722E2;") M]. 
    
    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Juicio de expertos
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Es una técnica basada principalmente en función de la complejidad y la exactitud en los resultados, básicamente consiste en realizar el proceso de priorización utilizando como base la opinión del gerente de proyecto o dueño de producto, o de algún #[strong(style="color:#8722E2;font-style:italic;") stakeholder] con conocimientos en la industria asociada al producto a desarrollar (Porfirio, 2021).
        .p-4.mt-4(style="background-color:#E8EEFE;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/21.svg")
            .col(style="place-self:center;")
              p.mb-0 Este tipo de técnica funciona muy bien para proyectos pequeños con un dueño de negocio que tiene mucho conocimiento del problema y de la solución que necesita para resolverlo; sin embargo, se debe utilizar esta técnica con cuidado ya que se basa en una visión sesgada del negocio.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure.col-8.col-md-7.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/22.png")
    
    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  Matriz de priorización
    
    p(data-aos="fade-right") Esta técnica consiste en construir una tabla donde cada requerimiento es valorado en una escala de #[strong(style="color:#8722E2;") 0] a #[strong(style="color:#8722E2;") 10] o de #[strong(style="color:#8722E2;") 0] a #[strong(style="color:#8722E2;") 100] para cada dimensión alineada con los objetivos del producto. Normalmente cada dimensión tiene un peso porcentual, de modo que cada requerimiento tendrá un valor final a partir de la sumatoria de la multiplicación de cada puntuación por el peso de cada dimensión (Porfirio, 2021).

    p.mt-4(data-aos="fade-left") #[strong(style="color:#8722E2;") Por ejemplo, se debe considerar la siguiente tabla:]

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 
      span #[b Tabla 9.] Ejemplo de aplicación técnica de matriz de priorización

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal(style="background-color:#F6F6F6;color:#636363;") Tabla 4 - Ejemplo de aplicación técnica de matriz de priorización
        thead(style="border:0;")
          tr
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;" rowspan="2") Requerimiento
            th.text-center(style="border:0;background-color:#F6DD77;border-right:1px #B58F19 solid;")
            th.text-center(style="border:0;background-color:#F6DD77;border-right:1px #B58F19 solid;") Criterios
            th.text-center(style="border:0;background-color:#F6DD77;border-right:1px #B58F19 solid;") 
            th.text-center.text-white(style="border:0;background-color:#3A1D71;border-right:1px #B58F19 solid;") Resultado
            th.text-center(style="border:0;background-color:#FFCA28;" rowspan="2") #[em Ranking]
          tr
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Conversión #[br] 30%
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Satisfacción de #[br] usuario 40% 
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Retención #[br] 30%
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") 100%
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R01
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 8
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4,8
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R02
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 6
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4,3
            td.text-center(style="border:0;") 7
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R03
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 8
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 7
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 6
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 7
            td.text-center(style="border:0;") 1,8
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R04
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 2
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3,2
            td.text-center(style="border:0;") 1
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p Suponiendo las dimensiones de conversión con un peso porcentual del 30%, la satisfacción del cliente con un peso porcentual del 40% y la retención de clientes con peso porcentual del 30%, cada uno de los requerimientos (R01-R04) son evaluados en una escala de 0 a 10, a los cuales se les aplica el cálculo de acuerdo con el valor porcentual de cada dimensión evaluada y el resultado se obtendría de la sumatoria de los valores parciales de cada dimensión, con lo cual los mayores valores totales obtenidos serán priorizados sobre los de menor valor.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.m-auto.col-md-7.col-lg-12.col-7
          img(src="@/assets/curso/tema1/23.png")
      .col-lg(data-aos="zoom-in")
        .p-4.h-100(style="background-color:#F2E5FD;border-radius:12px;")
          p Esta técnica sigue siendo muy subjetiva al igual que la técnica de juicio de expertos, aunque quedan claros cuáles son los criterios de evaluación utilizados para determinar la prioridad de los requisitos.
          figure.text-end.mb-0
            img(src="@/assets/curso/tema1/24.svg" style="display:inline;max-width:60px;")

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Matriz de trazabilidad 
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/25.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#E8EEFE;border-radius:12px;")
          p.mb-0 La matriz de trazabilidad es una herramienta que permite alinear los requisitos del proyecto con los logros de los objetivos, es una tabla que relaciona cada uno de los requerimientos con el entregable solicitado. Es decir, permite identificar qué resultado se alcanza con cada requisito y, a la vez, permite visualizar qué requisitos son necesario cumplir para determinado entregable (Pantaleo, 2018).
        p.mt-4 Este es un instrumento clave para el responsable del proyecto, en especial en el proceso de seguimiento y control de cambios, ya que permite analizar qué requerimientos, eventualmente, convendría modificar, eliminar o añadir; así, se puede ajustar la planificación de tareas pendientes del proyecto. También permite identificar inconsistencias entre los requerimientos y los beneficios que se esperan alcanzar, tener una visualización rápida de los requisitos que han sido abordados y cuáles están pendientes por realizar y, por lo tanto, qué entregables están próximos a producirse y cuáles todavía requieren de mayor tiempo.
        p.mt-4 La estructura de la matriz de trazabilidad se puede construir en una hoja de cálculo, en ella se relacionan todos los requisitos y las metas a alcanzar junto con una serie de valores complementarios que aportan información y coherencia a los vínculos generados.
    
    p.mt-4(data-aos="fade-right") Cada organización es responsable de adaptar la matriz de correlación a sus necesidades particulares; en el siguiente recurso se propone el contenido base de una matriz de correlación dividida por secciones.

    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="Identificación")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/27.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#8722E2;") Identificación
            p #[strong Identificador:] código único para cada requisito.
            p #[strong Código jerárquico:] código que permite categorizar cada grupo de requisitos.
            p #[strong Descripción:] texto explicativo del requerimiento.
            p #[strong Tipo:] categoría del requisito (requerimiento de negocio, requerimiento de los interesados, funcionales y no funcionales, requerimientos del proyecto, requerimiento de calidad).
      .py-3.py-md-4(titulo="Estado")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/28.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#8722E2;") Estado
            p #[strong Versión:] versión del requerimiento (importante para el control de cambios).
            p #[strong Estado:] activo, cancelado, diferido, agregado, aprobado, asignado o completado.
            p #[strong Fecha de estado:] momento en el que se realizó la última modificación del estado.
            p #[strong Responsable:] persona encargada del requisito.
            p #[strong Prioridad:] escalas de prioridad usada en el proyecto (alta, media, baja; 1, 2, 3, 4, 5). #[br] Otras características: cualquier otro campo de valor para la organización.
      .py-3.py-md-4(titulo="Objetivo")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/29.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#8722E2;") Objetivo
            p #[strong Objetivo:] objetivo que pretende alcanzar el requerimiento.
            p #[strong Necesidad de negocio:] necesidad de negocio que se pretende cubrir con el objetivo del proyecto y por ende con el requisito.
            p #[strong Entregable:] producto.
    

    .tarjeta.bg9.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1.t2 Ejemplo de la estructura de una matriz de trazabilidad
              p.mb-0.text-white Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. Cuando se usa esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto. Descargue el modelo de matriz como tabla base para una estructuración de trazabilidad.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_estructura_matriz_trazabilidad.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    p.my-5(data-aos="fade-right") Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. #[strong.t1 Cuando se usa, esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto.]

    .row.justify-content-start.mb-4.pt-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Descomposición funcional
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p Esta estrategia consiste en definir los requerimientos como una relación de entradas y salidas de un sistema. Normalmente, estos requerimientos se definen de manera muy general y poco detallada y luego empieza a descomponerse en funcionalidades y subfuncionalidades un poco más detallados con el ánimo de analizarlas individualmente hasta lograr un nivel de detalle adecuado para el proyecto. A esta estructura se le conoce como #[em top-down]; el resultado es una estructura jerárquica (Pantaleo, 2018).
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.m-auto.col-md-7.col-lg-12.col-7
          img(src="@/assets/curso/tema1/31.png")
      .col-lg(data-aos="zoom-in")
        .p-4.h-100.j(style="background-color:#E8EEFE;border-radius:12px;")
          p.mb-0 La descomposición funcional se realiza, por lo general, para identificar y entender los componentes o partes que constituyen un todo; en este proceso es vital identificar las interacciones entre componentes. #[strong.t1 A continuación, se expone un ejemplo gráfico sobre esta descomposición funcional.]

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 
      span #[b Figura 1.] Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos (fragmento)
    
    .bgfig5.p-5(data-aos="zoom-in") 
      img(src="@/assets/curso/tema1/33.svg" alt="")  


    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Especificación de requisitos      

    .p-3.p-lg-4.mb-5(style="background-color:#D6E1FD;border-radius:12px;")
      .row
        .col-auto(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 En esta sección se describen algunos estándares y/o técnicas que pueden ser usadas por las organizaciones para describir formalmente cada uno de los requisitos del sistema.
    
    .row.justify-content-start.mb-4.pt-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Estándar IEEE 830
    
    .cont_2_1.pt-5.pb-5
      p(data-aos="fade-right") Este estándar presenta un conjunto de prácticas recomendadas para la redacción de un documento de especificación de requerimientos mejor conocido como SRS. Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. #[strong.t1 A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).]

      .tarjeta.bg9.p-3.my-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/pdf.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-1.t2 Ejemplo de la estructura de una matriz de trazabilidad
                p.mb-0.text-white Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Infografia_EstandarIEEE830.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download      
      
      p.mt-4.fw-bold(data-aos="fade-right") Sumado a esto, se presenta la estructura base de un documento SRS, indicando cuáles son los apartados principales.

      .titulo-sexto.color-acento-contenido.mt-4(data-aos="zoom-in-down")
        h5 
        span Estructura base de un documento SRS
      
      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .h-100.bgt42.p-4(style="border:1px #8722E2 solid;border-radius:20px;")
            h4.mb-0 1. Introducción
            p.mb-0 1.1. Propósito
            p.mb-0 1.2. Ámbito del sistema
            p.mb-0 1.3. Definiciones, Acrónimos y Abreviaturas
            p.mb-0 1.4. Referencias
            h4.mt-3.mb-0 2. Descripción general
            p.mb-0 2.1. Perspectiva del producto
            p.mb-0 2.2. Funciones del producto
            p.mb-0 2.3. Características de los usuarios
            p.mb-0 2.4. Restricciones
            p.mb-0 2.5. Suposiciones y dependencias
            h4.mt-3.mb-0 3. Requerimientos específicos
            p.mb-0 3.1. Interfaz
            p.mb-0 3.2. Requisitos funcionales
            p.mb-0 3.3. Requerimientos no funcionales
            p.mb-0 3.4. Otros requisitos
            h4.mt-3.mb-0 4. Apéndices
        .col-lg-8(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/4.png")
      .p-4.bg-white.mt-4(style="border-radius:12px;" data-aos="zoom-in")
        .row
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/5.svg")
          .col(style="place-self:center;")
            p.mb-0 #[strong Se sugiere revisar algunos ejemplos de proyectos, que se presentan sobre el diligenciamiento del formato SRS, los cuales se encuentran en el material complementario.]
    
    .row.justify-content-start.mb-4.pt-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Estándar IEEE 29148:2018
    
    .cont_2_2.pb-5
      .row
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#D6E1FD;border-radius:12px;")
            p Este estándar reemplaza los estándares IEEE 830, IEEE 1233, IEEE 1362, y contiene disposiciones para los procesos y productos relacionados con la ingeniería de requisitos para sistemas, productos y servicios de #[em software] a lo largo del ciclo de vida (Penzenstadler, 2021).
            figure.mt-4.text-end
              img(src="@/assets/curso/tema2/7.svg" style="max-width:90px;display:inline;")
        .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/6.png")
        .col-lg(data-aos="zoom-in")
          .h-100.p-4(style="background-color:#F2E5FD;border-radius:12px;")
            p Además, define la construcción de un buen requisito, proporciona atributos y características de los requisitos, y analiza la aplicación iterativa y recursiva del proceso de requisitos a lo largo del ciclo de vida. También proporciona orientación adicional en la aplicación de procesos de ingeniería y gestión de requerimientos relacionados con la ingeniería de requisitos al tiempo que define los elementos de información aplicables a la ingeniería de requisitos y su contenido.
      p.mt-5.fw-bold(data-aos="fade-right") El estándar IEEE 29148:2018 está estructurado de la siguiente forma:
      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 1
              | Introducción, resumen y tabla de contenido.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 2
              | Propósito, alcance del estándar, generalidades.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 3
              | Explicación de los otros estándares que lo conforman.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 4
              | Referencias a normas que lo conforman.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 5
              | Clarificación de la terminología, lo que es muy valioso para cuando se quiere establecer nuevos procesos de ingeniería de requerimientos en una empresa.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 6
              | Clarificación de los conceptos y procesos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 7
              | Explicación y contenido de los ítems de información que vienen a través de la especificación de requerimientos o que debemos considerar incluir en la especificación de requerimientos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 8
              | Anexos adicionales para mayor detalle.
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/9.svg")
      p.mt-5(data-aos="fade-right") Esta norma propone un listado de requerimientos mínimos los cuales son la base de la especificación de requerimientos; en ese sentido, se proponen los siguientes tipos de requerimientos del sistema:
      .row.mt-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/10.svg")
        .col-lg-7(data-aos="fade-left")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 1
              div Requerimientos funcionales: representan necesidades de los interesados del #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 2
              | Requerimientos de usabilidad: requerimientos que son utilizados directamente por los involucrados en la solución (requerimientos de uso).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 3
              | Requerimientos de desempeño: disponibilidad de servicios y procesos transaccionales.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 4
              div Interfaces del sistema: interacción entre personas con el #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 5
              | Operaciones del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 6
              | Modos y estados del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 7
              div Características físicas (#[em hardware]).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 8
              | Condiciones del ambiente (operativas y operacionales).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 9
              | Seguridad del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 10
              | Manejo de la información.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 11
              div Políticas y regulación: normas y estándares que fundamenta el #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 12
              | Ciclo de vida del sistema: establece las etapas y duración del desarrollo y uso en producción.
    
    .row.justify-content-start.mb-4.pt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 La especificación de requisitos a través de marcos de trabajo ágiles
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Los marcos de trabajo ágiles promueven la comunicación oral sobre la documentación exhaustiva en la mayoría de los procesos del ciclo de vida, particularmente en los procesos de identificación de necesidades y diseño. Sin embargo, uno de los artefactos presentes para el modelado de requerimientos son las historias de usuario.
        .p-4.mt-4(style="border-radius:12px;background-color:#D6E1FD;")
          .row
            .col-lg-auto.col-md-12.col-12.mb-4.mb-lg-0(style="place-self:center;")
              figure.col-3.m-auto.col-lg-12
                img(src="@/assets/curso/tema2/11.svg")
            .col-lg(style="place-self:center;")
              p.mb-0 Las historias de usuario son una explicación general e informal de una función del #[em software] escrita desde la perspectiva del usuario final o cliente. Permiten describir de una manera muy breve un requerimiento, estimar prioridades, alcance y tiempo de realización (Rivadeneira, 2014). En la siguiente tabla, se puede observar la estructura base de un documento de historia de usuario.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/12.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 6.
      span Estructura base de un documento de historia de usuario

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal.mt-2(style="background-color:#F6F6F6;color:#636363;") Nota: Tomado de Rivadeneira (2014).
        thead.bgh
          tr
            th.text-center(style="border:0;" colspan="2") Historia de usuario
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Número: #
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Nombre de la historia de usuario:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Usuario:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Prioridad:
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Puntos estimados:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Descripción: 
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Observaciones: 
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Criterios de aceptación:
    
    p.mt-5(data-aos="fade-right") Las historias de usuario tienen varios beneficios respecto a otros instrumentos de redacción de requerimientos, entre los cuales se pueden listar:

    .row.mt-4
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white
          .text-center 
            figure
              img(src="@/assets/curso/tema2/13.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario se centran en solucionar problemas a usuarios reales.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white
          .text-center 
            figure
              img(src="@/assets/curso/tema2/14.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario permiten la colaboración, ya que como su descripción es corta se necesita que el equipo colabore para decidir cómo dar solución a la historia para cumplir con la necesidad expresada por el usuario.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white
          .text-center 
            figure
              img(src="@/assets/curso/tema2/15.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias impulsan la creatividad, ya que fomentan que el equipo piense de forma crítica y creativa sobre cómo solucionar de la mejor manera el objetivo.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.bg5.brad.text-white
          .text-center 
            figure
              img(src="@/assets/curso/tema2/16.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario motivan, pensar en la mejor solución para una problemática particular representan retos y pequeñas victorias para el equipo.
    
    .row.justify-content-start.mb-4.pt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Scrum y la especificación de requisitos
    
    p(data-aos="fade-left") El marco de trabajo Scrum está soportado en un proceso de construcción iterativo e incremental evolutivo, en el que se identifican tres roles principales: el equipo de trabajo (#[em team]) conformado por los desarrolladores, diseñadores, personal de calidad y de infraestructura requerido para la construcción del producto de #[em software]; el scrum master que realizan funciones parecidas a las de un director de proyecto, pero más enfocados en garantizar que el equipo de trabajo tenga todas las herramientas y recursos necesarios para el desarrollo de su trabajo; y, finalmente, el dueño del producto (#[em product owner]) que se convierte en un representante del cliente y quien es el único encargado de la gestión de requisitos del proyecto (#[em ScrumStudy], 2021). En el siguiente video se explica un poco más sobre el Scrum y la especificación de los requisitos.

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DSO1YzSAx4s" title="Scrum y la especificación de requisitos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-3(style="background-color:;") Video: Scrum y la especificación de requisitos
    
      
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure.m-auto.col-5.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/19.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#E8EEFE;border-radius:12px;")
          p #[strong(style="color:#8722E2;") Scrum] establece el concepto de #[strong(style="color:#8722E2;font-style:italic;") sprint] para referirse a una iteración que contempla tiempos fijos entre 2 y 4 semanas dependiendo del equipo de trabajo, durante este tiempo se incluye la planeación del #[strong(style="color:#8722E2;font-style:italic;") sprint], donde se definen los requerimientos a desarrollar en ese periodo de tiempo, una fase de construcción del producto y, finalmente, un proceso de despliegue para poder hacer la respectiva demostración de lo construido al final de iteración en reuniones de revisión; en este marco de trabajo se redefine el concepto de requerimiento hecho y normalmente va mucho más allá de construir el código, por lo general, se incluyen procesos de validación con pruebas unitarias y pruebas de integración.
          p.mt-4 El artefacto mediante el cual se condensan todos los requerimientos del sistema se denomina #[strong(style="color:#8722E2;") pila de producto (#[em product backlog])], la cual es una lista ordenada por prioridad de todos los requerimientos del sistema generalmente descritos en la forma de #[strong(style="color:#8722E2;") historias de usuario].
        p.mt-4 Todas las historias de usuario se priorizan utilizando números enteros consecutivos de 1 hasta N, donde 1 representa la máxima prioridad. Esta priorización la realiza únicamente el dueño del producto y, para eso, utiliza la información que tiene sobre el negocio y recomendaciones de expertos buscando el mayor retorno de inversión a sus clientes. La priorización de las historias de usuario en la pila de producto puede variar en el transcurso del tiempo, pero solo la podrá realizar el dueño del producto.
    
    .cont_2_3.pb-5.mt-5
      .p-4(style="background-color:#DEBEFB;border-radius:12px;" data-aos="zoom-in")
        p.mb-0 Scrum, siendo un marco de trabajo ágil, no requiere para su funcionamiento que todas las historias de usuario de la pila de producto estén detalladas, pero sí, por lo menos, las de mayor prioridad para poder iniciar el trabajo con el equipo en sus respectivos #[em sprints] (ScrumStudy, 2021).
      p.fw-bold.mt-5(data-aos="fade-right") Al inicio de cada #[em sprint] se realiza el proceso de planeación que involucra principalmente tres tareas:
      .col-xl-8.m-auto.mt-5.col-lg-10
        .row.pt-4.pb-4(style="border-top:1px #273A89 solid;border-bottom:1px #273A89 solid;" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure 
              img(src="@/assets/curso/tema2/21.svg")
          .col(style="place-self:center;")
            p.mb-0 Estimar el valor de esfuerzo requerido para un conjunto de historias de usuario de la pila de producto, trabajo que es realizado únicamente por el equipo de desarrollo.
        .row.pt-4.pb-4(style="" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/22.svg")
          .col(style="place-self:center;")
            p.mb-0 Selección de las historias de usuario a desarrollar durante al #[em sprint] tomando como referencia la prioridad y el valor del esfuerzo asociado a cada historia. Esto genera un artefacto llamado pila del #[em sprint] (#[em sprint backlog]) que lista los requerimientos descritos como historias de usuario a ser realizadas y evaluadas en el #[em sprint].
        .row.pt-4.pb-4(style="border-top:1px #273A89 solid;border-bottom:1px #273A89 solid;" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/23.svg")
          .col(style="place-self:center;")
            p.mb-0 Descomposición de cada historia de usuario en tareas y, de ser necesario, asignar responsables a cada tarea.
    
      p.mt-5(data-aos="fade-right") A continuación, se expone una figura en la que se representan los artefactos generados dentro del marco de trabajo Scrum y que permiten la gestión de los requisitos y el evento desde el cual se construye inicialmente.

      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 Figura 16.
        span Pila de producto vs. pila del #[em Sprint]
      .col-xl-10.m-auto.mt-4(data-aos="zoom-in-up")
        .bg-white.p-3.p-lg-5
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema2/24.svg" alt="Pila de producto vs. pila del Sprint")
    
    .row.justify-content-start.mb-4.pt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Kanban y la especificación de requisitos
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p.mb-0 Kanban es una metodología para gestionar el trabajo que surge del sistema de producción Toyota Production System (TPS) a finales de la década de 1940, el cual representaba un sistema de producción basado en la demanda de los clientes y no en la producción masiva, lo anterior sentó los fundamentos para los sistemas de producción ajustada que consisten en minimizar los desperdicios sin afectar la producción y en crear más valor a los clientes sin generar más gastos.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/25.png")
      .col-lg(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#E1F6EF;border-radius:12px;")
          p.mb-0 A principios del siglo XXI, la industria del #[em software] adoptó el Kanban para cambiar la forma en la que se producían y entregaban productos y servicios; además, tiene en cuenta los principios de las metodologías ágiles, en especial de Scrum, pero busca darle más protagonismo al proceso de experimentación y mejora continua (Rivadeneira, 2014).
    
    p.mt-4.fw-bold(data-aos="fade-right") Kanban en la industria del #[em software] se basa en cuatro principios fundamentales:

    .cont_2_2
      .row.mt-4
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.bg5.brad.text-white
            .text-center 
              figure
                img(src="@/assets/curso/tema2/26.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Calidad garantizada, todo lo que se produce debe salir bien sin márgenes de errores, prima la calidad sobre la rapidez.
        
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.bg5.brad.text-white
            .text-center 
              figure
                img(src="@/assets/curso/tema2/27.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Reducción del desperdicio: hacer solamente lo justo y necesario, pero hacerlo bien.
        
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.bg5.brad.text-white
            .text-center 
              figure
                img(src="@/assets/curso/tema2/28.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Mejora continua.

        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.bg5.brad.text-white
            .text-center 
              figure
                img(src="@/assets/curso/tema2/29.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Flexibilidad: se pueden priorizar tareas entrantes según las necesidades del momento.
      p.mt-5.fw-bold(data-aos="fade-right") Además de los principios, Kanban propone seis (6) prácticas:

      .row.mt-5
        .col-lg-1
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 1
              div Visualizar el flujo de trabajo.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 2
              div Eliminar interrupciones.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 3
              div Gestionar el flujo.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 4
              div Hacer políticas explícitas que fomenten la visibilidad.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 5
              div Circuitos de realimentación.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span 6
              div Mejorar colaborando. 
        .col-lg-6(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/30.svg")
    
    p.mt-5(data-aos="fade-right") Tal vez la herramienta más conocida que permite implementar los principios de Kanban es el #[strong(style="color:#8722E2;") tablero Kanban], el cual permite mapear y visualizar el flujo de trabajo. Este se divide en columnas a través de las cuales se pueden visualizar cada una de las fases del proceso; las filas del tablero representan los diferentes tipos de actividades específicas que se desarrollan en el marco del proyecto.

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/31.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#D6E1FD;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/32.svg")
            .col(style="place-self:center;")
              p.mb-0 Normalmente, el tablero tiene #[strong(style="color:#8722E2;") tres secciones] que representan el estado de cada una de las tareas: #[strong(style="color:#8722E2;") por hacer, en proceso, hecho.]
        p.mt-4 Cada equipo de trabajo puede realizar un mapeo más detallado de su proceso y agregar tanta sección como considere pertinente, como se muestra en la siguiente figura.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Figura 17. 
      span Tablero Kanban
    .bgfig5.p-5(data-aos="zoom-in") 
      img.img-a.img-t(src="@/assets/curso/tema2/34.svg" alt="Tablero Kanban")
    
    p.mt-5(data-aos="fade-right") Dependiendo del marco de trabajo, varía la forma en la que se describen cada una de las tareas del tablero Kanban, por ejemplo, dentro de un marco de trabajo como Scrum cada una de las tareas se podría describir en el formato de historias de usuario.                

</template>

<script>
export default {
  name: 'Tema4',
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
