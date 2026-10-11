---
title: "Validación FAI"
description: "Usa la API pública de la FAI para validar tu vuelo"
category: Your Flights
order: 2
---

## Validación de vuelos FAI

### ¿Qué es la validación FAI?

La FAI (Fédération Aéronautique Internationale) es la federación mundial de deportes aéreos. We-Fly puede enviar vuelos al servicio oficial de validación FAI CIVL.

### Cuándo usar la validación FAI

Usa la validación FAI para:
- **Vuelos de competición**: verificación oficial en competiciones
- **Homologación de récords**: intentos de récord mundial o nacional
- **Verificación oficial**: prueba de que el archivo no se ha modificado
- **Solicitudes de insignias**: cuando una competición o una federación pide un track firmado

### Cómo funciona

1. **Abre tu vuelo**: la validación está disponible en tus propios vuelos
2. **Pulsa «Validar vuelo (FAI)»**: el icono de check en la barra de herramientas del vuelo (en el móvil, está en el menú **⋯**)
3. **Confirma**: el diálogo **Validación del vuelo por la FAI** explica lo que va a pasar; pulsa **Continuar**
4. **Procesamiento**: We-Fly envía el archivo IGC original, sin cambios, al servicio de validación FAI CIVL (vali.fai-civl.org)
5. **Resultados**: el botón pasa a **Validación FAI correcta** o **Validación FAI fallida**, y el resultado se guarda con el vuelo

Pulsa otra vez el botón para abrir el diálogo **Resultado de la validación FAI** (estado, mensaje y todos los datos de la validación). Para repetir la comprobación, usa **Volver a validar (FAI)** en el menú **⋯** del vuelo.

### Resultados de la validación

Hay dos resultados posibles:

#### VÁLIDO
- El servicio de la FAI ha aceptado el archivo
- El registro de seguridad IGC (registro G) coincide con el contenido del archivo
- El archivo no se ha modificado desde que el instrumento lo firmó

#### NO VÁLIDO
- El servicio de la FAI ha rechazado el archivo
- Posibles motivos:
  - Registro G ausente o dañado (algunas apps e instrumentos no firman sus archivos)
  - El archivo se editó después de la grabación
  - El servicio de la FAI no conoce el instrumento
  - Formato de datos no válido

El **Mensaje** del diálogo de resultado te dice lo que ha respondido el servicio.

### Qué comprueba la FAI

El servicio de validación de la FAI verifica el archivo en sí, no tu forma de volar:
- **Integridad del registro G**: la firma de seguridad que escribe el instrumento
- **Formato del archivo**: estructura IGC válida
- **Validación del instrumento**: la firma se comprueba con el programa de validación del fabricante del instrumento

No juzga si el vuelo fue reglamentario, si está bien puntuado ni si fue seguro.

### Dónde queda el resultado

El resultado de la validación se guarda con el vuelo en We-Fly, así que puedes volver a abrirlo cuando quieras. El servicio de la FAI devuelve un veredicto, no un certificado: si una competición o una homologación de récord te pide una prueba, normalmente quiere el archivo IGC original, que We-Fly conserva byte a byte tal como lo subiste.

### Notas importantes

**La validación FAI NO es necesaria para:**
- El uso normal de We-Fly
- Tu libro de vuelo personal
- Compartir vuelos con amigos
- Las funciones de la comunidad

**A menudo se exige un archivo IGC firmado y válido para:**
- Competiciones oficiales
- Homologación de récords
- Algunas competiciones y solicitudes de insignias

Consulta el reglamento de la competición o de la federación a la que presentas el vuelo.
