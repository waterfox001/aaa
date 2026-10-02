import { QuizQuestionItem } from "../types/types";

export const quizQuestions: QuizQuestionItem[] = [
  {
    id: 1,
    pergunta: "Em um cruzamento sem sinalização, de quem é a preferência de passagem?",
    alternativas: [
      "Do veículo que se aproxima pela esquerda",
      "Do veículo que se aproxima pela direita",
      "Do veículo maior",
      "De quem buzinar primeiro"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "Pela regra do CTB, a preferência em cruzamentos não sinalizados é do condutor que vem pela direita.",
    dicaRapida: "Regra da direita!"
  },
  {
    id: 2,
    pergunta: "Qual é a velocidade máxima em vias locais onde não houver placa?",
    alternativas: [
      "20 km/h",
      "30 km/h",
      "40 km/h",
      "50 km/h"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "Nas vias urbanas locais não sinalizadas, o limite estabelecido pelo CTB é de 30 km/h.",
    dicaRapida: "Vias locais = 30 km/h."
  },
  {
    id: 3,
    pergunta: "Diante de um semáforo com luz amarela constante, você deve:",
    alternativas: [
      "Acelerar o máximo possível",
      "Parar com segurança antes da linha, salvo se já estiver cruzando",
      "Buzinar e fazer conversão proibida",
      "Dar marcha a ré"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "A luz amarela exige atenção e parada prudente antes da faixa de retenção.",
    dicaRapida: "Amarelo = Atenção e parada segura."
  },
  {
    id: 4,
    pergunta: "Qual é a distância lateral mínima obrigatória ao ultrapassar um ciclista?",
    alternativas: [
      "0,50 metro",
      "1,00 metro",
      "1,50 metro",
      "2,00 metros"
    ],
    respostaCorreta: 2,
    explicacaoCurta: "O CTB exige respeitar ao menos 1,50 metro de distância lateral para proteção do ciclista.",
    dicaRapida: "1,5 metro de segurança."
  },
  {
    id: 5,
    pergunta: "Ao encontrar um motociclista acidentado no chão, você NUNCA deve:",
    alternativas: [
      "Sinalizar o local",
      "Retirar o capacete dele",
      "Ligar para o 192 (SAMU)",
      "Verificar se ele responde"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "Tirar o capacete pode lesionar a medula cervical e causar paralisia definitiva ou óbito.",
    dicaRapida: "Jamais remova o capacete da vítima!"
  },
  {
    id: 6,
    pergunta: "A profundidade mínima legal dos sulcos dos pneus de automóveis (indicador TWI) é de:",
    alternativas: [
      "0,8 mm",
      "1,6 mm",
      "2,5 mm",
      "4,0 mm"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "Pneus com sulco menor que 1,6 mm são considerados 'carecas' e geram multa e retenção.",
    dicaRapida: "Limite de segurança: 1,6 mm."
  },
  {
    id: 7,
    pergunta: "Qual a pontuação anotada na CNH por uma infração gravíssima?",
    alternativas: [
      "4 pontos",
      "5 pontos",
      "7 pontos",
      "10 pontos"
    ],
    respostaCorreta: 2,
    explicacaoCurta: "A pontuação oficial do CTB é: Leve (3), Média (4), Grave (5) e Gravíssima (7).",
    dicaRapida: "Gravíssima = 7 pontos."
  },
  {
    id: 8,
    pergunta: "Para quem o uso do cinto de segurança é obrigatório no automóvel?",
    alternativas: [
      "Apenas para quem está no banco dianteiro",
      "Para todos os ocupantes, inclusive nos bancos traseiros",
      "Somente para o motorista",
      "Apenas durante a noite"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "O cinto de segurança é exigido para todos os ocupantes do veículo em qualquer via do país.",
    dicaRapida: "Cinto para todos os passageiros."
  },
  {
    id: 9,
    pergunta: "Em caso de aquaplanagem na pista molhada, a atitude correta é:",
    alternativas: [
      "Pisar fundo no freio",
      "Puxar o freio de mão",
      "Tirar o pé do acelerador e manter o volante reto sem frear bruscamente",
      "Desligar a ignição"
    ],
    respostaCorreta: 2,
    explicacaoCurta: "Soltar o acelerador e segurar a direção reta permite que o pneu retome o contato com o asfalto com calma.",
    dicaRapida: "Desacelere suavemente, sem frear brusco!"
  },
  {
    id: 10,
    pergunta: "Quantos anos dura a Permissão para Dirigir (PPD) até solicitar a CNH definitiva?",
    alternativas: [
      "6 meses",
      "1 ano",
      "2 anos",
      "5 anos"
    ],
    respostaCorreta: 1,
    explicacaoCurta: "A PPD tem validade de 1 ano. Sem cometer infração grave, gravíssima ou reincidir em média, você pega a CNH definitiva.",
    dicaRapida: "1 ano de aprovação probatória."
  }
];
