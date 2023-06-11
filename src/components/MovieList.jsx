import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
// 
import { SupeMovieList } from "../SupeMovieContext";

function MovieList() {

    const movieList = useContext(SupeMovieList)

    if(movieList){
        const movies = movieList.map(movie => {
            return <div 
                        className="movieLink--container"
                        key={movie.id}  
                    >
                        <Link 
                            to={`/movieList/${movie.title}`} 
                            state={movieList} 
                            className="list--link"
                        >
                        <img 
                            src={movie.cover_url} 
                        />
                        <h3>
                            {movie.title}   
                        </h3>
                        </Link>
                    </div>

        })

        return (
            <div className="MovieList">
                <h1>MCU Movies</h1>
                <div className="movieList--container">
                {movies}
                </div>
            </div>
        )
    }
}

export default MovieList