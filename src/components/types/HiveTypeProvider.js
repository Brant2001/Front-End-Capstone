/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the hiveTypes data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const HiveTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const HiveTypeProvider = (props) => {
    const [hiveTypes, setHiveTypes] = useState([])

    const getHiveTypes = () => {
        return fetch("http://localhost:8088/hiveTypes")
            .then(res => res.json())
            .then(setHiveTypes)
    }

    /*
        Load all hiveTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getHiveTypes()
    }, [])

    useEffect(() => {
        console.log("****  HIVETYPE APPLICATION STATE CHANGED  ****")
    }, [hiveTypes])

    return (
        <HiveTypeContext.Provider value={{
            hiveTypes
        }}>
            {props.children}
        </HiveTypeContext.Provider>
    )
}