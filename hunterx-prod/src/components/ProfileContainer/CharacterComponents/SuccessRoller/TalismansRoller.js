import React from 'react'

export default function TalismansRoller(props) {
    const {
        id,
        name,
        rank,
        handleRank
    } = props
    return (
        <div>
            <button className="d100_column-buttons talisman-buttons" id={id} value={rank} name={name} onClick={(e) => handleRank(e)} >{name} {rank}</button>
        </div>
    )
}
