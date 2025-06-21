import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
 const [count, SetCount] = useState(0)
 let myObj = {
  username : "hitesh",
  age: 21
 }
 let myArr= [1,2,3]
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-600 text-white p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username ="chai aur react" btnText = "click me"/>
      <Card username ="hitesh" btnText = "visit me"/>
    
    </>
  );
}

export default App
