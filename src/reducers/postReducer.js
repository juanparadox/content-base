const initialState = {
  content: [],
  post: null
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'SET_CHAT':{
      return {
        ...state,
        test: action.payload
      }
    }
    case 'SET_CONTENT':{
      return {
        ...state,
        content: action.payload
      }
    }
    case 'EDITING_POST':{
      return {
        ...state,
        post: state.content[action.payload]
      }
    }
    default:
      return state
  }
}
