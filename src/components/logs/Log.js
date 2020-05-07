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
        <Button color="outline-secondary" size="sm" block>
            <section className="log">
                <h3 className="log__name">{log.date} Log</h3>
                <Button color="danger" onClick={() => {
                    deleteLog(log.id)
                }}>Delete</Button>
            </section>
        </Button>
    )
}
