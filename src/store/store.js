import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import searchReducer from '../reducers/searchReducer'
import thunk from 'redux-thunk';

export let initStore = () => {

  const reducer = combineReducers( {
      JSONresult: searchReducer
      NEWSData: searchReducer
  });

  const store = createStore( reducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
