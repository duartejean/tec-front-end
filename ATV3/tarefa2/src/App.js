import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';

const App = () => {
	const [status, setStatus] = useState(false);

	const situacao = () => {
		setStatus(!status);
	}

	return (
		<div className="App">
			{ status ? <Logout onClick={situacao} /> : <Login onClick={situacao} />}
		</div>
	)
}

export default App;
