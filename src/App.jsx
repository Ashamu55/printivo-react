import React from 'react'
import Navbar from './components/Navbar'
import Navbaar from './components/Navbaar'
import Props from './components/Props'

function App() {
  return (
    <div>
      <Navbar/>
      <Navbaar/>
      <Props text="Two-sided Business Cards" amount="₦15,100 per 100"/>
      <Props text="A5 flyers (Single Sided)"/>
    </div>
  )
}

export default App