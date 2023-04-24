import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth, googleProvider } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';
import './loginPage.scss';

function LoginPage() {
  const navigate = useNavigate();
  const { login, ui, setIsLoading } = useAuthCtx();
  function loginUser({ email, password }) {
    ui.showLoading();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login success user ===', user);
        login(user);
        setIsLoading(false);
        navigate('/shops');
      })
      .catch((error) => {
        const errorMessage = error.message;
        ui.showError(errorMessage);
        setIsLoading(false);
      });
  }
  function loginWithGoogle() {
    //
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log('user ===', user);
        login(user);
        setIsLoading(false);
        navigate('/shops');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('errorMessage ===', errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        ui.showError(errorMessage);
        setIsLoading(false);
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is Loginpage</p>
      <Link to={'/regist'}>New user? Register here...</Link>
      <LoginForm onLogin={loginUser} />
      <p>or</p>
      <button onClick={loginWithGoogle}>Login with Google account</button>
    </div>
  );
}

export default LoginPage;
