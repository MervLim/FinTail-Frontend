const initialState = {
  totalPrice: '',
  volume:'',
  tickr:'',
  entryPrice:''
}

const updateChartReducer = (state = initialState, action)=>{
  console.log('im inside UpdateChart Reducer!')
  switch (action.type) {

     case 'ADD_TOTAL_PRICE':

       return {
         ...state,
        totalPrice: action.price,
        volume: action.volume
       }
     break;

     case 'STORE_ENTRY_PRICE_TICKR':
       return {
         ...state,
         entryPrice:action.entryPrice
         tickr : action.tickr
       }
     break;

    default:
       return state
   }
 }

export default updateChartReducer;
