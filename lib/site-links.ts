// lib/site-links.ts

export const WHATSAPP_NUMBER = "351939250661";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general:
    "Olá, vim pelo site da Libertrendz e quero entender o que faz mais sentido para o meu caso.",
  websites:
    "Olá, quero melhorar o meu site e entender o que faz mais sentido para o meu caso.",
  apps:
    "Olá, quero entender se um app faz sentido para o meu negócio.",
  strategy:
    "Olá, quero entender melhor qual o caminho mais certo para o meu caso.",
  cases:
    "Olá, vi os cases da Libertrendz e quero entender o que faz sentido para o meu caso.",
  contact:
    "Olá, quero entender qual o caminho mais certo para o meu caso.",
  diagnosis:
    "Olá, fiz o diagnóstico no site da Libertrendz e quero falar sobre isto.",
};
