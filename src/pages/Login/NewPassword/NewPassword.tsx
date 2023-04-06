import { useEffect } from "react";
import styles from './../../Login/Login.module.css';

const NewPassword: React.FC = () => {
	useEffect(() => {
		document.title = "Restore Password"
	}, []);

	return (
		<div className={styles.login}>
			<div className={styles.login_modal}>
				<div className={styles.login_label}>
					<div className={styles.login_label_icon}>
						<img src={require("../../../img/shovel.png")} alt="Login" />
					</div>
					<div className={styles.login_label_text}>
						Restore Password
					</div>
				</div>
				<div className={styles.login_form}>
					<input type="password" name="password" placeholder="New Password" autoComplete="off" />
					<input type="password" name="repeatPassword" placeholder="Repeat Password" autoComplete="off" />
					<button type="button">Proceed</button>
				</div>
			</div>
		</div>
	);
};

export default NewPassword;