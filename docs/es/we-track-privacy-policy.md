---
title: Política de privacidad de We-Track
description: Qué hace la app de instrumento de vuelo We-Track con tus datos, y qué no sale nunca de tu móvil
category: Account & Data
order: 5
---

**Última actualización:** 16 de octubre de 2026

## 1. Quiénes somos

We-Track es una app gratuita de instrumento de vuelo para pilotos de parapente, para Android e iOS: mapa móvil, variómetro, asistente de térmicas, navegación de mangas, alertas de espacio aéreo y grabación de vuelos en IGC.

**Responsable del tratamiento:** Upsky, Bélgica.
**Contacto:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud) (pon «We-Track privacy» en el asunto).

We-Track funciona por sí sola, sin cuenta. También puede conectarse a **We-Fly** (we-fly.cloud), un servicio independiente de libro de vuelo y análisis de vuelos. Lo que hace We-Fly con tus datos una vez que los recibe se explica en la [Política de privacidad de We-Fly](https://we-fly.cloud/doc/privacy-policy).

## 2. En resumen

- Tus vuelos, tu posición y tus ajustes se quedan **en tu móvil**.
- Solo salen de él para algo que tú has pedido: sincronizar con We-Fly cuando has iniciado sesión, cargar teselas de mapa, cargar un código de manga o compartir un archivo.
- Sin analítica, sin publicidad, sin seguimiento entre apps, sin elaboración de perfiles. No vendemos ni alquilamos ningún dato.
- We-Track no tiene cuenta propia ni servidor propio que recoja datos sobre ti.
- La frecuencia cardiaca se graba en tus archivos de vuelo **solo si lo activas**.

## 3. Datos guardados en tu móvil

Todo esto se guarda en el almacenamiento privado de la app. Otras apps no pueden leerlo y está **excluido de las copias de seguridad del móvil** (iCloud, Google, transferencia entre dispositivos). La contrapartida: los vuelos que no hayas subido a We-Fly se pierden si pierdes el móvil o desinstalas la app.

| Dato | Qué es | Para qué |
|---|---|---|
| Posición | Posición GPS, velocidad y altitud mientras usas la app | Mapa, navegación, vario, viento, detección y grabación del vuelo |
| Vuelos (archivos IGC) | Tu track GPS con horas y altitudes, despegue y aterrizaje, nombre del piloto y ala (de tus ajustes o de tu perfil de We-Fly), versión de la app, nombre del sistema del móvil (p. ej. «android» o «ios 18») y un identificador aleatorio del registrador | Tu libro de vuelo, los archivos que compartes o subes |
| Datos de instrumentos | Datos de los instrumentos Bluetooth que conectas, p. ej. un Vector Vario (presión, velocidad aerodinámica, temperatura, humedad, actitud, viento) | Se muestran en vuelo y se escriben en tus archivos IGC |
| Frecuencia cardiaca | Pulsaciones por minuto de una banda de pecho Bluetooth que conectas | Se muestra en vuelo. Se escribe en los archivos IGC **solo con tu consentimiento** (sección 6) |
| Ajustes | Unidades, pantallas, ala y polar, nombre del piloto, preferencias de sonido y visualización | Que la app funcione como la has configurado |
| Mangas, waypoints, objetivos | Mangas que cargas o creas, colecciones de waypoints | Navegación |
| Espacio aéreo y mapas | Archivos de espacio aéreo que importas o descargas, zonas de mapa y relieve sin conexión que descargas | Alertas y mapas sin red |
| Dispositivos conocidos | Nombre e identificador de los instrumentos Bluetooth que emparejaste | Volver a conectarse a ellos |
| Contraseñas y tokens de sesión | Tokens de sesión de We-Fly, contraseñas de cuentas de competición que decides recordar | Mantener la sesión iniciada |

Las contraseñas y los tokens se guardan en el almacenamiento seguro del móvil (Llavero de iOS, Android Keystore). Nunca se escriben en archivos de ajustes, registros ni copias de seguridad. En iOS se borran la primera vez que la app se abre tras una reinstalación.

La app no guarda registros en las versiones publicadas.

## 4. Permisos que pedimos

Pedimos cada permiso la primera vez que usas la función que lo necesita.

- **Ubicación, mientras usas la app.** Para mostrar tu posición, navegar y grabar tu vuelo. Durante un vuelo, la grabación continúa con la pantalla apagada; mientras tanto, Android muestra una notificación permanente e iOS el indicador azul de ubicación. Nunca pedimos la ubicación «Siempre».
- **Bluetooth.** Para conectar instrumentos (varios, bandas de pulso). En Android, el escaneo Bluetooth se declara como no usado nunca para averiguar tu ubicación.
- **Cámara.** Solo para escanear códigos QR de mangas. Las imágenes se procesan en el móvil y nunca se guardan ni se envían.
- **Notificaciones** (Android). Para la notificación que se muestra mientras se graba un vuelo.
- **Movimiento y forma física** (iOS). Para leer el barómetro del móvil y obtener la altitud y la velocidad vertical.

## 5. Qué sale de tu móvil, y hacia quién

### 5.1 We-Fly (solo cuando inicias sesión)

Iniciar sesión en We-Fly es opcional. We-Track inicia sesión a través de la propia página de We-Fly; We-Track nunca ve tu contraseña de We-Fly y no recibe tu dirección de correo electrónico. Una vez iniciada la sesión:

- **Los vuelos que grabas se suben automáticamente** a tu libro de vuelo de We-Fly después de aterrizar, con todo lo que contiene el archivo IGC (sección 3). También puedes subir vuelos que hayas importado.
- Tus vuelos, mangas, colecciones de waypoints y pantallas de We-Fly se sincronizan en ambos sentidos.
- We-Track lee el nombre de tu perfil (para el nombre de piloto del IGC) y tu lista de amigos (para la pantalla Amigos).
- Cuando descargas datos de espacio aéreo, We-Fly recibe la zona que elegiste (un país, o una zona de 300 km alrededor de tu posición) para enviarte el espacio aéreo correspondiente.
- We-Track **no** envía tu posición en directo a We-Fly.

Puedes cerrar la sesión en cualquier momento en Ajustes. Al cerrar la sesión se revoca el acceso en el lado de We-Fly. También puedes elegir borrar los datos de We-Fly copiados en tu móvil; los vuelos grabados en el móvil nunca se borran al cerrar la sesión. Para borrar datos guardados en We-Fly, usa tu perfil de We-Fly (consulta la [Política de privacidad de We-Fly](https://we-fly.cloud/doc/privacy-policy)).

### 5.2 Servidores de mapas y relieve

Para dibujar los mapas, la app descarga imágenes de mapa («teselas») del proveedor del mapa base que elijas. Como cualquier sitio web, estos servidores ven tu dirección IP, el nombre de la app y la zona del mapa que estás mirando, lo que les indica más o menos dónde estás. No reciben de nosotros ninguna cuenta ni identificador.

| Proveedor | Uso |
|---|---|
| [OpenStreetMap Foundation](https://osmfoundation.org/wiki/Privacy_Policy) (tile.openstreetmap.org) | Mapa base «tema We-Fly» |
| [OpenTopoMap](https://opentopomap.org/about) | Mapa base topográfico |
| [Esri](https://www.esri.com/en-us/privacy/overview) (ArcGIS Online) | Mapa base de satélite |
| [OpenFreeMap](https://openfreemap.org) | Mapa base de relieve y mapas sin conexión |
| [Mapterhorn](https://mapterhorn.com) | Sombreado del relieve y altitud del terreno, con y sin conexión |

Las zonas sin conexión que descargas vienen de OpenFreeMap y Mapterhorn; una vez descargados, esos mapas funcionan sin contactar con nadie.

### 5.3 Códigos de manga de XContest

Cuando escribes un código de manga de XContest, el código se envía a tools.xcontest.org para obtener la manga. No se envía ningún otro dato.

### 5.4 Escaneo de códigos QR en Android (Google ML Kit)

En Android, los códigos QR de mangas se leen con Google ML Kit. Las imágenes se procesan en el móvil. Google ML Kit puede enviar a Google datos técnicos sobre el funcionamiento del escáner (por ejemplo, estadísticas de rendimiento y uso), con independencia de We-Track. Consulta las [condiciones y la privacidad de Google ML Kit](https://developers.google.com/ml-kit/terms).

### 5.5 Archivos que compartes

Cuando exportas o compartes un archivo IGC o una manga, la app lo pasa al menú de compartir del sistema; tú eliges adónde va.

## 6. Frecuencia cardiaca

La frecuencia cardiaca es un dato de salud, que la legislación europea protege de forma más estricta.

- La visualización de la frecuencia cardiaca funciona siempre que haya una banda conectada y nunca se guarda.
- La frecuencia cardiaca solo se escribe en tus archivos de vuelo IGC si activas **Grabar la frecuencia cardiaca en los archivos de vuelo** y confirmas tu consentimiento. Está desactivado por defecto.
- Cuando está activado, la frecuencia cardiaca se guarda en tus archivos de vuelo en el móvil y, si has iniciado sesión en We-Fly, se sube con tus vuelos.
- Puedes desactivarlo en cualquier momento. Los vuelos grabados después ya no contienen frecuencia cardiaca; los vuelos ya grabados la conservan hasta que los borres de tu libro de vuelo (y de We-Fly).

## 7. Bases jurídicas (RGPD)

- **Prestación de las funciones que usas** (art. 6.1.b): grabar vuelos, mapas, sincronizar con We-Fly cuando inicias sesión, cargar mangas.
- **Tu consentimiento** (art. 6.1.a y, para la frecuencia cardiaca, art. 9.2.a): la frecuencia cardiaca en los archivos de vuelo. Puedes retirarlo en cualquier momento; esto no afecta a lo realizado antes.
- **Interés legítimo** (art. 6.1.f): los datos técnicos que los servidores de mapas necesitan para enviar las teselas.

## 8. Cuánto tiempo se conservan los datos

- **En tu móvil:** hasta que los borres en la app o desinstales la app. No se guarda nada en copias de seguridad.
- **En We-Fly:** según se describe en la [Política de privacidad de We-Fly](https://we-fly.cloud/doc/privacy-policy).
- **Servidores de mapas, XContest, Google:** según sus propias políticas (sección 5).

## 9. Seguridad

- Solo almacenamiento privado de la app; nada de almacenamiento compartido.
- Conexiones cifradas (HTTPS) en todas las peticiones de red.
- Contraseñas y tokens en el almacenamiento seguro del móvil, nunca en archivos de texto ni en registros.
- El inicio de sesión en We-Fly usa OAuth con PKCE: la app nunca maneja tu contraseña de We-Fly.

## 10. Transferencias fuera de la Unión Europea

Algunos proveedores citados en la sección 5 pueden tratar datos fuera de la Unión Europea (por ejemplo, Esri y Google en Estados Unidos). Son responsables de las garantías que aplican; consulta sus políticas.

## 11. Tus derechos

Tienes derecho a acceder a tus datos personales, rectificarlos, suprimirlos y recibir una copia, a oponerte a su tratamiento o limitarlo, y a retirar tu consentimiento en cualquier momento.

La mayoría de tus datos nunca nos llega: puedes verlos, exportarlos y borrarlos directamente en la app. Para los datos en We-Fly, usa tu perfil de We-Fly o contacta con We-Fly. Para cualquier otra cosa, escribe a [contact@we-fly.cloud](mailto:contact@we-fly.cloud). Respondemos en el plazo de un mes.

También puedes presentar una reclamación ante la Autoridad belga de Protección de Datos ([www.dataprotectionauthority.be](https://www.dataprotectionauthority.be)) o ante la autoridad del país en el que vives.

## 12. Menores

We-Track no está dirigida a menores de 13 años. Para sincronizar con We-Fly hay que cumplir la edad mínima propia de We-Fly (consulta la [Política de privacidad de We-Fly](https://we-fly.cloud/doc/privacy-policy)). Si crees que un menor de 13 años nos ha enviado datos personales, contacta con nosotros y los borraremos.

## 13. Cambios

Si esta política cambia, actualizamos la fecha de arriba y, en caso de cambios importantes, te avisamos en la app antes de que se apliquen.

## 14. Contacto

**Responsable del tratamiento:** Upsky, Bélgica
**Correo electrónico:** [contact@we-fly.cloud](mailto:contact@we-fly.cloud), asunto «We-Track privacy»
