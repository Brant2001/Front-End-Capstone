/*
    This module is responsible for taking in data and code
    from other modules to provide a list of our logs.
*/

import React, { useContext, useState } from "react"
import { LogContext } from "./LogProvider"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { Log } from "./Log"
// import LogForm from "./LogForm"
import "./Log.css"

/* 
    This function declares variables and uses them to map 
    through the logs and find the ones that match the current
    user and use Log.js to render them as DOM elements.
*/
export const LogList = ( { currentHive } ) => {
    const { logs } = useContext(LogContext)
    const hive = currentHive

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const hiveLogs = logs.filter(log => hive.id === log.hiveId)
    return (
        <>
            <h2>Logs</h2>

            <div className="logs">
                {
                    hiveLogs.map(lg => {
                        return <Log currentHive={currentHive} key={lg.id} log={lg}/>
                    })
                }
            </div>
            {/* This function also provides an add button that will open a log form */}
            <Button onClick={toggle}>Add Log</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Log
                </ModalHeader>
                <ModalBody>
                    {/* <LogForm toggler={toggle}/> */}
                </ModalBody>
            </Modal>
        </>
    )
}


