
import './App.css'
import { useState, useCallback } from 'react';
function App() {
 const [length, setLength] = useState(8);
 const [numAllowed, setNumAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [password, setPassword] = useState('');

 const passwordGenerator = useCallback(()=>{
const pswd = '';
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
if(numAllowed){
  str = str+ '0123456789'
}
if(charAllowed){
  str = str+ '~!@#$%^&*(){}?<>'
}

 }, [length, numAllowed, charAllowed])
  return (
    <div className="text-white password-container">
      <div className="password-field">
        <input type="text"></input>
        <button>copy</button>
      </div>
    </div>
  );
}

export default App
