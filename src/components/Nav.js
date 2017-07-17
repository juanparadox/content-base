import React from 'react'
import logo from '../img/content-base.svg'
import store from '../store'
import { changeView } from '../actions'

// TODO: these should be generated via map
export const Nav = () =>
	<nav className="dt w-100 border-box pa3 ph5-ns bb b--black-10">
	  <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
	    <img src={logo} className="dib w2 h2 br-100" alt="Site Name"/>
	  </a>
	  <div className="dtc v-mid w-75 tr">
	    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Write" onClick={() => store.dispatch(changeView('write'))}>Write</a>
	    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Feed">Feed</a>
			<a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Templates" onClick={() => store.dispatch(changeView('templates'))}>Templates</a>
			<a className="link dim dark-gray f6 f5-ns dib" title="Settings" onClick={() => store.dispatch(changeView('settings'))}>Settings</a>
	  </div>
	</nav>
