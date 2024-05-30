<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Ingeniería de requisitos

    p(data-aos="fade-down").mb-4 Las siguientes son definiciones de ingeniería de requisitos de algunos autores.    
    .row.justify-content-center.mb-4           
      .col-lg-4.my-3(data-aos="fade-left")
        .bloque-texto-b.bg11.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos es la disciplina para desarrollar una especificación completa, consistente y no ambigua, la cual servirá como base para acuerdos comunes entre todas las partes involucradas y en dónde se describen las funciones que realizará el sistema. 
            h4.text-end.t3 (Boehm, 1979).
            i.fas.fa-quote-right      
      .col-lg-4.my-3(data-aos="fade-down")
        .bloque-texto-b.bg11.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos es el proceso de estudiar las necesidades del usuario para llegar a una definición de requisitos de sistema, #[em hardware] o #[em software]. 
            h4.text-end.t3 (IEEE, 1990).
            i.fas.fa-quote-right       
      .col-lg-4.my-3(data-aos="fade-right")
        .bloque-texto-b.bg11.brad.p-4.h-100
          .bloque-texto-b__texto    
            i.fas.fa-quote-left
            p.text-white La ingeniería de requisitos puede considerarse como un proceso de descubrimiento y comunicación de las necesidades de clientes y usuarios y la gestión de los cambios de dichas necesidades. 
            h4.text-end.t3 (Amador, 2000).
            i.fas.fa-quote-right       

    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')  

      .col-lg-8.my-3
        p(data-aos="fade-down") El término IR “ingeniería de requisitos” ha surgido para englobar los procesos de desarrollo y gestión de requisitos en el ciclo de vida del #[i software], el primer término (ingeniería), se enfoca en las actividades de obtención, análisis, especificación y validación de los requisitos que permitirá alcanzar los objetivos del negocio y el segundo (requisitos), está centrado en la administración de los mismos y tiene como propósito central, la gestión de los cambios y la trazabilidad, de esta forma la IR proporciona el mecanismo apropiado para:

        ul.lista-ul.fa-ul.mb-0.ps-3
          li 
            i.fas.fa-code.color1
            | Entender lo que el cliente quiere.
          li 
            i.fas.fa-code.color1
            | Analizar las necesidades.
          li 
            i.fas.fa-code.color1
            | Evaluar la factibilidad.
          li 
            i.fas.fa-code.color1
            | Negociar una solución razonable.
          li 
            i.fas.fa-code.color1
            | Especificar la solución sin ambigüedades.
          li 
            i.fas.fa-code.color1
            | Validar la especificación.
          li 
            i.fas.fa-code.color1
            | Administrar los requisitos conforme éstos se transforman en un sistema operacional.         

    .row.justify-content-center.mb-4.mv
      .col-lg-7.my-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg4")
          div(titulo="Etapas de la ingeniería de requisitos")
            p Existen cuatro (4) etapas en un proceso usual de ingeniería de requisitos y que son utilizadas para el desarrollo de un producto único: elicitación, análisis, especificación y validación de los requisitos. 
          div(titulo="Elicitación")
            p Actividad involucrada en el descubrimiento de los requisitos del sistema. Aquí los analistas deben trabajar junto con el cliente para descubrir el problema que el sistema debe resolver, los diferentes servicios que el sistema debe prestar y las restricciones que se pueden presentar. 

            p Los principales objetivos que se deben alcanzar son los siguientes:
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-code.color1
                | Conocer el dominio del problema, de forma tal que los analistas puedan entenderse con los clientes y usuarios y sean capaces de transmitir dicho conocimiento al resto del equipo.
              li 
                i.fas.fa-code.color1
                | Descubrir necesidades reales entre clientes y usuarios, haciendo énfasis en aquellas que la mayor parte de las veces se asumen y toman por implícitas.
              li 
                i.fas.fa-code.color1
                | Consensuar los requisitos entre los propios clientes y usuarios hasta obtener una visión común de los mismos.           
          div(titulo="Análisis")
            p Sobre la base de la obtención realizada previamente, comienza esta fase, la cual tiene como propósito, descubrir problemas con los requisitos del sistema identificados hasta el momento, para ello se basa en los siguientes objetivos: 
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-code.color1
                | Detectar conflicto en los requisitos que suelen provenir de distintas fuentes y presentar contradicciones o ambigüedades debido a su naturaleza informal.
              li 
                i.fas.fa-code.color1
                | Profundizar en el conocimiento del dominio del problema puede facilitar el proceso de construir un producto útil para clientes y usuarios (Durán, 2000). 
            p En esta fase, el analista proporciona un sistema de retroalimentación que refina el entendimiento conseguido en la etapa de obtención. 
              
      .col-lg-5.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')  

    .row.justify-content-center.mb-4
      .col-lg-5.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')      
      .col-lg-7.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg4")
          div(titulo="Especificación")
            p Aquí se documentan los requisitos acordados con el cliente, en un nivel apropiado de detalle. En la práctica, esta etapa se realiza conjuntamente con el análisis, por lo que se puede decir que la especificación es el “pasar en limpio” el análisis realizado previamente aplicando técnicas y/o estándares de documentación, como la notación UML (Lenguaje de Modelado Unificado), que es un estándar para el modelado orientado a objetos, por lo que los casos de uso y la obtención de requisitos basada en los casos de uso se utilizan cada vez más para la obtención de requisitos. 
          div(titulo="Validación")
            p Por último, la validación garantiza que los requisitos, una vez analizados y resueltos los posibles conflictos, correspondan realmente a las necesidades de clientes y usuarios, para evitar que, a pesar de que el producto final sea técnicamente correcto, no sea satisfactorio. La validación puede llevar al analista a reescribir algunas especificaciones de requisitos y, en otros casos, a obtener nuevos, producto de la aparición de necesidades que hasta entonces estaban ocultas, para volver a evaluar el análisis inicial, o para corregir y perfeccionar el conjunto de requisitos documentados. 

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Ciclo de vida del #[i software]  

    p(data-aos="fade-down").mb-5 También conocido como SDLC o #[i Systems Development Life Cycle], es el proceso que se sigue para construir y hacer evolucionar un determinado #[i software]. El ciclo de vida permite iniciar una serie de fases mediante las cuales se procede a la validación y al desarrollo del #[i software] garantizando que se cumplan los requisitos para la aplicación y verificación de los procedimientos de desarrollo; para ello, se utilizan métodos del ciclo del #[i software], que indican distintos pasos a seguir para el desarrollo de un producto.       

    .cont_1_1.p-4.p-lg-5
      .cont_1_2
        .row
          .col-lg-4.col-xl-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-md-5.col-lg-12.col-8
              img.img-t(src="@/assets/curso/temas/46.png" style="z-index:1;")
          .col-lg-8.col-xl-8(data-aos="fade-left" style="place-self:center;")
            .p-4.p-lg-0
              .mb-0.mt-0.mt-lg-5
                p(data-aos="fade-down") Si bien existen diferentes ciclos de desarrollo de #[i software], la normativa ISO/IEC/IEEE 12207:2017 establece que: 
                h5(data-aos="fade-down").color3.px-4 Es un marco común para los procesos del ciclo de vida de los programas informáticos, con una terminología bien definida, a la que pueda remitirse la industria del #[i software]. Contiene procesos, actividades y tareas aplicables durante la adquisición, el suministro, el desarrollo, el funcionamiento, el mantenimiento o la eliminación de sistemas, productos y servicios informáticos. Estos procesos del ciclo de vida se llevan a cabo mediante la participación de los interesados, con el objetivo final de lograr la satisfacción del cliente (s.p.).               

    p(data-aos="fade-down").my-5 A continuación, se indican cuáles son los elementos que integran un ciclo de vida:

    .row.justify-content-center.mb-4 
      .col-lg-5.my-3(data-aos="fade-left")
        .bg14.brad.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')

          h4(data-aos="fade-down") #[mark.px-2.bgf Fases]           
          p(data-aos="fade-down") Una fase es un conjunto de actividades relacionadas con un objetivo en el desarrollo del proyecto. Se construye agrupando tareas (actividades elementales) que pueden compartir un tramo determinado del tiempo de vida de un proyecto. La agrupación temporal de tareas impone requisitos temporales correspondientes a la asignación de recursos (humanos, financieros o materiales).                       
      .col-lg-5.my-3(data-aos="fade-right")
        .bg14.brad.h-100.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')

          h4(data-aos="fade-down") #[mark.px-2.bgf Entregables]           
          p(data-aos="fade-down") Son los productos intermedios que generan las fases. Pueden ser materiales o inmateriales (documentos, #[i software]). Los entregables permiten evaluar la marcha del proyecto mediante comprobaciones de su adecuación o no a los requisitos funcionales y de condiciones de realización previamente establecidos.     


    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Fases                     
      
    p(data-aos="fade-down").mb-5 Las fases del modelo de ciclo del #[i software] son: planificación, análisis, diseño, implementación, pruebas y mantenimiento, las cuales se describen a continuación.    

    .row.bg10.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center.my-4           
          .col-lg-12
            .tarjeta.tarjeta--gris1.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t1.mb-4 FASE PLANIFICACIÓN: 
                      p En esta primera fase se realiza el planteamiento del problema, se definen alcances y objetivos del #[i software].

                      p #[b Objetivos:] estudio de viabilidad, realizar planificación detallada.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/49.png') 
     
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t1.mb-4 FASE ANÁLISIS (definición de requisitos): 
                      p Esta fase busca definir los requisitos que son los que dirigirán el desarrollo del proyecto de #[i software]. 

                      p #[b Objetivos:] conocer los requisitos, asegurar que los requisitos son alcanzables, formalizar acuerdo con el cliente.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/50.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t1.mb-4 FASE DISEÑO:  
                      p En esta fase se estudian posibles opciones de implementación para el #[i software] que hay que construir, estructura general del mismo.

                      p #[b Objetivos:] identificar soluciones tecnológicas, asignar recursos materiales, proponer, identificar y seleccionar, establecer métodos de validación, ajustar especificaciones.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/51.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t1.mb-4 FASE PRUEBAS: 
                      p Esta fase busca detectar fallos cometidos en las etapas anteriores para corregirlos.

                      p #[b Objetivos:] realizar los ajustes necesarios para corregir posibles errores o inconsistencias.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/52.png') 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-6.col-md-auto
                    .t2                     
                      h4.t1.mb-4 FASE MANTENIMIENTO:  
                      p En esta fase se realizan tres puntos referenciados: mantenimiento correctivo, mantenimiento adaptativo y mantenimiento perfectivo.

                      p #[b Objetivos:] operación, asegurar que el uso del proyecto es el que se pretendía, mantenimiento.                  
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/53.png') 
                                                                         
    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Paradigmas de los modelos de ciclo de vida del #[i software]
                       
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3.order-1
        p(data-aos="fade-down") Con la finalidad de proporcionar una metodología común entre el cliente y la empresa de #[i software], se utilizan los modelos de ciclos de vida o paradigmas de desarrollo de #[i software] para plasmar las etapas y la documentación necesaria, de manera que cada fase se valide antes de continuar con la siguiente.  
        .row.justify-content-center.align-items-center.bg14          
          .col-md-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Un modelo de ciclo de vida de #[i software] es una vista de las actividades que ocurren durante el desarrollo de #[i software] e intenta determinar el orden de las etapas involucradas y los criterios de transición asociados entre estas.  
      .col-lg-5.my-3.order-lg-2 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='')   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')      
      .col-lg-9.my-3
        p(data-aos="fade-down") Según la norma 1074 IEEE se define al ciclo de vida del #[i software] como “una aproximación lógica a la adquisición, el suministro, el desarrollo, la explotación y el mantenimiento del #[i software]”.
        
        p(data-aos="fade-down") La ISO/IEC 12207 #[em Information Technology / Software Life Cycle Processes] señala que es: 

        .bg15.p-4(data-aos="flip-down")
          p.mb-0(data-aos="fade-down") Un marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotación y el mantenimiento de un producto de #[em software], abarcando la vida del sistema desde la definición de los requisitos hasta la finalización de su uso (2008).


    p(data-aos="fade-down").mb-4 Existen modelos preestablecidos con los cuales se puede elaborar un proyecto; a continuación, se mencionan los diferentes paradigmas de modelos de ciclo de vida para desarrollar #[i software].

    .row.justify-content-center.mb-4
      .col-lg-5.my-3
        .bg16.p-3.h-100.brad(data-aos="fade-left")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.bg11.text-white Paradigma tradicional]
          p(data-aos="fade-down") Los paradigmas tradicionales se identifican, fundamentalmente, por ser lineales, es decir, se trata de completar cada proceso de principio a fin, hasta que quede listo para avanzar a la segunda fase del ciclo del #[i software].

          p(data-aos="fade-down") Si bien es verdad que las metodologías actuales están basadas en lo que fueron los paradigmas tradicionales, hoy en día se ha evolucionado, sin embargo, los paradigmas tradicionales se mantienen. 

          h5(data-aos="fade-down") Desventaja:

          p(data-aos="fade-down") Pérdida de tiempo si se encuentran errores en una fase avanzada, porque al devolverse, se debe pasar nuevamente por todas las fases y reestructurar, de acuerdo con las modificaciones.
                     
      .col-lg-7.my-3
        .bg17.p-3.mb-4.brad(data-aos="fade-down")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.bg11.text-white Paradigma orientado a objetos]
          p(data-aos="fade-down") Las etapas de desarrollo de #[i software] en el paradigma orientado a objetos, se conforma principalmente por la creación de clases, análisis de requisitos y el diseño. Con este paradigma se pretende que el código fuente sea reutilizable para otros proyectos.                     
        .bg18.p-3.brad(data-aos="fade-right")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')        
          h4(data-aos="fade-down") #[mark.px-2.bg11.text-white Paradigma de desarrollo ágil]
          p(data-aos="fade-down") El objetivo de este paradigma es el desarrollo de proyectos en poco tiempo, se simplifican procesos tediosos, se agilizan las fases del desarrollo y las interacciones se hacen en corto tiempo.

          p(data-aos="fade-down") Una de las principales diferencias con los paradigmas anteriores, es que el cliente se ve involucrado en el proyecto durante el desarrollo de este, así, el cliente sugiere mejoras, propone ideas y se mantiene al tanto del desarrollo del producto, a diferencia del paradigma tradicional y el orientado objeto, donde el cliente únicamente está al principio.                     


    p(data-aos="fade-down").mb-5 A continuación, se revisan los modelos del paradigma tradicional más utilizados.

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Modelo en cascada" :icono="require('@/assets/curso/temas/60.png')")
        .row.justify-content-center.px-4
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.bg11.text-white Modelo en cascada]
            p Uno de los primeros modelos de ciclo de vida del desarrollo fue establecido por W. Royce en 1970 y es conocido como el “modelo de cascada” (#[i waterfall model]). 

            p En su concepción básica, cada una de las actividades genera, como salidas, productos y modelos que son utilizados como entradas para el proceso subsiguiente; esto supone que una actividad debe terminarse (por lo menos, en algún grado) para empezar la siguiente.        
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              span Modelo de cascada del ciclo de vida del desarrollo         
            img.img-a.img-t(src='@/assets/curso/temas/63.svg', alt='Imagen que presenta el modelo de cascada del ciclo de vida del desarrollo.')      

      .py-4.py-md-5(titulo="Modelo espiral" :icono="require('@/assets/curso/temas/61.png')")
        .row.justify-content-center.px-4
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.bg11.text-white Modelo espiral]
            p Fue diseñado por Boehm en el año 1988 y se basa en una serie de ciclos repetitivos para ir ganando madurez en el producto final. El espiral se repite las veces que sea necesario hasta que el cliente o el usuario obtenga la satisfacción de sus necesidades.

            p En este modelo hay 4 actividades que envuelven a las etapas: planificación, análisis de riesgo, implementación y evaluación. Una de sus principales ventajas es que los riesgos van disminuyendo conforme avanzan los ciclos o interacciones.        
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              span Modelo espiral del ciclo de vida del desarrollo       
            img.img-mov(src='@/assets/curso/temas/64.svg', alt='Imagen que presenta el modelo espiral del ciclo de vida del desarrollo.')
            figcaption Nota. Adaptada de Boehm (2018).   

      .py-4.py-md-5(titulo="Modelo iterativo o por prototipos" :icono="require('@/assets/curso/temas/62.png')")
        .row.justify-content-center.px-4
          .col-lg-6.mb-4.mb-md-0
            h4 #[mark.px-2.bg11.text-white Modelo iterativo o por prototipos]
            p Este modelo consiste en un procedimiento que permite al equipo de desarrollo, diseñar y analizar una aplicación que represente el sistema que será implementado (McCracken y Jackson, 1982).

            h5 Objetivos 

            ul.lista-ul--color.fa-ul.ps-2.mb-0
              li 
                i.lista-ul__vineta.color1
                | Son un medio eficaz para aclarar los requisitos de los usuarios e identificar las características de un sistema que deben cambiarse o añadirse. 
              li 
                i.lista-ul__vineta.color1
                | Mediante el prototipo se puede verificar la viabilidad del diseño de un sistema.     

            p Las etapas del modelo son:

            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta.t5
                  span 1
                | Colecta y refinamiento de los requerimientos y proyecto rápido.
              ul.lista-ul--color.fa-ul.mb-0.ps-4
                li 
                  i.lista-ul__vineta.color1
                  | Análisis.
                li 
                  i.lista-ul__vineta.color1
                  | Especificación del prototipo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 2
                | Diseño rápido.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 3
                | Construcción del prototipo.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 4
                | Evaluación del prototipo por el cliente.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 5
                | Refinamiento del prototipo.
              ul.lista-ul--color.fa-ul.mb-0.ps-4
                li 
                  i.lista-ul__vineta.color1
                  | Diseño técnico.
                li 
                  i.lista-ul__vineta.color1
                  span Programación y #[em test.]
                li 
                  i.lista-ul__vineta.color1
                  | Operación y mantenimiento.
              li 
                .lista-ol--cuadro__vineta.t5
                  span 6
                | Producto de ingeniería.
                              
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              span Modelo iterativo o por prototipos         
            img.img-mov.brad(src='@/assets/curso/temas/65.svg', alt='Imagen que presenta las etapas del modelo iterativo o por prototipos.') 

    p(data-aos="fade-down").mb-5 Con respecto a los modelos del ciclo de vida del paradigma ágil, estos se caracterizan por estar basados en etapas del ciclo de vida del #[i software] tradicional, pero combinándolas con algunas técnicas, al respecto se pueden revisar los siguientes: 

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Modelo Scrum


    p(data-aos="fade-down") Este modelo se basa en el desarrollo incremental, es decir, conforme pasen las fases y la iteración, mayor será el tamaño del proyecto que se está desarrollando.

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/curso/temas/66.png', alt='')      

      .col-lg-7.my-3
        p(data-aos="fade-down") Los procesos que utiliza son: 
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta.t5
              span 1
            span.fst-italic  Product Backlog.
          li 
            .lista-ol--cuadro__vineta.t5
              span 2
            span.fst-italic  Sprint Backlog.
          li 
            .lista-ol--cuadro__vineta.t5
              span 3
            span.fst-italic  Sprint Planning Meeting.
          li 
            .lista-ol--cuadro__vineta.t5
              span 4
            span.fst-italic  Daily Scrum.
          li 
            .lista-ol--cuadro__vineta.t5
              span 5
            span.fst-italic  Sprint Review.
          li 
            .lista-ol--cuadro__vineta.t5
              span 6
            span.fst-italic  Sprint Retrospective.

        p(data-aos="fade-down") El Scrum consiste en realizar un análisis de los requerimientos del sistema (#[em Product Backlog]), señalar cuáles serán los objetivos a corto o mediano plazo dentro de un #[em sprint], o sea, la fase de desarrollo. Posteriormente, los desarrolladores harán lo suyo, se realizarán algunas pruebas y se retroalimentará de acuerdo con lo conseguido al terminar la última fase.

    .row.justify-content-center.mb-5          
      .col-lg-4.my-3
        .bg11.brad.p-4.h-100(data-aos="fade-left")
        
          h5.text-white Ventajas
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-code.color2
              span.text-white #[b Gestión regular de las expectativas del usuario:] los usuarios participan y proponen soluciones.
            li 
              i.fas.fa-code.color2
              span.text-white #[b Resultados anticipados:] no es necesario esperar hasta el final para ver resultados.
            li 
              i.fas.fa-code.color2
              span.text-white #[b Flexibilidad y adaptación:] se adapta a cualquier contexto, área o sector.
            li 
              i.fas.fa-code.color2
              span.text-white #[b Gestión sistemática de riesgos:] los problemas son gestionados en el mismo momento de su aparición.               
      .col-lg-8.my-3
        .titulo-sexto.color-acento-contenido
          span #[b Figura 6.] Modelo ágil Scrum
        img.img-mov(src='@/assets/curso/temas/67.svg', alt='Imagen que presenta el modeo ágil Scrum.')



    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Modelo Kanban
    .row.justify-content-center.bg19.p-4.brad.mb-5(data-aos="fade-down")
      .col-lg-5       
        p(data-aos="fade-down") David J. Anderson (reconocido como el líder de pensamiento de la adopción del Lean/Kanban para el trabajo de conocimiento), formuló el método Kanban como una aproximación al proceso evolutivo e incremental y al cambio de sistemas para las organizaciones de trabajo. El método está enfocado en llevar a cabo las tareas pendientes y los principios más importantes pueden ser divididos en cuatro principios básicos y seis prácticas.

        p(data-aos="fade-down") El modelo Kanban es uno de los modelos más visuales de las metodologías ágiles; este consiste en la creación de un tablero con etiquetas, donde se seccionan cada una de las fases de su desarrollo, además se clasifican de acuerdo con los equipos de trabajo y se les asignan objetivos a corto, mediano y largo plazo.

        p(data-aos="fade-down") Mediante la metodología japonesa Kanban se:
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta.t5
              span 1
            | Define el flujo de trabajo.
          li 
            .lista-ol--cuadro__vineta.t5
              span 2
            | Establecen las fases del ciclo de producción.
          li 
            .lista-ol--cuadro__vineta.t5
              span 3
            span.fst-italic Stop Starting, start finishing.
          li 
            .lista-ol--cuadro__vineta.t5
              span 4
            | Tiene un control.                
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          span #[b Figura 7.] Modelo ágil Kanban     
        img.img-mov(src='@/assets/curso/temas/68.svg', alt='Imagen que presenta el modelo ágil Kanban')
        figcaption Nota. Adaptada de Anderson.    


    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Modelo XP o programación extrema

    .row.justify-content-center.bg19.p-4.brad(data-aos="fade-left")
      .col-lg-5
        p(data-aos="fade-down") La programación extrema o #[em eXtreme Programming] (XP) es un enfoque de la ingeniería de #[em software], formulado por Kent Beck, autor del primer libro sobre este tema: #[em Extreme Programming Explained: Embrace Change] (1999). Esta metodología es adaptable según las necesidades y requerimientos a implementar, además, el cliente se encuentra involucrado en el proceso de desarrollo, lo que hace que el producto pueda ser terminado en un menor tiempo.       
        p(data-aos="fade-down") Características principales de la programación extrema:

        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta.t5
              span 1
            | Tipo de desarrollo iterativo e incremental.
          li 
            .lista-ol--cuadro__vineta.t5
              span 2
            | Pruebas unitarias.
          li 
            .lista-ol--cuadro__vineta.t5
              span 3
            | Trabajo en equipo.
          li 
            .lista-ol--cuadro__vineta.t5
              span 4
            | Trabajo junto al cliente.
          li 
            .lista-ol--cuadro__vineta.t5
              span 5
            | Corrección de errores.
          li 
            .lista-ol--cuadro__vineta.t5
              span 6
            | Reestructuración del código.
          li 
            .lista-ol--cuadro__vineta.t5
              span 7
            | El código es de todos.
          li 
            .lista-ol--cuadro__vineta.t5
              span 8
            | El código simple es la clave.                                         
      .col-lg-7
        .titulo-sexto.color-acento-contenido 
          span #[b Figura 8.] Modelo XP     
        img.img-mov(src='@/assets/curso/temas/69.svg', alt='Imagen que presenta el modelo XP.')
        figcaption Nota. Adaptada de Muradas (2020).                   

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Fase de definición de requisitos  

    .row.justify-content-center  
      .col-lg-8.my-3
        p(data-aos="fade-down") En esta primera fase del ciclo de vida del #[i software], #[b.t1 también llamada fase de análisis], se recopila, se examina y se formulan los requisitos del cliente, así como la verificación de las posibles restricciones que se puedan aplicar.

        .bg20.p-4.brad(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Por eso, la etapa de análisis en el ciclo de vida del #[i software] corresponde al proceso a través del cual se intenta descubrir qué es lo que realmente se necesita y se llega a una comprensión adecuada de los requerimientos del sistema (las características que el sistema debe poseer).        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/73.png', alt='')


    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.png', alt='')      

      .col-lg-7.my-3
        p(data-aos="fade-down") La etapa de análisis es esencial, debido a que sin esta no se sabe con precisión qué es lo que se necesita y ningún proceso de desarrollo permitirá obtenerlo. El problema que comúnmente se presenta al inicio de la etapa de desarrollo, es que el cliente no sepa exactamente que necesita, por tanto, se debe averiguar con ayuda de diferentes técnicas.    
        .row.justify-content-center.align-items-center.bg21.brad           
          .col-md-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Por otra parte, la inestabilidad de los requerimientos de un sistema es inevitable, porque se estima que el 25 % de los requerimientos iniciales de un sistema, cambian antes que el sistema comience a utilizarse. Por ello, muchas prácticas resultan efectivas para gestionar adecuadamente los requerimientos de un sistema y, en cierto modo, controlar su evolución.         

    p(data-aos="fade-down").mb-5 En la siguiente tabla, se describen las actividades y los artefactos que se realizan en la fase de definición de requisitos.

    .row.justify-content-center
      .col-lg-12(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          span #[b Tabla 2.]  Actividades y artefactos de la fase de definición de requisitos
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            thead.bgh    
              tr
                th Fase
                th Actividades
                th Artefactos
            tbody.bgb
              tr
                td(rowspan='5') Análisis (definición de requisitos).
                td Definición del alcance del proyecto.
                td 
              tr
                td Identificación del negocio.
                td Modelo del negocio.
              tr
                td Toma de requerimientos.
                td Análisis y realización de casos de uso.
              tr
                td Estudio de procesos de negocio.
                td Modelo de procesos y actividades de negocio.
              tr
                td Calendarización del proyecto.
                td Cronograma del proyecto.

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Requisitos                  

    .row.justify-content-center.align-items-center           
      .col-md-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')
      .col.my-3
        p(data-aos="fade-down") Un requisito es una #[mark.bg11.text-white “condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado” (IEEE, 1990)]. 

        p(data-aos="fade-down").mb-0 Los requisitos comunican las expectativas de los consumidores de productos #[i software]; de otra parte, los requisitos pueden ser obvios o estar ocultos, conocidos o desconocidos, esperados o inesperados, desde el punto de vista del cliente. 

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Importancia de los requisitos 

    p(data-aos="fade-down").mb-5 Los requisitos cobran importancia dentro del ciclo de vida del #[i software], porque:

    .row.bg22.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-12
            .row.justify-content-center.align-items-center.bg23.pb-0 
              .col-lg-3.p-0.ps-5
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/77.png')     
              .col-lg-9(data-aos="fade-down")
                ul.lista-ul.fa-ul.px-5.py-4.mb-0
                  li 
                    i.fas.fa-code-code
                    | Establecen el alcance del trabajo subsecuente, pueden definir estrategias de desarrollo, riesgos, tomar decisiones de negocio (viabilidad de negocio), de proyecto (tiempo, recursos), de sistema (arquitectura).

                  li 
                    i.fas.fa-code-code
                    | Indican al equipo del proyecto qué requieren los usuarios (necesidades de negocio).

                  li.mb-0 
                    i.fas.fa-code-code
                    | El éxito o fracaso de un proyecto está altamente influenciado por la calidad de los requisitos y el proceso para gestionarlos durante el desarrollo de un producto.  

        p(data-aos="fade-down").mb-5 A continuación, se pueden revisar las características que los requisitos deben cumplir, de acuerdo con Pfleeger (2002).

        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/80.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                     
                      h4.t3.mb-4 Necesario
                      p.text-white Si se tiene alguna duda acerca de la necesidad del requerimiento, se puede preguntar “¿Qué sería lo peor de no incluirlo?” Si no se encuentra una respuesta o cualquier consecuencia, entonces es probable que no sea un requerimiento necesario.


                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/81.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Completo 
                      p.text-white Un requerimiento está completo si no necesita ampliar detalles en su redacción, es decir, si se proporciona la información suficiente para su comprensión.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/82.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Consistente 
                      p.text-white Un requerimiento es consistente si no es contradictorio con otro requerimiento.

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/83.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Correcto 
                      p.text-white Acuerdo entre dos partes. Contiene una sola idea.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/84.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Factible
                      p.text-white El requerimiento deberá de ser totalmente factible y dentro de presupuesto, calendario y otras restricciones, si se tiene alguna duda de su factibilidad, hay que investigar, generar pruebas de concepto para saber su complejidad y factibilidad, si aun así el requerimiento es no factible, hay que revisar la visión del sistema y replantear el requerimiento.  

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/85.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Modificable 
                      p.text-white Los cambios en los requisitos deben hacerse de manera sistemática, y debe tenerse en cuenta su impacto en otros requisitos.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/86.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                  
                      h4.t3.mb-4 Priorizado 
                      p.text-white Categorizar el requerimiento nos ayuda a saber el grado de necesidad del mismo: esencial/crítico, deseado, opcional,verificable.

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/87.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                  
                      h4.t3.mb-4 Verificable
                      p.text-white Si un requerimiento no se puede comprobar, entonces, ¿cómo se sabe si se cumplió con él o no? Debe ser posible verificarlo, ya sea por inspección, análisis de prueba o demostración. Cuando se escriba un requerimiento, se deberán determinar los criterios de aceptación.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/88.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5
                      h4.t3.mb-4 Rastreable 
                      p.text-white La especificación se debe organizar de tal forma que cada función del sistema se pueda rastrear hasta su conjunto de requerimientos correspondiente. Facilita las pruebas y la validación del diseño.   

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-4.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/89.png') 
                  .col-lg-7.col-md-auto
                    .t2.pe-5                 
                      h4.t3.mb-4 Claro 
                      p.text-white Un requerimiento es conciso si es fácil de leer y entender, su redacción debe ser simple y clara para quienes lo consulten en un futuro.                                                              

        .row.justify-content-start.mb-4.mt-5 
          .col-auto(data-aos="flip-down")
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.p-0.px-4.text-white
                h3.mb-0 Clasificación

        .row.justify-content-center.mb-5           
          .col-lg-4
            p(data-aos="fade-down") Los requerimientos se pueden definir de distintas maneras, la primera clasificación se encuentra relacionada con el nivel de descripción con la que cuentan estos y dentro de este tipo de clasificación se encuentran:
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')            
          .col-lg-4(data-aos="fade-right")
            .bg24.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.bgf Requerimientos de usuario]           
              p.text-white(data-aos="fade-down") Son declaraciones, en lenguaje natural y en diagramas, de los servicios que se espera que el sistema proporcione y de las restricciones bajo las cuales debe funcionar.                        
          .col-lg-4(data-aos="fade-right")
            .bg24.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/92.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.bgf Requerimientos de sistema]           
              p.text-white(data-aos="fade-down") Estos requerimientos establecen con detalle las funciones, servicios y restricciones operativas del sistema. El documento de requerimientos del sistema deberá ser preciso, y definir exactamente lo que se va a desarrollar. 

        p(data-aos="fade-down").mb-5 En la siguiente clasificación se observa la que se da a los requerimientos del sistema, la cual se encuentra dividida con base en lo que se va a describir. Las clasificaciones son:  

        .row.justify-content-center.mb-5 
          .col-lg-4(data-aos="fade-left")
            .bg11.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/93.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.bgf Requerimientos funcionales]           
              p.text-white(data-aos="fade-down") Son declaraciones de los servicios que debe proporcionar el sistema, de la manera en que este debe reaccionar a entradas particulares, o también pueden declarar explícitamente lo que el sistema no debe hacer.                        
          .col-lg-4(data-aos="fade-left")
            .bg11.brad.h-100.p-4
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/94.png', alt='')

              h4(data-aos="fade-down") #[mark.px-2.bgf Requerimientos no funcionales]           
              p.text-white(data-aos="fade-down") Son restricciones de los servicios o funciones ofrecidos por el sistema. Incluyen restricciones de tiempo, sobre el proceso de desarrollo y estándares. Dentro de estos requerimientos se encuentra todo lo referente a la fiabilidad, el tiempo de respuesta y la capacidad de almacenamiento.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.png', alt='') 

    p(data-aos="fade-down").mb-5 En la siguiente tabla se presentan algunos ejemplos sobre requisitos funcionales y no funcionales.            
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          span #[b Tabla 3.] Requisitos
        .tabla-a.color-acento-contenido.text-center(data-aos="fade-left") 
          table
            thead.bgh    
              tr
                th Funcionales
                th No funcionales
            tbody.bgt
              tr
                td Se debe ingresar cédula, nombre y teléfono de cada cliente.
                td Las consultas deben resolverse en menos de 3 segundos.
              tr
                td Se requiere un listado de clientes por zona.
                td El lenguaje de programación debe ser Java. 
              tr.bgt1
                td(colspan='2') Se puede ampliar el tema de requisitos funcionales y no funcionales en los videos que se proponen dentro del material complementario.                

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
