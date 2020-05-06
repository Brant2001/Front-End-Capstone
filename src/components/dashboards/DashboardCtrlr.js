import React, { useState, useEffect } from "react"
import { ApiaryDashboard } from "./ApiaryDashboard"
import { Dashboard } from "./Dashboard"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import "../App.css"

export const DashboardCtrlr = () => {
    const [activeList, setActiveList] = useState({
        list: "homePage",
        currentApiary: {}
    })
    const [components, setComponents] = useState()

    // Components needed to display Apiaries
    const showHomePage = () => (
            <Dashboard setActiveList={setActiveList} />
    )
    // Components needed to display Apiaries
    const showApiaries = () => (
        <ApiaryProvider>
            <ApiaryDashboard currentApiary={activeList.currentApiary} />
        </ApiaryProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList.list === "homePage") {
            setComponents(showHomePage)
        } 
        else if  (activeList.list === "apiaries") {
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