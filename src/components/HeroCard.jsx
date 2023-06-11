import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function HeroCard() {
    
    const location = useLocation()
    const data = location.state
   
    const {heroId} = useParams()
    const foundDetails = data.data.find(data => data.name === heroId)

    const navigate = useNavigate()
    
    return (
      <>
        <div className="HeroCard">
            <h2>{foundDetails.name}</h2>
              <div className="heroCard--details">
                <h3>{foundDetails.biography.publisher}</h3>
                <h3>Full Name: {
                    foundDetails.biography.fullName ?
                    foundDetails.biography.fullName: 'N/A'
                  }</h3>
                <h3>Alignment: {foundDetails.biography.alignment}</h3>
                <img src={foundDetails.images.md}/>
                <h3 className="stats">Power Stats:
                  <ul>
                    <li>Intelligence: {foundDetails.powerstats.intelligence}</li>
                    <li>Strength: {foundDetails.powerstats.strength}</li>
                    <li>Speed: {foundDetails.powerstats.speed}</li>
                    <li>Durability: {foundDetails.powerstats.durability}</li>
                    <li>Power: {foundDetails.powerstats.power}</li>
                    <li>Combat: {foundDetails.powerstats.combat}</li>
                  </ul>
                </h3>
              </div>
            
            <br></br>
        </div>
            <button onClick={() => navigate(-1)}>Back</button>
      </>
    )
}

export default HeroCard
