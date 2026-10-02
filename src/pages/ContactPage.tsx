import React, { useState } from "react";
import { SEOHead } from "../components/SEOHead";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";
import { MapPin, Phone, MessageCircle, Clock, Send, ShieldCheck, Navigation, ExternalLink } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [categoria, setCategoria] = useState("Categoria B (Carro)");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá Auto Escola Ximenes! Meu nome é ${nome || "um visitante do site"}.\nTelefone: ${telefone || "Não informado"}\nInteresse: ${categoria}\n${mensagem ? `Mensagem: ${mensagem}` : ""}`;
    const url = getWhatsAppUrl(texto);
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-12">
      <SEOHead
        title={`Contato & Localização | ${siteConfig.nome} em Fortaleza - CE`}
        description={`Fale com a ${siteConfig.nome} pelo WhatsApp ${siteConfig.whatsappFormatado} ou visite nossa unidade na Rua Amazonas, 220, Pan-Americano em Fortaleza. Atendimento de segunda a sábado.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Canais de Atendimento
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Fale com a Auto Escola Ximenes
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Estamos prontos para atender você com atenção e esclarecer todas as dúvidas sobre sua habilitação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
              <h3 className="font-heading text-lg font-bold text-slate-950">
                Informações de Contato
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/80 text-slate-800 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">WhatsApp</span>
                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de informações sobre matrícula na Auto Escola Ximenes.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 text-base hover:text-slate-700 block"
                    >
                      {siteConfig.whatsappFormatado}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Atendimento rápido em horário comercial</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/80 text-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Endereço</span>
                    <span className="font-medium text-slate-900 block">{siteConfig.endereco}</span>
                    <span className="text-xs text-slate-500 block">{siteConfig.bairroPadrao}, {siteConfig.cidade} - {siteConfig.estado}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/80 text-slate-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Telefone</span>
                    <span className="font-medium text-slate-900 block">{siteConfig.telefone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/80 text-slate-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Horário de Funcionamento</span>
                    <span className="font-medium text-slate-900 block">{siteConfig.horarioAtendimento}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 text-xs text-slate-600 shadow-xs">
              <span className="font-heading font-bold text-slate-950 block text-sm">Visita Presencial</span>
              <p className="leading-relaxed">
                Nossa sede no bairro Pan-Americano conta com estacionamento fácil e atendimento receptivo para efetivação de matrícula.
              </p>
              <div className="pt-1">
                <a
                  href="https://maps.app.goo.gl/WjqdJ3WnktRSh6J97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 text-white font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Ver Rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="space-y-1">
                <h2 className="font-heading text-xl font-bold text-slate-950">
                  Envie uma mensagem
                </h2>
                <p className="text-xs text-slate-600">
                  Preencha os campos e converse diretamente com um atendente no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="input-lead-nome" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="input-lead-nome"
                    type="text"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Ex: Maria Clara Santos"
                    className="w-full bg-white border border-slate-200 focus:border-slate-950 text-slate-900 px-3.5 py-3 rounded-xl text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-lead-tel" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      id="input-lead-tel"
                      type="tel"
                      required
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                      placeholder="(85) 9988-0848"
                      className="w-full bg-white border border-slate-200 focus:border-slate-950 text-slate-900 px-3.5 py-3 rounded-xl text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="select-lead-cat" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Interesse Principal
                    </label>
                    <select
                      id="select-lead-cat"
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-slate-950 text-slate-900 px-3.5 py-3 rounded-xl text-xs sm:text-sm focus:outline-none transition-colors"
                    >
                      <option value="Categoria B (Carro)">Categoria B (Carro)</option>
                      <option value="Categoria A (Moto)">Categoria A (Moto)</option>
                      <option value="Categoria AB (Carro e Moto)">Categoria AB (Carro e Moto)</option>
                      <option value="Categoria D (Ônibus e Vans)">Categoria D (Ônibus e Vans)</option>
                      <option value="Adição de Categoria">Adição de Categoria</option>
                      <option value="Renovação de CNH">Renovação de CNH</option>
                      <option value="Aulas para Habilitados">Aulas para Habilitados</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="input-lead-msg" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mensagem ou Dúvida (Opcional)
                  </label>
                  <textarea
                    id="input-lead-msg"
                    rows={4}
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                    placeholder="Ex: Gostaria de orientações sobre horários de aulas práticas..."
                    className="w-full bg-white border border-slate-200 focus:border-slate-950 text-slate-900 px-3.5 py-3 rounded-xl text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="btn-enviar-lead"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFC905] hover:bg-[#ffcf1f] text-slate-950 font-semibold uppercase text-xs tracking-wider transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem no WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 justify-center pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Seus dados são protegidos e usados estritamente para o atendimento.</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
