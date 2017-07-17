// React
import React, {Component} from "react"
import ScribeEditor from 'react-scribe'
import { connect } from 'react-redux'
import store from '../store'
import { publishPost } from '../actions'

const mapStateToProps = store => ({post: store.post.post})

const myOptions = ['blockquote', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'linkPrompt',
'unlink', 'ol', 'ul']

class PostForm extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Title',
      body: `Body`
    }
  }

  componentDidMount() {
    this.props.post && this.setState({title: this.props.post.title, body: this.props.post.body})
  }

  publish = () => {
    console.log("publishing")
    store.dispatch(publishPost(this.state))
  }

  setTitle = e => this.setState({title: e.target.value})
  setBody = e => this.setState({body: e})

  setImage = e => {
  	console.log(e.target.value);
  	let reader = new FileReader();
  	console.log(reader.readAsDataURL(e.target.value));
  }

  render() {
    return (
      <div>
        <div className="center f5 lh-copy pa5">
          <span className="f4 b mb3 db">Post</span>
          <textarea
            className="f1 f-headline-l fw1 i mt0 lh0 athelas bn rn outline-0"
            onChange={this.setTitle}
            value={this.state.title}
          >
          </textarea>
          <ScribeEditor
            config={myOptions}
            onChange={this.setBody}
            value={this.state.body}
          />
          <a className="f6 link dim br-pill ba ph3 pv2 mb2 dib black fr" onClick={this.publish}>Publish</a>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PostForm)
