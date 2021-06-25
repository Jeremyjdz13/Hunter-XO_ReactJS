import React from 'react'

export default function Pages(props) {
    const {
        id,
        pageTitle,
        paragraph,
        handleSelectPageParagraph
    } = props

    function handleClick(){
        handleSelectPageParagraph(undefined)
    }

    return (
        <div className="page-container book-body">
            <div className="cRow">
                <h5>{pageTitle}</h5> <button onClick={() => handleClick()} >Close</button>
            </div>
            <div>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}
