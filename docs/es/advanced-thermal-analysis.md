---
title: Análisis avanzado de térmicas
description: Análisis a fondo de cada térmica que trabajaste, el centrado, la tasa de ascenso y la eficiencia, puntuados vuelo a vuelo
category: Thermal Analysis
order: 1
---

¿Alguna vez te has preguntado si eres un genio de las térmicas o si simplemente tienes suerte? La pestaña **Térmicas** de cada vuelo es tu compañero de debrief: desglosa cada ascenso que trabajaste, vuelta a vuelta.

## ¿Qué es esto?

Es un analizador post-vuelo que observa cada movimiento que hiciste en térmica. No se queda en «subiste 500 m». Mira *cómo* subiste: si buscabas el núcleo como un profesional o te paseabas por los bordes.

Cuando subes un vuelo, We-Fly detecta cada térmica que trabajaste, le da a cada una una puntuación de calidad sobre 100 y prepara un desglose detallado. Piensa en ello como un instructor revisando tu track y tu traza de vario, ascenso a ascenso. ¿Te pica la curiosidad por saber cómo se reconoce un ascenso? Mira [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings).

Abre cualquier vuelo y elige la pestaña **Térmicas**. El número junto al nombre de la pestaña indica cuántas térmicas se encontraron.

## La vista principal

La pestaña se lee de arriba abajo:

1. Una franja de resumen de todo el vuelo
2. El gráfico **Vario frente a radio de giro**
3. Filtros y una línea de tiempo para elegir una térmica
4. El visor de la térmica seleccionada: mapa o vista 3D a un lado, detalles al otro
5. El gráfico **Tasa de ascenso por altitud y hora**

### Franja de resumen del vuelo

La vista de pájaro de tu día:

- **Térmicas**: cuántos ascensos pasaron el corte
- **Mejor**: la puntuación de calidad más alta del vuelo, con el número de la térmica y su etiqueta de calidad
- **Ganancia**: toda la altura que ganaste en térmica
- **Ascenso medio**: tu tasa de ascenso media en todas las térmicas
- **Calidad**: la puntuación de calidad media, con la mediana debajo

### Vario frente a radio de giro

Cada vuelta completa que hiciste se convierte en un punto: su radio en el eje horizontal y la tasa de ascenso que te dio en el vertical. El fondo está dividido en zonas etiquetadas **arriesgado**, **ideal**, **ok** y **cerrar**, de los giros muy cerrados a la izquierda a los muy abiertos a la derecha. Si la mayoría de tus mejores puntos caen en la zona **cerrar**, ya sabes qué trabajar en el próximo vuelo.

### Elegir una térmica

Encima de la línea de tiempo hay una fila de filtros, cada uno con el número de térmicas que incluye:

- **Todas**: todas las térmicas
- **Mejores 5**: los cinco ascensos más fuertes por tasa de ascenso media
- **Bajo la mediana**: térmicas con una tasa de ascenso por debajo de la mediana del vuelo
- **Con deriva**: térmicas en las que derivaste más de 30 m por cada 100 m ganados (solo se tienen en cuenta ascensos de 50 m o más)

Debajo de los filtros, la línea de tiempo coloca cada térmica según la hora real del vuelo. El color de cada punto es su calidad y su tamaño es la altura ganada, así que «esa grande de la una y media» es fácil de encontrar. Haz clic en un punto para abrir esa térmica en el visor.

La térmica seleccionada forma parte de la dirección de la página, así que puedes compartir un enlace directo a «Térmica n.º 7».

### El visor de térmicas

La barra de título muestra **Térmica n.º N**, su etiqueta de calidad, la hora de inicio, la altura ganada y el ascenso medio. A la derecha cambias entre **Mapa 2D** y **Vista 3D**.

**En el mapa 2D:**

- **El track de la térmica seleccionada** se dibuja con puntos coloreados según el vario: verde para ascenso fuerte (más de 3 m/s), amarillo para ascenso de hasta 3 m/s, rojo para descendencia
- Los marcadores **Punto de entrada** y **Punto de salida** muestran dónde empezó y terminó el ascenso
- **El núcleo** de cada térmica es un marcador con un anillo discontinuo. El de la seleccionada es rojo; los demás, rosa claro como referencia. Pasa el cursor sobre un núcleo para ver su intensidad
- **Posición actual** es el marcador azul claro que se mueve durante la reproducción

**En la vista 3D**, el mismo ascenso se dibuja como una espiral que puedes girar, con una leyenda para **Ascendencia fuerte**, **Ascendencia débil**, **Descendencia**, **Núcleo de la térmica**, **Altitud de salida** y **Posición actual**.

## Reproducción animada

Debajo del mapa o de la vista 3D está la barra de reproducción:

- **Reproducir** / **Pausa**: repite la térmica punto a punto
- La flecha circular: vuelve al primer punto
- Las flechas de fotograma anterior y siguiente: recorre el ascenso punto GPS a punto GPS
- Contador de **fotogramas**: dónde estás dentro de la térmica (por ejemplo 42/156)
- Hora, altitud y vario en el punto actual
- El botón de diana: **Centrar el mapa en esta térmica**, muy útil después de haberte movido por el mapa

Avanzar fotograma a fotograma es la mejor forma de ver el momento exacto en que encontraste el núcleo, o en que lo perdiste.

## Detalles de la térmica

Junto al visor (debajo, en el móvil) está tu informe de entrenamiento. Arriba, una puntuación de calidad grande con su etiqueta y dos lecturas rápidas: **neto** (ascenso neto, tu ascenso medio de la entrada a la salida) y **cen** (centrado).

Debajo, los detalles están agrupados en secciones plegables. Se abre una cada vez y, plegadas, cada una muestra un resumen de una línea, así puedes repasar toda la historia sin hacer scroll.

#### Ascenso

- **Ganancia**: altura total ganada
- **Media**: tasa de ascenso media
- **Máx.**: mejor ascenso, suavizado en 5 segundos (debajo se muestra el pico bruto de un solo punto)
- **Mín.**: el momento más flojo, normalmente a la entrada o cuando te saliste del núcleo
- **Variab.**: cuánto varió la tasa de ascenso. Baja indica una térmica suave; alta, una térmica brusca o turbulenta

#### Núcleo

- **Intensidad**: ascenso medio en el núcleo, tu punto dulce
- **T. centrado**: cuánto tardaste en llegar al núcleo desde que empezó la térmica. Cuanto menos, mejor
- **Tamaño**: el radio de ascendencia del núcleo
- **Dist. media**: a qué distancia del núcleo giraste, de media
- **Centrado**: lo cerca que te mantuviste del núcleo, en porcentaje. Girar al radio propio del núcleo da un 100 %

#### Dinámica de giro

- **Sentido**: izquierda o derecha (casi todos los pilotos tienen un lado favorito, sin juzgar)
- **Vueltas**: número de vueltas completas
- **Ritmo**: velocidad de giro media en grados por segundo
- **Inclinación**: estimada a partir del tamaño y el tiempo de tus vueltas, con la velocidad aire implícita debajo
- **Tiempo por vuelta** y **Radio de giro**: la dispersión de tus vueltas, con tiempo mínimo, mediano y máximo, y radio en el percentil 25, la mediana y el percentil 75

#### Deriva y viento

- **Velocidad del viento**: estimada según cómo derivaron tus vueltas
- **Dist. deriva**: cuánto te llevó la térmica mientras subías
- **Dirección**: de dónde venía el viento, con una brújula. La flecha apunta hacia donde soplaba el viento y la etiqueta indica de dónde venía, como en una previsión

#### Hora

**Inicio**, **Fin** y **Duración** del ascenso. Útil para cuadrarlo con tus propias notas.

#### Desglose de la puntuación

Muestra cómo se construyó la puntuación de calidad: una barra por factor (**Ascenso**, **Ascenso neto**, **Centrado**, **Regularidad** y **Sostenido**), su peso, tu valor real y los puntos que aportó. El enlace **¿Cómo se calcula?** te lleva a la fórmula completa.

#### Recomendaciones

A partir de los números de arriba, recibes comentarios concretos sobre este ascenso, por ejemplo:

- Notas positivas sobre fondo verde: «Gran entrada al núcleo: encontraste la ascendencia más fuerte en 12 s.»
- Sugerencias sobre fondo ámbar: «Entrada lenta al núcleo: … Prueba con vueltas iniciales más abiertas para notar el gradiente.»

Los consejos se basan en las mediciones de esta térmica (tamaño del núcleo, deriva, inclinación, variabilidad), no en recomendaciones genéricas. Para un resumen de todo el vuelo, mira el panel **Consejos** en la pestaña **Resumen** del vuelo.

## Tasa de ascenso por altitud y hora

Al final de la pestaña, cada térmica se coloca según la hora del día y la altitud, coloreada por tasa de ascenso. Cambia la referencia de altura entre **s. n. m.** y **AGL** (sobre el despegue). La línea discontinua es el techo operativo del día; si se divide en dos escalones, el techo de la mañana y el de la tarde fueron distintos. Haz clic en cualquier punto para volver arriba a esa térmica en el visor.

## La puntuación de calidad, explicada

La puntuación de calidad no es solo «buena tasa de ascenso = puntuación alta». Es una nota sobre 100 que combina cinco factores:

1. **Ascenso**: lo fuerte que fue la ascendencia en su mejor momento
2. **Ascenso neto**: altura ganada respecto al tiempo pasado en la térmica, que el viento no altera
3. **Centrado**: lo cerca que te mantuviste del núcleo
4. **Regularidad**: lo constante que fue el ascenso
5. **Sostenido**: si de verdad te quedaste girando o solo la atravesaste

Una térmica potente en la que anduviste dando tumbos puede puntuar menos que una moderada que trabajaste a la perfección. Se trata de técnica, no solo de suerte.

**Etiquetas de calidad:**

| Puntuación | Etiqueta |
|---|---|
| 74 o más | Excepcional |
| De 68 a 73 | Excelente |
| De 63 a 67 | Buena |
| De 58 a 62 | Regular |
| Menos de 58 | Floja |

Estos rangos están calibrados con vuelos reales en We-Fly: una térmica típica se queda a mitad de los 60. La fórmula completa, con un ejemplo resuelto, está en [La puntuación global de térmica, explicada](/doc/overall-thermal-score).

## Patrones habituales que puedes notar

**Mucha deriva, poco centrado**: puede que entres demasiado abierto o que no cierres el giro lo bastante rápido al encontrar ascendencia.

**Buen tiempo de centrado pero poco ascenso neto**: quizá la térmica era floja, o diste vueltas fuera de ella después de encontrar el núcleo. ¡No siempre es culpa tuya!

**Variabilidad alta**: puede deberse a las condiciones (un día movido) o a una inclinación irregular. Las recomendaciones intentan distinguir ambos casos mirando cuánto cambió tu radio de giro.

**Entrada rápida al núcleo en una térmica y lenta en otra**: revisa tu técnica de entrada. ¿Entraste con viento en contra o con viento de cola? ¿Te pasaste del núcleo?

## Cuándo usar esta herramienta

- **Debrief post-vuelo**: entiende qué funcionó y qué no
- **Preparación de competición**: analiza tu técnica en térmica bajo presión
- **Comparar condiciones**: mira cómo varía la calidad de las térmicas según la hora, la zona de vuelo o la meteo
- **Seguir tu progreso**: revisa vuelos de distintos meses para ver tu evolución
- **Antes de la próxima cerveza**: demuestra a tus colegas que *sí* centraste aquella térmica monstruosa (¡con pruebas!)

## Consejos para un mejor análisis

1. **Unos datos GPS limpios ayudan**: una señal GPS débil da un análisis menos preciso, y un registrador que grabe cada segundo da los mejores resultados
2. **Compara térmicas parecidas**: compara la técnica en condiciones similares para sacar conclusiones útiles
3. **No te obsesiones con un solo vuelo**: las tendencias a lo largo de muchos vuelos importan más que una térmica perfecta
4. **El viento cuenta**: una nota «Regular» en un día de viento puede ser mejor vuelo que un «Excelente» con aire en calma

## Lo que esta herramienta no hace

- **Predecir térmicas**: es análisis, no previsión
- **Juzgar tus decisiones**: ¿debías coger esa térmica a las 11 o seguir adelante? Sigue siendo cosa tuya
- **Sustituir la experiencia**: la herramienta muestra datos, pero aprender a *sentir* las térmicas sigue costando horas de vuelo

## En resumen

Esta herramienta no te convertirá en mejor piloto de la noche a la mañana, pero te muestra *exactamente* lo que haces en térmica. Tanto si quieres recortar tu tiempo de centrado como si solo te pica la curiosidad por saber por qué un ascenso se sintió distinto, la pestaña **Térmicas** te cubre.

Ahora sal a volar, encuentra unas cuantas térmicas y vuelve para ver si eres tan bueno como crees.

---

Ver también: [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings) | [La puntuación global de térmica, explicada](/doc/overall-thermal-score)
