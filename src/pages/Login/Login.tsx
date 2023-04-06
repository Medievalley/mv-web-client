import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            username: user.displayName,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_modal}>
        <div className={styles.login_label}>
          <div className={styles.login_label_icon}>
            <img src={require("../../img/sword.png")} alt="Login" />
          </div>
          <div className={styles.login_label_text}>Welcome back!</div>
        </div>
        <form className={styles.login_form}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <button onClick={() => handleLogin(email, password)} type="button">
            Login
          </button>
        </form>
        <div className={styles.login_footer}>
          <Link to="/restore" className={styles.login_footer_left}>
            Forgot your password?
          </Link>
          <Link to="/register" className={styles.login_footer_right}>
            Don’t have an account? <span>Get started</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
