import React from "react";
import logo from './img/logo.svg'

const LogoLinkList = ({ img, left, right}) =>
  <nav className="pa3 pa4-ns tc tracked">
    { left.map((item, index) => <span className="link feliz dim white f6 f5-ns dib mh4-l mh3 v-mid pointer ttu">{ item.text }</span>) }
    <img className="link feliz f1 f-headline-ns tc dib h3-5 ma v-mid" src={img}/>
    { right.map((item, index) => <span className="link feliz dim white f6 f5-ns dib mh4-l mh3 v-mid pointer ttu">{ item.text }</span>) }
  </nav>

// Specifies the default values for props:
LogoLinkList.defaultProps = {
  img: logo,
  left: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "About",
      href: "#"
    },
    {
      text: "Why Us",
      href: "#"
    }
  ],
  right: [
    {
      text: "Pricing",
      href: "#"
    },
    {
      text: "Contact",
      href: "#"
    },
    {
      text: "Shop",
      href: "#"
    }
  ]
};

LogoLinkList.propTypes = {
  left: React.PropTypes.arrayOf(React.PropTypes.object),
  right: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default LogoLinkList
