import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faGlobe, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons"

library.add(faGlobe, faGlobeAmericas)

const Layout = ({ lang, children }) => {
  return (
    <>
      <Header lang={lang} siteTitle={"English Web"} />
      <div className="my-container">
        <main className="my-container-main w-screen">{children}</main>
        <Footer siteTitle={"EnglishWeb"} />
      </div>
    </>
  )
}

export default Layout
