import React from 'react'
import Modal from './Modal'

const Settings = () =>
	<div>
		{/*Modal()*/}
		<dl className="lh-title pa5 mt0">
			<dt className="f4 b mb3">Settings</dt>
		  <dt className="f6 b mt2">Page</dt>
		  <select className="ba b--black-20 pa2 mb2 db w-100">
		  	<option>Home</option>
		  	<option>Help</option>
		  </select>
		  <dt className="f6 b mt2">Section</dt>
		  <select className="ba b--black-20 pa2 mb2 db w-100">
		  	<option>A</option>
		  	<option>B</option>
		  	<option>C</option>
		  </select>
		  <a className="f6 link dim br-pill ba ph3 pv2 mb2 dib black mv4">Add Attribute</a>
		</dl>
	</div>

export default Settings