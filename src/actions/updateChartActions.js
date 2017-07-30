
export const addTotalPrice = (price, volume) =>{
  console.log('im inside addTotalPrice actions')
  return {
    type: 'ADD_TOTAL_PRICE',
    price,
    volume
  };
}

export const storeEntryPriceAndTickr = (entryPrice,tickr) => {
  return {
    type: "STORE_ENTRY_PRICE_TICKR",
    entryPrice,
    tickr
  };
}


/*Store Entry Price and tickr */

export const postEntryAndTickr = (entryPrice) => {
  return (dispatch) => {
    axios.put('/stock/' ,entryPrice)
      .then( (response) => {
        console.log(response.data);
          dispatch(storeEntryPriceAndTickr(response.data));
      })
      .catch((error)=> {
        console.error("User Entry Price And Tickr Not Posted in Server")
      });
  }
}
