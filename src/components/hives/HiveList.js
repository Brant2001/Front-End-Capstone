/*
    This module is responsible for taking in data and code
    from other modules to provide a list of our hives.
*/

import React, { useContext, useState } from "react"
import { HiveContext } from "./HiveProvider"
import { Modal, ModalBody, ModalHeader, Button} from "reactstrap"
import { Hive } from "./Hive"
import { HiveForm } from "./HiveForm"
import "./Hive.css"
import { BeeTypeContext } from "../types/BeeTypeProvider"
import { HiveTypeContext } from "../types/HiveTypeProvider"

/* 
    This function declares variables and uses them to map 
    through the hives and find the ones that match the current
    user and use Hive.js to render them as DOM elements.
*/
export const HiveList = ( { currentApiary, setActiveList } ) => {
    const { hives } = useContext(HiveContext)
    const { beeTypes } = useContext(BeeTypeContext)
    const { hiveTypes } = useContext(HiveTypeContext)
    const apiary = currentApiary
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const apiaryHives = hives.filter(hive => apiary.id === hive.apiaryId)
    return (
        <>
            <div className="listHead">
                <h2>Hives</h2>
                <Button className="addBtn" onClick={toggle}>＋</Button>
            </div>
            <div className="hives">
                {
                    apiaryHives.map(hv => {
                        const matchingBeeType = beeTypes.find(beeT => beeT.id === hv.beeTypeId)
                        const matchingHiveType = hiveTypes.find(hiTy => hiTy.id === hv.hiveTypeId)
                        console.log(matchingBeeType)
                        return <Hive hive={hv} key={hv.id} 
                                setActiveList={setActiveList} 
                                currentApiary={currentApiary} 
                                beeType={matchingBeeType}
                                hiveType={matchingHiveType} />
                    })
                }
            </div>
            {/* This function also provides an add button that will open a hive form */}
            

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Hive
                </ModalHeader>
                <ModalBody>
                    <HiveForm toggler={toggle} currentApiary={currentApiary}/>
                </ModalBody>
            </Modal>
        </>
    )
}


