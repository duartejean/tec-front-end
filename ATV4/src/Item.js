import React from 'react';
import './Item.css';

const Item = props => {
	return (
		<li>
			<label className="checkbox">
				{props.texto}
				<input type="checkbox"></input>
				<span className="check"></span>
			</label>
		</li>
	)
}

export default Item;