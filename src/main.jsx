import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css"
import App from "./App.jsx"
import { LanguageProvider } from "./lib/i18n"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    <SpeedInsights />
  </StrictMode>,
)
