import Auth from 'j-toker';

export const registerUser = (email, password, passwordConfirmation, history) => {
  return(dispatch) => {
    Auth.emailSignUp({
      email,
      password,
      password_confirmation: passwordConfirmation
    }).then( user => {
      dispatch({ type: 'LOGIN', user: user.data });
      history.push('/');
    }).fail( res => {
      // TODO: handle errors client side
      debugger
    });
  }
}

export const handleLogout = (history) => {
  // make a request to log the user out
  // dispatch a POJO to log the user out of our redux state
  // push the user with history to the /login route
  return(dispatch) => {
    Auth.signOut()
      .then( res => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      });
    }
}

export const handleLogin = (email, password, history) => {
  return(dispatch) => {
    Auth.emailSignIn({
      email,
      password
    }).then( user => {
      // dispatch the login action
      // push the user to the home page
      dispatch({ type: 'LOGIN', user: user.data });
      history.push('/');
    }).fail( res => {
      // TODO: handle errors for the client
      debugger
    })
  }
}
