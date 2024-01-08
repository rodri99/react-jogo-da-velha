function Icon({iconName, size}){
    return( 
        <a href="https://github.com" target="_blank">
            <img src={`/icons/${iconName}.svg`} width={size}/>
        </a>
        
    )
}
Icon.defaultProps={
    size:"30px"
}

export default Icon
