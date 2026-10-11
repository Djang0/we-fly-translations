---
title: "Guía de la meteo histórica"
description: "Conoce las condiciones atmosféricas reales registradas el día de cualquier vuelo de tu libro de vuelo"
category: Your Flights
order: 3
---

# La meteo histórica: sabe en qué aire volabas

Acabas de hacer un día de distancia de los buenos, has tocado techo y ahora estás de vuelta en el coche preguntándote qué estaba pasando exactamente ahí arriba. O quizá aterrizaste corto y quieres saber si te ganó una convergencia o simplemente tomaste una mala decisión. La pestaña **Meteo** te da el panorama atmosférico completo de cada vuelo de tu libro de vuelo, a toro pasado.

Gracias al **archivo histórico de Open-Meteo**, esta pestaña trae la meteo real registrada en tu despegue el día exacto en que volaste. No es una previsión. No es una estimación. Son los números reales, hora a hora.

---

## Lo que ves de un vistazo

Arriba de la pestaña, seis tarjetas de resumen te dan lo más destacado del día:

| Tarjeta | Lo que te dice |
|---|---|
| **Temperatura** | Máxima y mínima del día, más los valores de sensación térmica |
| **Precipitación** | Lluvia total del día en mm |
| **Viento máx.** | Viento medio máximo, racha máxima y dirección dominante |
| **Sol** | Cuántas horas de sol directo llegaron al suelo |
| **Amanecer / Atardecer** | Horas locales de la ventana de vuelo aprovechable del día |

Son tus comprobaciones rápidas: ¿fue un día de sol pleno o pasaste la tarde peleando entre claros?

---

## Tabla de condiciones por hora

Aquí se pone interesante. La tabla desglosa las condiciones hora a hora en 13 columnas. Las horas que caen dentro de tu **ventana de vuelo real** (del despegue al aterrizaje) aparecen resaltadas, para que puedas centrarte en lo que hacía la atmósfera mientras estabas en el aire.

Esto es lo que significa cada columna:

### Hora
Hora local de la lectura (formato HH:MM). El punto azul junto a la hora marca las horas que coinciden con tu vuelo.

### Cond.: estado del tiempo
Un icono y una etiqueta según el código meteorológico WMO. Cubre desde «Despejado» hasta «Tormenta + granizo». Si estabas rascando bajo un cielo gris, esto te confirma si estaba cubierto, parcialmente nublado o si era niebla de verdad.

### Temp.: temperatura a 2 m
Temperatura del aire a ras de suelo (2 metros), en **°C**. Con código de colores del azul (helada) al cian, verde, amarillo, naranja y rojo (calor). Un atajo visual: el verde es tu zona de confort, el naranja significa que hizo calorcito.

### Sens.: temperatura aparente
Lo que se sentía de verdad, teniendo en cuenta la humedad y el viento. Útil para entender por qué en el despegue hacía frío aunque el termómetro marcara 18 °C.

### Hum.: humedad relativa
El porcentaje de humedad del aire. Una humedad alta (por encima de ~80 %) tiende a frenar el desarrollo térmico y puede anunciar inestabilidad. Humedad baja con sol fuerte suele ser señal de que el día se puso en marcha de verdad.

### Viento: velocidad del viento a 10 m
Velocidad del viento medio a 10 metros sobre el suelo, en **km/h**. Es la referencia oficial del viento en superficie, medida a la altura meteorológica estándar.

### Dir.: dirección del viento
Dirección **desde** la que sopla el viento (N, NE, E, etc.), con una flecha girada a juego. Resolución de dieciséis rumbos para que veas si la brisa de valle aguantaba o si el viento sinóptico empezaba a colarse.

### Rachas: velocidad de las rachas
Racha máxima registrada durante esa hora, en **km/h**. Si este número es bastante más alto que el viento medio, el aire estaba turbulento. Un factor de racha (rachas ÷ viento) por encima de 1,5 es una señal a tener en cuenta.

### Nubes: nubosidad total
Porcentaje del cielo cubierto por nubes de todos los niveles, con una barra visual. Es el total combinado. Mira la sección de capas de nubes más abajo para un desglose más fino.

### Lluvia: precipitación
Lluvia acumulada durante la hora, en **mm**. Se muestra en azul cuando no es cero. Incluso 0,1 mm puede indicar un chubasco de paso; más de 1 mm en una sola hora significa que llovía de verdad en algún sitio cerca de tu zona de vuelo.

### Presión: presión media a nivel del mar
Presión atmosférica reducida al nivel del mar, en **hPa**. Una presión que baja a lo largo del día apunta a un empeoramiento; una presión que sube suele significar mejoría. La mayoría de los pilotos se fija en la tendencia más que en el valor absoluto.

### CLP AGL: altura de la capa límite planetaria
El techo de la capa de mezcla convectiva: básicamente, la altitud máxima teórica que pueden alcanzar las térmicas en esas condiciones atmosféricas, en **metros sobre el suelo (AGL)**. Este valor se mide desde el terreno de tu despegue, no desde el nivel del mar. Si estabas tocando techo y te preguntabas hasta dónde podías subir, este es tu número. Una CLP alta (más de 2000 m AGL) en un día de sol suele significar que el cielo es el límite; con una CLP baja (menos de 1000 m AGL), tocaba rascar.

> Puede que no haya datos de CLP para todas las fechas históricas. Cuando los hay, también aparecen en un gráfico de barras interactivo debajo de la tabla.

### Radiación: radiación solar de onda corta
La energía solar que llega al suelo, en **W/m²**. Es lo que dispara la producción de térmicas. Los valores por encima de 600 W/m² con buena inestabilidad atmosférica suelen ser el momento en que el día arranca. Si la radiación llegó a 800+ W/m² y aun así no encontrabas ascendencia, échale la culpa a la inversión.

---

## Gráfico de la altura de la capa límite

Cuando hay datos de CLP, un gráfico de barras debajo de la tabla muestra la altura de la capa límite a lo largo del día. Las horas dentro de tu ventana de vuelo aparecen resaltadas. Al pasar el cursor por una barra ves la altitud exacta de esa hora.

Úsalo para ver si el techo subía durante tu vuelo o si ya se estaba desplomando cuando despegaste tarde.

---

## Desglose de capas de nubes

Debajo de la tabla por horas encontrarás tres valores promediados **solo durante tu ventana de vuelo**:

- **Nubes bajas**: por debajo de 2 km. Son las que bloquean el calentamiento solar a nivel del suelo y matan las térmicas.
- **Nubes medias**: de 2 a 6 km. Menos impacto en el desarrollo térmico, más relevantes para la visibilidad en vuelo de distancia.
- **Nubes altas**: por encima de 6 km. Cirros y nubes de hielo de nivel alto. A menudo decorativas, pero una nubosidad alta persistente puede reducir la radiación lo bastante como para suavizar el día.

---

## Unas cuantas cosas a tener en cuenta

**Son datos de archivo histórico, no una medición puntual.** Open-Meteo reconstruye las condiciones a partir del reanálisis ERA5 y de modelos de alta resolución. Los valores son representativos de las condiciones en las coordenadas de tu despegue, pero no se capturan todos los efectos locales del relieve (vientos de valle, zonas de sombra, microclima). Úsalo como contexto meteorológico, no como verdad absoluta.

**La elevación importa.** Los datos están referidos a la elevación GPS de tu despegue. Las columnas de temperatura y presión lo tienen en cuenta, pero recuerda siempre que en una cresta, un collado o a la altura del techo las condiciones pueden ser distintas de lo que marca el sensor a 2 m.

**Los datos se guardan en caché tras la primera carga.** La meteo histórica no cambia nunca, así que una vez obtenida se guarda y las siguientes consultas son instantáneas.

---

## Usos prácticos

- **Debriefing posvuelo**: cruza el momento en que pillaste la ascendencia más fuerte con las curvas de radiación solar y de CLP.
- **Entender un mal día**: comprueba si la humedad o la nubosidad mataron las térmicas, o si el factor de racha hizo las condiciones más duras de lo esperado.
- **Comparar días parecidos**: abre dos vuelos de la misma zona de vuelo en estaciones distintas para ver qué condiciones atmosféricas hicieron que un día funcionara y el otro no.
- **Formación y análisis**: si trabajas con un instructor o quieres mejorar tu lectura de la meteo, esto te da la historia atmosférica comprobada detrás de cada vuelo de tu libro.

---

*Datos meteorológicos proporcionados por [Open-Meteo](https://open-meteo.com), un archivo meteorológico histórico abierto y gratuito.*
