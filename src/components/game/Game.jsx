import styles from "./Game.module.css"
import { useEffect, useState } from "react"
import Gameoption from "../gameoption/Gameoption"
function Game (){
    const[gameState,setGameState]=useState(Array(9).fill(0))
    const[currentPlayer, setCurrentPlayer] = useState(1)
    const [winner, setWinner]=useState(0)
    const handleclick=(pos)=>{
        if(gameState[pos]===0 && winner===0){
            let newGameState=[...gameState]
            newGameState[pos]=currentPlayer
            setGameState(newGameState)
        }
    }
    const winnerTable=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    const verifyGame=()=>{
        winnerTable.forEach((line)=>{
            const values=line.map((pos)=> gameState[pos])
            const sum=values.reduce((sum,values)=>sum+values)
            console.log(sum)
            if(sum ===3 || sum===-3) setWinner (sum/3)
            
        })
    }

    useEffect(()=>{
        setCurrentPlayer(currentPlayer*-1)
        verifyGame()
    },[gameState])

    return (
        <div className={styles.game}>
            {
                gameState.map((value,pos)=> 
                    <Gameoption 
                    key={`game-option-pos-${pos}`}
                    status={value}
                    onClick={()=>handleclick(pos)}
                    /> 
                    )
            }   
        </div>
    )
}

export default Game 