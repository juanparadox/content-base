import React from "react"
import PropTypes from 'prop-types'
import logo from './img/logo.svg'

const Nav = ({ img, left, right}) =>
  <nav className="pa3 pt5-ns ph4-ns tc tracked">
    { left.map((item, index) =>
      <a href={item.href} key={index}>
        <span className="link feliz dim white f6 f5-ns dib mh4-l mh3 v-mid pointer ttu">{ item.text }</span>
      </a>)
    }
    <img className="link feliz f1 f-headline-ns tc dib h3-5 ma v-mid" src={img} alt="logo"/>
    { right.map((item, index) => <span className="link feliz dim white f6 f5-ns dib mh4-l mh3 v-mid pointer ttu" key={index}>{ item.text }</span>) }
  </nav>

// Specifies the default values for props:
Nav.defaultProps = {
  img: logo,
  left: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "About",
      href: "#about"
    },
    {
      text: "Pricing",
      href: "#pricing"
    }
  ],
  right: [
    {
      text: "Locations",
      href: "#locations"
    },
    {
      text: "Reviews",
      href: "#reviews"
    },
    {
      text: "Contact",
      href: "#contact"
    }
  ]
};

Nav.propTypes = {
  left: PropTypes.arrayOf(PropTypes.object),
  right: PropTypes.arrayOf(PropTypes.object)
}

export default Nav
