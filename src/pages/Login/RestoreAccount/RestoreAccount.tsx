import { Link } from "react-router-dom";
import styles from './../../Login/Login.module.css';
import stylesRestore from "./RestoreAccount.module.css"
import { useState } from "react";
import cn from 'classnames';

const RestoreAccount: React.FC = () => {
	let [buttonClicked, setButtonClicked] = useState<boolean>(false);
	let [email, setEmail] = useState<string>("");

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

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
				{!buttonClicked
					? <div className={cn(styles.login_form, stylesRestore.login_form)}>
						<label htmlFor="restore">Enter your email address to receive a password recovery link.</label>
						<input onChange={onChangeHandler} type="email" name="restore" placeholder="Email" autoComplete="off" />
						<button type="button" onClick={() => { email.trim().length && setButtonClicked(true) }}>Proceed</button>
					</div>
					: <div className={cn(styles.login_form, stylesRestore.linkSent)}>
						<p>The link has been sent to your email!</p>
					</div>
				}
				<div className={styles.login_footer}>
					<Link to="/login" className={cn(styles.login_footer_right, stylesRestore.login_footer_right)}>
						Back to <span>Log In</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RestoreAccount;