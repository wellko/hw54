import React from "react";
import Cell from "../Cell/Cell";

interface PropsBoard {
    cells: Cells[]
}

interface Cells {
    hasItem: boolean,
    clicked: boolean,
    click: React.MouseEventHandler;
}


const Board: React.FC<PropsBoard> = (props) => {
    const cells = (props.cells.map((item, i) => (
            <Cell hasItem={item.hasItem} clicked={item.clicked} key={i} click={item.click}/>
        ))
    )

    return (
        <div className='board'>
            {cells}
        </div>
    )
}


export default Board