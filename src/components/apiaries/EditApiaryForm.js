import React, { useContext, useState, useRef } from "react"
import { ApiaryContext } from "./ApiaryProvider"


export const EditApiaryForm = ({ apiary, toggleEdit }) => {
    const { editApiary } = useContext(ApiaryContext)

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
    const location = useRef()

    const updateApiary = () => {

        if (location === "") {
            window.alert("Please select a location")
        } else {
            editApiary({
                id: updatedApiary.id,
                name: updatedApiary.name,
                location: updatedApiary.location,
                userId: parseInt(localStorage.getItem("hiveLogger_user"))
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
                    <label htmlFor="location">Apiary location: </label>
                    <input type="text" name="location" required className="form-control"
                        placeholder="Apiary location"
                        defaultValue={apiary.location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    updateApiary()
                }}>
                Save Updates
            </button>
        </form>
    )
}