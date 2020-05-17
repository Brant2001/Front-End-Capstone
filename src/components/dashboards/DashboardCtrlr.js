import React, { useState, useEffect } from "react"
import { ApiaryDashboard } from "./ApiaryDashboard"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import { HiveDashboard } from "./HiveDashboard"
import { HiveProvider } from "../hives/HiveProvider"
import { LogDashboard } from "./LogDashboard"
import "../App.css"

export const DashboardCtrlr = () => {
    const [activeList, setActiveList] = useState({
        list: "homePage",
        currentApiary: {}
    })
    const [components, setComponents] = useState()

    // Components needed to display Apiaries
    const showHomePage = () => (
            <ApiaryDashboard setActiveList={setActiveList} />
    )
    // Components needed to display Hives
    const showHives = () => (
        <ApiaryProvider>
            <HiveDashboard currentApiary={activeList.currentApiary} setActiveList={setActiveList} />
        </ApiaryProvider>
    )
    // Components needed to display Logs
    const showLogs = () => (
        <HiveProvider>
            <LogDashboard currentHive={activeList.currentHive} currentApiary={activeList.currentApiary} setActiveList={setActiveList} />
        </HiveProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList.list === "homePage") {
            setComponents(showHomePage)
        } 
        else if  (activeList.list === "hives") {
            setComponents(showHives)
        }
        else if  (activeList.list === "logs") {
            setComponents(showLogs)
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