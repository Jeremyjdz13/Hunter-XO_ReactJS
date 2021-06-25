import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function SkillsAccordionCard(props) {
    const {
       combatSkills,
       physicalSkills,
       professionalSkills,
       mentalSkills
    } = props
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="2" className="card-toggle-header">
                <span>Skills</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <Card.Body className="grid-titles">
                    <div className="title-parent_container">
                        <span>Combat</span>
                        {combatSkills.map(skill => {
                            return <List key={skill.id} {...skill} />
                        })}
                    </div>
                    <div className="title-parent_container">
                        <span>Physical</span>
                        {physicalSkills.map(skill => {
                            return <List key={skill.id} {...skill} />
                        })}
                    </div>
                    <div className="title-parent_container">
                        <span>Professional</span>
                        {professionalSkills.map(skill => {
                            return <List key={skill.id} {...skill} />
                        })}
                    </div>
                    <div className="title-parent_container">
                        <span>Mental</span>
                        {mentalSkills.map(skill => {
                            return <List key={skill.id} {...skill} />
                        })}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}