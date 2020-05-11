/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the insTypes data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const InsTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const InsTypeProvider = (props) => {
    const [insTypes, setInsTypes] = useState([])

    const getInsTypes = () => {
        return fetch("http://localhost:8088/insTypes")
            .then(res => res.json())
            .then(setInsTypes)
    }

    /*
        Load all insTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getInsTypes()
    }, [])

    useEffect(() => {
        console.log("****  INSTYPE APPLICATION STATE CHANGED  ****")
    }, [insTypes])

    return (
        <InsTypeContext.Provider value={{
            insTypes
        }}>
            {props.children}
        </InsTypeContext.Provider>
    )
}