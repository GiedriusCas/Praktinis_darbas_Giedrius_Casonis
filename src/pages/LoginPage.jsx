import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function LoginPage() {
  const { login, ui } = useAuthCtx();
  
  function loginUser({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login success user ===', user);
        login( user );
        ui.showSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
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
