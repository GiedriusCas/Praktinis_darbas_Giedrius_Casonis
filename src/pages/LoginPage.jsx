import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function LoginPage() {
  const { login, ui } = useAuthCtx();
  const navigate = useNavigate();
  
  function loginUser({ email, password }) {
    ui.showLoading();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login success user ===', user);
        login( user );
        navigate('/shops')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ui.showError(errorMessage)
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is Loginpage</p>
      <LoginForm onLogin={loginUser} />
      <Link to={'/regist'}>New user? Regist here...</Link>
    </div>
  );
}

export default LoginPage;
