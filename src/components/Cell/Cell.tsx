import React from "react";

interface PropsForCell {
    hasItem: boolean,
    clicked: boolean,
    click: React.MouseEventHandler;
}

const Cell: React.FC<PropsForCell> = (props) => {
    const styles = [''];

    if (props.hasItem) {
        styles.push('item');
    }

    if (props.clicked) {
        styles.push('opened');
    } else {
        styles.push('closed');
    }

    return (
        <div className={styles.join(' ')} onClick={props.click}>

        </div>
    )
}


export default Cell

