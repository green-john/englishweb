import React from "react"
import { t } from "../services/languageService"
import ContactButton from "./ContactButton"

export default function ValueProp({ lang }) {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1 className="text-4xl font-extrabold">{t("valuePropMainText", lang)}</h1>
          <p className="main-subtitle">
            {t("valuePropDesc", lang)}
          </p>
          <ContactButton lang={lang} />
        </div>
        <div className="main-photo" />
      </div>
    </section>
  )
}
