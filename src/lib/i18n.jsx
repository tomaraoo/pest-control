/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const LanguageContext = createContext(null)

function initialLanguage() {
  const saved = window.localStorage.getItem("milpestcon-language")
  if (saved === "en" || saved === "fil") return saved
  return /^(fil|tl)(-|$)/i.test(window.navigator.language) ? "fil" : "en"
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === "fil" ? "fil-PH" : "en-US"
    window.localStorage.setItem("milpestcon-language", language)
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
