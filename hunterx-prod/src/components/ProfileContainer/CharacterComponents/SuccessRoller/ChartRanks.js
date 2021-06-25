import React from 'react'

export default function ChartRanks(props) {
    const {
        id,
        value,
        name,
        handleRank
    } = props

    return (
        <>
            <button className="success-buttons-modifiers" id={id} value={value} name={name} onClick={(e) => handleRank(e)} >{name} {value}</button>
        </>
    )
}
