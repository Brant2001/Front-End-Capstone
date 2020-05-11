import React, { useContext, useState, useRef } from "react"
import { HiveContext } from "./HiveProvider"
import { BeeTypeContext } from "../types/BeeTypeProvider"
import { HiveTypeContext } from "../types/HiveTypeProvider"


export const EditHiveForm = ({ hive, toggleEdit, currentApiary }) => {
    const { editHive } = useContext(HiveContext)
    const { beeTypes } = useContext(BeeTypeContext)
    const { hiveTypes } = useContext(HiveTypeContext)

    // Separate state variable to track the hive as it is edited
    const [ updatedHive, setHive ] = useState(hive)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newHive = Object.assign({}, updatedHive)
        newHive[event.target.name] = event.target.value
        setHive(newHive)
    }
    const name = useRef()
    
    const updateHive = () => {
        
        if (name === "") {
            window.alert("Please select a name")
        } else {
            const apiaryId = currentApiary.id
            // create a new hive object  
            editHive({
                id: updatedHive.id,
                apiaryId: apiaryId,
                name: updatedHive.name,
                beeTypeId: updatedHive.beeTypeId,
                hiveTypeId: updatedHive.hiveTypeId,
                queenAge: updatedHive.queenAge,
            })
            // and save it to the API.
            .then(toggleEdit)
        }
    }


    return (
        <form className="hiveForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hive name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Hive name"
                        defaultValue={hive.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beeTypeId">Bee Type: </label>
                    <select name="beeTypeId" className="form-control"
                        defaultValue={hive.beeTypeId}
                        onChange={handleControlledInputChange}>
                    
                        <option value="0">Select a BeeType</option>
                        {beeTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hiveTypeId">Hive Type: </label>
                    <select name="hiveTypeId" className="form-control"
                        defaultValue={hive.hiveTypeId}
                        onChange={handleControlledInputChange}>
                    
                        <option value="0">Select a HiveType</option>
                        {hiveTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="queenAge">Queen Age: </label>
                    <input type="text" name="queenAge" required autoFocus className="form-control"
                        placeholder="Queen Age"
                        defaultValue={hive.queenAge}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    updateHive()
                }}>
                Save Updates
            </button>
        </form>
    )
}