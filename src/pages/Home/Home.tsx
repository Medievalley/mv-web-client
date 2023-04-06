import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import infinity from "../../img/home/infinity.svg";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

const Home: React.FC = () => {
  const { isAuth, username } = useAuth();

  return (
    <>
      <Header />
      <div className={styles.home}>
        <section className={styles.lives}>
          <h2 className={styles.section_title}>Lives</h2>
          <ul className={styles.lives_items}>
            <li className={styles.lives_item}>
              <p className={styles.lives_quantity}>1</p>
              <p className={styles.lives_price}>2$</p>
            </li>
            <li className={styles.lives_item}>
              <p className={styles.lives_quantity}>2</p>
              <p className={styles.lives_price}>3$</p>
            </li>
            <li className={styles.lives_item}>
              <p className={styles.lives_quantity}>5</p>
              <p className={styles.lives_price}>7$</p>
            </li>
            <li className={styles.lives_item}>
              <img
                className={styles.lives_quantity}
                src={infinity}
                alt="Infinity"
              />
              <p className={styles.lives_price}>12$</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
