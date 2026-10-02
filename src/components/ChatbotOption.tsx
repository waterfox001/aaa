import React from "react";

interface ChatbotOptionProps {
  label: string;
  onClick: (label: string) => void;
  disabled?: boolean;
}

export const ChatbotOption: React.FC<ChatbotOptionProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick(label)}
      className="text-left px-3 py-2 rounded-xl bg-[#1a1a1a] hover:bg-[#262626] text-neutral-200 hover:text-[#FFD400] border border-[#333] hover:border-[#FFD400]/40 text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
    >
      {label}
    </button>
  );
};
