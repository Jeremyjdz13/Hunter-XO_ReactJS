import React from 'react'
import Description from './Description'
import Value from './Value'

export default function List(props) {
    const {
        name,
        rank,
        description,
        value
    } = props

    return (
        <div className="">
            <div>
                <span className="list_name">{name}:</span>  <span className="list_rank">{rank}{value && <Value  value={value} />}</span>
            </div>
            <div>
                {description && <Description description={description} />}
            </div>
            
        </div>
    )
}