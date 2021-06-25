import React, { useContext } from 'react'
import { useCharacter } from '../../../contexts/CharacterContext'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import AttributesAccordionCard from './AccordionComponents/AttributesAccordionCard'
import SkillsAccordionCard from './AccordionComponents/SkillsAccordionCard'
import BackgroundsMeritsFlaws from './AccordionComponents/BackgroundsMeritsFlaws'
import PowersTalismansPowerStunts from './AccordionComponents/PowersTalismansPowerStunts'
import HealthProtoniumCounters from './AccordionComponents/HealthProtoniumCounters'
import EquipmentCard from './AccordionComponents/EquipmentCard'

export default function CharacterCard(props) {
    const {
        id,
        name,
        alias,
        nature,
        primaryAttributes,
        secondaryAttributes,
        combatSkills,
        physicalSkills,
        professionalSkills,
        mentalSkills,
        backgrounds,
        merits,
        flaws,
        powers,
        talismans,
        powerStunts,
        bashingCounter,
        lethalCounter,
        protoniumCounter,
        equipmentItems
    } = props

    const {handleCharacterSelect, handleCharacterSelectSuccessRoller, handleCharacterDelete} = useCharacter()

    function handleDeleteWarning(id, name) {
        const answer = window.confirm(`"Are you sure you want to delete? ${name}"`)

        if(answer){
            handleCharacterDelete(id)
        } else{

        }
        
    }

    return (
        <div className="left-container">
            <div className="secondary_buttons-main_container">
                <button onClick={() => handleDeleteWarning(id, name) }  className="secondary_buttons-main">Delete</button>
                <button onClick={() => handleCharacterSelectSuccessRoller(id)}  className="secondary_buttons-main">Fate O'Meter</button>
                <button onClick={() => handleCharacterSelect(id)}  className="secondary_buttons-main">Edit</button>
            </div>
            <Accordion className="character-card-accordion_container">
                <Card className="character-card">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="cRow character-card_header">
                        <div className="cRow"> 
                            <span className="character-card-title">{name} : {alias}</span> 
                            <span className="character-card-title_nature">Nature</span>
                            <span className="character-card-nature">{nature}</span>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="black-background">
                            <Accordion className="">
                                <AttributesAccordionCard 
                                    key={secondaryAttributes.id} 
                                    secondaryAttributes={secondaryAttributes} 
                                    primaryAttributes={primaryAttributes} 
                                />
                                <SkillsAccordionCard 
                                    key={combatSkills.id}
                                    combatSkills={combatSkills}
                                    physicalSkills={physicalSkills}
                                    professionalSkills={professionalSkills}
                                    mentalSkills={mentalSkills}
                                />
                                <BackgroundsMeritsFlaws
                                    key={backgrounds.id}
                                    backgrounds={backgrounds}
                                    merits={merits}
                                    flaws={flaws}
                                />
                                <PowersTalismansPowerStunts 
                                    key={powers.id}
                                    powers={powers}
                                    talismans={talismans}
                                    powerStunts={powerStunts}
                                />
                                <HealthProtoniumCounters
                                    key={bashingCounter.id}
                                    bashingCounter={bashingCounter}
                                    lethalCounter={lethalCounter}
                                    protoniumCounter={protoniumCounter}
                                    maxProtonium={secondaryAttributes[5]} 
                                />
                                <EquipmentCard 
                                    key={equipmentItems.id}
                                    equipmentItems={equipmentItems}
                                />
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}