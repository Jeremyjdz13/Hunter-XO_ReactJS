import React, { useState } from 'react'
import { useCharacter } from '../../../../contexts/CharacterContext' 
import SuperPowers from './SuperPowers'
import TalismansRoller from './TalismansRoller'
import ChartRanks from './ChartRanks'
import {v4 as uuidv4 } from 'uuid'


export default function SuccessRoller({ character }) {
    const { handleCharacterSelectSuccessRoller } = useCharacter()
    const searchIntuition = character.primaryAttributes.filter(item => item.name.includes('Intuition'))
    const searchFight = character.primaryAttributes.filter(item => item.name.includes('Fight'))
    const searchAgility = character.primaryAttributes.filter(item => item.name.includes('Agility'))
    const searchStrength = character.primaryAttributes.filter(item => item.name.includes('Strength'))
    const searchEndurance = character.primaryAttributes.filter(item => item.name.includes('Endurance'))
    const searchReason = character.primaryAttributes.filter(item => item.name.includes('Reason'))
    const searchPsyche = character.primaryAttributes.filter(item => item.name.includes('Psyche'))
    const searchAlertness = character.mentalSkills.filter(item => (item.name.includes(('Alertness' || 'alertness'))) )
    let alertCount = ''
    if (searchAlertness[0] === undefined) {
            alertCount = 0
        }else{
            alertCount = searchAlertness[0].rank
        }
      
    const intuition = searchIntuition[0].rank
    const initiativeCount = parseInt(intuition, 10) + parseInt(alertCount, 10)
    const fight = searchFight[0].rank
    const agility = searchAgility[0].rank
    const strength = searchStrength[0].rank
    const endurance = searchEndurance[0].rank
    const reason = searchReason[0].rank
    const psyche = searchPsyche[0].rank
    
    const [state, setState] = useState({randomD10: 0, D10Roll: 0})
    const [powerRank, setPowerRank] = useState('No Rank')
    const [d100, setD100] = useState({randomD100: 0, D100Roll: 0, score: ''})
    const [count, setCount] = useState(0)
    const [fate, setFate] = useState()
    
   
    function handleClickD10(){
        
       let rTimer = setInterval(()=>{
    
           let roll = Math.floor((Math.random() * 10) +1)
           let total = parseInt(roll) + initiativeCount;
            setState({ 
                randomD10: total,
                D10Roll: roll
            });
        }, 100)

        setTimeout(()=>{
            clearInterval(rTimer);
        }, 2000);
    }
    

    function handleRank(e){
        let value = e.target.value
        let name = e.target.name
        console.log({value, name})

        if (value === "0"){
           setPowerRank("Decrepit")
        } else if (value === "1"){
            setPowerRank("Feeble")
        } else if (value === "2"){
            setPowerRank("Poor")
        } else if (value === "3"){
            setPowerRank("Typical")
        } else if (value === "4"){
            setPowerRank("Good")
        } else if (value === "5"){
            setPowerRank("Excellent")
        } else if (value === "6"){
            setPowerRank("Remarkable")
        } else if (value === "7"){
            setPowerRank("Incredible")
        } else if (value === "8"){
            setPowerRank("Amazing")
        } else if (value === "9"){
            setPowerRank("Monstrous")
        } else if (value === "10"){
            setPowerRank("Unearthly")
        }
       
    }

    function handleClickD100(){
        let rTimer = setInterval(()=>{
            let modifiers = count;
            let roll = Math.floor((Math.random() * 100) +1)
            let total = parseInt(modifiers) + parseInt(roll);
            let rank = powerRank;
            let success = '';
            console.log(success, rank, total)
            if (rank === "Decrepit"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 55){
                    success = " failed"
                }
                if (total >= 56 && total <= 94){
                    success = " green";
                }
                if (total >= 95 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === "Feeble"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 50){
                    success = " failed"
                }
                if (total >= 51 && total <= 90){
                    success = " green";
                }
                if (total >= 91 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === "Poor"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 45){
                    success = " failed"
                }
                if (total >= 46 && total <= 85){
                    success = " green";
                }
                if (total >= 86 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === "Typical"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 40){
                    success = " failed"
                }
                if (total >= 41 && total <= 80){
                    success = " green";
                }
                if (total >= 81 && total <= 97){
                success = " yellow";
                }
                if (total >= 98){
                success = " red";
                }
            }

            if (rank === "Good"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 35){
                    success = " failed"
                }
                if (total >= 36 && total <= 75){
                    success = " green";
                }
                if (total >= 76 && total <= 97){
                success = " yellow";
                }
                if (total >= 98){
                success = " red";
                }
            }

            if (rank === "Excellent"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 30){
                    success = " failed"
                }
                if (total >= 31 && total <= 70){
                    success = " green";
                }
                if (total >= 71 && total <= 94){
                success = " yellow";
                }
                if (total >= 95){
                success = " red";
                }
            }

            if (rank === "Remarkable"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 25){
                    success = " failed"
                }
                if (total >= 26 && total <= 65){
                    success = " green";
                }
                if (total >= 66 && total <= 94){
                success = " yellow";
                }
                if (total >= 95){
                success = " red";
                }
            }

            if (rank === "Incredible"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 20){
                    success = " failed"
                }
                if (total >= 25 && total <= 60){
                    success = " green";
                }
                if (total >= 61 && total <= 90){
                success = " yellow";
                }
                if (total >= 91){
                success = " red";
                }
            }

            if (rank === "Amazing"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 15){
                    success = " failed"
                }
                if (total >= 16 && total <= 55){
                    success = " green";
                }
                if (total >= 56 && total <= 90){
                success = " yellow";
                }
                if (total >= 91){
                success = " red";
                }
            }

            if (rank === "Monstrous"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 10){
                    success = " failed"
                }
                if (total >= 11 && total <= 50){
                    success = " green";
                }
                if (total >= 51 && total <= 85){
                success = " yellow";
                }
                if (total >= 86){
                success = " red";
                }
            }

            if (rank === "Unearthly"){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 6){
                    success = " failed"
                }
                if (total >= 7 && total <= 45){
                    success = " green";
                }
                if (total >= 46 && total <= 85){
                success = " yellow";
                }
                if (total >= 86){
                success = " red";
                }
            }
          
            setD100({ 
                randomD100: total,
                D100Roll: roll,
                score: success,
            });

        }, 100)
   
        setTimeout(()=>{
            clearInterval(rTimer);
        }, 2000);
        
    }

    function handleClickAdd(e){
        let add = e.target.name;

        if (add === "5"){
            setCount(prevCount => prevCount + 5); 
        }
        if (add === "1"){
            setCount(prevCount => prevCount + 1); 
        }
        if (add === "20"){
            setCount(prevCount => prevCount + 20); 
        }
    };

    function handleClickSubtract(e){
        let subtract = e.target.name;

        if (subtract === "-5"){
            setCount(prevCount => prevCount - 5); 
        }
        if (subtract === "-1"){
            setCount(prevCount => prevCount - 1); 
        }
        if (subtract === "-20"){
            setCount(prevCount => prevCount - 20); 
        }
    }
    function handleClickReset(){
     
        setPowerRank('No Rank')
        setCount(0)
        setD100({randomD100: 0, D100Roll: 0, score: ''}) 
    }

    const superPowersElement = character.powers.map(power => {
        return  <SuperPowers key={power.id} {...power} handleRank={handleRank}/>
    })

    const talismansElement = character.talismans.map(talisman => {
        return<TalismansRoller key={talisman.id} {...talisman} handleRank={handleRank}/>
    
    })

    const chartColumnsElement = chartColumns.map(column => {
        return <ChartRanks key={column.id} {...column} handleRank={handleRank} />
    })


    return (
        <div className="sticky-container">
            <div className="secondary_buttons-main_container">
                <h4 className="character-name_title">{character.name}</h4>
                <button 
                    onClick={() => handleCharacterSelectSuccessRoller(undefined)}
                    className="secondary_buttons-main"
                >
                    Close
                </button> 
            </div>
            <div>
                <div className="initiative_container">
                    <h3>D*10 Initiative</h3>
                    <div className="d10-grid d10-container">
                        <div className="column">
                            <div className="d10-grid_bonus">
                               <h5>Intuition:</h5><span className="numbers">{intuition}</span> 
                            </div>
                            <div className="d10-grid_bonus">
                               <h5>Alertness:</h5><span className="numbers">{alertCount}</span>
                            </div>
                            <div className="d10-grid_bonus">
                                <h5>Total:</h5><span className="numbers">{initiativeCount}</span>
                            </div>
                            
                        </div>
                        <button onClick={() => handleClickD10()} className="d10-roller">      
                                D*10 
                        </button> 
                        <div>
                            <div className="cRow">
                                <h5>D10</h5>
                                <div className="d10-numbers">
                                    <span>{state.D10Roll}</span>
                                </div> 
                            </div>
                            <div className="cRow">   
                                <h5>Total</h5>
                                <div className="d10-numbers">
                                    <span>{state.randomD10}</span>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="d100_chart_roller-container">
                    <h3>D*100 Success Chart</h3>
                    <div className="">
                        <div className="">
                            <h5 className="">Attributes</h5>
                            <div className="">
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={fight} name={"Fight"}>Fgt {fight}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={agility} name={"Agility"}>Agt {agility}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={strength} name={"Strength"}>Str {strength}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={endurance} name={"Endurance"}>End {endurance}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={reason} name={"Reason"}>Rsn {reason}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={intuition} name={"Intuition"}>Int {intuition}</button>
                                <button className="d100_column-buttons attribute-buttons" onClick={(e) => handleRank(e)} value={psyche} name={"Psyche"}>Psy {psyche}</button>
                            </div>                
                        </div>
                        <div className="cRow" >
                            <div className="">
                                <h5>Super Powers</h5>
                                {superPowersElement}
                            </div>
                            <div className="">
                                <h5>Talismans</h5>
                                {talismansElement}
                            </div>
                        
                        </div>
                    </div>
                    <div className="d100_modifiers-grid">  
                        <div className="">
                            <h5>Modifiers</h5> 
                            <div>
                                <div className="cRow">
                                    <button name={"20"} onClick={(e) => handleClickAdd(e)} className="success-buttons-modifiers" >+ 20 </button> 
                                    <button name={"5"} onClick={(e) => handleClickAdd(e)} className="success-buttons-modifiers" > + 5 </button>
                                    <button name={"1"} onClick={(e) => handleClickAdd(e)} className="success-buttons-modifiers" > + 1 </button>
                                </div>
                                <div className="cRow">     
                                    <button name={"-20"} onClick={(e) => handleClickSubtract(e)} className="success-buttons-modifiers" > - 20</button>
                                    <button name={"-5"} onClick={(e) => handleClickSubtract(e)} className="success-buttons-modifiers" > - 5</button>
                                    <button name={"-1"} onClick={(e) => handleClickSubtract(e)} className="success-buttons-modifiers" > - 1</button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                                <h5>Columns</h5>
                                {chartColumnsElement}
                        </div>
                    </div>
                    <div className="d100_result-container cRow">
                        <div>
                            <h5>Fate O'Meter</h5>
                            <div className={"selected-rank_container" + d100.score}>
                                <span>{d100.score}</span>
                            </div>
                        </div>    
                        <div>   
                            <h5>D100 + Mods/Total</h5>
                            <div className="selected-rank_container">
                                <span>{d100.D100Roll} + {count} / {d100.randomD100}</span>
                            </div>
                        </div>
                        <div>
                            <h5>Selected Rank</h5>
                            <div className="selected-rank_container">
                                <span>{powerRank}</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => handleClickD100()}  className="d100-roller"> D*100 </button>
                        <button onClick={() => handleClickReset()} className="d100-roller" >Reset </button>  
                    </div>  
                </div> 
            </div>
        </div>
        
    )
}

const chartColumns = [
    {
        id: uuidv4(),
        value: 0,
        name: 'De'
    },
    {
        id: uuidv4(),
        value: 1,
        name: 'Fe'
    },
    {
        id: uuidv4(),
        value: 2,
        name: 'Pr'
    },
    {
        id: uuidv4(),
        value: 3,
        name: 'Ty'
    },
    {
        id: uuidv4(),
        value: 4,
        name: 'Gd'
    },
    {
        id: uuidv4(),
        value: 5,
        name: 'Ex'
    },
    {
        id: uuidv4(),
        value: 6,
        name: 'Rm'
    },
    {
        id: uuidv4(),
        value: 7,
        name: 'In'
    },
    {
        id: uuidv4(),
        value: 8,
        name: 'Am'
    },
    {
        id: uuidv4(),
        value: 9,
        name: 'Mn'
    },
    {
        id: uuidv4(),
        value: 10,
        name: 'Un'
    }
]