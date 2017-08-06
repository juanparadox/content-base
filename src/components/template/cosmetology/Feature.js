import React from 'react';
import PropTypes from 'prop-types'
import Nav from './Nav'
import bg from './img/splash-min.jpg'

const Feature = ({ featureImage, cta, subcta }) => (
    <article className="sans-serif">
      <div className="vh-100 dt w-100 tc white cover" style={{ background: "url(" + featureImage + ") no-repeat center fixed" }}>
        <div className="dtc ">
          <Nav/>
          <h1 className="f1 f-headline-l white b mt6 mb3 feliz">{ cta }</h1>
          <blockquote className="ph0 mh0 measure f4 lh-copy center">
            <p className="fw1 light-gray feliz">
              { subcta }
            </p>
            <a className="f6 link pa3 mb2 dib white bg-primary ttu b tracked mt3" href="#0">Make an appointment</a>
          </blockquote>
        </div>
      </div>
    </article>
);

Feature.defaultProps = {
    featureImage: bg,
    cta: "Best barber in town",
    subcta: "Melo’s Barber Shop in Orlando, Florida is here to provide gentleman the proper grooming through superior men’s haircuts."
};

Feature.propTypes = {
  featureImage: PropTypes.string,
  cta: PropTypes.string,
  subcta: PropTypes.string
}

export default Feature;
