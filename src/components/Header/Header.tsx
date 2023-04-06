import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Medievalley</h1>
        <div className={styles.user}>
          {isAuth ? (
            <>
              <div className={styles.userPic}></div>
              <p className={styles.username}>{email}</p>
              <p> | </p>
              <button onClick={() => dispatch(removeUser())} className={styles.logOutButton}>Log Out</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
