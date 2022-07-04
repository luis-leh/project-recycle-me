import React from 'react'
import Recyclables from './Recyclables'
import Organics from './Organics'
import General from './General'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Recycling</h1>
        <img className="headerImage" src="./images/recycling-symbol-1.png" alt="Recyling symbol arrows" />
      </header>
      <section className="main">
        <div><Recyclables /></div>
        <div><Organics /></div>
        <div><General /></div>
      </section>
    </>
  )
}

export default App