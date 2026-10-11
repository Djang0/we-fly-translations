---
title: La puntuación global de térmica, explicada
description: Cómo calculamos la calidad de una térmica, con un ejemplo resuelto
category: Thermal Analysis
order: 4
---

¿Has visto la puntuación de calidad de una térmica en la pestaña **Térmicas** y te has preguntado si significa algo de verdad? Buena noticia: sí. No es una sensación. Vamos a desgranar exactamente cómo se calcula ese número para que entiendas qué separa una térmica «Regular» de una «Excelente», y qué puedes hacer al respecto.

## La visión de conjunto

La puntuación de térmica (de 0 a 100) es una combinación ponderada de cinco factores. Son las mismas cinco filas que ves en el **Desglose de la puntuación** de una térmica:

| Factor | Peso | Qué mide |
|--------|------|----------|
| **Ascenso** | 30 % | ¿Qué fuerza tenía la ascendencia en su mejor momento? |
| **Eficiencia** | 20 % | ¿Qué tan directo fue tu ascenso? |
| **Centrado** | 20 % | ¿Qué tal te mantuviste en el núcleo? |
| **Regularidad** | 15 % | ¿Qué estables fueron las lecturas del vario? |
| **Sostenido** | 15 % | ¿Te quedaste a trabajar la térmica de verdad? |

Cada factor se normaliza en una escala de 0 a 1, se multiplica por su peso y luego el total se escala de 0 a 100. Sencillo en teoría, revelador en la práctica.

El factor **Sostenido** es clave: evita que las visitas cortas puntúen alto. Pillar una ascendencia fuerte durante unas pocas vueltas no demuestra saber centrar térmicas; quedarse a trabajar la térmica sí.

---

## La fórmula

Este es el cálculo real:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Los umbrales de la fórmula están fijados en m/s y en metros, sean cuales sean las unidades en que muestres los datos.

### Cómo se calcula cada componente

**1. Puntuación de ascenso**
```
climbScore = min(1, maxClimb / 5.0)
```
Tu mejor ascenso sostenido en la térmica (el valor **Máx.** de los detalles de la térmica, suavizado sobre 5 segundos para que un solo punto GPS con ruido no pueda hacer trampa) dividido entre 5,0 m/s, con un máximo de 1. Solo la décima parte más fuerte de los ascensos de We-Fly se acerca al máximo; un ascenso medio puntúa algo más de la mitad.

**2. Puntuación de eficiencia**
```
efficiencyScore = min(1, heightGain / driftDistance)
```
Altura ganada dividida entre la distancia horizontal que separa el punto donde empezó la térmica del punto donde terminó. Ganar tanta altura como lo que derivaste, o más, da el 1,0 completo. Cuanto más te lleva el viento de lado, más baja.

**3. Puntuación de centrado**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Una vela no puede girar sobre sí misma, así que girar justo al radio del propio núcleo (o más cerrado) da un 1,0 perfecto. Cada radio de núcleo de distancia extra cuesta la mitad de la puntuación: girar al doble del radio del núcleo da 0,5, y al triple, cero. Antes se elimina la deriva del viento comparando cada vuelta con su propio centro local.

**4. Puntuación de regularidad**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
La inversa de la variabilidad de tu vario (la desviación típica de tu tasa de ascenso suavizada). Térmica suave = puntuación alta. Saltar entre ascendencia fuerte y descendencia = puntuación baja. Una variabilidad de 2 m/s o más = aportación nula a la regularidad.

**5. Puntuación de sostenido**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina la duración y el número de vueltas para premiar el trabajo real en térmica. La puntuación completa exige unos 90 segundos Y 2 o más vueltas completas. Todas las térmicas de la lista tienen ya al menos dos vueltas completas (mira [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings)), así que en la práctica este factor penaliza sobre todo los ascensos cortos.

---

## Ejemplo resuelto: térmica n.º 9

Hagamos un cálculo real con números concretos. Supón que trabajaste una térmica con estos datos:

| Métrica | Valor |
|--------|-------|
| Ascenso máx. | 3,5 m/s |
| Eficiencia | 0,41 (41 %) |
| Centrado | 0,53 (53 %) |
| Variabilidad | 0,92 m/s |
| Duración | 75 segundos |
| Número de vueltas | 3 vueltas |

### Paso 1: calcular la puntuación de cada componente

**Puntuación de ascenso:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Tu mejor ascenso sostenido de 3,5 m/s es el 70 % de la referencia de 5,0 m/s.

**Puntuación de eficiencia:**
```
efficiencyScore = 0.41
```
La altura que ganaste equivale al 41 % de lo que derivaste de lado. Bastante típico de una térmica con mucha deriva.

**Puntuación de centrado:**
```
centeringScore = 0.53
```
De media giraste a algo menos del doble del radio del núcleo. Hay margen de mejora, pero no está mal.

**Puntuación de regularidad:**
```
consistencyScore = max(0, 1 - 0.92 / 2.0)
consistencyScore = max(0, 1 - 0.46)
consistencyScore = 0.54
```
Una variabilidad del vario de 0,92 m/s significa que la ascendencia era algo turbulenta, pero nada loco.

**Puntuación de sostenido:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Pasaste 75 segundos y diste 3 vueltas completas: buen trabajo en térmica, a poco de la marca de los 90 segundos.

### Paso 2: aplicar los pesos

Ahora multiplica cada puntuación por su peso:

| Componente | Puntuación | Peso | Aportación |
|-----------|-------|--------|--------------|
| Ascenso | 0,70 | 0,30 | 0,210 |
| Eficiencia | 0,41 | 0,20 | 0,082 |
| Centrado | 0,53 | 0,20 | 0,106 |
| Regularidad | 0,54 | 0,15 | 0,081 |
| Sostenido | 0,833 | 0,15 | 0,125 |
| **Total** | | | **0,604** |

### Paso 3: escalar a 0-100

```
qualityScore = round(0.604 * 100) = 60
```

**Resultado: una puntuación de 60**, justo dentro de «Regular». Unos giros más cerrados mejorarían a la vez la eficiencia y el centrado, y ahí están los puntos fáciles.

---

## Interpretar tu puntuación

| Rango | Etiqueta | Qué significa |
|-------|----------|---------------|
| **80 o más** | Sobresaliente | Los mejores ascensos de We-Fly. Ascendencia fuerte, bien trabajada. |
| **De 73 a 79** | Excelente | Mejor que tres térmicas de cada cuatro. Encontraste el núcleo rápido y te quedaste en él. |
| **De 66 a 72** | Buena | Por encima de la térmica típica. Buen trabajo. |
| **De 60 a 65** | Regular | Por el centro del pelotón. Cumpliste, aunque te dejaste algo de rendimiento por el camino. |
| **Menos de 60** | Floja | Te costó encontrar o mantener el núcleo, fue un ascenso corto o las condiciones eran realmente horribles. |

Los rangos están calibrados con térmicas reales voladas por pilotos de We-Fly: la térmica típica (la mediana) puntúa unos 65, una cuarta parte de las térmicas puntúa 73 o más, y una de cada diez llega a 80.

---

## Qué te dice cada componente

### Fuerza del ascenso (peso del 30 %)

Es el factor que más pesa porque... bueno, de lo que se trata es de subir. Usa tu mejor ascenso *sostenido*, así que premia encontrar la parte fuerte de la térmica, no solo aguantar en ella. Pero no te obsesiones: a veces una térmica débil trabajada a la perfección te da más distancia que una fuerte de la que te caes una y otra vez.

**¿Puntuación de ascenso baja?**
- La térmica era realmente débil (no es culpa tuya)
- Nunca encontraste la parte más fuerte del núcleo (mira el centrado)
- Llegaste tarde a la fiesta y solo pillaste la parte de arriba

### Eficiencia (peso del 20 %)

Eficiencia = altura ganada / distancia de deriva horizontal, con un máximo de 1,0. Una térmica en la que ganas al menos tanta altura como lo que derivas da el 1,0 completo, y eso exige viento flojo o un ascenso fuerte.

Valores típicos:
- **De 0,3 a 0,4**: normal, algo de deriva
- **De 0,5 a 0,6**: muy bien, giros cerrados
- **Más de 0,6**: excelente, deriva mínima

**¿Eficiencia baja?**
- Viento fuerte que te empuja de lado
- Giros abiertos o poca inclinación
- Entrar a favor del viento y no corregir nunca

### Calidad del centrado (peso del 20 %)

Lo cerca del núcleo que giraste. Girar al propio radio del núcleo es perfecto; la puntuación baja en línea recta a medida que crece tu distancia media, hasta llegar a cero al triple del radio del núcleo.

**¿Centrado bajo?**
- Tardaste en encontrar el núcleo
- Te ibas saliendo y volvías a centrar una y otra vez
- El núcleo se movía (térmica de burbuja) o era muy pequeño

### Regularidad (peso del 15 %)

Se basa en la desviación típica de las lecturas de tu vario. Pitido suave y constante = puntuación alta. Vario como loco = puntuación baja.

**¿Regularidad baja?**
- Térmica turbulenta (no siempre es culpa tuya)
- Atravesabas el núcleo y salías por el otro lado una y otra vez
- Ascendencia y descendencia mezcladas en la misma vuelta

### Habilidad sostenida (peso del 15 %)

Combina la duración y el número de vueltas para demostrar que trabajaste la térmica de verdad y no que solo pasabas por ahí. Este factor premia a los pilotos que se comprometen con la térmica y la trabajan como es debido.

La puntuación completa exige:
- **unos 90 segundos** de duración (las térmicas más cortas puntúan proporcionalmente menos)
- **2 o más vueltas completas** (menos vueltas puntúan proporcionalmente menos)

Los dos factores se multiplican, así que necesitas AMBOS para puntuar bien aquí. Un ascenso de 30 segundos con tres vueltas solo se lleva un tercio de los puntos.

**¿Puntuación de sostenido baja?**
- Dejaste la térmica demasiado pronto
- La térmica murió antes de que pudieras trabajarla bien

---

## Cómo mejorar tu puntuación

### Mejoras rápidas

1. **Cierra el giro en cuanto toques ascendencia**: no esperes, empieza a girar en cuanto se dispare el vario
2. **Desplaza tu círculo hacia la ascendencia**: la técnica clásica de centrado, abre en el lado débil y cierra en el lado fuerte
3. **Vigila tu inclinación**: demasiado plana significa círculos abiertos y deriva; demasiado inclinada es poco eficiente en ascendencia débil

### Sigue tu progresión

Compara térmicas de varios vuelos en la misma zona de vuelo. Empezarás a ver patrones:
- «Siempre me cuesta centrar en este despegue»
- «Mis térmicas de la tarde son más regulares»
- «Esa vela nueva ha mejorado mucho mi eficiencia»

### No persigas el número

Un 55 en una térmica rota y pegona puede reflejar un vuelo mejor que un 80 en una columna ancha y suave. El contexto importa. Usa la puntuación para seguir tu propia progresión con el tiempo, no para compararte con otros en días distintos.

---

## Entre bastidores: ¿por qué estos pesos?

Los pesos (30/20/20/15/15) no salen de la nada. Se basan en lo que de verdad importa para centrar térmicas con eficacia:

- **El ascenso manda** (30 %) porque el objetivo principal es subir. Una térmica débil trabajada a la perfección sigue siendo una térmica débil.

- **La eficiencia y el centrado se reparten el peso de la técnica** (20 % cada uno) porque ambos tienen que ver con la habilidad. Puedes tener uno sin el otro (buen centrado pero derivando hacia fuera, o giros cerrados en el sitio equivocado).

- **La regularidad es un modificador** (15 %) porque parte de la turbulencia no depende de ti. Afecta a tu puntuación, pero no la domina.

- **La habilidad sostenida filtra los golpes de suerte** (15 %) porque unas pocas vueltas en ascendencia fuerte no son lo mismo que trabajar una térmica. Este factor garantiza que las puntuaciones altas sean para los pilotos que se comprometieron de verdad con el ascenso.

---

## Escenarios de ejemplo

### El ascensor de la suerte

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Ascenso máx. | 5,6 m/s | 1,0 (máximo) |
| Eficiencia | 0,65 | 0,65 |
| Centrado | 0,78 | 0,78 |
| Regularidad | 0,38 m/s | 0,81 |
| Duración / vueltas | 120 s / 4 vueltas | 1,0 |

**Aportaciones:** 0,30 + 0,13 + 0,156 + 0,121 + 0,15 = **0,858**
**Puntuación:** 86 (Sobresaliente)

Pillaste una térmica monstruosa, te quedaste en el núcleo y la subiste durante dos buenos minutos. El escenario soñado.

### La visita rápida (penalizada)

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Ascenso máx. | 4,8 m/s | 0,96 |
| Eficiencia | 0,72 | 0,72 |
| Centrado | 0,85 | 0,85 |
| Regularidad | 0,45 m/s | 0,78 |
| Duración / vueltas | 25 s / 2 vueltas | 0,28 |

**Aportaciones:** 0,288 + 0,144 + 0,17 + 0,116 + 0,042 = **0,760**
**Puntuación:** 76 (Excelente)

Ascendencia fuerte, centrado estupendo, pero solo te quedaste dos vueltas. Si la hubieras trabajado 90 segundos con la misma técnica, el factor sostenido habría sumado los puntos que faltan y la puntuación sería 87.

### El ascenso peleado

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Ascenso máx. | 2,6 m/s | 0,52 |
| Eficiencia | 0,38 | 0,38 |
| Centrado | 0,45 | 0,45 |
| Regularidad | 1,4 m/s | 0,30 |
| Duración / vueltas | 180 s / 6 vueltas | 1,0 |

**Aportaciones:** 0,156 + 0,076 + 0,09 + 0,045 + 0,15 = **0,517**
**Puntuación:** 52 (Floja)

Térmica débil, núcleo roto, mucho buscar. La etiqueta es dura, pero describe la térmica más que a ti: aguantaste 3 minutos y 6 vueltas, y el factor sostenido te dio todos sus puntos. En un día así, el ascenso que te mantuvo en el aire fue la decisión correcta.

### El que exprime el núcleo

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Ascenso máx. | 3,4 m/s | 0,68 |
| Eficiencia | 0,52 | 0,52 |
| Centrado | 0,85 | 0,85 |
| Regularidad | 0,65 m/s | 0,68 |
| Duración / vueltas | 95 s / 3 vueltas | 1,0 |

**Aportaciones:** 0,204 + 0,104 + 0,17 + 0,101 + 0,15 = **0,729**
**Puntuación:** 73 (Excelente)

Térmica moderada, pero clavaste el centrado y la trabajaste como es debido. La técnica por encima de la potencia.

---

## En resumen

La puntuación de térmica no está para juzgarte: está para darte información. Un resumen numérico de «qué pasó ahí dentro» para que aprendas de cada térmica en lugar de quedarte solo con un «esa estuvo bien».

Úsala para:
- Detectar patrones en tu forma de volar
- Seguir tu progresión con el tiempo
- Identificar puntos débiles concretos que trabajar
- Presumir ante tus amigos con datos de verdad

Y recuerda: incluso una térmica «Regular» que te llevó al siguiente ascenso es mejor que una «Excelente» que no cogiste por esperar algo mejor.

¡Ahora sal a volar!

---

Ver también: [Análisis avanzado de térmicas](/doc/advanced-thermal-analysis) | [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings)
