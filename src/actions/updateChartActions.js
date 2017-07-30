
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

export const postEntryPrice = (event_id, guest) => {
  return (dispatch) => {
    axios.put('/event/guest/' + event_id, guest)
      .then( (response) => {
        console.log(response.data);


      })
      .catch((error)=> {
        console.error("guest not posted to server'")
      });
  }
}
