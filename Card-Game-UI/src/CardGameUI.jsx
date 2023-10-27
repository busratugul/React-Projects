import React, { useState } from 'react'
import Title from './Title'
import Buttons from './Buttons'
import { Rules } from './Rules'
import './cardGame.css'
import { Card } from './Card'

//UNITS
import SpearManImg from '../img/spear-man.svg'
import WarHoursMan from '../img/warhorse-svgrepo-com.svg'
import Archer from '../img/archer.svg'

export const CardGameUI = () => {
    document.body.style.backgroundColor= "#170536"
    document.body.style.color= "#bab6bf"
    
    const [start, setStart] = useState(false)
    const startGame = () => {
        setStart(true)
    }
    
    return <div className='container text-center'>
   {!start 
   ?(<section className='text-center'>
    <Title text={"Card Game"}/>

    <Buttons 
    text={"Start"} 
    Btnclass={"btn btn-success btn-m"} 
    onClick={startGame}/>

    <Title subtitle={"Rules:"}/>

    <Rules/><Rules/><Rules/><Rules/><Rules/><Rules/><Rules/><Rules/><Rules/>

   </section>)
   :<Title text={"0-1"}/> }
   <main className="container m-auto game-board">

    <section className="player_1 ">
        <Card 
        player={"player_1"}
        unitTypeName="Sward Cavalary"
        unitTypeImg={WarHoursMan} />
        <Card 
        player={"player_1"}
        unitTypeName="Spear man"
        unitTypeImg={SpearManImg} />
        <Card 
        player={"player_1"}
        unitTypeName="Sward Cavalary"
        unitTypeImg={Archer} />
        <Card 
        player={"player_1"}
        unitTypeName="Spear man"
        unitTypeImg={SpearManImg} />
    </section>

    <section className="fog-of-war"></section>

    <section className="player_2">
    <Card 
    player={"player_2"}
    unitTypeName="Sward Cavalary"
    unitTypeImg={WarHoursMan}/>
    <Card 
    player={"player_2"}
    unitTypeName="Spear Man"
    unitTypeImg={SpearManImg}/>
    <Card 
    player={"player_2"}
    unitTypeName="Sward Cavalary"
    unitTypeImg={Archer}/>
    <Card 
    player={"player_2"}
    unitTypeName="Spear Man"
    unitTypeImg={SpearManImg}/>
    </section>
   </main>
   
  </div>
}
