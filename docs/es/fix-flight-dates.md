---
title: Corregir fechas de vuelo erróneas
description: Por qué algunos instrumentos graban una fecha equivocada y cómo corregirla sin perder tu vuelo
category: Your Flights
order: 6
---

## Cuando un vuelo aterriza en el día equivocado

Cada archivo IGC lleva la fecha del vuelo en su cabecera, con el día primero: `DDMMYY`. Algunos instrumentos la escriben al revés (`YYMMDD`). We-Fly lee entonces el año como día y el día como año, y un vuelo del 9 de julio de 2026 puede aparecer como del 26 de julio de 2009.

Tu track, tus horarios y tus puntuaciones están bien. Solo la fecha está mal, lo que coloca el vuelo en la temporada equivocada, en la racha equivocada y en el sitio equivocado de tu libro de vuelo.

## Corregir un vuelo

En tu libro de vuelo, abre el menú **⋯** del vuelo y elige **Cambiar fecha**.

- Si la fecha parece invertida, We-Fly muestra **Hay una corrección sugerida** con la fecha corregida. Toca **Usar la fecha sugerida** y luego **Guardar fecha**.
- Si no, elige el día correcto en el calendario y toca **Guardar fecha**. La hora del vuelo no cambia; solo cambia el día.

## Corregir muchos vuelos a la vez

Si un instrumento grabó toda una temporada con las fechas invertidas, selecciona esos vuelos en el libro de vuelo y usa **Corregir formato de fecha** en el menú de selección. Intercambia día y año en todos los vuelos seleccionados de una vez.

Úsalo solo en los vuelos realmente afectados. Si lo aplicas a un vuelo correcto, convierte una fecha buena en una mala y tu cronología se lía. En caso de duda, corrige primero un solo vuelo y comprueba el resultado.

## Evitar el problema

Actualiza el firmware de tu instrumento: la mayoría de los fabricantes corrigieron el formato de fecha hace tiempo. Si el problema sigue, dile al fabricante que su cabecera IGC no respeta la regla `HFDTE` de la especificación IGC.
