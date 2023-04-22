import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function RegisterPage() {
const { ui } = useAuthCtx();
const navigate = useNavigate();

  function registFireBase({ email, password }) {
    ui.showLoading();
    console.log('email, password ===', { email, password });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
        ui.showSuccess();
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error.message ===', error.message);
        // ..
      });
  }
  return (
    <div>
      <h1>RegisterPage</h1>
      <p>This is Registerpage</p>
      <RegisterForm onRegister={registFireBase} />
      <Link to={'/'}>Have account? Login here...</Link>
    </div>
  );
}

export default RegisterPage;
