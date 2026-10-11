---
title: Política de conservación de datos
description: Plazos detallados de conservación de datos y procedimientos de supresión de We-Fly
category: Account & Data
order: 2
---

**Versión:** 1.1
**Fecha de entrada en vigor:** 2025-11-25
**Fecha de la última revisión:** 2026-10-07
**Fecha de la próxima revisión:** 2026-11-25
**Cumplimiento del RGPD:** artículo 5.1.e) (limitación del plazo de conservación) y artículo 17 (derecho de supresión)

## 1. Finalidad y ámbito de aplicación

La presente Política de conservación de datos establece los plazos de conservación y los procedimientos de supresión de los datos personales tratados por We-Fly, de conformidad con el artículo 5.1.e) del RGPD, que exige que los datos personales sean «mantenidos de forma que se permita la identificación de los interesados durante no más tiempo del necesario para los fines del tratamiento de los datos personales».

Esta política se aplica a todos los datos personales recogidos, tratados y almacenados por We-Fly, incluidos:
- La información de la cuenta de usuario
- Los datos de vuelo y los tracks GPS
- Los registros de auditoría de supresiones
- Los registros de consentimiento
- Los datos de sesión
- Los registros de acceso
- Las copias de seguridad del sistema

## 2. Calendario de conservación de datos

### 2.1 Cuentas de usuario y datos de perfil

**Plazo de conservación:** indefinido (hasta su supresión a iniciativa del usuario o tras 3 años de inactividad)

**Base jurídica:** consentimiento (artículo 6.1.a) del RGPD)

**Descripción:** las cuentas de usuario permanecen activas de forma indefinida mientras los usuarios sigan utilizando el servicio. Los usuarios pueden eliminar su cuenta en cualquier momento desde los ajustes del perfil.

**Supresión automática:** las cuentas sin ningún inicio de sesión durante 3 años consecutivos se suprimirán automáticamente, después de que el usuario reciba un correo electrónico de aviso al cumplirse 2,5 años.

**Datos incluidos:**
- Dirección de correo electrónico
- Nombre de usuario
- Información del perfil
- Preferencias de la cuenta
- Fecha de creación y fecha y hora del último inicio de sesión

### 2.2 Datos de vuelo y tracks GPS

**Plazo de conservación:** indefinido (hasta su supresión a iniciativa del usuario)

**Base jurídica:** consentimiento (artículo 6.1.a) del RGPD)

**Descripción:** los datos de vuelo subidos por los usuarios se conservan de forma indefinida, ya que constituyen la funcionalidad principal del servicio. Los usuarios pueden eliminar vuelos concretos o todos sus datos de vuelo en cualquier momento.

**Supresión automática:** los datos de vuelo NO se suprimen automáticamente. Cuando se suprime una cuenta de usuario (manualmente o por inactividad), todos los datos de vuelo asociados se suprimen de forma permanente.

**Datos incluidos:**
- Tracks GPS y trayectorias de vuelo
- Metadatos del vuelo (fecha, duración, distancia, etc.)
- Lugares de despegue y aterrizaje
- Condiciones meteorológicas
- Información de la aeronave

### 2.3 Registro de auditoría de supresiones

**Plazo de conservación:** 7 años desde la fecha de supresión

**Base jurídica:** obligación legal (normativa de la UE en materia tributaria y de conservación de registros)

**Descripción:** cuando un usuario elimina su cuenta, se crea un registro seudonimizado en la colección `account_deletions` con fines de cumplimiento normativo y de prevención del fraude. Este registro NO contiene información personal identificable.

**Supresión automática:** los registros de más de 7 años se suprimen automáticamente el primer día de cada mes mediante una tarea programada (cron).

**Datos incluidos:**
- Identificador de usuario anonimizado (ObjectId de MongoDB)
- Fecha y hora de la supresión
- Motivo de la supresión (a iniciativa del usuario o por inactividad)
- Fecha del último inicio de sesión (si la supresión se debió a inactividad)
- Fecha del aviso de inactividad (si procede)

**Datos NO incluidos:**
- Dirección de correo electrónico
- Nombre de usuario
- Cualquier información personal identificable

### 2.4 Registros de consentimiento

**Plazo de conservación:** indefinido (mientras exista la cuenta de usuario)

**Base jurídica:** obligación legal (artículo 7.1 del RGPD)

**Descripción:** los registros del consentimiento del usuario (aceptación del registro, aceptación de la política de privacidad, consentimiento al tratamiento de datos) se conservan durante toda la vida de la cuenta de usuario para demostrar el cumplimiento de los requisitos de consentimiento del RGPD.

**Supresión automática:** los registros de consentimiento se suprimen cuando se suprime la cuenta de usuario.

**Datos incluidos:**
- Fecha y hora del consentimiento
- Tipo de consentimiento (registro, tratamiento de datos, política de privacidad)
- Versión de la política de privacidad aceptada
- Estado del consentimiento (aceptado)

### 2.5 Registros de acceso

**Plazo de conservación:** 1 año (si se implementan)

**Base jurídica:** interés legítimo (seguridad y prevención del fraude)

**Descripción:** los registros de acceso que recogen la autenticación de los usuarios y las solicitudes a la API se conservan con fines de seguridad. **Nota:** actualmente We-Fly no tiene implementados registros de acceso.

**Supresión automática:** los registros de acceso de más de 1 año se suprimen automáticamente cada semana mediante una tarea programada (cron) (cuando se implementen).

### 2.6 Datos de sesión

**Plazo de conservación:** 30 días después de tu última visita, y nunca más de 90 días después de iniciar sesión

**Base jurídica:** interés legítimo (autenticación del usuario)

**Descripción:** al iniciar sesión se guarda en tu navegador una cookie de sesión cifrada y de tipo HTTP-only. Cada visita la renueva por otros 30 días, de modo que caduca tras 30 días sin abrir We-Fly, y se te pide que vuelvas a iniciar sesión 90 días después de haberla iniciado, con independencia de la frecuencia de tus visitas. Cerrar sesión elimina la cookie de inmediato. Restablecer tu contraseña o eliminar tu cuenta pone fin a todas las sesiones, en todos los dispositivos, en su siguiente solicitud.

**Supresión automática:** las sesiones no se almacenan en nuestra base de datos: la propia cookie es la sesión. Tu navegador la elimina cuando caduca, y el servidor rechaza cualquier sesión que haya caducado, tenga más de 90 días o haya sido finalizada por un restablecimiento de contraseña o por la eliminación de la cuenta.

**Datos incluidos:**
- Identificador de usuario, dirección de correo electrónico, nombre visible y URL de la foto de perfil
- Rol de la cuenta y estado del consentimiento
- Preferencias de visualización (tema, visibilidad del perfil)
- Hora de inicio de sesión y fecha y hora de caducidad
- Versión de la sesión (utilizada para finalizar sesiones de forma anticipada)

### 2.7 Cuentas inactivas

**Plazo de conservación:** 3 años desde el último inicio de sesión

**Base jurídica:** principio de limitación del plazo de conservación (artículo 5.1.e) del RGPD)

**Descripción:** las cuentas de usuario a las que no se haya accedido durante 3 años consecutivos se consideran inactivas y se suprimirán automáticamente.

**Sistema de avisos:**
- A los **2,5 años** de inactividad, los usuarios reciben un correo electrónico avisándoles de que su cuenta se suprimirá en 6 meses
- Los usuarios pueden evitar la supresión simplemente iniciando sesión en cualquier momento antes de alcanzar el umbral de 3 años
- Una vez alcanzado el umbral de **3 años**, la cuenta se suprime automáticamente si el usuario fue avisado previamente

**Supresión automática:** las cuentas inactivas se suprimen automáticamente cada semana mediante una tarea programada (cron) (todos los domingos a las 3:00 UTC).

### 2.8 Copias de seguridad

**Plazo de conservación:** 7 días (conservación rotativa)

**Base jurídica:** interés legítimo (recuperación ante desastres)

**Descripción:** las copias de seguridad de la base de datos se conservan de forma rotativa durante 7 días. Los datos suprimidos permanecen en las copias de seguridad hasta 7 días después de su supresión.

**Supresión automática:** las copias de seguridad de más de 7 días son suprimidas automáticamente por el sistema de copias de seguridad.

**Importante:** debe informarse a los usuarios que soliciten una supresión inmediata y completa de sus datos de que los datos suprimidos pueden permanecer en las copias de seguridad hasta 7 días. Transcurrido este plazo, los datos son irrecuperables de forma permanente.

## 3. Procedimientos de supresión

### 3.1 Supresión de la cuenta a iniciativa del usuario

Los usuarios pueden eliminar su cuenta en cualquier momento desde la página de ajustes del perfil:

1. Ve a Perfil → Ajustes
2. Haz clic en el botón «Eliminar cuenta»
3. Lee y confirma los avisos de supresión
4. Introduce tu contraseña para confirmar
5. La cuenta y todos los datos asociados se suprimen de forma permanente

**Qué se suprime:**
- La cuenta de usuario y la información del perfil
- Todos los datos de vuelo y tracks GPS
- Todos los registros de consentimiento
- Todos los datos de sesión

**Qué se conserva:**
- El registro de auditoría seudonimizado de la supresión (durante 7 años)

### 3.2 Supresión automática de cuentas inactivas

Las cuentas inactivas (3 años sin iniciar sesión) se suprimen automáticamente:

1. A los 2,5 años de inactividad, el usuario recibe un correo electrónico de aviso
2. El registro del usuario se marca con `inactivityWarned: true` y la fecha y hora `inactivityWarnedAt`
3. Si el usuario inicia sesión, la marca de aviso se elimina
4. A los 3 años de inactividad (si el usuario no ha iniciado sesión), la cuenta se suprime automáticamente
5. El registro de auditoría de supresiones deja constancia de la supresión por inactividad

### 3.3 Limpieza automática del registro de auditoría de supresiones

Los registros de auditoría de supresiones de más de 7 años se suprimen automáticamente:

1. La tarea programada (cron) se ejecuta mensualmente (el día 1 de cada mes a medianoche UTC)
2. Se identifican los registros cuya fecha y hora `deletedAt` tenga más de 7 años
3. Los registros se suprimen de forma permanente de la colección `account_deletions`
4. El número de supresiones se registra con fines de supervisión

### 3.4 Supresión manual en copias de seguridad (procedimiento de emergencia)

En casos excepcionales en los que se requiera la supresión inmediata de los datos (por ejemplo, una orden judicial o una solicitud urgente en virtud del RGPD):

1. La cuenta de usuario se suprime mediante el procedimiento normal
2. El administrador de la base de datos identifica y elimina manualmente los datos de las copias de seguridad recientes
3. El acceso a las copias de seguridad está restringido exclusivamente a los administradores autorizados
4. La supresión manual en copias de seguridad se registra y se comunica al delegado de protección de datos

**Nota:** este procedimiento solo se utiliza en circunstancias excepcionales, ya que requiere una intervención manual en la base de datos.

## 4. Base jurídica de la conservación

### 4.1 Cuentas de usuario y datos de vuelo

**Base jurídica:** consentimiento (artículo 6.1.a) del RGPD)

Los usuarios consienten expresamente el tratamiento de sus datos al registrarse en We-Fly. Los usuarios controlan sus datos y pueden suprimirlos en cualquier momento.

### 4.2 Registro de auditoría de supresiones

**Base jurídica:** obligación legal (requisitos de conservación de registros de la UE)

La normativa tributaria y financiera europea exige conservar registros durante 7 años. Aunque We-Fly no es una entidad financiera, el plazo de conservación de 7 años es un estándar ampliamente aceptado para demostrar el cumplimiento de la normativa de protección de datos.

### 4.3 Supresión de cuentas inactivas

**Base jurídica:** principio de limitación del plazo de conservación (artículo 5.1.e) del RGPD)

Conservar indefinidamente las cuentas inactivas vulnera el principio de limitación del plazo de conservación. Tras 3 años de inactividad, no existe ninguna finalidad legítima para conservar los datos.

### 4.4 Copias de seguridad

**Base jurídica:** interés legítimo (recuperación ante desastres)

La conservación de copias de seguridad durante 7 días representa un equilibrio razonable entre la capacidad de recuperación ante desastres y el principio de minimización de datos.

## 5. Aplicación automatizada

Los límites de conservación de datos se aplican mediante tareas programadas automatizadas:

### 5.1 Tarea de limpieza del registro de auditoría de supresiones

- **Calendario:** mensual (el día 1 de cada mes a medianoche UTC)
- **Desencadenante:** tarea programada (cron)
- **Acción:** suprimir los registros de más de 7 años

### 5.2 Tarea de gestión de cuentas inactivas

- **Calendario:** semanal (los domingos a las 3:00 UTC)
- **Desencadenante:** tarea programada (cron)
- **Acciones:**
  - Enviar correos electrónicos de aviso a los usuarios con 2,5 años de inactividad
  - Suprimir las cuentas con 3 años de inactividad (si fueron avisadas)

## 6. Derechos de los usuarios

### 6.1 Derecho de supresión (artículo 17 del RGPD)

Los usuarios pueden solicitar en cualquier momento la supresión inmediata de su cuenta y de todos los datos asociados desde los ajustes del perfil.

**Excepción:** el registro de auditoría de supresiones se conserva durante 7 años como requisito legal, pero no contiene ninguna información personal identificable.

### 6.2 Derecho a la portabilidad de los datos (artículo 20 del RGPD)

Los usuarios pueden exportar sus datos de vuelo en formatos estándar (IGC, GPX, KML) en cualquier momento desde la página de vuelos.

### 6.3 Derecho de acceso (artículo 15 del RGPD)

Los usuarios pueden acceder a todos sus datos personales en cualquier momento desde las páginas de su perfil y de su historial de vuelos.

### 6.4 Derecho de oposición (artículo 21 del RGPD)

Los usuarios pueden oponerse a la supresión automática de cuentas inactivas simplemente iniciando sesión antes de alcanzar el umbral de 3 años. Esto impide la supresión automática.

## 7. Revisión y actualización de la política

### 7.1 Calendario de revisión

Esta política se revisa anualmente en el aniversario de su fecha de entrada en vigor. La próxima revisión prevista es el **2026-11-25**.

### 7.2 Motivos de actualización

Esta política se revisará y actualizará cuando:
- Cambien el RGPD o su interpretación
- Se recojan nuevos tipos de datos
- Cambien los requisitos de conservación
- Se modifiquen los sistemas de supresión automatizada
- Los comentarios de los usuarios indiquen que la política necesita mejoras

### 7.3 Notificación a los usuarios

Cuando se actualice esta política:
- Se incrementa el número de versión
- Los cambios se documentan en el historial de cambios de la política de privacidad
- Se notifica a los usuarios por correo electrónico si los cambios afectan a la conservación de sus datos
- La política actualizada se publica en `/doc/data-retention-policy`

## 8. Supervisión y cumplimiento

### 8.1 Supervisión de las tareas programadas

Las tareas programadas (cron) de aplicación de la conservación se supervisan mediante:
- Los registros de tareas cron del panel de Vercel
- Los registros de la aplicación para las ejecuciones correctas
- El registro de errores para las ejecuciones fallidas

**Salida de registro esperada:**
- Limpieza del registro de auditoría: «Deleted X old deletion records (older than 7 years)»
- Cuentas inactivas: «Sent warnings to X users, deleted Y inactive accounts»

### 8.2 Verificación del cumplimiento

El cumplimiento de esta política se verifica mediante:
- La revisión mensual de los registros de ejecución de las tareas cron
- Consultas trimestrales a la base de datos para verificar que se aplican los límites de conservación
- Una auditoría anual de cumplimiento del RGPD

## 9. Información de contacto

Para preguntas o inquietudes sobre esta política de conservación de datos:

- **Política de privacidad:** [Ver la política de privacidad](/doc/privacy-policy)
- **Solicitudes en virtud del RGPD:** utiliza la función de eliminación de cuenta en los ajustes del perfil

## 10. Referencias

- [Artículo 5 del RGPD](https://gdpr-info.eu/art-5-gdpr/)
- [Artículo 17 del RGPD](https://gdpr-info.eu/art-17-gdpr/)
- [Guía de la ICO sobre la limitación del plazo de conservación](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/storage-limitation/)
- [Política de privacidad de We-Fly](/doc/privacy-policy)

---

**Historial del documento:**
- v1.0 (2025-11-25): creación inicial de la política
