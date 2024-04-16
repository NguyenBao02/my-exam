import { Link } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/header';

const App = () => {
  return (
    <div className="App">
      <Header />
      Test
      <hr />
      <div>
        <button>
          <Link to="/user">User</Link>
        </button>
        <button>
          <Link to="/admin">Admin</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
