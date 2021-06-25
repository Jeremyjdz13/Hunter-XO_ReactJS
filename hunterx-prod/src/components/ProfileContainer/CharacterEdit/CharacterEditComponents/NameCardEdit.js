import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

export default function EditCard(props) {
    const {
        id,
        name,
        alias,
        nature,
        handleChange,
    } = props

    return (
        <Card  className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey={id}>
                <span>Name Alias &amp; Nature Character</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
                <Card.Body className="dark-background">
                    <div className="edit_input-container">
                        <div>
                            <label htmlFor="name" className="input_titles">Name</label>
                            <input 
                                type="text"
                                name="name"
                                id={name}
                                value={name}
                                onChange={e => handleChange( {name: e.target.value })}
                                className="character-edit__input"
                                />
                        </div>
                        <div className="cRow">
                            <div>
                                <label htmlFor="alias" className="input_titles">Alias</label>
                                <input 
                                    type="text"
                                    name="alias"
                                    id={alias}
                                    value={alias}
                                    onChange={e => handleChange( {alias: e.target.value })}
                                    className="character-edit__input"
                                    />
                            </div>
                            <div>
                                <label htmlFor="nature" className="input_titles">Nature</label>
                                <input 
                                    type="text"
                                    name="nature"
                                    id={nature}
                                    value={nature}
                                    onChange={e => handleChange( {nature: e.target.value })}
                                    className="character-edit__input"
                                    />
                            </div>
                        </div>
                    </div>
                  
                    
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}