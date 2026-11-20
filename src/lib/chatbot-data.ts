// Contenido y resolución de respuestas de "Lounis".
// Hoy es 100% local (reglas + palabras clave), sin llamadas de red.
// Ver `resolveAnswer` para el punto de extensión hacia una IA real.

export interface QuickReply {
  id: string;
  label: string;
}

interface Topic {
  id: string;
  label: string;
  keywords: string[];
  answer: string;
  followUps?: string[];
  offerWhatsApp?: boolean;
}

export interface BotAnswer {
  text: string;
  quickReplies?: QuickReply[];
  /** Ofrece el botón de WhatsApp junto a la respuesta. */
  offerWhatsApp?: boolean;
}

const topics: Topic[] = [
  {
    id: 'precio',
    label: '¿Cuánto cuesta un proyecto?',
    keywords: ['precio', 'cuesta', 'costo', 'valor', 'presupuesto', 'cotizar', 'cotizacion', 'tarifa', 'cuanto vale', 'cuanto cobran', 'cuanto cuesta', 'cuanto sale'],
    answer: 'Depende del alcance — no manejamos paquetes cerrados. Nos cuentas qué necesitas y te damos un presupuesto claro antes de empezar, sin costos ocultos.',
    followUps: ['tiempo', 'servicios'],
  },
  {
    id: 'tiempo',
    label: '¿Cuánto tiempo toma?',
    keywords: ['tiempo', 'demora', 'cuanto tarda', 'plazo', 'entrega', 'cuanto se demoran'],
    answer: 'Varía según la complejidad. En la primera conversación te damos un tiempo estimado realista, y te mantenemos informado del avance durante todo el proceso.',
    followUps: ['precio', 'proceso'],
  },
  {
    id: 'servicios',
    label: '¿Qué servicios ofrecen?',
    keywords: ['servicio', 'servicios', 'que hacen', 'ofrecen', 'en que trabajan'],
    answer: 'Trabajamos cuatro frentes: desarrollo web, automatizaciones, servidores e infraestructura, y bases de datos. Puedes contratarlos juntos o por separado.',
    followUps: ['servicio-web', 'servicio-automatizacion', 'servicio-servidores', 'servicio-bd'],
  },
  {
    id: 'servicio-web',
    label: 'Desarrollo web',
    keywords: ['pagina web', 'sitio web', 'tienda en linea', 'ecommerce', 'aplicacion web'],
    answer: 'Sitios corporativos, portafolios, tiendas en línea y aplicaciones web a medida, con SEO técnico y buen rendimiento.',
    followUps: ['precio'],
  },
  {
    id: 'servicio-automatizacion',
    label: 'Automatizaciones',
    keywords: ['automatizacion', 'automatizar', 'automatizaciones', 'integracion', 'integraciones', 'proceso manual', 'chatbot'],
    answer: 'Notificaciones automáticas, integraciones entre sistemas, reportes automáticos y bots para tareas internas repetitivas.',
    followUps: ['precio'],
  },
  {
    id: 'servicio-servidores',
    label: 'Servidores e infraestructura',
    keywords: ['servidor', 'hosting', 'infraestructura', 'despliegue', 'deploy', 'monitoreo'],
    answer: 'Configuración, despliegue, monitoreo, migraciones sin caídas y copias de seguridad de tus servidores.',
    followUps: ['precio'],
  },
  {
    id: 'servicio-bd',
    label: 'Bases de datos',
    keywords: ['base de datos', 'bases de datos', 'sql', 'mysql', 'consulta lenta', 'migrar datos'],
    answer: 'Diseño desde cero, optimización de consultas lentas, migración entre motores y paneles de datos.',
    followUps: ['precio'],
  },
  {
    id: 'cobertura',
    label: '¿Atienden fuera de Colombia?',
    keywords: ['fuera de colombia', 'internacional', 'extranjero', 'otro pais', 'remoto', 'ubicacion'],
    answer: 'Sí. Trabajamos de forma remota con negocios en cualquier ubicación — la comunicación es 100% digital, por WhatsApp, correo o videollamada.',
  },
  {
    id: 'soporte',
    label: '¿Qué pasa después de la entrega?',
    keywords: ['soporte', 'mantenimiento', 'despues de entregar', 'garantia', 'ajustes'],
    answer: 'Seguimos disponibles para soporte, ajustes y mantenimiento. No entregamos y desaparecemos.',
  },
  {
    id: 'parcial',
    label: '¿Puedo pedir solo una parte?',
    keywords: ['solo una parte', 'por separado', 'independiente', 'solo automatizacion', 'solo base de datos'],
    answer: 'Sí, los servicios son independientes entre sí. Puedes contratar solo lo que necesitas hoy y sumar más adelante.',
    followUps: ['servicios'],
  },
  {
    id: 'proceso',
    label: '¿Cómo trabajan?',
    keywords: ['proceso', 'como trabajan', 'metodologia', 'como funciona'],
    answer: 'Cuatro pasos: nos cuentas qué necesitas, te damos una propuesta clara, construimos con avances visibles, y seguimos disponibles después de entregar.',
    followUps: ['precio', 'tiempo'],
  },
  {
    id: 'erp-nomina',
    label: '¿Venden un ERP de nómina?',
    keywords: ['erp', 'nomina', 'talento humano', 'recursos humanos', 'kactus', 'sap', 'liquidar nomina', 'desquin nova'],
    answer: 'Sí. Desquin Nova es un ERP de nómina y talento humano para Colombia, disponible para la venta: empleados, contratos, vacaciones, aprobaciones, liquidación de nómina, desprendibles y reportes. También tenemos FlowerBooll, un ERP de ventas, compras y nómina. Mira los detalles en la sección Proyectos.',
    followUps: ['precio'],
  },
  {
    id: 'proyecto-a-medida',
    label: '¿Pueden crear cualquier tipo de proyecto?',
    keywords: ['inventario', 'ventas en linea', 'tienda en linea', 'crm', 'sistema a la medida', 'software a la medida', 'cualquier proyecto', 'tengo una idea'],
    answer: 'Sí. Construimos software a la medida de lo que tengas en mente: sistemas de inventario, plataformas de ventas en línea, paneles administrativos, lo que tu negocio necesite. Cuéntanos tu idea y te damos una cotización clara.',
    followUps: ['precio'],
  },
  {
    id: 'saludo',
    label: 'Hola',
    keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'saludos'],
    answer: '¡Hola! 👋 Cuéntame qué necesitas: un sistema a la medida, una web, una automatización… o elige una de las preguntas de abajo.',
  },
  {
    id: 'gracias',
    label: 'Gracias',
    keywords: ['gracias', 'muchas gracias', 'listo gracias', 'perfecto gracias', 'vale gracias'],
    answer: '¡Con gusto! Si más adelante quieres avanzar con tu proyecto, aquí estamos.',
    offerWhatsApp: true,
  },
  {
    id: 'humano',
    label: 'Hablar con una persona',
    keywords: ['hablar con alguien', 'hablar con una persona', 'asesor', 'humano', 'whatsapp', 'contactar', 'contacto', 'llamar', 'quiero contratar', 'agendar', 'reunion'],
    answer: 'Claro, te pasamos con el equipo. Toca el botón de WhatsApp y cuéntanos tu necesidad: respondemos directamente.',
    offerWhatsApp: true,
  },
];

const topicsById: Record<string, Topic> = Object.fromEntries(topics.map((t) => [t.id, t]));

// Pocas sugerencias, las de mayor intención de compra. El resto de temas se
// alcanza escribiendo o con los seguimientos de cada respuesta.
const rootMenuIds = ['precio', 'servicios', 'erp-nomina'];

export function getRootQuickReplies(): QuickReply[] {
  return rootMenuIds
    .map((id) => topicsById[id])
    .filter((t): t is Topic => Boolean(t))
    .map((t) => ({ id: t.id, label: t.label }));
}

/** Respuesta determinista para clicks en quick replies (no pasa por el matcher de texto libre). */
export function getAnswerForTopic(id: string): BotAnswer | null {
  const topic = topicsById[id];
  if (!topic) return null;
  return {
    text: topic.answer,
    offerWhatsApp: topic.offerWhatsApp,
    quickReplies: (topic.followUps ?? [])
      .slice(0, 2)
      .map((fid) => topicsById[fid])
      .filter((t): t is Topic => Boolean(t))
      .map((t) => ({ id: t.id, label: t.label })),
  };
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Respuesta local por palabras clave (coincidencia por palabra completa).
 * Devuelve null si no hay una coincidencia confiable: en ese caso el widget
 * consulta la IA (/api/chat) y, si falla, ofrece WhatsApp.
 *
 * Confianza: puntaje >= 2, o puntaje 1 en una frase corta (<= 6 palabras).
 * Una frase larga con una sola palabra clave suele ser una pregunta más
 * específica de lo que cubre el guion, y se la dejamos a la IA.
 */
export function resolveAnswer(userText: string): BotAnswer | null {
  const normalized = normalize(userText);
  if (!normalized) return null;
  const padded = ` ${normalized} `;
  const wordCount = normalized.split(' ').length;

  let best: { topic: Topic; score: number } | null = null;
  for (const topic of topics) {
    let score = 0;
    for (const kw of topic.keywords) {
      const nkw = normalize(kw);
      if (nkw && padded.includes(` ${nkw} `)) score += nkw.split(' ').length;
    }
    if (score > 0 && (!best || score > best.score)) best = { topic, score };
  }

  if (!best) return null;
  if (best.score < 2 && wordCount > 6) return null;
  return getAnswerForTopic(best.topic.id);
}

export type ChatTurn = { role: 'user' | 'assistant'; content: string };

/** Consulta la IA a través del endpoint serverless. Devuelve null si falla. */
export async function askAI(history: ChatTurn[]): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history.slice(-6) }),
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.text === 'string' && data.text.trim() ? data.text.trim() : null;
  } catch {
    return null;
  }
}
