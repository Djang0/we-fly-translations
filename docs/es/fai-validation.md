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
- **Verificación oficial**: prueba de que el vuelo es legítimo
- **Certificación**: requisitos de insignias y licencias

### Cómo funciona

1. **Abre el vuelo**: ve a la página de detalle del vuelo
2. **Pulsa «Validar vuelo (FAI)»**: se envía al servicio FAI CIVL
3. **Procesamiento**: el archivo IGC se envía a http://vali.fai-civl.org
4. **Resultados**: se devuelve el resultado de la validación
5. **Almacenamiento**: el resultado se guarda con el vuelo

### Resultados de la validación

Hay dos resultados posibles:

#### VÁLIDO
- El vuelo es válido según las normas de la FAI
- Integridad del archivo IGC confirmada
- El track GPS es legítimo
- No se ha detectado ninguna manipulación
- Certificado de validación disponible

#### NO VÁLIDO
- El vuelo no ha superado la validación
- Posibles motivos:
  - Problemas de integridad del archivo IGC
  - Anomalías en el track GPS
  - Formato de datos no válido
  - Sospecha de manipulación

### Qué comprueba la FAI

El servicio de validación de la FAI verifica:
- **Integridad del registro G**: validación de la firma de seguridad
- **Formato del archivo**: estructura IGC válida
- **Continuidad del track GPS**: sin huecos ni saltos
- **Coherencia de los datos**: correlación entre altitud, posición y hora
- **Validación del instrumento**: dispositivos GPS conocidos o aprobados

### Certificado de validación

Si el vuelo es válido:
- Se facilita un enlace al certificado de validación
- Puede usarse para presentaciones oficiales
- Queda un registro permanente en los servidores de la FAI
- Prueba de que el vuelo es legítimo

### Notas importantes

**La validación FAI NO es necesaria para:**
- El uso normal de We-Fly
- Tu libro de vuelo personal
- Compartir vuelos con amigos
- Las funciones de la comunidad

**La validación FAI SÍ es necesaria para:**
- Competiciones oficiales
- Homologación de récords
- Certificaciones e insignias de piloto
- Reclamar premios de competiciones
