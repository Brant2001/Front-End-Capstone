import React, { useState, useEffect } from "react"
import { ApiaryDashboard } from "../apiaries/ApiaryDashboard"
import "./Layout.css"
import "./Kennel.css"

export const Dashboard = () => {
    const [activeList, setActiveList] = useState("homePage")
    const [components, setComponents] = useState()

    // Components needed to display Apiaries
    const showHomePage = () => (
            <Dashboard />
    )
    // Components needed to display Apiaries
    const showApiaries = () => (
            <ApiaryDashboard />
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "homePage") {
            setComponents(showHomePage)
        } 
        else if  (activeList === "apiaries") {
            setComponents(showApiaries)
        }
    }, [activeList])

    return (
        <div className="mainContainer">
            <div className="listDisplay">
                {components}
            </div>
        </div>
    )
}