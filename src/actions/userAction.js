import axios from 'axios';

const storeUser = (user) => {
  return {
    type: 'STORE_USER',
    user
  }
}

const USER_EXISTS= (user) => {
  return {
    type: 'USER_EXIST',
    user
  }
}

const USER_AUTH_FAIL = (error) =>{
  return{
    type:'USER_AUTH_FAIL',
    error
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        dispatch(storeUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
      });
  };
}

export const localLogin = (user) => {
  return (dispatch) => {
    axios.post('/auth/login', user)
      .then( (response) => {
        const data = response.data;
        dispatch(storeUser(data));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
      });
  };
}



export const localSignup = (user) => {
  return(dispatch) => {
    axios.post('/auth/signup', user)
    .then((response) => {
      const data = response.data;
      if(data.error){
        console.log(data.message);
      //Notification if needed
      }else {
        console.error("AXIOS CALL:LOCAL SIGNUP '/auth/user'");
      }
    })
    .catch((error) => {
      console.error("AXIOS CALL ERROR: LOCAL SIGN UP/auth/signup'");
      console.log('error: '+ error.message)
    });
  }
}



export const localLogout = () => {
  return (dispatch) => {
    axios.get('/auth/logout')
      .then( (response) => {
        const data = response.data;
        // RETURN USER FROM PASSPORT
        dispatch(getUser());
        if(data.error){
          console.log(data.message)
          //Notification if needed
        }else{
          console.error("AXIOS CALL: LOGGED OUT /auth/logout");
        }
      })
      .catch((error)=> {
        console.error("AXIOS CALL: CANNOT LOGOUT /auth/logout ");
      });
    }
}
