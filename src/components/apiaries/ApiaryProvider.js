/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the apiaries data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ApiaryContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ApiaryProvider = (props) => {
    const [apiaries, setApiaries] = useState([])

    const getApiaries = () => {
        return fetch("http://localhost:8088/apiaries")
            .then(res => res.json())
            .then(setApiaries)
    }

    const addApiary = apiary => {
        return fetch("http://localhost:8088/apiaries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiary)
        })
            .then(getApiaries)
    }

    const deleteApiary = apiaryId => {
        return fetch(`http://localhost:8088/apiaries/${apiaryId}`, {
            method: "DELETE"
        })
            .then(getApiaries)
    }

    const editApiary = apiary => {
        return fetch(`http://localhost:8088/apiaries/${apiary.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiary)
        })
            .then(getApiaries)
    }

    /*
        Load all Apiaries when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getApiaries()
    }, [])

    useEffect(() => {
        console.log("****  APIARY APPLICATION STATE CHANGED  ****")
    }, [apiaries])

    return (
        <ApiaryContext.Provider value={{
            apiaries, addApiary, deleteApiary, editApiary
        }}>
            {props.children}
        </ApiaryContext.Provider>
    )
}