export interface SiteConfig {
  nome: string;
  cidade: string;
  estado: string;
  whatsapp: string; // formato internacional para wa.me, ex: '558599880848'
  whatsappFormatado: string; // ex: '(85) 9988-0848'
  telefone: string;
  endereco: string;
  bairroPadrao: string;
  cep: string;
  slogan: string;
  instagram: string;
  email: string;
  horarioAtendimento: string;
  horarioSemana: string;
  horarioSabado: string;
  mapsUrl: string;
  dataAbertura: string;
  novaGestaoAno: string;
  taxaAprovacao: string;
  aprovacaoPrimeira: string;
  avaliacoesGoogle: string;
  parcelamento: string;
  descontoAVista?: string;
  categorias: ("A" | "B" | "AB" | "D" | "E")[];
  idiomasAtendimento: string[];
  regiaoPrincipal: string;
}

export const siteConfig: SiteConfig = {
  nome: "Auto Escola Ximenes",
  cidade: "Fortaleza",
  estado: "CE",
  whatsapp: "558599880848",
  whatsappFormatado: "(85) 9988-0848",
  telefone: "(85) 9988-0848",
  endereco: "R. Amazonas, 220 - Pan-Americano, Fortaleza - CE, 60441-685",
  bairroPadrao: "Pan-Americano",
  cep: "60441-685",
  slogan: "Atendimento próximo, orientação clara e uma experiência mais leve para sua CNH",
  instagram: "@cfcximenes",
  email: "ximenescfc@gmail.com",
  horarioAtendimento: "Segunda a Sexta: 08:00 às 12:00 e 14:00 às 18:00 | Sábado: 08:00 às 12:00",
  horarioSemana: "08:00 às 12:00 e 14:00 às 18:00",
  horarioSabado: "08:00 às 12:00",
  mapsUrl: "https://maps.app.goo.gl/WjqdJ3WnktRSh6J97",
  dataAbertura: "18/06/2012",
  novaGestaoAno: "2022",
  taxaAprovacao: "",
  aprovacaoPrimeira: "",
  avaliacoesGoogle: "+ de 200 avaliações no Google",
  parcelamento: "Cartão de crédito ou Pix",
  descontoAVista: "",
  categorias: ["A", "B", "AB", "D"],
  idiomasAtendimento: ["Português", "Inglês", "Espanhol", "Italiano", "Alemão", "Francês"],
  regiaoPrincipal: "Pan-Americano e bairros vizinhos (Pici, Bela Vista, Demócrito Rocha, Damas, Couto Fernandes)"
};

export function getWhatsAppUrl(mensagemPreenchida: string): string {
  const numero = siteConfig.whatsapp.replace(/\D/g, "");
  const textoCodificado = encodeURIComponent(mensagemPreenchida);
  return `https://wa.me/${numero}?text=${textoCodificado}`;
}
