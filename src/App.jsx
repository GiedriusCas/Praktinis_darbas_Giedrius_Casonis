import './styles/reset.css';
import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddShopPage from './pages/AddShopPage';
import ShopsPage from './pages/ShopsPage';
import Header from './components/layout/Header';
import Feedback from './components/ui/feedback/Feedback';
import { useAuthCtx } from './store/AuthProvider';


function App() {
  const {isLoggedIn} = useAuthCtx();
  return (
    <div className="">
      <Header />
      <Feedback />
      <Routes>       
        <Route path='/' element={<LoginPage />}/>
        <Route path='/regist' element={<RegisterPage />}/>
        <Route path='/add' element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/'}/>}/>
        <Route path='/shops' element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/'}/>}/>
      </Routes>
    </div>
  );
}
export default App;
