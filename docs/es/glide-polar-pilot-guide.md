---
title: "Guía de la polar para pilotos"
description: "Cómo leer el gráfico de rendimiento en planeo (y lo que no te puede decir)"
category: Your Flights
order: 5
---

*O sea: cómo mirar una línea azul llena de curvas y averiguar si el trabajo duro lo hizo tu vela o la atmósfera.*

## ¿Pero qué demonios es este gráfico?

Has abierto la pestaña Vector vario, has pasado de largo las series temporales y ahora estás mirando una mancha azul con mala cara atravesada por un par de líneas. Bienvenido al gráfico **Rendimiento en planeo**: el intento de We-Fly de enseñarte lo que hizo de verdad tu vela a cada velocidad durante los tramos de planeo de tu vuelo.

**La versión corta:** es un gráfico de tu **vario (tasa de caída) frente a tu velocidad aire verdadera (TAS)**, limitado a los momentos en que estabas realmente planeando. La forma de las líneas es lo más parecido que te podemos dar a «la polar de tu vela en este día concreto, en este aire concreto, contigo en la silla».

**La versión honesta:** *no* es la polar del fabricante de tu vela. No puede serlo. No conocemos la resistencia de tu silla, no sabemos tu peso total en vuelo al gramo y desde luego no sabemos qué hizo la atmósfera entre tú y el suelo. Lo que *sí* sabemos es lo que grabó tu registrador, y eso es lo que mostramos, fielmente, con toda la dispersión y la incertidumbre intactas.

**Lo que los pilotos quieren saber de verdad:**
- «¿Cuál es mi mejor fineza con esta vela?»
- «¿A qué velocidad caigo menos?»
- «¿Cuánto de mi "planeo" fue en realidad ascendencia gratis de la atmósfera?»
- «¿Mi vela cumple su ficha técnica o el departamento de marketing se vino arriba?»

Este gráfico responde bastante bien a las tres primeras. La cuarta necesita unos cuantos vuelos más y una buena dosis de escepticismo (llegaremos a ello).

---

## ¿Y a mí qué me importa?

Si vuelas cross, el rendimiento en planeo es *lo* que convierte los buenos días de térmica en vuelos largos. Cae menos, planea más lejos, llega a la siguiente nube antes que tus colegas. El gráfico te da:

1. **Una prueba de realidad para tu vela**: compara lo observado con la polar publicada. Si la diferencia es enorme, algo falla (vela, peso, silla o atmósfera).
2. **Una pista de velocidad de vuelo**: mira dónde toca fondo la línea discontinua (tasa de caída mínima) y dónde es tangente a la recta de fineza más pendiente (mejor fineza).
3. **Una lectura honesta de la atmósfera**: la diferencia entre «lo que hice yo» y «lo que haría mi vela sola» es básicamente un termómetro de lo ascendente que estaba el aire.
4. **Una herramienta de debriefing**: después de un vuelo, ¿tenías la sensación de estar hundiéndote? El gráfico te dirá si la vela estaba trabajando de verdad o si simplemente el aire te estaba castigando.

---

## Anatomía del gráfico

Antes de buscarle significado, pongamos nombre a las partes. Imagina un gráfico con la TAS abajo (24-53 km/h en un vuelo de distancia típico) y el vario en el lateral (arriba sobre +0,5 m/s, abajo a menudo hasta -4 m/s).

### El eje X: velocidad aire verdadera (km/h)
TAS = lo rápido que te mueves a través de la masa de aire (no sobre el suelo, eso es la velocidad GPS). Tus sensores la miden directamente con un tubo de Pitot en el Vector Vario.

**Por qué se corta donde se corta:** el gráfico solo muestra los intervalos de TAS con **al menos 20 muestras en fase de planeo**. Si solo pasaste 5 segundos a fondo de acelerador, ese intervalo se descarta. El gráfico termina a propósito donde terminan los datos: nada de extrapolar, nada de curvas inventadas sobre el vacío.

### El eje Y: vario (m/s)
Cero es vuelo nivelado. Negativo es caer (donde pasas la mayor parte de los planeos). Positivo es subir, que sí, también pasa en las fases de «planeo» porque las térmicas son traicioneras.

### La banda azul sombreada: percentiles 10-90
En cada intervalo de 1 km/h de TAS, es la dispersión de los valores de vario que grabaste.

- **Banda ancha** = la atmósfera estaba revuelta (algunas descendencias, algunas ascendencias a la misma TAS)
- **Banda estrecha** = condiciones regulares, una lectura más fiable de tu vela

### La línea azul continua: vario mediano
El centro de los datos en cada TAS. Es **lo que hiciste de verdad, de media**, al planear a esa velocidad.

**La verdad traicionera:** en un buen día de distancia esta línea sale sospechosamente favorecedora, quizá -1 m/s a 40 km/h, lo que da una fineza de unos 11:1. Eso no es tu vela. Es tu vela **más toda la ascendencia gratis que atravesaste**. Ahora lo vemos.

### La línea discontinua azul oscuro: mediana en aire limpio
Es el vario mediano del **cuartil de netto más bajo** de cada intervalo de TAS: el 25 % de muestras en las que la atmósfera bajaba más (o subía menos). Es nuestra mejor estimación empírica de «lo que hacía la vela cuando el aire no te ayudaba».

**Mismo vuelo, historia muy distinta:** a 40 km/h esta línea puede estar en -3 m/s, lo que da una fineza más cerca de 3,7:1. Empinada. Honesta. Más parecida a lo que un fabricante imprimiría en la ficha técnica.

### Las celdas de dispersión (tenues, detrás de todo)
Cada celda (TAS, vario) se colorea según el **netto medio** (vario menos la caída supuesta de la vela):

- **Celdas azules**: volabas a través de aire descendente
- **Celdas melocotón/naranja**: volabas a través de aire ascendente
- **Tamaño de la burbuja**: cuántas muestras cayeron en esa celda

Es básicamente un mapa de calor de cómo te trató la atmósfera a cada velocidad. Bonito e informativo.

### Las isolíneas de fineza (rayos grises discontinuos en diagonal)
Son rayos desde el origen (0,0) con fineza constante, normalmente dibujados a **5:1, 8:1, 10:1, 12:1, 15:1**.

Como el gráfico empieza en TAS=24 (no en 0), el origen queda fuera de la pantalla abajo a la izquierda, y las isolíneas aparecen como diagonales discontinuas que suben de abajo a la izquierda hacia arriba a la derecha.

**Cómo leerlas:**
- Donde la **línea discontinua de aire limpio cruza una isolínea** → esa es la TAS a la que la vela consigue esa fineza en aire sin ascendencia.
- Donde una isolínea es **tangente** a la polar discontinua (la toca sin cruzarla) → esa es tu **mejor fineza en este vuelo**.

Ejemplo rápido: si la polar discontinua cruza el rayo de 5:1 a TAS=42 km/h, a 42 km/h en aire frío habrías planeado 5 km por cada km de altura perdida. Si el rayo de 8:1 apenas roza la curva discontinua a TAS=32 km/h, ese es tu punto de tangencia, tu mejor planeo del día, a esa velocidad.

### La línea de referencia Y=0 (discontinua, horizontal)
La frontera entre caer (debajo) y subir (encima). Por encima de esta línea, la atmósfera aportaba más ascendencia que la caída que generaba la vela. Útil para ver cuánto de tus «planeos» tenía en realidad sabor a térmica.

### Las dos tarjetas de métricas bajo el gráfico

**Mejor tasa de caída observada (mediana):** el intervalo de TAS donde el vario mediano fue menos negativo, es decir, donde caíste más despacio de media. Viene con el número de muestras, la dispersión 10-90 y el valor de aproximación en aire limpio a la misma TAS.

**Mejor fineza observada (mediana):** el intervalo de TAS con la fineza más alta (TAS en m/s dividida por el valor absoluto del vario mediano). Mismas estadísticas de apoyo.

---

## Cómo leerlo de verdad

Aquí empieza lo divertido. Hay dos lecturas en paralelo, las dos válidas, y cada una te cuenta algo distinto.

### Lectura 1: «¿Qué conseguí?»

Mira la **línea azul continua**. Es tu rendimiento real, la vela más lo que te regaló la atmósfera. En un vuelo de distancia típico:

- Vario mediano a 40 km/h: quizá **-1 m/s**
- Fineza implícita: ~**11:1**

Pinta genial, ¿verdad? Es porque muchas de tus muestras de «planeo» se tomaron en aire ascendente (chispazos de térmica en pleno planeo, dinámica de ladera, zonas de convergencia, ese misterioso +0,5 m/s que duró 90 segundos y te salvó el vuelo). No miente. Solo cuenta lo que pasó. Ese día sí hiciste una fineza media de 11:1, porque el aire te ayudó.

Esta es la línea a mirar cuando te preguntas **«¿cómo voy en este vuelo?»**.

### Lectura 2: «¿Qué hace mi vela sola?»

Mira la **línea discontinua**. Mismo vuelo, mismos datos, pero solo las muestras con el netto más bajo, aquellas en las que la atmósfera fue *menos* generosa. En ese mismo vuelo de distancia:

- Vario mediano en aire limpio a 40 km/h: quizá **-3 m/s**
- Fineza implícita: ~**3,7:1**

Bastante más empinada. Más cerca de la polar publicada por un fabricante (aunque no idéntica, mira la sección de límites). Esta es la línea a mirar cuando te preguntas **«¿qué rendimiento da mi vela de verdad?»**.

### Lectura 3 (la de regalo): «¿Cuánta ascendencia había?»

Toma la distancia entre la línea continua y la discontinua a cualquier TAS. Esa distancia es más o menos **cuánta ascendencia gratis te regaló la atmósfera de media** a esa velocidad.

- **Distancia grande** (la continua muy por encima de la discontinua): ibas montado en ascendencia durante la mayor parte de tus «planeos». En cross suele ser *buena* señal: calles de nubes eficientes, líneas ascendentes, convergencias bien aprovechadas.
- **Distancia pequeña** (las líneas casi se tocan): estabas simplemente planeando en aire neutro o descendente. Honesto, quizá sufrido, pero al menos lo sabes.

Esta es la lectura de «termómetro atmosférico». Te dice menos de tu vela y más de las condiciones en las que volaste.

---

## Preguntas habituales de los pilotos

### «¿Dónde está mi tasa de caída mínima?»

Mira la línea discontinua y busca su punto más alto (el vario menos negativo). La tarjeta de métricas bajo el gráfico lo indica explícitamente, con la TAS y el número de muestras.

**Ojo:** si el gráfico empieza en 24 km/h pero la velocidad real de caída mínima de tu vela está en 22 km/h, la caída mínima indicada es solo *la velocidad más lenta a la que volaste de verdad*, no el óptimo real de la vela. El gráfico no puede leer lo que no grabaste.

### «¿Dónde está mi mejor fineza?»

Busca la isolínea de fineza **tangente** a la línea discontinua, el rayo de fineza más alta que todavía toca la curva. La TAS en el punto de tangencia es tu velocidad de mejor planeo en aire limpio.

Normalmente encontrarás la mejor fineza en algún punto entre la TAS de caída mínima y la velocidad trim. Más rápido que la caída mínima (porque más rápido = más distancia horizontal por segundo), más lento que trim (porque a trim caes más rápido que en el punto dulce de la fineza).

### «¿Es esta la polar publicada de mi vela?»

**No, y queremos dejarlo muy claro.** Es el rendimiento empírico de *tú + tu vela + tu silla + esta atmósfera, en este vuelo*. La línea discontinua es la aproximación empírica más cercana que podemos calcular, pero no es lo mismo. Para compararla con la ficha técnica, busca la polar de tu vela por tu cuenta (web del fabricante, informe de homologación DHV, hilos de foros de parapente; mira la sección de límites).

### «¿Por qué mi gráfico termina en 53 km/h si sé que llegué a 60?»

Porque seguramente solo pasaste allí unos pocos segundos. Los intervalos con menos de 20 muestras en fase de planeo se descartan para evitar basura estadística. Si quieres que el gráfico llegue más lejos, vuela más tiempo a esa velocidad (o haz más vuelos, aunque por ahora este gráfico es de un solo vuelo).

### «¿Por qué falta la línea discontinua en algunos intervalos?»

La estimación en aire limpio necesita **al menos 4 muestras con netto** en un intervalo para calcularse. Los intervalos con pocos datos se la saltan. Verás que la línea discontinua desaparece en los extremos del rango de TAS.

---

## Los límites honestos (léelo dos veces)

Esta es la parte en la que no te vendemos humo. El gráfico es útil. Pero también está lleno de trampas sutiles.

### 1. No tenemos la polar publicada de tu vela

We-Fly no guarda polares de fabricante por vela. No conocemos el alargamiento de tu vela tal como lo mide el fabricante, la clase de resistencia de tu silla, tu peso total en vuelo exacto ni las mediciones del piloto de pruebas de la homologación. Así que **no podemos dibujar una curva de referencia «ideal»** para comparar.

Para contrastar tu vela con la ficha técnica, tienes que buscarla aparte. La mayoría de fabricantes publican una polar (o algo parecido) en sus notas técnicas; los informes de homologación DHV la incluyen; los hilos de los foros a veces se meten a fondo. La línea discontinua del gráfico es tu **estimación basada en el vuelo**, no la verdad del fabricante.

### 2. El sesgo de la ascendencia durante el planeo

Durante las fases de planeo, los pilotos atraviesan aire ascendente constantemente: chispazos de térmica en pleno planeo, dinámica en la cara a barlovento de una arista, líneas de convergencia, alguna calle de nubes con suerte. Esas muestras tienen *un vario más alto del que produciría la vela sola*.

La **línea mediana** está directamente inflada por esto. La **línea discontinua de aire limpio** intenta compensarlo eligiendo solo las muestras de netto más bajo, pero no es perfecta: incluso el cuartil «frío» puede incluir ascendencia débil que no se ve.

**Conclusión:** incluso la línea discontinua es probablemente un poco favorecedora comparada con el rendimiento real en aire en calma.

### 3. El netto no es una verdad mágica

El Vector Vario calcula el netto como `vario - configured_wing_polar(TAS)`. Así que los valores de netto usados para elegir el «cuartil de netto más bajo» se derivan a su vez de **la polar que tuviera configurada tu VV**.

Si esa polar configurada está muy desviada (vela equivocada en los ajustes, peso equivocado, valores de fábrica que nunca cambiaste), el subconjunto de aire frío saldrá sesgado. Nuestra «aproximación en aire limpio» es una estimación de la polar *mejor* que la mediana en bruto, pero **no es una medición independiente**. Depende de la polar que ya tenía cargada tu vario.

Traducción: el gráfico es coherente consigo mismo pero no está calibrado de forma independiente. Si entra basura, sale basura algo mejor, pero no perfecta.

### 4. La TAS de caída mínima puede ser un artefacto

La tarjeta «Mejor tasa de caída observada» simplemente indica el intervalo de TAS con el vario mediano menos negativo. **Si nunca volaste lo bastante despacio** como para llegar a la velocidad real de caída mínima de tu vela, el valor indicado es solo la TAS más lenta a la que volaste.

Ejemplo: la caída mínima real de la vela está a 22 km/h, pero tu planeo sostenido más lento en este vuelo fue a 24 km/h. El gráfico indicará 24 km/h como «mejor tasa de caída observada», aunque la vela lo habría hecho mejor más despacio. El gráfico **no extrapola** por debajo de tu planeo más lento. Es así a propósito: preferimos quedarnos cortos antes que inventar.

### 5. El gráfico termina donde terminan los datos

Los intervalos de TAS con menos de 20 muestras en fase de planeo se descartan. Un empujón breve de 10 segundos a fondo de acelerador no genera muestras suficientes para publicar un percentil, así que el gráfico simplemente no llega hasta ahí.

**Por qué es una ventaja y no un fallo:** no queremos dibujar una curva sobre velocidades a las que apenas volaste. El final visible del gráfico es *literalmente el rango en el que tenemos datos estadísticamente significativos*. Si quieres un gráfico más completo, vuela más tiempo en el rango de velocidades que te interesa.

### 6. La detección de la fase de planeo tiene bordes difusos

La «fase de planeo» sale del analizador de fases de We-Fly, que usa la estabilidad del rumbo, las variaciones bajas de vario y algunas heurísticas más. Funciona bien casi siempre, pero se cuelan casos límite:

- Un piloto que hace largas eses buscando entre térmicas puede clasificarse como «planeo» aunque se podría decir que estaba centrando.
- Una térmica débil y con mucha deriva en la que apenas giras puede etiquetarse como planeo.
- Los segundos de transición al principio y al final de un planeo pueden incluirse o no.

Estos casos límite sesgan el gráfico de forma sutil. No mucho, pero ahí están.

### 7. Un vuelo ≠ tu vela

Este gráfico muestra **un vuelo concreto**. Tu peso ese día, la configuración de tu silla, tu estilo de pilotaje (activo o pasivo), la masa de aire, el régimen de convección. Todo cuenta. Para caracterizar de verdad tu vela, harían falta muchos vuelos agregados.

We-Fly no agrega vuelos aquí (todavía). Así que toma el gráfico como una **observación única**, no como una conclusión sobre la vela.

---

## Entonces… ¿mi vela es buena o no?

Esta es la pregunta que todo el mundo quiere responder. Aquí tienes un marco honesto.

### Paso 1: mira la línea discontinua en varios vuelos

Un vuelo es ruido. Tres vuelos con condiciones de carga alar parecidas (mismo peso, misma silla, misma vela) empiezan a ser señal. Si la línea discontinua queda sistemáticamente 1-1,5 m/s por debajo de la polar publicada por el fabricante a la misma TAS, hay una diferencia de rendimiento real que vale la pena investigar.

### Paso 2: compárala con la ficha técnica

Saca la polar publicada de tu vela. Los fabricantes suelen publicar:
- Tasa de caída mínima (m/s) a cierta TAS (km/h)
- Velocidad trim y tasa de caída a trim
- A veces un esbozo de la polar completa

Sitúa esos puntos mentalmente en el gráfico. Si tu línea discontinua es claramente más empinada que la ficha, posibles culpables de la diferencia:
- Peso del piloto demasiado alto o demasiado bajo (carga alar fuera de horquilla)
- Resistencia de la silla (un capullo con mucha resistencia frente a la silla de competición afinada del piloto de pruebas)
- Suspentaje que pide una revisión (porosidad, estiramiento de líneas, edad)
- Una vela con unos cientos de horas y una ligera pérdida de rendimiento
- Reglajes de trim o bandas no óptimos
- Volaste en aire ligeramente descendente durante todo el vuelo (pasa)

### Paso 3: sigue la tendencia

Si registras decenas de vuelos y la línea discontinua se mantiene estable, esa es la envolvente de rendimiento real de tu vela contigo. Compárala con los vuelos del año que viene para ver si la vela envejece, o con el equipo idéntico de un amigo para ver si es la vela o el piloto.

### En resumen

El gráfico es una **herramienta de debriefing**, no un veredicto. Úsalo para hacerte mejores preguntas sobre tu vuelo, tu vela y los días en que vuelas. No lo uses para zanjar discusiones de bar: los datos tienen demasiados matices para eso.

---

## Chuleta rápida

| Pregunta | Dónde mirar |
|---|---|
| ¿Qué volé de verdad hoy? | Línea azul continua (mediana) |
| ¿Qué hace mi vela sin ayuda? | Línea discontinua más oscura (mediana del cuartil de netto más bajo) |
| ¿Cómo de variables fueron las condiciones? | Anchura de la banda azul |
| ¿El aire subía o bajaba a esta velocidad? | Colores de las celdas (melocotón = ascendencia, azul = descendencia) |
| ¿Cuál es mi mejor fineza? | Isolínea tangente a la línea discontinua |
| ¿Cuál es mi velocidad de caída mínima? | Punto más alto de la línea discontinua (o tarjeta de métricas) |
| ¿Cuánta «ascendencia gratis» tuve de media? | Distancia vertical entre la línea continua y la discontinua |

---

## Reflexión final

El gráfico de la polar no miente, pero tampoco cuenta toda la verdad. Te dice lo que grabó tu registrador, con toda la dispersión y la incertidumbre intactas. Eso es más útil que una estimación puntual muy segura de sí misma: te obliga a hacerte preguntas en lugar de tragarte un número.

Así que la próxima vez que alguien del club presuma de su «fineza de 11:1 todo el vuelo», saca tu gráfico, señala la línea discontinua a la misma TAS y pregunta con suavidad: «¿en aire frío, o con las térmicas haciendo la mitad del trabajo?»

La atmósfera es generosa. Tu vela es honesta. El gráfico te enseña las dos cosas.

Vuela lejos, planea plano, y que tu línea discontinua sea siempre menos empinada de lo que temías.
