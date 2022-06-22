import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Service from './components/service/Service'
import Plans from './components/plans/Plans'
import Foother from './components/foother/Foother'
import Map from './components/map/Map'

export const App = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <Service/>
        <Plans/>
        <Map/>
        <Foother/>
    </div>
  )
}

export default App