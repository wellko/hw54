import React, {useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Counter from "./components/Counter/counter";
import Reset from "./components/Reset/Reset";


function App() {
	const createItems = () => {
		const result = [];
		const random = Math.floor(Math.random() * 36)
		for (let i = 0; i < 36; i++) {
			if (i === random) {
				result.push({hasItem: true, clicked: false, id: i, click: () => open(i)})
			} else {
				result.push({hasItem: false, clicked: false, id: i, click: () => open(i)})
			}
		}
		return result;
	}

	const [items, setItems] = useState(createItems());

	const open = (index: number) => {
		const itemsCopy = [...items];
		const rightItem = itemsCopy.find(item => item.id === index)!

		if (!itemsCopy[itemsCopy.indexOf(rightItem)].clicked) {
			itemsCopy[itemsCopy.indexOf(rightItem)].clicked = true;
			setItems(itemsCopy);
			setCount(count + 1);
			console.log(count)
			if (itemsCopy[itemsCopy.indexOf(rightItem)].hasItem) {
				alert('Win!')
				for (let i = 0; i < 36; i++) {
					itemsCopy[i].clicked = true;
					setItems(itemsCopy);
				}
			}
		}
	}


	const resetAction = () => {
		const itemsCopy = [...items];
		const newBoard = createItems();
		itemsCopy.map((el, i) => {
			el.clicked = newBoard[i].clicked;
			el.hasItem = newBoard[i].hasItem;
		})
		setItems(itemsCopy);
		setCount(0);
	}

	const [count, setCount] = useState(0);


	return (
		<div className="App">
			<Board cells={items}/>
			<Counter counter={count}/>
			<Reset action={resetAction}/>
		</div>
	);
}

export default App;
