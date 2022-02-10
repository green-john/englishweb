import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LanguageSelector() {
  return <div className="dropdown">
    <span>
      <FontAwesomeIcon icon="globe-americas" />
    </span>
    <div className="dropdown-content">
      <p>
        <a href="/en">English</a>
      </p>
      <p>
        <a href="/hr">Hrvatski</a>
      </p>
      <p>
        <a href="/ru">Pу́сский</a>
      </p>
    </div>
  </div>
}
