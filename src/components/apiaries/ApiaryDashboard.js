import React from "react"
import { ApiaryProvider } from "./apiaries/ApiaryProvider"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import "./App.css"

export const ApiaryDashboard = ({ apiary }) => {
    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <h1>{apiary.name}</h1>
                <small>{apiary.location}</small>
                    <ApiaryProvider>
                        <HiveProvider>
                            <HiveList />
                        </HiveProvider>
                    </ApiaryProvider>
            </div>
        </div>
    )
}
