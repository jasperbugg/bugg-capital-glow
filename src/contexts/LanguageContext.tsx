import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "nl" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T,>(nl: T, en: T) => T;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("bugg-lang") : null;
    if (stored === "nl" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("bugg-lang", l);
  };

  const t = <T,>(nl: T, en: T): T => (lang === "nl" ? nl : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
