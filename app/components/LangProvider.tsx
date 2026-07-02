"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { LangCode, LANGUAGES } from "../lib/i18n";

const LangContext = createContext<{
  lang: LangCode;
  setLang: (l: LangCode) => void;
}>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem("vinus-lang") as LangCode | null;
    if (saved && LANGUAGES.find((l) => l.code === saved)) {
      setLangState(saved);
      return;
    }
    // Auto-detect from browser
    const browser = navigator.language.slice(0, 2) as LangCode;
    const match = LANGUAGES.find((l) => l.code === browser);
    if (match) setLangState(match.code);
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("vinus-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
