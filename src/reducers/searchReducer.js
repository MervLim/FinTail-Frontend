import { fromJS } from 'immutable';

const initialState = {
  searchTerm: " ",
  result : [],
  news: []
};

const searchReducer = (state = initialState, action) =>{

 switch (action.type) {
    case 'SEARCH_TERM':
    console.log('im inside reducer!')
      return {
        ...state,
        searchTerm: fromJS(action.searchTerm)

      }
    break;



    case 'STORE_DASHBOARD':
    console.log('im inside STORE DASHBOARD reducer!')
      return {
        ...state,
        result: [
          ...state.result,
        fromJS(action.news),
        fromJS(action.result)
        ]

      }


   default:
      return state
  }
}

export default searchReducer;
