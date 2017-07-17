// Create content

// React
import React, {Component} from "react"
// Redux
import { connect } from 'react-redux'
import store from '../store'

const mapStateToProps = store => ({test: store.post.test, content: store.post.content})

class Templates extends Component {
  constructor(){
    super();
    this.state = {
      def: null
    }
  }

  handleChange = (e,type) => console.log(e.target.value, type);

  render() {
    return (
      <div className="cf">
      	templates
    	</div>
    )
  }
}

export default connect(mapStateToProps)(Templates)
