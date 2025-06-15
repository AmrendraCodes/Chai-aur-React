import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp() {
    return(
        <div>
            <h1>My custom App!!!</h1>
        </div>
    )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// };

const anotheruser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me visit to google',
      anotheruser
)




createRoot(document.getElementById('root')).render(
 
reactElement )
