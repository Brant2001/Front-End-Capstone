import React from "react"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import "../App.css"


export const ApiaryDashboard = ( { currentApiary } ) => {
    const apiary = currentApiary
    return (
            <div className="hiveContainer">
                <h1>{apiary.name}</h1>
                <small>{apiary.location}</small>
                    <HiveProvider>
                        <HiveList currentApiary={currentApiary}/>
                    </HiveProvider>
            </div>
    )
}
