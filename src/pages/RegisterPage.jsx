import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

function RegisterPage() {
const { ui, setIsLoading } = useAuthCtx();
const navigate = useNavigate();

  function registFireBase({ email, password }) {
    ui.showLoading();
    //console.log('email, password ===', { email, password });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log('user ===', user);
        ui.showSuccess();
        setIsLoading(false)
        navigate('/');
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        //console.log('error.message ===', error.message);
        // ..
        ui.showError(errorMessage)
        setIsLoading(false)
      });
  }
  
  return (
    <div className="container pageTop">
      <h1>Register page</h1>
      <h2>Fill in the form fields. If the entered data is incorrect, you will find warnings about what to correct under the input fields</h2>
      <Link to={'/'}>Have an account? Login here...</Link>
      <RegisterForm onRegister={registFireBase} />
      
    </div>
  );
}

export default RegisterPage;
