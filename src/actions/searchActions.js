import axios from 'axios';


export const searchTerm = (searchTerm) => {
  return {
    type: 'SEARCH_TERM',
    searchTerm

  };
}

export const displayResult = (result) => {
  return {
    type: 'DISPLAY_RESULT',
    result

  };
}


export const getStock = (searchTerm) => {
  console.log('im inside getStock actions')
  return (dispatch) => {
    console.log('im in axios dispatch');
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+searchTerm+'&apikey=O4S8KZ7QADUOH6CX')
      .then( (response) => {
        let stock = [];
        stock.push(response.data);
        // console.log(stock);
        dispatch(displayResult(stock));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get stock @ AlphaVantage")

      });
  };
}
