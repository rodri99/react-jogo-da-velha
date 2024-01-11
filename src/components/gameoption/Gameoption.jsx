import Icon from "../icon/icon"
import styles from "./Gameoption.module.css"
const GameIcon= ({iconName})=> <Icon iconName={iconName} size="25px" />
function Gameoption ({status, onClick}){
    return(
        <div className={styles.gameOption} onClick={onClick}>
            {
                status==1 && <Icon iconName="bola"  size="20px"/>
            }
            {
                status==-1 && <Icon iconName="x"  size="20px"/>
            }
        </div>
    )
}


export default Gameoption