import {useContext} from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { SupeList } from "../SupeListContext";
import wolverine from '/wolverine.png'

function Alphabet() {

  const supes = useContext(SupeList)

  const {letter} = useParams()

  if(supes) {
    const group = supes.map(hero => {

      return <div key={hero.title}>
        <li>
         <Link 
             to={`/heros/${hero.title}`} 
             style={{fontSize: '1.5rem'}}
             state={supes} 
             className="alphabet--letter"
         >
           {hero.title}
         </Link>
       </li>
       </div>
     })
 
 


    return (
        <div 
          className="Alphabet"
          >         
              <ul>
              {group} 
              </ul>
              <br></br>
              {
                !letter && 

                <div className="alphabet--home">
                  <h1>Pick a letter to start</h1>
                  <img src={wolverine} className="wolverine"/>
                </div>
              }
              <Outlet />
        </div>
    
      )
  }
}

export default Alphabet