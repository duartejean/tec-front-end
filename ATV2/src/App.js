import Entrada from './Entrada';
import Saida from './Saida';
import './App.css';
import { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<Entrada />
				<Saida nome="Jean Duarte" />
			</div>
		);
	}
}

export default App;