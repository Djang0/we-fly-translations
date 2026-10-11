---
title: Exportar archivos IGC
description: Cómo sacar tus archivos IGC de las plataformas y los instrumentos más populares
category: Your Flights
order: 3
---

## Tus vuelos ya están por ahí: traigámoslos a casa

¿Ya registras tus vuelos en XContest o DHV-XC, o tienes años de tracks dormidos en tu Syride? No hace falta volver a volarlo todo. Así es como se sacan esos archivos IGC de donde estén escondidos y se meten en We-Fly.

---

## Plataformas online

### XContest

El libro de vuelo de vuelo libre más grande del mundo. Tus tracks están ahí. Solo tienes que desenterrarlos.

1. Inicia sesión en [xcontest.org](https://xcontest.org)
2. Haz clic en tu nombre de usuario → **My flights**
3. Abre cualquier vuelo de la lista
4. En la página de detalle del vuelo, busca el **icono de descarga** (etiqueta «IGC file») cerca del mapa del track
5. Haz clic. Tu navegador descarga el archivo `.igc`

También puedes descargarlos en bloque directamente:
- Ve a [xcontest.org](https://xcontest.org)
- Entra en **My flights**
- Selecciona una temporada que ya tenga vuelos; 
- Haz clic en el enlace **ALL IGC** (abajo a la izquierda)
- Descarga el archivo ZIP

---

### DHV-XC

La liga online nacional de Alemania: registros sólidos como una roca, interfaz algo enrevesada.

1. Inicia sesión en [dhv-xc.de](https://www.dhv-xc.de)
2. Entra en **My flights** (Meine Flüge)
3. Abre la página de detalle del vuelo
4. Busca el **enlace de descarga IGC** al final de la página (a menudo con la etiqueta «Download IGC-File»)
5. Listo, ya tienes el archivo

---

## Apps móviles

### Flyskyhy (iOS)

El registrador de referencia para los pilotos de Apple. Tus archivos IGC están dentro de la app.

1. Abre Flyskyhy → **Logbook**
2. Toca el vuelo que quieras
3. Toca el **icono de compartir** (arriba a la derecha, la caja con la flecha)
4. Elige **send to XContest** o **Send to DHV-XC**
5. Después puedes descargar el archivo IGC desde la plataforma.

**Consejo:** también puedes encontrar tus archivos IGC con la app Archivos, en la carpeta de Flyskyhy, si has activado el acceso desde Archivos.

---

### XCTrack (Android)

La app de instrumento de parapente para Android, que es también el sistema de instrumentos como el AIR³. Los tracks se guardan automáticamente después de cada vuelo.

**Con el widget Share (lo más fácil):**
1. En la pantalla principal, toca el **widget Share** (arriba a la derecha, parece un icono de compartir o subir)
2. Elige cualquier app instalada: Gmail, WhatsApp, Telegram, Google Drive, etc.
3. El archivo IGC va adjunto y sale para su destino

**Con el menú Tracklogs:**
1. Abre XCTrack → **Menu** (arriba a la izquierda) → **Tracklogs**
2. Mantén pulsado el vuelo o toca el icono del menú de tres puntos
3. Elige **Share** → selecciona la app de destino
4. Envíatelo a ti mismo o guárdalo directamente en el móvil

**Con la subida automática a XContest (si ya está conectada):**
1. Vincula tu cuenta de XContest en **Menu → Preferences → Pilot**
2. Al aterrizar con conexión a internet, el track se sube automáticamente
3. Después descarga el IGC desde XContest (ver arriba)

**Por USB (copia directa del archivo):**
- Los archivos están en `/storage/emulated/0/XCTrack/tracks/` (o en tu tarjeta SD)
- Conecta por USB → activa el modo **File Transfer** (transferencia de archivos) → ve a esa carpeta → copia los archivos `.igc`

---

### XCSoar (Kobo / Android / Windows)

XCSoar graba archivos IGC de forma nativa. Sin conversiones.

1. Los vuelos se guardan en la carpeta **XCSoar/logs/** de tu dispositivo
2. En Kobo: conecta por USB → ve a `XCSoar/logs/` → copia los archivos
3. En Android: la misma carpeta, por transferencia USB o con una app de gestión de archivos
4. Los archivos se nombran por fecha: `2024-07-15-XCS-XXX-01.igc`

---

## Instrumentos y hardware

### Oudie / Naviter (Oudie N, Omni, Oudie IGC …)

Naviter fabrica varios dispositivos: algunos son registradores dedicados y otros funcionan con Android. La forma de exportar depende del que tengas.

**Oudie N / Oudie Omni (basados en Android, con SeeYou Navigator):**

*Con la app SeeYou Navigator:*
1. Abre **SeeYou Navigator** → toca **Menu** → **Logbook**
2. Selecciona un vuelo
3. Toca el icono **Upload** → elige tu plataforma (XContest, DHV-XC, etc.)
4. Descarga el vuelo desde la plataforma elegida.

*Por USB:*
1. Conecta por USB → activa **File Transfer** en el dispositivo
2. Ve a `Internal storage/SeeYou Navigator/` (o similar)
3. Copia los archivos `.igc`

*Con SeeYou Cloud (si la sincronización automática está activada):*
1. Inicia sesión en [seeyou.cloud](https://seeyou.cloud)
2. Ve a **Flights** → abre un vuelo
3. Haz clic en **Download IGC**

**App SeeYou Navigator (en tu propio móvil Android/iOS):**
- Igual que el Oudie N de arriba: Logbook → seleccionar vuelo → enviar

---

### Skytraxx (2.1, 4.0, 5.0 …)

Enchufar y listo. El Skytraxx se monta como una unidad USB: sin drivers, sin dramas.

1. Conecta tu Skytraxx al ordenador por USB
2. Aparece como una unidad externa
3. Abre la unidad → busca la carpeta **IGC** (o los archivos en la raíz)
4. Copia los archivos `.igc` que quieras

---

### Syride (serie SYS)

Instrumentos franceses, sólidos como una roca. Los archivos se transfieren por USB o con el software de escritorio.

**USB (lo más rápido):**
1. Conecta tu instrumento Syride por USB, se monta como una unidad
2. Abre la carpeta **FLIGHTS** del dispositivo
3. Copia los archivos `.igc` a tu ordenador

**Desde [syride.com](https://syride.com):**
1. Inicia sesión → **My flights**
2. Haz clic en un vuelo → **Download IGC**

---

### Flymaster (B1 Nav, Live SD, …)

1. Conecta tu Flymaster por USB, se monta como una unidad
2. Abre la carpeta **TRACKS** o **FLIGHTS**
3. Copia tus archivos `.igc`

**Desde [flymaster.net](https://flymaster.net):**
1. Inicia sesión → **My flights**
2. Abre un vuelo → **Download IGC**

---

### SkyBean (SkyDrop, SkyDrop+)

El SkyDrop es un registrador diminuto y ligero que graba archivos IGC.

1. Conecta el SkyDrop a tu ordenador por USB
2. Ve a la carpeta **IGC** o **FLIGHTS**
3. Copia los archivos

---

## Cuando ya tengas tus archivos IGC

Ve a [/upload](/upload), suelta tus archivos y We-Fly se encarga del resto: estadísticas, térmicas, todo. ¿Tienes vuelos atrasados que poner al día? Suelta una carpeta entera: buscamos en ella los archivos `.igc` y, si alcanzas el límite de frecuencia, el resto espera en una cola y se sube automáticamente.

Buenos vuelos y libros de vuelo bien llenos.
