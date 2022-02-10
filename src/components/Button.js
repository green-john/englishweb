import React from "react"
import PropTypes from "prop-types"

const Button = ({ label, href }) => (
  <a className="button" href={href}>
    {label}
  </a>
)

Button.defaultProps = {
  href: "#"
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string
}

export default Button
