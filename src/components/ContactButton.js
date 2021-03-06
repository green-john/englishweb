import Button from "./Button"
import React from "react"
import { t } from "../services/languageService"

export default function ContactButton({ lang }) {
  return <>
    <Button href={"/" + lang + "/contact"} label={t("contactUs", lang)} />
  </>
}
