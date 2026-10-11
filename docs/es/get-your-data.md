---
title: "Obtén tus datos"
description: "Descarga una copia completa de tus datos de vuelo"
category: Account & Data
order: 1
---

## Tus datos, tus reglas

Abre tu **Perfil** (desde el **Menú de la cuenta**, o ve directamente a `/profile`). En el panel **Cuenta**, pulsa **Exportar datos**. La fila muestra cuántos registros de vuelo tienes y, un clic después, un archivo ZIP aterriza en tus descargas más rápido que una bajada directa al aterrizaje tras un mal despegue.

No hay nada que rellenar ni ningún correo que esperar: el archivo se genera al momento. Con cientos de vuelos puede tardar un poco en empezar, así que dale unos segundos antes de volver a pulsar.

## ¿Qué hay en la caja?

El ZIP (llamado `we-fly-data-export-` seguido de un número) contiene una carpeta `my-data` con todo lo que tenemos sobre ti, al estilo RGPD:

- **flights/**: todos tus archivos IGC, ordenados por fecha (`flights/YYYY/MM/DD/`) para que encuentres aquel día épico de térmicas de 2021. Cada archivo conserva su nombre original y es exactamente el archivo que subiste, byte a byte
- **data-export.json**, lo más friki: tu perfil y tus preferencias (unidades, ajustes de visualización, colores de las velas, preferencias de correo), los metadatos de cada vuelo (fecha, piloto, vela, duración, distancia, despegue y aterrizaje, puntuación XC, estado de compartición), las cuentas de inicio de sesión vinculadas a tu perfil, tus llaves de acceso (solo nombres y fechas, nunca el material de la clave) y tus registros de consentimiento
- **README.txt**: explica qué es cada cosa, más un breve resumen de tus totales, por si lo abres seis cervezas más tarde
- **missing.txt**: solo aparece si no hemos encontrado algún archivo IGC de nuestro lado, y enumera los vuelos afectados

Las correcciones que hiciste en We-Fly (una fecha arreglada, una vela renombrada) están en `data-export.json`. Los archivos IGC nunca se modifican, así que siguen exactamente como los grabó tu instrumento.

## ¿Para qué?

- **Copia de seguridad**: porque los discos duros fallan, pero las térmicas en la nube no
- **Migrar**: ¿te llevas tu libro de vuelo a otra plataforma? IGC es el formato que entiende cualquier libro de vuelo
- **Pruebas**: ¿tienes que demostrarle a tu club que de verdad volaste ese triángulo? Ahí está todo

## Detalles técnicos para curiosos

Los archivos IGC funcionan con cualquier software de análisis de vuelo: XCTrack, SeeYou o lo que use tu grupo. El JSON está estructurado y es legible por máquina, así que puedes programarte tus propias estadísticas si eres ese tipo de piloto.

Aviso: la exportación tiene un límite de uso, así que mejor no machaques el botón como si repasaras la lista de comprobación prevuelo.

¿Solo quieres unos pocos archivos IGC y no el archivo completo? Selecciona vuelos en tu libro de vuelo y usa **Descargar archivos IGC** para llevarte solo esos, en un ZIP.
