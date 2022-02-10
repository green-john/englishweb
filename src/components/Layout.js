import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGlobe, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

library.add(faGlobe, faGlobeAmericas)

const Layout = ({ lang, children }) => {
  return (
    <>
      <Header lang={lang} siteTitle={"English Web"} />
      <div className="container">
        <main className="container-main">{children}</main>
        <Footer siteTitle={"EnglishWeb"} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
