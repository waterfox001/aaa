import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { CNHPage } from "./pages/CNHPage";
import { CNHAPage } from "./pages/CNHAPage";
import { CNHBPage } from "./pages/CNHBPage";
import { CNHABPage } from "./pages/CNHABPage";
import { CNHDPage } from "./pages/CNHDPage";
import { SimuladoPage } from "./pages/SimuladoPage";
import { QuizPage } from "./pages/QuizPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { FortalezaPage } from "./pages/FortalezaPage";
import { AboutPage } from "./pages/AboutPage";
import { getLocalBusinessSchema } from "./utils/seo";

export default function App() {
  // Normalize current path from window.location
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.replace("#", "").toLowerCase();
    
    // Check hash first if present (e.g. #/simulado or #simulado)
    if (hash && hash !== "/") {
      return hash.startsWith("/") ? hash : `/${hash}`;
    }
    return pathname || "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());

  // Listen to browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Inject LocalBusiness Schema.org JSON-LD for local SEO
  useEffect(() => {
    const scriptId = "schema-local-business";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(getLocalBusinessSchema());
      document.head.appendChild(script);
    }
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    try {
      window.history.pushState({}, "", path);
    } catch {
      // Fallback for strict iframe environments
      window.location.hash = path;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render active page based on path
  const renderPage = () => {
    const clean = currentPath.split("?")[0].replace(/\/+$/, "") || "/";

    switch (clean) {
      case "/":
        return <Home onNavigate={navigateTo} />;
      case "/cnh":
        return <CNHPage onNavigate={navigateTo} />;
      case "/cnh-a":
        return <CNHAPage onNavigate={navigateTo} />;
      case "/cnh-b":
        return <CNHBPage onNavigate={navigateTo} />;
      case "/cnh-ab":
        return <CNHABPage onNavigate={navigateTo} />;
      case "/cnh-d":
        return <CNHDPage onNavigate={navigateTo} />;
      case "/simulado":
        return <SimuladoPage />;
      case "/quiz":
        return <QuizPage />;
      case "/perguntas-frequentes":
      case "/duvidas":
      case "/faq":
        return <FAQPage />;
      case "/contato":
        return <ContactPage />;
      case "/autoescola-fortaleza":
        return <FortalezaPage onNavigate={navigateTo} />;
      case "/sobre":
        return <AboutPage onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#FFC905] selection:text-slate-950">
      {/* Top Header */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1">{renderPage()}</main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Discreet floating WhatsApp contact button */}
      <WhatsAppButton
        variant="floating"
        id="floating-whatsapp-trigger"
        mensagem="Olá! Vim pelo site da Autoescola Ximenes e gostaria de tirar uma dúvida."
      />
    </div>
  );
}
