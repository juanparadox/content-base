const initialState = {
  view: 'home'
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_VIEW':
      return{...state, view: action.payload}
      break;
    default:
      return state
  }
}
