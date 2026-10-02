import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.min(100, Math.max(0, Math.round((current / total) * 100)));

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
        <span className="text-white">
          {label || `Questão ${current} de ${total}`}
        </span>
        <span className="text-[#FFD400] font-mono">{percentage}%</span>
      </div>

      <div className="w-full h-3 bg-[#151515] border border-[#262626] rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-[#FFD400] rounded-full transition-all duration-300 shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
