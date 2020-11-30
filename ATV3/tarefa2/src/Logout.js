import logo from './logout.jpg';

const Logout = (props) => {
	const situacao = () => {
		props.onClick();
	}
	
	return (
		<div className="Logout">
			<img src={logo} alt="Logout"></img>
			<p>Bem-vindo!</p>
			<button onClick={situacao}>Logout</button>
		</div>
	)
}

export default Logout;