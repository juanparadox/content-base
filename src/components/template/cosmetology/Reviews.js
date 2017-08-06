import React from 'react';
import PropTypes from 'prop-types'
import men from './img/men.jpg'
import shave from './img/shave.jpg'

// For images
const style = {
  img1: {
    marginTop: '-5%',
    zIndex: '-1'
  },
  img2: {
    marginTop: '-25%',
    width: '400px',
    zIndex: '-1'
  }
}
//TODO: pass the img and reviews in as props
const Reviews = ({ title, p, img1, img2}) => (
  <div className="bg-near-white w-100">
    <div className="mw9 center ph3-ns center tc pv5 lh-copy">
      <h1 className="f1 lh-title feliz normal tracked center mt0">{ title }</h1>
      <span className="ss center"></span>
      <div className="cf ph2-ns">
        <div className="fl w-100 w-25-l w-50-m pa3">
          <article className="mw5 center bg-white pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
              <h1 className="f4">Mimi Whitehouse</h1>
              <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
        </div>
        <div className="fl w-100 w-25-l w-50-m pa3">
          <article className="mw5 center bg-white pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
              <h1 className="f4">Janie Romano</h1>
              <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
        </div>
        <div className="fl w-100 w-25-l w-50-m pa3">
          <article className="mw5 center bg-white pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
              <h1 className="f4">Jeff Pewter</h1>
              <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
        </div>
        <div className="fl w-100 w-25-l w-50-m pa3">
          <article className="mw5 center bg-white pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you"/>
              <h1 className="f4">Jeff Pewter</h1>
              <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
);

Reviews.defaultProps = {
  title: "Reviews",
  p: [
    "With over twenty years experience as a professional barber, Melo has PASSION. He is a hair perfectionist. This shows in the quality of his craft and return business of all of his customers. He has owned several barber shops and each one was built by the best form of marketing: word of mouth.",
    "Melo’s customers always get asked: ”Where did you get that hair cut?” and they always smile and say Melo’s Barber Shop in Orlando, Florida.",
    "Don’t just take his word for it, stop on by!"
  ],
  img1: men,
  img2: shave
};

Reviews.propTypes = {
  title: PropTypes.string,
  p: PropTypes.array
}

export default Reviews;
