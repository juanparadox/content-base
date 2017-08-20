import React, {Component} from 'react';
import PropTypes from 'prop-types'
import outside from './img/outside.jpg'
import scissors from './img/scissors.svg'

class Pricing extends Component {
  componentDidMount(){
    document.getElementById('sm-left').style.height = document.getElementById('sm-right').offsetHeight + 'px'
  }

  render() {
    return (
      <div className="mw9 center lh-copy pb5-ns pt6-ns pv0" id="pricing">
        <div className="cf">
          <div className="fl w-100 w-50-ns pa4 tc cover dt" style={{ background: "url(" + this.props.bg + ") right no-repeat", marginTop: '-3rem' }} id="sm-left">
            <div className="v-mid dib dtc tc">
              <h1 className="f1 lh-title feliz normal white tracked mt0">{ this.props.title }</h1>
              <span className="ss center"></span>
            </div>
          </div>
          <div className="fl w-100 w-50-ns pa4 pv5 bg-near-black" id="sm-right">
            <img src={ scissors } className="h3 center db" alt="scissors"/>
            <ul className="list pl0 measure center near-white b">
              { this.props.prices.map((item, i) => <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--dark-gray bw1" key={i}>{ item.name } <span className="fr primary">{ item.price }</span></li>) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Pricing.defaultProps = {
  title: "Pricing",
  prices: [
    {
      name: "Haircut",
      price: "$15"
    },
    {
      name: "Razor Cut",
      price: "$5"
    },
    {
      name: "Neck Shave",
      price: "$5"
    },
    {
      name: "Beard Trim",
      price: "$12"
    },
  ],
  bg: outside
};

Pricing.propTypes = {
  title: PropTypes.string,
  p: PropTypes.array
}

export default Pricing;
