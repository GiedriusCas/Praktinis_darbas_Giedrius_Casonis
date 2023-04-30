import React, { createContext, useContext, useEffect, useState } from 'react';

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
  });
  const { show, msg } = feedback;
  useEffect(() => {
    if (show === true && msg !== 'Loading') {
      setTimeout(() => {
        setFeedback({
          show: false,
          msg: '',
          type: '',
        });
      }, 2500);
    }
  }, [show, msg]);

  const ui = {
    showSuccess(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Success',
        type: 'success',
      });
    },
    showError(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Klaida',
        type: 'error',
      });
    },
    showLoading() {
      setFeedback({
        show: true,
        msg: 'Loading',
        type: 'info',
      });
    },
    closeAlert() {
      setFeedback({
        show: false,
        msg: '',
        type: '',
      });
    },
  };

  const isLoggedIn = !!user;
  function login(userObj) {
    setUser(userObj);
    ui.showSuccess('User logged in');
  }
  function logout() {
    setUser(null);
    ui.showSuccess('User logged out');
  }
  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    isLoggedIn,
    login,
    logout,
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
