import React from "react"
import { LogProvider } from "../logs/LogProvider"
import { LogList } from "../logs/LogList"
import { InsTypeProvider } from "../types/InsTypesProvider"
import { Button } from "reactstrap"
import "../App.css"


export const LogDashboard = ( { currentHive, currentApiary, setActiveList } ) => {
    const hive = currentHive
    const apiary = currentApiary
    
    return (
            <div className="logContainer">
                <Button color="outline-secondary" 
                onClick={() => {
                setActiveList({
                    list: "hives",
                    currentApiary: apiary,
                })
                }}>⇦</Button>
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
