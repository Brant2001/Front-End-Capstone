/*
    This module is responsible for taking in data and code
    from other modules to provide a list of our hives.
*/

import React, { useContext, useState } from "react"
import { HiveContext } from "./HiveProvider"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { Hive } from "./Hive"
import HiveForm from "./HiveForm"
import "./Hive.css"

/* 
    This function declares variables and uses them to map 
    through the hives and find the ones that match the current
    user and use Hive.js to render them as DOM elements.
*/
export const HiveList = () => {
    const { hives } = useContext(HiveContext)
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('hiveLogger_user')
    const matchingUserHives = hives.filter(userHive => userHive.userId === parseInt(currentUserId))

    return (
        <>
            <h2>Hives</h2>

            <div className="hives">
                {
                    matchingUserHives.map(api => {
                        
                        
                        return <Hive key={api.id} hive={api}
                            user={matchingUserHives}/>
                    })
                }
            </div>
            {/* This function also provides an add button that will open a hive form */}
            <Button onClick={toggle}>Add Hive</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Hive
                </ModalHeader>
                <ModalBody>
                    <HiveForm toggler={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}


