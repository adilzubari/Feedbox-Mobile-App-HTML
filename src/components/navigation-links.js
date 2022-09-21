import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink navbar-link">
        {props.text2}
      </Link>
      <span className="navigation-links-text navbar-link">{props.text1}</span>
      <span className="navigation-links-text1 navbar-link">{props.text11}</span>
      <Link to="/contact" className="navigation-links-navlink1 navbar-link">
        {props.Contact}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text11: 'About',
  rootClassName: '',
  Contact: 'Contact',
  text2: 'Home',
  text1: 'About',
}

NavigationLinks.propTypes = {
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  Contact: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
