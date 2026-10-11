---
title: Guía de la puntuación z para pilotos
description: La salsa secreta para detectar valores atípicos
category: Cockpit
order: 3
---

*O cómo demostrar matemáticamente que tu despegue favorito merece de verdad el viaje*

## ¿Qué demonios es una puntuación z?

¿Conoces a ese amigo que siempre presume de sus zonas de vuelo «épicas», pero sospechas que solo vende humo? La puntuación z (*z-score*) es el detector matemático de cuentos que estabas esperando.

**La versión corta:** una puntuación z te dice lo inusual que es un dato comparado con el resto de tus datos. Básicamente pregunta: «¿Esta zona de vuelo es especial de verdad, o solo me acuerdo de aquel día bueno?»

**La fórmula (no salgas corriendo):**

```
Puntuación z = (Tu valor - Media) / Desviación típica
```

**Traducción para pilotos:** ¿a cuántas «desviaciones típicas» de la media está esto?

---

## Desglosándolo (porque no todos somos frikis de las matemáticas)

### El planteamiento

Imagina que has volado desde 10 despegues distintos durante la temporada. Quieres saber cuáles son de verdad tus sitios de referencia y cuáles visitaste una sola vez un día épico.

Estos son tus datos (duración media de vuelo en cada zona):

| Zona | Duración media (horas) |
|------|---------------------|
| Annecy | 2,5 |
| Chamonix | 3,8 |
| Verbier | 2,2 |
| Bassano | 5,0 | ← Vaya, interesante
| Kössen | 2,4 |
| Interlaken | 2,6 |
| Pokhara | 1,8 |
| Saint-Hilaire | 2,7 |
| Bir | 2,3 |
| Oludeniz | 2,4 |

**Media de todas las zonas:** 2,77 horas
**Desviación típica:** 0,91 horas

### El cálculo

Calculemos la puntuación z de **Bassano** (porque 5,0 horas es sospechosamente bueno):

```
Puntuación z = (5.0 - 2.77) / 0.91
Puntuación z = 2.23 / 0.91
Puntuación z = 2.45
```

**¿Qué significa 2,45?**
- La duración media de Bassano está 2,45 desviaciones típicas **por encima** de la media
- En tu **Cockpit**, aparece en la columna **Puntuación z**
- Es estadísticamente significativo (|z| > 2 = territorio de valores atípicos)
- Traducción: Bassano no es solo buena, es **excepcional de verdad**

Ahora miremos **Pokhara** (1,8 horas, se queda corto):

```
Puntuación z = (1.8 - 2.77) / 0.91
Puntuación z = -0.97 / 0.91
Puntuación z = -1.07
```

**¿Qué significa -1,07?**
- Pokhara está aproximadamente 1 desviación típica **por debajo** de la media
- No es terrible, pero tampoco genial
- Quizá te tocaron días malos, o quizá es simplemente una zona de planeos directos al aterrizaje

---

## El descodificador de la puntuación z

Así se interpretan tus puntuaciones z:

| Rango de puntuación z | Qué significa | Traducción para pilotos |
|---------------|---------------|-------------------|
| **z > +2,0** | Valor atípico extremo (positivo) | 🌟 **Esta zona es una pasada**: merece las 3 horas de coche |
| **+1,0 a +2,0** | Por encima de la media | 👍 Zona sólida, aquí sueles puntuar |
| **-1,0 a +1,0** | Bastante en la media | 🤷 Psé. Las condiciones importan más que la zona |
| **-2,0 a -1,0** | Por debajo de la media | 👎 Seguramente aquí te quedas a menudo con las ganas |
| **z < -2,0** | Valor atípico extremo (negativo) | 💀 **Evítala salvo que te encante ir directo al aterrizaje** |

---

## Por qué importa la puntuación z (desde el punto de vista del piloto)

### Problema 1: la trampa del «¿te acuerdas de aquella vez?»

Tú: «¡Tío, me ENCANTA volar en [zona cualquiera]! ¡Es increíble!»
Tu cerebro: *recordando aquel ÚNICO vuelo de distancia épico de 6 horas de hace 3 años y olvidando convenientemente los 15 planeos directos*

**La solución de la puntuación z:** si la puntuación z de la zona es negativa o cercana a cero, tu cerebro te está mintiendo. Los datos no mienten: allí sueles irte al suelo.

### Problema 2: los líos del tamaño de la muestra

Has volado Bassano una vez (5 horas, épico) y tu monte local 47 veces (media de 2,1 horas).

¿Cuál es mejor? Difícil decirlo sin contexto, ¿verdad?

**La solución de la puntuación z:** la puntuación z tiene en cuenta **todo el conjunto de datos**, así que puedes comparar peras con manzanas. Pregunta: «Comparada con TODAS mis zonas, ¿cómo queda esta?»

### Problema 3: la estación de las justificaciones

Quieres justificar ese viaje de 4 horas ante tu pareja, tu jefe o tu excusa de «hoy teletrabajo».

**La solución de la puntuación z:** imprime tus estadísticas del Cockpit con una puntuación z de +2,8 para esa zona. «Mira, cariño, no es solo divertido, es diversión ESTADÍSTICAMENTE SIGNIFICATIVA. Esto es ciencia.»

---

## Cómo usamos la puntuación z en We-Fly

### En el panel del Cockpit

Cuando abres la vista **Despegue** de tu **Cockpit**, ves una **Puntuación z** para cada despegue. Se calcula a partir de tu **duración media de vuelo por zona** (la relación entre horas totales y número de vuelos).

```typescript
// From src/lib/utils.ts
export function computeZScore(dataSerie: chartData[]) {
  // For each takeoff site
  for (let indexx = 0; indexx < dataSerie.length; indexx++) {
    // Calculate the average ratio (avg hours per flight) across all sites
    let avg_ratio = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      avg_ratio += dataSerie[index].ratio;
    }
    avg_ratio = avg_ratio / dataSerie.length;

    // Calculate the standard deviation
    let sum_deviations = 0;
    for (let index = 0; index < dataSerie.length; index++) {
      sum_deviations += Math.pow(dataSerie[index].ratio - avg_ratio, 2);
    }
    let deviation = Math.sqrt(sum_deviations / dataSerie.length);

    // Calculate z-score: (this site's ratio - average) / std deviation
    // (rounded to one decimal)
    dataSerie[indexx].z = deviation === 0
      ? 0
      : Number(((dataSerie[indexx].ratio - avg_ratio) / deviation).toFixed(1));
  }
}
```

### Qué medimos realmente

- **Valor:** horas medias por vuelo en cada despegue
- **Media:** tu duración media de vuelo en todas las zonas
- **Desviación típica:** lo dispersos que están tus tiempos de vuelo
- **Puntuación z:** lo excepcional (o lo terrible) que es cada zona

### Detección de valores atípicos

Los comentarios del código dicen: «Los valores con |z| > 2 se consideran valores atípicos estadísticos.»

Esto significa:
- **z > +2**: esta zona es atípica para BIEN (aguantas arriba mucho más que la media)
- **z < -2**: esta zona es atípica para MAL (aterrizas mucho antes que la media)

### Ejemplo real de tu Cockpit

Supongamos que abres la vista **Despegue** y ves:

| Despegue | Vuelos | Horas totales | Media/vuelo | **Puntuación z** |
|----------|--------|---------------|-------------|------------------|
| Mont Blanc | 8 | 45,5 h | 5,69 h | **2,80** 🌟 |
| Monte local | 42 | 67,2 h | 1,60 h | **-0,50** 😐 |
| Aquella vez | 1 | 3,2 h | 3,20 h | **0,40** 🤷 |

El Cockpit redondea cada puntuación z a un decimal, así que una zona con 2,84 aparece como 2,80.

**Qué te dice esto:**
1. **Mont Blanc (z = +2,8):** madre mía, esta zona es un unicornio estadístico. Cada vez que vuelas aquí tienes casi garantizado un vuelo largo. Reserva el alojamiento YA.

2. **Monte local (z = -0,5):** un poco por debajo de la media, pero no está mal. Te pilla cerca y vas sumando horas. Sigue usándolo para practicar, pero no esperes vuelos épicos.

3. **Aquella vez (z = +0,4):** algo por encima de la media, pero solo has volado allí una vez. Puede ser suerte. Necesitas más datos para saber si es buena de verdad.

---

## La letra pequeña (casos límite y trampas)

### Cuándo falla la puntuación z

**1. Muestras pequeñas**
- ¿Volaste una zona una vez durante 6 horas? La puntuación z puede ser +3,0, pero es pura suerte
- **Solución:** mira el número de vuelos. Si es bajo (< 5 vuelos), tómate la puntuación z con pinzas

**2. Todos los valores son iguales**
- Si todas las zonas tienen exactamente 2,5 horas de media, la desviación típica es cero
- No se puede dividir entre cero, así que la puntuación z = 0 para todo
- **Solución:** el código lo gestiona: `deviation === 0 ? 0 : (value - avg) / deviation`

**3. Sesgo estacional**
- Solo vuelas la zona A en verano y la zona B en invierno
- La puntuación z puede reflejar más la **estación** que la **calidad de la zona**
- **Solución:** ¡usa los filtros! Filtra por temporada o por periodo para comparar peras con peras

**4. Estilos de vuelo distintos**
- La zona A es genial para distancia (vuelos largos)
- La zona B es perfecta para acro (vuelos cortos)
- La puntuación z favorecerá a la zona A, pero eso no hace «mala» a la zona B
- **Solución:** filtra por tipo de vuelo si ese dato está disponible

---

## La puntuación z en otros contextos (porque aún no hemos terminado)

### Por vela

¿Con qué vela haces los vuelos más largos?

- **Vela A:** z = +1,8 → por encima de la media, probablemente una buena vela de distancia
- **Vela B:** z = -0,3 → un poco por debajo de la media, quizá tu vela vieja de batalla

### Por mes

¿Cuándo deberías cogerte las vacaciones?

- **Julio:** z = +2,1 → mes épico de forma constante, pide días libres
- **Noviembre:** z = -1,5 → mes para olvidar, quédate en casa y repasa tu equipo

### Por país

¿Qué destino de vuelo merece el billete de avión?

- **Francia:** z = +1,2 → tiempos de vuelo por encima de la media
- **Esa isla cualquiera:** z = -2,0 → preciosa, pero apenas vuelas

---

## Tomar decisiones en la vida real

### Escenario 1: el debate del viaje en coche

Tu colega quiere conducir 5 horas hasta una zona nueva. Miras tu Cockpit:

- **Zona nueva:** 1 vuelo, 4,5 h de media, z = +1,5 (¡pero solo 1 vuelo!)
- **Zona cercana:** 23 vuelos, 3,2 h de media, z = +1,8

**Decisión:** la zona cercana tiene una puntuación z más alta Y más datos. Es la apuesta más segura para un buen día. Guarda las 5 horas de coche para cuando tengas más datos de la zona nueva.

### Escenario 2: comprar vela

Estás dudando entre dos velas según tus vuelos registrados:

- **Vela actual:** 89 vuelos, 2,1 h de media, z = -0,4 (un poco por debajo de tu media)
- **Vela de tu amigo (prestada dos veces):** 2 vuelos, 3,5 h de media, z = +1,2

**Decisión:** no compres la vela de tu amigo basándote en 2 vuelos. La puntuación z pinta bien, pero la muestra es demasiado pequeña. Puede ser suerte, o puede que tu amigo vuele mejor que tú.

### Escenario 3: demostrar que no estás loco

Tu pareja: «Conduces 2 horas hasta esa zona cada fin de semana. ¿De verdad merece la pena?»

Tú: «Mira esto. Puntuación z de +2,3. Allí hago 4,2 horas de media frente a 2,1 horas en el monte local. Es estadísticamente significativo. Vuelo el DOBLE por 2 horas de coche. Las cuentas salen.»

**Resultado:** tu pareja sigue pensando que estás loco, pero al menos ahora tienes DATOS.

---

## En resumen (TL;DR para pilotos impacientes)

**¿Qué es una puntuación z?**
Una medida de lo inusual que es un valor comparado con tu media. Está normalizada por la desviación típica, así que puedes comparar cosas distintas.

**¿Por qué la usamos?**
Para identificar qué despegues (o velas, o meses, o países) son **excepcionales de verdad** y cuáles son golpes de suerte aislados.

**¿Cómo la leo?**
- **Puntuación z positiva:** por encima de la media (¡bien!)
- **Puntuación z negativa:** por debajo de la media (psé)
- **|z| > 2:** valor atípico estadístico (¡extremo!)
- **|z| < 1:** bastante normal (en la media)

**¿Dónde la veo?**
En tu **Cockpit**, en la columna **Puntuación z** de las vistas **Despegue**, **Vela**, **País** y **Temporada**, y como métrica **Puntuación z** en la vista **Mes**.

**¿Qué hago con ella?**
Úsala para tomar decisiones más inteligentes sobre dónde volar, qué equipo usar y cuándo planificar viajes. La puntuación z es tu copiloto basado en datos.

---

## Anexo: las matemáticas (para los frikis del fondo)

### Ejemplo completo resuelto

Conjunto de datos: horas medias de vuelo por zona

```
Sites: [2.5, 3.8, 2.2, 5.0, 2.4, 2.6, 1.8, 2.7, 2.3, 2.4]
```

**Paso 1: calcular la media**
```
Media = (2.5 + 3.8 + 2.2 + 5.0 + 2.4 + 2.6 + 1.8 + 2.7 + 2.3 + 2.4) / 10
Media = 27.7 / 10 = 2.77 horas
```

**Paso 2: calcular la desviación típica**
```
Desv. típica = √( Σ(x - media)² / N )

Para cada valor, calcula (x - media)²:
(2.5 - 2.77)² = 0.073
(3.8 - 2.77)² = 1.061
(2.2 - 2.77)² = 0.325
(5.0 - 2.77)² = 4.973  ← Bassano
(2.4 - 2.77)² = 0.137
(2.6 - 2.77)² = 0.029
(1.8 - 2.77)² = 0.941
(2.7 - 2.77)² = 0.005
(2.3 - 2.77)² = 0.221
(2.4 - 2.77)² = 0.137

Suma = 7.902
Desv. típica = √(7.902 / 10) = √0.790 = 0.889 horas
```

**Paso 3: calcular las puntuaciones z**
```
Z(Bassano) = (5.0 - 2.77) / 0.889 = +2.51 🌟
Z(Pokhara) = (1.8 - 2.77) / 0.889 = -1.09 👎
Z(Annecy) = (2.5 - 2.77) / 0.889 = -0.30 🤷
```

---

## Una última cosa: la puntuación z no miente, pero el contexto importa

Una puntuación z te dice **qué es inusual**, no **por qué es inusual**.

- ¿Zona con puntuación z alta? Pueden ser condiciones excelentes, o que solo la vuelas en días perfectos
- ¿Mes con puntuación z baja? Puede ser mal tiempo, o que ese mes estabas lesionado
- ¿Vela con puntuación z alta? Puede ser mejor vela, o que vuelas con más confianza con ella

**Mira siempre:**
1. El tamaño de la muestra (más vuelos = puntuación z más fiable)
2. El contexto (filtros, periodos, tipos de vuelo)
3. Tu propia memoria (¿te CUADRA?)

La puntuación z es una herramienta, no la verdad absoluta. Pero es una herramienta buenísima para separar el grano de la paja y encontrar la señal entre el ruido.

¡Ahora sal a volar! Y cuando tus amigos te pregunten por qué conduces 3 horas hasta esa zona, podrás decir con total seguridad: «Porque la puntuación z es +2,6, tío. CIENCIA.»

---

*«En la estadística confiamos, pero en las térmicas volamos.»*
*- Todo piloto friki de los datos*
