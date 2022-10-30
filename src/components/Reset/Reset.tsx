import React from "react";

const Reset = (props:resetProps) => {
	return (
		<div>
			<button type="button" onClick={props.action}>Reset</button>
		</div>
	)
}

interface resetProps {
	action: React.MouseEventHandler;
}

export default Reset;