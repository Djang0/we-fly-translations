---
title: "Análisis avanzado de térmicas"
description: "Repaso a fondo de cada térmica que trabajaste: centrado, tasa de ascenso y eficiencia puntuados vuelo a vuelo"
category: Thermal Analysis
order: 1
---

¿Alguna vez te has preguntado si eres un genio de las térmicas o si simplemente tienes suerte? La pestaña **Térmicas** de cada vuelo es tu compañera de debriefing personal: desmenuza cada ascenso que trabajaste, vuelta a vuelta.

## ¿Qué es esto?

Es un analizador posvuelo que observa cada movimiento que hiciste en térmica. No se queda en «subiste 500 m». Mira *cómo* subiste: si buscabas el núcleo como un profesional o dabas vueltas por los bordes como un turista.

Cuando subes un vuelo, We-Fly detecta cada térmica que trabajaste, le da a cada una una puntuación de calidad sobre 100 y prepara un desglose detallado. Es como tener un instructor revisando tu track y la traza de tu variómetro, ascenso a ascenso. ¿Te pica la curiosidad por saber cómo se reconoce un ascenso? Mira [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings).

Abre cualquier vuelo y elige la pestaña **Térmicas**. El número junto al nombre de la pestaña es la cantidad de térmicas encontradas.

## La vista principal

La pestaña se lee de arriba abajo:

1. Una franja de resumen de todo el vuelo
2. El gráfico **Vario frente a radio de giro**
3. Chips de filtro y una línea de tiempo para elegir una térmica
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

Cada vuelta completa que diste se convierte en un punto: su radio en el eje horizontal y la tasa de ascenso que te dio en el vertical. El fondo está dividido en zonas etiquetadas **arriesgado**, **ideal**, **ok** y **cerrar**, de los giros muy cerrados a la izquierda a los más abiertos a la derecha. Si la mayoría de tus mejores puntos caen en la zona **cerrar**, ya sabes qué trabajar en el próximo vuelo.

### Elegir una térmica

Encima de la línea de tiempo hay una fila de chips de filtro, y cada uno muestra cuántas térmicas le corresponden:

- **Todas**: todas las térmicas
- **Mejores 5**: los cinco ascensos más fuertes por tasa de ascenso media
- **Bajo la mediana**: térmicas con una tasa de ascenso por debajo de la mediana del vuelo
- **Con deriva**: térmicas en las que derivaste más de 30 m por cada 100 m ganados (solo cuentan los ascensos de 50 m o más)

Debajo de los chips, la línea de tiempo coloca cada térmica según el reloj real del vuelo. El color de cada punto es su calidad y su tamaño, la altura ganada, así que «aquella grande hacia la una y media» se encuentra enseguida. Haz clic en un punto para abrir esa térmica en el visor.

La térmica seleccionada forma parte de la dirección de la página, así que puedes compartir un enlace directo a la «Térmica n.º 7».

### El visor de térmicas

La barra de título muestra **Térmica n.º N**, su etiqueta de calidad, la hora de inicio, la altura ganada y el ascenso medio. A la derecha cambias entre **Mapa 2D** y **Vista 3D**.

**En el mapa 2D:**

- **El track de la térmica seleccionada** se dibuja con puntos coloreados según el vario: verde para ascenso fuerte (más de 3 m/s), amarillo para ascenso de hasta 3 m/s, rojo para descendencia
- Los marcadores **Punto de entrada** y **Punto de salida** indican dónde empezó y dónde terminó el ascenso
- **El núcleo** de cada térmica es un marcador con un anillo discontinuo. El de la seleccionada es rojo; los demás aparecen en rosa difuminado para dar contexto. Pasa el ratón por un núcleo para ver su intensidad
- **Posición actual** es el marcador azul claro que se mueve durante la reproducción

**En la vista 3D**, el mismo ascenso se dibuja como una espiral que puedes girar, con una leyenda para **Ascendencia fuerte**, **Ascendencia débil**, **Descendencia**, **Núcleo de la térmica**, **Altitud de salida** y **Posición actual**.

## Reproducción animada

Bajo el mapa o la vista 3D está la barra de reproducción:

- **Reproducir** / **Pausa**: repite la térmica punto a punto
- La flecha circular: vuelta al primer punto
- Las flechas de fotograma anterior y siguiente: recorre el ascenso punto GPS a punto GPS
- Contador de **Fotograma**: en qué punto de la térmica estás (por ejemplo, 42/156)
- Hora, altitud y vario en el punto actual
- El botón de la diana: **Centrar el mapa en esta térmica**, muy útil después de haber estado moviendo el mapa

Avanzar fotograma a fotograma es la mejor forma de ver el momento exacto en que encontraste el núcleo, o en que lo perdiste.

## Detalles de la térmica

Junto al visor (debajo, en el móvil) está tu informe de coaching. Arriba, una gran puntuación de calidad con su etiqueta, más dos lecturas rápidas: **efic** (eficiencia) y **cen** (centrado).

Debajo, los detalles están plegados en secciones. Solo se abre una a la vez, y cada una muestra una vista previa de una línea mientras está plegada, así que puedes repasar toda la historia sin desplazarte.

#### Ascenso

- **Ganancia**: altura total ganada
- **Medio**: tasa de ascenso media
- **Máx.**: mejor ascenso, suavizado sobre 5 segundos (el pico bruto de un solo punto aparece debajo)
- **Mín.**: el momento más flojo, normalmente al entrar o cuando te saliste del núcleo
- **Variab.**: cuánto varió la tasa de ascenso. Baja significa una térmica suave; alta, una térmica a golpes o turbulenta

#### Núcleo

- **Intensidad**: ascenso medio en el núcleo, tu punto dulce
- **T. centrado**: cuánto tardaste en llegar al núcleo desde que empezó la térmica. Cuanto menos, mejor
- **Tamaño**: el radio de ascendencia del núcleo
- **Dist. media**: a qué distancia media del núcleo giraste
- **Centrado**: lo cerca que te mantuviste del núcleo, en porcentaje. Girar al propio radio del núcleo puntúa 100 %

#### Dinámica de giro

- **Sentido**: izquierda o derecha (casi todos los pilotos tienen un lado favorito, sin juzgar)
- **Vueltas**: número de vueltas completas
- **Ritmo**: velocidad de giro media en grados por segundo
- **Inclinación**: estimada a partir del tamaño y la duración de tus vueltas, con la velocidad aire implícita debajo
- **Tiempo por vuelta** y **Radio de giro**: la dispersión de tus vueltas, como tiempo mínimo, mediano y máximo, y radio en el percentil 25, la mediana y el percentil 75

#### Deriva y viento

- **Velocidad del viento**: estimada a partir de cómo derivaron tus vueltas
- **Dist. deriva**: cuánto te llevó la térmica mientras subías
- **Dirección**: de dónde venía el viento, con una brújula. La flecha de la brújula apunta hacia donde soplaba el viento, y la etiqueta indica la dirección «desde», como en una previsión

#### Tiempo

**Inicio**, **Fin** y **Duración** del ascenso. Útil para cruzarlo con tus propias notas.

#### Desglose de la puntuación

Muestra cómo se construyó la puntuación de calidad: una barra por factor (**Ascenso**, **Eficiencia**, **Centrado**, **Regularidad** y **Sostenido**), su peso, tu valor real y los puntos que aportó. El enlace **¿Cómo se calcula?** te lleva a la fórmula completa.

#### Recomendaciones

A partir de las cifras anteriores, recibes comentarios concretos sobre este ascenso, por ejemplo:

- Notas positivas sobre fondo verde: «Gran entrada al núcleo: encontraste la ascendencia más fuerte en 12 s.»
- Sugerencias sobre fondo ámbar: «Entrada lenta al núcleo: … Prueba con giros iniciales más abiertos para notar el gradiente.»

Los consejos salen de las mediciones de esta térmica (tamaño del núcleo, deriva, inclinación, variabilidad), no de consejos genéricos. Para un resumen de todo el vuelo, mira el panel **Consejos** en la pestaña **Resumen** del vuelo.

## Tasa de ascenso por altitud y hora

Al final de la pestaña, cada térmica se coloca según la hora del día y la altitud, coloreada por tasa de ascenso. Cambia la referencia de altura entre **s. n. m.** y **AGL** (sobre el despegue). La línea discontinua es el techo operativo del día; si se parte en dos escalones, el techo de la mañana y el de la tarde fueron distintos. Haz clic en cualquier punto para volver a esa térmica en el visor.

## La puntuación de calidad, explicada

La puntuación de calidad no es simplemente «buena tasa de ascenso = puntuación alta». Es una nota sobre 100 que combina cinco factores:

1. **Ascenso**: lo fuerte que fue la ascendencia en su mejor momento
2. **Eficiencia**: altura ganada frente a distancia derivada
3. **Centrado**: lo cerca que te mantuviste del núcleo
4. **Regularidad**: lo estable que fue el ascenso
5. **Sostenido**: si de verdad te quedaste girando, en lugar de solo atravesarla

Una térmica potente en la que diste vueltas sin rumbo puede puntuar menos que una moderada que trabajaste a la perfección. Va de técnica, no solo de suerte.

**Etiquetas de calidad:**

| Puntuación | Etiqueta |
|---|---|
| 80 o más | Sobresaliente |
| De 73 a 79 | Excelente |
| De 66 a 72 | Buena |
| De 60 a 65 | Regular |
| Menos de 60 | Floja |

Estos rangos están calibrados con vuelos reales de We-Fly: una térmica típica se queda a mitad de los 60. La fórmula completa, con un ejemplo resuelto, está en [La puntuación global de térmica, explicada](/doc/overall-thermal-score).

## Patrones habituales que puedes ver

**Mucha deriva, poco centrado**: quizá entras demasiado abierto o no cierras el giro lo bastante rápido cuando encuentras ascendencia.

**Buen tiempo de centrado pero poca eficiencia**: puede que la térmica en sí fuera débil o que el viento fuera fuerte. ¡No siempre es culpa tuya!

**Mucha variabilidad**: pueden ser las condiciones (día movido) o una inclinación irregular. Las recomendaciones intentan distinguir una cosa de la otra mirando cuánto cambió el radio de tus vueltas.

**Entrada rápida al núcleo en una térmica y lenta en otra**: fíjate en tu técnica de entrada. ¿Entraste por barlovento o por sotavento? ¿Te pasaste el núcleo?

## Cuándo usar esta herramienta

- **Debriefing posvuelo**: entiende qué funcionó y qué no
- **Preparación para competición**: analiza tu técnica de centrado bajo presión
- **Comparar condiciones**: mira cómo varía la calidad de las térmicas según la hora, la zona de vuelo o la meteo
- **Seguir tu progreso**: mira vuelos de distintos meses para ver cómo evolucionas
- **Antes de la siguiente cerveza**: demuéstrales a tus colegas que *sí* centraste aquella térmica monstruosa (¡pruebas!)

## Consejos para un mejor análisis

1. **Unos datos GPS limpios ayudan**: una señal GPS débil da un análisis menos preciso, y un registrador que graba cada segundo da los mejores resultados
2. **Compara térmicas parecidas**: compara técnicas en condiciones similares para sacar conclusiones con sentido
3. **No te obsesiones con un solo vuelo**: las tendencias en muchos vuelos importan más que una térmica perfecta
4. **El contexto del viento importa**: una puntuación «Regular» en un día de viento puede ser mejor vuelo que un «Excelente» en aire en calma

## Lo que esta herramienta no hace

- **Predecir térmicas futuras**: es análisis, no previsión
- **Juzgar tus decisiones**: ¿deberías haber cogido ese ascenso a las 11 o seguir adelante? Sigue siendo cosa tuya
- **Sustituir la experiencia**: la herramienta te muestra datos, pero aprender a *sentir* las térmicas sigue requiriendo horas de vuelo

## En resumen

Esta herramienta no te convertirá en mejor piloto de la noche a la mañana, pero te muestra *exactamente* lo que haces en térmica. Tanto si quieres recortar tu tiempo de centrado como si solo tienes curiosidad por saber por qué un ascenso se sintió distinto, la pestaña **Térmicas** te cubre las espaldas.

Ahora ve a volar, encuentra unas cuantas térmicas y vuelve para ver si eres tan bueno como crees.

---

Ver también: [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings) | [La puntuación global de térmica, explicada](/doc/overall-thermal-score)
