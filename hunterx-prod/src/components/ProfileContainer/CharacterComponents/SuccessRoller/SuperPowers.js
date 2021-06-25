import React from 'react'


export default function SuperPowers(props) {
    const {
        id,
        name,
        rank,
        handleRank
    } = props


    return (
        <button className="d100_column-buttons super_powers-buttons" id={id} value={rank} name={name} onClick={(e) => handleRank(e)}>{name} {rank}</button>
    )
}
