const User = (state = {isAuth: false}, action) => {
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
    default:
    return state
  }
}


export default User;
//user:action.user
