import './Login.css'

function Login() {
  return (
    <div id="login-form">
      <form>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
