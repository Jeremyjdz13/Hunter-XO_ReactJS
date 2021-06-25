import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function PowersTalismansPowerStunts(props) {
    const {
        powers,
        talismans,
        powerStunts
    } = props
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="4" className="card-toggle-header">
                <span>Powers &amp; Talismans &amp; Power Stunts</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <Card.Body>
                    <div className="title-parent_container cRow">
                        <div className="">
                            <h4>Powers</h4>
                            {powers.map(power => {
                                return <List key={power.id} {...power} />
                            })}
                        </div>
                        <div>
                            <h4>Talismans</h4>
                            {talismans.map(talisman => {
                                return <List key={talisman.id} {...talisman} />
                            })}
                        </div>
                    </div>
                    <div className="title-parent_container">
                        <h4>Power Stunts</h4>
                        <div className="power_stunt-container">
                           {powerStunts.map(powerStunt => {
                            return <List key={powerStunt.id} {...powerStunt} />
                        })}
                          
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}