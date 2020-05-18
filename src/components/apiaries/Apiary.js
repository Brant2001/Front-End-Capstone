/*
    This module is responsible for managing how 
    a single apiary will look and function.
*/

import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { ApiaryContext } from "./ApiaryProvider"
import { EditApiaryForm } from "./EditApiaryForm"

// This function will allow ApiaryList to pass apairy data
// through it to create HTML/JSX representations of an apiary
export const Apiary = ({ apiary, setActiveList }) => {
    const { deleteApiary } = useContext(ApiaryContext)

     // Toggle edit modal
     const [editModal, setEditModal] = useState(false)
     const toggleEdit = () => setEditModal(!editModal)


    return (
        <section className="apiary">
            <Button className="apiaryBtn" color="outline-secondary" size="lg" block
                onClick={() => {
                    setActiveList({
                        list: "hives",
                        currentApiary: apiary,
                    })
                }}
            >
            <h3 className="apiary__name">{apiary.name}</h3>
            <div className="apiary__loc">Location: {apiary.location}</div>
            </Button>

            <Button className="deleteBtn" size="sm"
                onClick={() => {
                    deleteApiary(apiary.id)
                }}
            >Delete</Button>

            <Button className="editBtn" size="sm"  
                onClick={() => {
                    toggleEdit()
            }}>Edit🖊</Button>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {apiary.name}
                </ModalHeader>
                <ModalBody>
                    <EditApiaryForm key={apiary.id} toggleEdit={toggleEdit} apiary={apiary} />
                </ModalBody>
            </Modal>
        </section>
    )
}
