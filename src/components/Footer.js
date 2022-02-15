import React from "react"

const Footer = ({ siteTitle }) => {

  return (
    <footer className="footer mt-5">
      <div className="footer-belt">
        <div className="company-sign">
          &copy; 2021 {siteTitle}
        </div>
        <div className="social-media">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/EnglishWeb_eu/">
            <div className="social-twitter">Twitter</div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://web.facebook.com/English-Web-103037572210974/">
            <div className="social-facebook">Facebook</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
