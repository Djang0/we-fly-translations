---
title: Deja que tu app de sincronización vea la carpeta de XCTrack
description: Android oculta los tracklogs de XCTrack a las demás apps. Así se cede esa única carpeta a tu app de sincronización, en dos minutos y con total seguridad
category: Your Flights
order: 4
---

## La carpeta que no está

Ya tienes configurada tu cuenta WebDAV, estás a un campo de no volver a subir un vuelo a mano nunca más, y entonces la app de sincronización te pide la **carpeta local**. Vas a buscar los tracklogs de XCTrack y... nada. `Android/data/…` aparece vacía o el selector pasa de largo, como una térmica que se va justo cuando llegas.

Tus vuelos están ahí, seguro. Android simplemente no deja que otra app mire hasta que tú lo digas. Así es como se dice. Dos minutos, una vez, y nunca más.

---

## Por qué Android la oculta, y por qué esto es seguro

Desde Android 11, las apps no pueden hurgar en las carpetas de las demás. Es el **[almacenamiento acotado](https://source.android.com/docs/core/storage/scoped)** (*scoped storage*): cada app tiene su propio espacio, y salir de él requiere un permiso explícito, dado por ti, carpeta por carpeta. Los archivos `.igc` de XCTrack viven justo en ese tipo de espacio protegido, y por eso tu gestor de archivos hace como si no existieran.

> **No te estás saltando nada.** Sin root, sin desactivar nada, sin ajustes ocultos dudosos. Usas el mecanismo exactamente como fue diseñado: Android te pide a ti, el dueño del móvil, que señales **una carpeta concreta** y lo confirmes. Una app (tu app de sincronización) recibe una carpeta (los tracklogs de XCTrack), ni tus fotos, ni tus mensajes, ni nada más. Y puedes retirar el permiso cuando quieras, desde la misma pantalla en la que lo diste. Acotado, deliberado, reversible.

---

## Primero: comprueba dónde guarda XCTrack tus tracklogs

Nueve de cada diez veces es:

`/Android/data/org.xcontest.XCTrack/files/Tracklogs/`

Pero «nueve de cada diez» no es «siempre»: la ruta cambia según el dispositivo y la versión de XCTrack, y si alguna vez moviste tus tracklogs a una tarjeta SD estará en otro sitio. Así que no te fíes de una ruta fija cuando tienes el instrumento en la mano: abre **XCTrack → About** y lee la línea **«XCTrack data folder»** (*Dossier de données XCTrack* en un móvil en francés).

![Pantalla About de XCTrack con la ruta de XCTrack data folder /Android/data/org.xcontest.XCTrack/files](/pict/doc/permissions/about_xctrack.jpg)

> **Ojo con el último salto.** Esa pantalla muestra la carpeta de *datos*. Tus tracklogs están un nivel más abajo, en su subcarpeta **`Tracklogs`**, así que, diga lo que diga la pantalla About, añade `/Tracklogs` al final.

---

## Paso a paso, en FolderSync

Las capturas de abajo son de FolderSync 4.12 en un móvil en francés, así que cada etiqueta lleva el francés entre paréntesis la primera vez. Hable el idioma que hable tu móvil, las filas están en el mismo sitio.

### Paso 1: abre Permissions

En FolderSync, abre el menú de la app (el panel con el número de versión arriba) y toca **Permissions** (*Autorisations*).

![Menú de la app FolderSync 4.12 con la fila Permissions marcada con un círculo](/pict/doc/permissions/step_1.jpg)

### Paso 2: añade una carpeta definida por el usuario

Baja hasta **Added folder permissions** (*Autorisations de dossier ajoutées*) y toca **Add user-defined folder** (*Ajouter un dossier défini par l'utilisateur*).

![Pantalla Permissions de FolderSync con el botón «Add user-defined folder» marcado con un círculo](/pict/doc/permissions/step_2.jpg)

Fíjate en lo que hay justo encima de ese botón: **Revoke permissions** (*Révoquer les autorisations*). Ese es tu botón de deshacer, bien a la vista, antes incluso de haber concedido nada.

### Paso 3: escribe la ruta y elige XCTrack

Aparece un cuadro que te pide escribir la ruta a mano. Pon:

`Android/data/org.xcontest.XCTrack/files/Tracklogs`

…o lo que te haya mostrado la pantalla About, más `/Tracklogs`.

Después, el selector de archivos del propio Android toma el relevo y te pide elegir una carpeta. En el panel **Open from** (*Ouvrir à partir de*) de la izquierda, toca la entrada **XCTrack**.

![Panel «Open from» de Android con el acceso directo de XCTrack marcado con un círculo](/pict/doc/permissions/step_3.jpg)

### Paso 4: usa esta carpeta

Aterrizas dentro de **Tracklogs**, delante de tus vuelos de verdad: archivos con fecha, uno por despegue. Esa es la confirmación de que estás en el sitio correcto. Toca **USE THIS FOLDER** (*UTILISER CE DOSSIER*) y confirma el diálogo de Android.

![La carpeta Tracklogs con archivos de vuelo fechados y el botón «Use this folder» marcado con un círculo](/pict/doc/permissions/step_4.jpg)

Lo difícil ya está hecho. De vuelta en FolderSync, la carpeta ya se puede elegir como **carpeta local** de tu par de sincronización, así que vuelve a **[Sincroniza tu instrumento automáticamente](/doc/sync-instruments-webdav)** y termina de crear el par.

---

## Si algo se tuerce

**El selector aparece vacío, o no hay acceso directo a XCTrack.** Casi siempre es una errata en la ruta que escribiste a mano. Vuelve a la pantalla About de XCTrack, lee la carpeta otra vez carácter a carácter y no olvides el `Tracklogs` del final.

**Tu móvil lo dice de otra manera.** A los fabricantes les encanta renombrar botones: puede que veas «Permitir acceso a la carpeta de XCTrack» o algo parecido. La forma del proceso es idéntica: encuentra la carpeta y confirma el permiso.

**Usas otra app de sincronización.** DAVx5, RoundSync, la familia Autosync: misma limitación de Android, misma solución. Busca su versión de «añadir permiso de carpeta» o «conceder acceso a carpeta». En cuanto se abre el selector estás en terreno conocido, porque esa pantalla es de Android, no de la app.

**Tus tracklogs están en una tarjeta SD.** Sáltate la ruta definida por el usuario y usa **Add USB storage** (*Ajouter un stockage USB*), el botón que está justo encima, pensado exactamente para eso.

---

## Ruedas arriba

Un permiso, dos minutos, y tu móvil deja de fingir que tus vuelos no existen. Luego, a lo bueno: volar, aterrizar, conectarte al wifi y encontrar el track ya esperándote en tu libro de vuelo.

Gracias a Gabriel, que lo resolvió en su propio móvil y compartió las capturas para que los demás no tengamos que hacerlo.

Buenos vuelos y libros de vuelo bien llenos. 🪂
