import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function Card(props) {
  console.log("props",props);
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-600 text-white p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card />
      <Card />
    
    </>
  );
}

export default App
