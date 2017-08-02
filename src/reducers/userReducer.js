const initialState = {
  isAuth: false,
  user: {},
  lineChart:{},
  doughnutChart:[],
  networthChart:[]
}


const User = (state = initialState, action) => {
  switch (action.type) {

    case 'STORE_USER':
      return {
        ...state,
        user: action.user,
        isAuth: true
      }
      break;

    case 'LOGOUT_USER':
      return {
        ...state,
         isAuth:false,
        user: {}
      }
    case 'GET_DASHBOARD':
     return {
       ...state,
       doughnutChart: action.user.doughnutChart,
       lineChart: action.user.lineChart
     }
    default:
    return state
  }
}


export default User;
//user:action.user
