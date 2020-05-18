/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the Hives data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const HiveContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const HiveProvider = (props) => {
    const [hives, setHives] = useState([])

    const getHives = () => {
        return fetch("http://localhost:8088/hives?_expand=apiary&_expand=beeType&_expand=hiveType")
            .then(res => res.json())
            .then(setHives)
    }

    const addHive = hive => {
        return fetch("http://localhost:8088/hives", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hive)
        })
            .then(getHives)
    }

    const deleteHive = hiveId => {
        return fetch(`http://localhost:8088/Hives/${hiveId}`, {
            method: "DELETE"
        })
            .then(getHives)
    }

    const editHive = hive => {
        return fetch(`http://localhost:8088/Hives/${hive.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hive)
        })
            .then(getHives)
    }

    /*
        Load all Hives when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getHives()
    }, [])

    useEffect(() => {
        console.log("****  HIVE APPLICATION STATE CHANGED  ****")
    }, [hives])

    return (
        <HiveContext.Provider value={{
            hives, addHive, deleteHive, editHive
        }}>
            {props.children}
        </HiveContext.Provider>
    )
}