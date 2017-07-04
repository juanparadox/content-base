// Create content

// React
import React, {Component} from "react"
import PostForm from "../../components/PostForm"
import Nav from '../../components/Nav'
import Settings from '../../components/Settings'
// Redux
import { connect } from 'react-redux'
import store from '../../store'

const mapStateToProps = store => ({test: store.post.test})

class Content extends Component {
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
      	<div className="fl w-20">
        	{Settings({handleChange: this.handleChange})}
      	</div>
      	<div className="fl w-80">
        	<PostForm/>
      	</div>
    	</div>
    )
  }
}

export default connect(mapStateToProps)(Content)