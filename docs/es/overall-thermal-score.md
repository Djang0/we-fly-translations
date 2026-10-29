---
title: La puntuación global de la térmica, explicada
description: Cómo calculamos la calidad de una térmica, con un ejemplo paso a paso
category: Thermal Analysis
order: 4
---

¿Has visto la puntuación de calidad de una térmica en la pestaña **Térmicas** y te has preguntado si de verdad significa algo? Buenas noticias: sí. No es a ojo. Vamos a desmontar exactamente cómo se calcula ese número para que entiendas qué separa un «Aceptable» de un «Excelente» y qué puedes hacer para mejorarlo.

## La idea general

La puntuación de la térmica (de 0 a 100) es una combinación ponderada de cinco factores. Son las mismas cinco filas que ves en el **Desglose de la puntuación** de una térmica:

| Factor | Peso | Qué mide |
|--------|------|----------|
| **Ascenso** | 30% | ¿Qué tan fuerte era la térmica en su mejor momento? |
| **Ascenso neto** | 20% | ¿Cuánto de ese ascenso conservaste? |
| **Centrado** | 20% | ¿Qué tan bien te quedaste en el núcleo? |
| **Regularidad** | 15% | ¿Qué tan estables eran las lecturas del vario? |
| **Sostenido** | 15% | ¿Te quedaste de verdad a trabajar la térmica? |

Cada factor se normaliza en una escala de 0 a 1, se multiplica por su peso y luego el total se lleva a una escala de 0 a 100. Sencillo en teoría, revelador en la práctica.

El factor **Sostenido** es clave: evita que las visitas cortas saquen notas altas. Pillar un buen ascenso durante un par de vueltas no demuestra que sepas centrar la térmica; quedarte y trabajarla, sí.

---

## La fórmula

Este es el cálculo real:

```
Quality Score = (climbScore * 0.30 +
                 netClimbScore * 0.20 +
                 centeringScore * 0.20 +
                 consistencyScore * 0.15 +
                 sustainedScore * 0.15) * 100
```

Los umbrales de la fórmula son fijos en m/s y metros, uses las unidades que uses en pantalla.

### Cómo se calcula cada componente

**1. Puntuación de ascenso**
```
climbScore = min(1, maxClimb / 5.0)
```
Tu mejor ascenso sostenido en la térmica (el valor **Máx.** en los detalles de la térmica, suavizado sobre 5 segundos para que un solo punto GPS con ruido no haga trampa) dividido entre 5.0 m/s, con un tope de 1. Solo la décima parte de los mejores ascensos en We-Fly se acerca al tope; un ascenso medio saca algo más de la mitad.

**2. Puntuación de ascenso neto**
```
netClimbScore = min(1, (heightGain / duration) / 3.0)
```
La altura que ganaste dividida entre el tiempo que pasaste en la térmica: tu ascenso medio, de la entrada a la salida. 3.0 m/s da el 1.0 completo; solo llega más o menos una térmica de cada cien. Mientras el ascenso máximo premia encontrar la parte fuerte, este premia quedarte en ella.

Las versiones anteriores comparaban la altura ganada con la distancia derivada. El viento la bajaba por sí solo, así que el mismo ascenso caía una franja en un día de viento. Al ascenso neto le da igual el viento.

**3. Puntuación de centrado**
```
excess = max(0, meanDistanceFromCore - coreRadius)
centeringScore = max(0, 1 - excess / (2 * coreRadius))
```
Una vela no gira sobre sí misma, así que girar justo al radio del propio núcleo (o más cerrado) da un 1.0 perfecto. Cada radio de núcleo extra de distancia te cuesta la mitad de la puntuación: girar al doble del radio del núcleo da 0.5, al triple da cero. Antes se elimina la deriva del viento comparando cada vuelta con su propio centro local.

**4. Puntuación de regularidad**
```
consistencyScore = max(0, 1 - variability / 2.0)
```
El inverso de la variabilidad del vario (la desviación estándar de tu tasa de ascenso suavizada). Térmica suave = puntuación alta. Saltar entre ascenso fuerte y descendencia = puntuación baja. Una variabilidad de 2 m/s o más = la regularidad no aporta nada.

**5. Puntuación de sostenido**
```
durationFactor = min(1, duration / 90)
turnFactor = min(1, turnCount / 2)
sustainedScore = durationFactor * turnFactor
```
Combina duración y número de vueltas para premiar el trabajo real en la térmica. La puntuación completa exige unos 90 segundos Y 2 o más vueltas completas. Todas las térmicas de la lista ya tienen al menos dos vueltas completas (consulta [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings)), así que en la práctica este factor sobre todo penaliza los ascensos cortos.

---

## Ejemplo paso a paso: térmica #9

Vamos con un cálculo real con números concretos. Supón que trabajaste una térmica con estos datos:

| Métrica | Valor |
|---------|-------|
| Ascenso máx. | 3.5 m/s |
| Ascenso neto | 1.8 m/s |
| Centrado | 0.53 (53%) |
| Variabilidad | 0.92 m/s |
| Duración | 75 segundos |
| Número de vueltas | 3 vueltas |

### Paso 1: calcula la puntuación de cada componente

**Puntuación de ascenso:**
```
climbScore = min(1, 3.5 / 5.0)
climbScore = 0.70
```
Tu mejor ascenso sostenido de 3.5 m/s es el 70% de la referencia de 5.0 m/s.

**Puntuación de ascenso neto:**
```
netClimbScore = min(1, 1.8 / 3.0)
netClimbScore = 0.60
```
Promediaste 1.8 m/s de la entrada a la salida, bastante por encima de la térmica típica (alrededor de 1 m/s).

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
Una variabilidad del vario de 0.92 m/s indica que la térmica estaba algo turbulenta, pero nada loco.

**Puntuación de sostenido:**
```
durationFactor = min(1, 75 / 90) = 0.833
turnFactor = min(1, 3 / 2) = 1.0
sustainedScore = 0.833 * 1.0 = 0.833
```
Estuviste 75 segundos y diste 3 vueltas completas: buen trabajo en la térmica, justo por debajo de la marca de 90 segundos.

### Paso 2: aplica los pesos

Ahora multiplica cada puntuación por su peso:

| Componente | Puntuación | Peso | Aporte |
|------------|------------|------|--------|
| Ascenso | 0.70 | 0.30 | 0.210 |
| Ascenso neto | 0.60 | 0.20 | 0.120 |
| Centrado | 0.53 | 0.20 | 0.106 |
| Regularidad | 0.54 | 0.15 | 0.081 |
| Sostenido | 0.833 | 0.15 | 0.125 |
| **Total** | | | **0.642** |

### Paso 3: escala de 0 a 100

```
qualityScore = round(0.642 * 100) = 64
```

**Resultado: una puntuación de 64**, justo dentro de «Bueno». Cerrar más los giros alrededor del núcleo subiría tanto el centrado como el ascenso neto, y ahí están los puntos fáciles.

---

## Cómo interpretar tu puntuación

| Rango | Etiqueta | Qué significa |
|-------|----------|---------------|
| **74 o más** | Sobresaliente | Los mejores ascensos de We-Fly. Térmica fuerte, bien trabajada. |
| **68 a 73** | Excelente | Mejor que tres de cada cinco térmicas. Encontraste el núcleo rápido y te quedaste en él. |
| **63 a 67** | Bueno | Por encima de la térmica típica. Buen trabajo. |
| **58 a 62** | Aceptable | Más o menos en la media. Cumpliste, pero te dejaste rendimiento por el camino. |
| **Menos de 58** | Flojo | Te costó encontrar o mantener el núcleo, un ascenso corto o unas condiciones realmente malas. |

Las franjas están calibradas con más de 100,000 térmicas reales voladas por pilotos de We-Fly: la térmica típica (mediana) saca unos 66, una cuarta parte de las térmicas saca 73 o más y una de cada diez llega a 80.

---

## Qué te dice cada componente

### Fuerza del ascenso (peso del 30%)

Es el factor con más peso porque... bueno, de lo que se trata es de subir. Usa tu mejor ascenso *sostenido*, así que premia encontrar la parte fuerte de la térmica, no solo aguantar ahí. Pero no te obsesiones: a veces una térmica débil trabajada a la perfección te da más distancia que una fuerte de la que te sales una y otra vez.

**¿Puntuación de ascenso baja?**
- La térmica era realmente débil (no es culpa tuya)
- Nunca encontraste la parte más fuerte del núcleo (revisa el centrado)
- Llegaste tarde a la fiesta y solo pillaste la parte de arriba

### Ascenso neto (peso del 20%)

Ascenso neto = altura ganada / tiempo en la térmica, comparado con 3.0 m/s. Es el ascenso que de verdad te llevaste, de la entrada a la salida, así que cada vuelta que pasas fuera de la térmica te cuesta aquí. El viento no lo cambia.

Valores típicos:
- **alrededor de 1 m/s**: una térmica típica
- **2 m/s o más**: un ascenso fuerte, bien trabajado (la décima parte de arriba)
- **3 m/s o más**: nota máxima

**¿Ascenso neto bajo?**
- La térmica era realmente débil (no es culpa tuya)
- Vueltas perdidas buscando o saliéndote del núcleo
- Giros muy abiertos o poca inclinación en un núcleo estrecho

### Calidad del centrado (peso del 20%)

Lo cerca del núcleo que giraste. Girar al radio del propio núcleo es perfecto; la puntuación baja en línea recta a medida que crece tu distancia media, hasta llegar a cero al triple del radio del núcleo.

**¿Centrado bajo?**
- Tardaste en encontrar el núcleo
- Te ibas saliendo y tenías que volver a centrar
- El núcleo se movía (térmica en burbuja) o era muy pequeño

### Regularidad (peso del 15%)

Se basa en la desviación estándar de las lecturas del vario. Pitido suave y constante = puntuación alta. Vario como loco = puntuación baja.

**¿Regularidad baja?**
- Térmica turbulenta (no siempre es culpa tuya)
- Atravesabas el núcleo y salías por el otro lado
- Ascenso y descendencia mezclados en la misma vuelta

### Trabajo sostenido (peso del 15%)

Combina duración y número de vueltas para demostrar que de verdad trabajaste la térmica en lugar de solo pasar por ella. Este factor premia a los pilotos que se comprometen con la térmica y la trabajan bien.

La puntuación completa exige:
- **unos 90 segundos** de duración (las térmicas más cortas puntúan proporcionalmente menos)
- **2 o más vueltas completas** (menos vueltas puntúan proporcionalmente menos)

Los dos factores se multiplican, así que necesitas AMBOS para puntuar bien aquí. Un ascenso de 30 segundos con tres vueltas solo se lleva un tercio de los puntos.

**¿Puntuación de sostenido baja?**
- Dejaste la térmica demasiado pronto
- La térmica se murió antes de que pudieras trabajarla bien

---

## Cómo mejorar tu puntuación

### Mejoras rápidas

1. **Cierra en cuanto entres en la térmica**: no esperes, empieza a girar en cuanto el vario empiece a pitar
2. **Desplaza el giro hacia el ascenso**: la técnica clásica de centrado, abre en el lado débil y cierra en el lado fuerte
3. **Vigila la inclinación**: poca inclinación significa giros abiertos y deriva; demasiada es ineficiente en térmicas débiles

### Sigue tu progreso

Compara térmicas de varios vuelos en la misma zona de vuelo. Empezarás a ver patrones:
- «En este despegue siempre me cuesta centrar»
- «Mis térmicas de la tarde son más regulares»
- «La vela nueva me ha mejorado mucho el ascenso neto»

### No persigas el número

Un 55 en una térmica rota y pegona puede ser mejor vuelo que un 80 en una columna ancha y suave. El contexto importa. Usa la puntuación para seguir tu propio progreso con el tiempo, no para compararte con otros en días distintos.

---

## Entre bastidores: ¿por qué estos pesos?

Los pesos (30/20/20/15/15) no salen de la nada. Se basan en lo que de verdad importa para centrar bien una térmica:

- **La fuerza del ascenso manda** (30%) porque el objetivo principal es subir. Una térmica débil trabajada a la perfección sigue siendo una térmica débil.

- **El ascenso neto y el centrado se reparten el peso técnico** (20% cada uno) porque los dos hablan de habilidad. Puedes tener uno sin el otro (giros cerrados en el sitio equivocado, o un giro bien centrado en una térmica de la que no paras de salirte).

- **La regularidad es un modificador** (15%) porque parte de la turbulencia escapa a tu control. Afecta a tu puntuación, pero no la domina.

- **El trabajo sostenido filtra las chiripas** (15%) porque un par de vueltas en un ascenso fuerte no es lo mismo que trabajar una térmica. Este factor asegura que las puntuaciones altas vayan a los pilotos que de verdad se comprometieron con el ascenso.

---

## Escenarios de ejemplo

### El ascensor de la suerte

| Métrica | Valor | Puntuación |
|---------|-------|------------|
| Ascenso máx. | 5.6 m/s | 1.0 (tope) |
| Ascenso neto | 3.4 m/s | 1.0 (tope) |
| Centrado | 0.78 | 0.78 |
| Regularidad | 0.38 m/s | 0.81 |
| Duración / vueltas | 120s / 4 vueltas | 1.0 |

**Aportes:** 0.30 + 0.20 + 0.156 + 0.121 + 0.15 = **0.927**
**Puntuación:** 93 (Sobresaliente)

Te metiste en una térmica monstruosa, te quedaste en el núcleo y la subiste durante dos buenos minutos. El escenario soñado.

### El paso rápido (penalizado)

| Métrica | Valor | Puntuación |
|---------|-------|------------|
| Ascenso máx. | 4.8 m/s | 0.96 |
| Ascenso neto | 2.4 m/s | 0.80 |
| Centrado | 0.85 | 0.85 |
| Regularidad | 0.45 m/s | 0.78 |
| Duración / vueltas | 25s / 2 vueltas | 0.28 |

**Aportes:** 0.288 + 0.16 + 0.17 + 0.116 + 0.042 = **0.776**
**Puntuación:** 78 (Sobresaliente)

Térmica fuerte, gran centrado, pero solo te quedaste dos vueltas. Si la hubieras trabajado 90 segundos con la misma técnica, el factor de sostenido habría sumado los puntos que faltan y la puntuación sería 88.

### El ascenso peleado

| Métrica | Valor | Puntuación |
|---------|-------|------------|
| Ascenso máx. | 2.6 m/s | 0.52 |
| Ascenso neto | 0.9 m/s | 0.30 |
| Centrado | 0.45 | 0.45 |
| Regularidad | 1.4 m/s | 0.30 |
| Duración / vueltas | 180s / 6 vueltas | 1.0 |

**Aportes:** 0.156 + 0.06 + 0.09 + 0.045 + 0.15 = **0.501**
**Puntuación:** 50 (Flojo)

Térmica débil, núcleo roto, mucho buscar. La etiqueta es dura, pero describe más la térmica que a ti: aguantaste 3 minutos y 6 vueltas, y el factor de sostenido te dio todos sus puntos. En un día así, el ascenso que te mantuvo en el aire fue la decisión correcta.

### El rey del núcleo

| Métrica | Valor | Puntuación |
|---------|-------|------------|
| Ascenso máx. | 3.4 m/s | 0.68 |
| Ascenso neto | 1.8 m/s | 0.60 |
| Centrado | 0.85 | 0.85 |
| Regularidad | 0.65 m/s | 0.68 |
| Duración / vueltas | 95s / 3 vueltas | 1.0 |

**Aportes:** 0.204 + 0.12 + 0.17 + 0.101 + 0.15 = **0.745**
**Puntuación:** 75 (Sobresaliente)

Térmica moderada, pero clavaste el centrado y la trabajaste bien. Técnica antes que potencia.

---

## En resumen

La puntuación de la térmica no está para juzgarte, sino para darte información. Un resumen numérico de «qué pasó ahí dentro» para que aprendas de cada térmica en lugar de solo recordar «esa estuvo buena».

Úsala para:
- Detectar patrones en tu forma de volar
- Seguir tu mejora con el tiempo
- Identificar puntos débiles concretos que trabajar
- Presumir ante tus amigos con datos de verdad

Y recuerda: hasta una térmica «Aceptable» que te llevó a la siguiente es mejor que una «Excelente» que no cogiste por esperar algo mejor.

¡Y ahora, a volar!

---

Ver también: [Análisis avanzado de térmicas](/doc/advanced-thermal-analysis) | [Cómo funciona la detección de térmicas](/doc/advanced-thermal-analysis-settings)
