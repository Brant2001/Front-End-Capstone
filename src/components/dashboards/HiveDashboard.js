import React from "react"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import "../App.css"


export const HiveDashboard = ( { currentApiary, setActiveList} ) => {
    const apiary = currentApiary
    return (
            <div className="hiveContainer">
                <h1>{apiary.name}</h1>
                <small>{apiary.location}</small>
                    <HiveProvider>
                        <HiveList currentApiary={currentApiary} setActiveList={setActiveList}/>
                    </HiveProvider>
            </div>
    )
}
