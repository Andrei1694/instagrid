import React from 'react'

const Card = (props) => {
    const styles = {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "330px",
        height: "24rem",
        border: '1px solid black',
        margin: "5px",
     
    }
    const imgStyle = {
        borderRadius: '50%'
    }
    return(
        <div className = "Card col-md-3 col-sm-3 col-lg-3" style = {styles}>
            <img src = {props.photo} alt="" style={imgStyle}></img>
            <p>{props.fullName}</p>
        </div>
    )
}

export default Card;