/*
    This module is responsible for taking in data and code
    from other modules to provide a list of our apiaries.
*/

import React, { useContext, useState } from "react"
import { ApiaryContext } from "./ApiaryProvider"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { Apiary } from "./Apiary"
import { ApiaryForm } from "./ApiaryForm"
import "./Apiary.css"

// This function declares variables and uses them to map through the apiaries and find the ones that 
export const ApiaryList = ( { setActiveList } ) => {
    const { apiaries } = useContext(ApiaryContext)
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('hiveLogger_user')
    const matchingUserApiaries = apiaries.filter(userApiary => userApiary.userId === parseInt(currentUserId))

    return (
        <>
            <div className="listHead">
                <h2>Apiaries</h2>
                <Button className="addBtn" onClick={toggle}>＋</Button>
            </div>
            <div className="apiaries">
                {
                    matchingUserApiaries.map(api => {
                        return <Apiary setActiveList={setActiveList} key={api.id} apiary={api}/>
                    })
                }
            </div>

            

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


