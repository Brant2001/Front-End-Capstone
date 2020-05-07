/*
    This module is responsible for managing or manipulating data
    from database.json that pertains to the Logs data
*/

import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LogProvider = (props) => {
    const [logs, setLogs] = useState([])

    const getLogs = () => {
        return fetch("http://localhost:8088/logs")
            .then(res => res.json())
            .then(setLogs)
    }

    const addLog = log => {
        return fetch("http://localhost:8088/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(log)
        })
            .then(getLogs)
    }

    const deleteLog = logId => {
        return fetch(`http://localhost:8088/Logs/${logId}`, {
            method: "DELETE"
        })
            .then(getLogs)
    }

    const editLog = log => {
        return fetch(`http://localhost:8088/Logs/${log.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(log)
        })
            .then(getLogs)
    }

    /*
        Load all Logs when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getLogs()
    }, [])

    useEffect(() => {
        console.log("****  LOG APPLICATION STATE CHANGED  ****")
    }, [logs])

    return (
        <LogContext.Provider value={{
            logs, addLog, deleteLog, editLog
        }}>
            {props.children}
        </LogContext.Provider>
    )
}