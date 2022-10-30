import React from "react";

const Counter = (count: count) => {
	return (
		<div>
			<span>{count.counter}</span>
		</div>
	)
}

interface count {
	counter:number
}

export default Counter