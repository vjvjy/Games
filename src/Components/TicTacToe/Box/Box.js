import React, { useState } from 'react'
import './Box.css'

function Box(props) {

    const [text, setText] = useState('');
    function toggleText() {
        if (text === '') {
            setText(props.currentState)
            props.play(props.row, props.col);
        }
    }
    return (
        <div className='box' onClick={toggleText}>{text}</div>
    )
}

export default Box