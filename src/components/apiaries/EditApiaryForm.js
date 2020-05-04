import React, { useContext, useState, useRef } from "react"
import { ApiaryContext } from "./ApiaryProvider"


export const EditApiaryForm = ({ apiary, customer, toggleEdit }) => {
    const { updateApiary } = useContext(ApiaryContext)

    // Separate state variable to track the apiary as it is edited
    const [ updatedApiary, setApiary ] = useState(apiary)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newApiary = Object.assign({}, updatedApiary)
        newApiary[event.target.name] = event.target.value
        setApiary(newApiary)
    }

    const editApiary = () => {
        const location = useRef()

        if (location === "") {
            window.alert("Please select a location")
        } else {
            updateApiary({
                id: updatedApiary.id,
                name: updatedApiary.name,
                location: location.current.value,
                customerId: parseInt(localStorage.getItem("kennel_customer"))
            })
                .then(toggleEdit)
        }
    }

    return (
        <form className="apiaryForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Apiary name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Apiary name"
                        defaultValue={apiary.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Apiary breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Apiary breed"
                        defaultValue={apiary.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        defaultValue={apiary.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer:</label>
                    <input type="text" name="customer" disabled className="form-control"
                        defaultValue={customer.name}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editApiary()
                }}>
                Save Updates
            </button>
        </form>
    )
}