import { Link } from "gatsby"
import React, { useState } from "react"
import {ABOUT_HEADER, BLOG_HEADER, CONTACT_US, t} from "../services/languageService"
import LanguageSelector from "./LanguageSelector"

const Header = ({ lang = "en", siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  let navClasses = "nav-links"
  let navItemClasses = "nav-link-item"
  let burgerClass = "burger"
  if (isOpen) {
    navClasses = "nav-links nav-active"
    navItemClasses = "nav-link-item-active"
    burgerClass = "burger toggle"
  }

  return (
    <header>
      <nav className="my-navbar">
        <div className="my-nav-belt">
          <div className="header-lang">
            <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
              <Link className="logo" to="/">
                <div className="logo-image" />
                {siteTitle}
              </Link>
            </h1>
          </div>

          <ul className={navClasses}>
            <li className={navItemClasses}><LanguageSelector currentLang={lang} /> </li>
            <li className={navItemClasses}><a href="/">{t("headerHome", lang)}</a></li>
            {/*<li className={navItemClasses}><a href={"/" + lang + "/about"}>{t(ABOUT_HEADER, lang)}</a></li>*/}
            <li className={navItemClasses}><a href={"/" + lang + "/blog"}>{t(BLOG_HEADER, lang)}</a></li>
            <li className={`${navItemClasses} nav-item-bold`}><a href={"/" + lang + "/contact"}>{t(CONTACT_US, lang)}</a></li>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
