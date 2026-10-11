---
title: "Estadísticas del Cockpit"
description: "Analiza tus estadísticas de vuelo, tendencias y rendimiento"
category: Cockpit
order: 1
---
El Cockpit es tu panel de rendimiento, con estadísticas y análisis completos de todos tus vuelos. Úsalo para seguir tu progreso, detectar patrones y descubrir tus mejores zonas de vuelo y condiciones.

## Resumen

Entra en el [Cockpit](/cockpit) para ver todas tus estadísticas de vuelo.

## Vistas del Cockpit

El Cockpit tiene once vistas, y cada una aporta su propio análisis:

1. **Resumen**: estadísticas y totales de los datos filtrados
2. **Tendencias**: tu forma de volar a lo largo del tiempo, desde día a día hasta año a año
3. **Térmicas**: tasas de ascenso, giro y calidad de las térmicas, temporada a temporada
4. **Fases**: cómo se reparte tu tiempo de vuelo entre térmica, búsqueda, planeo y planeo neutro
5. **Vela**: desglose del tiempo de vuelo por vela
6. **Despegue**: estadísticas por zona de vuelo con puntuaciones z
7. **País**: estadísticas de vuelo por países
8. **Temporada**: comparación año a año
9. **Mes**: desglose mensual y patrones estacionales
10. **CIVL**: tu clasificación mundial CIVL
11. **Mapa**: tus despegues en un mapa

### Navegación

- Elige una vista en el menú del Cockpit
- Cada vista se limita a los [datos filtrados](./data-filters.md)

## Estadísticas del resumen

La página de resumen del [Cockpit](/cockpit) muestra las estadísticas de vuelo de los [datos filtrados](./data-filters.md). Todas las distancias, altitudes y velocidades se muestran en las unidades que elegiste en tu perfil.

### Totales de vuelo

La franja de cabecera de arriba te da las cuatro cifras principales:

#### Vuelos totales
- **Definición**: número de todos los vuelos de tu libro de vuelo

#### Tiempo de vuelo total
- **Definición**: suma de la duración de todos los vuelos
- **Unidad**: horas y minutos
- **Cálculo**: suma de todos los (hora de aterrizaje menos hora de despegue)

#### Distancia
- **Definición**: longitud total del track en todos los vuelos

#### Vuelo más largo
- **Definición**: tu mayor tiempo de vuelo
- **Muestra**: la duración; púlsala para abrir ese vuelo

#### Eficiencia de vuelo
- **Definición**: tiempo pasado girando en térmicas (**Centrando**) frente al tiempo en vuelo recto (**Planeando**)
- **Unidad**: horas y minutos, más el reparto en porcentaje

#### Equilibrio de giro
- **Definición**: cómo se reparte tu tiempo centrando térmicas entre **Giros a la izquierda** y **Giros a la derecha**

#### Reparto por modo de vuelo
- **Definición**: cómo se reparte tu tiempo de vuelo entre vuelos **Solo** y **Biplaza** (solo se muestra si tienes vuelos biplaza)

### Distancia y puntuación

Todas las distancias y puntuaciones de cross se calculan con la biblioteca de código abierto [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), creada y mantenida por [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distancia XC
- **Definición**: suma de todas las distancias de cross puntuadas
- **Uso**: sigue tu logro total en distancia

#### Puntos XC
- **Definición**: suma de todas las puntuaciones de XContest
- **Incluye**: todos los multiplicadores (distancia libre, triángulos)
- **Uso**: compara tu rendimiento en distancia a lo largo del tiempo

#### Longitud del track
- **Definición**: suma de todas las distancias de los tracks GPS
- **Siempre > Distancia XC**: incluye todos los giros y desvíos

### Récords personales

Cada récord enlaza con el vuelo del que procede: pulsa el valor para abrirlo.

#### Altitud máx.
- **Definición**: la altitud más alta alcanzada en todos los vuelos
- **Unidad**: sobre el nivel del mar (s. n. m.)

#### Ganancia de altura máx.
- **Definición**: la mayor ganancia de altitud en un solo vuelo
- **Cálculo**: altitud máxima - altitud mínima

#### Velocidad máx.
- **Definición**: la velocidad suelo más alta mantenida durante 5 segundos, filtrando los picos del GPS
- **Nota**: incluye el efecto del viento

#### Mejor distancia XC
- **Definición**: el vuelo de distancia puntuado más largo
- **Logro**: ¡tu récord personal de distancia!

#### Mejor puntuación XC
- **Definición**: la puntuación de XContest más alta en un solo vuelo
- **Nota**: puede no coincidir con la mejor distancia (por los multiplicadores de los triángulos)

#### Remontada más baja
- **Definición**: el punto más bajo (sobre el suelo) desde el que volviste a subir, y cuánta altura recuperaste

### Métricas de rendimiento

- **Tiempo de giro med.**: tiempo mediano por cada giro de 360°
- **Radio de giro med.**: radio de giro mediano mientras centras
- **Factor G mediano**: factor de carga (consulta la [Guía del factor G para pilotos](/doc/g-factor-pilot-guide))
- **Pico de la térmica más fuerte**: la mejor tasa de ascenso, mantenida durante 5 segundos; púlsala para ir directamente a esa térmica

## Vista de tendencias

Entra en **/cockpit?view=trends** para ver cómo evoluciona tu forma de volar con el tiempo.

Elige una **Métrica** (**Tiempo de vuelo**, **Vuelos**, **Distancia media**, **Tiempo de vuelo medio**, **Velocidad media**), un **Intervalo** (**Día**, **Semana**, **Mes**, **Año**), un **Periodo** (**30 días**, **12 meses**, **Este año**, **Todo**) y un **Desglose** (**Total** o **Por vela**). Cambia la **Vista** entre **Gráfico** y **Tabla**. Pulsa una columna para abrir sus vuelos en el libro de vuelo.

## Vista de térmicas

Entra en **/cockpit?view=thermaling** para ver tus estadísticas de ascenso en todas las térmicas de los vuelos filtrados: **Ascenso mediano**, **Mejor ascenso**, **Ganancia mediana**, **Térmicas/h**, **Tiempo en térmica**, tiempo y radio de giro, y **Remontadas desde abajo**. Los gráficos temporada a temporada se agrupan en **Eficiencia**, **Volumen**, **Técnica** y **Dominio**.

## Vista de fases

Entra en **/cockpit?view=phases** para ver cómo se reparte tu tiempo de vuelo entre **Térmica**, **Búsqueda**, **Planeo** y **Planeo neutro**, con tu **Fineza mediana**, tu **Velocidad de planeo mediana** y tus **Giros / min**, temporada a temporada.

## Vista por mes

Entra en **/cockpit?view=month** para ver las estadísticas mensuales.

### Desglose mensual

- **Meses más activos**: tus meses con más actividad, con los **Vuelos totales** de todos los años, tu **Año más activo** y la **Actividad por año**
- **Análisis visual**: **Duración**, **Número** y **Puntuación z** mensuales, por año, en barras **Agrupado** o **Apilado**
- **Desglose mensual por año**: una tabla de tus vuelos por mes y año

### Patrones estacionales

Detecta patrones:
- **¿Qué meses vuelas más?**
- **¿Cuándo son más fuertes las condiciones térmicas?**
- **¿Cómo cambia tu forma de volar a lo largo del año?**

### Casos de uso

- **Planifica tu temporada**: mira cuándo sueles volar mejor
- **Sigue tu regularidad**: ¿cuántos meses al año estás activo?
- **Identifica tu temporada alta**: ¿cuándo acumulas más tiempo de vuelo?

## Vista por temporada (año)

Entra en **/cockpit?view=season** para ver las estadísticas anuales.

### Comparación año a año

Para cada temporada (año), la tabla muestra:
- **Vuelos**
- **Horas totales**
- **Media/vuelo** (horas por vuelo)
- **Puntuación z** del tiempo de vuelo medio

El gráfico de arriba te permite comparar las temporadas por **Duración**, **Número** o **Puntuación z**.

### Seguimiento del progreso

Compara años para ver:
- ¿Vuelas más?
- ¿Son tus vuelos cada vez más largos?
- ¿Cómo se comparan los distintos años?

### Casos de uso

- **Sigue tu progreso a largo plazo**
- **Compara años distintos**
- **Fíjate objetivos anuales**

## Vista por vela

Entra en **/cockpit?view=glider** para comparar tus velas.

### Estadísticas por vela

Para cada vela de tu libro de vuelo:
- **Vuelos**
- **Horas totales**
- **Media/vuelo** (horas por vuelo)
- **Puntuación z** del tiempo de vuelo medio

### Comparar velas

Responde a preguntas como:
- ¿Con qué vela me mantengo más tiempo en el aire?
- ¿Cómo se comparan mis distintas velas?
- ¿Qué vela vuelo más a menudo?

### Casos de uso

- **Decisiones de material**: elegir tu próxima vela
- **Comparación de rendimiento**: compara distintas clases de vela
- **Especialización**: mira qué vela funciona mejor en cada tipo de condiciones

## Vista por despegue

Entra en **/cockpit?view=takeoff** para analizar tu rendimiento por zona de vuelo.

### Estadísticas por zona de vuelo

Para cada despegue, una tabla ordenable muestra:
- **Vuelos** desde ese despegue
- **Horas totales**
- **Media/vuelo** (horas por vuelo)
- **Puntuación z**: detección estadística de valores atípicos (consulta la [Guía de la puntuación z para pilotos](/doc/z-score-pilot-guide))

## Vista por país

Entra en **/cockpit?view=country** para ver las estadísticas por países.

### Estadísticas por país

Para cada país en el que has volado:
- **Vuelos**
- **Horas totales**
- **Media/vuelo** (horas por vuelo)
- **Puntuación z** del tiempo de vuelo medio

## Vista CIVL

Entra en **/cockpit?view=civl** para ver tu clasificación CIVL (mundial, europea y nacional) y su historial. Antes, añade tu ID CIVL en los ajustes de tu perfil.

## Vista de mapa

Entra en **/cockpit?view=map** para ver en un mapa todos los despegues desde los que has volado, con el número de vuelos de cada uno.

## Consejos y buenas prácticas

### Construye tu base de datos

- **Sube todos tus vuelos**: más datos = mejores estadísticas
- **Vuelos antiguos**: sube tus viejos archivos IGC para tener una imagen completa
- **Regularidad**: volar con regularidad da mejores tendencias

### Usa los filtros con estrategia

- **Empieza a lo grande**: mira primero los patrones generales
- **Luego afina**: aplica filtros para preguntas concretas
- **Compara lo comparable**: usa los mismos filtros al comparar

### Entiende el contexto

Las estadísticas son potentes, pero ten en cuenta:
- **Progresión técnica**: mejoras con el tiempo
- **Cambios de material**: las velas nuevas influyen en el rendimiento
- **Condiciones**: la meteo varía de una temporada a otra
- **Tamaño de la muestra**: 2 vuelos frente a 200 vuelos (¿cuál es más fiable?)

### Fíjate objetivos

Usa las estadísticas para:
- **Seguir tu progreso**: compara con temporadas anteriores
- **Ponerte retos**: supera tus récords personales
- **Planificar mejoras**: identifica los aspectos a trabajar
