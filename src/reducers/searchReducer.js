const initialState = {
  searchTerm: " ",
  result : [],
  news: []
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
    console.log('im inside DISPLAY_RESULT reducer!')
      return {
        ...state,
        result: [...state.result,
                    action.result]
      }
    break;
    case 'DISPLAY_NEWS':
    console.log('im inside DISPLAY_NEWS reducer!')
    return {
      ...state,
      news: [...state.news,
                action.news ]
    }
    break;
    case 'UPDATE_ENTRY_PRICE':
    console.log('im inside updateEntryPrice reducer!')
    console.log(action.stock);
    return {
      ...state,
      stock: action.stock
    }
    break;
    case 'DELETE_USER_PREFERENCE':
    console.log('im inside Delete_User_preference reducer!')
    console.log(action.stock);
    return {
      ...state,
      stock: action.stock
    }
    break;


   default:
      return state
  }
}

export default searchReducer;
