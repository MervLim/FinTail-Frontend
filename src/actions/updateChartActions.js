
export const addTotalPrice = (price, volume) =>{
  console.log('im inside addTotalPrice actions')
  return {
    type: 'ADD_TOTAL_PRICE',
    price,
    volume
  };
}
