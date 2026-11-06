---
title: Política de privacidad
description: Cómo We-Fly recoge, usa y protege tus datos personales conforme al RGPD
category: Account & Data
order: 3
---

**Última actualización:** 4 de noviembre de 2026

## 1. Introducción

Te damos la bienvenida a We-Fly. Nos comprometemos a proteger tus datos personales y a respetar tus derechos de privacidad conforme al Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y a la normativa de protección de datos aplicable.

Esta política de privacidad explica cómo recogemos, usamos, guardamos y protegemos tu información personal cuando usas nuestra plataforma de registro y análisis de vuelos en parapente.

### 1.1 Responsable del tratamiento

We-Fly es el responsable del tratamiento de tus datos personales. Si tienes preguntas sobre esta política de privacidad o sobre tus derechos, escríbenos a los datos de contacto de la sección 15.

### 1.2 Ámbito

Esta política se aplica a todos los usuarios de la plataforma We-Fly, incluidos:
- Usuarios registrados con cuenta
- Visitantes de nuestras páginas públicas
- Usuarios de nuestros enlaces de vuelos compartidos

## 2. Qué datos recogemos

### 2.1 Información de la cuenta (vía Google OAuth)

Cuando creas una cuenta con «Iniciar sesión con Google», recogemos:

- **Dirección de correo electrónico** - Para identificar tu cuenta y comunicarnos contigo
- **Nombre completo** - Para mostrar tu perfil y atribuirte tus vuelos
- **URL de la foto de perfil** - De tu cuenta de Google, para mostrarla en tu perfil
- **Estado de verificación del correo** - Facilitado por Google
- **ID de usuario de Google** - Identificador único de Google OAuth

**No** recogemos ni guardamos contraseñas. Google se encarga de toda la autenticación de forma segura.

### 2.2 Datos de vuelo (de los archivos IGC que subes)

Cuando subes tus vuelos en parapente, recogemos y tratamos:

**Metadatos del archivo:**
- Nombre del piloto (extraído del archivo IGC o del nombre de tu cuenta)
- Modelo y tipo de vela
- Información del dispositivo GPS (fabricante, número de serie, firmware)
- Fecha y hora del vuelo
- Nombre original del archivo

**Datos del track GPS:**
- Track GPS completo (latitud, longitud, altitud, marcas de tiempo)
- Lugar y hora de despegue
- Lugar y hora de aterrizaje
- Duración del vuelo
- Altitudes máxima y mínima
- Distancia total recorrida

**Análisis calculados del vuelo:**
- Análisis de la actividad térmica (tasas de ascenso, duración, altura ganada)
- Estimaciones de velocidad y dirección del viento
- Métricas de rendimiento del vuelo
- Datos de puntuación de XContest (distancia, puntos, clasificación del tipo de vuelo)
- Datos de validación FAI (si pides la validación)
- Balizas y tramos de la ruta

**Identificadores técnicos:**
- Hash MD5 del track GPS (para detectar duplicados)
- Identificadores de registros en la base de datos
- Rutas de almacenamiento de archivos (si el almacenamiento local está activado)

### 2.3 Datos de despegues

Mantenemos una base de datos de despegues de parapente con:
- Nombre del despegue y coordenadas geográficas
- Altitud sobre el nivel del mar
- Dirección predominante del viento
- País, ciudad y código postal (obtenidos con el servicio de geocodificación inversa Nominatim de OpenStreetMap)

Estos datos se agregan a partir de los vuelos que suben los usuarios y de bases de datos geográficas públicas. Los metadatos de ubicación se enriquecen con datos de OpenStreetMap (© colaboradores de OpenStreetMap).

### 2.4 Datos de perfil y preferencias

- Rol de usuario (usuario o administrador)
- Preferencia de visibilidad del perfil (público o privado)
- Preferencias de visualización (columnas de la tabla, orden, filtros)
- Preferencia de tema
- Preferencias de correo (si recibes consejos para empezar)
- Fechas de creación y modificación de la cuenta

### 2.5 Datos estadísticos

Calculamos estadísticas agregadas a partir de tus vuelos:
- Número total de vuelos y horas
- Distancia total volada
- Número de despegues y países distintos visitados
- Duración media de los vuelos
- Desglose por tipo de vuelo

### 2.6 Enlaces de vuelos compartidos

Cuando generas un enlace para compartir un vuelo concreto, creamos:
- Un identificador criptográficamente seguro de 43 caracteres
- Que permite el acceso público a un solo vuelo sin exponer todo tu perfil

### 2.7 Datos de conexión

Cuando usas We-Fly con la sesión iniciada, guardamos las **últimas 5 direcciones IP distintas** desde las que te conectaste. De cada una guardamos:
- La dirección IP
- Cuándo la vimos por primera y por última vez
- Tu tipo de dispositivo, navegador y sistema operativo
- Una ubicación aproximada (ciudad, región y país) calculada en nuestro propio servidor con una base de datos GeoIP (DB-IP). Tu dirección nunca se envía a un servicio externo para localizarla.

Solo los administradores de We-Fly pueden ver esta información, para detectar cuentas compartidas, inicios de sesión sospechosos y abusos. Nunca se muestra a otros pilotos ni se usa para nada más. Cuando te conectas desde una sexta dirección, se borra la más antigua. Se incluye en tu archivo de **Exportar datos** y se borra con tu cuenta.

## 3. Base legal del tratamiento

Según el artículo 6 del RGPD, tratamos tus datos personales con base en:

### 3.1 Consentimiento (artículo 6(1)(a))
- Autenticación con Google OAuth (das tu consentimiento explícito al hacer clic en «Iniciar sesión con Google»)
- Ajustes de visibilidad del perfil (eliges hacer público tu perfil)
- Integraciones con API de terceros (validación FAI, geocodificación)

### 3.2 Ejecución de un contrato (artículo 6(1)(b))
- Tratar los vuelos que subes
- Ofrecerte el análisis y las estadísticas de tus vuelos
- Mantener tu cuenta y tus preferencias
- Prestar las funciones principales de nuestro servicio

### 3.3 Interés legítimo (artículo 6(1)(f))
- Evitar subidas de vuelos duplicados
- Detectar y prevenir fraudes o abusos
- Mejorar nuestro servicio y la experiencia de uso
- Mantener la seguridad y la integridad del sistema
- Guardar tus últimas 5 direcciones de conexión y su ubicación aproximada para detectar inicios de sesión sospechosos y abusos (ver 2.7)
- Enviarte de vez en cuando consejos para empezar con el servicio en el que te registraste (puedes darte de baja cuando quieras, ver 4.4)

Puedes retirar tu consentimiento en cualquier momento eliminando tu cuenta o cambiando tus ajustes de privacidad.

## 4. Cómo usamos tus datos

Usamos tus datos personales para:

### 4.1 Prestar los servicios principales
- Autenticarte e identificarte cuando inicias sesión
- Leer, analizar y guardar tus vuelos
- Generar estadísticas y métricas de rendimiento de tus vuelos
- Mostrar tu libro de vuelo y tu panel personal
- Asociar automáticamente los vuelos a sus despegues

### 4.2 Habilitar las funciones de la comunidad
- Mostrar vuelos públicos (solo si activas el perfil público)
- Mostrar perfiles de pilotos en las clasificaciones de la comunidad (con tu consentimiento)
- Identificar los despegues más populares
- Permitir que otros pilotos descubran rutas de vuelo

### 4.3 Mejorar nuestra plataforma
- Agregar estadísticas anónimas de uso de la plataforma
- Detectar y corregir problemas técnicos
- Mejorar los algoritmos de análisis de vuelo
- Optimizar la interfaz y la experiencia de uso

### 4.4 Comunicarnos contigo
- Enviarte notificaciones relacionadas con el servicio
- Enviarte de vez en cuando consejos para empezar, por ejemplo un único recordatorio si tu libro de vuelo sigue vacío una semana después de registrarte. Puedes desactivarlos cuando quieras en **Perfil → Emails**, o con el enlace para darte de baja que aparece al final de cada correo de consejos
- Responder a tus solicitudes de soporte
- Avisarte de cambios importantes en nuestro servicio o en esta política

### 4.5 Garantizar la seguridad
- Evitar accesos no autorizados a las cuentas
- Detectar y prevenir actividades fraudulentas
- Validar la integridad de los datos
- Mantener registros de auditoría de los eventos de seguridad

**No** usamos tus datos para:
- Publicidad o marketing para terceros
- Vender o alquilar tu información personal
- Decisiones automatizadas con efectos jurídicos
- Elaborar perfiles con fines comerciales

## 5. Servicios de terceros y transferencias de datos

Compartimos datos limitados con los siguientes servicios de terceros:

### 5.1 Google OAuth
**Finalidad:** Autenticación y verificación de identidad del usuario
**Datos compartidos:** Correo, nombre, foto de perfil (mediante el protocolo OAuth)
**Ubicación:** Estados Unidos (infraestructura de Google)
**Política de privacidad:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
**Base legal:** Consentimiento (autorización OAuth)

### 5.2 Nominatim (OpenStreetMap)
**Finalidad:** Geocodificación inversa para obtener nombres de lugares a partir de coordenadas
**Datos compartidos:** Solo coordenadas de latitud y longitud (sin identificadores personales)
**Frecuencia:** Lanzada por un administrador, no automática
**Política de privacidad:** [https://osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy)
**Base legal:** Interés legítimo (mejorar la información de los despegues)
**Atribución:** Datos de ubicación © colaboradores de OpenStreetMap ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright))

### 5.3 Open Elevation API (api.open-elevation.com)
**Finalidad:** Obtener la altitud de los despegues
**Datos compartidos:** Solo coordenadas de latitud y longitud
**Frecuencia:** Lanzada por un administrador
**Política de privacidad:** Servicio público, sin registro
**Base legal:** Interés legítimo (datos precisos de los despegues)

### 5.4 Servicio de validación de vuelos FAI CIVL
**Finalidad:** Validar los vuelos según los estándares de la FAI
**Datos compartidos:** Contenido completo del archivo IGC (solo cuando pides la validación expresamente)
**Endpoint:** vali.fai-civl.org/api/vali/json
**Política de privacidad:** [https://www.fai.org/privacy-policy](https://www.fai.org/privacy-policy)
**Base legal:** Consentimiento (iniciado por el usuario)

### 5.5 Proveedores de teselas de mapa
**Finalidad:** Mostrar mapas interactivos para visualizar los vuelos
**Servicios usados:**
- OpenStreetMap Foundation (tile.openstreetmap.org)
- OpenTopoMap (tile.opentopomap.org)
- IGN France (data.geopf.fr)

**Datos compartidos:** Solo peticiones de teselas (sin datos personales)
**Base legal:** Interés legítimo (funcionamiento esencial del servicio)

### 5.6 Transferencias internacionales de datos

Algunos de nuestros proveedores de servicios están fuera del Espacio Económico Europeo (EEE), sobre todo en Estados Unidos. Cuando transferimos datos fuera:

- Nos apoyamos en **decisiones de adecuación** de la Comisión Europea (cuando existen)
- Aplicamos **cláusulas contractuales tipo (CCT)** aprobadas por la Comisión Europea
- Nos aseguramos de que los proveedores cumplan **estándares de protección de datos equivalentes al RGPD**

## 6. Cookies y tecnologías de seguimiento

### 6.1 Cookies esenciales (no requieren consentimiento)

**Cookies de autenticación:**
- **Finalidad:** Mantener tu sesión iniciada
- **Tipo:** Tokens JWT HTTP-only, seguros y cifrados
- **Duración:** 30 días desde tu última visita, y nunca más de 90 días desde que iniciaste sesión. Al cerrar sesión se borra, y al restablecer tu contraseña o eliminar tu cuenta se cierra en todos los dispositivos.
- **Proveedor:** NextAuth.js
- **Se puede desactivar:** No (esencial para el funcionamiento del servicio)

**Cookies de seguridad de conexión (autorouter):**
- **Nombres:** `ar_oauth_state`, `ar_oauth_return`
- **Finalidad:** Proteger el inicio de sesión en autorouter cuando lo conectas para los NOTAM, y devolverte a la página de la que venías
- **Tipo:** HTTP-only, segura
- **Duración:** 10 minutos; se borran en cuanto termina la conexión
- **Se puede desactivar:** No (solo se crean cuando eliges conectar autorouter)

### 6.2 Cookies funcionales (interés legítimo)

**Cookie del estado de la barra lateral:**
- **Nombre:** `sidebar_state`
- **Finalidad:** Recordar si prefieres la barra lateral desplegada o plegada
- **Duración:** 7 días
- **Datos guardados:** "true" o "false"

**Cookie de idioma:**
- **Nombre:** `NEXT_LOCALE`
- **Finalidad:** Recordar el idioma de la interfaz que elegiste (inglés, francés, alemán, neerlandés, italiano o español)
- **Duración:** 1 año
- **Datos guardados:** Un código de idioma como "fr"

**Cookie del idioma mostrado:**
- **Nombre:** `wf-rl`
- **Finalidad:** Anotar el idioma de la última página mostrada, para que la app pueda recargarse una vez si cambias de idioma mientras navegas
- **Duración:** Hasta que cierres el navegador
- **Datos guardados:** Un código de idioma como "fr"

**Cookie de dispositivo conocido:**
- **Nombre:** `wf-known-device`
- **Finalidad:** Recordar que alguien ya inició sesión antes en este navegador, para que la página de inicio ofrezca «Iniciar sesión» en lugar de «Crear una cuenta»
- **Duración:** Unos 13 meses
- **Datos guardados:** Solo "1", nunca tu correo ni el ID de tu cuenta

**Cookie de aviso de llave de acceso:**
- **Nombre:** `wf-passkey-hint`
- **Finalidad:** Recordar que este navegador tiene una llave de acceso para We-Fly, para que la página de inicio de sesión la ofrezca primero
- **Duración:** Unos 13 meses
- **Datos guardados:** Solo "1"

### 6.3 Almacenamiento local

Usamos el almacenamiento local del navegador para:

**Ajustes de visualización de vuelos:**
- **Clave:** `we-fly-flights-display-settings`
- **Finalidad:** Guardar en caché la visibilidad de las columnas y el orden para que la página cargue más rápido
- **Datos:** Objeto JSON con preferencias de la interfaz
- **Sincronizado:** Con el servidor para acceder desde varios dispositivos

**Preferencias de filtros:**
- **Finalidad:** Conservar los ajustes de búsqueda y filtros de vuelos
- **Datos:** Criterios de búsqueda, rangos de fechas, filtros de ubicación
- **Ámbito:** Solo en el cliente

Puedes borrar el almacenamiento local cuando quieras desde los ajustes de tu navegador. Esto devolverá las preferencias de la interfaz a sus valores por defecto.

### 6.4 Analítica y seguimiento

Actualmente **no** usamos:
- Google Analytics ni plataformas de analítica similares
- Rastreadores publicitarios de terceros
- Píxeles de redes sociales
- Mecanismos de seguimiento entre sitios

## 7. Almacenamiento y seguridad de los datos

### 7.1 Dónde guardamos tus datos

**Base de datos:** MongoDB
- Cuentas de usuario, vuelos, información de despegues
- Base de datos profesional con controles de acceso
- Copias de seguridad automáticas periódicas
- Conexiones cifradas (TLS/SSL)

**Sistema de archivos (opcional):**
- Archivos IGC originales y datos JSON procesados
- Guardados en carpetas propias de cada usuario
- Protección contra path traversal implementada
- Acceso restringido a peticiones autenticadas

**Ubicación geográfica:** Servidores en la UE 

### 7.2 Medidas de seguridad

Aplicamos prácticas de seguridad estándar del sector:

**Salvaguardas técnicas:**
- Cifrado HTTPS para todos los datos en tránsito (TLS 1.2+)
- Cookies seguras HTTP-only con protección SameSite
- Autenticación basada en tokens JWT con caducidad
- Prevención de inyección en MongoDB y saneamiento de entradas
- Escapado de expresiones regulares para evitar ataques ReDoS
- Prevención de path traversal en las operaciones con archivos
- Validación de ObjectId en todas las consultas a la base de datos

**Controles de acceso:**
- Autenticación por sesión mediante NextAuth
- Control de acceso basado en roles (usuario o administrador)
- Filtrado de datos por usuario (cada usuario solo accede a sus propios vuelos)
- Rutas protegidas que requieren autenticación

**Validación de datos:**
- Límite de tamaño de archivo (máximo 3MB para subidas IGC)
- Validación de la extensión del archivo (solo .igc)
- Validación de coordenadas (longitud de -180 a 180, latitud de -90 a 90)
- Detección de vuelos duplicados mediante hash MD5
- Lectura de fechas con validación de formato

**Supervisión y registros:**
- Registro estructurado de eventos de seguridad
- Registro de auditoría de las acciones de administración
- Registro de intentos de acceso no autorizados
- Registro de errores con contexto para su investigación

### 7.3 Procedimiento ante brechas de datos

Si se produce una brecha que afecte a tus datos personales:
- Lo notificaremos a la autoridad de control competente en un plazo de 72 horas (artículo 33 del RGPD)
- Informaremos a los usuarios afectados sin demora indebida (artículo 34 del RGPD)
- Describiremos la naturaleza de la brecha y las medidas para mitigarla
- Documentaremos todas las brechas en nuestros registros internos

## 8. Conservación de los datos

### 8.1 Plazos de conservación

**Datos de la cuenta:**
- Se conservan mientras exista tu cuenta
- Se borran al cerrarla (ver sección 9.3)

**Vuelos:**
- Se conservan indefinidamente mientras tu cuenta esté activa
- Puedes borrar vuelos sueltos cuando quieras
- Todos los vuelos se borran al cerrar la cuenta

**Tokens de sesión:**
- Los tokens JWT caducan 30 días después de tu última visita, y nunca más de 90 días después de iniciar sesión
- Los tokens caducados dejan de valer para autenticarse

**Cookies:**
- `sidebar_state`: 7 días desde la última visita
- Cookies de autenticación: 30 días desde la última visita, 90 días como máximo (ver sección 6.1)

**Almacenamiento local:**
- Se mantiene hasta que borres los datos del navegador o elimines tu cuenta
- Sin conservación en el servidor

**Datos de conexión:**
- Solo se guardan tus últimas 5 direcciones IP distintas y su ubicación aproximada; cada nueva dirección sustituye a la más antigua
- Se borran con tu cuenta

**Archivos de registro:**
- Los registros de seguridad se conservan 12 meses (interés legítimo en la seguridad)
- Se borran automáticamente al terminar el plazo

### 8.2 Cuentas inactivas

**Política de inactividad:** Las cuentas sin ningún inicio de sesión durante 3 años seguidos se eliminan automáticamente para cumplir el principio de limitación del plazo de conservación del RGPD (artículo 5(1)(e)).

**Sistema de avisos:**
- A los **2,5 años** de inactividad recibirás un correo avisándote de que tu cuenta se eliminará en 6 meses
- Puedes evitarlo simplemente iniciando sesión en cualquier momento antes de llegar a los 3 años
- Si inicias sesión después del aviso, el contador de inactividad se reinicia y el aviso se anula
- Al llegar a los **3 años** (y si ya se te avisó), tu cuenta se elimina automáticamente

**Qué pasa cuando se elimina una cuenta inactiva:**
- Toda la información de la cuenta se borra para siempre
- Todos los datos de vuelo y tracks GPS se borran para siempre
- Todos los registros de consentimiento se borran para siempre
- Se crea un registro de auditoría seudonimizado de la eliminación (ver sección 8.3)

**Cómo evitar la eliminación:** Inicia sesión en tu cuenta en cualquier momento para reiniciar el contador de inactividad.

### 8.3 Registro de auditoría de eliminaciones

**Finalidad:** Cuando eliminas tu cuenta (tú mismo o por inactividad), creamos un registro de auditoría seudonimizado para demostrar el cumplimiento del RGPD y prevenir fraudes.

**Qué se guarda:**
- ID de usuario anonimizado (ObjectId de MongoDB)
- Fecha y hora de la eliminación
- Motivo de la eliminación (a petición del usuario o por inactividad)
- Fecha del último inicio de sesión (si la eliminación fue por inactividad)
- Fecha del aviso de inactividad (si corresponde)

**Qué NO se guarda:**
- Dirección de correo electrónico
- Nombre de usuario
- Ningún dato que permita identificarte

**Plazo de conservación:** 7 años desde la fecha de eliminación (exigido por la normativa europea de conservación de registros)

**Eliminación automática:** Los registros de auditoría con más de 7 años se borran automáticamente cada mes.

**Base legal:** Obligación legal (normativa fiscal y de conservación de registros de la UE)

### 8.4 Conservación de copias de seguridad

**Política de copias:** Mantenemos copias de seguridad rotativas de la base de datos de 7 días para recuperación ante desastres.

**Importante:** Cuando eliminas tu cuenta o vuelos sueltos, los datos borrados permanecen en las copias de seguridad hasta 7 días. Pasado ese plazo, ya no se pueden recuperar.

**Solicitar el borrado inmediato:** Si necesitas un borrado completo e inmediato (por ejemplo, por obligación legal o urgencia), contáctanos y podemos eliminar manualmente los datos de las copias recientes. Este procedimiento solo se usa en casos excepcionales.

### 8.5 Calendario completo de conservación

Para ver todos los plazos de conservación en detalle, consulta nuestra [Política de conservación de datos](/doc/data-retention-policy).

## 9. Tus derechos de protección de datos

Según el RGPD, tienes los siguientes derechos sobre tus datos personales:

### 9.1 Derecho de acceso (artículo 15)

Tienes derecho a solicitar:
- Que te confirmemos si tratamos tus datos personales
- Una copia de tus datos personales
- Información sobre cómo usamos tus datos

**Cómo ejercerlo:** Haz clic en **Exportar datos** en el panel **Cuenta** de tu **Perfil**. Se genera un archivo ZIP con todos tus archivos IGC ordenados por fecha, más un archivo JSON estructurado con tu perfil, tus preferencias, tus vuelos, las cuentas de inicio de sesión vinculadas y tus registros de consentimiento.

### 9.2 Derecho de rectificación (artículo 16)

Tienes derecho a corregir datos personales inexactos.

**Cómo ejercerlo:** Edita la información de tu perfil en los ajustes de la cuenta. La exactitud de los datos de vuelo depende de los archivos IGC que subas (sube archivos corregidos si hace falta).

### 9.3 Derecho de supresión / «derecho al olvido» (artículo 17)

Tienes derecho a pedir que se borren tus datos personales cuando:
- Ya no sean necesarios para la finalidad original
- Retires tu consentimiento (en tratamientos basados en el consentimiento)
- Te opongas al tratamiento (y no existan motivos legítimos que prevalezcan)
- Se hayan tratado de forma ilícita

**Cómo ejercerlo:** Haz clic en **Eliminar cuenta** en el panel **Cuenta** de tu **Perfil**, escribe tu dirección de correo para confirmar y luego haz clic en **Eliminar mi cuenta para siempre**. Tu cuenta y todos los datos asociados se borrarán de inmediato.

**Qué se borra:**
- Toda la información de la cuenta (correo, nombre, perfil)
- Todos los datos de vuelo y tracks GPS
- Todos los registros de consentimiento
- Todos los datos de sesión

**Qué se conserva:**
- Registro de auditoría seudonimizado de la eliminación (7 años, sin datos que permitan identificarte)
- Datos en copias de seguridad (hasta 30 días, después se borran para siempre)

**Excepciones:** Podemos conservar ciertos datos si lo exige la ley o por fines legales legítimos (ver la sección 8.3 sobre el registro de auditoría de eliminaciones).

### 9.4 Derecho a la limitación del tratamiento (artículo 18)

Tienes derecho a pedir que limitemos el tratamiento de tus datos cuando:
- Impugnes la exactitud de los datos
- El tratamiento sea ilícito pero te opongas a su supresión
- Ya no los necesitemos pero tú los necesites para reclamaciones legales
- Te hayas opuesto al tratamiento (mientras se verifican los motivos legítimos)

**Cómo ejercerlo:** Contáctanos indicando tu solicitud concreta de limitación.

### 9.5 Derecho a la portabilidad de los datos (artículo 20)

Tienes derecho a recibir tus datos personales en un formato estructurado, de uso común y legible por máquina.

**Cómo ejercerlo:**
- **Datos de vuelo:** Usa **Exportar datos** en tu **Perfil** para descargar un archivo ZIP con todos tus archivos IGC
- **Datos de la cuenta:** El mismo archivo incluye un JSON (`data-export.json`) con la información de tu cuenta, tus preferencias y tus vuelos

### 9.6 Derecho de oposición (artículo 21)

Tienes derecho a oponerte al tratamiento basado en el interés legítimo o con fines de marketing directo.

**Cómo ejercerlo:**
- **Funciones de la comunidad:** Desactiva **Perfil público** en **Ajustes de privacidad** para no aparecer en las funciones de la comunidad
- **Otros tratamientos:** Contáctanos indicando tu oposición concreta

### 9.7 Derecho a retirar el consentimiento (artículo 7(3))

Cuando el tratamiento se basa en el consentimiento, puedes retirarlo en cualquier momento.

**Cómo ejercerlo:**
- **Autenticación OAuth:** Revoca el acceso desde los ajustes de seguridad de tu cuenta de Google
- **Perfil público:** Desactiva **Perfil público** en **Ajustes de privacidad** de tu **Perfil**
- **Cuenta:** Elimina tu cuenta para retirar todo tu consentimiento

**Nota:** Retirar el consentimiento no afecta a la licitud del tratamiento realizado antes de retirarlo.

### 9.8 Derecho a presentar una reclamación (artículo 77)

Tienes derecho a presentar una reclamación ante una autoridad de control, en particular en:
- El Estado miembro de la UE donde residas
- Tu lugar de trabajo
- El lugar de la supuesta infracción

**Autoridades de control de la UE:** [https://edpb.europa.eu/about-edpb/board/members_en](https://edpb.europa.eu/about-edpb/board/members_en)

Te animamos a contactarnos primero para que podamos resolver tus dudas directamente.

### 9.9 Cómo ejercer tus derechos

Para ejercer cualquiera de estos derechos:
1. Contáctanos con los datos de la sección 15
2. Aporta información suficiente para verificar tu identidad (podemos pedirte que confirmes tu dirección de correo)
3. Indica qué derecho(s) quieres ejercer
4. Te responderemos en un plazo de **un mes** (ampliable dos meses más en solicitudes complejas)

**Sin coste:** Ejercer tus derechos es gratis, salvo que las solicitudes sean manifiestamente infundadas o excesivas.

## 10. Ajustes y control de privacidad

### 10.1 Visibilidad del perfil

Tú decides si tu perfil y tus vuelos son visibles para otros usuarios:

**Perfil público (por defecto):**
- Tus vuelos aparecen en las funciones de la comunidad
- Tu perfil es visible para otros usuarios
- Apareces en las clasificaciones y estadísticas de pilotos

**Perfil privado:**
- Tus vuelos solo los ves tú
- No apareces en las clasificaciones de la comunidad
- Puedes seguir generando enlaces secretos para compartir vuelos sueltos

**Cómo cambiarlo:** Abre tu **Perfil**, haz clic en **Ajustes de privacidad** en el panel **Cuenta** y activa o desactiva **Perfil público**. El cambio se aplica al instante.

### 10.2 Preferencias de visualización

Puedes personalizar:
- La visibilidad de las columnas de la tabla de vuelos
- El orden
- Los ajustes de filtros y búsqueda
- El tema de la interfaz

Estas preferencias se sincronizan entre dispositivos.

### 10.3 Exportación de datos

**Exportación por tu cuenta:**
- Abre tu **Perfil** y haz clic en **Exportar datos** en el panel **Cuenta**
- Genera un archivo ZIP con todos tus archivos IGC, ordenados por fecha (estructura de carpetas YYYY/MM/DD)
- Incluye un archivo JSON estructurado con tu perfil, tus preferencias, tus vuelos, las cuentas de inicio de sesión vinculadas y tus registros de consentimiento
- Incluye una lista de los vuelos sin archivo guardado

## 11. Privacidad de los menores

We-Fly no está dirigido a menores de 16 años. No recogemos a sabiendas datos personales de menores de 16 años.

Si eres padre, madre o tutor y crees que tu hijo o hija nos ha facilitado datos personales:
- Contáctanos de inmediato con los datos de la sección 15
- Borraremos esa información de nuestros sistemas en un plazo de 30 días

## 12. Decisiones automatizadas y elaboración de perfiles

**No** realizamos:
- Decisiones automatizadas con efectos jurídicos o efectos igualmente significativos (artículo 22 del RGPD)
- Elaboración de perfiles con fines de marketing o comerciales
- Decisiones algorítmicas que afecten a tu acceso a los servicios

**Análisis de vuelo:** Aunque usamos algoritmos para analizar los datos de vuelo (detección de térmicas, puntuación, análisis del viento), se trata de cálculos técnicos que mejoran tu experiencia y no constituyen elaboración de perfiles según el RGPD.

## 13. Cambios en esta política de privacidad

Podemos actualizar esta política de privacidad de vez en cuando para reflejar:
- Cambios en nuestras prácticas con los datos
- Nuevas funciones o servicios
- Requisitos legales o normativos
- Comentarios de los usuarios y buenas prácticas

**Aviso de cambios:**
- Actualizaremos la fecha de «Última actualización» al principio de esta política
- Si los cambios son importantes, te avisaremos por correo o con un aviso destacado en la plataforma
- Seguir usando el servicio tras los cambios supone aceptar la nueva política

**Historial de versiones:** Conservamos las versiones anteriores de la política por transparencia y cumplimiento normativo.

## 14. Marco legal y cumplimiento

Esta política de privacidad se rige por:
- **RGPD** (UE) 2016/679 - Reglamento General de Protección de Datos
- **Directiva sobre la privacidad electrónica** 2002/58/CE (modificada)
- La normativa nacional de protección de datos aplicable en los Estados miembros de la UE

**Principios de protección de datos (artículo 5 del RGPD):**
- **Licitud, lealtad y transparencia:** Tratamos los datos de forma legal, leal y transparente
- **Limitación de la finalidad:** Datos recogidos con fines determinados, explícitos y legítimos
- **Minimización de datos:** Solo recogemos los datos adecuados y necesarios para nuestros fines
- **Exactitud:** Mantenemos los datos personales exactos y actualizados
- **Limitación del plazo de conservación:** Los datos se conservan solo el tiempo necesario
- **Integridad y confidencialidad:** Garantizamos una seguridad adecuada de los datos personales
- **Responsabilidad proactiva:** Demostramos el cumplimiento de estos principios

## 15. Contacto

Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:

**Responsable del tratamiento:** We-Fly
**Correo:** contact@we-fly.cloud
**Tiempo de respuesta:** Intentamos responder a todas las consultas en un plazo de 5 días hábiles

**Para solicitudes relacionadas con el RGPD:**
- Pon «Solicitud RGPD» en el asunto
- Aporta información suficiente para verificar tu identidad
- Indica el tipo de solicitud (acceso, supresión, portabilidad, etc.)
- Te responderemos en un plazo de un mes, como exige el artículo 12(3) del RGPD

---

## 16. Definiciones e interpretación

**Datos personales:** Toda información sobre una persona física identificada o identificable (por ejemplo, nombre, correo, datos de ubicación, identificador en línea).

**Tratamiento:** Cualquier operación realizada con datos personales, como su recogida, almacenamiento, uso, comunicación o supresión.

**Responsable del tratamiento:** La entidad que determina los fines y medios del tratamiento de los datos personales (We-Fly).

**Encargado del tratamiento:** Una entidad que trata datos personales por cuenta del responsable (por ejemplo, el proveedor de alojamiento de MongoDB).

**Interesado:** La persona a la que se refieren los datos personales (tú, el usuario).

**Consentimiento:** Manifestación de voluntad libre, específica, informada e inequívoca de aceptar el tratamiento de datos personales.

**Archivo IGC:** Formato de archivo de la International Gliding Commission para registros de vuelo GPS, con puntos del track y metadatos.

**OAuth:** Estándar abierto de delegación de acceso, muy usado para iniciar sesión mediante proveedores externos (Google).

---

**Aceptación:** Al usar We-Fly, confirmas que has leído, entendido y aceptado esta política de privacidad.

---

*Esta política de privacidad se revisó y aprobó por última vez el 19 de diciembre de 2025.*
