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
import Templates from './components/Templates'
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

  renderView = () => {
    let render
    switch(this.props.view){
      case 'home':
        render = Home(this.props.content)
      break;
      case 'write':
        render = <Content/>
      break;
      case 'feed':
        console.log('feed')
      break;
      case 'settings':
        console.log('settings')
      break;
      case 'templates':
        render = <Templates/>
      break;
      default:
        render = Home(this.props.content)
      break;
    }
    return render
  }

  render() {
    return (
      <div className="athelas">
        {Nav()}
        {this.renderView()}
      </div>
    );
  }
}

const mapStateToProps = store => ({view: store.view.view, content: store.post.content})

export default connect(mapStateToProps)(App)
