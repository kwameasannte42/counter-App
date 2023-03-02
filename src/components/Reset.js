import React from 'react'

const Reset = (props) => {
    const { reset } = props

    return (
        <div>
            <button className='reset' onClick = {reset}>Reset</button>
        </div>
    )
}

export default Reset