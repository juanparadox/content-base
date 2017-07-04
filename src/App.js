// React
import React, {Component} from "react"
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import store from './store'
import { getContent } from './actions'
// Components
import {Nav} from './components/Nav'
import {Home} from './components/home/Home'
import Content from './components/content/Content'
import tachyons from 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: null
    }
  }

  componentWillMount(){
    store.dispatch(getContent())
  }

  render() {
    return (
      <div className="athelas">
        {Nav()}
        { this.props.view === 'home'
          ? <Home/>
          : <Content/>
        }
      </div>
    );
  }
}

const mapStateToProps = store => ({view: store.view.view})

export default connect(mapStateToProps)(App)
