import React from 'react';
import PropTypes from 'prop-types'
import men from './img/men.jpg'
import shave from './img/shave.jpg'

// For images
const style = {
  img1: {
    zIndex: '-1'
  },
  img2: {
    marginTop: '-25%',
    width: '400px',
    zIndex: '-1'
  }
}

const About = ({ title, p, img1, img2}) => (
  <div className="mw9 center pv5 lh-copy">
    <div className="cf">
      <div className="fl w-100 w-50-ns pa4 tr relative">
        <img src={img1} style={style.img1} alt=""/>
        <img src={img2} className="b--white bl bt bw5" style={style.img2} alt=""/>
      </div>
      <div className="fl w-100 w-50-ns pa4">
        <h1 className="f1 lh-title feliz normal tracked">{ title }</h1>
        <span className="ss"></span>
        { p.map((item, i) => <p key={i}>{ item }</p>)}
      </div>
    </div>
  </div>
);

About.defaultProps = {
  title: "About Melo's Barber Shop",
  p: [
    "With over twenty years experience as a professional barber, Melo has PASSION. He is a hair perfectionist. This shows in the quality of his craft and return business of all of his customers. He has owned several barber shops and each one was built by the best form of marketing: word of mouth.",
    "Melo’s customers always get asked: ”Where did you get that hair cut?” and they always smile and say Melo’s Barber Shop in Orlando, Florida.",
    "Don’t just take his word for it, stop on by!"
  ],
  img1: men,
  img2: shave
};

About.propTypes = {
  title: PropTypes.string,
  p: PropTypes.array
}

export default About;
