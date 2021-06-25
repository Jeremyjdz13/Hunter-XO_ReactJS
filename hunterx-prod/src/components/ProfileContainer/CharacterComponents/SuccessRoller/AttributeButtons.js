import React from 'react'

export default function AttributeButtons(props) {
    const {
        name,
        handleRank
    } = props
    return (
        <div>
            <button className="" id={name} value={name} name={name} onClick={(e) => handleRank(e)}>{name}</button>
        </div>
    )
}
