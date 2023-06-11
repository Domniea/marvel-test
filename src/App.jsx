import { useState,useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import HeroCard from './components/HeroCard'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import Alphabet from './components/Alphabet'
import LetterGroup from './components/LetterGroup'
import NotFound from './components/NotFound'
import './App.css'


function App() {

  return (
    <div className="App">

      <nav className='app--nav'>
        <Link to={'/'} >Home</Link>
        <Link to={'/movieList'} >Movies</Link>
        <Link to={'/heros'} >Heros/Villians</Link>
      </nav>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/movieList' element={<MovieList/>} />
        <Route path='/movieList/:movieId/*' element={<MovieCard/>} />
        <Route path='/heros' element={<Alphabet />} >
          <Route path=':letter' element={<LetterGroup />} />
          <Route path=':letter/:heroId' element={<HeroCard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
