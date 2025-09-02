import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

function App() {

  const [fruits,setFruits] = useState([
    {id:'2', name:'Banane', isFavorite: true},
    {id:'3', name:'Pomme', isFavorite: false},
    {id:'4', name:'Kiwi', isFavorite: false}
  ])

function handleClick(id) {
    const next = fruits.map((f) => 
    f.id === id ? {...f, isFavorite: !f.isFavorite} : f)
    setFruits(next);
  }


  return (
    <>
      <div>
        <Basket items={fruits} onClick={handleClick} />
      </div>
    </>
  )
}

function Basket({items, onClick}) {
  return (
    <ul className='unordered-list'>
      {items.map(item => (
        <li key={item.id} className='list-item'>
          <button type="button" className='button-list' onClick={() => onClick(item.id)}>
            {item.name} - {item.isFavorite ? 'Favori' : 'Non Favori'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default App
