import React from 'react'

const Minus = (props) => {
    const {countDown} = props

    return (
        <div>
            <button className='button2' onClick = {countDown}>Subtract</button>
        </div>
    )
}

export default Minus