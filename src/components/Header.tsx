import React, { useState, useEffect } from "react";
import {
  Shield,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Bike,
  Car,
  Layers,
  Bus,
  ExternalLink
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppButton } from "./WhatsAppButton";
import { Logo } from "./Logo";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface CategoryItem {
  code: string;
  label: string;
  desc: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavLinkItem {
  label: string;
  path?: string;
  badge?: string;
  hasDropdown?: boolean;
  children?: CategoryItem[];
  openInNewTab?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 28);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / winHeight)));
      }

      if (currentPath === "/") {
        const sobreNos = document.getElementById("sobre-nos");
        const planos = document.getElementById("planos-desconto");
        const scrollPos = scrollY + 220;

        if (planos && scrollPos >= planos.offsetTop && (!sobreNos || scrollPos < sobreNos.offsetTop)) {
          setActiveSection("/#planos-desconto");
        } else if (sobreNos && scrollPos >= sobreNos.offsetTop) {
          setActiveSection("/#sobre-nos");
        } else {
          setActiveSection("/");
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const handleNavClick = (path?: string, openInNewTab?: boolean) => {
    if (!path) return;
    if (openInNewTab) {
      window.open(path, "_blank", "noopener,noreferrer");
      setMobileMenuOpen(false);
      setCategoriesDropdownOpen(false);
      return;
    }
    if (path.startsWith("/#")) {
      const elementId = path.replace("/#", "");
      onNavigate("/");
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      onNavigate(path);
    }
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  };

  const categoryItems: CategoryItem[] = [
    {
      code: "A",
      label: "Categoria A (Moto)",
      desc: "Motocicletas e ciclomotores",
      path: "/cnh-a",
      icon: <Bike className="w-4 h-4 text-[#D9AC0B]" />
    },
    {
      code: "B",
      label: "Categoria B (Carro)",
      desc: "Automóveis com ar e direção elétrica",
      path: "/cnh-b",
      icon: <Car className="w-4 h-4 text-[#D9AC0B]" />
    },
    {
      code: "AB",
      label: "Categoria AB (Carro & Moto)",
      desc: "Formação completa em duas e quatro rodas",
      path: "/cnh-ab",
      icon: <Layers className="w-4 h-4 text-[#D9AC0B]" />
    },
    {
      code: "D",
      label: "Categoria D (Ônibus & Vans)",
      desc: "Transporte profissional de passageiros",
      path: "/cnh-d",
      icon: <Bus className="w-4 h-4 text-[#D9AC0B]" />
    }
  ];

  const navLinks: NavLinkItem[] = [
    { label: "INÍCIO", path: "/" },
    { label: "SOBRE NÓS", path: "/#sobre-nos" },
    { label: "PLANOS", path: "/#planos-desconto" },
    { label: "HABILITAÇÃO", path: "/cnh" },
    {
      label: "CATEGORIAS",
      hasDropdown: true,
      children: categoryItems
    },
    { label: "SIMULADO", path: "/simulado", openInNewTab: true },
    { label: "DÚVIDAS", path: "/perguntas-frequentes" },
    { label: "CONTATO", path: "/contato" }
  ];

  const isCategoryActive = ["/cnh-a", "/cnh-b", "/cnh-ab", "/cnh-d"].includes(currentPath);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
        : "bg-white/95 backdrop-blur-md border-b border-slate-200"
    }`}>
      {/* Scroll Progress Reading Indicator */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Top Announcement Bar with DETRAN Credential */}
      <div className={`bg-slate-50 border-b border-slate-200/80 text-xs px-4 text-slate-600 transition-all duration-300 ${
        isScrolled ? "py-1 text-[10px]" : "py-1.5 sm:py-2 text-xs"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Left Info */}
          <div className="hidden md:flex items-center gap-3.5 text-[11px] font-medium">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Credenciada DETRAN-{siteConfig.estado}</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#D9AC0B]" />
              <span className="font-semibold text-slate-900">R. Amazonas, 220 - Pan-Americano</span>
              <span>• Fortaleza - CE</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-[#D9AC0B]" />
              <span>Seg a Sex: 08h-12h e 14h-18h | Sáb: 08h-12h</span>
            </span>
          </div>

          {/* Mobile Top Bar Display */}
          <div className="flex md:hidden items-center justify-between w-full text-[11px] font-semibold">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
              <ShieldCheck className="w-3 h-3 text-emerald-600 flex-shrink-0" />
              <span>Credenciada DETRAN-{siteConfig.estado}</span>
            </span>
            <a
              href="https://wa.me/558599880848"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>(85) 9988-0848</span>
            </a>
          </div>

          {/* Desktop Right Phone & WhatsApp */}
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${siteConfig.telefone.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9AC0B]" />
              <span>{siteConfig.telefone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://wa.me/558599880848"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>(85) 9988-0848</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick("/")}
            className="flex items-center text-left group focus:outline-none transition-transform hover:opacity-95"
            aria-label="Ir para a página inicial da Auto Escola Ximenes"
          >
            <Logo className={`w-auto transition-all duration-300 max-w-[210px] sm:max-w-none ${
              isScrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
            }`} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(item => {
              if (item.hasDropdown && item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setCategoriesDropdownOpen(true)}
                    onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  >
                    <button
                      id={`nav-${item.label.toLowerCase()}`}
                      onClick={() => handleNavClick("/cnh")}
                      className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black tracking-wider uppercase transition-all ${
                        isCategoryActive
                          ? "text-slate-950 bg-slate-100"
                          : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                          categoriesDropdownOpen ? "rotate-180 text-[#D9AC0B]" : ""
                        }`}
                      />
                      {isCategoryActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FFC905] rounded-full" />
                      )}
                    </button>

                    {/* Rich Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 mt-1 transition-all duration-200 z-50 ${
                        categoriesDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="px-3 py-2 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Categorias de Habilitação
                      </div>

                      <div className="space-y-1 mt-1">
                        {item.children.map(subItem => {
                          const isSubActive = currentPath === subItem.path;
                          return (
                            <button
                              key={subItem.path}
                              onClick={() => handleNavClick(subItem.path)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all flex items-start justify-between gap-2 group/sub ${
                                isSubActive
                                  ? "bg-[#FFF8DB] text-slate-950 border border-[#FFC905]/40"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                              }`}
                            >
                              <div className="flex items-start gap-2.5">
                                <div
                                  className={`p-1.5 rounded-lg ${
                                    isSubActive
                                      ? "bg-[#FFC905] text-slate-950"
                                      : "bg-slate-100 text-[#878373] group-hover/sub:bg-[#FFC905] group-hover/sub:text-slate-950"
                                  } transition-colors`}
                                >
                                  {subItem.icon}
                                </div>
                                <div>
                                  <span className="block font-black tracking-tight leading-snug">
                                    {subItem.label}
                                  </span>
                                  <span
                                    className={`text-[11px] block mt-0.5 ${
                                      isSubActive ? "text-slate-700" : "text-slate-500"
                                    }`}
                                  >
                                    {subItem.desc}
                                  </span>
                                </div>
                              </div>

                              {subItem.badge && (
                                <span
                                  className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                                    isSubActive
                                      ? "bg-[#FFC905] text-slate-950"
                                      : "bg-amber-100 text-amber-900 border border-amber-200"
                                  }`}
                                >
                                  {subItem.badge}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive =
                currentPath === item.path ||
                (currentPath === "/" && activeSection === item.path);

              return (
                <button
                  key={item.path}
                  id={`nav-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.path, item.openInNewTab)}
                  className={`group relative px-3 py-2 rounded-lg text-xs font-black tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "text-slate-950 bg-slate-100"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                  title={item.openInNewTab ? `${item.label} (Abre em nova aba)` : item.label}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md bg-[#FFF8DB] text-amber-900 border border-amber-200 flex items-center gap-0.5">
                      <span>{item.badge}</span>
                      {item.openInNewTab && <ExternalLink className="w-2.5 h-2.5 text-amber-800" />}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FFC905] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppButton
              id="header-cta-whatsapp"
              size="sm"
              label="FALAR NO WHATSAPP"
              mensagem="Olá! Gostaria de informações sobre início da CNH na Auto Escola Ximenes."
            />
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <WhatsAppButton
              id="header-mobile-whatsapp-icon"
              size="sm"
              label="WHATSAPP"
              className="py-1.5 px-3 text-[11px] sm:hidden"
            />
            <button
              id="btn-mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-slate-950 hover:bg-slate-200 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {/* Top Quick Info Pill for Mobile */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="font-semibold text-slate-800">Credenciada DETRAN-{siteConfig.estado}</span>
            </div>
            <span className="text-slate-600 font-medium text-[11px]">Fortaleza - CE</span>
          </div>

          {/* Nav Items */}
          <div className="space-y-1">
            {navLinks.map(item => {
              if (item.hasDropdown && item.children) {
                return (
                  <div key={item.label} className="border-y border-slate-200/80 py-2.5 my-1">
                    <span className="block px-3 py-1 text-[11px] font-black text-[#D9AC0B] uppercase tracking-widest">
                      {item.label} (A, B, AB, D)
                    </span>
                    <div className="space-y-1 mt-1.5 pl-1">
                      {item.children.map(subItem => {
                        const isSubActive = currentPath === subItem.path;
                        return (
                          <button
                            key={subItem.path}
                            onClick={() => handleNavClick(subItem.path)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-black flex items-center justify-between transition-colors ${
                              isSubActive
                                ? "bg-[#FFC905] text-slate-950 shadow-sm"
                                : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {subItem.icon}
                              <span>{subItem.label}</span>
                            </span>
                            {subItem.badge && (
                              <span
                                className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                  isSubActive
                                    ? "bg-slate-950 text-white"
                                    : "bg-amber-100 text-amber-900 border border-amber-200"
                                }`}
                              >
                                {subItem.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive = currentPath === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path, item.openInNewTab)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-black flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[#FFC905] text-slate-950 font-black"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.label}</span>
                    {item.openInNewTab && <ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#FFF8DB] text-amber-900 border border-amber-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Direct Mobile Contact CTA */}
          <div className="pt-3 border-t border-slate-200 space-y-2">
            <WhatsAppButton
              id="mobile-menu-cta-whatsapp"
              className="w-full justify-center"
              size="md"
              label="INICIAR ATENDIMENTO NO WHATSAPP"
              mensagem="Olá! Estou no celular acessando o site e gostaria de tirar dúvidas e consultar valores da CNH."
            />
            <div className="text-center text-[11px] text-slate-500 pt-1">
              Atendimento em Fortaleza: <strong className="text-slate-900">(85) 9988-0848</strong>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
