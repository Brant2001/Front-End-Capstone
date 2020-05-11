/*
    This module is responsible for managing how 
    a single log will look and function.
*/

import React, { useContext } from "react"
import { Button } from "reactstrap"
import { LogContext } from "./LogProvider"

// This function will allow LogList to pass log data 
// through it to create HTML/JSX representations of a log
export const Log = ( { log } ) => {
    const { deleteLog } = useContext(LogContext)
    
    return (
        <section className="log">
            <Button color="outline-secondary" size="sm" block>
                <h3 className="log__date">{log.date} Log</h3>
                <div className="log__time">Time: {log.time}</div>
                <div className="log__weather">Weather: {log.weather}</div>
                <div className="log__type">Type of Inspection: {log.insTypeId}</div>
                <div className="log__notes">Notes: {log.notes}</div>
            </Button>
            <Button color="danger" onClick={() => {
                deleteLog(log.id)
            }}>Delete</Button>
        </section>
    )
}
