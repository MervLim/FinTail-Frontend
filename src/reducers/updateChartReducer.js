const initialState = {
  totalPrice: '',
  volume:''
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

    default:
       return state
   }
 }

export default updateChartReducer;
