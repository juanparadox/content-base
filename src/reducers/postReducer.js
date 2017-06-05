const initialState = {
  test: 'hi'
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'SET_CHAT':{
      return {
        ...state,
        test: action.payload
      }
    }
    default:
      return state
  }
}