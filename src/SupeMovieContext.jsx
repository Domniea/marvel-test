import axios from "axios";
import React from "react";
import { useState, useEffect, createContext} from "react"

const SupeMovieList = createContext()

function SupeMovieListProvider(props) {
    const [movieList, setMovieList] = useState('')

    useEffect(() => {
        axios.get('https://mcuapi.up.railway.app/api/v1/moviess')
            .then(results => {
                setMovieList(results.data.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <SupeMovieList.Provider value={movieList}>
            {props.children}
        </SupeMovieList.Provider>
    )
}

export {SupeMovieList, SupeMovieListProvider}