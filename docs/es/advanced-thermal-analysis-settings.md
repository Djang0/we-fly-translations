---
title: "Cómo funciona la detección de térmicas"
description: "Las reglas que usa We-Fly para decidir dónde empieza una térmica, dónde termina y qué ascensos entran en la lista"
category: Thermal Analysis
order: 2
---

*O sea: cómo decide el análisis que todos esos giros eran de verdad una térmica*

Cada térmica que ves en la pestaña **Térmicas** de un vuelo la ha encontrado el mismo detector, con los mismos umbrales, para todos los pilotos. No hay deslizadores que ajustar ni nada que restablecer: las reglas son fijas para que tus números signifiquen lo mismo que los de tu colega, vuelo tras vuelo.

Esta página explica esas reglas, para que cuando el análisis ignore un ascenso que estás seguro de haber trabajado (o parta una térmica en dos), sepas por qué.

---

## La versión resumida

1. El detector mira una ventana deslizante corta de tu track y se hace cuatro preguntas: ¿estás subiendo?, ¿estás girando?, ¿el giro es regular? y ¿has ganado altura?
2. Combina las respuestas en una única **puntuación de térmica** entre 0 y 1.
3. Una pequeña máquina de estados con una indecisión incorporada convierte esa puntuación en «planeando» y «centrando la térmica», para que una sola burbuja o una vuelta en descendencia no cambie el resultado.
4. Después, cada ascenso candidato se recorta a los giros que de verdad hiciste y solo se conserva si dura lo suficiente, gana altura y contiene al menos dos giros completos.

El resto de esta página es el detalle de cada paso.

Todos los umbrales de abajo son los valores que usa internamente el motor, en unidades métricas. Tus unidades de visualización (pies, nudos, etc.) cambian cómo se te muestran los números, no dónde se trazan las líneas.

---

## Paso 1: cuatro señales en una ventana deslizante

Para cada punto GPS, el detector mira hacia atrás los diez puntos anteriores. Con un registrador típico que graba un punto por segundo, eso son unos diez segundos de vuelo, más o menos entre un cuarto y media vuelta.

De esa ventana lee cuatro señales, cada una comprimida en una escala de 0 a 1:

| Señal | Qué mide | Nota máxima con | Peso |
|---|---|---|---|
| Vario | Velocidad vertical media en la ventana | 3 m/s | 45 % |
| Regularidad del giro | Lo constante que es tu ritmo de giro | un giro perfectamente regular | 25 % |
| Ritmo de giro | Lo rápido que cambia tu rumbo | 30°/s | 20 % |
| Ganancia de altura | Altura neta ganada en la ventana | 50 m | 10 % |

El vario es lo que más pesa porque es la prueba más directa de ascendencia. Le sigue la regularidad del giro, porque separa una térmica organizada (giros suaves y repetibles) de la turbulencia aleatoria, donde tu rumbo salta de un lado a otro. El ritmo de giro y la ganancia de altura confirman el cuadro.

La suma ponderada es la **puntuación de térmica**. Un piloto planeando en línea recta en aire en calma puntúa cerca de cero; un piloto trazando giros regulares en buena ascendencia puntúa muy por encima de 0,5.

---

## Paso 2: la máquina de estados (por qué el detector duda a propósito)

Si el detector se limitara a decir «una puntuación por encima de X es una térmica», el resultado se encendería y apagaría cada vez que pasaras por un bache o cruzaras el lado de descendencia de un núcleo roto. Así que, en su lugar, pasa por cuatro estados:

| Estado | Cómo se entra | Cómo se sale |
|---|---|---|
| **Planeando** | Estado inicial | La puntuación llega a **0,35** → Entrando |
| **Entrando** | La puntuación llegó a 0,35 | La puntuación se mantiene en 0,35 o más durante **5 segundos** → Centrando. Baja de 0,35 → vuelta a Planeando (falsa alarma) |
| **Centrando** | Térmica confirmada | La puntuación baja de **0,20** → Saliendo |
| **Saliendo** | La puntuación bajó de 0,20 | Se mantiene por debajo de 0,20 durante **3 segundos** → Planeando. Vuelve a subir a 0,35 o más → Centrando otra vez |

Aquí importan dos detalles:

- **Entrar es más exigente que salir.** Necesitas 0,35 para empezar una térmica, pero solo tienes que mantenerte por encima de 0,20 para conservarla. Esta diferencia (llamada histéresis) es lo que evita que una térmica desordenada se trocee en cinco.
- **Entre medias, el detector espera.** Si la puntuación ronda entre 0,20 y 0,35 mientras sales, ni termina la térmica ni la reinicia hasta que el cuadro esté claro.

### Redes de seguridad para los ascensos largos

Una térmica larga acumula mucha altura, y esa altura ganada puede ocultar el momento en que la ascendencia realmente se acabó. Dos reglas adicionales lo detectan:

- **Comprobación de la tendencia reciente.** Mientras centras, si los últimos 60 segundos muestran una pérdida neta de altura, la térmica se cierra de inmediato, por buena que fuera antes.
- **Comprobación del ascenso medio.** Pasado el primer minuto, el ascenso medio desde el inicio de la térmica debe mantenerse por encima de 0,2 m/s. El listón sube a 0,3 m/s pasados tres minutos y a 0,4 m/s pasados cinco. Si caes por debajo, la térmica se cierra.
- **Corte por descenso fuerte.** Una vez que estás saliendo, perder 30 m más termina la térmica al instante, aunque unos cuantos giros de búsqueda hagan subir brevemente la puntuación.

Estas reglas son la razón de que dos ascensos reales unidos por un corto planeo de búsqueda aparezcan como dos térmicas y no como una.

---

## Paso 3: recortar y luego conservar o descartar

Cuando una térmica se cierra, el detector la limpia antes de decidir si cuenta.

**Recorte.** La máquina de estados abre una térmica unos segundos después de que empieces a girar y la cierra unos segundos después de que salgas. Esos bordes son sobre todo planeo de búsqueda, así que la térmica se recorta para ir desde el inicio de tu primer giro completo de 360° hasta el final del último. Un giro completo necesita al menos ocho puntos GPS, así que un meneo ruidoso no cuenta.

**Conservar o descartar.** Tras el recorte, una térmica solo se conserva si:

- **ganó altura** en conjunto,
- duró al menos **15 segundos**, y
- contiene al menos **dos giros completos**.

Todo lo demás se trata como un paso por una ascendencia o un giro de búsqueda, no como una térmica. Seguirás viendo ese tiempo en la pestaña **Fases**: los giros que no pasaron el corte aparecen como **Búsqueda**, y el resto como **Planeo** o **Planeo neutro**.

### Despegues remolcados y motorizados

Una subida con remolque, torno o paramotor es fuerte y regular, justo lo que puntúa bien, pero no es una térmica. Cuando el tipo de despegue de un vuelo es **Remolcado** o **Motorizado**, la detección empieza solo en tu primer giro sostenido (un ritmo de giro suavizado de al menos 8°/s mantenido durante ocho puntos consecutivos). Todo lo anterior se trata como la subida del despegue.

Si el tipo de despegue de un vuelo está mal, corrígelo con **Cambiar tipo de despegue** en el menú de acciones del vuelo. El vuelo se vuelve a analizar con el nuevo ajuste.

---

## Paso 4: qué se mide en cada térmica

Una vez conservada una térmica, el análisis la mide. Estos son los números que ves en el panel de detalles de la térmica:

- **Ascenso.** Ganancia y ascenso medio, máximo y mínimo. El máximo y el mínimo se suavizan sobre 5 segundos para que un solo punto GPS ruidoso no pueda marcar un récord; los picos brutos de un solo punto se muestran al lado como «pico».
- **Núcleo.** Para cada giro completo, el análisis encuentra el centro de la ascendencia, ponderado hacia los puntos en los que mejor subiste. Esos centros por giro se combinan en la posición, la intensidad y el tamaño del núcleo de la térmica.
- **Tiempo de centrado.** Tiempo desde el inicio de la térmica hasta que estuviste por primera vez a menos de 50 m del núcleo subiendo a más del 70 % de la intensidad del núcleo.
- **Centrado.** Lo cerca del núcleo que giraste. Girar al radio del propio núcleo (o más cerrado) puntúa 100 %; cada radio de núcleo adicional de distancia cuesta un 50 %, así que girar a tres veces el radio del núcleo puntúa cero. La deriva del viento se elimina comparando cada giro con su propio centro local.
- **Eficiencia.** Altura ganada dividida por la distancia horizontal entre el punto donde empezó la térmica y donde terminó, con un máximo del 100 %.
- **Dinámica de giro.** Sentido, número de giros completos, ritmo de giro medio, tiempo por vuelta, radio de giro, y una estimación de la inclinación y de la velocidad aire a partir del radio y el periodo del giro.
- **Deriva y viento.** Distancia de deriva y una estimación de la velocidad y la dirección del viento a partir de cómo se desplazaron tus giros sobre el suelo.

Todo esto alimenta la **puntuación de calidad** de la térmica y sus **Recomendaciones**. La fórmula de puntuación tiene su propia página: [La puntuación global de térmica, explicada](/doc/overall-thermal-score).

---

## Preguntas frecuentes

### ¿Por qué no aparece en la lista mi ascenso favorito?

Comprueba esto, por orden:

1. ¿Hiciste al menos **dos giros completos**? Un ascenso que atravesaste en línea recta, o con un solo giro, no cuenta.
2. ¿Duró al menos **15 segundos** una vez recortado a tus giros?
3. ¿De verdad **ganaste altura** entre tu primer y tu último giro completo?
4. ¿Fue justo después de una subida con remolque o con motor? En un vuelo **Remolcado** o **Motorizado**, no cuenta nada anterior a tu primer giro sostenido.

### ¿Por qué se partió una térmica en dos?

Casi siempre ha saltado la comprobación de la tendencia reciente o el corte por descenso fuerte: en algún punto intermedio perdiste altura durante un minuto, o perdiste 30 m mientras la puntuación estaba baja. Desde el punto de vista del track, saliste de una térmica y encontraste otra.

### ¿Puedo cambiar los umbrales?

No. Las versiones anteriores de We-Fly tenían un panel de ajustes para esto; ya no existe. Unas reglas fijas hacen que el número de térmicas, las tasas de ascenso y las puntuaciones de calidad se puedan comparar con justicia entre tus propios vuelos y con otros pilotos.

### ¿Cambian estas reglas mis estadísticas de vuelo?

Son las que las definen. Tu número de térmicas, la altura ganada en térmicas, el ascenso medio y los números de centrado de térmicas del Cockpit salen todos de este detector. Como todo el mundo tiene las mismas reglas, las comparaciones son de igual a igual.

### ¿Importa el intervalo de grabación de mi registrador?

Algo. La ventana deslizante y la prueba del «giro completo» cuentan puntos GPS. Los registradores que graban cada segundo dan el resultado más limpio. Un registrador que graba cada pocos segundos ve menos puntos por vuelta, así que es más fácil que se le escapen las térmicas cortas o cerradas.

---

## Para saber más

- [Análisis avanzado de térmicas](/doc/advanced-thermal-analysis): un recorrido por la pestaña **Térmicas**
- [La puntuación global de térmica, explicada](/doc/overall-thermal-score): cómo se construye la puntuación de cada térmica
