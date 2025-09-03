import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Mini Blog</h1>

      <Routes>
        <Route path="/" element={<h2>Page d'accueil</h2>} />
        <Route path="/posts/:id" element={<h2>Détails d'un article</h2>} />
        <Route path="/create" element={<h2>Créer un article</h2>} />
      </Routes>
    </>
  )
}

export default App
