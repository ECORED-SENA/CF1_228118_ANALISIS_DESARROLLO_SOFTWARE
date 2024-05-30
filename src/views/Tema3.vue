<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 La fase de elicitación de requisitos 

    p.mb-4(data-aos="fade") El propósito de la elicitación de requerimientos es ganar conocimientos relevantes del problema, que se utilizarán para producir una especificación formal del #[em software] necesario para resolverlo.

    .contenedor-bloque-leyenda.mb-4
      .row.justify-content-center.mx-1
        .col-md-10.mb-4(data-aos="fade-down")
          .text-center.contenedor-leyenda.px-5.pb-4
            figure.mb-4
              img(src='@/assets/curso/temas/97.svg', style="max-width: 80px;margin: auto")
            .texto-leyenda
              i.fas.fa-quote-left.i-izquierda
              h4.mb-0 Un problema puede ser definido como la diferencia entre las cosas como se perciben y las cosas como se desean
              i.fas.fa-quote-right.i-derecha
            p.mt-2.mb-0 - (Gause y Weinberg 1989)
        .col-md-10(data-aos="fade-up")
          p.text-white Aquí se ve la importancia que tiene una buena comunicación entre desarrolladores y clientes; de esta comunicación con el cliente depende que sus necesidades queden claras. Además, al final de la fase de análisis de requerimientos, el analista podría llegar a tener un conocimiento extenso en el dominio del problema.
    p.mb-4(data-aos="fade") La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; su significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información y los objetivos de esta fase de elicitación, son:
    .row.align-items-stretch
      .col-md-7.mb-4.mb-md-0
        .fondo-color-sistema-j.borde-10.h-100.p-4.d-flex.align-items-center
          ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
            li 
              i.fas.fa-code.color1
              | Conocer el dominio del problema para poder comunicarse con clientes y usuarios y entender sus necesidades.
            li 
              i.fas.fa-code.color1
              | Conocer el sistema actual (manual o informatizado) y sus aspectos positivos y negativos.
            li.mb-0
              i.fas.fa-code.color1
              | Identificar las necesidades, tanto explícitas como implícitas, de clientes y usuarios y sus expectativas sobre el sistema a desarrollar.
      .col-md-5(data-aos="fade-left")
        .d-flex.align-items-center.h-100
          figure
            img(src='@/assets/curso/temas/98.png',style="width: auto;max-width: 100%;")

    Separador

    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 3.1 Planeación
    
    p.mb-4(data-aos="fade") La planeación busca definir las tareas a realizar para elegir y planificar las técnicas a emplear durante la actividad de elicitación de la fase de ingeniería de requisitos del desarrollo de #[em software]. En la siguiente tabla se presenta una relación de estas tareas y sus correspondientes procesos.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Tabla 1.] Tareas para elicitación de requisitos 
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down")
          table
            caption.bgb Nota: tomado de Durán y Bernárdez (2001)
            thead.bgh
              tr
                th Tareas
                th Proceso
            tbody.bgb
              tr
                td #[b A.] Identificar las fuentes.
                td Lista de fuentes de requerimientos.
              tr
                td #[b B.] Identificar interesados del producto.
                td Categorías de los interesados (#[em stakeholder]).
              tr
                td #[b C.] Matriz #[em stakeholders] (Describir necesidades y criterios de éxito).
                td Perfil de #[em stakeholder].
              tr
                td #[b D.] Revisar técnicas.
                td Identificar combinaciones de técnicas, entrevistas, grupos focales, encuestas, prototipos.
              tr
                td #[b E.] Captura de interesados.
                td Plan de captura de interesados.

    p.mb-4(data-aos="fade") A continuación, se describen los procesos relacionados con las tareas para elicitación de requisitos:   

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 A. Identificar las fuentes de requerimientos
    
    .row.mb-4
      .col-lg-2.mb-4.mb-lg-0
        img.img-a.img-t(src='@/assets/curso/temas/99.svg')
      .col-lg-10
        p.mb-4(data-aos="fade") Existe un conjunto de fuentes de requisitos en cada proyecto de desarrollo de #[em software], así, usuarios y expertos abastecen de información detallada acerca del problema y necesidades del usuario. Los procesos y sistemas existentes representan, también, fuentes de requisitos; además, la documentación existente como manuales, formularios y reportes, incluso especificaciones de requisitos anteriores, puede proveer información útil acerca de la organización y su entorno.

        p.mb-4(data-aos="fade") En el proceso de esta actividad se identifican:

        .bg18.p-4.borde-10.d-inline-flex
          ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
            li 
              i.fas.fa-code.color1
              | Interesados relevantes.
            li 
              i.fas.fa-code.color1
              | Documentación que se puede usar como fuente de información de los requerimientos.
            li.mb-0
              i.fas.fa-code.color1
              | Fuentes de información externas.


    p.mb-4(data-aos="fade") Las fuentes de requerimientos incluyen los propietarios del problema, los #[em stakeholders], documentos y otros sistemas (Pearson, 2002). En ese sentido, los requerimientos pueden obtenerse en diversas fuentes que pueden clasificarse en gente (#[em people]), productos o documentos, pero cualquiera sea la fuente de esos requerimientos deben ser chequeados con los #[em stakeholders].

    p.mb-4(data-aos="fade") Estas fuentes de requerimientos, se pueden clasificar en:

    .fondo-gradiente-1
      .row.justify-content-center
        .col-md-6.col-lg-4.mb-4(data-aos="fade-right")
          .tarjeta-p-1.p-4
            .d-flex.justify-content-between
              div
                figure
                  img(src='@/assets/curso/temas/100.png')

            .h3.tarjeta-p-1__titulo.p-1 Fuentes primarias
            p.tarjeta-p-1__parrafo Aportan material de primera mano (es protagonista o testigo de los hechos), estas fuentes contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más.
        .col-md-6.col-lg-4.mb-4(data-aos="fade-up")
          .tarjeta-p-1.p-4
            .d-flex.justify-content-between
              div
                figure
                  img(src='@/assets/curso/temas/101.png')

            .h3.tarjeta-p-1__titulo.p-1 Fuentes secundarias
            p.tarjeta-p-1__parrafo Toman y reproducen la información que le aportó una fuente primaria. Son las que contienen información primaria, sintetizada y reorganizada y están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Parten de datos preelaborados, como pueden ser datos obtenidos de anuarios estadísticos, internet, medios de comunicación, bases de datos procesadas con otros fines, artículos y documentos relacionados con un tema, libros, tesis, informes oficiales, etc.
        .col-md-6.col-lg-4.mb-4(data-aos="fade-left")
          .tarjeta-p-1.p-4
            .d-flex.justify-content-between
              div
                figure
                  img(src='@/assets/curso/temas/102.png')

            .h3.tarjeta-p-1__titulo.p-1 Fuentes terciarias
            p.tarjeta-p-1__parrafo Son guías físicas o virtuales que contienen información sobre las fuentes secundarias. Forman parte de la colección de referencia de una biblioteca; facilitan el control y acceso a toda la gama de repertorios de referencia, como las guías de obras de referencia, o a un solo tipo, como las bibliografías.

      p.mb-4(data-aos="fade")  Por otra parte, las fuentes de información, pueden ser orales, escritas o de otro tipo, dependiendo de cómo se transmitan los datos. A continuación, se pueden revisar algunos ejemplos de fuentes de información.

      .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-down")
        p.mb-0 #[b Figura 9.] Fuentes de información

      .bgfig2.p-4.pb-0
        p.text-center.mb-4.mt-2
          b Las fuentes de información o documentación pueden hallarse en diversos soportes.
        .row.justify-content-center
          .col-lg-3.order-1.mb-4(data-aos="fade-right")
            .d-flex.tarjeta-fig.p-3.mb-4
              .pe-3
                span.numero-circular
                  b 1
              p Grabaciones audiovisuales y grabaciones auditivas.

            .d-flex.tarjeta-fig.p-3
              .pe-3
                span.numero-circular
                  b 2
              p Libros, artículos, prensa escrita y básicamente cualquier tipo de soporte que permita capturar y preservar la información, para recuperarla luego.
          
          .col-lg-4.my-4.order-first.order-lg-2(data-aos="fade")
            figure
              img(src='@/assets/curso/temas/103.png')


          .col-lg-3.order-3.mb-4(data-aos="fade-left")
            .d-flex.tarjeta-fig.p-3.mb-4
              .pe-3
                span.numero-circular
                  b 3
              p Los testimonios, los relatos, las reseñas, los ensayos, las páginas web, las reflexiones, los listados bibliográficos y los índices.

            .d-flex.tarjeta-fig.p-3
              .pe-3
                span.numero-circular
                  b 4
              p Las grabaciones profesionales, accidentales o clandestinas, las fotografías, las filmaciones e incluso ilustraciones.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 B. Identificar interesados del producto

    .row.mb-4
      .col-lg-2.mb-4.mb-lg-0
        img.img-a.img-t(src='@/assets/curso/temas/104.svg')
      .col-lg-10
        p.mb-4(data-aos="fade") Uno de los primeros pasos en el proceso es el análisis e identificación de todas las personas relevantes que tienen un grado de interés en el proyecto. #[b.t1 Los interesados (#[em stakeholders]), son los individuos y organizaciones que están relacionados activamente en un proyecto de #[em software]]; tienen influencia directa o indirecta sobre los requisitos, o sus intereses se ven afectados por el proyecto (Baar, 2006, Ventura, 2002).

        p(data-aos="fade") En resumen, son grupos o individuos que están interesados en el producto de #[em software] que se está desarrollando y necesitarán estar informados acerca del progreso, conflictos, cambios y prioridades del proceso de desarrollo del producto.

    p.mb-4(data-aos="fade") Los #[em stakeholders] se dividen en dos grupos:


    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        .bg5.brad.p-4
          .d-flex.justify-content-between.mb-3
            div
              figure
                img(src='@/assets/curso/temas/105.svg')

          .h3.tarjeta-p-1__titulo.p-1 Primarios
          p.tarjeta-p-1__parrafo Son aquellas personas indispensables para el correcto funcionamiento de la organización, y tienen una relación económica directa con la empresa. Estos pueden ser sus socios, clientes y accionistas.

      .col-md-5.mb-4(data-aos="fade-left")
        .bg5.brad.p-4
          .d-flex.justify-content-between.mb-3
            div
              figure
                img(src='@/assets/curso/temas/106.svg')

          .h3.tarjeta-p-1__titulo.p-1 Secundarios
          p.tarjeta-p-1__parrafo Son los entes que no participan directamente de la compañía, pero también son afectados por sus resultados. En este círculo se encuentran los competidores, el mercado y las personas en general.


    p.mb-4(data-aos="fade") A continuación, se listan roles más generales de las personas involucradas con sus términos similares, aunque cabe resaltar que existen leves diferencias entre ellos (Sommerville y Sawyer, 2005):

    .row.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .d-flex.align-items-center.h-100
          figure
            img(src='@/assets/curso/temas/107.png',style="width:auto;margin: auto;max-width:100%;")
      .col-lg-8.mb-4.mb-md-0
        .fondo-color-sistema-j.borde-10.h-100.p-4.d-flex.align-items-center.pe-lg-0
          ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
            li 
              i.fas.fa-code.color1
              | Líder de proyecto / Administrador de proyecto / Gerente de proyecto.
            li 
              i.fas.fa-code.color1
              | Analista / Ingeniero de requisitos.
            li
              i.fas.fa-code.color1
              | Ingeniero de sistemas / Arquitecto.
            li
              i.fas.fa-code.color1
              span Programador / Desarrollador / Ingeniero de #[em software].
            li
              i.fas.fa-code.color1
              | Probador / Asegurador de la calidad.
            li.mb-0
              i.fas.fa-code.color1
              | Administrador de bases de datos.
            

    p.mb-5(data-aos="fade") En la siguiente tabla se presentan los principales roles involucrados en el proceso de ingeniería de requisitos, así como las actividades en las que tienen mayor participación.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Tabla 5.] Roles involucrados en la ingeniería de requisitos
        .tabla-a.color-acento-contenido.mb-4(data-aos="fade-down")
          table
            caption.bgb Nota: tomado de Ventura (2002)
            thead.bgh
              tr
                th(style="width: 260px") Rol
                th Descripción
            tbody.bgb
              tr
                td.text-center #[b Cliente]
                td Representa a la persona u organización que solicita la creación de un sistema a un área de desarrollo y quien lo paga. Es con quien se negocia el tiempo, costo y alcance del proyecto. Pueden o no ser usuarios del sistema.
              tr
                td.text-center #[b Usuario]
                td Son las personas que interactuarán con el sistema. Proporcionan información fundamental para el éxito del proyecto, ya que conocen y conviven con los procesos diarios.
              tr
                td.text-center #[b Líder de proyecto]
                td Por parte del equipo de desarrollo, es el representante ante el cliente. Es la persona responsable de completar el proyecto exitosamente con los recursos dados.
              tr
                td.text-center #[b Analista]
                td Su labor se enfoca en la ingeniería de requisitos, los identifica, analiza, modela y documenta. Además, establece contacto directo con los usuarios y utiliza diversas técnicas de comunicación y de recopilación de información para lograr su objetivo.
              tr
                td.text-center #[b Programador]
                td Con base en los requisitos recibidos de parte de los ingenieros de requisitos, el programador realiza la codificación para producir el sistema deseado.
              tr
                td.text-center #[b Asegurador de la calidad]
                td Garantiza el cumplimiento del proceso y de los estándares del producto. Enfocado en los requisitos, los verifica y valida para imprimir la calidad desde las primeras etapas del desarrollo. Paralelamente, prepara planes de prueba para esos requisitos del sistema.
              tr
                td.text-center #[b Arquitecto]
                td Es el responsable del diseño de alto nivel y es clave a la hora de precisar los atributos de calidad del producto.

    p.mb-4(data-aos="fade") Algunas de las técnicas que se pueden emplear para llevar a cabo la labor de análisis de los #[em stakeholders] incluyen entrevistas con los expertos, lluvia de ideas en grupo y lista de chequeo. Se espera que este grupo de personas identifiquen y caractericen a los #[em stakeholders] objetivamente, por tal motivo es recomendable involucrar a personas de diferentes contextos (Karisen, 2002 citado en Wessinger, 2012).


    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 C. Matriz de #[em stakeholders]

    p.mb-4(data-aos="fade") La utilización de esta #[b.t1 herramienta de análisis permite clasificar a los involucrados en el proyecto según sus niveles de interés y poder sobre él], lo que facilita la priorización de los #[em stakeholders] más importantes para desarrollar las estrategias de gestión correspondientes.

    .row.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-k.borde-12.p-4         
          .h4 Importancia de la matriz de #[em stakeholders] en los proyectos de desarrollo
          p.mb-0 En los proyectos de desarrollo, la gestión de los #[em stakeholders] es de suma importancia para alcanzar el éxito de los proyectos, ya que el proceso de identificación de los involucrados y la definición de sus niveles de interés e influencia en el proyecto, marcarán el punto de partida para desarrollar estrategias que posibilitan obtener el apoyo requerido para alcanzar los objetivos por los que el proyecto es emprendido. Es por ello, que la matriz de #[em stakeholders] es una herramienta indispensable desde el comienzo del proyecto mismo, ya que proveerá de la información necesaria para gestionar, adecuadamente, las expectativas de los involucrados a lo largo del proyecto, maximizando las influencias positivas y mitigando los impactos negativos potenciales derivados de estos. Además, dado el carácter social de los proyectos de desarrollo, involucrar a la sociedad civil no debe ser solo un ejercicio de comunicación unidireccional, sino una oportunidad para lograr su apoyo al proyecto.
      
      .col-lg-4.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/108.png',style="width: auto;margin: auto;max-width: 100%;")

    .fondo-color-sistema-h.borde-12.p-4.mb-4
      .position-relative(style="z-index: 1")
        h4(data-aos="fade") Proceso de armado de la matriz de #[em stakeholders]
        p.mb-0(data-aos="fade") Para desarrollar la matriz de #[em stakeholders] es necesario identificar las entradas necesarias que proveerán la información con la que el líder y el equipo de proyecto trabajarán para desarrollar la matriz misma. Tales entradas pueden ser el acta de constitución de proyecto, documentos de adquisición, activos de los procesos y factores ambientales de la organización.


    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 10.] Entradas, herramientas y técnicas, salidas
    
    .p-4.position-relative.mb-4
      .bgfig3.position-absolute.end-0.start-0.top-0.borde-10.cont-fig-2
        .d-flex.flex-column.h-100.justify-content-between

      .position-relative(style="z-index: 1;")

        .row.justify-content-center
          .col-12.col-lg-10
            .d-flex.flex-column.flex-lg-row.pt-lg-4
              .borde-10.overflow-hidden.bg11_1.w-100(style="min-height: 200px;")
                .p-2.bg11_2.text-center
                  .h3.text-white.mb-0 Entradas
                .p-2.h-100.d-flex
                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li.mb-0 
                      i.fas.fa-code.t2
                      span.text-white Acta de constitución del proyecto.
                    li.mb-0 
                      i.fas.fa-code.t2
                      span.text-white Documentos de adquisición.
                    li.mb-0
                      i.fas.fa-code.t2
                      span.text-white Factores ambientales de la organización.
                    li.mb-0
                      i.fas.fa-code.t2
                      span.text-white Activos de los procesos de la organización.
              figure.my-4.d-lg-none
                img(src='@/assets/curso/temas/img-21.svg',style="width: auto;margin: auto")
              figure.d-none.d-lg-block.mx-3(style="width: auto;min-width: 40px;margin-top: auto;margin-bottom: auto;")
                img(src='@/assets/curso/temas/img-24.svg')

              .borde-10.overflow-hidden.bg11_1.w-100(style="min-height: 200px;")
                .p-2.bg11_2.text-center
                  .h3.text-white.mb-0 Herramientas y técnicas
                .p-2.h-100.d-flex
                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li.mb-0 
                      i.fas.fa-code.t2
                      span.text-white Análisis de los interesados.
                    li.mb-0 
                      i.fas.fa-code.t2
                      span.text-white Juicio de expertos.
              
              figure.my-4.d-lg-none
                img(src='@/assets/curso/temas/img-21.svg',style="width: auto;margin: auto")
                
              figure.d-none.d-lg-block.mx-3(style="width: auto;min-width: 40px;margin-top: auto;margin-bottom: auto;")
                img(src='@/assets/curso/temas/img-24.svg')

              .borde-10.overflow-hidden.bg11_1.w-100(style="min-height: 200px;")
                .p-2.bg11_2.text-center
                  .h3.text-white.mb-0 Salidas
                .p-2.h-100.d-flex
                  ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                    li.mb-0 
                      i.fas.fa-code.t2
                      span.text-white Matriz #[em stakeholders] (registro y estrategias de gestión).

            .d-flex.flex-column.cont_d_4.p-3.flex-lg-row.mt-lg-4(data-aos="fade-up")
              figure.me-lg-4.w-auto(style="min-width: 80px;")
                img(src='@/assets/curso/temas/109.svg',style="width: auto;")
              p.mt-2 Para profundizar en detalle, lo invitamos a consultar la Guía PMBOK 6 – 49 procesos, entradas, herramientas y salidas, que se encuentra en el material complementario.

    h4.t1(data-aos="fade") Descripción de los componentes de la matriz de #[em stakeholders]

    p.mb-4(data-aos="fade") A continuación, se presenta el concepto de cada uno de los componentes que estructuran la matriz de #[em stakeholders].

    AcordionA.mb-4(clase-tarjeta="tarjeta bg4")
      .row.ms-1.ms-lg-5(titulo="<em>Stakeholder</em>")
        .col-12
          p Es el nombre con el que se identifica al #[em stakeholder].
      .row.ms-1.ms-lg-5(titulo="Tipo")
        .col-12
          p Identifica si el #[em stakeholder] desempeña un rol interno o externo al proyecto mismo. Los #[em stakeholders] pueden ser internos, como el personal de las unidades ejecutoras, el personal administrativo o ejecutivo de la organización, el personal de las entidades financiadoras con alto nivel de poder e influencia en el proyecto y sus recursos; o externos como los beneficiarios del proyecto, las instituciones del sector o las organizaciones de la sociedad civil, quienes serán de un modo u otro, impactados por los resultados del proyecto.
      .row.ms-1.ms-lg-5(titulo="Objetivo o resultados")
        .col-12
          p En este campo se enlistan los objetivos o resultados en los que el #[em stakeholder] muestra interés o en aquellos en los que puede influir positiva o negativamente con sus acciones. Esta información puede ser suministrada por el acta de constitución de proyectos, la estructura de la organización, la estructura de desglose de trabajo, los diferentes planes que conforman el proyecto, entrevistas a los mismos interesados, etc.
      .row.ms-1.ms-lg-5(titulo="Acciones posibles con impacto positivo / negativo")
        .col-12
          p Son las acciones que puede emprender el #[em stakeholder] y que pueden influir, negativa o positivamente, en los objetivos del proyecto en los que muestra su interés o en aquellos en los que puede influir debido a su jerarquía, estatus, recursos de los que dispone, entre otros.
      .row.ms-1.ms-lg-5(titulo="Estrategias")
        .col-12
          p Es un listado de acciones que se pueden emprender para obtener el apoyo necesario o evitar obstáculos por parte de los #[em stakeholders] durante la ejecución y conclusión del proyecto. Las estrategias se desarrollan considerando el tipo de #[em stakeholder], los objetivos en los que está interesado, el nivel de interés y poder que puede ejercer en el proyecto y las acciones posibles que podría emprender para afectar tanto positiva como negativamente al proyecto.
      .row.ms-1.ms-lg-5(titulo="Conclusiones")
        .col-12
          p Es la síntesis sobre puntos clave a considerar para gestionar de manera efectiva las expectativas de los #[em stakeholders]. Las conclusiones se obtienen de relacionar, analizar y sintetizar toda la información vertida en la matriz de #[em stakeholders].
      
    .row.bgt31.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            h4.pt-4.t1(data-aos="fade") Categorización de #[em stakeholders] y estrategias de gestión de las expectativas

            .row.align-items-center
              .col-lg-8
                p.mb-4(data-aos="fade") Como ya se había mencionado anteriormente, la matriz de #[em stakeholders] es una herramienta muy útil que permite clasificar a los involucrados en el proyecto según sus niveles de interés e influencia, priorizando a los más importantes y desarrollando así las estrategias correspondientes para gestionar sus expectativas. De la misma manera, su clasificación puede cambiar durante la vida del proyecto. Así, aquellos que fueron inicialmente identificados con un alto nivel de influencia en el proyecto, pueden ser reclasificados a un nivel más bajo durante otras etapas de la vida del proyecto.
                p.mb-4(data-aos="fade") La categorización de los #[em stakeholders] se lleva a cabo una vez que la información sobre éstos esté completa. Para ello se puede utilizar una matriz de 2x2 en la que se pueda graficar el grado de poder e interés que tiene el involucrado en el proyecto, coadyuvando así a clasificar a cada #[em stakeholder] dentro del grupo para el cual se definen diferentes estrategias.
              .col-lg-4.order-first.order-lg-last.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/110.png',style="width: auto;margin: auto;max-width: 100%;")

            .titulo-sexto.color-acento-contenido(data-aos="fade-down")
              p.mb-0 #[b Figura 11.] Ejemplo de matriz interés vs. influencia

            .p-4.position-relative
              .bgfig.mb-5.position-absolute.end-0.start-0.top-0.borde-10.cont-fig-2(style="bottom: 0;")
                .d-flex.flex-column.h-100.justify-content-between(data-aos="fade-right")

              .position-relative(style="z-index: 1;")
                figure(data-aos="fade")
                  img(src="@/assets/curso/temas/111.svg",style="width: auto;margin: auto;max-width:100%;",alt="Matriz que presenta un ejemplo de interés vs. Influencia.")

    Separador.pt-0

    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-right")
      h2 3.2 Técnicas e instrumentos para elicitar requisitos

    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/112.png",style="width: 100%;")
      .col-lg-8(data-aos="fade-left")
        p.mb-2(data-aos="fade") Hay una variedad de técnicas propuestas para ingeniería de requerimientos (Herrera, 2003. p. 12), por lo que es primordial resaltar que estas técnicas pueden ser aplicables a las distintas fases del proceso de la ingeniería de requerimientos (IR), teniendo en cuenta las características propias del proyecto en particular que se esté desarrollándose para aprovechar al máximo su utilidad.

        p(data-aos="fade") A continuación, se presentará una serie de técnicas destinadas a facilitar la elicitación correcta y efectiva de los requisitos dentro de un proceso de desarrollo.


    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  Entrevista
    
    .contenedor-bloque-leyenda.mb-4
      .row.justify-content-center.mx-1
        .col-md-10.mb-4(data-aos="fade-down")
          .text-center.contenedor-leyenda.px-5.pb-4
            figure.mb-4
              img(src='@/assets/curso/temas/97.svg', style="max-width: 80px;margin: auto")
            .texto-leyenda
              i.fas.fa-quote-left.i-izquierda
              h4.mb-0 La entrevista es una forma de recoger información de otra persona a través de una comunicación interpersonal que se lleva a cabo por medio de una conversación estructurada.
              i.fas.fa-quote-right.i-derecha
            p.mt-2.mb-0 - (Braude, 2003)

    p.mb-5(data-aos="fade") En las entrevistas se pueden identificar tres fases: preparación, realización y análisis (Piattini <em>et al</em>, 1996), como se observa a continuación.
    
    .row.justify-content-center
      .col-lg-12
        TabsB.color-acento-contenido.mb-5.bg-white(data-aos="fade-down")
          .py-4.py-md-5.ps-4(titulo="1. Preparación" :icono="require('@/assets/curso/temas/113.svg')")
            .row.align-items-center
              .col-lg-8.mb-4.mb-md-0
                h4 1. Preparación
                p.mb-4 El entrevistador debe documentarse e investigar la situación de la organización, analizando los documentos de la empresa disponible.
                ul.lista-ul--color.fa-ul.ms-0(data-aos="fade")
                  li 
                    i.fas.fa-code.color1
                    | Se debe intentar minimizar el número de entrevistados, considerando las entrevistas de cortesía.
                  li 
                    i.fas.fa-code.color1
                    | Analizar el perfil de los entrevistados.
                  li 
                    i.fas.fa-code.color1
                    | Definir el objetivo y el contenido de la entrevista.
                  li 
                    i.fas.fa-code.color1
                    | Planificar el lugar y la hora en la que se va a desarrollar la entrevista (es conveniente realizarla en un lugar confortable).
                  li 
                    i.fas.fa-code.color1
                    |  Algunos proponen enviar previamente el entrevistado un cuestionario y un pequeño documento de introducción al proyecto de desarrollo.
              .col-lg-4
                img.img-a.img-t(src='@/assets/curso/temas/116.png')
          .py-4.py-md-5.px-4(titulo="2. Realización" :icono="require('@/assets/curso/temas/114.svg')")
            .row.align-items-center
              .col-12
                h4 2. Realización
                p.mb-4 Dentro de la realización de las entrevistas se distinguen tres etapas, tal como se expone en Piattini et al. (1996):
                ol.lista-ol--cuadro.fa-ul.ms-0
                  li.mb-4
                    .lista-ol--cuadro__vineta
                      span.fw-bold a.
                    span.mb-0 #[b Apertura:] presentarse e informar al entrevistado sobre la razón de la entrevista.
                  li
                    .lista-ol--cuadro__vineta
                      span.fw-bold b.
                    span.mb-0 #[b Desarrollo:] cumplir las reglas del protocolo, hay que llegar a un acuerdo sobre cómo se va a registrar la información obtenida.
                p.ms-4 Durante esta fase se pueden emplear distintas técnicas:


            .bgw.p-4.mb-4
              ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                li.mb-3
                  i.fas.fa-code.color1
                  span.mb-0 #[b Preguntas abiertas:] también denominadas de libre contexto (Gause y Weinberg, 1989), estas preguntas no pueden  responderse con un #[b "sí"] o un #[b "no"], permiten una mayor comunicación y evitan la sensación de interrogatorio. Por  ejemplo, #[b "¿Qué se hace para registrar un pedido?"], #[b "Dígame qué se debe hacer cuando un cliente pide una factura"] o #[b “¿Cómo se rellena un recibo?"].
                li.mb-3 
                  i.fas.fa-code.color1
                  span.mb-0  #[b Utilizar palabras apropiadas:] se deben evitar tecnicismos que no conozca el entrevistado y palabras o frases que  puedan perturbar emocionalmente la comunicación (Goleman 1996).
                li.mb-3 
                  i.fas.fa-code.color1
                  span.mb-0  #[b Mostrar interés en todo momento:] es fundamental cuidar la comunicación no verbal (Davis, 1985) durante la entrevista:  tono de voz, movimiento, expresión facial.
            ol.lista-ol--cuadro.fa-ul.ms-0
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold c.
                span.mb-0 #[b Terminación:] se termina recapitulando la entrevista agradeciendo el esfuerzo y dejando abierta la posibilidad de volver a contactar para aclarar conceptos o bien citándole para otra entrevista.
          .py-4.py-md-5.ps-4(titulo="3. Análisis" :icono="require('@/assets/curso/temas/115.svg')")
            .row.align-items-center
              .col-lg-8.mb-4.mb-md-0
                .h4 3. Análisis
                p.mb-4 Consiste en leer las notas, pasarlas en limpio, reorganizar la información, contrastarlas con otras entrevistas o fuentes de información, evaluar cómo ha ido la entrevista.
                p En estas entrevistas, el equipo de la ingeniería de requerimientos hace preguntas sobre el sistema que utilizan y sobre el sistema a desarrollar. Los requerimientos provienen de las respuestas a estas preguntas.
              .col-lg-4
                img.img-a.img-t(src='@/assets/curso/temas/117.png')

    p.mt-4.mb-3(data-aos="fade") Las entrevistas se pueden clasificar fundamentalmente, en:
    
   
    AcordionA.mb-4(clase-tarjeta="tarjeta bg4")
      .row.justify-content-center(titulo="Entrevista estructurada")
        .col-11
          p.mb-4 Las preguntas en esta entrevista se deciden, previamente, de acuerdo con el detalle de información requerida.
          
          .p-4.bgw.borde-10
            ul.lista-ul--color.fa-ul.ms-0.mb-0(data-aos="fade")
              li 
                i.fas.fa-code.color1
                | Recoge de forma sistemática y precisa la mayor información sobre los aspectos que quiere explorar.
              li 
                i.fas.fa-code.color1
                | Las preguntas son prefijadas y definidas, las respuestas son esperadas e incluso se le dan al entrevistado en forma de varias opciones.
              li 
                i.fas.fa-code.color1
                | Las etapas son planificadas.
              li
                i.fas.fa-code.color1
                | La interpretación de las respuestas se realiza de acuerdo con unos criterios establecidos.
          .row.mt-5
            .col-lg-6
              a.anexo.anexo-fondo.mb-4(:href="obtenerLink('/downloads/Anexo1_Entrevista_estructurada.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Entrevista estructurada.
      .row.justify-content-center(titulo="Entrevista semiestructurada")
        .col-11
          p.mb-4 Esta presenta un grado mayor de flexibilidad que la estructurada, debido a que parten de preguntas planeadas, que pueden ajustarse a los entrevistados. Su ventaja es la posibilidad de adaptarse a los sujetos con enormes posibilidades para motivar al interlocutor, aclarar términos, identificar ambigüedades y reducir formalismos.
          .p-4.bgw.borde-10
            ul.ms-0.mb-0.lista-ul--color.fa-ul
              li 
                i.fas.fa-code.color1
                | Las preguntas, desarrollo e interpretación se planifican previamente, pero con un cierto grado de libertad de acción para abordar temas que pueden surgir durante la misma.
              li 
                i.fas.fa-code.color1
                | Se suele utilizar un protocolo para facilitar al entrevistador seguir un modelo preestablecido.
      .row.justify-content-center(titulo="Entrevista no estructurada")
        .col-11
          p.mb-4 Las entrevistas no estructuradas suelen describirse como conversaciones mantenidas con un propósito en mente.
          .p-4.bgw.borde-10.mb-4
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-code.color1
                | No se estructura ni planifica previamente.
              li 
                i.fas.fa-code.color1
                | Es la más ágil y la que proporciona más información en general, pero requiere un cierto dominio por parte del entrevistador.
          p.mb-4 En el material complementario se pueden revisar ejemplos de entrevistas.
    
    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  Encuesta

    .contenedor-bloque-leyenda.mb-4
      .row.justify-content-center.mx-1
        .col-md-10.mb-4(data-aos="fade-down")
          .text-center.contenedor-leyenda.px-5.pb-4
            figure.mb-4
              img(src='@/assets/curso/temas/97.svg', style="max-width: 80px;margin: auto")
            .texto-leyenda
              i.fas.fa-quote-left.i-izquierda
              h4.mb-0 Los cuestionarios son herramientas ampliamente utilizadas para recoger datos de sondeos y pueden ser administradas sin la presencia del investigador.
              i.fas.fa-quote-right.i-derecha
            p.mt-2.mb-0 - (Cohen, 2011, p. 377).

    .row.align-items-center.mb-4
      .col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/118.png',style="width: auto;margin: auto;")
      .col-lg-10
        p.mb-4(data-aos="fade") Pueden variar en cuanto a propósito, diseño y apariencia, y consisten en listas de preguntas escritas. Los individuos participantes en la investigación suelen leer los mismos listados de preguntas, por lo que esto permite consistencia y precisión al analizar las respuestas, además de facilitar el proceso. Una de las ventajas más destacadas de los cuestionarios es que simplifican el proceso de la obtención de datos, preguntando directamente a los individuos participantes para obtener datos de forma rápida y directa y se pueden aplicar a un gran número de sujetos.
        p(data-aos="fade") Los datos que se obtienen a través de los cuestionarios suelen estar clasificados en dos categorías: hechos y opiniones (Denscombe, 2010, p. 156). La información relacionada con los hechos no requiere el juicio o la actitud personal de los sujetos participantes, pero la información obtenida a través de las opiniones implica creencias, puntos de vista y preferencias de los sujetos participantes.

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        .bg11.brad.text-white.h-100.p-5
          figure
            img(src='@/assets/curso/temas/119.png',style="width: auto;margin: auto;")
          h4.text-center.my-4 Tipos de preguntas
          p.mb-0 La distinción más general entre los tipos de preguntas de los #[b.t2 cuestionarios, además de hechos y opiniones, es la de preguntas abiertas y cerradas]; las preguntas abiertas son aquellas en las que no se especifica ninguna respuesta para elegir y se deja abierta a la elección del participante para que escriba en ella. Las preguntas cerradas son las que ofrecen ya unas respuestas predeterminadas para su elección.

      .col-lg-6.mb-4(data-aos="fade-left")
        .bg11.brad.text-white.h-100.p-5
          figure
            img(src='@/assets/curso/temas/120.png',style="width: auto;margin: auto;")
          h4.text-center.my-4 Tipos de respuestas
          p.mb-0 Las respuestas de escala son las más comunes en los cuestionarios de investigación, ya que implican al participante en una valoración o evaluación de las respuestas objetivo por medio de varias opciones en las que tienen que marcar dentro de una escala la importancia de cada una. Esa escala de valoración indica diferentes grados en una categoría y puede ser de diversa naturaleza; por ejemplo, puede valorar una categoría indicando si es #[b.t2 “bueno”] o #[b.t2 “malo”], #[b.t2 “frecuente”] o #[b.t2 “infrecuente”], #[b.t2 “importante”] o #[b “poco importante”] o también pueden valorar opiniones: #[b.t2 “completamente de acuerdo”] o #[b.t2 “en desacuerdo”]. El número de opciones más común es el de cinco, por ser un número impar, ya que existe una tendencia generalizada a seleccionar la opción intermedia (Dornyei, 2010).

    .row.justify-content-center
      .col-lg-10
        .d-flex.flex-column.cont_d_3.p-3.flex-lg-row(data-aos="fade-down")
          figure.me-lg-4.w-auto(style="min-width: 80px;")
            img(src='@/assets/curso/temas/109.svg',style="width: auto;")
          p.mt-2 Para ampliar la información, lo invitamos a explorar el video Tipos de preguntas en una encuesta, el cual se encuentra en el material complementario.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  Observación

    .row.mb-4
      .col-lg-2.mb-4.mb-lg-0
        .borde-13.pb-3
          figure
            img(src="@/assets/curso/temas/121.png",style="width: auto;margin: auto;")
      .col-lg-10
        p.mb-4(data-aos="fade") Esta permite la obtención de datos para emprender una investigación de tipo cualitativo, no desde el punto de vista de lo que los sujetos dicen, sino que es la evidencia directa de lo que ve y percibe el investigador en un escenario de primera mano (Denscombe, 2010).

        p.mb-4(data-aos="fade") Por su parte, Selltiz (citado por Hernández, Fernández y Baptista, 2006, p. 229), al referirse a la observación, recomienda que para que esta se convierta en una técnica como tal, debe cumplir con cuatro condiciones:

        .fondo-color-sistema-j.p-4.borde-10.d-inline-flex
          ol.lista-ol--cuadro.fa-ul.ms-0.mb-0(data-aos="fade")
            li 
              .lista-ol--cuadro__vineta
                span.fw-bold 1.
              span.mb-0 Debe servir a un objeto formulado de investigación.
            li 
              .lista-ol--cuadro__vineta
                span.fw-bold 2.
              span.mb-0 Debe de ser planificada sistemáticamente.
            li 
              .lista-ol--cuadro__vineta
                span.fw-bold 3.
              span.mb-0 Debe estar controlada y relacionada con proposiciones generales.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.fw-bold 4.
              span.mb-0 Debe ser sujeta a comprobaciones y controles de validez y fiabilidad.

    p.mb-4(data-aos="fade") De acuerdo con lo anterior, se puede asumir que la observación:
    
    .row
      .col-lg-6(data-aos="fade-up")
        .d-flex.borde-10.p-3.bg11.align-items-center.mb-4
          figure.me-3(style="width: 52px")
            img(src='@/assets/curso/temas/122.png',style="width: auto;max-width: 100%;")
          p.text-white.mb-0 Tiene la característica de seguir normas, reglas y procedimientos.

        p.mb-4 Para el caso de obtención de requerimientos del #[em software] la observación nos sirve para estudiar el entorno de trabajo de los usuarios, clientes e interesados de proyecto (#[em stakeholders]) y para documentar la situación actual de procesos de negocio.
        p En la siguiente figura, se pueden revisar los tipos de observación.
      
      .col-lg-6.d-none.d-lg-block(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/124.png',style="width: auto;max-width: 100%;")

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 12.] Tipos de observación

    .p-4.position-relative.mb-4
      .bgfig1.position-absolute.end-0.start-0.top-0.borde-10.cont-fig-2(style="bottom: 0;")

      .position-relative(style="z-index: 1;")
        figure.d-none.d-lg-block
          img(src="@/assets/curso/temas/125.svg",style="width: auto;margin: auto;max-width: 100%;",alt="Los tipos de observación son pasiva y activa.")
        figure.d-lg-none
          img(src="@/assets/curso/temas/126.svg",style="width: auto;margin: auto;max-width: 100%;",alt="Los tipos de observación son pasiva y activa.")

    p.mb-4(data-aos="fade") Ahora bien, para llevar a cabo la observación, el observador puede utilizar como instrumento #[b.t1 la guía de observación], la cual le permite situarse de manera sistemática en aquello que realmente es objeto de estudio para la investigación; también es el medio que conduce la recolección y obtención de datos e información de un hecho o fenómeno.
    p.mb-4 Tamayo (2004) define a la guía de observación como:

    .row.mb-4.align-items-center
      .col-lg-8
        .p-4.position-relative.mb-4.mb-lg-0(style="background-color: #BFE9E3;z-index: 1;")
          p.mb-0(style="opacity: 1") Un formato en el cual se pueden recolectar los datos en sistemática y se pueden registrar en forma uniforme, su utilidad consiste en ofrecer una revisión clara y objetiva de los hechos, agrupa los datos según necesidades específicas, se hace respondiendo a la estructura de las variables o elementos del problema (p. 172).
          figure.d-inline-block.position-absolute(style="right: 0;bottom: 6%;width:auto;z-index: -1;")

          div(style="height: 8px;width: 25px;position: absolute;z-index: -1; background-color: #00FFDF;top: 0;left: 0;")
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/127.png",style="width: auto;margin: auto;max-width: 100%;")
    p.mb-4(data-aos="fade") Para elaborar la guía de observación se ha de diseñar el contenido de la observación; el cual debe incluir por lo menos los siguientes aspectos:

    .row
      .col-lg-4.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img(src="@/assets/curso/temas/128.png",style="width: auto;margin: auto;max-width: 100%;")
      .col-lg-8
        .fondo-color-sistema-j.p-4.borde-10.mb-4
          ol.lista-ol--cuadro.fa-ul.ms-0.mb-0(data-aos="fade")
            li 
              .lista-ol--cuadro__vineta
                span.fw-bold 1.
              span.mb-0 Datos y características de los sujetos a evaluar.
            li 
              .lista-ol--cuadro__vineta
                span.fw-bold 2.
              span.mb-0 Propósitos de la observación o de las observaciones a realizar.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.fw-bold 3.
              span.mb-0 Temporalidad de la observación.

        .row
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/Ficha_de_observacion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Ficha de observación.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Sesiones grupales

    .row
      .col-lg-2(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/129.png',style="width:auto;margin: auto;max-width: 100%;")
      .col-lg-10(data-aos="fade-left")
        p.mb-4 Es un proceso por el cual se llevan a cabo reuniones en grupo altamente estructuradas que convocan, en una misma sala, a los usuarios de un sistema, los propietarios del sistema y a los analistas durante un amplio periodo de tiempo. Los objetivos de esta técnica son esencialmente los mismos que los de las entrevistas, con la salvedad de necesitar más analistas para llevarlos a cabo. 
        p Dentro de las sesiones de trabajo en grupo se encuentran técnicas como la #[b lluvia de ideas, las sesiones JAD y el método Delphi].
    

    AcordionA.mb-4(clase-tarjeta="tarjeta bg4")
      .row(titulo="Lluvia de ideas").align-items-center
        .col-lg-1.d-none.d-lg-block
          img.img-a.img.t(src='@/assets/curso/temas/130.svg')
        .col-lg-10
          p También denominada tormenta de ideas o incluso #[em brainstorming]. Faickney (1939) investigó sobre diferentes maneras de generar creatividad. Se percató de que la mejor manera de ser creativo en una empresa es a través de la interacción y el trabajo en equipo; todos juntos podían dar sus opiniones y sugerencias sobre un tema determinado. Creó de esta manera la lluvia de ideas.
      div(titulo="Sesiones JAD (<em>Joint Application Design</em>)")
        .row
          .col-lg-1.d-none.d-lg-block
            img.img-a.img.t(src='@/assets/curso/temas/131.svg')
          .col-lg-10
            p.mb-4 Es un proceso usado para reunir requerimientos en el desarrollo de nuevos sistemas de información para una compañía. #[b El proceso JAD consiste en un taller donde los trabajadores del conocimiento y los especialistas en tecnologías de información se reúnen], algunas veces durante varios días, para definir y revisar los requerimientos de negocio para el sistema. Los asistentes incluyen oficiales de administración de alto nivel, quienes se aseguran de que el producto provea los reportes y la información requerida al final, esto actúa como #[b “un proceso de administración”] que permite que los departamentos de servicios de información corporativa trabajen más eficientemente con los usuarios en un marco de tiempo más reducido. 
          p.ps-lg-5 A través de los talleres JAD, los trabajadores del conocimiento y los especialistas en tecnologías de información pueden resolver cualquier dificultad o diferencias entre las posturas referentes al nuevo sistema de información. #[b El taller sigue una detallada agenda para lograr garantizar que todas las incertidumbres entre los grupos sean cubiertas y para ayudar a prevenir cualquier falla en la comunicación], estas fallas de comunicación pueden provocar repercusiones mucho más serias si no se identifican a tiempo. Al final, este proceso resultará en un nuevo Sistema de Información viable y orientado tanto a diseñadores como a usuarios.
      div(titulo="Método Delphi")
        .row.align-items-center
          .col-12
            .mb-4.ms-lg-5 Es un #[b método de estructuración de un proceso de comunicación grupal] que consiste en la selección de un grupo de expertos a los que se les pregunta su opinión frente a ciertas temáticas.
            .bgw.borde-10.p-4.ms-lg-5.d-flex.flex-column.flex-lg-row
              ul.lista-ul--color.fa-ul.ms-0.mb-0
                li 
                  i.fas.fa-code.color1
                  span.mb-0 #[b Fase uno.] Formulación del problema: se define el campo de investigación.
                li 
                  i.fas.fa-code.color1
                  span.mb-0 #[b Fase dos.] Elección de expertos: el experto se elige según su preparación y su capacidad de proyección.
                li 
                  i.fas.fa-code.color1
                  span.mb-0 #[b Fase tres.] Elaboración de cuestionarios: las preguntas deben hacerse de acuerdo con la temática que se quiere obtener.
                li.mb-0 
                  i.fas.fa-code.color1
                  span.mb-0 #[b Fase cuatro.] Desarrollo y explotación de resultados: el cuestionario se entrega a los expertos para ser contestado por ellos.

              figure( style="width: 70px;margin-bottom: auto;")
                img(src='@/assets/curso/temas/132.png', style="width: 70px;")
    


    Separador 
      
    #t_3_3(data-aos="fade")
    .titulo-segundo.color-acento-contenido
      h2 3.3 Herramientas para captura de requisitos

    p.mb-5(data-aos="fade") Existen varias herramientas para la captura de requisitos potenciales de un nuevo sistema o una actualización de #[em software], a continuación, se explican las más utilizadas:

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  Diagrama de casos de uso

    .row.mb-4
      .col-lg-3
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/133.png',style="width:auto;margin: auto;max-width: 100%;")
      .col-lg-9
        p.mb-4(data-aos="fade") Al momento de desarrollar un proyecto se debe pensar en cuáles serán las principales funcionalidades que el #[em software] debe permitir llevar a cabo y quiénes serán los que podrán ejecutar dichas funcionalidades. #[b.t1 La identificación de estos elementos se puede visualizar de manera efectiva a través de la elaboración de diagramas de casos de uso]; estos diagramas, que son elaborados durante las etapas iniciales de un proyecto, se convierten en referente para cada una de las etapas siguientes del desarrollo del proyecto.
        p(data-aos="fade") Componentes. En los diagramas de casos de uso, se observan los siguientes componentes.

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        .bg5.brad.h-100.p-5
          figure
            img(src='@/assets/curso/temas/134.png',style="width: auto;margin: auto;")
          h4.text-center.t3.my-4 Actor
          p.text-white.mb-0 Se representa mediante un “hombre de palo”. Este se emplea para indicar el tipo de usuario del sistema que podrá ejecutar alguna función.
       
      .col-lg-6.mb-4(data-aos="fade-left")
        .bg5.brad.h-100.p-5
          figure(data-aos="zoom-in-right")
            img(src='@/assets/curso/temas/135.png',style="width: auto;margin: auto;")
          h4.text-center.t3.my-4 Caso de uso
          p.text-white.mb-0 Se representa mediante un óvalo e indica una función que el sistema debe proveer.

    .row.mb-4
      .col-lg-4
        p.mb-4(data-aos="fade") Para ejemplificar un proceso se puede emplear un verbo conjugado en infinitivo y que represente la función a realizar (administrar, gestionar, registrar, entre otros). A continuación, se presenta un ejemplo, en el cual se presenta un diagrama de casos de uso de la sistematización de un centro médico.

        .fondo-color-sistema-j.p-4.borde-10.mb-4
          ul.lista-ul--color.fa-ul.ms-0.mb-0(data-aos="fade")
            li 
              i.fas.fa-code.color1
              | Administrar datos pacientes.
            li 
              i.fas.fa-code.color1
              | Administrar datos tratamientos.
            li
              i.fas.fa-code.color1
              | Gestionar citas.
            li.mb-0
              i.fas.fa-code.color1
              | Generar reportes.
      .col-lg-8
        .p-4.position-relative
          .bgfig4.position-absolute.end-0.start-0.top-0.borde-10.cont-fig-2(style="bottom: 0;")
            .d-flex.flex-column.h-100.justify-content-between
          .position-relative(style="z-index: 1;")
            h4 Representación gráfica
            .titulo-sexto.color-acento-contenido(data-aos="fade-down")
              p.mb-0 #[b Figura 13.] Caso de uso centro médico
            figure.d-none.d-lg-block
              img(src="@/assets/curso/temas/136.svg",style="width: auto;margin: auto;max-width: 100%;",alt="Representación gráfica de un diagrama de caso de uso de la sistematización de un centro médico.")
            figure.d-lg-none
              img(src="@/assets/curso/temas/137.svg",style="width: auto;margin: auto;max-width: 100%;",alt="Representación gráfica de un diagrama de caso de uso de la sistematización de un centro médico.")

    .fondo-gradiente-4
      .row.align-items-end
        .col-lg-8
          .fondo-color-sistema-g.borde-10.p-4
            h4(data-aos="fade") Identificación de casos de uso
            p.mb-4(data-aos="fade") En el ejemplo anterior se observan los casos de uso identificados en el sistema, es decir, las funcionalidades que el sistema va a proveer (administrar datos pacientes, administrar datos tratamientos, gestionar citas, generar reportes).

            hr.hr1

            h4(data-aos="fade") Identificación de actores
            p.mb-4(data-aos="fade") Los actores son los usuarios que podrán ejecutar los casos de uso, en el ejemplo anterior, se identificaron dos actores (médico y empleado).
            
            hr.hr1

            h4(data-aos="fade") Documentación
            p.mb-0(data-aos="fade") La técnica de casos de uso requiere además de construir el diagrama de casos de uso, la descripción de estos. Esta descripción permite detallar el flujo de eventos que se da entre el Sistema y el Actor para llevar a cabo el caso de uso.
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/138.png",style="width: auto;margin: auto;max-width: 100%;")  

      .row.justify-content-center
        .col-lg-10
          .tarjeta.bg9.p-3.my-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1.t2 Documentación caso de uso
                    p.mb-0.text-white A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Caso_de_uso.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

    .row.bgt32.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-start.mb-4.mt-5 
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Historias de usuario
            
            p.mb-4(data-aos="fade") Las historias de usuario son utilizadas en los métodos agiles para la especificación de requisitos, son una descripción breve de una funcionalidad #[em software] tal y como la percibe el usuario (Cohn, 2004).
            p.mb-4(data-aos="fade") El formato para las historias de usuario Scrum se basan en una regla de tres palabras:

            .row.justify-content-center.mb-4
              .col-lg-8
                .borde-10.p-4.bg7.position-relative(style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;z-index: 1;")
                  .row.justify-content-center.align-items-center
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/temas/139.png',style="width: auto;max-width: 100%;margin: auto;")
                    .col-lg-4
                      ul.lista-ul--color.fa-ul.ms-0.mb-0(data-aos="fade")
                        li 
                          i.fas.fa-code.color1
                          p.mb-0 #[b Como] &lt;rol&gt;	
                        li 
                          i.fas.fa-code.color1
                          p.mb-0 #[b Quiero] &lt;eventos&gt;	
                        li 
                          i.fas.fa-code.color1
                          p.mb-0 #[b Para] &lt;funcionalidades&gt;	

            p.mb-4(data-aos="fade") Así, el #[b &lt;rol&gt;] que se escoja que va a utilizar la aplicación #[em software], requiere de una #[b &lt;Acción&gt;] / #[b &lt;evento&gt;] que ocurra, porque se desea cubrir una #[b &lt;funcionalidad&gt;]. Corto y conciso, directo y claro.
            p.mb-4(data-aos="fade") A continuación se presentan ejemplos de historias de usuario.

            .row.justify-content-center.mb-4
              .col-lg-8
                .borde-10.p-4.bg7.position-relative(style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;z-index: 1;")
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                      .p-4.h-100(style="background-color: #FFCE00;")
                        p.mb-0 
                          b Como un 
                              span.txt-color-primario cliente, quiero 
                              | consultar 
                              span.txt-color-primario para 
                              | poder encontrar el producto que deseo comprar.
                    .col-lg-5(data-aos="fade-left")
                      .p-4.h-100(style="background-color: #FFCE00;overflow: hidden;")
                        p.mb-0 
                          b Como un 
                              span.txt-color-primario cliente, quiero 
                              | consultar 
                              span.txt-color-primario para 
                              | poder encontrar el producto que deseo comprar.

                        p.mb-0 
                          b Como un 
                            span.txt-color-primario cliente, quiero 
                            | que los productos seleccionados para la compra queden almacenados en un carrito de compra 
                            span.txt-color-primario para 
                            | poder visualizar todos mis productos y el precio total.
                  
            .row.justify-content-center.mb-4
              .col-lg-10
                .p-4.borde-10(style="background-color: #FFFFFF;")
                  h4(data-aos="fade") Conversación para explicar mejor la historia de usuario
                  p.mb-4(data-aos="fade") Como se mencionó anteriormente, las historias de usuario son una frase sencilla y concisa, sin embargo, eso no impide que se pueda abrir un diálogo (conversación) entre todos los miembros del equipo. De hecho, esta conversación se debe llevar a cabo para explicar mejor la propia historia de usuario y conseguir objetivos como:
                  
                  ul.lista-ul--color.fa-ul.mb-0(data-aos="fade")
                    li 
                      i.fas.fa-code.color1
                      | Detallar a mayor nivel como se realizará la solución.
                    li 
                      i.fas.fa-code.color1
                      | Clarificar aspectos de valor, funcionamiento y técnicos.
                    li 
                      i.fas.fa-code.color1
                      | Resolver las dudas que aparezcan.
                  
                  p(data-aos="fade") Estas conversaciones llevarán a alcanzar acuerdos sobre los distintos puntos tratados, que quedarán reflejados en los criterios de aceptación y que permitirán validar cuando una historia de usuario está terminada.

            .row.justify-content-center.mb-4
              .col-lg-10
                .p-4.borde-10(style="background-color: #FFFFFF;")
                  h4(data-aos="fade") Confirmación de los criterios de aceptación
                  p.mb-4(data-aos="fade") Los criterios de aceptación, es decir, la confirmación. Se trata de criterios claros y específicos que todo el equipo debe comprender y que permitirán avaluar en el futuro si la implementación que se está desarrollando o las pruebas que se realicen están terminadas.
                  p(data-aos="fade") A continuación, un ejemplo de una historia de usuario usando plantilla.

    .row.justify-content-start.mb-4.mt-5 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0  #[em Storyboard]

    .row
      .col-lg-7
        h4 ¿Qué es un #[em Storyboard]?

        p Los #[em storyboards] son un tipo de prototipos muy utilizados, #[b.t1 consiste básicamente en ir mostrando en una secuencia de imágenes un proceso, acción o ejercicio que se puede realizar en el sistema una vez terminado], las imágenes van mostrando la evolución del sistema conforme el usuario interactúa con el sistema.

        hr.hr1

        p(data-aos="fade") Con esta técnica se pretende crear diferentes vistas del sistema en las primeras etapas de su implementación de la manera más rápida y barata posible [SUT02].
        p(data-aos="fade") Una forma muy común de ejemplificar los #[em storyboards] es con las revistas de cómics, ya que van mostrando una secuencia de imágenes en cuadros con un orden establecido que permiten entender la línea de la historia contada. La técnica #[em storyboard] permite generar modelos o esquemas visuales como esbozos de interfaces gráficas de usuario (GUI).
      .col-lg-5
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/140.png',style="width: auto;max-width: 100%;")


    p.mb-4(data-aos="fade") A continuación, se detallan las principales características de los #[em storyboards]:
      
    .fondo-left-custom.p-4.mb-4
      .row.align-items-center
        .col-lg-6(data-aos="fade-right")
          ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
            li 
              i.fas.fa-code.color1
              | Se preserva el punto de vista del proceso del negocio.
            li 
              i.fas.fa-code.color1
              | Se puede validar un escenario.
            li 
              i.fas.fa-code.color1
              | Se pueden validar escenarios integradores logrando una visión global.
            li 
              i.fas.fa-code.color1
              | Son más fáciles de comprender por el usuario.
            li 
              i.fas.fa-code.color1
              | No genera falsas expectativas.
            li 
              i.fas.fa-code.color1
              | El usuario sigue trabajando con herramientas conocidas.
            li 
              i.fas.fa-code.color1
              | Son fáciles de mantener o adaptar a los cambios.
            li.mb-0
              i.fas.fa-code.color1
              | Permiten incorporar modificaciones durante la validación.
        .col-lg-6.mt-4.mt-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/141.png', style="width: auto;max-width: 100%;")

    Separador

    #t_3_4(data-aos="fade")
    .titulo-segundo.color-acento-contenido
      h2 3.4 Herramientas de modelado

    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/142.png', style="width: auto;max-width: 100%;margin: auto;")
      .col-lg-8
        p.mb-4 Las herramientas de modelado de sistemas informáticos se emplean para la creación de modelos de sistemas que ya existen o que se desarrollarán; estas herramientas permiten crear un #[b.t1 "simulacro"] del sistema, a bajo coste y riesgo mínimo. #[b.t1 A bajo costo porque, es un conjunto de gráficos y textos que representan el sistema].
        p El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés, #[em Unified Modeling Language]) #[b.t1 es el lenguaje de modelado de sistemas de #[em software] más conocido y utilizado en la actualidad]; UML es un lenguaje gráfico que permite especificar, modelar, construir y documentar los elementos que forman un sistema #[em software].
    
    p.mb-4(data-aos="fade") De otra parte, las herramientas CASE son un conjunto de programas y procesos “guiados”, que ayudan a los analistas, desarrolladores, ingenieros de #[em software] y diseñadores en una o todas las etapas que comprende un ciclo de vida, con el objetivo de facilitar el desarrollo de #[em software]. El objetivo general de estas herramientas es acelerar el proceso para el que han sido diseñadas, es decir, para automatizar o apoyar una o más fases del ciclo de vida del desarrollo de sistemas. CASE proporciona un conjunto de herramientas semiautomatizadas y automatizadas que están creando una nueva cultura de ingeniería en muchas empresas. Las herramientas CASE se diseñaron para aumentar la productividad en el desarrollo de #[em software] y reducir su costo.
    p.mb-4(data-aos="fade") Existen muchas herramientas para modelado tanto en libres como con derechos comerciales; a renglón seguido se listan las herramientas CASE más utilizadas:

    .row.mb-1(data-aos="fade")
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/143.png')
        p.text-center ER win
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/144.png')
        p.text-center ArgoUML
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/145.png')
        p.text-center Easy Case
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/146.png')
        p.text-center Oracle Designer
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/147.png')
        p.text-center Power Designer
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/148.png')
        p.text-center System Architect
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/149.png')
        p.text-center SNAP
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/160.png')
        p.text-center Gliffy 
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/161.png')
        p.text-center MagicDraw
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/162.png')
        p.text-center Lucidchart
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/163.png')
        p.text-center Papyrus Uml
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/164.png')
        p.text-center Modelio
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/165.png')
        p.text-center StarUml
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/166.png')
        p.text-center Dia
      .col-xs-6.col-sm-6.col-md-3.col-lg-2
        .herramienta-item.p-2.mb-3
          img(src='@/assets/curso/temas/167.png')
        p.text-center Mono Uml


    p.mb-4(data-aos="fade") A continuación, se realizará una descripción del top 5 de las más utilizadas.
    
    .row.justify-content-center
      .col-lg-10
        TabsC.color-acento-contenido(data-aos="fade-down")
          .py-3.py-md-4(titulo="Gliffy")
            .row
              .col-12
                .row.px-5.py-4
                  .col-lg-2
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/temas/168.png',style="width: auto;max-width: 100%;")
                  .col-lg-10
                    p.mb-4 La aplicación en línea Gliffy es una herramienta de diagramas UML basada en la nube. Apareció por primera vez en 2006 y se trata de una herramienta de modelado que crea todo tipo de diagramas, tales como diagramas de flujo, diagramas de Venn y, por supuesto, diagramas UML. La herramienta en línea fue escrita en HTML5 y es bastante popular gracias a su rapidez de reacción. Es de anotar que antes de que Gliffy pasara por la fase beta en 2007, la empresa homónima cooperó con el grupo de #[em software] australiano Atlassian. Ya en 2006, su #[em software] de colaboración Confluence integró un #[em plugin] de Gliffy y, más tarde, el equipo de Gliffy desarrolló un #[em plugin] para Jira. Google Workspace y Drive de Google también integran esta herramienta UML.

          .py-3.py-md-4(titulo="ArgoUML")
            .row
              .col-12
                .row.px-5.py-4
                  .col-lg-2
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/temas/169.png',style="width: auto;max-width: 100%;")
                  .col-lg-10
                    p.mb-4 Ha sido durante mucho tiempo una de las herramientas UML gratuitas de código abierto más populares para el escritorio y aunque ya no se mantiene, muchos modeladores continúan usando el programa para tareas más pequeñas. Su #[em software] es multiplataforma, cuyo el requisito mínimo es Java 5 ArgoUML soporta todos los tipos de diagramas de la versión 1.4 de UML y perfiles UML. El programa también ofrece algunas formas decorativas que no forman parte del estándar UML.
                    p.mb-4 Además, aunque esta herramienta UML está disponible como descarga gratuita, ArgoUML #[b soporta una amplia gama de lenguajes de programación] cuyo código puede generarse a partir de un diagrama. La 	ingeniería inversa también es posible para Java, C++, PHP, C# y SQL. El programa reconoce otros idiomas como Delphi o Ruby cuando los agrega como extensiones a la carpeta de archivos ArgoULM.
                //figure
                  img(src='@/assets/curso/temas/img25.png', style="max-width: 100%; margin: auto;")
                  figcaption Nota: Tomado de <a href="https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/las-mejores-herramientas-uml/" target="_blank">https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/las-mejores-herramientas-uml/</a>
          .py-3.py-md-4(titulo="MagicDraw")
            .row
              .col-12
                .row.px-5.py-4
                  .col-lg-2
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/temas/170.png',style="width: auto;max-width: 100%;")
                  .col-lg-10
                    p.mb-4 Esta aplicación de escritorio destaca por su diseño moderno y claro, así como por su variedad de funciones y la facilidad de su uso. Esta herramienta de diagramas UML ofrece además SysML, representación gráfica de procesos de negocio con BPMN #[i (Business Process Model and Notation)] y el marco de arquitectura UPDM #[i (United Profile for DoDAF/MODAF)].
                    p.mb-4 MagicDraw también ofrece lenguaje de especificación OCL #[i (Object Constraint Language)], y XMI, que 	puede usar para exportar diagramas a otros programas sin pérdidas de información.
        
          .py-3.py-md-4(titulo="StarUML")
            .row
              .col-12
                .row.px-5.py-4
                  .col-lg-2
                      figure.mb-4.mb-lg-0
                        img(src='@/assets/curso/temas/171.png',style="width: auto;max-width: 100%;")
                  .col-lg-10
                    p.mb-4 Es una herramienta para el modelamiento de #[em software] basado en los estándares UML #[i (Unified Modeling Language)] y MDA #[i (Model Driven Arquitecture)].
                    p.mb-4 Da soporte completo al diseño UML mediante el uso de:
                    ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade")
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de casos de uso.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de clase.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de secuencia.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de colaboración.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de estados.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de actividad.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de componentes.
                      li 
                        i.fas.fa-code.color1
                        | Diagrama de despliegue.
                      li 
                        i.fas.fa-code.color1
                        |  Diagrama de composición estructural (UML 2.0).
              
          .py-3.py-md-4(titulo="Lucidchart")
            .row
              .col-12
                .row.px-5.py-4
                  .col-lg-2
                      figure.mb-4.mb-lg-0
                        img(src='@/assets/curso/temas/162.png',style="width: auto;max-width: 100%;")
                  .col-lg-10
                    p.mb-4 Herramienta para hacer diagramas UML #[i online] que permite comprender las complejidades en el código de forma más rápida y sencilla, pues automatiza el proceso de generación de un diagrama de clases. Simplemente elabora y personaliza los diagramas de secuencia en línea a partir del texto. Al ingresar el marcado en el diálogo emergente, Lucidchart generará automáticamente un diagrama de secuencia que cumple el estándar de PlantUML.

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
