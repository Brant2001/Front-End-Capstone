import React, { useContext, useRef } from "react"
import { LogContext } from "./LogProvider"
import { InsTypeContext } from "../types/InsTypesProvider"


export const LogForm = ( { toggler, currentHive} ) => {
    const { addLog } = useContext(LogContext)
    const { insTypes } = useContext(InsTypeContext)

    const date = useRef()
    const time = useRef()
    const weather = useRef()
    const insType = useRef()
    const notes = useRef()

    const constructNewLog = () => {
        const insTypeId = parseInt(insType.current.value)
        const hiveId = currentHive.id
        // create a new log object  
        const newLogObj = {
            date: date.current.value,
            time: time.current.value,
            weather: weather.current.value,
            insTypeId: insTypeId,
            notes: notes.current.value,
            hiveId: hiveId
        }
        console.log(newLogObj)
        // and save it to the API.
        addLog(newLogObj).then(toggler)
    }

    return (
        <form className="hiveForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="logDate">Log Date: </label>
                    <input
                        type="date"
                        id="logDate"
                        ref={date}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Date"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="logTime">Log Time: </label>
                    <input
                        type="time"
                        id="logDate"
                        ref={time}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Time"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="logWeather">Weather: </label>
                    <input
                        type="text"
                        id="logWeather"
                        ref={weather}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Weather"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="insType">Assign a Type of Inspection : </label>
                    <select
                        defaultValue=""
                        name="insType"
                        ref={insType}
                        id="insType"
                        className="form-control"
                    >
                        <option value="0">Type of Inspection</option>
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
                    <label htmlFor="logNotes">Notes: </label>
                    <input
                        type="text"
                        id="logNotes"
                        ref={notes}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Notes"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        // Prevent browser from submitting the form
                        evt.preventDefault() 
                        // create the log function goes here
                        constructNewLog()
                    }
                }
                className="btn btn-primary">
                Create Log
            </button>
        </form>
    )
}