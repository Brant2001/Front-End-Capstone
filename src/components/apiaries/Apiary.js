import React from "react"

// When we use Apiary component in ApiaryList, React takes the keys passed
// to the Apiary component and puts it into one object
export const Apiary = ({apiary}) => (
    <section className="apiary">
        <h3 className="apiary__name">{apiary.name}</h3>
    </section>
)