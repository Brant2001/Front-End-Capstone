/*
    This module is responsible for taking in data and code
    from other modules to provide a list of our apiaries.
*/

import React, { useContext, useState } from "react"
import { ApiaryContext } from "./ApiaryProvider"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { UserContext } from "../users/UserProvider"
import { Apiary } from "./Apiary"
import ApiaryForm from "./ApiaryForm"
import "./Apiary.css"

// This function declares variables and uses them to map through the apiaries and find the ones that 
export const ApiaryList = () => {
    const { apiaries } = useContext(ApiaryContext)
    const { users } = useContext(UserContext)
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('hiveLogger_user')
    
// const matchingUser = users.find(user => user.id === api.userId)
    return (
        <>
            <h2>Apiaries</h2>

            <div className="apiaries">
                {
                    apiaries.map(api => {
                        const matchingUser = apiaries.filter(userApiary => userApiary.userId === parseInt(currentUserId))
                        
                        return <Apiary key={api.id} apiary={api}
                            user={matchingUser}/>
                    })
                }
            </div>

            <Button onClick={toggle}>Add Apiary</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Apiary
                </ModalHeader>
                <ModalBody>
                    <ApiaryForm toggler={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}


