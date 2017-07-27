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
      return {
        ...state,
        result:[
           ...state.result,
           action.result
        ]

      }
    break;

    case 'STORE_DASHBOARD':
    console.log('im inside STORE DASHBOARD reducer!')
      return {
        ...state,
        result:[
          ...state,action.result
        ]

      }
    break;

    case 'DISPLAY_NEWS':
    console.log('im inside DISPLAY_NEWS reducer!')
    return {
      ...state,
      news:[
         ...state.news,
         action.news
      ]
    }
    break;
   default:
      return state
  }
}

export default searchReducer;
