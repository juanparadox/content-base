// React
import React, {Component} from "react";
// Firebase
import * as firebase from "firebase";
// Components
import PostForm from "./components/PostForm";
import Nav from './components/Nav'
import Settings from './components/Settings'
import tachyons from 'tachyons'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7Ip4NfWTf7fHOZr45StcPhFNSrTLLfJk",
  authDomain: "content-base-3deb0.firebaseapp.com",
  databaseURL: "https://content-base-3deb0.firebaseio.com",
  storageBucket: "content-base-3deb0.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    let postsData = database.ref('posts/');
    postsData.on('value', snapshot => this.setState({ posts: snapshot.val() }));
  }

  confirm = () => {
    console.log("hhh");
  }

  handleSubmit = e => {
    e.preventDefault();
    database.ref('posts/').push({
      username: "hah",
      email: "hh",
      profile_picture : "ugiugi"
    }, this.confirm);
  }

  render() {
    console.log(this.state);
    return (
      <div className="athelas">
        {Nav()}
        <div className="cf">
          <div className="fl w-20 pv5">
            {Settings()}
          </div>
          <div className="fl w-80 pv5">
            <PostForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
