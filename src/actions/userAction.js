import axios from 'axios';

const storeUser = (user) => {
  return {
    type: 'STORE_USER',
    user
  }
}


const loadingUserError = (error) => {
  return{
    type: 'LOADING_USER_ERROR',
    error
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
    .then( (response) => {
      dispatch(storeUser(response.data));
    })
    .catch((error) => {
      dispatch(loadingUserError(error));
    })
  }
}

export const localLogin = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/login', credentials)
    .then((response) => {
      const data = response.data;

      if(data.error){
        console.log(data.message);
        //notification if needed
      }else {
        console.error("AXIOS CALL: LOGGED IN /auth/login");
        window.location.href = "/dashboard";
      }
    })
    .catch((error) => {
      console.error("AXIOS CALL ERROR: Logged on '/auth/login");
      console.log(error);
    });
  }
}

export const localSignup = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/signup', credentials)
    .then((response) => {
      const data = response.data;
      if(data.error){
        console.log(data.message);
      //Notification if needed
      }else {
        console.error("AXIOS CALL:LOCAL SIGNUP '/auth/user'");
        window.location.href = "/";
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
