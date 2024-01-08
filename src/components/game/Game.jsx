import styles from "./Game.module.css"

import Gameoption from "../gameoption/Gameoption"
function Game (){
    return (
        <div className={styles.game}>
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
            <Gameoption />
        </div>
    )
}

export default Game 