/*
    This module is responsible for managing how 
    a single log will look and function.
*/

import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { LogContext } from "./LogProvider"
import { EditLogForm } from "./EditLogForm"

// This function will allow LogList to pass log data 
// through it to create HTML/JSX representations of a log
export const Log = ( { log, currentHive } ) => {
    const { deleteLog } = useContext(LogContext)
    
    // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <section className="log">
            <Button color="outline-secondary" size="sm" block>
                <h3 className="log__date">{log.date} Log</h3>
                <div className="log__time">Time: {log.time}</div>
                <div className="log__weather">Weather: {log.weather}</div>
                <div className="log__type">Type of Inspection: {log.insTypeId}</div>
                <div className="log__notes">Notes: {log.notes}</div>
            </Button>
            <Button size="sm" color="danger" onClick={() => {
                deleteLog(log.id)
            }}>Delete</Button>

            <Button size="sm" color="warning" onClick={() => {
                toggleEdit()
            }}>Edit🖊</Button>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {log.name}
                </ModalHeader>
                <ModalBody>
                    <EditLogForm key={log.id} toggleEdit={toggleEdit} log={log} currentHive={currentHive}/>
                </ModalBody>
            </Modal>
        </section>
    )
}
