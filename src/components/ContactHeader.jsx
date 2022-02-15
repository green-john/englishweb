import React from "react"
import {CONTACT_US, CONTACT_US_SUBHEADING, t} from "../services/languageService";

export default function ContactHeader({lang = 'en'}) {
    return <div className="w-full mb-5">
        <p className="text-xl uppercase leading-8 font-extrabold text-gray-900">
            {t(CONTACT_US, lang)}
        </p>
        <p className="mt-4 max-w-xl text-xl text-gray-500">
            {t(CONTACT_US_SUBHEADING, lang)}
        </p>
    </div>
}
