// React
import React, {Component} from "react"
// Router
import {Link} from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import store from '../../store'
import {setEditingPost} from '../../actions'

const handleClick = key => {
  store.dispatch(setEditingPost(key))
}

const renderTitles = content => {
  let titles = []
  for (let key in content) {
    if (content.hasOwnProperty(key)) {
      titles.push(
        <Link to="/cb/write" key={key} className="black no-underline mb3 db" onClick={() => handleClick(key)}>
            <dt className="f6 b">{content[key].title}</dt>
            <dd className="ml0">12/31/9999</dd>
        </Link>
      )
    }
  }
  return titles
}

class Home extends Component {
  render(){
    return(
      <div>
        <span className="ma4 f4 b mb3 db">Posts</span>
        <dl className="lh-title pa4 mt0">
          {this.props.content && renderTitles(this.props.content)}
        </dl>
      </div>
    )
  }
}

const mapStateToProps = store => ({content: store.post.content})

export default connect(mapStateToProps)(Home)
