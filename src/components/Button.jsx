import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='btn px-5'>
            <p>{text}</p>
        </button>
    )
}
