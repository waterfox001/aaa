import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.nome} ${siteConfig.cidade}`
      : `${siteConfig.nome} - CNH em ${siteConfig.cidade} e Simulado DETRAN`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }
  }, [title, description]);

  return null;
}
