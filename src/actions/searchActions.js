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

export const displayNewsResult = (news) => {
  return {
    type: 'DISPLAY_NEWS',
    news
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

export const getNews = (searchTerm) => {
  console.log('im inside getStock actions')
  return (dispatch) => {
    console.log('im in axios dispatch');
    axios.get(' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=54c0d4afc52b4332b33762e86b37052d')
      .then( (response) => {
        let news= [];
        news.push(response.data);
        console.log(news);
        dispatch(displayNewsResult(news));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get news @ NewsAPI")

      });
  };
}