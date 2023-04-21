import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
  feedback: {
    show: false,
    msg: '',
    type: '',
  },
  ui: {},
});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: '',
    type: '',
  })

const ui = {
  showSuccess(){
  setFeedback({
    show: true,
    msg: 'Success',
    type: 'success',
  })
},
closeAlert(){
  setFeedback({
    show: false,
    msg: '',
    type: '',
  })
}
}

  const isLoggedIn = !!user
  function login(userObj){
    setUser(userObj);
  }
  const authCtx = {
    user,
    isLoading,
    isLoggedIn,
    login,
    feedback,
    ui,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
