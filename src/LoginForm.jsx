import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
