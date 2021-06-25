import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import List from './List'

export default function HealthProtoniumCounters(props) {
    const {
        bashingCounter,
        lethalCounter,
        protoniumCounter,
        maxProtonium
    } = props

    function handleBashingCount(){
        const count = bashingCounter.map(b => b.value)

        if(parseInt(count) >= 4 && parseInt(count) <= 5){
            return <span>Slap fighting! -1</span>
        } else if(parseInt(count) >= 6 && parseInt(count) <= 8){
            return <span>No BITING! -3</span>
        } else if(parseInt(count) === 9){
            return <span>A'Chil-les Heal! -5 </span>
        }else if(parseInt(count) === 10){
            return <span>Hello Darkness My...! TKO</span>
        }
        else {
            return <span>Pillow FIGHT!</span>
        }
    }

    function handleLethalCount(){
        const count = lethalCounter.map(l => l.value)
   
        if(parseInt(count) >= 3 && parseInt(count) <=4){
            return <span>That really hurt! -1</span>
        } else if(parseInt(count) >= 5 && parseInt(count) <= 6){
            return <span>Is that blood?! -2</span>
        } else if(parseInt(count) >= 7 && parseInt(count) <=8){
            return <span>I ain't got time to bleed! -4</span>
        }else if(parseInt(count) === 9){
            return <span>To die or not to die? -6</span>
        }else if(parseInt(count) === 10){
            return <span>Let's weigh your sins!</span>
        }else {
            return <span>You looking AT ME?!</span>
        }
    }



    
    return (
        <Card className="character-card-accordion">
            <Accordion.Toggle as={Card.Header} eventKey="5" className="card-toggle-header">
                <span>Bashing &amp; Lethal &amp; Protonium Counters</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
                <Card.Body>
                    <div className="title-parent_container">
                        <span>Bashing</span>
                        <div className="cRow">
                            {bashingCounter.map(count => {
                                return <List key={count.id} {...count} />
                            })}
                            <div className="damage">{handleBashingCount()}</div>
                        </div>
                    </div>
                    <div className="title-parent_container">
                        <span>Lethal</span>
                        <div className="cRow">
                             {lethalCounter.map(count => {
                                return <List key={count.id} {...count} />
                            })}
                            <div className="damage">{handleLethalCount()}</div>
                        </div>
                    </div>
                    <div className="title-parent_container">
                        <span>Protonium</span>
                        <div className="cRow">
                            {protoniumCounter.map(count => {
                                return <List key={count.id} {...count} />
                            })}
                            <span>Max Protonium</span>
                            <h5>{maxProtonium.rank}</h5>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}