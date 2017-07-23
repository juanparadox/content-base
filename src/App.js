// React
import React, {Component} from "react"
// Redux
import store from './store'
import { getContent } from './actions'
// React Router
import {BrowserRouter as Router, Route} from 'react-router-dom'
// Components
import {Nav} from './components/Nav'
import Home from './components/home/Home'
import Content from './components/content/Content'
import Templates from './components/Templates'
import {Cosmetology} from './components/template/cosmetology/Cosmetology.js'
import 'tachyons'

class App extends Component {
  componentWillMount(){
    store.dispatch(getContent())
  }

  render() {
    return (
      <div className="athelas">
        <Router>
        	<div>
            {Nav()}
          	<Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/cb/write" component={Content}/>
            <Route exact={true} path="/cb/templates" component={Templates}/>
            <Route exact={true} path="/cb/templates/cosmetology/" component={Cosmetology}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
