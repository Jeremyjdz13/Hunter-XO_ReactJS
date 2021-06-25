import React from 'react'

export default function PagesEdit(props) {
    const {
        page,
        handlePageChange,
        handlePageDelete
    } = props

    function handleChange( changes ){
        handlePageChange(page.id, {...page, ...changes })
    }
    return (
        <div className="">
            <div className="">
                <label htmlFor="pageTitle">Page Title</label>
                <input 
                    type="text"
                    name="pageTitle"
                    value={page.pageTitle}
                    onChange={(e) => handleChange( { pageTitle: e.target.value })}
                    className="character-edit__input" 
                />
            </div>
            <div>
                <label htmlFor="pageContent">Page Content</label>
                <textarea 
                    type="text"
                    name="pageContent"
                    value={page.paragraph}
                    onChange={(e) => handleChange( { paragraph: e.target.value })}
                    className="book-paragraph-edit__input"
                    >
                </textarea>
            </div>
            <button 
                    onClick={() => handlePageDelete(page.id)} 
                    className=""
                >
                    &times;
            </button>
        </div>
    )
}
