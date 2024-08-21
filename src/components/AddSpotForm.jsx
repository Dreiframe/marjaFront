import '../styles/AddSpotForm.css'

const AddSpotForm = ({addSpot, spotFormData, handleFormChange}) => {
    return(
      <>
        <form onSubmit={addSpot} className="SpotForm">
            <div>
                <p>Species</p>
                <input 
                value={spotFormData.spottedSpecies}
                onChange={handleFormChange}
                name='spottedSpecies'
                />
            </div>
    
            <div>
                <p>Location X Y</p>
                <input 
                value={spotFormData.location}
                onChange={handleFormChange}
                name='location'
                />
            </div>
    
            <div>
                <p>Availability</p>
                <input 
                value={spotFormData.availability}
                onChange={handleFormChange}
                name='availability'
                />
            </div>
  
          <button type='submit'>Add</button>
        </form>
      </>
    )
}

export default AddSpotForm