import React, { useContext, useState, useRef } from "react"
import { LogContext } from "./LogProvider"
import { InsTypeContext } from "../types/InsTypesProvider"


export const EditLogForm = ({ log, toggleEdit, currentHive }) => {
    const { editLog } = useContext(LogContext)
    const { insTypes } = useContext(InsTypeContext)

    // Separate state variable to track the Log as it is edited
    const [ updatedLog, setLog ] = useState(log)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newLog = Object.assign({}, updatedLog)
        newLog[event.target.name] = event.target.value
        setLog(newLog)
    }
    const date = useRef()
    
    const updateLog = () => {
        
        if (date === "") {
            window.alert("Please select a date")
        } else {
            const hiveId = currentHive.id
            // create a new log object  
            editLog({
                id: updatedLog.id,
                hiveId: hiveId,
                date: updatedLog.date,
                time: updatedLog.time,
                weather: updatedLog.weather,
                insTypeId: updatedLog.insTypeId,
                notes: updatedLog.notes,
            })
            // and save it to the API.
            .then(toggleEdit)
        }
    }


    return (
        <form className="logForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        placeholder="Log Date"
                        defaultValue={log.date}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        placeholder="Log Time"
                        defaultValue={log.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="weather">Weather: </label>
                    <input type="text" name="weather" required autoFocus className="form-control"
                        placeholder="Log Weather"
                        defaultValue={log.weather}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="insTypeId">Type of Inspection: </label>
                    <select name="insTypeId" className="form-control"
                        defaultValue={log.insTypeId}
                        onChange={handleControlledInputChange}>
                    
                        <option value="0">Select a Type of Inspection</option>
                        {insTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes: </label>
                    <input type="text" name="notes" required autoFocus className="form-control"
                        placeholder="Notes"
                        defaultValue={log.notes}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    updateLog()
                }}>
                Save Updates
            </button>
        </form>
    )
}