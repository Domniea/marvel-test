import React from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";

function MovieCard() {

    const location = useLocation()
    const data = location.state

    const {movieId} = useParams()
    
  if(data) {

    const foundDetails = data.find(data => data.title == movieId)
  
    const navigate = useNavigate()
  
    return (
        <div className="MovieCard">
          {
            data &&
           <div className="movieCard--background">
                <h2>{foundDetails.title}</h2>
                <img src={foundDetails.cover_url} />
                <div className="movieCard--details">
                    <h3>{foundDetails.saga} {foundDetails.release_date.split('-')[0]}</h3>
                    <h4 className="movieCard--overview">{foundDetails.overview}</h4>
                    <button><a href={foundDetails.trailer_url}>View Trailer</a></button>
                </div>
            </div>
          }
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
  }

}

export default MovieCard
