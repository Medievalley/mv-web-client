import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./../Login/Login.module.css";
import stylesRegister from "./Register.module.css";
import cn from "classnames";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
	const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const dispatch = useDispatch();

  const handleSignUp = (
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    const isPasswordsMatch = password === repeatPassword;
    if (isPasswordsMatch) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          dispatch(
            setUser({
              email: user.email,
              username: user.displayName,
              token: user.refreshToken,
              id: user.uid,
						}));
						navigate('/');
					})
        .catch(console.error);
    } else {
      alert("Passwords don’t match!");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_modal}>
        <div className={styles.login_label}>
          <div className={styles.login_label_icon}>
            <img src={require("../../img/axe.png")} alt="Sign Up" />
          </div>
          <div className={styles.login_label_text}>New User</div>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Repeat Password"
            autoComplete="off"
          />
          <button
            onClick={() => handleSignUp(email, password, repeatPassword)}
            type="button"
          >
            Sign Up
          </button>
        </form>
        <div className={styles.login_footer}>
          <Link
            to="/login"
            className={cn(
              styles.login_footer_right,
              stylesRegister.login_footer_right
            )}
          >
            Already have an account? <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
