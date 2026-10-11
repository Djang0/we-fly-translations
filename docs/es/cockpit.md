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

El Cockpit tiene seis vistas distintas, y cada una aporta su propio análisis:

1. **Resumen**: estadísticas y totales de los datos filtrados
2. **Vela**: rendimiento desglosado por vela
3. **Temporada**: comparación año a año
4. **País**: estadísticas de vuelo por países
5. **Despegue**: estadísticas por zona de vuelo con puntuaciones de rendimiento
6. **Mes**: desglose mensual y patrones estacionales

### Navegación

- Usa las pestañas principales para cambiar de vista
- Cada vista se limita a los [datos filtrados](./data-filters.md)

## Estadísticas del resumen

La página de resumen del [Cockpit](/cockpit) muestra las estadísticas de vuelo de los [datos filtrados](./data-filters.md).

### Totales de vuelo

#### Vuelos totales
- **Definición**: número de todos los vuelos de tu libro de vuelo

#### Tiempo de vuelo total
- **Definición**: suma de la duración de todos los vuelos
- **Unidad**: horas y minutos
- **Cálculo**: suma de todos los (hora de aterrizaje menos hora de despegue)

#### Tiempo total en térmica
- **Definición**: tiempo total pasado girando en térmicas
- **Unidad**: horas y minutos
- **Desglose**: separado en giros a la izquierda y a la derecha

#### Tiempo total de planeo
- **Definición**: tiempo total en vuelo recto
- **Unidad**: horas y minutos
- **Interpretación**: más tiempo de planeo = vuelo de distancia más eficiente

### Distancia y puntuación

Todas las distancias y puntuaciones de cross se calculan con la biblioteca de código abierto [igc-xc-score
](https://github.com/mmomtchev/igc-xc-score), creada y mantenida por [Momtchil Momtchev](https://github.com/mmomtchev).

#### Distancia XC total
- **Definición**: suma de todas las distancias de cross puntuadas
- **Unidad**: kilómetros
- **Uso**: sigue tu logro total en distancia

#### Puntos XC totales
- **Definición**: suma de todas las puntuaciones de XContest
- **Incluye**: todos los multiplicadores (distancia libre, triángulos)
- **Uso**: compara tu rendimiento en distancia a lo largo del tiempo

#### Longitud total del track
- **Definición**: suma de todas las distancias de los tracks GPS
- **Unidad**: kilómetros
- **Siempre > Distancia XC total**: incluye todos los giros y desvíos

### Récords personales

#### Distancia XC máxima
- **Definición**: el vuelo de distancia puntuado más largo
- **Muestra**: distancia y fecha
- **Logro**: ¡tu récord personal de distancia!

#### Puntos XC máximos
- **Definición**: la puntuación de XContest más alta en un solo vuelo
- **Muestra**: puntos y fecha
- **Nota**: puede no coincidir con la distancia máxima (por los multiplicadores de los triángulos)

#### Altitud máx.
- **Definición**: la altitud más alta alcanzada en todos los vuelos
- **Unidad**: metros sobre el nivel del mar (s. n. m.)
- **Muestra**: altitud

#### Ganancia de altura máx.
- **Definición**: la mayor ganancia de altitud en un solo vuelo
- **Unidad**: metros
- **Cálculo**: altitud máxima - altitud mínima

#### Térmica más fuerte
- **Definición**: la mejor tasa de ascenso que has encontrado
- **Unidad**: metros por segundo (m/s)
- **Muestra**: tasa de ascenso

#### Velocidad máx.
- **Definición**: la velocidad suelo más alta registrada
- **Unidad**: kilómetros por hora (km/h)
- **Nota**: incluye el efecto del viento

#### Duración máxima
- **Definición**: el tiempo de vuelo más largo
- **Unidad**: horas y minutos
- **Muestra**: duración y fecha

## Vista por mes

Entra en **/cockpit?view=month** para ver las estadísticas mensuales.

### Desglose mensual

Para cada mes con vuelos:
- Vuelos totales de ese mes
- Distancia total
- Puntos totales
- Métricas medias de vuelo

### Patrones estacionales

Detecta patrones:
- **¿Qué meses vuelas más?**
- **¿Cuándo son más fuertes las condiciones térmicas?**
- **¿Cómo cambia tu forma de volar a lo largo del año?**

### Casos de uso

- **Planifica tu temporada**: mira cuándo sueles volar mejor
- **Sigue tu regularidad**: ¿cuántos meses al año estás activo?
- **Identifica tu temporada alta**: ¿cuándo consigues tus mejores distancias?

## Vista por temporada (año)

Entra en **/cockpit?view=season** para ver las estadísticas anuales.

### Comparación año a año

Para cada temporada (año):
- Vuelos totales
- Distancia XC y puntos totales
- Métricas medias de vuelo
- Récords personales de ese año

### Seguimiento del progreso

Compara años para ver:
- ¿Vuelas más?
- ¿Aumentan tus distancias?
- ¿Cómo se comparan los distintos años?

### Casos de uso

- **Sigue tu progreso a largo plazo**
- **Compara años distintos**
- **Fíjate objetivos anuales**

## Vista por vela

Entra en **/cockpit?view=glider** para comparar el rendimiento de tus velas.

### Estadísticas por vela

Para cada vela de tu libro de vuelo:
- Número de vuelos
- Distancia y puntos totales
- Distancia XC media
- Duración media de vuelo
- Distancia máxima conseguida
- Tasas de ascenso medias

### Comparar velas

Responde a preguntas como:
- ¿Con qué vela rindo mejor en distancia?
- ¿Cómo se comparan mis distintas velas?
- ¿Qué vela vuelo más a menudo?

### Casos de uso

- **Decisiones de material**: elegir tu próxima vela
- **Comparación de rendimiento**: compara distintas clases de vela
- **Especialización**: mira qué vela funciona mejor en cada tipo de condiciones

## Vista por despegue

Entra en **/cockpit?view=takeoff** para analizar tu rendimiento por zona de vuelo.

### Estadísticas por zona de vuelo

Para cada despegue:
- Número de vuelos desde ese despegue
- Distancia XC total
- Distancia XC media
- Distancia máxima desde ese despegue
- **Puntuación de rendimiento (puntuación z)**: detección estadística de valores atípicos (consulta la [Guía de la puntuación z para pilotos](/doc/z-score-pilot-guide))

## Vista por país

Entra en **/cockpit/?view=country** para ver las estadísticas por países.

### Estadísticas por país

Para cada país en el que has volado:
- Número de vuelos
- Distancia XC total
- Métricas medias
- Mejores zonas de vuelo de ese país

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
