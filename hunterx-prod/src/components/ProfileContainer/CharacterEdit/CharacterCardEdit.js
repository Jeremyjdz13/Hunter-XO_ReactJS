import React, { useContext } from 'react'
import { useCharacter } from '../../../contexts/CharacterContext'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import { v4 as uuidv4 } from 'uuid'
import NameCardEdit from './CharacterEditComponents/NameCardEdit'
import SecondaryAttributeEdit from './CharacterEditComponents/SecondaryAttributeEdit'
import PrimaryAttributesEdit from './CharacterEditComponents/PrimaryAttributesEdit'
import PowerEdit from './CharacterEditComponents/PowerEdit'
import TalismanEdit from './CharacterEditComponents/TalismanEdit'
import PowerStuntEdit from './CharacterEditComponents/PowerStuntEdit'
import BackgroundsEdit from './CharacterEditComponents/BackgroundsEdit'
import MeritsEdit from './CharacterEditComponents/MeritsEdit'
import FlawsEdit from './CharacterEditComponents/FlawsEdit'
import EquipmentItemsEdit from './CharacterEditComponents/EquipmentItemsEdit'
import BashingCounterEdit from './CharacterEditComponents/BashingCounterEdit'
import ProtoniumCounterEdit from './CharacterEditComponents/ProtoniumCounterEdit'
import LethalCounterEdit from './CharacterEditComponents/LethalCounterEdit'
import CombatEdit from './CharacterEditComponents/CombatEdit'
import PhysicalEdit from './CharacterEditComponents/PhysicalEdit'
import ProfessionalEdit from './CharacterEditComponents/ProfessionalEdit'
import MentalEdit from './CharacterEditComponents/MentalEdit'




export default function CharacterCardEdit({ character }) {
    const { handleCharacterSelect, handleCharacterChange} = useCharacter()

    function handleChange( changes ){

        handleCharacterChange(character.id, { ...character, ...changes })

    }

    function handleSecondaryAttributeChange (id, attribute){
        const newSecondaryAttributes = [  ...character.secondaryAttributes  ]  // Makes a copy of attributes
        const index = newSecondaryAttributes.findIndex( i => i.id === id)
        newSecondaryAttributes[index] = attribute

        handleChange({secondaryAttributes: newSecondaryAttributes})

    }

    function handlePrimaryAttributeChange (id, attribute){
        const newPrimaryAttributes = [  ...character.primaryAttributes  ]  // Makes a copy of attributes
        const index = newPrimaryAttributes.findIndex( i => i.id === id)
        newPrimaryAttributes[index] = attribute

        handleChange({primaryAttributes: newPrimaryAttributes})

    }
   
     //CombatSkills Sections
    function handleCombatSkillAdd(){
        const newCombatSkill = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ combatSkills: [...character.combatSkills, newCombatSkill] })
    }

    function handleCombatSkillChange(id, skill){
        const newCombatSkills = [ ...character.combatSkills ]  //Makes a copy of CombatSkills
        const index = newCombatSkills.findIndex( i => i.id === id)
        newCombatSkills[index] = skill
        handleChange( { combatSkills: newCombatSkills })
    }

    function handleCombatSkillDelete(id){
        handleChange({
            combatSkills: character.combatSkills.filter(i => i.id !== id)
        })
    }

    //PhysicalSkills Sections
    function handlePhysicalSkillAdd(){
        const newPhysicalSkill = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ physicalSkills: [...character.physicalSkills, newPhysicalSkill] })
    }

    function handlePhysicalSkillChange(id, skill){
        const newPhysicalSkills = [ ...character.physicalSkills ]  //Makes a copy of PhysicalSkills
        const index = newPhysicalSkills.findIndex( i => i.id === id)
        newPhysicalSkills[index] = skill
        handleChange( { physicalSkills: newPhysicalSkills })
    }

    function handlePhysicalSkillDelete(id){
        handleChange({
            physicalSkills: character.physicalSkills.filter(i => i.id !== id)
        })
    }

    //ProfessionalSkills Sections
    function handleProfessionalSkillAdd(){
        const newProfessionalSkill = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ professionalSkills: [...character.professionalSkills, newProfessionalSkill] })
    }

    function handleProfessionalSkillChange(id, skill){
        const newProfessionalSkills = [ ...character.professionalSkills ]  //Makes a copy of Professional
        const index = newProfessionalSkills.findIndex( i => i.id === id)
        newProfessionalSkills[index] = skill
        handleChange( { professionalSkills: newProfessionalSkills })
    }

    function handleProfessionalSkillDelete(id){
        handleChange({
            professionalSkills: character.professionalSkills.filter(i => i.id !== id)
        })
    }

    //MentalSkills Sections
    function handleMentalSkillAdd(){
        const newMentalSkill = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ mentalSkills: [...character.mentalSkills, newMentalSkill] })
    }

    function handleMentalSkillChange(id, skill){
        const newMentalSkills = [ ...character.mentalSkills ]  //Makes a copy of PhysicalSkills
        const index = newMentalSkills.findIndex( i => i.id === id)
        newMentalSkills[index] = skill
        handleChange( { mentalSkills: newMentalSkills })
    }

    function handleMentalSkillDelete(id){
        handleChange({
            mentalSkills: character.mentalSkills.filter(i => i.id !== id)
        })
    }
    function handleBackgroundAdd(){
        const newBackground = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ backgrounds: [...character.backgrounds, newBackground] })
    }

    function handleBackgroundChange(id, background){
        const newBackgrounds = [ ...character.backgrounds ]  //Makes a copy of Background Traits
        const index = newBackgrounds.findIndex( i => i.id === id)
        newBackgrounds[index] = background
        handleChange( { backgrounds: newBackgrounds })
    }

    function handleBackgroundDelete(id){
        handleChange({
            backgrounds: character.backgrounds.filter(i => i.id !== id)
        })
    }

    function handleMeritAdd(){
        const newMerit = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ merits: [...character.merits, newMerit] })
    }

    function handleMeritChange(id, merit){
        const newMerits = [ ...character.merits ]  //Makes a copy of merits Traits
        const index = newMerits.findIndex( i => i.id === id)
        newMerits[index] = merit
        handleChange( { merits: newMerits })
    }

    function handleMeritDelete(id){
        handleChange({
            merits: character.merits.filter(i => i.id !== id)
        })
    }

    function handleFlawAdd(){
        const newFlaw = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ flaws: [...character.flaws, newFlaw] })
    }

    function handleFlawChange(id, flaw){
        const newFlaws = [ ...character.flaws ]  //Makes a copy of flaws  Traits
        const index = newFlaws.findIndex( i => i.id === id)
        newFlaws[index] = flaw 
        handleChange( { flaws: newFlaws })
    }

    function handleFlawDelete(id){
        handleChange({
            flaws : character.flaws.filter(i => i.id !== id)
        })
    }
   
    //Power
    function handlePowerAdd(){
        const newPower = {
            id: uuidv4(),
            name: '',
            rank: 1
        }

        handleChange({ powers: [...character.powers, newPower] })
    }

    function handlePowerChange(id, power){
        const newPowers = [ ...character.powers ]  //Makes a copy of Powers
        const index = newPowers.findIndex( i => i.id === id)
        newPowers[index] = power
        handleChange( { powers: newPowers})
    }
    function handlePowerDelete(id){
        handleChange({
            powers: character.powers.filter(i => i.id !== id)
        })
    }

    //Talisman
    function handleTalismanAdd(){
        const newTalisman = {
            id: uuidv4(),
            name: '',
            rank: 1,
            description: "What does this Talisman do?"
        }

        handleChange({ talismans: [...character.talismans, newTalisman] })
    }

    function handleTalismanChange(id, talisman){
        const newTalismans = [ ...character.talismans ]  //Makes a copy of Talisman
        const index = newTalismans.findIndex( i => i.id === id)
        newTalismans[index] = talisman
        handleChange( { talismans: newTalismans})
    }
    function handleTalismanDelete(id){
        handleChange({
            talismans: character.talismans.filter(i => i.id !== id)
        })
    }

    //Power Stunts
    function handlePowerStuntAdd(){
        const newPowerStunt = {
            id: uuidv4(),
            name: '',
            rank: 0,
            description: ''
        }

        handleChange({ powerStunts: [...character.powerStunts, newPowerStunt] })
    }

    function handlePowerStuntChange(id, powerStunt){
        const newPowerStunts = [ ...character.powerStunts ]  //Makes a copy of Power Stunts
        const index = newPowerStunts.findIndex( i => i.id === id)
        newPowerStunts[index] = powerStunt
        handleChange( { powerStunts: newPowerStunts})
    }
    function handlePowerStuntDelete(id){
        handleChange({
            powerStunts: character.powerStunts.filter(i => i.id !== id)
        })
    }

    //Equipment Edit
    function handleEquipmentItemAdd(){
        const newEquipmentItem = {
            id: uuidv4(),
            name: '',
            rank: 0,
            description: ''
        }

        handleChange({ equipmentItems: [...character.equipmentItems, newEquipmentItem] })
    }

    function handleEquipmentItemChange(id, item){
        const newEquipmentItems = [ ...character.equipmentItems ]  //Makes a copy of Equipment items
        const index = newEquipmentItems.findIndex( i => i.id === id)
        newEquipmentItems[index] = item
        handleChange( { equipmentItems: newEquipmentItems})
    }
    function handleEquipmentItemDelete(id){
        handleChange({
            equipmentItems: character.equipmentItems.filter(i => i.id !== id)
        })
    }


    //Protonium Counter

    function handleProtoniumCountChange(id, count){
        const newCount = [ ...character.protoniumCounter ]  //Makes a copy of Protonium Traits
        const index = newCount.findIndex( i => i.id === id)
        newCount[index] = count
        handleChange( { protoniumCounter: newCount})
    }

     //Bashing Counter

     function handleBashingCountChange(id, count){
        const newCount = [ ...character.bashingCounter ]  //Makes a copy of Bashing Traits
        const index = newCount.findIndex( i => i.id === id)
        newCount[index] = count
        handleChange( { bashingCounter: newCount})
    }

     //Lethal Counter

     function handleLethalCountChange(id, count){
        const newCount = [ ...character.lethalCounter ]  //Makes a copy of Lethal Traits
        const index = newCount.findIndex( i => i.id === id)
        newCount[index] = count
        handleChange( { lethalCounter: newCount})
    }

    return (
        <div className="sticky-container">
            <div>
                <button 
                    onClick={() => handleCharacterSelect(undefined)}
                    className="secondary_buttons-main"
                >
                    Close
                </button>
            </div>
            <Accordion>
                <Card className="character-card-accordion">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-card_header">
                        <span className="edit-character-card-title">{character.name} : {character.alias}</span> 
                        <span className="edit-character-card-title_nature">Nature </span>
                        <span className="edit-character-card-nature">{character.nature}</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="black-background">
                            <Accordion> 
                                <NameCardEdit key={character.id} {...character} handleChange={handleChange} />
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <span>Primary &amp; Secondary Attributes</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className="dark-background">
                                            <div className="grid_name_rank edit_input-container">
                                                <div>
                                                    <div className="edit_titles">Secondary Attributes</div>
                                                    {character.secondaryAttributes.map(attribute => (
                                                        <SecondaryAttributeEdit
                                                            key={attribute.id} 
                                                            attribute={attribute}
                                                            handleSecondaryAttributeChange={handleSecondaryAttributeChange}
                                                        />
                                                    ))}
                                                </div>
                                                <div >
                                                    <div className="edit_titles">Primary Attributes</div>
                                                    {character.primaryAttributes.map(attribute => (
                                                        <PrimaryAttributesEdit 
                                                            key={attribute.id} 
                                                            attribute={attribute}
                                                            handlePrimaryAttributeChange={handlePrimaryAttributeChange}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="2" >
                                        <span>Combat Skills</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className="dark-background">
                                            <div>
                                                {character.combatSkills.map(skill => (
                                                    <CombatEdit
                                                        key={skill.id}
                                                        skill={skill} 
                                                        handleCombatSkillChange={handleCombatSkillChange}
                                                        handleCombatSkillDelete={handleCombatSkillDelete}
                                                        />
                                                    ))
                                                }
                                                <button 
                                                    onClick={() => handleCombatSkillAdd()}
                                                    className="add_button"
                                                >
                                                    Add Skill
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="2.1" >
                                        <span>Physical Skills</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2.1">
                                        <Card.Body className="dark-background">
                                            <div>
                                                {character.physicalSkills.map(skill => (
                                                    <PhysicalEdit
                                                        key={skill.id}
                                                        skill={skill} 
                                                        handlePhysicalSkillChange={handlePhysicalSkillChange}
                                                        handlePhysicalSkillDelete={handlePhysicalSkillDelete}
                                                        />
                                                    ))
                                                }
                                                <button 
                                                    onClick={() => handlePhysicalSkillAdd()}
                                                    className="add_button"
                                                >
                                                    Add Skill
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="2.2" >
                                        <span>Professional Skills</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2.2">
                                        <Card.Body className="dark-background">
                                            <div>
                                                {character.professionalSkills.map(skill => (
                                                    <ProfessionalEdit
                                                        key={skill.id}
                                                        skill={skill} 
                                                        handleProfessionalSkillChange={handleProfessionalSkillChange}
                                                        handleProfessionalSkillDelete={handleProfessionalSkillDelete}
                                                        />
                                                    ))
                                                }
                                                <button 
                                                    onClick={() => handleProfessionalSkillAdd()}
                                                    className="add_button"
                                                >
                                                    Add Skill
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header}  eventKey="2.3" >
                                                <span>Mental Skills</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2.3">
                                        <Card.Body className="dark-background">
                                            <div>
                                                {character.mentalSkills.map(skill => (
                                                <MentalEdit
                                                    key={skill.id}
                                                    skill={skill} 
                                                    handleMentalSkillChange={handleMentalSkillChange}
                                                    handleMentalSkillDelete={handleMentalSkillDelete}
                                                    />
                                                ))
                                                }
                                                <button 
                                                    onClick={() => handleMentalSkillAdd()}
                                                    className="add_button"
                                                >
                                                    Add Skill
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header}  eventKey="3" >
                                                <span>Backgrounds</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body className="dark-background">
                                            <div>
                                                {character.backgrounds.map(background => (
                                                    <BackgroundsEdit
                                                        key={background.id}
                                                        background={background} 
                                                        handleBackgroundChange={handleBackgroundChange}
                                                        handleBackgroundDelete={handleBackgroundDelete}
                                                        />
                                                    ))
                                                }
                                                <button 
                                                    onClick={() => handleBackgroundAdd()}
                                                    className="add_button"
                                                    >Add Background</button>
                                                
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion"> 
                                    <Accordion.Toggle as={Card.Header} eventKey="3.1" >
                                                <span>Merits</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3.1">
                                        <Card.Body className="dark-background">
                                                <div>
                                                    {character.merits.map(merit => (
                                                        <MeritsEdit
                                                            key={merit.id}
                                                            merit={merit} 
                                                            handleMeritChange={handleMeritChange}
                                                            handleMeritDelete={handleMeritDelete}
                                                            />
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={() => handleMeritAdd()}
                                                        className="add_button"
                                                    >
                                                        Add Merit
                                                    </button>
                                                </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header}  eventKey="3.2" >
                                                <span>Flaws</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3.2">
                                        <Card.Body className="dark-background">
                                        <div>
                                            {character.flaws.map(flaw => (
                                                <FlawsEdit
                                                    key={flaw.id}
                                                    flaw={flaw} 
                                                    handleFlawChange={handleFlawChange}
                                                    handleFlawDelete={handleFlawDelete}
                                                    />
                                                ))
                                            }
                                            <button 
                                                onClick={() => handleFlawAdd()}
                                                className="add_button"
                                            >
                                                Add Flaw
                                            </button>
                                        </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="4" >
                                        <span>Powers &amp; Talismans</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body className="dark-background">
                                            <div>
                                                <div>
                                                    {character.powers.map(power => (
                                                        <PowerEdit
                                                            key={power.id}
                                                            power={power} 
                                                            handlePowerChange={handlePowerChange}
                                                            handlePowerDelete={handlePowerDelete}
                                                            />
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={() => handlePowerAdd()}
                                                        className="add_button"
                                                    >
                                                        Add Power
                                                    </button>
                                                </div>
                                                <div>
                                                    {character.talismans.map(talisman => (
                                                        <TalismanEdit
                                                            key={talisman.id}
                                                            talisman={talisman} 
                                                            handleTalismanChange={handleTalismanChange}
                                                            handleTalismanDelete={handleTalismanDelete}
                                                            />
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={() => handleTalismanAdd()}
                                                        className="add_button"
                                                    >
                                                        Add Talisman
                                                    </button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="5.1">
                                        <span>Power Stunts</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5.1">
                                        <Card.Body className="dark-background">
                                            <div className="power_stunt-container">
                                                {character.powerStunts.map(powerStunt => (
                                                        <PowerStuntEdit
                                                            key={powerStunt.id}
                                                            powerStunt={powerStunt} 
                                                            handlePowerStuntChange={handlePowerStuntChange}
                                                            handlePowerStuntDelete={handlePowerStuntDelete}
                                                            />
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={() => handlePowerStuntAdd()}
                                                        className="add_button"
                                                    >
                                                        Add Power Stunt
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                                <span>Equipment Inventory</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body className="dark-background">
                                                <div>
                                                    {character.equipmentItems.map(item => (
                                                        <EquipmentItemsEdit
                                                            key={item.id}
                                                            item={item} 
                                                            handleEquipmentItemChange={handleEquipmentItemChange}
                                                            handleEquipmentItemDelete={handleEquipmentItemDelete}
                                                            />
                                                        ))
                                                    }
                                                    <button 
                                                        onClick={() => handleEquipmentItemAdd()}
                                                        className="add_button"
                                                    >
                                                        Add Equipment Item
                                                </button>
                                                </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card  className="character-card-accordion">
                                    <Accordion.Toggle as={Card.Header} eventKey="7" >
                                                <span>Counters: Health &amp; Protonium</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body className="dark-background">
                                            <div className="edit_input-container">
                                                {character.protoniumCounter.map(count => (
                                                    <ProtoniumCounterEdit
                                                        key={count.id}
                                                        count={count}
                                                        maxProtonium={character.secondaryAttributes[5]} 
                                                        handleProtoniumCountChange={handleProtoniumCountChange}
                                                    />
                                                    ))
                                                }
                                            </div>  
                                            <div className="edit_input-container">
                                                <span className="input_titles">Bashing</span>
                                                {character.bashingCounter.map(count => (
                                                    <BashingCounterEdit
                                                        key={count.id}
                                                        count={count} 
                                                        handleBashingCountChange={handleBashingCountChange}
                                                    />
                                                    ))
                                                }
                                            </div>
                                            <div className="edit_input-container">
                                            <span className="input_titles">Lethal</span>
                                                {character.lethalCounter.map(count => (
                                                    <LethalCounterEdit
                                                        key={count.id}
                                                        count={count}
                                                        handleLethalCountChange={handleLethalCountChange}
                                                    />
                                                    ))
                                                }
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>    
                            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}