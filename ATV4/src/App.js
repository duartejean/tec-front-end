import './App.css';
import Texto from './Texto';
import Lista from './Lista';
import { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [
	/* 	{
			id: 1,
			name: 'Teste 1',
		},
		{
			id: 2,
			name: 'Teste 2',
		}, */
]

const listReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				list: state.list.concat({ name: action.name, id: action.id }),
			};
		default:
			throw new Error();
	}
};

const App = () => {
	const [listData, dispatchListData] = useReducer(listReducer, {
		list: initialList,
		isShowList: true,
	});
	const [name, setName] = useState('');

	const handleChange = (event) => {
		setName(event.target.value);
	}

	const handleAdd = (event) => {
		if (event.key === 'Enter') {
			console.log('Enter')
			dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });

			setName('');
		}
	}

	return (
		<div className="App">
			<Texto onKeyPress={handleAdd} />
			<Lista list={listData.list} />
		</div>
	);
}

export default App;
