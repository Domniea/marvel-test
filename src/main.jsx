import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {SupeListProvider} from './SupeListContext'
import { SupeMovieListProvider } from './SupeMovieContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <SupeListProvider>
      <SupeMovieListProvider>
        <App />
      </SupeMovieListProvider>
    </SupeListProvider>
  </Router>
)
