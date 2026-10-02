import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

export interface UserLeadProfile {
  objetivo?: string;
  categoria?: string;
  idadeOuRequisito?: string;
  turno?: string;
  pagamento?: string;
  nome?: string;
}

export interface FlowStepOption {
  label: string;
  value: string;
  icon?: string;
  nextStepId?: string;
}

export interface FlowStep {
  id: string;
  mensagem: string | ((profile: UserLeadProfile) => string);
  opcoes: FlowStepOption[];
  tipo?: "options" | "summary" | "free_text";
}

export const conversationalFlow: Record<string, FlowStep> = {
  inicio: {
    id: "inicio",
    mensagem: `Olá! Que alegria ter você por aqui! 😊\n\nEu sou a **Sofia**, consultora de atendimento da **Autoescola Ximenes** aqui em Fortaleza.\n\nVou te fazer umas perguntinhas bem rápidas para entender exatamente o que você precisa e te passar o melhor pacote com condições especiais.\n\nPara começar: **qual é o seu objetivo principal hoje?**`,
    opcoes: [
      { label: "🚗 Quero tirar minha 1ª CNH", value: "Primeira Habilitação", nextStepId: "categoria" },
      { label: "🚍 Categoria D (Ônibus e Vans)", value: "Categoria D (Ônibus e Vans)", nextStepId: "categoria_d" },
      { label: "➕ Já tenho CNH e quero Adicionar Categoria", value: "Adição de Categoria", nextStepId: "adicao" },
      { label: "🔄 Preciso Renovar minha CNH", value: "Renovação de CNH", nextStepId: "renovacao" },
      { label: "🧘‍♀️ Já sou habilitado(a), mas quero perder o medo", value: "Aulas para Habilitados / Perca o Medo", nextStepId: "perder_medo" },
      { label: "💰 Quero consultar a tabela de valores", value: "Consulta de Valores", nextStepId: "categoria" }
    ]
  },

  categoria: {
    id: "categoria",
    mensagem: (profile) =>
      profile.objetivo === "Consulta de Valores"
        ? `Perfeito! Nossos valores são super competitivos e temos condições facilitadas em até 12x. 💳\n\nPara qual categoria você gostaria de ver os valores?`
        : `Maravilha! A conquista da CNH é um passo incrível de liberdade e independência! 🚗💨\n\nQual veículo você deseja aprender a dirigir?`,
    opcoes: [
      { label: "🚘 Categoria B (Carro de passeio)", value: "Categoria B (Carro)", nextStepId: "idade" },
      { label: "🏍️ Categoria A (Moto / 2 rodas)", value: "Categoria A (Moto)", nextStepId: "idade" },
      { label: "🚀 Categoria AB (Carro e Moto - Combo)", value: "Categoria AB (Carro e Moto)", nextStepId: "idade" },
      { label: "🚍 Categoria D (Ônibus, Vans e Micro-ônibus)", value: "Categoria D (Ônibus e Vans)", nextStepId: "categoria_d" },
      { label: "🤔 Ainda estou na dúvida de qual escolher", value: "Dúvida entre Carro e Moto", nextStepId: "idade" }
    ]
  },

  categoria_d: {
    id: "categoria_d",
    mensagem: `Excelente escolha! A Categoria D abre portas no mercado de trabalho para transporte de passageiros (ônibus, micro-ônibus, vans e vans escolares)! 🚍\n\nRequisitos obrigatórios:\n• Ter 21 anos completos;\n• Estar habilitado há pelo menos 2 anos na Categoria B (ou 1 ano na C);\n• Não ter cometido infração gravíssima nos últimos 12 meses;\n• Exame toxicológico em laboratório credenciado.\n\n⚡ **Tempo médio para concluir o processo:** apenas 20 a 30 dias!\n🛡️ **Aprovação Recorde:** 94% de aprovação e início imediato sem fila de espera!\n\nVocê atende a esses requisitos para a Categoria D?`,
    opcoes: [
      { label: "✅ Sim, tenho 21+ anos e CNH B há mais de 2 anos", value: "Requisitos Categoria D OK", nextStepId: "turno" },
      { label: "🤔 Tenho dúvidas se cumpro todos os requisitos", value: "Dúvidas Requisitos D", nextStepId: "turno" }
    ]
  },

  adicao: {
    id: "adicao",
    mensagem: `Excelente escolha! Adicionar uma nova categoria é muito mais rápido porque você não precisa refazer o curso teórico de 45 horas! ⚡\n\nQual categoria você deseja incluir na sua CNH?`,
    opcoes: [
      { label: "🏍️ Adicionar Categoria A (Moto)", value: "Adição Categoria A (Moto)", nextStepId: "turno" },
      { label: "🚘 Adicionar Categoria B (Carro)", value: "Adição Categoria B (Carro)", nextStepId: "turno" },
      { label: "🚍 Mudança para Categoria D (Ônibus e Vans)", value: "Mudança para Categoria D", nextStepId: "categoria_d" },
      { label: "🚛 Outras Categorias Profissionais (C ou E)", value: "Categorias Profissionais", nextStepId: "turno" }
    ]
  },

  renovacao: {
    id: "renovacao",
    mensagem: `Cuidamos de todo o processo para você renovar sua CNH com agilidade e sem filas! 📄\n\nSua CNH é para uso comum ou você exerce atividade remunerada (EAR)?`,
    opcoes: [
      { label: "👤 CNH comum (dia a dia)", value: "Renovação Simples (Comum)", nextStepId: "turno" },
      { label: "💼 CNH com EAR (trabalho / app)", value: "Renovação com EAR", nextStepId: "turno" },
      { label: "⚠️ CNH vencida há mais de 30 dias", value: "Renovação CNH Vencida", nextStepId: "turno" }
    ]
  },

  perder_medo: {
    id: "perder_medo",
    mensagem: `Pode ficar muito tranquilo(a)! Nosso time tem instrutores altamente pacientes e especializados em acolher quem sente insegurança, ansiedade ou medo de trânsito, ladeiras e baliza. Você vai no seu próprio ritmo, com todo o apoio que merece. ❤️\n\nQual é a sua maior dificuldade atualmente?`,
    opcoes: [
      { label: "🚦 Trânsito pesado da cidade e avenidas", value: "Insegurança no Trânsito Geral", nextStepId: "turno" },
      { label: "🅿️ Baliza, estacionar e controle de ré", value: "Dificuldade com Baliza", nextStepId: "turno" },
      { label: "⛰️ Controle de embreagem e rampas/subidas", value: "Medo de Rampa e Embreagem", nextStepId: "turno" },
      { label: "🕰️ Não dirijo há anos e quero destravar", value: "Parado há anos", nextStepId: "turno" }
    ]
  },

  idade: {
    id: "idade",
    mensagem: `Ótimo! Nossos carros têm direção elétrica levinha, ar-condicionado e pista própria de moto com circuito do Detran.\n\nE me conta: você já completou 18 anos ou está pertinho de fazer aniversário?`,
    opcoes: [
      { label: "✅ Já tenho 18 anos ou mais", value: "Maior de 18 anos", nextStepId: "turno" },
      { label: "🎂 Vou completar 18 nos próximos meses", value: "Prestes a completar 18 anos", nextStepId: "turno" }
    ]
  },

  turno: {
    id: "turno",
    mensagem: `Perfeito! Aqui na **Autoescola Ximenes** temos muita flexibilidade para não atrapalhar seu trabalho ou estudos. ⏰\n\nQual turno ou horário você prefere para realizar suas aulas?`,
    opcoes: [
      { label: "🌅 Manhã (bem cedinho)", value: "Manhã", nextStepId: "pagamento" },
      { label: "☀️ Tarde", value: "Tarde", nextStepId: "pagamento" },
      { label: "🌙 Noite (após 18h)", value: "Noite", nextStepId: "pagamento" },
      { label: "📅 Aos Sábados", value: "Sábados", nextStepId: "pagamento" },
      { label: "⚡ Horário flexível / Varia semanalmente", value: "Horário Flexível", nextStepId: "pagamento" }
    ]
  },

  pagamento: {
    id: "pagamento",
    mensagem: `Excelente, temos turmas abertas exatamente com essas disponibilidades! 🙌\n\nE para facilitar seu planejamento, como você prefere fazer o pagamento?`,
    opcoes: [
      { label: "💳 Cartão de crédito em até 12x", value: "Cartão de Crédito em até 12x", nextStepId: "resumo" },
      { label: "📄 Carnê facilitado da autoescola", value: "Carnê da Autoescola", nextStepId: "resumo" },
      { label: "💸 À vista no Pix com desconto especial", value: "Pix com Desconto", nextStepId: "resumo" },
      { label: "🤝 Quero ver todas as opções disponíveis", value: "Todas as Opções", nextStepId: "resumo" }
    ]
  },

  resumo: {
    id: "resumo",
    tipo: "summary",
    mensagem: (profile) => `Sensacional! Já organizei todo o seu perfil de atendimento aqui! 🎉

📋 **Seu Plano Personalizado na Autoescola Ximenes:**
• **Interesse:** ${profile.categoria || profile.objetivo || "Primeira Habilitação"}
• **Disponibilidade:** Turno da ${profile.turno || "sua preferência"}
• **Pagamento pretendido:** ${profile.pagamento || "Condição facilitada"}
• **Tempo médio de conclusão:** 20 a 30 dias para todo o processo!
• **Aprovação Recorde:** Prova teórica exige 20 de 30 acertos, e nossa metodologia garante 94% de aprovação no DETRAN!
• **Bônus garantido:** Simulados Gratuitos + Condição especial com a Ximenes!

Para eu te enviar a tabela com o valor exato, tirar dúvidas pontuais e **garantir sua vaga na próxima turma**, toque no botão abaixo para me chamar no WhatsApp oficial da **Autoescola Ximenes** no **${siteConfig.whatsappFormatado}**!`,
    opcoes: [
      { label: "📲 CONTINUAR NO WHATSAPP COM A XIMENES", value: "Abrir WhatsApp", nextStepId: "fim" },
      { label: "🔄 Quero mudar minhas respostas", value: "Reiniciar", nextStepId: "inicio" }
    ]
  }
};

export function generateLeadWhatsAppUrl(profile: UserLeadProfile): string {
  const objetivo = profile.categoria || profile.objetivo || "CNH";
  const turno = profile.turno ? `no turno da ${profile.turno}` : "com horários flexíveis";
  const pag = profile.pagamento ? `com pagamento em ${profile.pagamento}` : "com condições especiais";

  const mensagem = `Olá Sofia! Estive conversando com você no site da Autoescola Ximenes.\n\nTenho interesse em: *${objetivo}*, para aulas *${turno}*, *${pag}*.\n\nPoderia me passar os valores atualizados e como posso garantir minha vaga? Obrigado!`;

  return getWhatsAppUrl(mensagem);
}
