import { MapIcon } from "../icons/MapIcon"
import '../styles/SpotList.css'

const SpotListElement = ({spot, deleteSpot}) => {
  return(
    <>
      <li key={spot.id} className='SpotListElement'>

        <div className='SpotListElementLeft'>
          <MapIcon/>
        </div>

        <div className='SpotListElementRight'>
          <p>{spot.spottedSpecies}</p>
          <p>{spot.whoSpotted}</p>
          <p>{spot.speciesAvailability}</p>
          <p>{spot.date}</p>
        </div>

        <div className="SpotListElementButton">
          <button onClick={() => deleteSpot(spot)}>Delete</button>
        </div>
      </li>
    </>
  )
}

const SpotList = ({spots, deleteSpot}) => {
  if(!spots || !Array.isArray(spots)){
    return (
      <>
        <p>no spots or server down?</p>
      </>
    )
  }

  return(
    <>
      <ul className='SpotList'>
        {spots.map(spot => <SpotListElement key={spot.id} spot={spot} deleteSpot={deleteSpot}/>)}
      </ul>
    </>
  )
}

export default SpotList