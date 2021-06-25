import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function AttributesAccordionCard(props) {
    const {
       secondaryAttributes,
       primaryAttributes
    } = props
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="1" className="card-toggle-header">
                <span>Primary &amp; Secondary Attributes</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body className="grid-titles" >
                    <div className="title-parent_container">
                        <span>Primary Attributes</span>
                        {primaryAttributes.map(attribute => {
                            return <List key={attribute.id} {...attribute} />
                        })}
                    </div>
                    <div className="title-parent_container">
                        <span>Secondary Attributes</span>
                        {secondaryAttributes.map(attribute => {
                            return <List key={attribute.id} {...attribute} />
                        })}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}