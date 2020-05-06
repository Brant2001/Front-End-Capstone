import React, { useState, useEffect } from "react"
import { ApiaryDashboard } from "./ApiaryDashboard"
import { Dashboard } from "./Dashboard"
import "../App.css"

export const DashboardCtrlr = () => {
    const [activeList, setActiveList] = useState("homePage")
    const [components, setComponents] = useState()

    // Components needed to display Apiaries
    const showHomePage = () => (
            <Dashboard view={setActiveList}/>
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