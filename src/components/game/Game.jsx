import styles from "./Game.module.css"
import { useState } from "react"
import Gameoption from "../gameoption/Gameoption"
function Game (){
    const[gameState,setGameState]=useState(Array(9).fill(0))
    return (
        
        <div className={styles.game}>
            {
                gameState.map((value,pos)=> 
                    <Gameoption 
                    key={`game-option-pos-${pos}`}
                    status={value}
                    /> 
                    )
            }   
        </div>
    )
}

export default Game 