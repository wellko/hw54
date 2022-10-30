import React, {useState}  from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Counter from "./components/Counter/counter";
import Reset from "./components/Reset/Reset";


function App() {
	let countNumber = 0;

	const [count, setCount] = useState(countNumber);

	const createItems = () => {
		const result = [];
		const random = Math.floor(Math.random() * 36)
		for (let i = 0; i < 36; i++) {
			if (i === random) {
				result.push({hasItem: true, clicked: false, id: i, click: ()=> open(i)})
			} else {
				result.push({hasItem: false, clicked: false, id: i, click: ()=> open(i)})
			}
		}
		return result;
	}

	const [items, setItems] = useState(createItems());


	const resetAction = () =>{
		setItems(createItems);
		countNumber = 0;
		setCount(countNumber);
		console.log(items)
	}

	const open = (index:number) => {
		let itemsCopy = [...items];
		const rightItem = itemsCopy.find(item => item.id === index)!
		if (!itemsCopy[itemsCopy.indexOf(rightItem)].clicked){
			itemsCopy[itemsCopy.indexOf(rightItem)].clicked = true;
			setItems(itemsCopy);
			countNumber++;
			setCount(countNumber);
			if (itemsCopy[itemsCopy.indexOf(rightItem)].hasItem){
				alert('Win!')
				for (let i = 0; i < 36; i++){
					itemsCopy[i].clicked = true;
					setItems(itemsCopy);
				}
			}
		}
	}

	return (
		<div className="App">
			<Board cells={items}/>
			<Counter counter={count} />
			<Reset action={resetAction}/>
		</div>
	);
}

export default App;
