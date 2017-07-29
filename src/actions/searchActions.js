import axios from 'axios';

//import socket io to tie backend with frontend
import io from 'socket.io-client'
export const socket = io.connect('http://localhost:3001');

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

export const storeDashboard = (dashboardArr) => {
  return {
    type: 'STORE_DASHBOARD',
    dashboardArr
  };
}

export const getStock = (searchTerm) => {
  console.log('im inside getStock actions')
  return (dispatch) => {
    console.log('im in axios dispatch');
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchTerm+'&interval=1min&apikey=O4S8KZ7QADUOH6CX')
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
  console.log('im inside getNews actions')
  return (dispatch) => {
    console.log('im in axios dispatch');
    axios.get('https://api.intrinio.com/news?identifier=' + searchTerm,{
      auth: {
        username:"42f36889b38b7b775f37ee2e859908ea",
        password: "5062df3517649e48a878d8ac6046dfcc"
      }
    })
      .then( (response) => {
        let news= [];
        console.log(response.data);
        news.push(response.data);
        dispatch(displayNewsResult(news));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get news @ NewsAPI")

      });
  };
}
