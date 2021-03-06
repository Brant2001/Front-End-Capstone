/*
    This module is responsible for managing how 
    a single hive will look and function.
*/

import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { HiveContext } from "./HiveProvider"
import { EditHiveForm } from "./EditHiveForm"
import "../App.css"

// This function will allow HiveList to pass hive data 
// through it to create HTML/JSX representations of a hive
export const Hive = ( { hive, setActiveList, currentApiary } ) => {
    const { deleteHive } = useContext(HiveContext)
    const apiary = currentApiary

     // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <section className="hive">
            <Button className="listBtn" color="outline-secondary" size="lg" block 
            onClick={() => {
                setActiveList({
                    list: "logs",
                    currentApiary: apiary,
                    currentHive: hive,
                })
            }}>
                <h3 className="hive__name">{hive.name}</h3>
                <div className="hive__bee">Type of Bee: {hive.beeType.type}</div>
                <div className="hive__type">Type of Hive: {hive.hiveType.type}</div>
                <div className="hive__queen">Age of Queen: {hive.queenAge}</div>
                
            </Button>
            <Button className="deleteBtn" size="sm"
                onClick={() => {
                    deleteHive(hive.id)
                }}
            >Delete</Button>

            <Button className="editBtn" size="sm"  
                onClick={() => {
                    toggleEdit()
                }}
            >Edit</Button>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {hive.name}
                </ModalHeader>
                <ModalBody>
                    <EditHiveForm key={hive.id} toggleEdit={toggleEdit} hive={hive} currentApiary={currentApiary}/>
                </ModalBody>
            </Modal>
        </section>
    ) 
}
