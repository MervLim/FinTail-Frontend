import axios from 'axios';


export const searchTerm = (searchTerm) => {
  return {
    type: 'SEARCH_TERM',
    searchTerm

  };
}


export const getStock = (searchTerm) => {
  console.log('im inside getStock actions')
  return (dispatch) => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=O4S8KZ7QADUOH6CX')
      .then( (response) => {
        const stock = response.data;
        //debugger
        dispatch(searchTerm(stock));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get stock @ AlphaVantage")

      });
  };
}
