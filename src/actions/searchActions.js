import axios from 'axios';
import addsync from 'async';


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

export const displayNewsAndStock = (news, result) => {
  return {
    type: 'STORE_DASHBOARD',
    news,
    result

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

const getNews1 = (searchTerm) => {
  return axios.get('https://api.intrinio.com/news?identifier=' + searchTerm,{
    auth: {
      username:"42f36889b38b7b775f37ee2e859908ea",
      password: "5062df3517649e48a878d8ac6046dfcc"
    }
  })
}

const getRes1 = (searchTerm) => {
  return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchTerm+'&interval=1min&apikey=GQBU0ZPN342PFXI9')
}

export const getNewsAndStock = (searchTerm) => {
  console.log('im inside getNews actions')
  let res = []
  return (dispatch) => {
  axios.all([getNews1(searchTerm), getRes1(searchTerm)])
  //res2 is an object , res 1 is an array
.then(axios.spread((res1, res2) => {
  // let temp = []
  // //Converting Array to Object
  // const arrayToObject = (array) => {
  //   return array.reduce((obj, item) => {
  //     obj[item.title] = item
  //     console.log(obj)
  //     return obj
  //   }, {})
  // }
  // let newsResult =  arrayToObject(res1.data.data);
  let newsResult = res1.data
  let stockResult = res2.data;
  console.log(newsResult)
  dispatch(displayNewsAndStock(newsResult, stockResult))
}))
.catch(error => console.log(error));
}
}
