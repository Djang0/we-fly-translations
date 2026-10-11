---
title: Sincroniza tu instrumento automáticamente
description: Envía tus vuelos desde tu Air³, tu vario o tu móvil directamente a We-Fly por WebDAV, sin cables ni subidas manuales
category: Your Flights
order: 4
---

## Aterriza, conéctate al wifi y listo

Imagínatelo: te desenganchas en el aterrizaje, todavía con el subidón de ese último ascenso en restitución, y para cuando has plegado la vela tu track ya está en We-Fly: puntuado, en el mapa, con las térmicas analizadas. Sin cable. Sin ese «lo subo esta noche» que acaba siendo la semana que viene. Sin rebuscar entre carpetas en el móvil.

Eso es la **Sincronización con instrumento y nube (WebDAV)**. Lo configuras una vez y tu dispositivo entrega en silencio cada vuelo nuevo a tu libro de vuelo en cuanto vuelves a tener wifi. Esta es la guía que lees una vez para no volver a tocar tus vuelos a mano.

La estrella del espectáculo es el **Air³** (el vario Android que lleva XCTrack), pero el mismo truco funciona desde cualquier móvil Android o cualquier instrumento compatible con WebDAV. Vamos a conectarlo.

---

## Primero: consigue tu contraseña de dispositivo (una vez, en We-Fly)

Todo cuelga de una única **contraseña de dispositivo** que generas dentro de We-Fly. Piensa en ella como una copia de llave hecha solo para un instrumento. Si algún día pierdes el dispositivo o lo vendes, revocas esa llave y nada más se ve afectado.

1. Ve a **Perfil → Servicios conectados** y busca la tarjeta **«Sincronización con instrumento y nube (WebDAV)»**.
2. Escribe un nombre de dispositivo, algo que reconozcas después, como `Air³` o `Vario viejo de reserva`.
3. Toca **Generar**. Aparece una **contraseña de dispositivo**.
4. **Cópiala ahora mismo.** Mejor cópiala enseguida, pero si haces clic en otro sitio no la has perdido: cada contraseña **se puede volver a copiar desde la fila de su dispositivo** (el pequeño icono de copiar que tiene al lado) mientras mantengas abierta esta **pestaña del navegador**. Volver a abrir el diálogo, o incluso recargar la página, no pasa nada. El botón de copiar sigue ahí. Solo desaparece cuando **cierras la pestaña**, porque We-Fly solo guarda una versión codificada de forma irreversible, nunca la contraseña en sí. Si eso pasa, no hay problema: genera una nueva.

Esa misma tarjeta muestra también los otros dos ajustes que necesitas, cada uno con su botón de copiar. Así nunca tienes que escribir nada de memoria.

> **Necesitas ser miembro de pleno derecho de We-Fly**, registrado y con el consentimiento dado. Si todavía estás en la fase de incubación o de consentimiento, termínala primero y la tarjeta se activará.

---

## Los tres ajustes que necesita cualquier dispositivo

Sea cual sea la app o el instrumento que conectes a We-Fly, siempre te pide las mismas tres cosas:

| Ajuste | Valor |
|---|---|
| **URL del servidor** | `https://we-fly.cloud/api/webdav` |
| **Usuario** | el email de tu cuenta de We-Fly |
| **Contraseña** | la contraseña de dispositivo que acabas de generar |

Ese es todo el apretón de manos. Copia esos tres datos, tenlos a mano y estarás listo para cualquier app WebDAV del planeta.

---

## El plato fuerte: Air³ / Android + XCTrack

Aquí viene lo bonito. XCTrack ya guarda cada vuelo como un tracklog `.igc` en una carpeta de tu dispositivo. Lo único que hacemos es poner un pequeño robot en esa carpeta que diga «¿archivo nuevo? para arriba». Lo configuras y te olvidas.

### Paso a paso

1. **Genera tu contraseña de dispositivo** en We-Fly (ver arriba). Ten esos tres ajustes a mano.

2. **Instala una app de sincronización WebDAV** desde Play Store. Cualquiera de estas cumple de sobra. Elige la que más te guste:
   - **FolderSync**
   - **DAVx5**
   - **RoundSync** (o una app parecida de tipo Autosync)

   Todas son herramientas de sincronización de carpetas; ninguna es «oficial», simplemente todas hablan WebDAV con soltura.

3. **Añade una nueva cuenta WebDAV / remoto** en la app. Introduce:
   - **URL del servidor** → `https://we-fly.cloud/api/webdav`
   - **Usuario** → tu email de We-Fly
   - **Contraseña** → tu contraseña de dispositivo

   La mayoría de las apps tienen un botón de «probar conexión». Tócalo y deberías ver luz verde.

4. **Crea un par de sincronización** (algunas apps lo llaman par de carpetas):
   - **Carpeta local** → donde XCTrack guarda tus tracklogs `.igc`, normalmente `/Android/data/org.xcontest.XCTrack/files/Tracklogs/`. Las rutas cambian un poco según el dispositivo y la versión, así que fíate más de «la carpeta donde están tus archivos `.igc`» que de cualquier ruta fija.
   - **Carpeta remota** → la conexión WebDAV que acabas de añadir.

   > **En Android 11 y posteriores, esa carpeta está oculta para los selectores de archivos normales**. Tu app de sincronización hará como si estuviera vacía. Es el almacenamiento acotado haciendo su trabajo, no un error, y hay una solución como es debido en dos minutos: **[Deja que tu app de sincronización vea la carpeta de XCTrack](/doc/xctrack-folder-permission)**. Date una vuelta por ahí y vuelve aquí.

5. **Pon la dirección en un solo sentido, móvil → We-Fly** (solo subida). We-Fly es el destino, no un espejo bidireccional. Tu dispositivo sube los vuelos y nunca descarga nada. Después activa la **sincronización automática**: al detectar un archivo nuevo, o con wifi después de aterrizar, lo que ofrezca tu app.

6. **Vuela. Aterriza. Conéctate al wifi.** En cuanto tienes conexión, tu track sube solo a We-Fly. Abre tu libro de vuelo y ahí está: puntuado, en el mapa, con las térmicas descifradas. Ve a plegar la vela.

> **Consejo:** configura la sincronización automática para que se dispare con wifi y no con datos móviles, y la batería en la furgoneta de recogida (y tu tarifa de datos) te lo agradecerán. Tus tracks esperan pacientemente y aterrizan en cuanto pillas el wifi del albergue.

---

## Otros instrumentos y ordenadores

WebDAV es un idioma universal, así que los mismos tres ajustes funcionan mucho más allá del Air³.

**Otros instrumentos compatibles con WebDAV** (un Skytraxx, un dispositivo Android tipo Oudie, cualquier cosa que hable WebDAV) se configuran exactamente igual: añade la cuenta con la URL del servidor, tu email y la contraseña de dispositivo, y apúntala a la carpeta donde guarda los archivos `.igc`.

**Tu ordenador**. Puedes conectar la misma URL como unidad de red y simplemente soltar archivos dentro:
- **Windows** → *Conectar a unidad de red* → pega la URL del servidor e inicia sesión con tu email + contraseña de dispositivo.
- **macOS** → Finder → *Ir → Conectarse al servidor* → misma URL y mismas credenciales.
- **Linux** → móntala desde tu gestor de archivos o con `davfs2`.

Después, arrastrar archivos `.igc` a esa unidad los sube a We-Fly. Muy práctico para vaciar los vuelos atrasados de una tarjeta SD antigua.

---

## Conviene saber

- **Solo se aceptan archivos `.igc`.** Cualquier otra cosa que intente subir el dispositivo se ignora educadamente: sin errores, sin líos. Así que no pasa nada si tu carpeta de tracklogs también tiene archivos de configuración o de registro sueltos.
- **Los duplicados se saltan automáticamente**, comparando el contenido real del archivo. Sincronizar la misma carpeta mil veces nunca creará ni un solo vuelo duplicado. Por eso es seguro dejarlo funcionando para siempre.
- **En esencia es solo de subida.** El dispositivo sube los vuelos; nunca vuelve atrás para cambiar o borrar nada. ¿Quieres borrar un vuelo? Hazlo en la app de We-Fly, nunca desde el dispositivo.

---

## Problemas y preguntas frecuentes

**¿No aparece nada en mi libro de vuelo?**
Repasa a los sospechosos habituales: ¿estás de verdad conectado al wifi (o a lo que tengas configurado como disparador de la sincronización)? ¿Se ejecutó de verdad la tarea de sincronización (mira el registro de la app)? ¿Y el archivo es un tracklog `.igc` auténtico, no uno a medio escribir o renombrado? Nueve de cada diez veces es una de esas tres cosas.

**¿Puedo sincronizar todo mi historial?**
Por supuesto. Apunta una vez un par de sincronización a toda tu carpeta de archivo, deja que lo procese y cada track antiguo aterriza en We-Fly. Como los duplicados se saltan por contenido, no hay ningún riesgo de duplicar nada, aunque algunos de esos vuelos ya estén en tu libro de vuelo.

**¿Mi contraseña está segura?**
Es una **contraseña por dispositivo**, no la de tu cuenta. Solo sirve para subir archivos `.igc`, y puedes **revocarla cuando quieras** desde la misma tarjeta de Servicios conectados. Revocarla desconecta al instante ese dispositivo y deja intactos todos los demás. ¿Vendes tu Air³? Revócala antes.

**¿Esto borra alguno de mis vuelos?**
No. La sincronización va en un solo sentido y solo sube. Los borrados ocurren **únicamente** en la app de We-Fly, a propósito y hechos por ti. Nada de lo que haga tu instrumento puede eliminar un vuelo.

---

## ¿Quieres que XCTrack lo haga solo? Vota

La combinación WebDAV + app de sincronización de arriba funciona de maravilla hoy, pero seamos sinceros: el sueño es aún más sencillo. Que XCTrack suba directamente a We-Fly en cuanto aterrizas, igual que ya hace con su subida automática a XContest. Sin app intermedia, sin pares de carpetas que configurar. Aterrizas y listo. Cero apps.

Buena noticia: hay una **petición oficial de funcionalidad que pide exactamente eso a los desarrolladores de XCTrack.** Y lo importante: los votos de los pilotos mueven la aguja de verdad. Cuantos más la votemos, más probable es que suba en la lista de prioridades y acabe saliendo. Así que hagamos ruido; cada voto cuenta.

Lleva más o menos un minuto:

1. Abre la petición: [gitlab.com/xcontest-public/xctrack-public/-/work_items/1293](https://gitlab.com/xcontest-public/xctrack-public/-/work_items/1293)
2. **Inicia sesión en GitLab**: una cuenta gratuita, rápida de crear si no tienes (hay que haber iniciado sesión para votar).
3. En la petición, haz clic en la **reacción de pulgar arriba 👍** para sumar tu voto. Ya está. Has votado.

Si sale, esta guía se quedará mucho más corta. Ayudemos a que pase.

---

## Ruedas arriba

Configúralo una vez y tu libro de vuelo prácticamente se llena solo. Vuela, aterriza, conéctate, y los números te esperan antes de que hayas recogido los suspentes. Así es como debe ser.

Buenos vuelos y libros de vuelo bien llenos. 🪂
