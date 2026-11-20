---
name: "Control de Ingresos a Terceros"
seoTitle: "Control de ingreso de contratistas y terceros a empresas"
order: 7
excerpt: "Plataforma web para gestionar el acceso de terceros a empresas, con validación, notificaciones y control automatizado."
status: "sistema"
statusLabel: "Sistema de control"
tech: ["React", "Laravel", "MySQL", "Bootstrap", "PHP", "JavaScript", "Correos automáticos", "Inicio de sesión Microsoft 365"]
gallery:
  - src: "../../assets/proyectos/control-ingresos/01.png"
    alt: "Control de ingresos a terceros: plataforma web para gestionar el acceso de contratistas a una empresa"
    caption: "Control de ingresos a terceros"
  - src: "../../assets/proyectos/control-ingresos/02.png"
    alt: "Flujo de control de acceso de contratistas: solicitud de la empresa, validación por Seguridad, SST y Mantenimiento, y consulta en portería"
    caption: "Solo entra quien está aprobado"
  - src: "../../assets/proyectos/control-ingresos/03.png"
    alt: "Inicio de sesión del sistema de control de acceso con usuario y contraseña o cuenta Microsoft 365"
    caption: "Acceso por usuario o con Microsoft 365"
  - src: "../../assets/proyectos/control-ingresos/04.png"
    alt: "Gestión de empresas contratistas con NIT, nombre y correo, buscador y edición"
    caption: "Todas tus empresas contratistas en un solo lugar"
  - src: "../../assets/proyectos/control-ingresos/05.png"
    alt: "Portal de la empresa contratista para registrar colaboradores con ARL, cédula y certificado de trabajo en alturas y enviar la solicitud"
    caption: "El contratista carga a su gente y sus documentos"
  - src: "../../assets/proyectos/control-ingresos/06.png"
    alt: "Seguimiento de solicitudes de ingreso con el estado de aprobación de Seguridad, SST y Mantenimiento por cada colaborador"
    caption: "La empresa ve en qué paso va cada solicitud"
  - src: "../../assets/proyectos/control-ingresos/07.png"
    alt: "Validación de solicitudes de terceros por áreas: lista de pendientes y revisión de documentos ARL con fecha de caducidad"
    caption: "Seguridad, SST y Mantenimiento aprueban cada persona"
  - src: "../../assets/proyectos/control-ingresos/08.png"
    alt: "Validación de entrada en portería por número de documento: persona autorizada y persona no autorizada, con empresa y labor"
    caption: "Consulta rápida de quién puede entrar"
  - src: "../../assets/proyectos/control-ingresos/09.png"
    alt: "Gestión de usuarios y roles: administrador, empresa, portería, SST, Mantenimiento y Seguridad"
    caption: "Usuarios y roles para cada responsabilidad"
  - src: "../../assets/proyectos/control-ingresos/10.png"
    alt: "Control de acceso de terceros en celular: validación de entrada en portería y gestión de colaboradores de la empresa"
    caption: "También funciona en el celular"
liveUrl: "https://controlingreso.desquin.com/"
flow: ["Solicitud", "Correo de notificación", "Validación", "Correo de confirmación", "Acceso registrado"]
whatsappMessage: "Hola, me interesa el proyecto Control de Ingresos a Terceros"
faq:
  - q: "¿Cómo sabe portería si un contratista puede entrar?"
    a: "Portería digita el número de documento de la persona y el sistema muestra al instante si está autorizada o no. El resultado indica la aprobación de Seguridad, SST y Mantenimiento, la empresa que la envía y la labor que va a realizar. Solo aparece como autorizada si las tres áreas la aprobaron."
  - q: "¿Qué pasa cuando una empresa contratista envía una solicitud?"
    a: "La empresa registra a sus colaboradores con su ARL, su cédula y, si trabajan en alturas, el certificado correspondiente, y los agrupa en una solicitud con la labor y la fecha de inicio. El sistema avisa por correo a las áreas que revisan; cuando todas terminan, la empresa recibe un correo de confirmación."
  - q: "¿Se puede entrar con la cuenta corporativa de Microsoft 365?"
    a: "Sí. Además del acceso con usuario y contraseña, el sistema permite iniciar sesión con la cuenta Microsoft 365, para que el personal interno use la misma cuenta que ya tiene en la empresa."
  - q: "¿Cada usuario ve todo el sistema?"
    a: "No. Hay seis roles: administrador, empresa, portería, Seguridad, SST y Mantenimiento. Cada uno solo ve las pantallas que le corresponden, por ejemplo portería solo consulta la entrada y cada empresa solo ve a sus propios colaboradores."
---

Cuando una empresa recibe contratistas, mensajeros o proveedores, el control suele quedar en hojas de cálculo, correos y llamadas: nadie sabe con certeza quién tiene la ARL vigente, quién está aprobado por Seguridad o SST, ni si la persona que llegó a la puerta puede entrar. Este sistema convierte ese trámite en un proceso claro, con responsables y trazabilidad.

**Cómo funciona**

- **La empresa contratista carga a su gente.** Registra a cada colaborador con documento, contacto, ARL, cédula y, si trabajan en alturas, su certificado, y envía una solicitud con la labor y la fecha de inicio.
- **Tres áreas validan.** Seguridad, SST y Mantenimiento tienen cada una su pantalla: revisan los documentos, aprueban o rechazan a cada persona y registran la fecha de caducidad de la ARL.
- **Correos automáticos.** El sistema notifica a las áreas cuando llega una solicitud y confirma a la empresa cuando queda validada.
- **Portería confirma en segundos.** Con el número de documento aparece si la persona está autorizada o no, con la empresa y la labor.
- **Seguimiento para la empresa.** Cada contratista ve el estado de sus solicitudes, persona por persona.
- **Roles y usuarios.** Administrador, empresa, portería, Seguridad, SST y Mantenimiento, cada uno con su propio menú, y administración de empresas y usuarios.
- **Inicio de sesión corporativo.** Acceso con usuario y contraseña o con la cuenta Microsoft 365, sin crear un usuario adicional para el personal interno.
- **Usable en el celular.** La consulta de portería y el portal de la empresa se adaptan a pantallas pequeñas.

**Para quién es:** conjuntos residenciales con obras y proveedores, empresas, plantas, bodegas y cualquier organización que reciba terceros y necesite verificar documentos de seguridad social y de trabajo en alturas antes de dejarlos entrar.

El frontend está construido en React y el backend en Laravel con MySQL, comunicados a través de una API REST. Si quieres ordenar el acceso de terceros a tu empresa, escríbeme y lo adaptamos a tus áreas y a tus requisitos.
