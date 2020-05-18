import React from "react"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import "../App.css"
import { BeeTypeProvider } from "../types/BeeTypeProvider"
import { HiveTypeProvider } from "../types/HiveTypeProvider"
import { Button } from "reactstrap"


export const HiveDashboard = ( { currentApiary, setActiveList} ) => {
    const apiary = currentApiary
    
    return (
            <div className="hiveContainer">
                <Button
                onClick={() => {
                setActiveList({
                    list: "homePage",
                    currentApiary: apiary,
                })
                }}>⇦</Button>

                <h1>{apiary.name}</h1>
                <small>{apiary.location}</small>
                    <HiveTypeProvider>
                        <BeeTypeProvider>
                            <HiveProvider>
                                <HiveList currentApiary={currentApiary} setActiveList={setActiveList}/>
                            </HiveProvider>
                        </BeeTypeProvider>
                    </HiveTypeProvider>
            </div>
    )
}
