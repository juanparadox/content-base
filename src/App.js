// React
import React, {Component} from "react"
// Components
import PostForm from "./components/PostForm"
import Nav from './components/Nav'
import Settings from './components/Settings'
import tachyons from 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: null
    }
  }

  render() {
    return (
      <div className="athelas">
        {Nav()}
        <div className="cf">
          <div className="fl w-20">
            {Settings()}
          </div>
          <div className="fl w-80">
            <PostForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
