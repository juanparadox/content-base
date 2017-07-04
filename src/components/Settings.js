import React from 'react'
import Modal from './Modal'

// TODO: these settings should be coming from firebase as 'settings' so that we can render them by map
const Settings = props =>
	<div>
		{/*Modal()*/}
		<dl className="lh-title pa5 mt0">
			<dt className="f4 b mb3">Settings</dt>
		  <dt className="f6 b mt2">Page</dt>
		  <select className="ba b--black-20 pa2 mb2 db w-100" onChange={e => props.handleChange(e, 'page')}>
		  	<option>Home</option>
		  	<option>Help</option>
		  </select>
		  <dt className="f6 b mt2">Content Type</dt>
		  <select className="ba b--black-20 pa2 mb2 db w-100" onChange={e => props.handleChange(e, 'contentType')}>
		  	<option>Post</option>
		  	<option>Blurb</option>
		  	<option>Call to action</option>
		  </select>
		  <dt className="f6 b mt2">Section</dt>
		  <select className="ba b--black-20 pa2 mb2 db w-100" onChange={e => props.handleChange(e, 'section')}>
		  	<option>Default</option>
		  </select>
		  <a className="f6 link dim br-pill ba ph3 pv2 mb2 dib black mv4">Add Attribute</a>
		</dl>
	</div>

export default Settings
