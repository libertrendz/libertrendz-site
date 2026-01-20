// app/diagnostico/page.tsx
"use client";

import { useMemo, useState } from "react";

type PathKey = "moduz" | "apps" | "sites" | "agile";

type SymptomKey =
  | "visibilidade"
  | "gargalo"
  | "crescimento"
  | "campo"
  | "ruido"
  | "conversao"
  | "entrega";

type ContextKey =
  | "manual"
  | "ferramentas"
  | "erp_ruim"
  | "mvp_torto"
  | "trafego_sem_lead";

type PriorityKey =
  | "controle"
  | "margem_campo"
  | "escala"
  | "conversao"
  | "execucao";

const SYMPTOMS: { key: SymptomKey; title: string; desc: string }[] = [
  { key: "visibilidade", title: "Gestão no escuro", desc: "Dados espalhados e pouca visão do todo." },
  { key: "gargalo", title: "Dono gargalo", desc: "Tudo passa por uma pessoa, a empresa trava." },
  { key: "crescimento", title: "Crescer virou risco", desc: "Mais erros, retrabalho e confusão." },
  { key: "campo", title: "Campo sem controlo", desc: "Horas, custos e evidências sem rastreio." },
  { key: "ruido", title: "Ferramentas demais", desc: "WhatsApp/Excel/softwares soltos sem sistema." },
  { key: "conversao", title: "Leads fracos", desc: "Site não converte, mensagem/CTA/rastreio falham." },
  { key: "entrega", title: "Entrega travada", desc: "Projetos emperram, prioridades confusas." },
];

const CONTEXTS: { key: ContextKey; title: string; desc: string }[] = [
  { key: "manual", title: "Manual (Excel/WhatsApp)", desc: "Processos soltos e controlo por planilhas." },
  { key: "ferramentas", title: "Ferramentas desconectadas", desc: "Cada uma resolve um pedaço, ninguém resolve o todo." },
  { key: "erp_ruim", title: "ERP atrapalha", desc: "Existe sistema, mas não escala ou trava a operação." },
  { key: "mvp_torto", title: "Sistema/MVP torto", desc: "Já investiu e agora ficou caro ajustar." },
  { key: "trafego_sem_lead", title: "Há tráfego, mas não há lead", desc: "Precisa de conversão e campanha." },
];

const PRIORITIES: { key: PriorityKey; title: string; desc: string }[] = [
  { key: "controle", title: "Controlo e previsibilidade", desc: "Saber onde estamos e decidir com clareza." },
  { key: "margem_campo", title: "Margem no campo", desc: "Horas, custos, evidências e execução em campo." },
  { key: "escala", title: "Escalar sem caos", desc: "Crescer com sistema e governança." },
  { key: "conversao", title: "Leads e conversão", desc: "Mensagem, prova, CTA e rastreio." },
  { key: "execucao", title: "Destravar execução", desc: "Fluxo, prioridade e entrega sem ruído." },
];

function routeRecommendation(input: {
  symptoms: SymptomKey[];
  context: ContextKey | null;
  priority: PriorityKey | null;
}): { primary: PathKey; secondary: PathKey; why: string[] } {
  const { symptoms, context, priority } = input;

  const has = (k: SymptomKey) => symptoms.includes(k);

  // Scores simples e previsíveis (sem IA).
  const score: Record<PathKey, number> = { moduz: 0, apps: 0, sites: 0, agile: 0 };
  const why: string[] = [];

  // Sites: conversão
  if (has("conversao")) score.sites += 6;
  if (context === "trafego_sem_lead") score.sites += 6;
  if (priority === "conversao") score.sites += 7;

  // Consultoria/Agile: execução / decisões tortas
  if (has("entrega")) score.agile += 6;
  if (context === "mvp_torto") score.agile += 7;
  if (priority === "execucao") score.agile += 7;

  // Moduz: estrutura operacional
  if (has("campo")) score.moduz += 7;
  if (has("ruido")) score.moduz += 5;
  if (has("visibilidade")) score.moduz += 5;
  if (has("gargalo")) score.moduz += 5;
  if (has("crescimento")) score.moduz += 6;
  if (context === "erp_ruim") score.moduz += 6;
  if (priority === "controle") score.moduz += 5;
  if (priority === "margem_campo") score.moduz += 7;
  if (priority === "escala") score.moduz += 6;

  // Apps: dor específica / piloto
  if (context === "manual") score.apps += 4;
  if (context === "ferramentas") score.apps += 4;
  // Se não há sinais fortes de Moduz e não é conversão, apps ganha tração
  if (!has("campo") && !has("crescimento") && !has("gargalo") && !has("visibilidade") && !has("ruido") && !has("conversao")) {
    score.apps += 4;
  }
  if (priority === "controle" || priority === "escala") score.apps += 1; // leve
  if (priority === "
