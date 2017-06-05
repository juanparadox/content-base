import React from 'react'
import logo from '../img/content-base.svg'

const Nav = () =>
	<nav className="dt w-100 border-box pa3 ph5-ns bb b--black-10">
	  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
	    <img src={logo} className="dib w2 h2 br-100" alt="Site Name"/>
	  </a>
	  <div className="dtc v-mid w-75 tr">
	    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Write">Write</a>
	    <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Feed">Feed</a>
	  </div>
	</nav>

export default Nav