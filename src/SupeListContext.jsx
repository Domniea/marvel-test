import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const SupeList = createContext()

function SupeListProvider(props) {
    const [mainList, setMainList] = useState('')

    const getSections = (words) => {
        if (words.length === 0) {
            return [];
        }
        return Object.values(
            words.reduce((acc, word) => {
            let firstLetter = word.name[0];
            if (!acc[firstLetter]) {
                acc[firstLetter] = { title: firstLetter, data: [word] };
            } else {
                acc[firstLetter].data.push(word);
            }
            return acc;
            }, {})
        );
    }

    useEffect(() => {
        axios.get('https://akabab.github.io/superhero-api/api/all.json')
            .then(results => {
                const data = results.data
                const justMarvel = []
                data.map(hero => {
                    if(hero.biography.publisher === 'Marvel Comics') {
                    justMarvel.push(hero)
                    }
                })
    
                setMainList(getSections(justMarvel))
                })
            
            .catch(error => console.log(error))
    }, [])

    return (
        <SupeList.Provider value={mainList} >
            {props.children}
        </SupeList.Provider>
    )
}

export {SupeList, SupeListProvider}