
import React from 'react'
import './BaseButton.css'
function BaseButton(props) {
    return(
        <button className='baseButton' type='{props.type}'>{props.text}
        </button>
    )
}
export default BaseButton