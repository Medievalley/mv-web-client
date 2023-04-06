import { useEffect } from 'react';
import './Login.css';

const Login: React.FC = () => {
	useEffect(() => {
		document.title = 'Login';
	}, [])

	return <div>
		<div className="login">
			<div className="login-form">
				<div className="login-form__label label">
					<div className="label__icon">
						<img src={require("../../img/sword.png")} alt="Login" />
					</div>
					<div className="label__text">
						Welcome back!
					</div>
				</div>
				<div className="login-form__form form">
					<input type="text" name="username" placeholder="Username" autoComplete="off" />
					<input type="password" name="password" placeholder="Password" autoComplete="off" />
					<button type="button">Login</button>
				</div>
				<div className="login-form__footer footer">
					<a href="#" className="footer__forgot-password">Forgot your password?</a>
					<a href="#" className="footer__sign-up">Don’t have an account? <span className="footer__get-started">Get started</span>
					</a>
				</div>
			</div>
		</div>
	</div>
};

export { Login };