import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";

interface WhatsAppButtonProps {
  mensagem?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "outline" | "floating" | "secondary";
  id?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  mensagem = "Olá! Vim pelo site da Autoescola Ximenes e gostaria de saber mais sobre a CNH.",
  label = "FALAR NO WHATSAPP",
  size = "md",
  className = "",
  variant = "primary",
  id
}) => {
  const url = getWhatsAppUrl(mensagem);

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs font-bold gap-1.5 rounded-lg",
    md: "px-5 py-2.5 text-xs sm:text-sm font-black tracking-wide gap-2 rounded-xl",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black tracking-wide gap-2.5 rounded-xl"
  };

  if (variant === "floating") {
    return (
      <a
        id={id || "btn-floating-whatsapp"}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp da Autoescola Ximenes"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp
        </span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center border-2 border-[#FFC905] text-slate-900 bg-white hover:bg-[#FFC905] hover:text-slate-950 transition-all duration-200 uppercase font-black tracking-wider shadow-sm ${sizeClasses[size]} ${className}`}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-emerald-600" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-bold uppercase tracking-wider transition-all duration-200 shadow-sm active:scale-[0.98] ${sizeClasses[size]} ${className}`}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-emerald-600" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-yellow inline-flex items-center justify-center text-slate-950 font-black uppercase tracking-wider group ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 fill-slate-950/20 text-slate-950 transition-transform duration-200 group-hover:scale-110" />
      <span>{label}</span>
    </a>
  );
};
