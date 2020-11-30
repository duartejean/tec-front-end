import logo from './login.png';

const Login = (props) => {
	const situacao = () => {
		props.onClick();
	}

	return (
		<div className="Login">
			<img src={logo} alt="Login"></img>
			<p>Você não está logado, faça seu login!</p>
			<button onClick={situacao}>Login</button>
		</div>
	)
}

export default Login;