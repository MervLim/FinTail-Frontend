import axios from 'axios';

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
