// Firebase
import * as firebase from "firebase"
import config from './fb-config.json'

firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();

// TODO: Show success in UI
const publishPost = post => (
	dispatch => database.ref('posts/').push(post, () => console.log("done!"))
	)

export { publishPost }
