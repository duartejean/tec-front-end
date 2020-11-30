import React, { useState } from 'react';
import './Texto.css';

const Texto = () => {
	const [caracteres, setCaracteres] = useState(0);

	const contaCaracteres = (e) => {
		setCaracteres(e.target.value.length);
	}

	return (
		<div className="input">
			<input type="text" className="input-text" onChange={contaCaracteres}></input>
			<p>Esse texto contém {caracteres} caracteres.</p>
		</div>

	)
}

export default Texto;