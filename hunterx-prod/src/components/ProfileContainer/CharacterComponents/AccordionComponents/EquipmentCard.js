import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function EquipmentCard(props) {
    const {
        equipmentItems
    } = props
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="6" className="card-toggle-header">
                <span>Equipment Inventory</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
                <Card.Body>
                    <div className="title-parent_container">
                        <span>Equipment Items</span>
                        {equipmentItems.map(item => {
                            return <List key={item.id} {...item} />
                        })}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}