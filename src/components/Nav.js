import React from 'react'
import logo from '../img/content-base.svg'
// Router
import {Link} from 'react-router-dom'

// TODO: these should be generated via map
export const Nav = () =>
	<nav className="dt w-100 border-box pa3 ph5-ns bb b--black-10">
		<Link to="/" className="dtc v-mid mid-gray link dim w-2">
			<img src={logo} className="dib w2 h2 br-100" alt="Site Name"/>
		</Link>
	  <div className="dtc v-mid w-75 tr">
			<Link to="/cb/write" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Write</Link>
			<Link to="/cb/feed" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Feed</Link>
			<Link to="/cb/templates" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns">Templates</Link>
			<Link to="/cb/settings" className="link dim dark-gray f6 f5-ns dib">Settings</Link>
	  </div>
	</nav>
