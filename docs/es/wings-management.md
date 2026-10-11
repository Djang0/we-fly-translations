---
title: Gestión de velas
description: Cómo gestionar tus velas en We-Fly, renombrarlas, clasificarlas como solo o biplaza, y qué cambia de verdad cuando lo haces
category: Your Flights
order: 3
---

## Tus velas viven en tus vuelos

We-Fly no tiene una «base de datos de velas» aparte. Cuando subes un archivo IGC, tu instrumento incluye el nombre de la vela en la cabecera del archivo, y eso es lo que We-Fly recoge. Cada vuelo lleva su propio nombre de vela, y la página **Velas** (`/flights/wings`) es solo una agregación inteligente: agrupa todos tus vuelos por nombre de vela y te muestra el conjunto.

Esa distinción importa, porque determina lo que hace de verdad un cambio de nombre, y lo que no hace.

---

## Qué ves en la página Velas

Cada fila de tu lista de velas muestra:

- **Nombre de la vela**: exactamente como lo grabó tu instrumento en el archivo IGC
- **Tipo**: Solo, Biplaza o Mixto (más sobre esto abajo)
- **Vuelos**: número total de vuelos registrados con esa vela
- **Duración**: tiempo de vuelo acumulado en todos esos vuelos

Desde aquí puedes renombrar una vela y cambiar su tipo. Nada más, limpio y sencillo.

---

## Renombrar una vela

Hay tres sitios donde puedes cambiar el nombre de una vela en We-Fly, y el alcance de cada uno es distinto.

### Desde la página Velas: renombrar todo de una vez

Pulsa **Renombrar** junto a cualquier vela, escribe el nuevo nombre y confirma. We-Fly cambia el nombre de la vela en **todos los vuelos** que tenían el nombre antiguo. ¿Quince vuelos registrados como «Rush 6»? Todos pasan a «Ozone Rush 6» de un plumazo. Es la herramienta adecuada cuando quieres limpiar un nombre en todo tu libro de vuelo.

### Desde tu lista de vuelos: renombrar solo los vuelos seleccionados

En `/flights`, selecciona uno o varios vuelos con las casillas. Aparece un menú de acciones en bloque. Ábrelo y elige **Cambiar nombre de vela**. Solo se actualizan los vuelos que seleccionaste, sea cual sea la vela que tenían antes. Útil cuando quieres reasignar unos cuantos vuelos sin tocar el resto.

### Desde un vuelo concreto: renombrar un solo vuelo

En la página de detalle de cualquier vuelo, abre el menú de acciones y elige **Cambiar vela**. Esto actualiza solo ese vuelo. Ningún otro vuelo se toca.

---

**Qué cambia en los tres casos:**
- El nombre de la vela en los vuelos afectados
- La lista de velas (las entradas aparecen, se fusionan o desaparecen según lo que quede)
- Los filtros activos que hagan referencia a ese nombre de vela

**Qué no cambia:**
- Tu instrumento. El vario, el GPS o la app del móvil que generó esos archivos IGC sigue teniendo configurado el nombre antiguo. La próxima vez que vueles y subas el vuelo, el nuevo vuelo volverá a aparecer con el nombre antiguo, porque eso es lo que tu instrumento escribió en la cabecera IGC.

Si renombras una vela en We-Fly, **cambia también el nombre de la vela en los ajustes de tu instrumento**. Si no, tendrás que repetir el cambio de nombre en cada subida.

> Renombrar una vela aquí solo actualiza los vuelos existentes en tu base de datos. Puede que tu instrumento de vuelo siga configurado con el nombre antiguo de la vela.

---

## Solo o biplaza

We-Fly registra si cada vuelo fue en solitario o en biplaza. Esto afecta a cómo se muestran tus estadísticas y puede importar para tu libro de vuelo.

### Cómo se asigna el tipo

Los vuelos son **solo** por defecto, salvo que We-Fly encuentre en tu libro de vuelo un vuelo biplaza con el mismo nombre de vela. En ese caso, la nueva subida hereda `tandem` automáticamente, sin ningún paso manual.

### Cambiar el tipo a mano

En la página Velas, cada fila tiene un selector de tipo. Púlsalo para cambiar todos los vuelos de esa vela entre Solo y Biplaza. Es una **operación en bloque**: actualiza de una vez todos los vuelos con ese nombre de vela.

Antes de confirmar, We-Fly te dice exactamente cuántos vuelos se verán afectados. Sin sorpresas.

---

## Situaciones habituales

**«Vuelo en solo y en biplaza con la misma vela»**

Usa el truco del cambio de nombre: registra los vuelos biplaza y luego renombra esa vela a algo como «Fusion 30 Tandem» antes de marcarlos como biplaza. Deja los vuelos en solitario con el nombre original. Así ambos aparecen como entradas limpias y separadas.

**«Mi vela aparece con dos nombres»**

Clásica incoherencia entre instrumentos: «Rush 6» en un registrador, «OZONE Rush 6» en otro, o incluso una errata tras una actualización de firmware. Renombra las variantes a un único nombre canónico y se fusionarán en una sola fila.

**«Mis vuelos nuevos siguen mostrando el nombre antiguo después de renombrar»**

Actualiza tu instrumento. We-Fly lee el nombre que haya en el archivo IGC. No puede saltarse lo que escribió tu vario.

---

Buenos vuelos y nombres de vela coherentes ahí arriba.
