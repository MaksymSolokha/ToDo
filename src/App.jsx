import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import Newtask from './components/Newtask/Newtask';
import TasksValue from './components/TasksValue/TasksValue';
import Task from './components/Task/Task';
import './App.scss';
import Empty from './components/Empty/Empty';

function App() {
	const getLocalItems = () => {
		const list = localStorage.getItem('lists');
		if (list) {
			JSON.parse(localStorage.getItem('lists'));
			return JSON.parse(localStorage.getItem('lists'));
		}
		return [];
	};
	const [task, setTask] = useState('');
	const [items, setItems] = useState(getLocalItems());

	const handleChange = (item) => {
		setTask(item);
	};

	const calcCompletedItem = () => {
		let count = 0;
		items.forEach((item) => {
			if (item.checked) {
				count += 1;
			}
		});
		return count;
	};

	const [checkedValue, setCheckedValue] = useState(calcCompletedItem());

	useEffect(() => setCheckedValue(calcCompletedItem()), [items]);

	const addItem = () => {
		if (!task) {
			console.log('Error');
		} else {
			const newItems = {
				id: uuidv4(),
				text: task,
				checked: false,
			};
			setItems([...items, newItems]);
			setTask('');
		}
	};
	const deleteItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};
	const toggleCheckbox = (id) => {
		const index = items.findIndex((item) => item.id === id);
		const newItems = [...items];
		newItems[index].checked = !newItems[index].checked;
		setItems(newItems);
	};

	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(items));
	}, [items]);

	const itemsLength = items.length;

	return (
		<div className="App">
			<Header />
			<div className="App__container">
				<Newtask onClick={addItem} onChange={handleChange} value={task} />
				<TasksValue completedItems={checkedValue} length={itemsLength} />
				{itemsLength === 0 ? <Empty />
					: <Task toggle={toggleCheckbox} items={items} deleteItem={deleteItem} /> }

			</div>
		</div>
	);
}

export default App;
