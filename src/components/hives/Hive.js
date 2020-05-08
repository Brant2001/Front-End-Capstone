/*
    This module is responsible for managing how 
    a single hive will look and function.
*/

import React, { useContext } from "react"
import { Button } from "reactstrap"
import { HiveContext } from "./HiveProvider"

// This function will allow HiveList to pass hive data 
// through it to create HTML/JSX representations of a hive
export const Hive = ( { hive, setActiveList } ) => {
    const { deleteHive } = useContext(HiveContext)
    
    return (
        <section className="hive">
            <Button color="outline-secondary" size="lg" block 
            onClick={() => {
                setActiveList({
                    list: "logs",
                    currentHive: hive,
                })
            }}>
                <h3 className="hive__name">{hive.name}</h3>
                <div className="hive__bee">Type of Bee: {hive.beeTypeId}</div>
                <div className="hive__type">Type of Hive: {hive.hiveTypeId}</div>
                <div className="hive__queen">Age of Queen: {hive.queenAge}</div>
            </Button>
            <Button color="danger" onClick={() => {
                deleteHive(hive.id)
            }}>Delete</Button>
        </section>
    )
}
