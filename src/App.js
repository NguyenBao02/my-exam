import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/header';

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container py-5'>
        <div className='navbar-container'>

        </div>

        <div className='content-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
