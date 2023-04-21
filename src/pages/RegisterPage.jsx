import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function RegisterPage() {
  function registFireBase({ email, password }) {
    console.log('email, password ===', { email, password });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
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
      <Link to={'/login'}>Have account? Login here...</Link>
    </div>
  );
}

export default RegisterPage;
