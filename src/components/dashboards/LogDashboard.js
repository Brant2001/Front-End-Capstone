import React from "react"
import { LogProvider } from "../logs/LogProvider"
import { LogList } from "../logs/LogList"
import "../App.css"
import { InsTypeProvider } from "../types/InsTypesProvider"


export const LogDashboard = ( { currentHive } ) => {
    const hive = currentHive
    
    return (
            <div className="logContainer">
                <h1>{hive.name}</h1>
                <div className="hiveInfo">
                    <p>{hive.apiaryId}</p>
                    <p>{hive.hiveTypeId}</p>
                    <p>{hive.beeTypeId}</p>
                    <p>{hive.queenAge}</p>
                </div>
                <InsTypeProvider>
                    <LogProvider>
                        <LogList currentHive={currentHive}/>
                    </LogProvider>
                </InsTypeProvider>
            </div>
    )
}
