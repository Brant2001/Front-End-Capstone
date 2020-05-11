import React, { useContext, useRef } from "react"
import { HiveContext } from "./HiveProvider"
import { BeeTypeContext } from "../types/BeeTypeProvider"
import { HiveTypeContext } from "../types/HiveTypeProvider"

export const HiveForm = ( { toggler, currentApiary} ) => {
    const { addHive } = useContext(HiveContext)
    const { beeTypes } = useContext(BeeTypeContext)
    const { hiveTypes } = useContext(HiveTypeContext)

    const name = useRef()
    const beeType = useRef()
    const hiveType = useRef()
    const queenAge = useRef()

    const constructNewHive = () => {
        const beeTypeId = parseInt(beeType.current.value)
        const hiveTypeId = parseInt(hiveType.current.value)
        const apiaryId = currentApiary.id
        // create a new hive object  
        const newHiveObj = {
            name: name.current.value,
            queenAge: queenAge.current.value,
            beeTypeId: beeTypeId,
            hiveTypeId: hiveTypeId,
            apiaryId: apiaryId
        }
        console.log(newHiveObj)
        // and save it to the API.
        addHive(newHiveObj).then(toggler)
    }

    return (
        <form className="hiveForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hiveName">Name of Hive: </label>
                    <input
                        type="text"
                        id="hiveName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="hive name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beeType">Assign to BeeType: </label>
                    <select
                        defaultValue=""
                        name="beeType"
                        ref={beeType}
                        id="beeType"
                        className="form-control"
                    >
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
                    <label htmlFor="hiveType">Assign to a Type of Hive: </label>
                    <select
                        defaultValue=""
                        name="hiveType"
                        ref={hiveType}
                        id="hiveType"
                        className="form-control"
                    >
                        <option value="0">Select a Type of Hive</option>
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
                    <label htmlFor="queenAge">Age of current queen: </label>
                    <input
                        type="text"
                        id="queenAge"
                        ref={queenAge}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="queen age"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        // Prevent browser from submitting the form
                        evt.preventDefault() 
                        // create the hive function goes here
                        constructNewHive()
                    }
                }
                className="btn btn-primary">
                Create Hive
            </button>
        </form>
    )
}