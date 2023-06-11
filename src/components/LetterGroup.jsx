import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function LetterGroup(props) {

  const location = useLocation()
  const info = location.state
  
  const {letter} = useParams()

  if (info){
    const foundDetails = info.find(x => x.title === letter)

    const heros = foundDetails.data.map(hero => {
        return (
          <div 
            className="heroLink--container"
            key={hero.id}  
          >
            <Link 
                to={`/heros/${letter}/${hero.name}`} 
                state={foundDetails} 
                className="list--link"
            >
              <img 
                  src={hero.images.sm} 
              />
              <h3>
                  {hero.name}   
              </h3>
            </Link>
          </div>
          
      )
    })

    return (
        <div className="HeroList">
          <h1>Heros/Villains: {letter}</h1>
            <div className="heroList--container">
              {heros}    
            </div>
        </div>
    )
  }
}

export default LetterGroup