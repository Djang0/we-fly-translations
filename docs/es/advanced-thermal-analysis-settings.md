---
title: "Ajustes del análisis avanzado de térmicas"
description: "Configura los parámetros que se usan para detectar y puntuar tus térmicas"
category: Thermal Analysis
order: 2
---

*O sea: cómo enseñarle al algoritmo qué pinta tiene una térmica de verdad*

Has subido tu vuelo, has abierto el análisis avanzado de térmicas y ahora miras la pestaña Ajustes preguntándote qué hacen todos estos deslizadores y números. La buena noticia: estás en el sitio correcto. La mala: nos vamos a poner un poco frikis (pero de forma divertida, prometido).

Piensa en estos ajustes como una forma de enseñarle al ordenador qué consideras *tú* una «térmica digna de registrar». Porque, seamos sinceros, ¿esa burbuja débil y raquítica que trabajaste 45 segundos porque te estabas quedando bajo? Puede que el algoritmo no la cuente. Pero ¿ese ascensor glorioso de 5 m/s que te llevó de «uy, la que me va a caer» a «al techo, colega»? Esa sí se registra.

---

## La versión resumida

**El 99 % de los pilotos debería usar los ajustes por defecto.** Están afinados para las térmicas típicas de parapente y funcionan muy bien en la mayoría de vuelos. Toca esto solo si:

1. Vuelas en condiciones raras (térmicas superdébiles, viento loco, ascendencias mínimas pegado al relieve)
2. Eres un friki de los datos y quieres entender *exactamente* cómo funciona el análisis
3. Te tomaste una cerveza y pensaste que sería divertido ver qué pasa si lo pones todo al máximo

¿Sigues aquí? Vale, vamos al lío.

---

## Umbrales de detección

*«¿Cuándo pasa el dar vueltas a ser "estoy en una térmica"?»*

### Puntuación térmica mínima (por defecto: 0,35)

**Qué hace:** el algoritmo combina varias señales (ascendencia, velocidad de giro, movimiento GPS) en una sola «puntuación de confianza térmica» de 0 a 1. Este ajuste dice «no lo llames térmica a menos que la confianza llegue al 35 %».

**En términos de piloto:** ¿cómo de exigente eres con lo que cuenta como térmica?

- **Más baja (0,2-0,3):** «Yo trabajo todo lo que sube». Pilla burbujas débiles, pero puede registrar algún falso positivo cuando solo estás girando en dinámica de ladera o rascando el relieve.
- **Por defecto (0,35):** «Enséñame térmicas de verdad, no basura». Equilibrado para el vuelo de distancia típico.
- **Más alta (0,4-0,5):** «Registra solo lo bueno». Se pierde térmicas débiles pero mantiene tus estadísticas limpias.

**Hablando claro:** si vuelas en los Alpes y trabajas a menudo térmicas de 0,5 m/s pegado al relieve, bájala. Si vuelas en llanura en verano con núcleos de 4 m/s, puedes subirla.

---

### Puntuación térmica de salida (por defecto: 0,2)

**Qué hace:** una vez que estás «dentro» de una térmica, la confianza tiene que bajar del 20 % antes de que el algoritmo empiece a pensar que has salido.

**En términos de piloto:** ¿cuánto rato sigues buscando antes de admitir «vale, la he perdido»?

- **Más baja (0,1-0,15):** «Estoy fuera, seguro». Sale de las térmicas rápido. Bien si vuelas térmicas limpias y regulares.
- **Por defecto (0,2):** «Vale, esto ya no funciona». Tolera una descendencia breve o dar vueltas por los bordes.
- **Más alta (0,25-0,3):** «A lo mejor sigue por aquí...». Tarda más en salir. Útil en térmicas rotas y turbulentas en las que entras y sales todo el rato.

**Por qué es más baja que la de entrada:** ¡histéresis! Por lo mismo que tu termostato no enciende la calefacción a 20 °C y la apaga a 19,9 °C. Evita que el algoritmo registre 47 «térmicas» distintas cuando solo estás trabajando una burbuja rota.

---

### Vario mínimo (por defecto: 0,3 m/s)

**Qué hace:** ignora cualquier giro en el que tu vario marque menos que esto.

**En términos de piloto:** «Si no es al menos así de buena, no la llamo térmica».

- **Más bajo (0,1-0,2):** registra ascendencia débil, rascadas, incluso dinámica de ladera si estás girando. Genial para vuelos en «modo supervivencia».
- **Por defecto (0,3):** umbral térmico estándar de distancia. Si no promedia 0,3 m/s, seguramente no te vas a mantener mucho tiempo.
- **Más alto (0,5-1,0):** registra solo las térmicas en las que de verdad ganas altura a buen ritmo.

**Dato curioso:** los valores por defecto están afinados para parapente. Si vuelas un ala delta con peor tasa de caída, quizá quieras subirlo un poco.

---

### Velocidad de giro mínima (por defecto: 10 °/s)

**Qué hace:** lo rápido que tienes que girar para que el algoritmo piense «sí, está dando vueltas».

**En términos de piloto:** ¿cómo de cerrados son tus giros?

- **Más baja (5-8 °/s):** giros amplios y perezosos. Bien para biplaza, alumnos que empiezan o si vuelas una vela de altas prestaciones y te gustan las inclinaciones suaves.
- **Por defecto (10 °/s):** centrado normal. Un 360° completo cada 36 segundos.
- **Más alta (15-20 °/s):** giros cerrados y agresivos. Un 360° cada 18-24 segundos. Puede que no detecte tu centrado si giras amplio.

**Hablando claro:** la mayoría de los pilotos centra de forma natural a 10-15 °/s. Si el algoritmo se pierde térmicas evidentes, quizá giras más amplio que la media. Bájala a 8. Si registra «térmicas» al azar cuando solo haces eses en la ladera, súbela a 12-15.

---

## Parámetros de histéresis

*«Deja de ser tan nervioso, algoritmo»*

Estos parámetros evitan que el detector se encienda y se apague cada vez que pillas un rebufo o pasas 2 segundos en descendencia. Piensa en ellos como un «tiempo de confirmación».

### Duración de entrada (por defecto: 5 segundos)

**Qué hace:** tienes que cumplir las condiciones de térmica durante estos segundos seguidos antes de que cuente oficialmente como «entrada en térmica».

**En términos de piloto:** ¿cuántos giros das antes de comprometerte y decir «sí, esto es una térmica»?

- **Más baja (2-3 s):** «¡Estoy dentro!» tras medio giro. Registra térmicas rápido, pero puede pillar falsos positivos.
- **Por defecto (5 s):** unos 1,5 giros para confirmar. Buen equilibrio.
- **Más alta (8-10 s):** «Déjame asegurarme primero de que es real». Hacen falta 2-3 giros para registrarla. Se pierde burbujas cortas pero da resultados muy limpios.

**Cuándo ajustarla:** bájala si vuelas en condiciones muy rotas, con térmicas pequeñas, y necesitas pillarlo todo. Súbela si se registran térmicas falsas (habitual con viento o turbulencia).

---

### Duración de salida (por defecto: 3 segundos)

**Qué hace:** tienes que *no* cumplir las condiciones de térmica durante este tiempo antes de que cuente como «salida de térmica».

**En términos de piloto:** cuánto rato sigues buscando cuando muere la ascendencia antes de salir a planear.

- **Más baja (1-2 s):** «No, me voy». Sale rápido. Bien para térmicas limpias y regulares.
- **Por defecto (3 s):** «Espera, a lo mejor aquí solo está floja...». Un giro más para comprobar.
- **Más alta (5-8 s):** «La voy a trabajar un poco más...». Varios giros antes de rendirte. Bien para térmicas complejas con varios núcleos.

**Consejo pro:** en térmicas de verano fuertes y contundentes, puedes bajarla. En primavera u otoño, con ascendencia débil y rota, súbela.

---

### Duración mínima de térmica (por defecto: 15 segundos)

**Qué hace:** si solo giras durante menos de esto, no cuenta como «térmica» en las estadísticas.

**En términos de piloto:** «¿Eso fue una térmica o solo un meneo?»

- **Más baja (8-10 s):** cuenta las burbujas cortas. Bien si saltas de burbuja en burbuja a propósito.
- **Por defecto (15 s):** unos 4 giros como mínimo. Filtra los momentos de «di dos vueltas y me fui».
- **Más alta (20-30 s):** registra solo las térmicas en las que te quedaste a trabajarlas. Estadísticas más limpias, pero puede perder ascensos cortos legítimos.

**Cuándo usarla:** si vuelas en competición y trabajas cada pequeña rascada, bájala. Si haces distancia tranquila y solo quieres térmicas «de verdad» en tus estadísticas, súbela.

---

## Detección de giros

*«Cómo distinguir entre centrar una térmica y simplemente girar»*

### Ventana mínima de giro (por defecto: 10 segundos)

**Qué hace:** el algoritmo mira estos segundos de vuelo cada vez para calcular si estás girando.

**En términos de piloto:** cuánto historial de vuelo se analiza para ver si tus giros son regulares.

- **Más baja (5-8 s):** respuesta rápida. Detecta térmicas pronto pero es más sensible al ruido.
- **Por defecto (10 s):** unos 2,5 giros de datos. Buen equilibrio entre rapidez y precisión.
- **Más alta (15-20 s):** respuesta más lenta pero muy precisa. Puede tardar más en detectar la entrada en térmica.

**Hablando claro:** la mayoría de los pilotos no necesitará tocar esto. Es un parámetro técnico que afecta a la suavidad del algoritmo, no realmente al comportamiento del piloto.

---

### Número mínimo de giros (por defecto: 1,0)

**Qué hace:** tienes que completar al menos estos 360° completos para que cuente como «girar en una térmica».

**En términos de piloto:** ¿cuántos giros hacen falta para que sea oficialmente una térmica?

- **Más bajo (0,5-0,8):** medio giro basta. Pilla contactos térmicos muy cortos.
- **Por defecto (1,0):** al menos un 360° completo. Filtra los «giré dos veces y me fui».
- **Más alto (2-3):** hacen falta varios giros completos. Muy conservador, se pierde los ascensos rápidos.

**Cuándo ajustarlo:** combínalo con Duración mínima de térmica. Si quieres registrarlo todo, pon los dos bajos. Si quieres estadísticas limpias, pon los dos altos.

---

### Radio máximo del núcleo (por defecto: 80 metros)

**Qué hace:** al calcular la «calidad del centrado», el algoritmo mide cuánto te alejas del núcleo de la térmica. Este ajuste fija el radio máximo que considera razonable.

**En términos de piloto:** ¿qué tamaño de giro esperamos?

- **Más bajo (50-60 m):** núcleos estrechos. Bien para las térmicas potentes de verano. Penaliza los giros amplios.
- **Por defecto (80 m):** estándar en parapente. Un radio de ~50-80 m es lo típico.
- **Más alto (100-120 m):** térmicas grandes y anchas. Llanura, condiciones débiles o si giras amplio.

**Dato curioso:** esto no afecta a *qué* se registra como térmica, solo a la puntuación de calidad. Una térmica es una térmica. Esto solo cambia lo «bueno» que el algoritmo cree que fue tu centrado.

---

## Métricas de calidad

*«¿Cómo de buena fue esa térmica, de verdad?»*

### Ratio ideal de deriva (por defecto: 0,3)

**Qué hace:** la relación entre la distancia de deriva y la altura ganada. El valor por defecto 0,3 significa que lo ideal es derivar 30 m de lado por cada 100 m que subes.

**En términos de piloto:** ¿qué cuenta como «bien centrado» frente a «derivando fuera del núcleo»?

- **Más bajo (0,1-0,2):** muy estricto. «Casi no deberías derivar». Bien para condiciones tranquilas y térmicas fuertes.
- **Por defecto (0,3):** realista para condiciones normales. Algo de deriva es normal.
- **Más alto (0,4-0,6):** permisivo. «No pasa nada por derivar, sigo subiendo». Bien para días de viento o térmicas débiles que derivan.

**Por qué importa:** afecta a tus puntuaciones de calidad térmica y a las recomendaciones. Si vuelas con viento fuerte y derivas 50 m constantemente mientras subes, súbelo para que no te penalice.

---

### Ventana de centrado (por defecto: 20 segundos)

**Qué hace:** el algoritmo revisa tus primeros X segundos en la térmica para ver lo rápido que encontraste el núcleo.

**En términos de piloto:** «¿Cuánto tardaste en encontrar la mejor ascendencia?»

- **Más baja (10-15 s):** «¿Lo clavaste a la primera?». Muy estricta con el centrado inicial.
- **Por defecto (20 s):** unos 5-6 giros para encontrar el núcleo. Realista para la mayoría de los pilotos.
- **Más alta (30-40 s):** «Tómate tu tiempo, a todos nos cuesta a veces». Más indulgente si al principio das un poco de vueltas.

**Hablando claro:** esto afecta a los comentarios «Gran entrada al núcleo» / «Trabaja el centrado». Si te sale mucho «trabaja el centrado» pero sientes que *sí* centras bien, quizá tu estilo es simplemente más exploratorio en los primeros giros. Súbela.

---

## Casos prácticos: cuándo cambiar los ajustes

### «El algoritmo no registra mis térmicas débiles»

Vuelas en condiciones justas, trabajando ascendencias de 0,3-0,8 m/s, pero el análisis no muestra ninguna térmica.

**Solución:**
- Baja **Vario mínimo** a 0,2
- Baja **Puntuación térmica mínima** a 0,25
- Baja **Duración mínima de térmica** a 10 s

---

### «Registra "térmicas" al azar que no eran térmicas»

Ves térmicas registradas durante tu planeo, o cuando solo estabas girando cerca del relieve.

**Solución:**
- Sube **Puntuación térmica mínima** a 0,4
- Sube **Velocidad de giro mínima** a 12-15 °/s
- Sube **Duración mínima de térmica** a 20 s

---

### «¡Me sale "trabaja el centrado" pero centro bien!»

El algoritmo cree que derivas demasiado o que tardas mucho en encontrar el núcleo.

**Solución:**
- Sube **Ratio ideal de deriva** a 0,4-0,5 (sobre todo en días de viento)
- Sube **Ventana de centrado** a 30 s (te da más tiempo para explorar)

---

### «En el análisis las térmicas empiezan y terminan todo el rato»

Estás trabajando una sola térmica pero se registra como 3 térmicas distintas.

**Solución:**
- Sube **Duración de salida** a 5-8 s (tarda más en salir)
- Baja **Puntuación térmica de salida** a 0,15 (más fácil seguir «dentro»)

---

### «Vuelo biplaza y no detecta mis térmicas»

Biplaza = giros más amplios, viradas más lentas, vuelo más conservador.

**Solución:**
- Baja **Velocidad de giro mínima** a 6-8 °/s
- Sube **Radio máximo del núcleo** a 100 m
- Sube **Ventana de centrado** a 30 s

---

## La guía «dime qué hago y ya»

### La mayoría de los pilotos (distancia, ocio)
**Usa los valores por defecto.** Están afinados para ti. En serio.

### Pilotos de competición
- Baja **Duración mínima de térmica** a 10 s (cada ascenso cuenta)
- Baja **Duración de entrada** a 3 s (detección rápida)
- Sube **Vario mínimo** a 0,5 (registra solo las buenas térmicas)

### Vuelo en costa o pegado al relieve
- Baja **Puntuación térmica mínima** a 0,25 (pilla la ascendencia débil)
- Sube **Duración de salida** a 5 s (térmicas rotas)
- Sube **Ratio ideal de deriva** a 0,5 (deriva por el viento)

### Vuelo en llanura (térmicas fuertes de verano)
- Sube **Vario mínimo** a 0,5 m/s (ignora la ascendencia débil)
- Baja **Radio máximo del núcleo** a 60 m (núcleos estrechos)
- Sube **Velocidad de giro mínima** a 12 °/s (giros más cerrados)

### Vuelo alpino (térmicas débiles y rotas)
- Baja **Vario mínimo** a 0,2 m/s
- Baja **Puntuación térmica mínima** a 0,25
- Sube **Duración de salida** a 8 s (no salgas demasiado rápido)

---

## Preguntas frecuentes: lo que hemos oído en el aterrizaje

### «¿Por qué no aparece mi térmica favorita?»

Comprueba esto en orden:
1. ¿Duró al menos 15 s? (Duración mínima de térmica)
2. ¿La ascendencia fue de al menos 0,3 m/s? (Vario mínimo)
3. ¿Estabas girando de verdad? (Velocidad de giro mínima)
4. ¿Completaste al menos un 360° entero? (Número mínimo de giros)

### «¿Puedo romper algo trasteando con esto?»

¡Qué va! En el peor de los casos, te salen resultados raros. Pulsa «Restablecer valores por defecto» y vuelves a la normalidad.

### «¿Qué pasa si lo pongo todo al máximo?»

Seguramente no se detecte ninguna térmica. El algoritmo dirá «NADA ES SUFICIENTEMENTE BUENO» y lo rechazará todo. Es como poner el listón tan alto en las citas que acabas solo. (Lo hemos probado. Por la ciencia.)

### «¿Y si lo pongo todo al mínimo?»

Todo se convierte en térmica. ¿Tu inflado en el suelo? Térmica. ¿Tu pasada por la ladera? 47 térmicas. ¿Aquella vez que arrastraste la punta del ala? Una térmica sorprendentemente buena. Otra vez: lo probamos. Fue el caos.

### «¿Estos ajustes afectan a las estadísticas de mi vuelo?»

¡Sí! Cambiar lo que cuenta como «térmica» cambia tu número de térmicas, la altura total ganada en térmicas, la tasa de ascenso media, etc. Así que si comparas estadísticas con un amigo, aseguraos de usar los mismos ajustes.

---

## Notas avanzadas para frikis

(Sáltate esto tranquilamente si solo quieres volar)

La detección de térmicas usa una **puntuación compuesta de varias señales** que combina:
- Lecturas del vario (¿estás subiendo?)
- Velocidad de giro (¿estás girando?)
- Geometría del track GPS (¿tu trayectoria encaja con un centrado?)
- Cambios de rumbo (¿completas los giros?)

Cada señal se normaliza entre 0 y 1, se pondera y se combina. La **Puntuación térmica mínima** es el umbral de esa puntuación combinada.

Los **parámetros de histéresis** (duración de entrada y de salida) implementan una máquina de estados con retardos de confirmación para evitar oscilaciones. Es el mismo principio que usan los termostatos, las luces de freno y básicamente cualquier sistema que necesite evitar encendidos y apagados rápidos.

Las **métricas de calidad** usan estadística circular para calcular el rumbo de la deriva, la posición del núcleo de la térmica y la eficacia del centrado. Las matemáticas incluyen productos escalares, diferencias de rumbo y algo de geometría de coordenadas que haría sentirse orgulloso (o traumatizado) a tu profe de mates del instituto.

## Reflexión final

Mira, al final del día estos ajustes son solo mandos que cambian lo que el algoritmo considera una «térmica». Lo que de *verdad* te enseña es:

1. Volar el vuelo
2. Mirar el análisis
3. Compararlo con lo que *sentiste* en el aire
4. Cambiar los ajustes si hace falta
5. Aprender de los patrones

El objetivo no es engañar al sistema para tener estadísticas perfectas. Es entender mejor cómo vuelas. ¿Centraste bien de verdad o tuviste suerte con un núcleo fuerte? ¿Saliste de las térmicas demasiado pronto o se estaban muriendo de verdad?

El algoritmo es una herramienta, no un juez. Úsalo para mejorar, no para agobiarte con los números.

Y ahora sal a buscar térmicas. Las de verdad. En el aire. Donde tienen que estar.

*Cielos azules y aire suave,*
