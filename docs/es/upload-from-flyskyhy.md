---
title: "Subir desde Flyskyhy"
description: "Envía tus vuelos directamente desde Flyskyhy en tu iPhone o iPad a We-Fly: configura «Other Leonardo server» una vez y luego aterriza, toca y listo"
category: Your Flights
order: 4
---

## Aterriza, toca, registrado

Acabas de clavar un vuelazo. Todavía con la adrenalina a tope, estás plegando la vela y el vuelo ya va camino de tu libro de vuelo de We-Fly, directamente desde el móvil que llevas en el bolsillo. Sin cable, sin portátil, sin ese «ya lo subo esta noche» que acaba siendo la semana que viene.

Si vuelas con **Flyskyhy** en tu iPhone o iPad, ahora puede pasarle cada vuelo a We-Fly en cuanto aterrizas. Le hemos enseñado a We-Fly a hablar **Leonardo**, un idioma de subida de vuelos que Flyskyhy ya conoce, así que solo queda una configuración de cinco minutos que se hace una vez. Vamos a conectarlo.

> **Ojo:** esto sube el **track grabado** de un vuelo que ya has hecho (el `.igc`). No es seguimiento en vivo. Es la subida del tipo «misión cumplida, aquí tienes el vuelo».

---

## Primero: consigue tu contraseña de dispositivo (una vez, en We-Fly)

Todo depende de una sola **contraseña de dispositivo** que generas dentro de We-Fly. Piensa en ella como una copia de llave hecha solo para una app. Si pierdes el móvil o lo vendes, revocas esa llave sin tocar nada más.

1. Ve a **Perfil → Servicios conectados** y busca la tarjeta **«Sincronización con instrumento y nube»**.
2. Escribe un nombre de dispositivo que reconozcas después, como `iPhone - Flyskyhy`. Es *solo una etiqueta para ti*; no se envía a ningún sitio y Flyskyhy no la necesita nunca.
3. Toca **Generar**. Aparece una **contraseña de dispositivo** (empieza por `wf_key_`).
4. **Cópiala ahora mismo.** Se muestra **una sola vez**. Si cierras el cuadro sin copiarla, simplemente generas otra nueva, sin problema. ¿La estás generando en un portátil? Toca **Escanear con el móvil** para pasarla con la cámara del teléfono en lugar de teclear todos esos caracteres.

> **¿Ya sincronizas un vario por WebDAV?** Entonces ya tienes una. La *misma* contraseña de dispositivo sirve para Flyskyhy. No hace falta crear otra.

> **Tienes que ser miembro de pleno derecho de We-Fly**, registrado y con el consentimiento dado. Si todavía estás en la fase de incubación o de consentimiento, termínala primero y la tarjeta se activará.

---

## Los tres datos que necesita Flyskyhy

Hagas lo que hagas, Flyskyhy siempre pide las mismas tres cosas:

| Ajuste | Valor |
|---|---|
| **Submit URL** | `https://we-fly.cloud/api/leonardo/flight_submit.php` |
| **Username** | el email de tu cuenta de We-Fly |
| **Password** | la contraseña de dispositivo que acabas de generar |

Copia esos tres datos, tenlos a mano y listo.

---

## Paso a paso en Flyskyhy

1. **Genera tu contraseña de dispositivo** en We-Fly (mira arriba) y ten esos tres datos a mano.

2. En Flyskyhy, ve a subir un vuelo y elige **«Other Leonardo server»**. Es la opción que te permite apuntar la app a un servidor personalizado: nosotros.

3. Rellena los datos:
   - **Server name** → `We-Fly` (solo una etiqueta para reconocerlo en la lista)
   - **Submit URL** → `https://we-fly.cloud/api/leonardo/flight_submit.php`
   - **Username** → tu email de We-Fly
   - **Password** → tu contraseña de dispositivo

4. **Sube.** Flyskyhy envía el track y We-Fly hace el resto: el vuelo llega a tu libro de vuelo ya puntuado, en el mapa y con sus térmicas analizadas. No tienes que mover un dedo para nada de eso.

5. A partir de ahora, **«Upload to We-Fly»** aparece directamente entre tus opciones de subida. Aterriza, toca y listo.

> **Consejo pro:** la primera subida es el «hola». Después, cada vuelo nuevo está a un toque. Acostúmbrate a mandarlo mientras recoges, y tu libro de vuelo no volverá a quedarse atrás.

---

## Conviene saber

- **Solo se aceptan tracklogs `.igc`.** Es justo lo que envía Flyskyhy, así que no tienes que preocuparte por nada.
- **Los duplicados se descartan automáticamente**, comparando el contenido real del vuelo. ¿Le diste dos veces a subir? ¿Lo subiste a mano la semana pasada? We-Fly se encoge de hombros y dice «ese ya lo tengo». Puedes subir todo lo que quieras. Nunca se duplica nada.
- **Es tu libro de vuelo, como siempre.** Un vuelo que llega desde Flyskyhy es idéntico a uno que subes en la web: todos los mapas, estadísticas y la puntuación de distancia se aplican automáticamente.

---

## Problemas y preguntas frecuentes

**Flyskyhy dice que el usuario o la contraseña no son correctos.**
Nueve de cada diez veces es la contraseña de dispositivo: como solo se muestra una vez, un copia y pega despistado te la puede jugar. Vuelve a **Perfil → Servicios conectados → Sincronización con instrumento y nube**, toca **Generar** para crear una nueva y pégala otra vez en Flyskyhy. Tu usuario es tu **email** de We-Fly, no un apodo.

**Revisa bien la Submit URL.**
Tiene que ser exactamente `https://we-fly.cloud/api/leonardo/flight_submit.php`, con `https://` delante y terminando en `/flight_submit.php`. Una `s` que falta o una errata al final es el otro sospechoso habitual.

**¿No aparece nada en mi libro de vuelo?**
Asegúrate de que la subida terminó de verdad (que tienes cobertura) y luego recarga tu [página de vuelos](/flights). Si Flyskyhy indicó que todo fue bien, el vuelo está dentro. Dale un momento a la página y aparecerá.

**¿Mi contraseña está segura?**
Es una **contraseña por dispositivo**, no la de tu cuenta. Solo sirve para añadir vuelos, y puedes **revocarla cuando quieras** desde la misma tarjeta de Servicios conectados. Eso corta el acceso a Flyskyhy al instante y no toca ningún otro dispositivo. ¿Vas a vender el móvil? Revócala antes.

**¿Esto elimina algún vuelo?**
Nunca. Esto solo *añade* vuelos. Eliminar lo haces tú, en la app de We-Fly, a propósito. Nada de lo que haga Flyskyhy puede borrar un vuelo.

---

## ¿No vuelas con Flyskyhy?

Flyskyhy es solo para iPhone/iPad. Con un **vario Android o el Air³**, usa **[Sincroniza tu instrumento automáticamente](/doc/sync-instruments-webdav)**: la misma contraseña de dispositivo, la misma idea, por WebDAV.

---

## Ruedas arriba

Configúralo una vez y tu libro de vuelo prácticamente se llena solo. Vuela, aterriza, toca, y los números te están esperando antes de que hayas recogido las líneas. Así es como debe ser.

Cielos azules y libros de vuelo bien llenos. 🪂
