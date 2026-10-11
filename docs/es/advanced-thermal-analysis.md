---
title: "Análisis avanzado de térmicas"
description: "Repaso a fondo de cada térmica que trabajaste: centrado, tasa de ascenso y eficiencia puntuados vuelo a vuelo"
category: Thermal Analysis
order: 1
---

¿Alguna vez te has preguntado si eres un genio de las térmicas o si simplemente tienes suerte? Bienvenido al análisis avanzado de térmicas, tu compañero de debriefing personal que desmenuza cada giro que hiciste como un juez de competición con un doctorado en centrar térmicas.

## ¿Qué es esto?

Piensa en ello como un analizador posvuelo que observa cada movimiento que hiciste en térmica. No se limita a decirte «oye, subiste 500 m». Profundiza en *cómo* subiste, si buscabas el núcleo como un profesional o dabas vueltas como un turista.

La herramienta detecta automáticamente cada térmica que trabajaste durante el vuelo y le da a cada una una puntuación de calidad y un desglose detallado. Es como tener un instructor revisando las imágenes de tu GoPro, solo que analiza tracks GPS y datos del variómetro.

## La vista principal

Cuando abres el análisis, verás tres paneles principales:

### Panel izquierdo: resumen del vuelo y lista de térmicas

Arriba tienes la vista de pájaro:
- **Térmicas totales**: cuántas trabajaste (o *intentaste* trabajar)
- **Ganancia total**: toda la altura que fuiste rascando
- **Ascenso medio**: tu tasa de ascenso media en todas las térmicas
- **Calidad media**: puntuación global de calidad térmica (ahora llegamos a eso)

Debajo está tu lista de térmicas, todas las que cogiste, en orden cronológico. Cada tarjeta muestra:
- **Insignia de calidad**: va de «Regular» (ay) a «Excelente» (enséñame tus trucos)
- **Hora de inicio**: cuándo entraste en la térmica
- **Ganancia de altura**: cuánta altura te guardaste
- **Tasa de ascenso**: m/s medios en esa térmica

Haz clic en cualquier térmica para analizarla. El iconito de la diana restablece el zoom del mapa si has estado curioseando.

### Panel central: el mapa

Aquí es donde ocurre la magia. Verás:

**Tu track**: puntos GPS con código de colores que muestran tu trayectoria por la térmica
- 🟢 **Puntos verdes**: ascenso fuerte (>3 m/s), ¡encontraste el chollo!
- 🔵 **Puntos azules**: ascenso moderado (0-3 m/s), trabajándola
- 🔴 **Puntos rojos**: descendencia (<0 m/s), todos hemos pasado por ahí

**Térmica seleccionada**: resaltada en rojo con borde blanco. Es la que estás analizando ahora

**Otras térmicas**: en morado al 40 % de opacidad, para dar contexto de dónde más subiste

**Controles de animación**:
- ▶️ **Reproducir/Pausa**: mira la repetición de tu vuelo fotograma a fotograma
- 🔄 **Reiniciar**: vuelta al principio
- ⬅️➡️ **Navegación por fotogramas**: avanza punto GPS a punto GPS a mano (o usa las flechas del teclado; sí, también funciona con teclado)
- **Contador de fotogramas**: muestra exactamente en qué punto de la térmica estás (por ejemplo, «42/156»)

Debajo de los controles verás los datos en tiempo real del punto GPS actual:
- **Hora**: marca de tiempo exacta
- **Altitud**: altura actual
- **Vario**: velocidad vertical en ese momento

**Consejo pro**: usa las flechas del teclado para recorrer la térmica fotograma a fotograma. Genial para ver exactamente cuándo pillaste el núcleo.

### Panel derecho: detalles de la térmica

Este es tu informe de entrenamiento. Veamos cada sección:

#### Resumen de calidad
**Puntuación global**: un número compuesto (0-40) que tiene en cuenta varios factores:
- Eficiencia de la tasa de ascenso
- Lo bien que te mantuviste centrado
- Relación entre deriva y ascenso
- Regularidad de los giros

La barra de progreso muestra dónde quedas en la escala. ¿Sacas 25 o más de forma constante? Algo estás haciendo bien.

**Eficiencia**: qué porcentaje de tu tiempo en la térmica fue ascenso productivo de verdad. Los números bajos significan que pasaste tiempo dando vueltas o en descendencia.

#### Deriva y viento
**Distancia de deriva**: cuánto te llevó la térmica a sotavento mientras subías. Menos suele ser mejor (salvo que *quisieras* derivar).

**Velocidad del viento**: calculada a partir de tu deriva. Útil para entender las condiciones.

**Rosa del viento**: muestra visualmente la dirección del viento. La flecha apunta hacia *donde va* el viento (convención meteorológica, perdón, navegantes).

#### Rendimiento en ascenso
Los números en bruto:
- **Ganancia de altura**: metros totales ganados
- **Ascenso medio**: tu velocidad vertical media
- **Ascenso máximo**: la mejor tasa de ascenso que alcanzaste (normalmente cuando clavaste el núcleo)
- **Ascenso mínimo**: el peor momento (a menudo al entrar o cuando perdiste el núcleo)
- **Variabilidad**: lo regular que fue la ascendencia. Más baja = térmica suave, más alta = térmica brusca o turbulenta

#### Análisis del núcleo
Aquí se pone friki:

**Intensidad del núcleo**: la ascendencia sostenida más fuerte que encontraste. Es tu tasa de ascenso en el «punto dulce».

**Tiempo de centrado**: cuánto tardaste en encontrar el núcleo y quedarte en él después de entrar. Menos es mejor: significa que no perdiste tiempo dando vueltas por los bordes.

**Calidad del centrado**: porcentaje del tiempo pasado en ascendencia fuerte frente a ascendencia débil. Números altos = te quedaste en lo bueno.

#### Dinámica de giro
**Sentido**: izquierda o derecha (la mayoría de los pilotos tiene un lado favorito, sin juzgar)

**Vueltas**: cuántos giros completos hiciste

**Ritmo**: velocidad de giro media en grados por segundo. Demasiado lento = te sales derivando; demasiado rápido = quizá te pasas de inclinación

#### Información de tiempo
Solo las marcas de tiempo y la duración. Útil para cruzarlo con tus notas o con el registrador de competición.

#### Recomendaciones

Aquí la herramienta se pone charlatana. Según el análisis, recibirás comentarios personalizados como:
- 🟢 **Comentarios positivos** (fondo verde): lo que hiciste bien, «Excelente entrada al núcleo con muy poco tiempo de búsqueda»
- 🟡 **Sugerencias de mejora** (fondo ámbar): aspectos a trabajar, «Prueba a cerrar el radio de giro para reducir la deriva»

Las recomendaciones se generan a partir de métricas reales de rendimiento, no son consejos genéricos.

## Reproducción animada

La función de repetición mola bastante, la verdad. Dale a reproducir y mírate trabajando la térmica en tiempo real (bueno, acelerado). Puedes:

1. **Verla entera**: sigue toda la térmica desde la entrada hasta la salida
2. **Pausar y recorrer**: usa las flechas del teclado para pasar por los momentos interesantes
3. **Mirar las métricas**: la altitud, el vario y la hora se actualizan mientras avanzas por la térmica
4. **Comparar varias térmicas**: cambia de una térmica a otra para ver cómo varió tu técnica

**Atajos de teclado**:
- **←** Fotograma anterior
- **→** Fotograma siguiente

## La puntuación de calidad, explicada

La puntuación de calidad no es simplemente «buena tasa de ascenso = puntuación alta». Es una nota compuesta que tiene en cuenta:

1. **Eficiencia del ascenso**: ascenso real frente al máximo teórico
2. **Habilidad de centrado**: lo rápido que encontraste el núcleo y te quedaste en él
3. **Gestión de la deriva**: si minimizaste la deriva a sotavento
4. **Regularidad**: lo estable que fue tu giro

Una térmica de 5 m/s en la que diste vueltas sin rumbo puede puntuar menos que una de 2,5 m/s que trabajaste a la perfección. Va de técnica, no solo de suerte.

**Rangos de puntuación**:
- **25-40 (Excelente)**: estás que te sales. Centrado de nivel de competición.
- **15-25 (Buena)**: buen trabajo. Ganaste la altura sin perder demasiado tiempo.
- **0-15 (Regular)**: cumpliste, pero hay margen de mejora.

## Patrones habituales que puedes ver

**Mucha deriva, poca calidad de centrado**: quizá entras demasiado abierto o no cierras el giro lo bastante rápido cuando encuentras ascendencia.

**Buen tiempo de centrado pero poca eficiencia**: puede que la térmica en sí fuera débil o estuviera rota. ¡No siempre es culpa tuya!

**Mucha variabilidad**: pueden ser las condiciones (día movido) o una inclinación irregular. Revisa la regularidad de tu velocidad de giro.

**Entrada rápida al núcleo en una térmica y lenta en otra**: fíjate en tu técnica de entrada. ¿Entraste por barlovento o por sotavento? ¿Te pasaste el núcleo?

## Cuándo usar esta herramienta

- **Debriefing posvuelo**: entiende qué funcionó y qué no
- **Preparación para competición**: analiza tu técnica de centrado bajo presión
- **Comparar condiciones**: mira cómo varía la calidad de las térmicas según la hora, el lugar o la meteo
- **Seguir tu progreso**: analiza vuelos de distintos meses para ver cómo evoluciona tu técnica
- **Antes de la siguiente cerveza**: demuéstrales a tus colegas que *sí* centraste esa térmica de 6 m/s (¡pruebas!)

## Consejos para un mejor análisis

1. **Unos datos GPS limpios ayudan**: señal GPS débil = análisis menos preciso
2. **Compara térmicas parecidas**: compara técnicas en condiciones similares para sacar conclusiones con sentido
3. **No te obsesiones con un solo vuelo**: las tendencias en muchos vuelos importan más que una térmica perfecta
4. **El contexto del viento importa**: una puntuación «Regular» con 30 km/h de viento puede valer más que un «Excelente» en aire muerto

## Lo que esta herramienta no hace

- **Predecir térmicas futuras**: es análisis, no previsión (estamos en ello... es broma)
- **Juzgar tus decisiones vitales**: ¿deberías haber cogido esa térmica a las 11 o seguir adelante? Sigue siendo cosa tuya
- **Sustituir la experiencia**: la herramienta te muestra datos, pero aprender a *sentir* las térmicas sigue requiriendo horas de vuelo

## En resumen

Esta herramienta no te convertirá en mejor piloto de la noche a la mañana, pero te mostrará *exactamente* lo que haces en térmica. Tanto si quieres arañar segundos a tu tiempo de centrado como si solo tienes curiosidad por saber por qué aquella térmica se sintió distinta, el análisis avanzado de térmicas te cubre las espaldas.

Ahora ve a volar, pilla unas cuantas térmicas y vuelve para ver si eres tan bueno como crees.

---

Ver también: [Ajustes del análisis avanzado de térmicas](advanced-thermal-analysis-settings.md)
