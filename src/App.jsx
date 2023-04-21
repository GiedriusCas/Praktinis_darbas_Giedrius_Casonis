import './styles/reset.css';
import './styles/App.css';
import Grid from './components/ui/grid/Grid';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddShopPage from './pages/AddShopPage';
import ShopsPage from './pages/ShopsPage';
import Header from './components/layout/Header';
import Feedback from './components/ui/feedback/Feedback';


function App() {
  return (
    <div className="container">
      <Header />
      <Feedback />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/regist' element={<RegisterPage />}/>
        <Route path='/add' element={<AddShopPage />}/>
        <Route path='/shops' element={<ShopsPage />}/>
      </Routes>
    </div>
  );
}
export default App;
