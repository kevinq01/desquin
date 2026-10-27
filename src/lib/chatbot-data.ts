// Contenido y resolución de respuestas del "Agente del espacio".
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
}

export interface BotAnswer {
  text: string;
  quickReplies?: QuickReply[];
}

const topics: Topic[] = [
  {
    id: 'precio',
    label: '¿Cuánto cuesta un proyecto?',
    keywords: ['precio', 'cuesta', 'costo', 'valor', 'presupuesto', 'cotizar', 'cotizacion', 'tarifa', 'cuanto vale'],
    answer: 'Depende del alcance — no manejamos paquetes cerrados. Nos cuentas qué necesitas y te damos un presupuesto claro antes de empezar, sin costos ocultos.',
    followUps: ['tiempo', 'servicios'],
  },
  {
    id: 'tiempo',
    label: '¿Cuánto tiempo toma?',
    keywords: ['tiempo', 'demora', 'cuanto tarda', 'plazo', 'entrega', 'cuando'],
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
    keywords: ['automatizacion', 'automatizar', 'bot', 'integracion', 'api', 'proceso manual'],
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
    keywords: ['base de datos', 'bd', 'sql', 'consulta lenta', 'migrar datos'],
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
    id: 'proyecto-a-medida',
    label: '¿Pueden crear cualquier tipo de proyecto?',
    keywords: ['inventario', 'ventas en linea', 'tienda en linea', 'crm', 'sistema a la medida', 'cualquier proyecto', 'idea', 'gestion'],
    answer: 'Sí. Construimos software a la medida de lo que tengas en mente: sistemas de inventario, plataformas de ventas en línea, paneles administrativos, lo que tu negocio necesite. Cuéntanos tu idea y te damos una cotización clara.',
    followUps: ['precio'],
  },
];

const topicsById: Record<string, Topic> = Object.fromEntries(topics.map((t) => [t.id, t]));

const rootMenuIds = ['precio', 'servicios', 'proyecto-a-medida', 'tiempo', 'cobertura', 'soporte'];

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
    quickReplies: (topic.followUps ?? [])
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
 * PUNTO DE EXTENSIÓN — IA FUTURA
 * Hoy: 100% local y síncrono (matching de palabras clave). El widget ya
 * llama esta función con `await`, así que el día que haya un backend de
 * IA real, basta con reemplazar el cuerpo por un `fetch` a un endpoint
 * que devuelva algo compatible con `BotAnswer` — sin tocar el componente.
 *
 * Modelos gratuitos/código abierto a considerar cuando haya token (no
 * requiere GPU propia, son APIs con capa gratuita):
 * - Groq (https://console.groq.com) — Llama 3.1/3.3 y otros modelos
 *   abiertos corriendo muy rápido, con free tier generoso. API compatible
 *   con el formato de OpenAI.
 * - OpenRouter (https://openrouter.ai) — agrega varios modelos abiertos
 *   con variantes ":free" (ej. Llama, Mistral, Gemma) sin costo.
 * - Google AI Studio / Gemini API — capa gratuita con límite de peticiones
 *   por minuto, no es open-source pero es gratis para empezar.
 *
 * El backend NO puede vivir aquí directamente porque el sitio es Astro
 * estático (sin adapter en astro.config.mjs) — haría falta un endpoint
 * aparte (Cloudflare Worker, función serverless, etc.) que reciba el
 * mensaje, llame al modelo elegido con el contexto de Desquin (servicios,
 * precios, FAQs) y devuelva `{ text, quickReplies? }`. Ese endpoint es
 * justo lo que reemplazaría el `fetch` de este comentario.
 */
export async function resolveAnswer(userText: string): Promise<BotAnswer | null> {
  const normalized = normalize(userText);
  if (!normalized) return null;

  let best: { topic: Topic; score: number } | null = null;
  for (const topic of topics) {
    let score = 0;
    for (const kw of topic.keywords) {
      const nkw = normalize(kw);
      if (nkw && normalized.includes(nkw)) {
        score += nkw.split(' ').length;
      }
    }
    if (score > 0 && (!best || score > best.score)) best = { topic, score };
  }

  return best ? getAnswerForTopic(best.topic.id) : null;
}
