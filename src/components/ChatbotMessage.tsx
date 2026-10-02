import React from "react";
import { ChatbotMessageItem } from "../types/types";
import { Bot, User, ExternalLink, MessageCircle } from "lucide-react";

interface ChatbotMessageProps {
  message: ChatbotMessageItem;
  onSelectOption?: (option: string) => void;
}

export const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ message, onSelectOption }) => {
  const isBot = message.sender === "bot";

  return (
    <div className={`flex gap-3 ${isBot ? "items-start" : "items-end justify-end"}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-[#FFD400] text-black flex items-center justify-center flex-shrink-0 shadow-md shadow-[#FFD400]/20 mt-0.5">
          <Bot className="w-4 h-4 text-black" />
        </div>
      )}

      <div className={`space-y-2 max-w-[85%] ${isBot ? "text-left" : "text-right"}`}>
        <div
          className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
            isBot
              ? "bg-[#1f1f1f] text-neutral-100 border border-[#2e2e2e] rounded-tl-none shadow-sm"
              : "bg-[#FFD400] text-black font-semibold rounded-tr-none shadow-md shadow-[#FFD400]/10"
          }`}
        >
          {message.text}
        </div>

        {/* Action Button if provided (e.g. WhatsApp Atendente or link) */}
        {message.actionBtn && (
          <div className="pt-1">
            <a
              href={message.actionBtn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFD400] hover:bg-[#FFC400] text-black font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>{message.actionBtn.label}</span>
              <ExternalLink className="w-3 h-3 text-black" />
            </a>
          </div>
        )}

        {/* Dynamic options if provided */}
        {message.options && message.options.length > 0 && onSelectOption && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {message.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onSelectOption(opt)}
                className="text-left px-3 py-1.5 rounded-lg bg-[#0A0A0A] hover:bg-[#262626] text-neutral-200 hover:text-[#FFD400] border border-[#333] text-[11px] font-bold transition-colors active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-[#333] text-white flex items-center justify-center flex-shrink-0 mb-0.5">
          <User className="w-3.5 h-3.5 text-neutral-300" />
        </div>
      )}
    </div>
  );
};
