/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the Users data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/Users")
            .then(res => res.json())
            .then(setUsers)
    }

    /*
        Load all Users when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log("****  USER APPLICATION STATE CHANGED  ****")
    }, [users])

    return (
        <UserContext.Provider value={{
            users
        }}>
            {props.children}
        </UserContext.Provider>
    )
}