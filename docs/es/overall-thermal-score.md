---
title: La puntuación global de térmica, explicada
description: Cómo calculamos la calidad de una térmica, con un ejemplo resuelto
category: Thermal Analysis
order: 4
---

¿Has visto esa puntuación de calidad en el análisis avanzado de térmicas y te has preguntado si significa algo de verdad? Buena noticia: sí. No es una sensación. Vamos a desgranar exactamente cómo se calcula ese número para que entiendas qué separa una térmica «Regular» de una «Excelente», y qué puedes hacer al respecto.

## La visión de conjunto

La puntuación global de térmica (0-100) es una combinación ponderada de cinco factores:

| Factor | Peso | Qué mide |
|--------|--------|------------------|
| **Ascenso** | 30 % | ¿Qué fuerza tenía la ascendencia? |
| **Eficiencia** | 20 % | ¿Qué tan directo fue tu ascenso? |
| **Centrado** | 20 % | ¿Qué tal te mantuviste en el núcleo? |
| **Regularidad** | 15 % | ¿Qué estables fueron las lecturas del vario? |
| **Sostenido** | 15 % | ¿Trabajaste la térmica de verdad? |

Cada factor se normaliza en una escala de 0 a 1, se multiplica por su peso y luego el total se escala a 0-100. Sencillo en teoría, revelador en la práctica.

El factor **Sostenido** es clave: evita puntuaciones altas por simples pasadas. Atravesar una ascendencia fuerte durante 15 segundos no demuestra saber centrar térmicas; girar y trabajar la térmica sí.

---

## La fórmula

Este es el cálculo real del código:

```
Quality Score = (climbScore * 0.30 +
                 efficiencyScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

### Cómo se calcula cada componente

**1. Puntuación de ascenso**
```
climbScore = min(1, climbrate / 3.0)
```
Tu tasa de ascenso media dividida entre 3,0 m/s (con un máximo de 1). Así que 3 m/s o más = puntuación perfecta. Menos = proporcionalmente menos.

**2. Puntuación de eficiencia**
```
efficiencyScore = heightGain / horizontalDistance
```
Ya es un valor entre 0 y 1. Eficiencia perfecta (subir en vertical) = 1,0. Cuanto más derivas en horizontal, más baja.

**3. Puntuación de centrado**
```
centeringScore = centeringQuality
```
Sale del algoritmo de análisis del núcleo: cuánto tiempo pasaste cerca del punto dulce de la térmica. Ya está entre 0 y 1.

**4. Puntuación de regularidad**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
La inversa de la variabilidad de tu vario (desviación típica de las lecturas de ascenso). Térmica suave = puntuación alta. Saltar entre +5 y -2 m/s = puntuación baja. Una variabilidad de 2 m/s o más = aportación nula a la regularidad.

**5. Puntuación de sostenido**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina la duración y el número de vueltas para premiar el trabajo real en térmica. La puntuación completa exige unos 90 segundos Y 2 o más vueltas completas. Una pasada de 15 segundos con 0 vueltas puntúa casi cero aquí, aunque las demás métricas pinten genial.

---

## Ejemplo resuelto: térmica n.º 9

Hagamos un cálculo real con números concretos. Supón que trabajaste una térmica con estos datos:

| Métrica | Valor |
|--------|-------|
| Tasa de ascenso | 2,15 m/s |
| Eficiencia | 0,41 (41 %) |
| Calidad de centrado | 0,53 (53 %) |
| Variabilidad | 0,92 m/s |
| Duración | 75 segundos |
| Número de vueltas | 3 vueltas |

### Paso 1: calcular la puntuación de cada componente

**Puntuación de ascenso:**
```
climbScore = min(1, 2.15 / 3.0)
climbScore = min(1, 0.717)
climbScore = 0.717
```
Tu tasa de ascenso de 2,15 m/s es el 71,7 % de la referencia «perfecta» de 3,0 m/s.

**Puntuación de eficiencia:**
```
efficiencyScore = 0.41
```
Ya está normalizada. Ganaste en vertical un 41 % de lo que recorriste en horizontal. Bastante típico de una térmica con mucha deriva.

**Puntuación de centrado:**
```
centeringScore = 0.53
```
Pasaste más o menos la mitad del tiempo en buena ascendencia. Hay margen de mejora, pero no está mal.

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
Pasaste 75 segundos y diste 3 vueltas completas: buen trabajo en térmica.

### Paso 2: aplicar los pesos

Ahora multiplica cada puntuación por su peso:

| Componente | Puntuación | Peso | Aportación |
|-----------|-------|--------|--------------|
| Ascenso | 0,717 | 0,30 | 0,215 |
| Eficiencia | 0,41 | 0,20 | 0,082 |
| Centrado | 0,53 | 0,20 | 0,106 |
| Regularidad | 0,54 | 0,15 | 0,081 |
| Sostenido | 0,833 | 0,15 | 0,125 |
| **Total** | | | **0,609** |

### Paso 3: escalar a 0-100

```
qualityScore = round(0.609 * 100) = 61
```

**Resultado: puntuación global de 61**, de lleno en el rango «Buena».

---

## Interpretar tu puntuación

| Rango | Valoración | Qué significa |
|-------------|--------|---------------|
| **70-100** | Excelente | Centrado de nivel de competición. Encontraste el núcleo rápido y te quedaste en él. |
| **50-69** | Buena | Buen trabajo. Ganaste la altura sin perder demasiado tiempo. |
| **25-49** | Regular | Cumpliste, pero te dejaste algo de rendimiento por el camino. |
| **0-24** | Floja | Te costó encontrar o mantener el núcleo, o las condiciones eran realmente horribles. |

---

## Qué te dice cada componente

### Tasa de ascenso (peso del 30 %)

Es el que más pesa porque... bueno, de lo que se trata es de subir. Pero no te obsesiones: a veces una térmica de 1,5 m/s trabajada a la perfección te da más kilómetros de distancia que una de 4,0 m/s de la que te caes una y otra vez.

**¿Puntuación de ascenso baja?**
- La térmica era realmente débil (no es culpa tuya)
- Pasaste demasiado tiempo en los bordes (mira el centrado)
- Llegaste tarde a la fiesta y solo pillaste la parte de arriba

### Eficiencia (peso del 20 %)

Eficiencia = altura ganada / distancia horizontal recorrida. Una hélice perfecta subiendo en vertical puntuaría 1,0 (y además sería imposible con cualquier viento real).

Valores típicos:
- **0,3-0,4**: normal, algo de deriva
- **0,5-0,6**: muy bien, giros cerrados
- **0,6+**: excelente, deriva mínima

**¿Eficiencia baja?**
- Viento fuerte que te empuja de lado
- Giros abiertos o poca inclinación
- Entrar a favor del viento y no corregir nunca

### Calidad de centrado (peso del 20 %)

Cuánto tiempo pasaste en lo bueno frente a deambular por los bordes. Se calcula con un decaimiento exponencial según la distancia al núcleo: cuanto más lejos del centro, más rápido cae tu puntuación.

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

### Sostenido (peso del 15 %)

Combina la duración y el número de vueltas para demostrar que trabajaste la térmica de verdad y no que solo pasabas por ahí. Atravesar 4 m/s de ascendencia durante 10 segundos no es centrar una térmica: es suerte. Este factor premia a los pilotos que se comprometen con la térmica y la trabajan como es debido.

La puntuación completa exige:
- **~90 segundos** de duración (las térmicas más cortas puntúan proporcionalmente menos)
- **2 o más vueltas completas** (menos vueltas puntúan proporcionalmente menos)

Los dos factores se multiplican, así que necesitas AMBOS para puntuar bien aquí. Un planeo recto de 2 minutos a través de una ascendencia (0 vueltas) puntúa cero. Un solo 360 rápido en ascendencia débil (10 segundos) también puntúa casi cero.

**¿Puntuación de sostenido baja?**
- Dejaste la térmica demasiado pronto
- No te comprometiste a girar (pasada)
- La térmica murió antes de que pudieras trabajarla bien

---

## Cómo mejorar tu puntuación

### Mejoras rápidas

1. **Cierra el giro en cuanto toques ascendencia**: no esperes, empieza a girar en cuanto se dispare el vario
2. **Desplaza tu círculo hacia la ascendencia**: la técnica clásica de centrado, abre al salir y cierra al entrar
3. **Vigila tu inclinación**: demasiado plana = círculos abiertos = deriva. Demasiado inclinada = poco eficiente en ascendencia débil

### Sigue tu progresión

Abre la misma térmica en la herramienta de análisis después de varios vuelos desde la misma zona. Empezarás a ver patrones:
- «Siempre me cuesta centrar en este despegue»
- «Mis térmicas de la tarde son más regulares»
- «Esa vela nueva ha mejorado mucho mi eficiencia»

### No persigas el número

Un 45 en una térmica rota y pegona puede reflejar un vuelo mejor que un 70 en una columna ancha y suave. El contexto importa. Usa la puntuación para seguir tu propia progresión con el tiempo, no para compararte con otros en días distintos.

---

## Entre bastidores: ¿por qué estos pesos?

Los pesos (30/20/20/15/15) no salen de la nada. Se basan en lo que de verdad importa para centrar térmicas con eficacia:

- **El ascenso manda** (30 %) porque el objetivo principal es subir. Una térmica débil trabajada a la perfección sigue siendo una térmica débil.

- **La eficiencia y el centrado se reparten el peso de la técnica** (20 % cada uno) porque ambos tienen que ver con la habilidad. Puedes tener uno sin el otro (buen centrado pero derivando hacia fuera, o giros cerrados en el sitio equivocado).

- **La regularidad es un modificador** (15 %) porque parte de la turbulencia no depende de ti. Afecta a tu puntuación, pero no la domina.

- **El sostenido filtra los golpes de suerte** (15 %) porque atravesar brevemente una ascendencia fuerte no es centrar una térmica: es suerte. Este factor garantiza que las puntuaciones altas sean para los pilotos que se comprometieron de verdad a trabajar la térmica.

---

## Escenarios de ejemplo

### El ascensor de la suerte

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Tasa de ascenso | 4,2 m/s | 1,0 (máximo) |
| Eficiencia | 0,65 | 0,65 |
| Centrado | 0,78 | 0,78 |
| Regularidad | 0,38 m/s | 0,81 |
| Duración / vueltas | 120 s / 4 vueltas | 1,0 |

**Aportaciones:** 0,30 + 0,13 + 0,156 + 0,122 + 0,15 = **0,86**
**Puntuación:** 86 (Excelente)

Pillaste una térmica monstruosa, te quedaste en el núcleo y la subiste durante dos buenos minutos. El escenario soñado.

### La pasada breve (penalizada)

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Tasa de ascenso | 3,5 m/s | 1,0 (máximo) |
| Eficiencia | 0,72 | 0,72 |
| Centrado | 0,85 | 0,85 |
| Regularidad | 0,45 m/s | 0,78 |
| Duración / vueltas | 18 s / 0 vueltas | 0,0 |

**Aportaciones:** 0,30 + 0,144 + 0,17 + 0,117 + 0,0 = **0,73**
**Puntuación:** 73 (Excelente... por los pelos)

Ascendencia fuerte, lecturas del vario estupendas, pero pasaste de largo sin comprometerte a girar. La puntuación de sostenido a cero la hunde bastante. Con el sistema de puntuación antiguo, habría sido 85 o más.

### El ascenso peleado

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Tasa de ascenso | 1,8 m/s | 0,60 |
| Eficiencia | 0,38 | 0,38 |
| Centrado | 0,45 | 0,45 |
| Regularidad | 1,4 m/s | 0,30 |
| Duración / vueltas | 180 s / 6 vueltas | 1,0 |

**Aportaciones:** 0,18 + 0,076 + 0,09 + 0,045 + 0,15 = **0,54**
**Puntuación:** 54 (Buena)

Térmica débil, núcleo roto, mucho buscar. Pero aguantaste 3 minutos y diste 6 vueltas. Esa constancia tiene premio.

### El que exprime el núcleo

| Métrica | Valor | Puntuación |
|--------|-------|-------|
| Tasa de ascenso | 2,4 m/s | 0,80 |
| Eficiencia | 0,52 | 0,52 |
| Centrado | 0,85 | 0,85 |
| Regularidad | 0,65 m/s | 0,68 |
| Duración / vueltas | 95 s / 3 vueltas | 1,0 |

**Aportaciones:** 0,24 + 0,104 + 0,17 + 0,102 + 0,15 = **0,77**
**Puntuación:** 77 (Excelente)

Térmica moderada, pero clavaste el centrado y la trabajaste como es debido. La técnica por encima de la potencia.

---

## En resumen

La puntuación global de térmica no está para juzgarte: está para darte información. Un resumen numérico de «qué pasó ahí dentro» para que aprendas de cada térmica en lugar de quedarte solo con un «esa estuvo bien».

Úsala para:
- Detectar patrones en tu forma de volar
- Seguir tu progresión con el tiempo
- Identificar puntos débiles concretos que trabajar
- Presumir ante tus amigos con datos de verdad

Y recuerda: incluso una térmica «Regular» que te llevó a la siguiente es mejor que una «Excelente» que no cogiste por esperar algo mejor.

¡Ahora sal a volar!

---

Ver también: [Análisis avanzado de térmicas](advanced-thermal-analysis.md) | [Ajustes del análisis](advanced-thermal-analysis-settings.md)
