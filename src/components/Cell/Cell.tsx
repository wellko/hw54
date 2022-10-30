import React from "react";

const Cell:React.FC<PropsForCell> = (props) =>{
	const styles = [''];

	if (props.hasItem){
		styles.push('item');
	}

	if (props.clicked){
		styles.push('opened');
	}else {
		styles.push('closed');
	}

return(
	<div className={styles.join(' ')} onClick={props.click}>

	</div>
)
}

interface PropsForCell {
	hasItem: boolean, clicked: boolean, click?: React.MouseEventHandler;
}

export default Cell

