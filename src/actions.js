// Firebase
import * as firebase from "firebase"
import config from './fb-config.json'
import store from './store'

firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();

// TODO: Show success in UI
const publishPost = post =>
	dispatch => database.ref('posts/').push(post, () => console.log("done!"))

// TODO: Show success in UI
const setEditingPost = key => ({
	type: 'EDITING_POST',
	payload: key
})

// Retrieves all posts
const getContent = post =>
	dispatch => database.ref('posts/').once('value', snapshot => store.dispatch(setContent(snapshot.val())))

const setContent = content =>({
		type: 'SET_CONTENT',
		payload: content
})

const changeView = view => ({
		type: 'CHANGE_VIEW',
		payload: view
})

export { publishPost, getContent, setContent, changeView, setEditingPost }
