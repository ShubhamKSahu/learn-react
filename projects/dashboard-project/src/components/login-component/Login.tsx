import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../dashboard-component/Dashboard';

function Login() {
const [username, setUsername] = useState<string>('');
const [password, setPassword] = useState('');
const navigate= useNavigate();
function handleSubmit(e: React.FormEvent){
e.preventDefault();
navigate('/dashboard')
}
  return (
    <div id="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
