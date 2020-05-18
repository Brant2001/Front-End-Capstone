/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the beeTypes data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const BeeTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BeeTypeProvider = (props) => {
    const [beeTypes, setBeeTypes] = useState([])

    const getBeeTypes = () => {
        return fetch("http://localhost:8088/beeTypes")
            .then(res => res.json())
            .then(setBeeTypes)
            
    }
    /*
        Load all beeTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBeeTypes()
    }, [])

    useEffect(() => {
        console.log("****  BEETYPE APPLICATION STATE CHANGED  ****")
    }, [beeTypes])

    return (
        <BeeTypeContext.Provider value={{
            beeTypes
        }}>
            {props.children}
        </BeeTypeContext.Provider>
    )
}