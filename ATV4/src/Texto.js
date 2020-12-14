import React from 'react';
import './Texto.css';

const Texto = (props) => {

	const handleKeyPress = (event) => {
		props.onKeyPress(event);
	}

	return (
		<div className="input">
			<p>Informe a tarefa (Pressione Enter para inserir)</p>
			<input type="text" className="input-text" onKeyPress={handleKeyPress}></input>
		</div>
	)
}

export default Texto;