import { Question } from "../types/types";

export const detranQuestions: Question[] = [
  // LEGISLAÇÃO DE TRÂNSITO (1-15)
  {
    id: 1,
    pergunta: "Qual é o documento de porte obrigatório para conduzir veículo automotor em vias públicas?",
    alternativas: [
      "Certificado de Conclusão de Curso da Autoescola",
      "CNH ou PPD (física ou digital) acompanhada do CRLV do veículo",
      "Apenas o comprovante de pagamento do IPVA do ano corrente",
      "Contrato de compra e venda com firma reconhecida"
    ],
    respostaCorreta: 1,
    explicacao: "Conforme o art. 159 do CTB, o porte da CNH (ou Permissão para Dirigir - PPD) e do Certificado de Registro e Licenciamento do Veículo (CRLV) é obrigatório, podendo ser apresentado no formato digital oficial.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 2,
    pergunta: "A validade máxima da Carteira Nacional de Habilitação (CNH) para condutores com idade inferior a 50 anos é de:",
    alternativas: [
      "3 anos",
      "5 anos",
      "10 anos",
      "Indeterminada"
    ],
    respostaCorreta: 2,
    explicacao: "Conforme a Lei nº 14.071/2020 que alterou o CTB, para condutores com menos de 50 anos o exame de aptidão física e mental tem validade de até 10 anos.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 3,
    pergunta: "Para obter a Permissão para Dirigir (PPD), o candidato deve cumprir os seguintes requisitos básicos, EXCETO:",
    alternativas: [
      "Ser penalmente imputável (ter 18 anos completos)",
      "Saber ler e escrever",
      "Possuir Carteira de Identidade (RG) e CPF",
      "Possuir veículo próprio registrado em seu nome"
    ],
    respostaCorreta: 3,
    explicacao: "Não é necessário possuir veículo próprio para se habilitar. Os requisitos do art. 140 do CTB são: ser penalmente imputável, saber ler e escrever, e possuir documento de identidade e CPF.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 4,
    pergunta: "A Permissão para Dirigir (PPD) tem validade de:",
    alternativas: [
      "6 meses",
      "1 ano",
      "2 anos",
      "5 anos"
    ],
    respostaCorreta: 1,
    explicacao: "A PPD tem validade de exatamente 1 (um) ano. Ao término do período, o condutor solicita a CNH definitiva se não tiver cometido infração grave, gravíssima ou reincidido em média.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 5,
    pergunta: "O condutor que possui PPD perderá o direito de obter a CNH definitiva se, durante o período probatório de um ano, cometer:",
    alternativas: [
      "Qualquer infração de natureza leve",
      "Apenas uma infração de natureza média",
      "Uma infração gravíssima, grave ou for reincidente em infrações médias",
      "Duas infrações leves de estacionamento"
    ],
    respostaCorreta: 2,
    explicacao: "Segundo o art. 148 do CTB, a CNH definitiva só será concedida ao permissionário que não tenha cometido nenhuma infração gravíssima, grave ou reincidido em média nos 12 meses.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "medio"
  },
  {
    id: 6,
    pergunta: "Para conduzir veículos de transporte coletivo de passageiros (ônibus), a categoria exigida é:",
    alternativas: [
      "Categoria B",
      "Categoria C",
      "Categoria D",
      "Categoria A"
    ],
    respostaCorreta: 2,
    explicacao: "A categoria D destina-se a condutores de veículos utilizados no transporte de passageiros cuja lotação exceda a 8 lugares, além do motorista.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 7,
    pergunta: "Qual é a velocidade máxima permitida em vias urbanas locais quando não houver sinalização regulamentadora?",
    alternativas: [
      "30 km/h",
      "40 km/h",
      "60 km/h",
      "80 km/h"
    ],
    respostaCorreta: 0,
    explicacao: "Conforme o art. 61 do CTB, onde não existir sinalização regulamentadora, a velocidade máxima em vias locais é de 30 km/h.",
    categoria: "B",
    assunto: "legislação",
    dificuldade: "medio"
  },
  {
    id: 8,
    pergunta: "Nas vias urbanas de trânsito rápido onde não houver sinalização, a velocidade máxima regulamentar é de:",
    alternativas: [
      "60 km/h",
      "70 km/h",
      "80 km/h",
      "90 km/h"
    ],
    respostaCorreta: 2,
    explicacao: "Pelo Código de Trânsito Brasileiro, na via de trânsito rápido não sinalizada, a velocidade máxima é de 80 km/h.",
    categoria: "B",
    assunto: "legislação",
    dificuldade: "medio"
  },
  {
    id: 9,
    pergunta: "A velocidade mínima permitida em qualquer via pública não poderá ser inferior a:",
    alternativas: [
      "10 km/h em qualquer situação",
      "20 km/h sempre",
      "Metade da velocidade máxima estabelecida para a via",
      "30% da velocidade máxima"
    ],
    respostaCorreta: 2,
    explicacao: "O art. 62 do CTB estabelece que a velocidade mínima não poderá ser inferior à metade da velocidade máxima regulamentada para a via, respeitadas as condições operacionais de trânsito e meteorológicas.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 10,
    pergunta: "O órgão máximo executivo de trânsito da União é:",
    alternativas: [
      "O DETRAN estadual",
      "O CONTRAN (Conselho Nacional de Trânsito)",
      "A SENATRAN (Secretaria Nacional de Trânsito)",
      "A Polícia Rodoviária Federal"
    ],
    respostaCorreta: 2,
    explicacao: "A SENATRAN (antigo DENATRAN) é o órgão executivo máximo do Sistema Nacional de Trânsito, enquanto o CONTRAN é o órgão coordenador e normativo.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "dificil"
  },
  {
    id: 11,
    pergunta: "Para adicionar a categoria A (motocicleta) à categoria B já existente, o condutor necessita:",
    alternativas: [
      "Repetir todo o curso teórico de 45 horas",
      "Realizar exame de aptidão física e mental e as aulas práticas com exame de direção para a categoria A",
      "Apenas pagar as taxas de emissão no Detran",
      "Aguardar completar 21 anos de idade"
    ],
    respostaCorreta: 1,
    explicacao: "Na adição de categoria, o candidato é dispensado das aulas teóricas básicas já cursadas, realizando os exames médicos e a carga horária de aulas práticas obrigatórias com exame prático.",
    categoria: "AB",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 12,
    pergunta: "O condutor suspenso do direito de dirigir deverá, para reaver sua CNH:",
    alternativas: [
      "Cumprir o prazo de suspensão e realizar curso e prova de reciclagem",
      "Apenas aguardar o fim do prazo sem nenhuma exigência",
      "Refazer todos os exames como se fosse primeira habilitação",
      "Vender o veículo em seu nome"
    ],
    respostaCorreta: 0,
    explicacao: "A penalidade de suspensão exige o cumprimento da penalidade temporal e a frequência obrigatória com aprovação em Curso de Reciclagem para Condutores Infratores (art. 268 do CTB).",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "medio"
  },
  {
    id: 13,
    pergunta: "A cassação do documento de habilitação ocorrerá quando o condutor:",
    alternativas: [
      "Estacionar em local proibido pela terceira vez",
      "Conduzir qualquer veículo com o direito de dirigir suspenso",
      "Esquecer os documentos em casa durante a abordagem",
      "Não renovar o exame médico após 30 dias do vencimento"
    ],
    respostaCorreta: 1,
    explicacao: "Segundo o art. 263 do CTB, a cassação da CNH será aplicada quando, suspenso o direito de dirigir, o infrator for flagrado conduzindo qualquer veículo.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "medio"
  },
  {
    id: 14,
    pergunta: "Ao completar 50 anos e até 69 anos de idade, o condutor deve renovar seus exames de aptidão a cada:",
    alternativas: [
      "10 anos",
      "5 anos",
      "3 anos",
      "2 anos"
    ],
    respostaCorreta: 1,
    explicacao: "Pela nova legislação (Lei 14.071/20), condutores com idade igual ou superior a 50 anos e inferior a 70 anos renovam o exame a cada 5 anos. A partir de 70 anos, a cada 3 anos.",
    categoria: "Geral",
    assunto: "legislação",
    dificuldade: "facil"
  },
  {
    id: 15,
    pergunta: "O condutor habilitado na categoria B pode conduzir veículos com peso bruto total (PBT) de até:",
    alternativas: [
      "2.500 kg",
      "3.500 kg",
      "6.000 kg",
      "Sem limite de peso"
    ],
    respostaCorreta: 1,
    explicacao: "A categoria B autoriza a conduzir veículos com PBT de até 3.500 kg e lotação máxima de até 8 lugares, excluído o do motorista.",
    categoria: "B",
    assunto: "legislação",
    dificuldade: "facil"
  },

  // SINALIZAÇÃO DE TRÂNSITO (16-30)
  {
    id: 16,
    pergunta: "As placas de regulamentação têm por finalidade:",
    alternativas: [
      "Alertar os usuários sobre condições potencialmente perigosas na via",
      "Indicar direções, distâncias e pontos turísticos",
      "Informar aos usuários as condições, proibições, obrigações ou restrições no uso das vias",
      "Apenas sugerir velocidades recomendadas sem caráter punitivo"
    ],
    respostaCorreta: 2,
    explicacao: "As placas de regulamentação (geralmente circulares de borda vermelha e fundo branco) têm caráter impositivo; seu desrespeito constitui infração de trânsito.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 17,
    pergunta: "Qual das seguintes placas de regulamentação possui formato octogonal (oito lados)?",
    alternativas: [
      "Dê a Preferência (R-2)",
      "Parada Obrigatória (R-1)",
      "Proibido Ultrapassar (R-7)",
      "Velocidade Máxima Permitida (R-19)"
    ],
    respostaCorreta: 1,
    explicacao: "A placa R-1 (Parada Obrigatória) é a única octogonal do trânsito brasileiro, para permitir sua identificação até pelo verso.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 18,
    pergunta: "A placa com formato triangular com vértice voltado para baixo indica:",
    alternativas: [
      "Parada Obrigatória",
      "Dê a Preferência (R-2)",
      "Sentido Proibido",
      "Pista Sinuosa à Esquerda"
    ],
    respostaCorreta: 1,
    explicacao: "A placa R-2 (Dê a Preferência) é a única no formato triangular com vértice para baixo.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 19,
    pergunta: "As placas de advertência possuem cores características predominantemente:",
    alternativas: [
      "Vermelha e branca",
      "Amarela e preta",
      "Azul e branca",
      "Verde e amarela"
    ],
    respostaCorreta: 1,
    explicacao: "As placas de advertência têm fundo amarelo e símbolos/tarjas pretos, alertando sobre perigos à frente.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 20,
    pergunta: "Uma linha longitudinal contínua amarela pintada na divisão de pistas de sentido duplo indica que:",
    alternativas: [
      "A ultrapassagem é permitida para ambos os sentidos",
      "A ultrapassagem é proibida para ambos os sentidos",
      "O acostamento está logo à direita",
      "O estacionamento é liberado aos sábados"
    ],
    respostaCorreta: 1,
    explicacao: "A linha contínua amarela dupla ou simples contínua proíbe a ultrapassagem nos sentidos em que for contínua.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 21,
    pergunta: "A linha de retenção no pavimento tem por função:",
    alternativas: [
      "Indicar o limite de parada do veículo antes da faixa de pedestres ou cruzamento",
      "Separar faixas de tráfego de mesmo sentido",
      "Indicar área exclusiva para embarque de táxi",
      "Servir de guia sonoro em alta velocidade"
    ],
    respostaCorreta: 0,
    explicacao: "A linha transversal de retenção indica exatamente o ponto antes do qual o veículo deve parar quando o sinal estiver vermelho ou houver placa de parada.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "medio"
  },
  {
    id: 22,
    pergunta: "Diante do sinal luminoso amarelo do semáforo, o condutor deve:",
    alternativas: [
      "Acelerar para passar antes que fique vermelho",
      "Parar o veículo com segurança, salvo se já estiver no cruzamento ou sem distância segura de frenagem",
      "Buzinar continuadamente e seguir em frente",
      "Desligar os faróis"
    ],
    respostaCorreta: 1,
    explicacao: "A luz amarela indica atenção: o condutor deve frear com segurança antes da faixa de retenção. Caso já tenha entrado no cruzamento, deve completar a travessia com cautela.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 23,
    pergunta: "Na ordem de prevalência da sinalização de trânsito estipulada pelo CTB, têm prioridade sobre as demais:",
    alternativas: [
      "As normas gerais de circulação e conduta",
      "As indicações dos semáforos sobre as demais placas",
      "As ordens do agente da autoridade de trânsito sobre todas as demais",
      "As placas de regulamentação sobre qualquer outra"
    ],
    respostaCorreta: 2,
    explicacao: "Conforme o art. 89 do CTB, as ordens emanadas por agentes da autoridade de trânsito prevalecem sobre as regras de circulação e qualquer sinalização.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "medio"
  },
  {
    id: 24,
    pergunta: "Placas com fundo marrom e pictogramas brancos indicam:",
    alternativas: [
      "Obras em andamento na pista",
      "Atrativos turísticos e pontos culturais",
      "Serviços mecânicos e postos de combustível",
      "Pedágios e postos fiscais"
    ],
    respostaCorreta: 1,
    explicacao: "A sinalização de atrativos turísticos utiliza fundo marrom com símbolos e textos brancos.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 25,
    pergunta: "Placas com fundo laranja e letras pretas são utilizadas para:",
    alternativas: [
      "Sinalização de obras e intervenções viárias temporárias",
      "Educação ambiental em rodovias federais",
      "Localização de hospitais de campanha",
      "Fiscalização eletrônica por radares móveis"
    ],
    respostaCorreta: 0,
    explicacao: "O fundo laranja caracteriza a sinalização de obras temporárias, alertando sobre alterações momentâneas do tráfego.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 26,
    pergunta: "A placa de regulamentação 'R-6a' (círculo com borda vermelha e uma faixa diagonal cruzando a letra E) significa:",
    alternativas: [
      "Proibido Parar e Estacionar",
      "Proibido Estacionar",
      "Estacionamento Regulamentado",
      "Início de Pista Dupla"
    ],
    respostaCorreta: 1,
    explicacao: "A placa com uma única tarja diagonal sobre o 'E' significa 'Proibido Estacionar'. A de duas tarjas em 'X' significa 'Proibido Parar e Estacionar'.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 27,
    pergunta: "A marca delimitadora de parada de veículos (faixa zebrada amarela ou amarela contínua no meio-fio) indica:",
    alternativas: [
      "Local livre para estacionar em feriados",
      "Área onde é vedado o estacionamento e/ou parada de veículos",
      "Ponto de encontro exclusivo de motocicletas",
      "Área destinada a ultrapassagens pela direita"
    ],
    respostaCorreta: 1,
    explicacao: "A pintura amarela junto ao meio-fio ou marcas de canalização indicam restrições de estacionamento ou canalização do fluxo.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "medio"
  },
  {
    id: 28,
    pergunta: "Qual o significado da placa de advertência 'A-32b'?",
    alternativas: [
      "Trabalhadores na pista",
      "Passagem sinalizada de pedestres",
      "Crianças brincando",
      "Área escolar"
    ],
    respostaCorreta: 1,
    explicacao: "A placa A-32b avisa o condutor sobre a existência de faixa ou passagem sinalizada para travessia de pedestres adiante.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "medio"
  },
  {
    id: 29,
    pergunta: "O que significa a placa de regulamentação R-4a (seta curvada para a esquerda com tarja vermelha sobreposta)?",
    alternativas: [
      "Curva perigosa à esquerda",
      "Proibido virar à esquerda",
      "Vire à direita obrigatoriamente",
      "Mão dupla adiante"
    ],
    respostaCorreta: 1,
    explicacao: "A placa R-4a regulamenta a proibição de conversão ou manobra para a esquerda na via ou interseção.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "facil"
  },
  {
    id: 30,
    pergunta: "Os sinais sonoros emitidos pelo apito do agente de trânsito de 'um silvo breve' significam:",
    alternativas: [
      "Pare o veículo",
      "Siga em frente / Prossiga",
      "Diminua a marcha",
      "Acenda os faróis altos"
    ],
    respostaCorreta: 1,
    explicacao: "Segundo a sinalização sonora do CTB: Um silvo breve = 'Siga'; Dois silvos breves = 'Pare'; Um silvo longo = 'Diminua a marcha'.",
    categoria: "Geral",
    assunto: "sinalização",
    dificuldade: "medio"
  },

  // DIREÇÃO DEFENSIVA (31-45)
  {
    id: 31,
    pergunta: "A direção defensiva preventiva é aquela em que o motorista:",
    alternativas: [
      "Reage apenas após o imprevisto já ter ocorrido",
      "Antecipa situações de risco, prevendo os perigos com atenção constante",
      "Dirige sempre na velocidade máxima permitida para não atrasar o trânsito",
      "Usa a buzina com frequência para afastar outros veículos"
    ],
    respostaCorreta: 1,
    explicacao: "A direção defensiva preventiva baseia-se em antever potenciais perigos e adotar condutas prévias que evitem acidentes antes que aconteçam.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 32,
    pergunta: "O fenômeno conhecido como 'aquaplanagem' ou 'hidroplanagem' ocorre quando:",
    alternativas: [
      "O motorista lava o veículo com produtos abrasivos",
      "Os pneus perdem o contato com o asfalto devido a uma lâmina d'água na pista",
      "O radiador ferve devido ao calor excessivo do motor",
      "Os freios travam em pista seca"
    ],
    respostaCorreta: 1,
    explicacao: "A aquaplanagem ocorre quando a água acumulada forma uma película entre o pneu e o pavimento, fazendo o condutor perder totalmente o controle da direção.",
    categoria: "B",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 33,
    pergunta: "Ao perceber que seu veículo está aquaplanando na pista molhada, o procedimento correto é:",
    alternativas: [
      "Pisar bruscamente no freio e virar o volante com força",
      "Puxar o freio de mão imediatamente",
      "Tirar suavemente o pé do acelerador, segurar firme a direção em linha reta e não frear bruscamente",
      "Acelerar fundo para vencer a lâmina de água"
    ],
    respostaCorreta: 2,
    explicacao: "Não se deve frear bruscamente nem dar golpes no volante na aquaplanagem. O correto é soltar o acelerador e manter o volante reto até os pneus restabelecerem a aderência.",
    categoria: "B",
    assunto: "direção defensiva",
    dificuldade: "medio"
  },
  {
    id: 34,
    pergunta: "A distância de seguimento segura recomendada em condições normais entre o seu veículo e o que segue à frente é de pelo menos:",
    alternativas: [
      "Meio segundo",
      "2 segundos (regra dos dois segundos)",
      "10 metros fixos em qualquer velocidade",
      "Não há distância recomendada"
    ],
    respostaCorreta: 1,
    explicacao: "A 'regra dos 2 segundos' é o padrão universal de direção defensiva para manter uma distância de seguimento segura com pista seca.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 35,
    pergunta: "Em condições de chuva intensa ou neblina na rodovia, a distância de segurança deve ser:",
    alternativas: [
      "Mantida a mesma de pista seca",
      "Reduzida para 1 segundo",
      "Aumentada para o dobro (pelo menos 4 segundos)",
      "Zerada para seguir as lanternas do carro da frente bem de perto"
    ],
    respostaCorreta: 2,
    explicacao: "Com pista molhada, o espaço de frenagem aumenta e a visibilidade cai, recomendando-se dobrar a margem de segurança (regra dos 4 segundos).",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 36,
    pergunta: "O 'ponto cego' de um veículo refere-se a:",
    alternativas: [
      "A área do painel onde a lâmpada do farol queima",
      "As áreas ao redor do veículo que não podem ser visualizadas diretamente ou pelos retrovisores convencionais",
      "O vidro traseiro com película escura",
      "O espaço ocupado pelo estepe no porta-malas"
    ],
    respostaCorreta: 1,
    explicacao: "Pontos cegos são regiões fora do campo de visão do motorista proporcionado pelos espelhos, exigindo atenção especial nas mudanças de faixa.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 37,
    pergunta: "Para evitar o ofuscamento causado pelo farol alto de veículo vindo em sentido contrário à noite, o condutor deve:",
    alternativas: [
      "Ligar também o farol alto em represália",
      "Desviar o olhar para a linha demarcatória branca à direita da via e reduzir a velocidade",
      "Fechar os olhos até o carro passar",
      "Olhar fixamente para o centro do farol do outro veículo"
    ],
    respostaCorreta: 1,
    explicacao: "Desviar o olhar para a margem direita da pista (faixa de bordo) mantém a orientação espacial sem que a retina sofra a cegueira momentânea do ofuscamento.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "medio"
  },
  {
    id: 38,
    pergunta: "São condições adversas que interferem na condução segura:",
    alternativas: [
      "Apenas o preço dos combustíveis e pedágios",
      "Iluminação, tempo, via, trânsito, veículo, carga, passageiro e condutor",
      "Apenas a falta de ar-condicionado no automóvel",
      "A marca e o ano de fabricação do veículo"
    ],
    respostaCorreta: 1,
    explicacao: "A direção defensiva cataloga 8 condições adversas: luz, tempo, via, trânsito, veículo, carga, passageiro e condutor (cansaço, estresse, medicação, etc.).",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "medio"
  },
  {
    id: 39,
    pergunta: "O tempo de reação do condutor é o intervalo compreendido entre:",
    alternativas: [
      "O momento em que ele aciona o freio até a parada total do veículo",
      "A percepção do perigo e o instante em que o motorista aciona o pedal de freio",
      "A partida do motor e a primeira aceleração",
      "O início da chuva e o acionamento do limpador"
    ],
    respostaCorreta: 1,
    explicacao: "Tempo de reação é o intervalo entre enxergar o perigo e tomar a atitude (tirar o pé do acelerador e pisar no freio). Em média dura de 0,75 a 1 segundo.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "medio"
  },
  {
    id: 40,
    pergunta: "A força centrífuga que atua em curvas tende a:",
    alternativas: [
      "Jogar o veículo para fora da trajetória da curva",
      "Puxar o veículo para dentro da curva",
      "Travar as quatro rodas instantaneamente",
      "Desligar o sistema de injeção eletrônica"
    ],
    respostaCorreta: 0,
    explicacao: "A força centrífuga atua expulsando os corpos para o exterior da curvatura. Na direção defensiva, reduz-se a velocidade ANTES de entrar na curva para neutralizá-la.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 41,
    pergunta: "Ao conduzir uma motocicleta (categoria A), o piloto defensivo deve saber que o freio responsável pela maior força de desaceleração é o:",
    alternativas: [
      "Freio traseiro (pedal direito)",
      "Freio dianteiro (manete direito)",
      "Freio de estacionamento",
      "Ambos freiam rigorosamente 50% em qualquer circunstância"
    ],
    respostaCorreta: 1,
    explicacao: "Na frenagem de motocicletas, a transferência de peso para a frente faz com que cerca de 70% do poder de parada se concentre na roda dianteira.",
    categoria: "A",
    assunto: "direção defensiva",
    dificuldade: "medio"
  },
  {
    id: 42,
    pergunta: "O uso de celular ao volante pelo motorista (mesmo no modo viva-voz ou fone de ouvido):",
    alternativas: [
      "Não altera em nada os reflexos de quem tem mais de 5 anos de CNH",
      "Aumenta expressivamente a distração cognitiva e retarda o tempo de reação a imprevistos",
      "É permitido pelo CTB se o trânsito estiver lento",
      "Melhora a atenção do motorista em viagens noturnas"
    ],
    respostaCorreta: 1,
    explicacao: "O uso do celular causa distração visual, mecânica e principalmente cognitiva, multiplicando o risco de acidentes e configurando infração gravíssima caso manuseado.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 43,
    pergunta: "Ao ultrapassar um ciclista em via pública, o condutor de veículo motorizado deve:",
    alternativas: [
      "Buzinar bem perto para avisá-lo e passar rente ao guidão",
      "Reduzir a velocidade e guardar a distância lateral de no mínimo 1,50 metro",
      "Ultrapassar pelo acostamento sem reduzir velocidade",
      "Exigir que o ciclista pare no meio-fio para você passar"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 201 do CTB determina expressamente que o condutor deve manter distância lateral de 1,50 metro ao ultrapassar bicicleta e reduzir a marcha (art. 220).",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 44,
    pergunta: "Em cruzamentos não sinalizados, a preferência de passagem de veículos que se cruzam é do que:",
    alternativas: [
      "Vier pela sua esquerda",
      "Vier pela sua direita",
      "Estiver desenvolvendo maior velocidade",
      "Buzinar primeiro"
    ],
    respostaCorreta: 1,
    explicacao: "Pelo art. 29 do CTB, no caso de cruzamentos sem sinalização, tem preferência de passagem aquele que vier pela direita do condutor.",
    categoria: "Geral",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },
  {
    id: 45,
    pergunta: "O cinto de segurança de três pontos nos automóveis é de uso obrigatório para:",
    alternativas: [
      "Apenas o motorista",
      "Motorista e passageiro do banco dianteiro apenas",
      "Todos os ocupantes do veículo, inclusive no banco traseiro",
      "Apenas em rodovias federais"
    ],
    respostaCorreta: 2,
    explicacao: "O cinto de segurança é obrigatório para todos os ocupantes do veículo em todas as vias do território nacional (art. 65 do CTB).",
    categoria: "B",
    assunto: "direção defensiva",
    dificuldade: "facil"
  },

  // PRIMEIROS SOCORROS (46-58)
  {
    id: 46,
    pergunta: "Ao se deparar com um acidente de trânsito grave, a primeira atitude a ser tomada é:",
    alternativas: [
      "Tirar as vítimas dos veículos imediatamente",
      "Garantir a segurança no local sinalizando a via e chamar o socorro especializado (SAMU/Bombeiros)",
      "Dar água gelada com açúcar para todas as vítimas",
      "Remover os veículos da pista para não atrapalhar o fluxo"
    ],
    respostaCorreta: 1,
    explicacao: "A regra de ouro dos primeiros socorros é a segurança: proteger o local (sinalizando para evitar novos acidentes) e acionar imediatamente o socorro profissional (192 ou 193).",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 47,
    pergunta: "Qual o número telefônico para acionar o SAMU (Serviço de Atendimento Móvel de Urgência)?",
    alternativas: [
      "190",
      "192",
      "193",
      "199"
    ],
    respostaCorreta: 1,
    explicacao: "O SAMU atende pelo telefone 192. O 190 é a Polícia Militar e o 193 é o Corpo de Bombeiros.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 48,
    pergunta: "Diante de uma vítima de acidente de moto caída ao solo, o socorrista leigo NUNCA deve:",
    alternativas: [
      "Sinalizar a pista com triângulo e galhos",
      "Retirar o capacete da vítima",
      "Conversar com a vítima para checar seu estado de consciência",
      "Ligar para o resgate informando a localização exata"
    ],
    respostaCorreta: 1,
    explicacao: "Nunca se deve retirar o capacete de um motociclista acidentado, pois isso pode agravar uma lesão na coluna cervical e causar paralisia definitiva ou morte.",
    categoria: "A",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 49,
    pergunta: "A uma vítima de trânsito inconsciente ou com suspeita de hemorragia interna, NUNCA se deve oferecer:",
    alternativas: [
      "Palavras de conforto",
      "Alimentos, água ou medicamentos por via oral",
      "Proteção térmica com coberta leve",
      "Sombra se o sol estiver escaldante"
    ],
    respostaCorreta: 1,
    explicacao: "Não se deve dar nada de comer ou beber para vítimas de acidentes; elas podem broncoaspirar ou precisar de cirurgia de urgência no hospital com anestesia geral.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 50,
    pergunta: "Para conter uma hemorragia externa abundante em um membro, a conduta mais recomendada é:",
    alternativas: [
      "Fazer compressão direta sobre o ferimento com um pano limpo",
      "Aplicar pó de café ou pasta de dente no corte",
      "Lavar com álcool puro e esfregar",
      "Fazer torniquete de qualquer maneira sem treinamento"
    ],
    respostaCorreta: 0,
    explicacao: "A pressão direta contínua no ponto do sangramento com compressa ou pano limpo é a técnica primordial e mais segura de controle de hemorragias.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "medio"
  },
  {
    id: 51,
    pergunta: "Em caso de queimaduras provocadas em acidente veicular, deve-se:",
    alternativas: [
      "Passar manteiga ou óleo vegetal sobre a pele queimada",
      "Resfriar o local com água limpa em temperatura ambiente e cobrir com tecido limpo",
      "Romper as bolhas formadas para desinchar",
      "Arrancar as roupas grudadas na pele queimada"
    ],
    respostaCorreta: 1,
    explicacao: "Apenas água limpa corrente em temperatura ambiente deve ser utilizada para cessar a queimadura, nunca rompendo bolhas nem aplicando substâncias caseiras.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 52,
    pergunta: "Ao colocar o triângulo de sinalização em uma rodovia com pista seca onde a velocidade máxima é 100 km/h, a distância mínima recomendada é de:",
    alternativas: [
      "10 passos longos",
      "50 passos",
      "100 passos longos (cerca de 100 metros)",
      "20 passos"
    ],
    respostaCorreta: 2,
    explicacao: "A recomendação da Defesa Civil e Manuais do Detran para pista seca é 1 metro (1 passo longo) por quilômetro por hora da via. Em 100 km/h = 100 passos.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "medio"
  },
  {
    id: 53,
    pergunta: "Se a vítima estiver presa às ferragens do veículo, o condutor socorrista deve:",
    alternativas: [
      "Puxar a vítima pelas pernas com o auxílio de populares",
      "Aguardar a chegada do Corpo de Bombeiros, que possui ferramentas desencarceradoras adequadas",
      "Usar outro veículo para tracionar as portas amarradas com corda",
      "Virar o veículo de lado"
    ],
    respostaCorreta: 1,
    explicacao: "O desencarceramento exige equipamentos hidráulicos especiais e técnicas de estabilização da coluna executadas exclusivamente pelos Bombeiros.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 54,
    pergunta: "O que é estado de choque em primeiros socorros?",
    alternativas: [
      "Um susto psicológico temporário",
      "Uma falha circulatória grave em que os órgãos vitais não recebem oxigenação adequada",
      "Uma descarga elétrica causada pelos fios do carro",
      "O som provocado pela colisão dos para-choques"
    ],
    respostaCorreta: 1,
    explicacao: "O choque circulatório é uma emergência médica caracterizada pela perfusão inadequada de oxigênio nos tecidos, podendo ser fatal.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "dificil"
  },
  {
    id: 55,
    pergunta: "Em caso de parada cardiorrespiratória (vítima não responde e não respira), a manobra inicial recomendada é:",
    alternativas: [
      "Compressões torácicas no centro do peito (RCP)",
      "Dar tapas no rosto da vítima",
      "Colocar a vítima sentada em uma cadeira",
      "Molhar a cabeça da vítima com água fria"
    ],
    respostaCorreta: 0,
    explicacao: "As compressões torácicas de alta qualidade (100 a 120 por minuto) no centro do tórax mantêm o fluxo sanguíneo ao cérebro e coração até a chegada do desfibrilador/socorro.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "medio"
  },
  {
    id: 56,
    pergunta: "Ao encontrar uma fratura aberta (exposta) com osso visível na perna da vítima, deve-se:",
    alternativas: [
      "Tentar empurrar o osso para dentro da carne",
      "Cobrir o ferimento com gaze ou pano limpo e imobilizar o membro na posição em que se encontra",
      "Puxar a perna para alinhar o osso",
      "Amarrar com arame"
    ],
    respostaCorreta: 1,
    explicacao: "Jamais tente recolocar ossos fraturados para dentro. Apenas proteja contra infecções cobrindo com pano limpo e estabilize sem movimentar desnecessariamente.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "medio"
  },
  {
    id: 57,
    pergunta: "Qual é o principal risco ao movimentar uma vítima de acidente sem o colar cervical e prancha rígida?",
    alternativas: [
      "Ela reclamar do atraso no trabalho",
      "Lesão medular irreversível na coluna vertebral (tetraparesia ou paraplegia)",
      "Perder as chaves do automóvel",
      "Rasgar as roupas"
    ],
    respostaCorreta: 1,
    explicacao: "A movimentação inadequada da vítima pode romper ou comprimir a medula espinhal traumatizada, gerando paralisia definitiva.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },
  {
    id: 58,
    pergunta: "O telefone de emergência do Corpo de Bombeiros em todo o território nacional é:",
    alternativas: [
      "193",
      "190",
      "153",
      "199"
    ],
    respostaCorreta: 0,
    explicacao: "193 é o número universal gratuito do Corpo de Bombeiros Militar no Brasil.",
    categoria: "Geral",
    assunto: "primeiros socorros",
    dificuldade: "facil"
  },

  // MEIO AMBIENTE E CIDADANIA (59-70)
  {
    id: 59,
    pergunta: "O gás incolor, inodoro e altamente tóxico emitido pela queima incompleta de combustíveis nos motores a combustão é o:",
    alternativas: [
      "Oxigênio",
      "Monóxido de Carbono (CO)",
      "Vapor de água",
      "Gás hélio"
    ],
    respostaCorreta: 1,
    explicacao: "O Monóxido de Carbono (CO) liga-se à hemoglobina do sangue impedindo o transporte de oxigênio no corpo, sendo letal em ambientes fechados.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "facil"
  },
  {
    id: 60,
    pergunta: "O catalisador instalado no sistema de escapamento dos automóveis tem a finalidade de:",
    alternativas: [
      "Aumentar o barulho esportivo do motor",
      "Transformar gases poluentes nocivos em substâncias menos tóxicas por reação química",
      "Economizar 50% de óleo lubrificante",
      "Armazenar combustível de reserva"
    ],
    respostaCorreta: 1,
    explicacao: "O catalisador automotivo converte monóxido de carbono, óxidos de nitrogênio e hidrocarbonetos em gás carbônico, água e nitrogênio inofensivo.",
    categoria: "B",
    assunto: "meio ambiente",
    dificuldade: "facil"
  },
  {
    id: 61,
    pergunta: "O programa governamental que regulamenta os limites de emissão de poluentes por veículos automotores no Brasil chama-se:",
    alternativas: [
      "PROCON",
      "PROCONVE",
      "INMETRO",
      "SERPRO"
    ],
    respostaCorreta: 1,
    explicacao: "O PROCONVE (Programa de Controle da Poluição do Ar por Veículos Automotores) foi instituído pelo CONAMA para fixar metas rigorosas de emissão.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "medio"
  },
  {
    id: 62,
    pergunta: "A poluição sonora gerada por escapamentos adulterados e buzinas estridentes pode provocar:",
    alternativas: [
      "Apenas danos à pintura dos carros",
      "Estresse, insônia, perda auditiva gradativa e agressividade no trânsito",
      "Aumento da velocidade máxima do veículo",
      "Redução no consumo de combustível"
    ],
    respostaCorreta: 1,
    explicacao: "O excesso de ruídos no trânsito é classificado como poluição sonora, atingindo diretamente a saúde física e mental da população.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "facil"
  },
  {
    id: 63,
    pergunta: "Atirar do veículo ou abandonar na via pública objetos ou substâncias é:",
    alternativas: [
      "Permitido se for lixo orgânico",
      "Uma infração média de trânsito, passível de multa",
      "Um hábito educado de descarte",
      "Permitido somente em rodovias estaduais"
    ],
    respostaCorreta: 1,
    explicacao: "Segundo o art. 172 do CTB, atirar do veículo ou abandonar na via objetos ou substâncias constitui infração média, gerando multa e pontos na CNH.",
    categoria: "Geral",
    assunto: "cidadania",
    dificuldade: "facil"
  },
  {
    id: 64,
    pergunta: "A relação harmoniosa e cidadã no trânsito se constrói através de:",
    alternativas: [
      "Competição pela posse do espaço viário e uso frequente da buzina",
      "Respeito às diferenças, prioridade aos mais vulneráveis (pedestres e ciclistas) e empatia",
      "Fechar os cruzamentos para evitar filas",
      "Dar ré em avenidas de tráfego rápido"
    ],
    respostaCorreta: 1,
    explicacao: "O CTB determina que os veículos de maior porte são sempre responsáveis pela segurança dos menores, os motorizados pelos não motorizados e todos pela proteção do pedestre.",
    categoria: "Geral",
    assunto: "cidadania",
    dificuldade: "facil"
  },
  {
    id: 65,
    pergunta: "O descarte correto de pneus usados inservíveis deve ser feito:",
    alternativas: [
      "Queimando em terrenos baldios",
      "Jogando nas margens dos rios ou rodovias",
      "Entregando aos pontos de coleta credenciados e revendedores para reciclagem ecológica",
      "Enterrando no quintal de casa"
    ],
    respostaCorreta: 2,
    explicacao: "Pneus velhos acumulam água (foco do mosquito da dengue) e demoram séculos para se decompor; a lei exige a logística reversa por fabricantes e revendedores.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "facil"
  },
  {
    id: 66,
    pergunta: "O óleo lubrificante usado retirado do motor do veículo é classificado como:",
    alternativas: [
      "Adubo natural para plantas",
      "Resíduo perigoso com alto potencial de contaminação do solo e do lençol freático",
      "Substância biodegradável e inofensiva",
      "Solvente para limpeza de calçadas"
    ],
    respostaCorreta: 1,
    explicacao: "Um único litro de óleo lubrificante de motor pode contaminar mais de 1 milhão de litros de água, devendo ser recolhido para rerrefino por empresas autorizadas.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "medio"
  },
  {
    id: 67,
    pergunta: "No convívio social no trânsito, a gentileza e a tolerância geram:",
    alternativas: [
      "Mais acidentes e perda de tempo",
      "Redução da violência viária, menor estresse e maior fluidez com segurança coletiva",
      "Perda de autoridade do motorista experiente",
      "Aumento dos impostos"
    ],
    respostaCorreta: 1,
    explicacao: "A cidadania e a postura tolerante desarmam conflitos no trânsito, humanizando os deslocamentos urbanos.",
    categoria: "Geral",
    assunto: "cidadania",
    dificuldade: "facil"
  },
  {
    id: 68,
    pergunta: "Diante de um pedestre com deficiência visual ou mobilidade reduzida iniciando a travessia na faixa de pedestre:",
    alternativas: [
      "O motorista deve parar o veículo e conceder a preferência com total paciência",
      "Buzinar para que ele acelere o passo",
      "Ultrapassar pelo acostamento para não parar o trânsito",
      "Passar rapidamente na frente dele"
    ],
    respostaCorreta: 0,
    explicacao: "O pedestre tem preferência absoluta na faixa. Com pessoas vulneráveis e PCDs, a prudência e o respeito devem ser redobrados.",
    categoria: "Geral",
    assunto: "cidadania",
    dificuldade: "facil"
  },
  {
    id: 69,
    pergunta: "A emissão excessiva de fuligem e fumaça preta pelos veículos a diesel geralmente decorre de:",
    alternativas: [
      "Uso de ar-condicionado no máximo",
      "Mau funcionamento da bomba injetora ou filtros de combustível e de ar obstruídos",
      "Pneus com calibragem acima do limite",
      "Excesso de água no radiador"
    ],
    respostaCorreta: 1,
    explicacao: "Fumaça preta indica excesso de combustível não queimado na câmara por desregulagem de bicos/bomba injetora ou filtro de ar saturado.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "medio"
  },
  {
    id: 70,
    pergunta: "O gás que mais contribui para a intensificação do efeito estufa no planeta emitido pelos automóveis é o:",
    alternativas: [
      "Dióxido de Carbono (CO2)",
      "Nitrogênio líquido",
      "Oxigênio medicinal",
      "Gás argônio"
    ],
    respostaCorreta: 0,
    explicacao: "O dióxido de carbono (CO2) é o principal gás gerador do efeito estufa e aquecimento global decorrente da queima de combustíveis fósseis.",
    categoria: "Geral",
    assunto: "meio ambiente",
    dificuldade: "facil"
  },

  // MECÂNICA BÁSICA (71-82)
  {
    id: 71,
    pergunta: "A função principal do sistema de arrefecimento do motor é:",
    alternativas: [
      "Aquece o interior do carro nos dias frios",
      "Manter o motor funcionando na faixa de temperatura ideal de projeto, evitando o superaquecimento",
      "Refrigerar as bebidas guardadas no porta-luvas",
      "Diminuir a pressão dos pneus durante viagens"
    ],
    respostaCorreta: 1,
    explicacao: "O sistema de arrefecimento (líquido com aditivo, radiador, bomba d'água e válvula termostática) evita que o motor funda por superaquecimento.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 72,
    pergunta: "O nível do óleo do motor de um automóvel deve ser checado:",
    alternativas: [
      "Com o carro em ladeira e motor em alta rotação",
      "Em local plano, com o motor frio e desligado há alguns minutos",
      "Apenas com o veículo em movimento a mais de 80 km/h",
      "Nunca, pois o óleo não precisa de conferência"
    ],
    respostaCorreta: 1,
    explicacao: "Para medição fidedigna na vareta, o automóvel deve estar estacionado em superfície nivelada, com o motor desligado para que o óleo escorra para o cárter.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 73,
    pergunta: "O sulco mínimo de segurança na banda de rodagem dos pneus estabelecido pela legislação (indicador TWI) é de:",
    alternativas: [
      "0,5 mm",
      "1,6 mm",
      "3,0 mm",
      "5,0 mm"
    ],
    respostaCorreta: 1,
    explicacao: "A resolução do Contran determina que pneus com profundidade de sulco inferior a 1,6 mm são considerados 'carecas', gerando autuação e retenção do veículo.",
    categoria: "Geral",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 74,
    pergunta: "A bateria do veículo tem a função de:",
    alternativas: [
      "Gerar ar comprimido para os freios",
      "Armazenar e fornecer energia elétrica para dar a partida no motor e alimentar os componentes elétricos",
      "Resfriar as velas de ignição",
      "Lubrificar as engrenagens da caixa de câmbio"
    ],
    respostaCorreta: 1,
    explicacao: "A bateria armazena energia eletroquímica para alimentar o motor de arranque e equipamentos elétricos com o motor desligado.",
    categoria: "Geral",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 75,
    pergunta: "O componente responsável por recarregar a bateria e manter a rede elétrica alimentada quando o motor está ligado é o:",
    alternativas: [
      "Radiador",
      "Alternador",
      "Carburador",
      "Amortecedor"
    ],
    respostaCorreta: 1,
    explicacao: "O alternador é o gerador elétrico do veículo acionado por correia, responsável por manter a bateria carregada com o motor em funcionamento.",
    categoria: "Geral",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 76,
    pergunta: "O sistema ABS (Anti-lock Braking System) presente nos freios modernos atua:",
    alternativas: [
      "Travando as rodas de imediato ao primeiro toque",
      "Impedindo o travamento das rodas em frenagens bruscas, mantendo a capacidade de esterçamento e controle direcional",
      "Desligando o motor para poupar combustível",
      "Acionando automaticamente os airbags em qualquer frenagem"
    ],
    respostaCorreta: 1,
    explicacao: "O ABS modula a pressão hidráulica para que as rodas não travem, permitindo que o condutor desvie de obstáculos enquanto freia com força total.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "medio"
  },
  {
    id: 77,
    pergunta: "Ao calibrar os pneus, a calibragem correta deve ser feita preferencialmente:",
    alternativas: [
      "Com os pneus quentes após rodar mais de 50 km no asfalto",
      "Com os pneus frios (antes de rodar ou tendo rodado até 2 km em baixa velocidade)",
      "Com o dobro da pressão especificada no manual",
      "Apenas na época das chuvas"
    ],
    respostaCorreta: 1,
    explicacao: "Com pneus quentes o ar interno se expande falseando a medição. Por isso, a calibragem fidedigna deve ser feita com os pneus frios.",
    categoria: "Geral",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 78,
    pergunta: "A luz espia no painel de instrumentos em formato de 'almotolia de óleo' acesa na cor vermelha com o motor em funcionamento indica:",
    alternativas: [
      "Que o ar-condicionado está na temperatura mínima",
      "Baixa pressão ou falta de circulação de óleo lubrificante no motor (deve-se desligar o carro imediatamente)",
      "Que o tanque de gasolina atingiu a reserva",
      "Que as portas laterais estão abertas"
    ],
    respostaCorreta: 1,
    explicacao: "Luz vermelha de óleo indica queda de pressão do sistema de lubrificação; continuar rodando causará a fundição quase imediata dos componentes móveis do motor.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 79,
    pergunta: "Vibrações no volante em determinadas faixas de velocidade (como entre 80 km/h e 100 km/h) costumam indicar a necessidade de:",
    alternativas: [
      "Troca do filtro de óleo",
      "Balanceamento das rodas dianteiras",
      "Revisão do ar-condicionado",
      "Abastecimento com álcool"
    ],
    respostaCorreta: 1,
    explicacao: "Desbalanceamento do conjunto pneu/roda gera trepidação no volante em velocidades específicas, corrigido no serviço de balanceamento.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "medio"
  },
  {
    id: 80,
    pergunta: "Quando o veículo 'puxa' para um dos lados ao trafegar em linha reta em pista plana, o defeito geralmente é corrigido com:",
    alternativas: [
      "Troca do fluido de freio",
      "Alinhamento da geometria da direção (convergência/divergência)",
      "Troca do catalisador",
      "Regulagem das palhetas do limpador"
    ],
    respostaCorreta: 1,
    explicacao: "O desalinhamento das rodas altera os ângulos de caster e convergência, fazendo o veículo tender para um dos lados e desgastar pneus irregularmente.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "medio"
  },
  {
    id: 81,
    pergunta: "O pedal de embreagem em veículos manuais tem a função de:",
    alternativas: [
      "Frear a roda dianteira esquerda",
      "Acoplar e desacoplar a força do motor para a caixa de marchas, permitindo engates suaves",
      "Ativar o freio motor de emergência",
      "Ligar a buzina"
    ],
    respostaCorreta: 1,
    explicacao: "A embreagem liga e desliga o volante do motor do eixo primário do câmbio para troca de marchas ou parada com motor ligado.",
    categoria: "B",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },
  {
    id: 82,
    pergunta: "O fusível no sistema elétrico do automóvel tem por objetivo primordial:",
    alternativas: [
      "Aumentar a luminosidade dos faróis de xenônio",
      "Proteger o circuito elétrico rompendo-se em caso de sobrecarga ou curto-circuito",
      "Manter o limpador de para-brisa lubrificado",
      "Gerar faísca no bloco do motor"
    ],
    respostaCorreta: 1,
    explicacao: "O fusível atua como elemento de sacrifício, queimando-se ao ultrapassar a amperagem segura e evitando incêndios ou queima de módulos eletrônicos.",
    categoria: "Geral",
    assunto: "mecânica básica",
    dificuldade: "facil"
  },

  // CIRCULAÇÃO E CONDUTA (83-92)
  {
    id: 83,
    pergunta: "Nas rodovias de pista dupla, as faixas da esquerda são destinadas:",
    alternativas: [
      "Aos veículos mais lentos e de grande porte",
      "À ultrapassagem e aos veículos de maior velocidade",
      "Apenas ao estacionamento de emergência",
      "Exclusivamente a caminhões e tratores"
    ],
    respostaCorreta: 1,
    explicacao: "Pelo art. 29, IV do CTB, a faixa da esquerda é reservada para ultrapassagens e deslocamento de veículos mais velozes.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 84,
    pergunta: "Ao aproximar-se de uma rotatória não sinalizada, a preferência de passagem pertence ao veículo que:",
    alternativas: [
      "Estiver circulando pela rotatória",
      "Estiver vindo com maior velocidade",
      "Pretende sair na primeira saída à direita",
      "Buzinar com maior intensidade"
    ],
    respostaCorreta: 0,
    explicacao: "De acordo com o art. 29, III, 'b' do CTB, em rotatórias sem sinalização regulamentar específica, a preferência pertence àquele que já estiver circulando por ela.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 85,
    pergunta: "Para realizar uma conversão à esquerda em uma via de sentido duplo com acostamento e sem semáforo, o condutor deve:",
    alternativas: [
      "Parar o carro sobre a pista no centro da faixa e virar rápido",
      "Aguardar no acostamento à direita e cruzar a pista quando não houver fluxo em ambos os sentidos",
      "Avançar pela contramão para pegar o melhor ângulo",
      "Buzinar e fazer a conversão sem parar"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 37 do CTB estabelece que nas rodovias ou vias com acostamento, a conversão à esquerda deve ser aguardada no acostamento da direita para cruzar com segurança.",
    categoria: "B",
    assunto: "circulação",
    dificuldade: "medio"
  },
  {
    id: 86,
    pergunta: "O uso da buzina é permitido pelo Código de Trânsito Brasileiro:",
    alternativas: [
      "A qualquer hora do dia para apressar o pedestre lento",
      "Em toques breves apenas como advertência para evitar acidentes ou fora de áreas urbanas para indicar ultrapassagem",
      "Em toques prolongados após as 22h para saudar conhecidos",
      "Em frente a hospitais e escolas em caso de engarrafamento"
    ],
    respostaCorreta: 1,
    explicacao: "A buzina só pode ser usada em toques breves e estritamente para segurança preventiva (evitar acidente) ou fora de áreas urbanas para indicar ultrapassagem.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 87,
    pergunta: "Antes de colocar o veículo em movimento, o condutor deve obrigatoriamente:",
    alternativas: [
      "Ligar o rádio na sua estação preferida",
      "Ajustar retrovisores e banco, afivelar o cinto de segurança e certificar-se da segurança dos passageiros e ao redor",
      "Calibrar o estepe na primeira esquina",
      "Acelerar o motor até a faixa vermelha de giros"
    ],
    respostaCorreta: 1,
    explicacao: "Ajuste de assento, retrovisores, cinto de segurança e verificação de pedestres e veículos ao redor são etapas preliminares obrigatórias de direção.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 88,
    pergunta: "A ultrapassagem de outro veículo em movimento deverá ser feita pela:",
    alternativas: [
      "Pela direita em qualquer situação",
      "Esquerda, obedecida a sinalização regulamentadora e as normas de circulação",
      "Pelo acostamento sempre que houver fila",
      "Pela contramão mesmo em curvas cegas"
    ],
    respostaCorreta: 1,
    explicacao: "A regra geral é ultrapassar pela esquerda. A única exceção é quando o veículo à frente sinalizar a intenção de entrar à esquerda.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 89,
    pergunta: "Qual o procedimento do condutor ao perceber que está sendo ultrapassado por outro veículo?",
    alternativas: [
      "Acelerar para não ser ultrapassado",
      "Manter-se na sua faixa e não acelerar o veículo (ou deslocar-se para a direita se estiver na faixa da esquerda)",
      "Ligar o pisca-alerta e frear bruscamente",
      "Tocar a buzina com insistência"
    ],
    respostaCorreta: 1,
    explicacao: "Segundo o art. 30 do CTB, o condutor ultrapassado não deve acelerar a marcha e deve facilitar a manobra para preservar a segurança de todos.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },
  {
    id: 90,
    pergunta: "O tráfego de motocicletas pelos corredores entre veículos:",
    alternativas: [
      "Deve ser feito sempre acima de 100 km/h",
      "Exige atenção extrema, velocidade compatível e prudência redobrada com os pontos cegos dos automóveis",
      "É obrigatório por lei federal",
      "Dá preferência de passagem às motos em qualquer condição"
    ],
    respostaCorreta: 1,
    explicacao: "A circulação entre veículos exige prudência redobrada, velocidade reduzida e atenção aos pontos cegos dos espelhos dos carros.",
    categoria: "A",
    assunto: "circulação",
    dificuldade: "medio"
  },
  {
    id: 91,
    pergunta: "É proibido o trânsito de motocicletas e ciclomotores nas seguintes vias públicas:",
    alternativas: [
      "Em qualquer avenida urbana com mais de duas faixas",
      "Ciclomotores (cinquentinhas) são proibidos de trafegar nas vias de trânsito rápido e em rodovias que não possuam acostamento",
      "Em ruas residenciais aos domingos",
      "Em pontes e viadutos"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 57 do CTB proíbe a circulação de ciclomotores nas vias de trânsito rápido e em rodovias sem acostamento ou faixas próprias.",
    categoria: "A",
    assunto: "circulação",
    dificuldade: "medio"
  },
  {
    id: 92,
    pergunta: "O uso do pisca-alerta é regulamentado e permitido nas seguintes situações:",
    alternativas: [
      "Para estacionar em fila dupla na frente de farmácia",
      "Em imobilizações ou situações de emergência e quando a regulamentação da via expressamente determinar",
      "Sempre que estiver chovendo forte em velocidade normal de pista",
      "Para furar o sinal vermelho à noite"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 40, V do CTB restringe o pisca-alerta a situações de emergência/veículo imobilizado ou locais onde a sinalização viária determine.",
    categoria: "Geral",
    assunto: "circulação",
    dificuldade: "facil"
  },

  // INFRAÇÕES E PENALIDADES (93-100)
  {
    id: 93,
    pergunta: "Conduzir veículo sob a influência de álcool ou qualquer outra substância psicoativa que determine dependência é infração:",
    alternativas: [
      "Média, com perda de 4 pontos",
      "Grave, com apreensão das chaves",
      "Gravíssima, com multa multiplicada por 10 (fator multiplicador) e suspensão do direito de dirigir por 12 meses",
      "Leve, com advertência escrita"
    ],
    respostaCorreta: 2,
    explicacao: "O art. 165 do CTB classifica a alcoolemia ao volante como infração gravíssima com multiplicador x10, recolhimento da CNH e 12 meses de suspensão, além de crime de trânsito se atingir o limiar legal.",
    categoria: "Geral",
    assunto: "infrações",
    dificuldade: "facil"
  },
  {
    id: 94,
    pergunta: "O número de pontos computados na CNH para infrações leves, médias, graves e gravíssimas são, respectivamente:",
    alternativas: [
      "1, 2, 3 e 4 pontos",
      "3, 4, 5 e 7 pontos",
      "2, 4, 6 e 8 pontos",
      "3, 5, 7 e 10 pontos"
    ],
    respostaCorreta: 1,
    explicacao: "Conforme o art. 259 do CTB: Leve = 3 pontos; Média = 4 pontos; Grave = 5 pontos; Gravíssima = 7 pontos.",
    categoria: "Geral",
    assunto: "infrações",
    dificuldade: "facil"
  },
  {
    id: 95,
    pergunta: "A recusa em submeter-se ao teste do etilômetro (bafômetro) acarreta ao condutor:",
    alternativas: [
      "Nenhuma consequência se ele alegar sigilo médico",
      "As mesmas penalidades de multa gravíssima (x10) e suspensão do direito de dirigir por 12 meses previstas para quem é flagrado alcoolizado",
      "Apenas perda de 3 pontos na carteira",
      "Apreensão imediata do veículo sem direito a liberação por condutor habilitado"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 165-A do CTB equipara a recusa do teste às mesmas penalidades da infração por alcoolemia confirmada (multa de R$ 2.934,70 e 1 ano de suspensão).",
    categoria: "Geral",
    assunto: "infrações",
    dificuldade: "medio"
  },
  {
    id: 96,
    pergunta: "Deixar o condutor ou passageiro de usar o cinto de segurança configura infração de natureza:",
    alternativas: [
      "Leve (3 pontos)",
      "Média (4 pontos)",
      "Grave (5 pontos) com retenção do veículo até a colocação do cinto",
      "Gravíssima com perda da CNH"
    ],
    respostaCorreta: 2,
    explicacao: "O art. 167 do CTB estabelece que não usar o cinto é infração grave, com 5 pontos na CNH e medida administrativa de retenção do veículo.",
    categoria: "B",
    assunto: "infrações",
    dificuldade: "facil"
  },
  {
    id: 97,
    pergunta: "Avançar o sinal vermelho do semáforo ou o de parada obrigatória constitui infração de natureza:",
    alternativas: [
      "Média (4 pontos)",
      "Grave (5 pontos)",
      "Gravíssima (7 pontos)",
      "Leve (3 pontos)"
    ],
    respostaCorreta: 2,
    explicacao: "Conforme o art. 208 do CTB, avançar o sinal vermelho ou a placa de parada obrigatória é infração gravíssima (7 pontos).",
    categoria: "Geral",
    assunto: "infrações",
    dificuldade: "facil"
  },
  {
    id: 98,
    pergunta: "Transitar em velocidade superior à máxima permitida em mais de 50% é infração:",
    alternativas: [
      "Grave apenas",
      "Gravíssima com penalidade de suspensão imediata do direito de dirigir",
      "Média com apreensão temporária",
      "Leve em fins de semana"
    ],
    respostaCorreta: 1,
    explicacao: "O art. 218, III do CTB classifica o excesso de velocidade acima de 50% como gravíssima (3x o valor da multa) e suspensão direta do direito de dirigir.",
    categoria: "Geral",
    assunto: "infrações",
    dificuldade: "medio"
  },
  {
    id: 99,
    pergunta: "Transportar criança menor de 10 anos de idade que não tenha atingido 1,45m sem o dispositivo de retenção adequado (bebê-conforto, cadeirinha ou assento de elevação) é infração:",
    alternativas: [
      "Média",
      "Grave",
      "Gravíssima, com retenção do veículo até que a irregularidade seja sanada",
      "Leve"
    ],
    respostaCorreta: 2,
    explicacao: "O art. 168 do CTB estipula que o transporte irregular de crianças é infração gravíssima (7 pontos) com medida administrativa de retenção do veículo.",
    categoria: "B",
    assunto: "infrações",
    dificuldade: "facil"
  },
  {
    id: 100,
    pergunta: "Pilotar motocicleta sem utilizar capacete de segurança com viseira ou óculos de proteção é infração:",
    alternativas: [
      "Gravíssima, sujeita à penalidade de suspensão do direito de dirigir e recolhimento do documento de habilitação",
      "Grave sem suspensão",
      "Média com advertência oral",
      "Leve se for no mesmo bairro"
    ],
    respostaCorreta: 0,
    explicacao: "O art. 244, I do CTB tipifica a condução de moto sem capacete como infração gravíssima, com suspensão do direito de dirigir e recolhimento da CNH.",
    categoria: "A",
    assunto: "infrações",
    dificuldade: "facil"
  }
];
