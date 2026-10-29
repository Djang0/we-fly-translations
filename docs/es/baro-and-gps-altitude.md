---
title: Por qué difieren la altitud baro y la GPS
description: Qué mide la altitud barométrica de tu registrador, por qué no coincide con la GPS y cómo We-Fly la ajusta a tu despegue
category: Your Flights
order: 7
---

## Dos altitudes, dos referencias

La mayoría de los instrumentos registran dos altitudes cada segundo: una del barómetro y otra del GPS. En la página del vuelo, el selector **Baro / GPS** encima del mapa elige cuál muestra la gráfica. Casi nunca coinciden, y algunos días hay 200 m de diferencia.

La **altitud GPS** es tu altitud sobre el nivel medio del mar, medida por satélite. Tiene ruido de un segundo a otro, pero no arrastra ningún error propio del día.

La **altitud baro** sale de la presión del aire. Es suave y precisa de un segundo a otro, por eso tu vario la usa. Pero el estándar IGC pide a los registradores que la graben con la **presión estándar, 1013 hPa**, no con la presión real a nivel del mar de ese día (el QNH). La pantalla de tu vario muestra el QNH si lo ajustaste antes de despegar. El archivo siempre guarda la versión estándar.

## Cuánto se puede desviar

Cerca del nivel del mar, 1 hPa equivale a unos 8 m de altura.

| Día | Presión a nivel del mar | La baro del archivo marca |
|---|---|---|
| Estándar | 1013 hPa | más o menos bien |
| Anticiclón fuerte | 1030 hPa | unos 140 m de menos |
| Anticiclón de invierno | 1040 hPa | unos 225 m de menos |
| Borrasca profunda | 985 hPa | unos 230 m de más |

La temperatura añade un error más pequeño que crece con la altura: con aire más cálido que el estándar, el barómetro marca de menos alrededor de un 4 % de tu altura por cada 10 °C.

Con un anticiclón fuerte, un campo cerca de la costa marca por debajo de cero. Un campo de torno a 30 m, con 1030 hPa, registra unos -110 m. Esa lectura es correcta para el estándar que usa; tu registrador no está roto.

## Qué muestra We-Fly

En la gráfica de altitud, la curva baro está **ajustada al despegue**: desplazada una sola vez para todo el vuelo de modo que, al despegar, quede sobre el terreno, igual que ajustas tu vario antes de despegar. La lectura encima de la gráfica dice **Alt. baro · ajustada al despegue**, y el **ⓘ** junto al selector Baro / GPS te indica el desplazamiento aplicado a ese vuelo. Cuando el track no tiene datos de terreno, la curva baro se alinea con la GPS.

Ese mismo desplazamiento da una estimación de la presión a nivel del mar del día: la tarjeta **Alturas** del resumen del vuelo la muestra como **QNH del día**. Es aproximada, porque la temperatura fuera de la atmósfera estándar la desvía, más aún en despegues altos.

El desplazamiento solo sube o baja la curva. Tu vario, las tasas de ascenso, las ganancias de altura y las térmicas se calculan a partir de diferencias de altitud, así que no dependen de él. Todas las alturas absolutas del análisis (altitud máxima y mínima, el techo, la cima de las térmicas, las alturas sobre el suelo) usan el mismo desplazamiento.

Tu archivo IGC nunca se modifica: las descargas y exportaciones te dan el original, tal cual lo escribió tu instrumento.

## En cuál confiar

- **Para ascensos, descendencias y altura ganada:** baro. Es suave y el error del día se anula.
- **Para altura absoluta, espacio aéreo y comparar con otros pilotos:** GPS, o baro ajustada al despegue. La comprobación de espacio aéreo en el mapa del vuelo siempre usa GPS.
- **Móviles sin barómetro:** las dos curvas son GPS. No hay nada que ajustar, y el **ⓘ** te lo indica.

Si las dos curvas siguen muy separadas durante todo el vuelo incluso después del desplazamiento, o la baro salta cientos de metros, puede que el sensor de presión de tu instrumento esté fallando. We-Fly marca esos vuelos en **Perfil → Anomalías**.
