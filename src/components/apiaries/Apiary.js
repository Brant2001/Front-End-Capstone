import React, { useContext } from "react"
import { Button } from "reactstrap"
import { ApiaryContext } from "./ApiaryProvider"

// When we use Apiary component in ApiaryList, React takes the keys passed
// to the Apiary component and puts it into one object

export const Apiary = ({apiary}) => {
    const { deleteApiary } = useContext(ApiaryContext)

    return (
        <section className="apiary">
            <h3 className="apiary__name">{apiary.name}</h3>
            <div className="apiary__loc">Location: {apiary.location}</div>
            <Button color="danger" onClick={() => {
                deleteApiary(apiary.id)
            }}>Delete</Button>
        </section>
    )
}