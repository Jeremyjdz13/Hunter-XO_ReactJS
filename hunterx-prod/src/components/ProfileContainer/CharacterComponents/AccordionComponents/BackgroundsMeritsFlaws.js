import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function BackgroundsMeritsFlaws(props) {
    const {
        backgrounds,
        merits,
        flaws
    } = props
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="3" className="card-toggle-header">
                <span>Backgrounds &amp; Merits &amp; Flaws</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body className="grid-titles">
                    <div className="title-parent_container">
                        <span>Backgrounds</span>
                        {backgrounds.map(background => {
                            return <List key={background.id} {...background} />
                        })}
                    </div>
                    <div className="title-parent_container">
                        <div>
                            <span>Merits</span>
                            {merits.map(merit => {
                                return <List key={merit.id} {...merit} />
                            })}
                        </div>
                        <div>
                            <span>Flaws</span>
                            {flaws.map(flaw => {
                                return <List key={flaw.id} {...flaw} />
                            })}
                        </div>
                    </div>
                    
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}