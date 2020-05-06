/*
    This module is responsible for managing how 
    a single apiary will look and function.
*/

import React, { useContext } from "react"
import { Button } from "reactstrap"
import { ApiaryContext } from "./ApiaryProvider"

// This function will allow ApiaryList to pass apairy data
// through it to create HTML/JSX representations of an apiary
export const Apiary = ({ apiary, setActiveList }) => {
    const { deleteApiary } = useContext(ApiaryContext)

    return (
        <section className="apiary">
            <Button color="outline-secondary" size="lg" block
                onClick={() => {
                    setActiveList({
                        list: "apiaries",
                        currentApiary: apiary,
                    })
                }}
            >
            <h3 className="apiary__name">{apiary.name}</h3>
            <div className="apiary__loc">Location: {apiary.location}</div>
            </Button>
            <Button size="sm" color="danger"
                onClick={() => {
                    deleteApiary(apiary.id)
                }}
            >Delete</Button>
        </section>
    )
}
