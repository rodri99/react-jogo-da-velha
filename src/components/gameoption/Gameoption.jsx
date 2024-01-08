import Icon from "../icon/icon"
import styles from "./Gameoption.module.css"

function Gameoption ({status}){
    return(
        <div className={styles.gameOption}>
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