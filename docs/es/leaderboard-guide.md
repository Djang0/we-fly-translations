---
title: Guía de las clasificaciones de la comunidad para pilotos
description: Quién vuela más frente a quién vuela mejor
category: Community
order: 2
---

*O cómo saber si eres el caballo de tiro de la comunidad o su purasangre*

## Dos clasificaciones, dos preguntas

Las clasificaciones de la comunidad de We-Fly responden a dos preguntas fundamentalmente distintas:

1. **Actividad:** «¿Quién vuela más?» (volumen)
2. **Eficiencia:** «¿Quién vuela mejor?» (calidad)

Piénsalo así: la Actividad es el número de páginas de tu libro de vuelo. La Eficiencia es lo que tiene de memorable cada página. Una premia que aparezcas, la otra que lo aproveches cuando apareces.

Vamos a desgranar las dos.

---

## La clasificación de Actividad (la pestaña «Vuelo más que tú»)

### Qué mide

La **puntuación XC** total de tus vuelos públicos. Nada más. Vuela más, vuela más lejos y suma puntos.

### Las reglas

No todos los vuelos cuentan. Esto es lo que vale:

| Criterio | Por qué |
|----------|-----|
| Distancia XC >= 10 km | Deja fuera los planeos directos al aterrizaje y la dinámica en el aparcamiento |
| Solo vuelos sin motor | Lo sentimos, paramotores: esta es para los que vuelan sin motor |
| El vuelo debe ser público | Los vuelos privados siguen siendo privados (respetamos tus secretos) |

### Qué ves

| Columna | Qué significa |
|--------|--------------|
| Puesto | Tu posición en la clasificación |
| Piloto | Nombre I. (respetuoso con la privacidad) |
| Vuelos | Número total de vuelos válidos |
| Horas | Tiempo de vuelo total en vuelos válidos |
| XC km | Kilómetros totales de vuelo de distancia |
| Puntuación XC | El número que determina tu puesto |
| Nivel | Tu insignia según tus horas totales de vuelo público |

### El sistema de niveles (versión rápida)

Tu insignia de nivel se basa en tus **horas totales de vuelo público** y va desde Ala de Bronce hasta Ala de Titanio. Es una insignia de progresión, no una medida de habilidad: vuela suficientes horas y subirás de nivel. Piensa en ella como las millas de viajero frecuente, pero para gente que vuela de verdad.

### En resumen

La Actividad premia la **constancia y la dedicación**. El piloto que hace 200 vuelos de distancia cortos quedará por delante del que hizo 10 increíbles. Es la clasificación de «sal a volar y punto», y no hay atajos. O le echas horas o no.

---

## La clasificación de Eficiencia (la pestaña «Vuelo mejor que tú»)

### Qué mide

Tu **puntuación de eficiencia**: una métrica compuesta que refleja lo bien que vuelas y la constancia con la que sales a volar. Aquí es donde brillan los pilotos de distancia dedicados.

### Cómo funciona

La puntuación de eficiencia combina tres métricas, **con el mismo peso**, mediante una normalización por puntuación z:

| Métrica | Qué premia |
|--------|----------------|
| **Distancia por hora** (km/h) | Avanzar con eficiencia: buena elección de ruta, buen planeo, poco rascar |
| **Distancia por vuelo** (km) | Llegar lejos cuando sales: comprometerse de verdad con el vuelo de distancia, no rendirse al primer viento en contra |
| **Número de vuelos válidos** | Aparecer: más vuelos válidos significa un compromiso más constante con el vuelo de distancia |

Tu puntuación compuesta es la media de las tres puntuaciones z:

```
Efficiency Score = (z_distance_per_hour + z_distance_per_flight + z_flight_count) / 3
```

Si las puntuaciones z te dejan la mirada perdida, echa un vistazo a la [Guía de la puntuación z para pilotos](/doc/z-score-pilot-guide) para la explicación completa. Pero aquí va la versión rápida:

### La chuleta de la puntuación z

| Puntuación | Color | Qué significa | Traducción para pilotos |
|-------|-------|--------------|-------------------|
| +2,0 o más | Verde | Muy por encima de la media de la comunidad | No solo vuelas, *viajas* |
| +1,0 a +2,0 | Verde | Claramente por encima de la media | Piloto eficiente, buenas decisiones |
| -1,0 a +1,0 | Neutro | Alrededor de la media de la comunidad | Normal, sano, nada raro aquí |
| -1,0 a -2,0 | Rojo | Por debajo de la media | Margen de mejora en eficiencia de distancia |
| -2,0 o menos | Rojo | Muy por debajo de la media | ¿Quizá pasas mucho tiempo en dinámica de ladera? |

Las tres métricas tienen **el mismo peso**. No puedes hacer trampa siendo rápido pero corto, o volando lejos una vez al año. Tienes que llegar lejos, ir rápido y seguir saliendo a volar.

### Criterios para entrar

No todo el mundo entra en la clasificación de eficiencia. No es elitismo, es estadística:

| Requisito | Motivo |
|-------------|--------|
| Distancia XC >= 10 km | Igual que en Actividad: solo vuelos de distancia de verdad |
| Duración del vuelo > 5 minutos | Si tu vuelo duró menos que una pausa para el café, no cuenta |
| Solo vuelos sin motor | El acelerador de gas es trampa (en este contexto) |
| **5 o más vuelos válidos** | Evita los éxitos de un solo vuelo y el ruido estadístico |
| 2 o más pilotos válidos en la comunidad | Hacen falta al menos dos datos para calcular puntuaciones z |

### El desglose al pasar el ratón

Pasa el ratón (o toca en el móvil) sobre cualquier fila para ver el desglose de la puntuación z por métrica. Te dice *de dónde* viene tu eficiencia:

- ¿Muchos km/h pero pocos km/vuelo? Eres rápido, pero haces rutas cortas.
- ¿Pocos km/h pero muchos km/vuelo? Cubres distancia, pero te lo tomas con calma.
- ¿Muchos vuelos pero distancias cortas? Eres constante, pero todavía no apuras el vuelo de distancia.
- ¿Las tres altas? Eres el piloto del que se quejan los demás en el grupo de WhatsApp.

---

## Cómo leer las puntuaciones z (versión de 30 segundos)

Una puntuación z te dice a qué distancia estás de la media de la comunidad, medida en desviaciones típicas.

- **Puntuación de 0** = ERES la media
- **Puntuación de +1,5** = Estás 1,5 desviaciones típicas por encima de la media (territorio del ~7 % superior)
- **Puntuación de -0,5** = Un poco por debajo de la media (totalmente normal, aquí está aproximadamente el 30 % de los pilotos)
- **Puntuación de +2,5** = Valor atípico estadístico: algo estás haciendo bien (o todos los demás lo están haciendo mal)

Las puntuaciones z son **relativas**. Si mañana se une a la comunidad un puñado de bestias del vuelo de distancia, las puntuaciones de todos se mueven. Tu forma de volar no ha cambiado; lo que ha cambiado es la vara de medir.

¿Quieres profundizar con ejemplos resueltos y código? Lee la [Guía completa de la puntuación z para pilotos](/doc/z-score-pilot-guide).

---

## Preguntas frecuentes y trampas

### «¿Por qué no aparezco en la clasificación de Eficiencia?»

Necesitas **5 o más vuelos válidos** (10 km de XC o más, sin motor, de más de 5 minutos). Si tienes 4 vuelos válidos y 47 planeos directos, todavía te falta. Sal a hacer un vuelo de distancia de verdad más y estás dentro.

### «Vuelo TODO el rato, pero mi puntuación de eficiencia es baja.»

Es así a propósito. A la clasificación de eficiencia no le importa *cuánto* vuelas: para eso está la de Actividad. La Eficiencia mide lo lejos y lo rápido que vas *por vuelo*. Si registras montones de vuelos locales cortos, tu puesto en Actividad sube mientras tu puntuación de eficiencia se queda en un regular.

### «Mi puntuación es negativa. ¿Soy un mal piloto?»

No. Una puntuación negativa significa que estás **por debajo de la media actual de la comunidad** en esas métricas. Es relativa. Si la comunidad está llena de pilotos de competición de distancia, incluso un buen piloto de ocio saldrá en negativo. No dice nada de tu seguridad, de tu manejo en turbulencia, de tu precisión al aterrizar ni de tu habilidad para elegir bar después de volar.

### «¿Por qué el mínimo de 10 km?»

Porque queremos medir el vuelo de distancia, no centrar térmicas sobre el aparcamiento. El corte de 10 km deja fuera los planeos directos, las sesiones locales de dinámica y esos vuelos en los que técnicamente hiciste «distancia», pero solo derivaste a favor del viento hasta el campo más cercano. Si no cubriste una distancia real, no es XC: es simplemente volar, y no tiene nada de malo, pero va en otro marcador.

### «¿Por qué aparece mi nombre abreviado?»

Privacidad. Todos los nombres de piloto aparecen como **Nombre I.** (nombre + inicial del apellido) en las clasificaciones. Tu nombre completo sigue en tu perfil, pero las clasificaciones públicas lo tratan con respeto.

### «¿Puedo aparecer en las dos clasificaciones?»

Por supuesto. La mayoría de los pilotos activos aparecerán. Puedes quedar 3.º en Actividad y 15.º en Eficiencia, o al revés. Las dos clasificaciones miden cosas completamente distintas, y destacar en una no garantiza la otra.

---

## En resumen (TL;DR)

- **Actividad** = puntuación XC total de tus vuelos públicos. Vuela más, sube más. Así de simple.
- **Eficiencia** = lo lejos, lo rápido y lo a menudo que haces vuelos de distancia, normalizado respecto a la comunidad. Vuela mejor, sube más.
- Las dos usan un **mínimo de 10 km de XC** y excluyen los vuelos a motor.
- La Eficiencia exige **5 o más vuelos válidos** y usa **normalización por puntuación z**.
- Puntuación de eficiencia positiva (verde) = por encima de la media. Negativa (rojo) = por debajo. Ninguna de las dos juzga tu carácter.
- Pasa el ratón sobre una fila para ver el desglose por métrica.

Ahora deja de leer sobre clasificaciones y ve a registrar un vuelo que te suba un puesto.

---

*«Hay dos tipos de pilotos: los que miran la clasificación antes de volar, y los mentirosos.»*
*- Antiguo proverbio de We-Fly*
