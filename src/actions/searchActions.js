import axios from 'axios';

//import socket io to tie backend with frontend


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

export const updateEntryPrice = (stock) => {
  console.log(stock);
  return {
    type: 'UPDATE_ENTRY_PRICE',
    stock
  };
}



export const getStock = (searchTerm) => {
  console.log('im inside getStock actions')
  return (dispatch) => {
    console.log('im in axios dispatch');
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchTerm+'&interval=1min&apikey=GQBU0ZPN342PFXI9')
      .then( (response) => {
        let stock = response.data;
        // Object.defineProperty(stock, "initialTotalPrice", {
        //   value: 0,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        //
        // });
        console.log(stock);
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



export const addTotalPrice = (price, volume) =>{
  console.log('im inside addTotalPrice actions')
  return {
    type: 'ADD_TOTAL_PRICE',
    price,
    volume
  };
}


/*Store Entry Price */

export const postTotalPrice= (price) => {
  return (dispatch) => {
    axios.put('/stock/' ,price)
      .then( (response) => {
        console.log(response.data);
          dispatch(addTotalPrice(response.data));
      })
      .catch((error)=> {
        console.error("User Entry Price And Tickr Not Posted in Server")
      });
  }
}
