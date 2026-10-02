import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqList } from "../data/faqData";
import { ChevronDown, HelpCircle, Search, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface FAQProps {
  initialLimit?: number;
  limit?: number;
  showSearch?: boolean;
  onNavigate?: (path: string) => void;
  allowExpand?: boolean;
  showBottomCta?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  initialLimit,
  limit,
  showSearch = false,
  onNavigate,
  allowExpand = false,
  showBottomCta = true
}) => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ["Todas", "Primeira Habilitação", "Aulas e Provas", "Pagamento e Documentos", "Geral"];

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const allFilteredFaqs = faqList.filter(item => {
    const matchCat = selectedCategory === "Todas" || item.categoria === selectedCategory;
    const matchSearch =
      searchTerm === "" ||
      item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.resposta.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const displayedFaqs =
    allowExpand && initialLimit && !isExpanded
      ? allFilteredFaqs.slice(0, initialLimit)
      : limit
      ? allFilteredFaqs.slice(0, limit)
      : allFilteredFaqs;

  const hasMore = allowExpand && Boolean(initialLimit && allFilteredFaqs.length > initialLimit);

  return (
    <div className="py-2">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Search and Category Filters if enabled */}
        {showSearch && (
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Pesquisar por dúvidas (ex: valor, documentos, prova teórica, aprovação, prazos)..."
                className="w-full bg-white border border-slate-300 focus:border-[#FFC905] text-slate-900 pl-12 pr-4 py-3.5 rounded-xl text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 shadow-sm transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "btn-yellow-fluid shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Accordion List */}
        <div className="space-y-3">
          {displayedFaqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.25) }}
                className={`topic-reveal-card bg-white border rounded-2xl overflow-hidden transition-all shadow-sm ${
                  isOpen ? "border-[#FFC905] ring-1 ring-[#FFC905]/40" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen ? "bg-amber-100 text-[#D9AC0B]" : "bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-[#D9AC0B]"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug block">
                        {item.pergunta}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider block mt-0.5">
                        {item.categoria}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-slate-700 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#D9AC0B]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/70">
                        <div className="sm:pl-11">
                          <p>{item.resposta}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {displayedFaqs.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4">
              <p className="text-slate-600 text-sm">
                Não encontramos nenhuma dúvida cadastrada com o termo "{searchTerm}".
              </p>
              <WhatsAppButton
                label="PERGUNTAR DIRETAMENTE NO WHATSAPP"
                size="sm"
                className="btn-yellow-fluid"
                mensagem={`Olá! Estava no FAQ do site da Auto Escola Ximenes e gostaria de tirar uma dúvida sobre: ${searchTerm}`}
              />
            </div>
          )}
        </div>

        {/* Botão de Expandir / Ver Mais e Link para Aba Completa */}
        {hasMore && (
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>
                {isExpanded
                  ? "Ver menos perguntas"
                  : `Ver mais perguntas (+${allFilteredFaqs.length - (initialLimit || 2)})`}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate("/perguntas-frequentes")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer border border-slate-200"
              >
                <span>Ver na aba de dúvidas</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              </button>
            )}
          </div>
        )}

        {/* FAQ Sector Contextual CTA */}
        {showBottomCta && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 topic-reveal-card text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="font-heading text-lg sm:text-xl font-black text-slate-900 uppercase">
                Ainda ficou com alguma dúvida sobre a sua CNH?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Nossa equipe no Pan-Americano responde você em poucos minutos com orientação clara e sem burocracia.
              </p>
            </div>

            <WhatsAppButton
              id="faq-sector-whatsapp-cta"
              label="TIRAR DÚVIDA COM UM ESPECIALISTA"
              size="md"
              className="btn-yellow-fluid flex-shrink-0 shadow-md"
              mensagem="Olá! Estava conferindo as dúvidas frequentes no site da Auto Escola Ximenes e gostaria de tirar uma dúvida sobre o processo de CNH."
            />
          </div>
        )}

      </div>
    </div>
  );
};
