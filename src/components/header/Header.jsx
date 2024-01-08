import styles from "./Header.module.css"


import Title from "../Title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header(){
    return(
        <div className={styles.header}>
            <Title>JOGO DA VELHA DOS CRIA</Title>
            <Subtitle>Criado por DrigolasTremBala</Subtitle>
        </div>
    )
}

export default Header