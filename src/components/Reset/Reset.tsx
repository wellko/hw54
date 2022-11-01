import React from "react";

interface resetProps {
    action: React.MouseEventHandler;
}

const Reset = (props: resetProps) => {
    return (
        <div>
            <button type="button" className='reset_btn' onClick={props.action}>Reset</button>
        </div>
    )
}

export default Reset;