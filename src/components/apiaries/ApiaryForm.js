import React, { useContext, useRef } from "react"
import { ApiaryContext } from "./ApiaryProvider"

export default props => {
    const { addApiary } = useContext(ApiaryContext)

    const name = useRef()
    const location = useRef()

    const constructNewApiary = () => {
        const userId = parseInt(localStorage.getItem("hiveLogger_user"))
        // create a new apiary object  
        // Make sure that the apiary object has the customerId foreign key on it.
        const newApiaryObj = {
            name: name.current.value,
            location: location.current.value,
            userId: userId
        }
        console.log(newApiaryObj)
        // and save it to the API.
        addApiary(newApiaryObj).then(props.toggler)
    }

    return (
        <form className="apiaryForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apiaryName">Name of Apiary: </label>
                    <input
                        type="text"
                        id="apiaryName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="apiary name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="apiaryLocation">Location of Apiary: </label>
                    <input
                        type="text"
                        id="apiaryLocation"
                        ref={location}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="apiary location"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        // create the apiary function goes here
                        constructNewApiary()
                    }
                }
                className="btn btn-primary">
                Admit Apiary
            </button>
        </form>
    )
}