import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  UserCheck
} from "lucide-react";
import { ChatbotMessageItem } from "../types/types";
import { chatbotService } from "../services/chatbotService";
import {
  conversationalFlow,
  generateLeadWhatsAppUrl,
  UserLeadProfile,
  FlowStepOption
} from "../services/chatbotFlowService";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<ChatbotMessageItem[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStepId, setCurrentStepId] = useState<string>("inicio");
  const [userProfile, setUserProfile] = useState<UserLeadProfile>({});
  const [currentOptions, setCurrentOptions] = useState<FlowStepOption[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize the guided conversational flow with Sofia
  const startFlow = () => {
    const stepInicio = conversationalFlow["inicio"];
    setUserProfile({});
    setCurrentStepId("inicio");
    setCurrentOptions(stepInicio.opcoes);
    setIsTyping(false);

    const initialMsg: ChatbotMessageItem = {
      id: "msg-welcome",
      sender: "bot",
      text: typeof stepInicio.mensagem === "function" ? stepInicio.mensagem({}) : stepInicio.mensagem,
      timestamp: new Date()
    };

    setMessages([initialMsg]);
  };

  useEffect(() => {
    startFlow();
  }, []);

  // Scroll to bottom when messages update or typing state changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isOpen, messages, isTyping]);

  // Handle clicking one of the predefined questions/options
  const handleSelectOption = (option: FlowStepOption) => {
    setHasInteracted(true);

    // If user clicked to open WhatsApp directly
    if (option.nextStepId === "fim") {
      const waUrl = generateLeadWhatsAppUrl(userProfile);
      window.open(waUrl, "_blank");
      return;
    }

    // If user chose to restart
    if (option.nextStepId === "inicio" || option.value === "Reiniciar") {
      startFlow();
      return;
    }

    // Save lead profile data based on current step
    const updatedProfile = { ...userProfile };
    if (currentStepId === "inicio") {
      updatedProfile.objetivo = option.value;
    } else if (currentStepId === "categoria") {
      updatedProfile.categoria = option.value;
    } else if (currentStepId === "categoria_d") {
      updatedProfile.categoria = "Categoria D (Ônibus e Vans)";
    } else if (currentStepId === "adicao") {
      updatedProfile.categoria = option.value;
    } else if (currentStepId === "renovacao" || currentStepId === "perder_medo") {
      updatedProfile.objetivo = option.value;
    } else if (currentStepId === "idade") {
      updatedProfile.idadeOuRequisito = option.value;
    } else if (currentStepId === "turno") {
      updatedProfile.turno = option.value;
    } else if (currentStepId === "pagamento") {
      updatedProfile.pagamento = option.value;
    }
    setUserProfile(updatedProfile);

    // 1. Append user answer
    const userMsg: ChatbotMessageItem = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: option.label,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setCurrentOptions([]); // Hide old buttons during reply

    // 2. Advance to the next step
    const nextStepKey = option.nextStepId || "resumo";
    const nextStep = conversationalFlow[nextStepKey];
    setTimeout(() => {
      setIsTyping(false);

      if (nextStep) {
        setCurrentStepId(nextStep.id);
        setCurrentOptions(nextStep.opcoes);

        const botReplyText =
          typeof nextStep.mensagem === "function"
            ? nextStep.mensagem(updatedProfile)
            : nextStep.mensagem;

        const botMsg: ChatbotMessageItem = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: botReplyText,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMsg]);
      } else {
        // Fallback: direct to WhatsApp
        const waMsg: ChatbotMessageItem = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Vou transferir você para nossa equipe no WhatsApp agora mesmo para concluir seu atendimento!",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, waMsg]);
        setTimeout(() => {
          window.open(generateLeadWhatsAppUrl(updatedProfile), "_blank");
        }, 1200);
      }
    }, 600);
  };

  // Handle free-text question typing (using the local NLP keyword database)
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    setHasInteracted(true);

    const userMsg: ChatbotMessageItem = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const matchResult = chatbotService.processUserInput(query);
      setIsTyping(false);

      const botMsg: ChatbotMessageItem = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: matchResult.resposta,
        timestamp: new Date(),
        actionBtn: matchResult.acaoBtn
      };

      setMessages(prev => [...prev, botMsg]);

      // Provide standard options if available
      if (matchResult.item?.categoria) {
        setCurrentOptions([
          { label: "Quero saber valores e turmas", value: "Valores", nextStepId: "categoria" },
          { label: "Falar no WhatsApp", value: "WhatsApp", nextStepId: "fim" }
        ]);
      }
    }, 550);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Prompt Notification Chip (Desktop only) */}
      {!isOpen && !hasInteracted && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 sm:right-6 z-40 hidden sm:flex items-center gap-2.5 bg-[#111827] border border-amber-400/50 text-white px-4 py-2.5 rounded-full shadow-2xl cursor-pointer hover:border-amber-400 transition-all animate-bounce"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold text-slate-200">
            Dúvidas sobre a CNH? <strong className="text-amber-400">Fale com a Sofia</strong>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="btn-chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir assistente virtual Sofia da Autoescola Ximenes"
        className="fixed bottom-6 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-slate-900 focus:outline-none"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6 stroke-[2.5]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
        )}
      </button>

      {/* Chat Window Container */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-24 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[420px] h-[580px] max-h-[82vh] bg-[#0A0E17] border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header with Sofia Persona & Autoescola Ximenes Details */}
          <div className="bg-[#111827] p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                  <span className="text-sm font-black">SX</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#111827]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-heading text-sm font-black text-white tracking-tight">Sofia</h4>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] font-black text-amber-400 uppercase tracking-wider border border-slate-700">
                    Autoescola Ximenes
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Atendimento Online
                  </span>
                  <span>•</span>
                  <span className="text-slate-300 font-mono text-[10px]">{siteConfig.whatsappFormatado}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={startFlow}
                title="Reiniciar atendimento"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Reiniciar atendimento"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Fechar chat"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Action Navigation Bar */}
          <div className="bg-[#0F172A] px-3 py-2 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none whitespace-nowrap">
            <button
              onClick={() => {
                const opt = conversationalFlow["inicio"].opcoes[0];
                handleSelectOption(opt);
              }}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 border border-slate-700 transition-colors"
            >
              🚗 1ª Habilitação
            </button>
            <button
              onClick={() => handleSendMessage("Qual o valor da CNH?")}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 border border-slate-700 transition-colors"
            >
              💰 Valores
            </button>
            <button
              onClick={() => handleSendMessage("Como funciona a categoria D?")}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 hover:bg-amber-400 text-slate-200 hover:text-slate-950 border border-slate-700 transition-colors"
            >
              🚌 Cat. D
            </button>
            <button
              onClick={() => {
                const waUrl = getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Autoescola Ximenes.");
                window.open(waUrl, "_blank");
              }}
              className="text-[11px] font-black px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 transition-colors"
            >
              📲 WhatsApp
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0A0E17]">
            {messages.map(msg => {
              const isBot = msg.sender === "bot";
              return (
                <div key={msg.id} className={`flex gap-2.5 ${isBot ? "items-start" : "items-end justify-end"}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      SX
                    </div>
                  )}

                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isBot
                          ? "bg-[#111827] text-slate-200 border border-slate-700/80 rounded-tl-none shadow-sm"
                          : "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium rounded-tr-none shadow-md"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {/* Action button if provided */}
                    {msg.actionBtn && (
                      <a
                        href={msg.actionBtn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{msg.actionBtn.label}</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 text-xs font-black">
                  SX
                </div>
                <div className="bg-[#111827] border border-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* Quick response buttons below the current step */}
            {!isTyping && currentOptions.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block">
                  Selecione uma resposta:
                </span>
                <div className="flex flex-col gap-1.5">
                  {currentOptions.map((opt, i) => (
                    <button
                      key={`${opt.value}-${i}`}
                      onClick={() => handleSelectOption(opt)}
                      className={`text-left text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between border ${
                        opt.nextStepId === "fim"
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-md font-black"
                          : "bg-slate-900/90 hover:bg-amber-400 text-slate-200 hover:text-slate-950 border-slate-700/80 hover:border-amber-400"
                      }`}
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Direct WhatsApp Callout Bottom Banner */}
          <div className="bg-[#0F172A] px-3.5 py-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Autoescola Ximenes:</span>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Autoescola Ximenes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 text-[11px]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chamar no (85) 9988-0848</span>
            </a>
          </div>

          {/* User Text Input Form */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-[#111827] border-t border-slate-800 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              id="chatbot-input-field"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Digite sua dúvida ou responda aqui..."
              className="flex-1 bg-slate-900 border border-slate-700 focus:border-amber-400 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-xl focus:outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              id="btn-chatbot-submit"
              disabled={!inputText.trim()}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 flex items-center justify-center transition-all flex-shrink-0 font-bold"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4 fill-slate-950/20" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
