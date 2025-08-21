import Counter from './components/Counter';
import Header from '../src/components/Header'
import UserProfile from './components/UserProfile';
import Auth from '../src/components/Auth'
import { useSelector } from 'react-redux';
function App() {
  const isAuth = useSelector( state => state.auth.isAuthenticated)
  return (
    <div>
      {isAuth && <Header />}
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter />
    </div>
  );
}

export default App;
