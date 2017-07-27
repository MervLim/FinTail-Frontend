const initialState = {
  searchTerm: " ",
  result : [],
  news: [],
  dashboardArr:[]
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
    // console.log('state',state.result, 'action', action.result)
      return {
        ...state,
        result: [...state.result,
                    action.result ]
        // result: action.result
      }
    break;

    case 'DISPLAY_NEWS':
    console.log('im inside DISPLAY_NEWS reducer!')
    return {
      ...state,
      news: [...state.news,
                action.news ]
      // news: action.news
    }
    break;

    case 'STORE_DASHBOARD':
    console.log('im inside STORE DASHBOARD reducer!')
      return {
        ...state,
        result: [
          ...state.result,
          action.news,
          action.result
        ]

      }


   default:
      return state
  }
}

export default searchReducer;
