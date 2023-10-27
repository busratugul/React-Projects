import React from 'react'
import Shield from '../img/shield.svg'
import Attack from '../img/swords.svg'
import Horn from '../img/horn.svg'

export const Card = ({ player, defenseValue, attackValue, unitTypeName ,unitTypeImg, unitValue, moralValue}) => {

    let iconStyle ={
        marginRight: 10,
        width: 20,
        background: "transparent"
    }

    let mirror;
    function mirrorImg(player){
        player === "player_2" ?(mirror= "scaleX(-1)")
        :(mirror= "scaleX(1)")
        return mirror;
    }
    mirrorImg(player)

  return <div 
  className={`card text-center m-1 shadow-lg ${player === "player_1" ?"text-bg-info" :"text-bg-danger"}`}
  style={{width: 180}}>

    <section 
    className={`card-header d-flex`}
    style={{justifyContent:"space-between"}}>
    
    <div className='defense'>
        <img 
        src={Shield} 
        alt="defense-img"
        style={iconStyle} />
        <span>{!attackValue && "00"}</span>
    </div>

    <div className='attack'>
        <img 
        src={Attack} 
        alt="defense-img"
        style={iconStyle} />
        <span>{!defenseValue && "00"}</span>
    </div>
    </section>

    <section className="card-body">
        <h4 className='mb-1 fs-6'>
        {!{unitTypeName} ?"Unit type name" :unitTypeName}
            <img 
            className="card-img bg-light" 
            src={unitTypeImg} 
            alt="unitTypeImg"
            style={{transform: `${mirror}`}} />
        </h4>
    </section>
 
    <section 
    className={`card-footer d-flex`}
    style={{justifyContent:"space-between"}}>
    
    <div className='defense'>
        <img 
        src={Horn} 
        alt="defense-img"
        style={iconStyle} />
        <span>{!moralValue && "00"}</span>
    </div>

    <div className='attack'>
        <img 
        src={unitTypeImg} 
        alt="defense-img"
        style={iconStyle} />
        <span>{!unitValue && "00"}</span>
    </div>
    </section>

    
</div>
}
