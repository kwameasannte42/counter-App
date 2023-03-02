import React from 'react'

const Plus = (props) => {
    const {countUp} = props
     
    return (
        <div>
            <button className='button' onClick = {countUp}>Add</button>
        </div>
    )
}

export default Plus