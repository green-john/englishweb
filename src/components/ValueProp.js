import React from "react"
import { t } from "../services/languageService"
import ContactButton from "./ContactButton"

const ValueProp = ({ lang }) => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>{t("valuePropMainText", lang)}</h1>
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

export default ValueProp
