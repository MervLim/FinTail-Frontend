
export const addTotalPrice = (price, volume) =>{
  console.log('im inside addTotalPrice actions')
  return {
    type: 'ADD_TOTAL_PRICE',
    price,
    volume
  };
}

export const storeEntryPrice = (entryprice) => {
  return {
    type: "STORE_ENTRY_PRICE",
    entryprice
  }

/*EntryPrice*/

export const postEntryPrice = (user_id) => {
  return (dispatch) => {
    axios.put('/stock/' + user_id)
      .then( (response) => {
        console.log(response.data);


      })
      .catch((error)=> {
        console.error("User Entry Price Not Posted in Server")
      });
  }
}
