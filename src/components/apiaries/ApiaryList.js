import React, { useContext, useState } from "react"
import { ApiaryContext } from "./ApiaryProvider"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import { UserContext } from "../users/UserProvider"
import { Apiary } from "./Apiary"
import ApiaryForm from "./ApiaryForm"
import "./Apiary.css"

export const ApiaryList = () => {
    const { apiaries } = useContext(ApiaryContext)
    const { users } = useContext(UserContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    
    return (
        <>
            <h2>Apiaries</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("hiveLogger_user")

                // If the user is authenticated, show the apiary form
                if(userId){
                    toggle()
                }
            }}>Show Apiaries</Button>
            <div className="apiaries">
                {
                    apiaries.map(api => {
                        const matchingUser = users.find(user => user.id === api.userId)

                        return <Apiary key={api.id} apiary={api}
                            user={matchingUser}/>
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


