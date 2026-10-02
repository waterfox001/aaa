import { ChatbotItem } from "../types/types";
import { siteConfig } from "../config/siteConfig";

export const chatbotKnowledgeBase: ChatbotItem[] = [
  {
    id: "preco",
    pergunta: "Quanto custa a CNH na Autoescola Ximenes?",
    palavrasChave: [
      "preco", "preço", "valor", "custa", "quanto", "orçamento", "orcamento", "tabela",
      "promocao", "promoção", "desconto", "investimento", "taxa", "custo", "pagar", "parcelar"
    ],
    resposta: `Aqui na **Autoescola Ximenes**, temos condições super especiais e parcelamento facilitado em até 12x no cartão ou carnê próprio! 🎉\n\nComo o valor varia conforme a categoria (A, B ou AB) e promoções vigentes para Fortaleza, nosso time te envia a tabela detalhada pelo WhatsApp oficial no (85) 9988-0848.`,
    categoria: "financeiro",
    acaoSugerida: {
      texto: "Receber Tabela no WhatsApp (85) 9988-0848",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de receber a tabela de preços e promoções atualizadas da Autoescola Ximenes."
    }
  },
  {
    id: "primeira-habilitacao",
    pergunta: "Como funciona a 1ª Habilitação?",
    palavrasChave: [
      "como tirar", "primeira cnh", "primeira habilitacao", "primeira habilitação",
      "começar", "comeco", "passo a passo", "etapas", "inscrição", "inscricao", "matrícula"
    ],
    resposta: `Tirar sua 1ª CNH na Autoescola Ximenes é simples e sem dor de cabeça! Cuidamos de cada detalhe com você:\n\n1️⃣ Inscrição e abertura do processo no Detran-CE;\n2️⃣ Exame médico e psicotécnico em clínica credenciada;\n3️⃣ Curso teórico com material didático completo + Prova Teórica;\n4️⃣ Aulas práticas em nossa frota com ar e direção leve;\n5️⃣ Exame prático e entrega da sua CNH!`,
    categoria: "geral",
    acaoSugerida: {
      texto: "Iniciar Inscrição com a Sofia",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Quero dar entrada na minha 1ª Habilitação na Autoescola Ximenes. Como posso começar?"
    }
  },
  {
    id: "categoria-b",
    pergunta: "Categoria B (Carro)",
    palavrasChave: [
      "categoria b", "carro", "automovel", "automóvel", "quatro rodas", "habilitacao b", "cnh b", "dirigir carro"
    ],
    resposta: `A Categoria B autoriza você a dirigir carros de passeio e utilitários de até 3.500 kg.\n\nNa Autoescola Ximenes, nossa frota é 100% moderna com ar-condicionado, direção elétrica e aulas práticas em blocos de 2 horas (norma 2026), com foco direto em baliza, controle de embreagem e circulação urbana!`,
    categoria: "categorias",
    acaoSugerida: {
      texto: "Saber mais sobre Carro (Cat B)",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de saber mais sobre as aulas de Carro (Categoria B) na Autoescola Ximenes."
    }
  },
  {
    id: "categoria-a",
    pergunta: "Categoria A (Moto)",
    palavrasChave: [
      "categoria a", "moto", "motocicleta", "duas rodas", "scooter", "cnh a", "pilotar moto"
    ],
    resposta: `A Categoria A permite pilotar qualquer veículo motorizado de 2 ou 3 rodas.\n\nTreinamos você com foco total nas manobras exigidas pelo Detran-CE (prancha de equilíbrio, zigue-zague entre cones e curvas), em aulas práticas em blocos de 2 horas (norma 2026). Você já vai para a prova confiante e sabendo exatamente o que fazer!`,
    categoria: "categorias",
    acaoSugerida: {
      texto: "Saber mais sobre Moto (Cat A)",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Quero saber as turmas e horários de aulas de Moto (Categoria A) na Autoescola Ximenes."
    }
  },
  {
    id: "duracao-aulas-praticas",
    pergunta: "Como funcionam os horários e a duração das aulas práticas?",
    palavrasChave: [
      "aula pratica", "aulas praticas", "duracao", "duração", "quantas horas", "2 horas", "2h", "horario", "horários", "turno", "norma 2026", "minimo"
    ],
    resposta: `Conforme as diretrizes vigentes de trânsito (a partir de 2026), as **aulas práticas de direção são agendadas em blocos com no mínimo 2 horas consecutivas**! ⏱️🚗\n\nEssa metodologia garante muito mais tempo contínuo ao volante, fixação sólida de baliza e rampa e rápida evolução. Temos horários pela manhã, tarde, noite e aos sábados!`,
    categoria: "geral",
    acaoSugerida: {
      texto: "Consultar Horários de Aulas Práticas",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de consultar a grade de horários para as aulas práticas de 2 horas na Autoescola Ximenes."
    }
  },
  {
    id: "categoria-ab",
    pergunta: "Combo CNH AB (Carro e Moto)",
    palavrasChave: [
      "categoria ab", "carro e moto", "combo", "as duas", "ambas", "dupla", "a e b", "pacote"
    ],
    resposta: `O Combo AB é o pacote mais procurado e inteligente na Autoescola Ximenes! 🚀\n\nVocê faz o curso teórico de 45 horas uma única vez, economiza em taxas e sai 100% habilitado para dirigir qualquer carro e pilotar qualquer moto com até 40% de economia em relação a tirar separado!`,
    categoria: "categorias",
    acaoSugerida: {
      texto: "Garantir Desconto Combo AB",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Tenho interesse no Combo CNH AB (Carro e Moto) da Autoescola Ximenes e quero aproveitar a promoção."
    }
  },
  {
    id: "endereco-localizacao",
    pergunta: "Onde fica a Autoescola Ximenes?",
    palavrasChave: [
      "onde fica", "endereco", "endereço", "localizacao", "localização", "onde estao", "ponto", "bairro", "mapa", "como chegar"
    ],
    resposta: `A Autoescola Ximenes fica em localização de facílimo acesso em Fortaleza:\n\n📍 ${siteConfig.endereco}\nPróxima a terminais de ônibus e vias principais.\n\n⏰ Horário de funcionamento:\n${siteConfig.horarioAtendimento}\n\nVenha tomar um café conosco ou tire dúvidas no WhatsApp (85) 9988-0848!`,
    categoria: "contato",
    acaoSugerida: {
      texto: "Abrir Localização no WhatsApp",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de receber a localização exata da Autoescola Ximenes no WhatsApp."
    }
  },
  {
    id: "documentos",
    pergunta: "Quais documentos preciso levar?",
    palavrasChave: [
      "documentos", "documento", "documentacao", "documentação", "rg", "cpf", "comprovante", "o que precisa", "papelada", "levar"
    ],
    resposta: `Para dar entrada na sua CNH na Autoescola Ximenes, você só precisa de documentos simples:\n\n📄 RG ou CNH (com foto legível);\n📄 CPF;\n📄 Comprovante de endereço recente (últimos 90 dias);\n\nNão se preocupe com cópias: na nossa recepção tiramos para você sem custo adicional!`,
    categoria: "documentos",
    acaoSugerida: {
      texto: "Agendar Matrícula no WhatsApp",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Já separei meus documentos e quero agendar minha matrícula na Autoescola Ximenes."
    }
  },
  {
    id: "aulas-habilitados",
    pergunta: "Aulas para quem já tem CNH e tem medo",
    palavrasChave: [
      "medo", "perder o medo", "habilitado", "habilitados", "treinamento", "nervosismo", "trauma", "ansiedade", "destravar"
    ],
    resposta: `Temos um programa exclusivo para habilitados que não dirigem por receio ou trauma! ❤️\n\nNossos instrutores têm didática calma e compreensiva. Você treina no seu ritmo: ladeiras, baliza em vagas reais, trânsito de pico e rodovias até conquistar 100% de segurança ao volante!`,
    categoria: "geral",
    acaoSugerida: {
      texto: "Conhecer Treinamento para Habilitados",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Já sou habilitado(a), mas sinto insegurança ao volante e gostaria de fazer aulas práticas de apoio na Ximenes."
    }
  },
  {
    id: "aprovacao-exame",
    pergunta: "Qual a chance de passar no exame do DETRAN com a Ximenes?",
    palavrasChave: [
      "reprovar", "reprovei", "reprovacao", "reprovação", "nova tentativa", "se eu reprovar", "segunda tentativa", "aprovação", "chance de passar", "passar de primeira"
    ],
    resposta: `A Autoescola Ximenes é referência em aprovação em Fortaleza! Temos **94% de taxa de aprovação geral**, sendo mais de **87% de alunos aprovados já na primeira tentativa**! 🏆\n\nNossos instrutores treinam você no percurso e manobras reais do DETRAN-CE para você fazer o teste com total calma e segurança. E se precisar de qualquer reforço, estamos ao seu lado até sua aprovação!`,
    categoria: "provas",
    acaoSugerida: {
      texto: "Conhecer Metodologia de Aprovação",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de entender mais sobre a metodologia de 94% de aprovação da Auto Escola Ximenes."
    }
  },
  {
    id: "tempo-processo",
    pergunta: "Quanto tempo dura o processo da CNH?",
    palavrasChave: [
      "tempo", "demora", "prazo", "dura", "quantos dias", "tempo medio", "tempo médio", "meses", "rapido", "rápido"
    ],
    resposta: `Na Autoescola Ximenes, o tempo médio para concluir todo o processo de habilitação é de **apenas 20 a 30 dias**! ⚡\n\nTemos turmas teóricas dinâmicas nos três turnos e agilidade no agendamento das aulas práticas para você ter sua CNH em mãos o mais rápido possível.`,
    categoria: "geral",
    acaoSugerida: {
      texto: "Consultar Próxima Turma Express",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Quero tirar minha CNH de forma rápida (20 a 30 dias). Quais as datas das próximas turmas na Ximenes?"
    }
  },
  {
    id: "prova-teorica-pontuacao",
    pergunta: "Quantas questões preciso acertar na prova teórica do DETRAN?",
    palavrasChave: [
      "prova teorica", "prova teórica", "quantas questoes", "quantas questões", "acertar", "pontos", "nota", "minimo", "mínimo", "passar na prova", "20", "30"
    ],
    resposta: `A prova teórica do DETRAN é composta por 30 questões de múltipla escolha. Para ser aprovado(a), o aluno precisa **acertar 20 das 30 questões**! 📝\n\nCom o nosso curso e treinando no **Simulado Gratuito** aqui do nosso site, você já vai para o exame dominando todo o conteúdo!`,
    categoria: "provas",
    acaoSugerida: {
      texto: "Treinar no Simulado Agora",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Gostaria de dicas para a prova teórica de 30 questões do DETRAN."
    }
  },
  {
    id: "categoria-d",
    pergunta: "A Autoescola Ximenes trabalha com Categoria D (Ônibus e Vans)?",
    palavrasChave: [
      "categoria d", "onibus", "ônibus", "van", "vans", "microonibus", "micro-ônibus", "transporte de passageiros", "passageiro", "cnh d"
    ],
    resposta: `Sim! A **Autoescola Ximenes também trabalha com Categoria D** (transporte de passageiros: ônibus, micro-ônibus e vans)! 🚍\n\nRequisitos legais:\n✅ Ter 21 anos completos;\n✅ Estar habilitado há pelo menos 2 anos na Categoria B ou 1 ano na C;\n✅ Não ter cometido nenhuma infração gravíssima nos últimos 12 meses;\n✅ Realizar exame toxicológico.\n\nProcesso rápido em média de 20 a 30 dias e início imediato sem fila de espera!`,
    categoria: "categorias",
    acaoSugerida: {
      texto: "Condições da Categoria D no WhatsApp",
      tipo: "whatsapp",
      urlOuMensagem: "Olá! Quero fazer a mudança para a Categoria D (Ônibus/Vans) na Autoescola Ximenes. Como posso começar?"
    }
  }
];

export const chatbotDefaultOptions = [
  "🚗 1ª Habilitação (20 a 30 dias)",
  "🚍 Categoria D (Ônibus e Vans)",
  "💰 Tabela de Preços",
  "🚘 Categoria B (Carro)",
  "🏍️ Categoria A (Moto)",
  "🚀 Combo Carro e Moto",
  "📝 Prova Teórica (20 de 30)",
  "🔄 E se reprovar? (1º grátis)",
  "📍 Onde fica a Ximenes?"
];
