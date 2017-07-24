const initialState = {
  searchTerm: " ",
  result : []
}

const searchReducer = (state = initialState, action) =>{

 switch (action.type) {
    case 'SEARCH_TERM':
    console.log('im inside reducer!')
      return {
        ...state,
        searchTerm: action.searchTerm

      }
    break;


    case 'DISPLAY_RESULT':
    console.log('im inside UPDATE_RESULT reducer!')
      return {
        ...state,
        result: action.result

      }
    break;




   default:
      return state
  }
}

export default searchReducer;
