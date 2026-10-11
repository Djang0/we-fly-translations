---
title: "Guía del factor G para pilotos"
description: "¿Cuántas G tiraste de verdad en esa térmica?"
category: Your Flights
order: 4
---

*O sea: cómo demostrar matemáticamente que no te lo estás inventando con ese SAT que te marcaste*

## ¿Pero qué demonios es el factor G?

¿Conoces esa sensación cuando cierras el giro en una térmica estrecha y de repente tu cuerpo pesa el doble? ¿O cuando te comes un muro de ascendencia y te aplasta contra la silla como a un astronauta? Eso es la fuerza G en acción, y ahora puedes medirla de verdad.

**La versión corta:** el factor G (o factor de carga) te dice cuántas veces más pesado te sientes comparado con estar sentado en el sofá. ¿De pie sin hacer nada? Eso es 1 G. ¿Un giro cerrado en una térmica? Quizá 1,4 G. ¿Tu colega que dice que tiró 3 G en aquella barrena? Probablemente sea verdad (o no).

**La versión un poco más larga:** el factor G es la relación entre la fuerza total que actúa sobre ti y tu peso. En vuelo nivelado a velocidad constante estás a 1 G. Si tiras hacia arriba o inclinas fuerte, el factor G aumenta. Si pasas por arriba de un looping (si te va ese rollo), baja por debajo de 1 G (hola, ingravidez).

**Lo que de verdad les importa a los pilotos:**
- ¿Estás trabajando esa térmica con eficacia (sin entrar en pérdida)?
- ¿De verdad tiraste 2 G en aquella barrena, o tu memoria exagera?
- ¿Tu pilotaje es suave o estás zarandeando la vela como una cometa en pleno huracán?

---

## ¿Y a mí qué me importa?

Buena pregunta. La mayor parte del tiempo vuelas por sensaciones, no mirando números. Pero los datos de factor G son útiles en secreto:

1. **Eficiencia en térmica**: más G en térmica = giros más cerrados
2. **Pilotaje suave**: grandes oscilaciones de G = estás peleándote con la vela en vez de bailar con ella
3. **Márgenes de seguridad**: la mayoría de las velas están homologadas para +8,0/-3,5 G. Si ves 4 G en térmica a menudo, tenemos que hablar
4. **Fardar con datos**: «Tiré 6 G en ese SAT» (respaldado por tu archivo IGC, para que tus colegas no puedan decir que es un farol)

---

## La física (no huyas, es rápido)

### La fórmula básica

$$
n = 1 + \frac{a}{g}
$$

**Traducción para humanos:**
- **n** = factor G (el número que queremos)
- **a** = aceleración (m/s²), lo rápido que cambia tu velocidad
- **g** = gravedad (9,81 m/s²), la forma que tiene la Tierra de mantenerte con los pies en el suelo

La parte **«1 +»** significa que siempre empiezas en 1 G (la gravedad siempre está ahí). Cualquier aceleración **adicional** (por girar, tirar hacia arriba, etc.) se suma a esa base.

**Ejemplos:**
- En crucero recto y nivelado, sin aceleración → n = 1 + 0/9,81 = **1,0 G**
- Tirando hacia arriba con 4,9 m/s² de aceleración → n = 1 + 4,9/9,81 = **1,5 G**
- Giro agresivo con 9,81 m/s² de aceleración centrípeta → n = 1 + 9,81/9,81 = **2,0 G**

---

## Dos maneras de tirar G (igual de incómodas)

A tu cuerpo le da igual *por qué* aceleras, solo le importa que aceleras. Hay dos formas principales de acumular G:

### 1. Aceleración vertical (el tirón hacia arriba)

Es la maniobra clásica de «tiras de la palanca y se te encoge el estómago».

**Qué está pasando:** cambias tu velocidad vertical (subes más rápido o bajas más despacio), lo que crea una aceleración hacia arriba.

**La fórmula:**
$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Donde:
- **a_z** = aceleración vertical (m/s²), lo rápido que cambia tu tasa de ascenso
- Positiva = subes más rápido (o bajas más despacio)
- Negativa = bajas más rápido (o subes más despacio)

**Cuándo la notas:**
- Al salir de un picado
- Al entrar en una térmica y pillar ascendencia fuerte
- En un remolque con torno (hola, más de 2 G durante 10 segundos seguidos)
- Ese momento en que entra la onda y te empuja hacia el cielo

**Ejemplos reales:**
- Entrada suave en térmica: 1,2-1,4 G (un apretón suave)
- Tirón agresivo: 1,8-2,5 G (las mejillas se te han caído al regazo)
- Pico de un remolque con torno: 2,0-3,0 G (bienvenido al tren del dolor)

---

### 2. Aceleración lateral (el giro)

Es la situación de «estoy cerrando esta térmica a tope y la punta del ala apunta al suelo».

**Qué está pasando:** estás girando, lo que significa que aceleras constantemente *hacia el centro del giro* (aceleración centrípeta). Tu cuerpo pesa más porque la sustentación de la vela tiene que sostenerte Y además llevarte a lo largo del giro.

**La fórmula:**
$$
n_{lat} = 1 + \frac{v \times \omega}{g}
$$

Donde:
- **v** = velocidad suelo (m/s), lo rápido que te mueves
- **ω** (omega) = velocidad de giro (rad/s), lo rápido que cambias de dirección
- **v × ω** = aceleración centrípeta (la «fuerza» lateral que te mete en el giro)

**Traducción:** cuanto más rápido vuelas y más cerrado giras, más G tiras.

**Cuándo la notas:**
- En cada térmica (giro constante = G lateral constante)
- En los virajes pronunciados
- En las barrenas (sobre todo las rápidas y agresivas de las que te arrepientes a mitad de maniobra)
- En acro (la parte alta de los wingovers, salidas de barrena, entradas en SAT)

**Ejemplos reales:**
- Térmica perezosa (poca inclinación): 1,1-1,2 G (apenas se nota)
- Térmica eficiente (inclinación moderada): 1,3-1,5 G (este es el punto dulce)
- Térmica agresiva (mucha inclinación, mucha velocidad): 1,6-2,0 G (tu tasa de caída acaba de entrar en otra dimensión)
- Entrada en SAT: 2,5+ G (enhorabuena, ahora pesas 200 kg)

---

## Cómo calcula We-Fly tus G a partir de los archivos IGC

Aquí se pone friki la cosa (pero aguanta, que mola).

### El problema: los archivos IGC no son acelerómetros

Tu registrador de vuelo no tiene acelerómetro (salvo que sea de los caros). Solo graba:
- Coordenadas GPS (latitud, longitud)
- Altitud barométrica (del sensor de presión)
- Altitud GPS (de los satélites)
- Marcas de tiempo (normalmente a 1 Hz, una vez por segundo)

Así que tenemos que **deducir** la aceleración a partir de los cambios de posición y de altitud a lo largo del tiempo. Es como averiguar cuánto aceleró un coche mirando cuándo pasa por delante de unas referencias: se puede, pero no es perfecto.

---

### Paso 1: suavizar los datos con ruido

**El reto:** los sensores GPS y de presión tienen ruido. Si derivamos directamente las lecturas de altitud en bruto, obtenemos números que oscilan como locos y no tienen sentido físico (como decir que tiraste 47 G en vuelo recto).

**La solución:** usamos un **filtro de Savitzky-Golay**, una técnica de suavizado sofisticada que conserva la forma de los cambios reales mientras elimina el ruido.

**Qué hace:**
- Mira una pequeña ventana de datos (por ejemplo, 5 segundos)
- Ajusta una curva polinómica suave a esos puntos
- Usa esa curva para estimar el valor «real» en cada momento

**Por qué importa:** sin suavizado, derivar es un suicidio. Con suavizado, obtenemos números limpios y creíbles.

---

### Paso 2: calcular la velocidad vertical (primera derivada)

Ahora que tenemos datos de altitud suaves, podemos calcular lo rápido que cambia la altitud, es decir, tu velocidad vertical (tasa de ascenso o de caída).

**La fórmula (método de diferencias centrales):**
$$
v_z(t) = \frac{alt(t+1) - alt(t-1)}{t_{t+1} - t_{t-1}}
$$

**Traducción:** mira la altitud un segundo antes y un segundo después, y divide por la diferencia de tiempo.

**Resultado:** ya conoces tu tasa de ascenso en cada momento (en m/s).

---

### Paso 3: calcular la aceleración vertical (segunda derivada)

Ahora derivamos *otra vez* para ver lo rápido que cambia tu tasa de ascenso: eso es la aceleración.

**La fórmula:**
$$
a_z(t) = \frac{v_z(t+1) - v_z(t-1)}{t_{t+1} - t_{t-1}}
$$

**¡Pero espera, que hay más suavizado!** Como derivar amplifica el ruido, volvemos a suavizar la velocidad antes de calcular la aceleración.

**Resultado:** ya tienes la aceleración vertical (m/s²) en cada momento.

---

### Paso 4: convertirla en factor G vertical

Por último, metemos la aceleración en la fórmula:

$$
n_{vert} = 1 + \frac{a_z}{g}
$$

Donde **g = 9,81 m/s²** (la aceleración de la gravedad terrestre).

**Lo que obtienes:**
- Vuelo estable: 1,0 G
- Entrando en ascendencia: 1,2-1,5 G
- Pico de un remolque con torno: 1,5-2,0 G

---

### Paso 5: calcular la velocidad suelo y la velocidad de giro

Para las G laterales (por los giros), necesitamos dos cosas:
1. **Velocidad suelo** (lo rápido que te mueves)
2. **Velocidad de giro** (lo rápido que cambias de dirección)

**Velocidad suelo (con la fórmula del semiverseno):**

La fórmula del semiverseno (haversine) calcula la distancia entre dos coordenadas GPS sobre una esfera (la Tierra), teniendo en cuenta la curvatura.

**Velocidad de giro:**

La velocidad de giro es lo rápido que cambia tu rumbo.

**La fórmula:**
$$
\omega = \frac{\Delta \psi}{\Delta t}
$$

Donde:
- **ψ** (psi) = ángulo de rumbo (la dirección en la que vuelas)
- **Δψ** = cambio de rumbo entre dos puntos
- **Δt** = diferencia de tiempo

---

### Paso 6: convertirla en factor G lateral

Ya tenemos todo lo necesario:

$$
n_{lat} = 1 + \frac{v \times |\omega|}{g}
$$

**¿Por qué el valor absoluto de la velocidad de giro?** Porque nos da igual que gires a la izquierda o a la derecha: las G se notan igual.

---

### Paso 7: combinar las G verticales y laterales

Esta es la clave: **en cada momento, notas el MAYOR de los dos factores G**, no la suma de ambos.

¿Por qué? ¡Porque es física y punto! Si tiras 1,3 G por un giro y 1,2 G por entrar en ascendencia, no notas 2,5 G en total. Notas 1,3 G (la fuente dominante).

**La fórmula:**
$$
n_{combined} = \max(n_{vert}, n_{lat})
$$

**Comprobación de cordura:** se limitan los valores absurdos (a veces se cuela ruido):

---

### Paso 8: calcular las estadísticas

Por último, procesamos los números para darte un resumen:

**Lo que te dicen estos números:**
- **Máximo:** tu momento de G más alto (ojalá no en una barrena de la que te arrepentiste)
- **Media:** G medias durante el vuelo (normalmente 1,1-1,3 en vuelo térmico)
- **Mediana:** las G que notaste *la mayor parte del tiempo* (más honesta que la media)
- **Desviación típica:** lo suave o lo caótico que fue tu pilotaje
  - Baja (< 0,2): pilotaje suave y regular
  - Alta (> 0,5): ibas de un lado para otro (o estabas haciendo acro)

---

## La letra pequeña (advertencias importantes)

### 1. Los datos IGC son de baja resolución
- La mayoría de los registradores graban a **1 Hz** (una vez por segundo)
- Los picos de G bruscos (como meterte de golpe en un giro) se promedian
- **Realidad:** puede que llegues a 2,5 G un instante, pero tu registrador graba 1,8 G

**Traducción:** espera una **subestimación** de los picos de G. Los números son conservadores.

---

### 2. Altitud barométrica frente a altitud GPS

Usamos la **altitud barométrica** para la aceleración vertical (no la altitud GPS). ¿Por qué?

| Fuente de altitud | Ventajas | Inconvenientes |
|----|----|---|
| **Presión** | Suave, físicamente coherente | Afectada por errores de QNH y cambios de presión |
| **GPS** | Referencia absoluta | Con un ruido tremendo, artefactos en escalón |

**Decisión:** la altitud barométrica es **mucho mejor** para calcular derivadas (aceleración). La altitud GPS nos daría números basura.

---

### 3. El suavizado esconde la realidad (pero no pasa nada)

Los filtros de suavizado son un compromiso:
- **Lo bueno:** eliminan el ruido y dan números creíbles
- **Lo malo:** aplanan los picos bruscos y promedian los cambios rápidos

**El trato:** no intentamos captar cada milisegundo de tu vuelo. Intentamos darte una **estimación razonable y defendible** de lo que pasó.

**Analogía:** es como cuando te preguntan «¿a qué velocidad ibas conduciendo?». Lo normal es contestar con una media («a unos 100 km/h»), no con un gráfico de cada cambio de velocidad cada 0,1 segundos.

---

### 4. Estos números NO valen para homologación

Que quede claro: **este análisis es para el debriefing de vuelo, la formación y la curiosidad, NO para validación estructural ni reclamaciones legales.**

**Sirve para:**
- Revisar tu técnica de pilotaje
- Comparar vuelos
- Demostrar a tus amigos que de verdad tiraste G
- Debriefings de formación

**NO sirve para:**
- Demostrar que tu vela aguanta 5,5 G (usa un acelerómetro de verdad)
- Disputas legales
- Reclamaciones de homologación

---

## Validación y comprobaciones de cordura

Si ves números raros, así puedes averiguar qué pasa:

| Ves | Qué significa | Causa probable |
|----|----|---|
| 1,0 G en crucero | ✅ Normal | Datos buenos |
| 1,3 G en térmica | ✅ Pilotaje eficiente | Estás trabajando bien los núcleos |
| 4,0 G en vuelo normal | ❌ Artefacto | Fallo de GPS, mal filtrado, o te lo estás inventando |
| <=0,5 G en crucero | ❌ Raro | Probablemente un error de sensor (¿o estabas haciendo acro?) |
| -5,0 G en cualquier momento | ❌ Absurdo | Tu registrador está roto o embrujado |

**Regla de oro:** si algo te parece raro, probablemente lo sea. Fíate de tu instinto y luego mira los datos.

---

## Una última cosa: el factor G no miente, pero el contexto importa

Muchas G no son malas de por sí, y pocas G no son buenas de por sí. El contexto lo es todo:

- **Muchas G en térmica** → puede significar pilotaje eficiente, o que te pasas de inclinación (mira tu tasa de caída)
- **Pocas G en crucero** → normal y bueno (no estás zarandeando la vela)
- **Picos de G en el remolque con torno** → lo esperado (pero que no se te cruce la vela)
- **Mucha dispersión (desviación típica)** → puede ser aire movido, o que pilotas de forma agresiva (o que estás aprendiendo)

**Usa los datos como herramienta, no como juicio.** Están ahí para ayudarte a entender tu vuelo, no para hacerte sentir mal por aquella barrena de la que te arrepentiste.

---

## Reflexión final

El análisis del factor G no te convertirá en mejor piloto de la noche a la mañana, pero te dará **conclusiones respaldadas por datos** sobre lo que haces de verdad en el aire, no solo lo que *crees* que haces.

Así que la próxima vez que tu colega presuma de haber tirado 3 G en aquella térmica, puedes sacar tranquilamente tus estadísticas del Cockpit y decirle: «Muy bonita la historia. Los datos dicen 1,7».

La ciencia vuelve a ganar.

---

## Referencias

La fórmula fundamental del factor G (n = 1 + a/g) y los conceptos de factor de carga están documentados en los materiales estándar de ingeniería aeroespacial y de formación aeronáutica:

### 1. FAA Pilot's Handbook of Aeronautical Knowledge (PHAK)
- **Chapter 5: Aerodynamics of Flight** - sección Load Factor
- Federal Aviation Administration
- PDF gratuito: [web de la FAA](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
- Trata los fundamentos del factor de carga, las limitaciones estructurales y la envolvente de vuelo

### 2. Aerodynamics for Naval Aviators
- **Autor:** H.H. Hurt Jr.
- **Editorial:** University of Southern California (original), revisado por la U.S. Navy
- Manual clásico de ingeniería aeroespacial usado en la formación de vuelo militar y civil
- La sección «Load Factor and Airplane Limitation» ofrece derivaciones detalladas
- Disponible en diversas librerías aeronáuticas y bibliotecas

### 3. Introduction to Flight (8.ª edición)
- **Autor:** John D. Anderson Jr.
- **Editorial:** McGraw-Hill Education
- **Año:** 2015
- **ISBN:** 978-0073380247
- Manual de referencia en los estudios de ingeniería aeroespacial
- Ecuación 5.18: derivación del factor de carga a partir de la aceleración normal
- Cobertura completa de los fundamentos de la mecánica de vuelo

---

*«A la gravedad le dan igual tus sentimientos, pero a tus sentimientos no les da igual el factor G».*
*- Todo piloto físico*
