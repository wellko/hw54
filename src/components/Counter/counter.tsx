import React from "react";

interface count {
    counter: number
}

const Counter = (count: count) => {
    return (
        <div className='counter'>
            <span> Tries: {count.counter}</span>
        </div>
    )
}


export default Counter