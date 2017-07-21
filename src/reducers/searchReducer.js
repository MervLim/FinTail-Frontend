const initialState = {
  searchTerm: " "
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




   default:
      return state
  }
}

export default searchReducer;
