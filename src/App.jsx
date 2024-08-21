import { useEffect, useState } from 'react'
//import axios from 'axios'

import spotService from './services/spots.js'
import  SpotList  from './components/SpotList.jsx'
import AddSpotForm from './components/AddSpotForm.jsx'



function App() {
  const [spots, setSpots] = useState(null)
  const [spotFormData, setSpotFromData] = useState({
    spottedSpecies: "Silokki",
    location: "{x:100, y:100}",
    availability: "medium"
  })


  useEffect(() => {
    spotService
      .getAll()
      .then(response => {
        setSpots(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const addSpot = (event) => {
    event.preventDefault()
    
    const newSpot = {
      spottedSpecies: spotFormData.spottedSpecies,
      location: spotFormData.location,
      whoSpotted: "testUser",
      speciesAvailability: spotFormData.availability
    }

    spotService.create(newSpot).then(resp => {
      setSpots([...spots, resp.data])
    })
  }


  const handleFormChange = (event) => {
    const {name, value} = event.target
    setSpotFromData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }


  const deleteSpot = spot => {
    spotService.deleteId(spot.id)
    setSpots([...spots.filter(filterSpot => filterSpot.id !== spot.id)])
  }

  /* 
  color scheme
  https://visme.co/blog/website-color-schemes/
  */

  return (
    <>
      <AddSpotForm addSpot={addSpot} spotFormData={spotFormData} handleFormChange={handleFormChange}/>
      <SpotList spots={spots} deleteSpot={deleteSpot}/>
    </>
  )
}

export default App
