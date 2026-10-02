import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCw, Sparkles, ArrowRight } from "lucide-react";

interface PricingPlansProps {
  onNavigate?: (path: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // Função que executa a contagem animada de 0 até 34
  const runCounter = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsRunning(true);
    setCompleted(false);
    setCount(0);

    const startTime = performance.now();
    const duration = 1800; // 1.8 segundos de animação
    const target = 34;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing suave (começa rápido e desacelera com precisão no final)
      const ease = 1 - Math.pow(1 - progress, 4);
      const val = Math.floor(ease * target);

      setCount(val);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
        setIsRunning(false);
        setCompleted(true);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  }, []);

  // Monitora o scroll usando IntersectionObserver nativo
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let hasTriggered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter();
            hasTriggered = true;
          } else {
            if (hasTriggered) {
              setCount(0);
              setCompleted(false);
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px"
      }
    );

    observer.observe(el);

    // Fallback: se já estiver na visualização no carregamento inicial
    const rect = el.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      runCounter();
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [runCounter]);

  // Separa em dígitos de dezena e unidade
  const tensDigit = Math.floor(count / 10);
  const unitsDigit = count % 10;

  return (
    <section id="planos-desconto" className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            TABELA INTELIGENTE
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Planos que se adaptam pro seu caso.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Nossa tabela oferece desconto progressivo, quanto mais aulas, mais desconto por aula.
          </p>
        </div>

        {/* Quadro Central de Destaque com Design Amarelo Claro */}
        <div ref={containerRef} className="max-w-xl mx-auto">
          <div
            className={`relative bg-[#FEF9E7] border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-500 ${
              completed
                ? "border-[#FCD34D] shadow-[0_8px_30px_rgba(245,158,11,0.18)]"
                : "border-[#FDE68A] shadow-[0_6px_25px_rgba(245,158,11,0.1)]"
            }`}
          >
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
              
              {/* Texto "ATÉ" em Grafite */}
              <span className="font-heading font-black text-2xl sm:text-4xl text-[#374151] tracking-tight select-none">
                ATÉ
              </span>

              {/* Moldura Interna com Bordas Amarelas Suaves */}
              <div className="border border-[#FDE68A] rounded-2xl p-1 sm:p-1.5 flex items-center gap-1.5 sm:gap-2 bg-transparent">
                
                {/* Dígito da Dezena (Cartão Branco) */}
                <div className="relative w-11 sm:w-14 h-14 sm:h-18 bg-white border border-amber-200/70 rounded-xl overflow-hidden shadow-xs flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`tens-${tensDigit}`}
                      initial={{ y: -16, opacity: 0.2 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0.2 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      className="font-heading font-black text-3xl sm:text-4xl text-[#F59E0B] drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)] select-none tracking-tight"
                    >
                      {tensDigit}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Dígito da Unidade (Cartão Branco) */}
                <div className="relative w-11 sm:w-14 h-14 sm:h-18 bg-white border border-amber-200/70 rounded-xl overflow-hidden shadow-xs flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`units-${unitsDigit}`}
                      initial={{ y: -16, opacity: 0.2 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0.2 }}
                      transition={{ duration: 0.08, ease: "easeOut" }}
                      className="font-heading font-black text-3xl sm:text-4xl text-[#F59E0B] drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)] select-none tracking-tight"
                    >
                      {unitsDigit}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Símbolo % em Âmbar */}
                <motion.span
                  animate={completed ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B] drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)] select-none px-1"
                >
                  %
                </motion.span>

              </div>

              {/* Texto "de desconto" em Grafite */}
              <span className="font-heading font-bold text-xl sm:text-3xl text-[#374151] tracking-tight select-none">
                de desconto
              </span>

              {/* Botão Sutil de Repetir a Contagem */}
              <button
                type="button"
                onClick={runCounter}
                title="Repetir a contagem"
                aria-label="Repetir a contagem"
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-black/5 active:scale-90 cursor-pointer ml-0.5"
              >
                <RotateCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRunning ? "animate-spin" : ""}`} />
              </button>

            </div>
          </div>

          {/* CTA Principal que encaminha para o Quiz do Plano Ideal */}
          <div className="mt-8 flex justify-center">
            <a
              id="btn-planos-to-quiz"
              href="#quiz-plano-ideal"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("quiz-plano-ideal");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFC905] hover:bg-[#ffcf1f] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Descobrir o Plano Ideal pra mim</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
