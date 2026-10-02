import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // "dark" for light backgrounds (default original logo), "light" for dark backgrounds
  showSlogan?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-10 w-auto",
  variant = "dark",
  showSlogan = true,
}) => {
  const isLight = variant === "light";
  const mainTextColor = isLight ? "#FFFFFF" : "#111827";
  const roadBaseColor = isLight ? "#FFFFFF" : "#111827";
  const sloganColor = isLight ? "#E2E8F0" : "#374151";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 720 220"
        className="w-full h-full"
        style={{ overflow: "visible" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Auto Escola Ximenes - Educando para o trânsito do futuro"
      >
        {/* "Auto Escola" Text sitting above the top road */}
        <text
          x="65"
          y="46"
          fontFamily="'Montserrat', 'Arial Rounded MT Bold', -apple-system, sans-serif"
          fontWeight="900"
          fontSize="34"
          fill={mainTextColor}
          letterSpacing="-0.5"
        >
          Auto Escola
        </text>

        {/* Road Stroke 1: Left Top to Bottom-Left Leg of X */}
        <path
          d="M 65 68 L 140 68 C 168 68 178 88 170 112 L 126 198"
          fill="none"
          stroke={roadBaseColor}
          strokeWidth="26"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        {/* Yellow Dashed Road Marking */}
        <path
          d="M 68 68 L 140 68 C 168 68 178 88 170 112 L 126 198"
          fill="none"
          stroke="#FFC905"
          strokeWidth="3.5"
          strokeDasharray="10 8"
          strokeLinecap="butt"
        />

        {/* Road Stroke 2: Top-Right of X curving to Bottom Road Under IMENES */}
        <path
          d="M 216 90 L 180 166 C 173 183 182 195 204 195 L 685 195"
          fill="none"
          stroke={roadBaseColor}
          strokeWidth="26"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        {/* Yellow Dashed Road Marking */}
        <path
          d="M 214 94 L 180 166 C 173 183 182 195 204 195 L 685 195"
          fill="none"
          stroke="#FFC905"
          strokeWidth="3.5"
          strokeDasharray="10 8"
          strokeLinecap="butt"
        />

        {/* Letter I */}
        <path d="M 230 118 L 254 118 L 254 182 L 230 182 Z" fill={mainTextColor} />

        {/* Letter M */}
        <path
          d="M 268 182 L 268 118 L 294 118 L 309 155 L 324 118 L 350 118 L 350 182 L 328 182 L 328 144 L 317 172 L 301 172 L 290 144 L 290 182 Z"
          fill={mainTextColor}
        />

        {/* Traffic Sign (E) */}
        <g transform="translate(398, 150)">
          {/* White disc background with bold red circular border */}
          <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#DE2121" strokeWidth="7.5" />
          {/* Letter E inside Traffic Sign */}
          <text
            x="0"
            y="12"
            fontFamily="'Montserrat', 'Arial Black', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="36"
            fill="#111827"
            textAnchor="middle"
          >
            E
          </text>
        </g>

        {/* Letter N */}
        <path
          d="M 445 182 L 445 118 L 471 118 L 500 159 L 500 118 L 522 118 L 522 182 L 496 182 L 467 141 L 467 182 Z"
          fill={mainTextColor}
        />

        {/* Letter E */}
        <path
          d="M 536 182 L 536 118 L 588 118 L 588 135 L 560 135 L 560 142 L 585 142 L 585 158 L 560 158 L 560 165 L 588 165 L 588 182 Z"
          fill={mainTextColor}
        />

        {/* Letter S */}
        <path
          d="M 601 170 C 604 177 612 183 623 183 C 635 183 642 177 642 169 C 642 159 634 155 617 150 C 600 145 590 139 590 127 C 590 115 603 107 620 107 C 637 107 649 116 652 128 L 632 132 C 630 126 626 122 620 122 C 613 122 609 125 609 130 C 609 135 614 138 626 142 C 646 148 662 154 662 170 C 662 185 646 195 623 195 C 604 195 591 184 585 169 Z"
          fill={mainTextColor}
        />

        {/* Slogan Under Road */}
        {showSlogan && (
          <text
            x="445"
            y="218"
            fontFamily="'Montserrat', -apple-system, sans-serif"
            fontWeight="500"
            fontSize="16.5"
            fill={sloganColor}
            textAnchor="middle"
            letterSpacing="0.3"
          >
            Educando para o trânsito do futuro
          </text>
        )}
      </svg>
    </div>
  );
};
