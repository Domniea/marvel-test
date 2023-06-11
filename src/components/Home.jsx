import React, { useState, useEffect, useContext } from "react";
import axios from "axios";


function Home() {

    const [on, setOn] = useState(false)
    const heroData = []
    const [newHeros, setNewHeros] = useState(false)
    const [countdown, setCountdown] = useState()
    const [fighter1, setFighter1] = useState()
    const [fighter2, setFighter2] = useState()

    const justMarvel = []

    let time = new Date()
    let year = time.getFullYear().toString().split('')
    let month = time.getMonth() + 1
    let day = time.getDate()


    function ShowTime() {

        let time = new Date()
        let hour = 23 - time.getHours()
        let min = 59 - time.getMinutes()
        let sec = 59 - time.getSeconds()
    

        if(hour === 0) {
            getNewHeros()
        }
        
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        let currentTime = `${hour}:${min}:${sec}`
        
        if (currentTime){
            setCountdown(currentTime)
        }
    }


    useEffect(() =>{
        setTimeout(ShowTime, 1000)
    }, [countdown])

    useEffect(() => {
        axios.get('https://akabab.github.io/superhero-api/api/all.json')
        .then(results => {
            const data = results.data
            
            data.map(hero => {
                if(hero.biography.publisher === 'Marvel Comics') {
                justMarvel.push(hero)
                }
            })
            heroData.push(justMarvel)
            getFighters()
        })
        
        .catch(error => console.log(error))
    }, [newHeros])

    function toggleStats() {
        setOn(prevState => !prevState)
    }

    function getFighters() {
        const yearNum = year.map(x => parseInt(x))
        const yearSum = yearNum.reduce((acc, cur)=> {
            const final = acc + cur
            return final
        })
        const random = Math.floor(269/(day + yearSum + month) *15)
        const random2 = Math.floor(269/(day + yearSum + month) * 4)
        const winningNumber = random > 269 ? random/2 : random
        const winningNumber2 = random2 > 269 ? random2/2 : random2
        setFighter1(heroData[0][winningNumber])
        setFighter2(heroData[0][winningNumber2])
        return (fighter1, fighter2)
    }    

    function determineWinner() {
        if (fighter1) {
            const breakdown1 = Object.entries(fighter1).map(([key,value]) => value)
            const statsObject1 = breakdown1[3]
            console.log(statsObject1)
            const stats1 = Object.values(statsObject1)
            const final1 = stats1.reduce((acc,cur) => {
                const final = acc + cur
                return final
            }, 0)

            const breakdown2 = Object.entries(fighter2).map(([key,value]) => value)
            const statsObject2 = breakdown2[3]
            console.log(statsObject2)
            const stats2 = Object.values(statsObject2)
            const final2 = stats2.reduce((acc,cur) => {
                const final = acc + cur
                return final
            }, 0)
    
            if(final1 > final2) {
                return alert(fighter1.name)
            } else {
                return alert(fighter2.name)
            }
        
        }
    }

    function getNewHeros() {
        setNewHeros(prevState => !prevState)
    }

    return(
        <div className="Home">
            <h1>Fun With Marvel!</h1>
            <div className="welcomeBackground">
                <h2>Fight Of The Day!</h2>
                <div className="heroFight">
                   { fighter1 && 
                        <div className="fighter1">
                            <div className="fighterContainer">
                                <div className="right">
                                    <img className="fighter--img" src={fighter1.images.lg}/>
                                    <h3>{fighter1.name}</h3>
                                </div>
                                { on &&
                                    <div className="left">
                                        <ul className="stats"><h3>Powerstats: </h3>
                                            <li>Intelligence: {fighter1.powerstats.intelligence}</li>
                                            <li>Strength: {fighter1.powerstats.strength}</li>
                                            <li>Speed: {fighter1.powerstats.speed}</li>
                                            <li>Durability: {fighter1.powerstats.durability}</li>
                                            <li>Power: {fighter1.powerstats.power}</li>
                                            <li>Combat: {fighter1.powerstats.combat}</li>
                                        </ul>
                                    </div>
                                }
                            </div>

                        </div>
                    }
                    { fighter2 && 
                        <div className="fighter2">
                            <div className="fighterContainer">
                                <div className="left">
                                    <img className="fighter--img" src={fighter2.images.lg} />
                                    <h3>{fighter2.name}</h3>
                                </div>
                                { on &&
                                    <div className="right">
                                        <ul className="stats"><h3>Powerstats: </h3>
                                            <li>intelligence: {fighter2.powerstats.intelligence}</li>
                                            <li>Strength: {fighter2.powerstats.strength}</li>
                                            <li>Speed: {fighter2.powerstats.speed}</li>
                                            <li>Durability: {fighter2.powerstats.durability}</li>
                                            <li>Power: {fighter2.powerstats.power}</li>
                                            <li>Combat: {fighter2.powerstats.combat}</li>
                                        </ul>
                                    </div>
                                    }
                            </div>
                                    
                        </div> 
                    }
                 </div> 
                <div className="buttonContainer">
                    <button onClick={determineWinner}>Show Winner</button>
                    <button onClick={toggleStats}>Show Stats</button>
                </div>
                <div className="timeRemaining">
                    <h2>Time until next fight!</h2>
                    <h2 id='clock'>{countdown}</h2>
          
                </div>
            </div>
        </div>
    )
}

export default Home