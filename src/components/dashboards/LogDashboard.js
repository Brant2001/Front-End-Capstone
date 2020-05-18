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
                <div className="logHeader">
                    <Button color="outline-secondary" 
                    onClick={() => {
                    setActiveList({
                        list: "hives",
                        currentApiary: apiary,
                    })
                    }}>⇦</Button>
                    <h1>{hive.name}</h1>
                    <Button size="sm"
                        onClick={() => {
                            localStorage.removeItem("hiveLogger_user");
                            window.location.reload();
                        }}>Logout
                    </Button>
                </div>

                <div className="hiveInfo">
                    <p>Apiary: {hive.apiary.name}</p>
                    <p>Type of Hive: {hive.hiveType.type}</p>
                    <p>Type of Bee: {hive.beeType.type}</p>
                    <p>Age of Queen: {hive.queenAge}</p>
                </div>
                <InsTypeProvider>
                    <LogProvider>
                        <LogList currentHive={currentHive}/>
                    </LogProvider>
                </InsTypeProvider>
            </div>
    )
}
