import React, { useContext } from "react"
import { ApiaryContext, ApiaryProvider } from "../apiaries/ApiaryProvider"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import "../App.css"


export const ApiaryDashboard = () => {
    const { apiaries } = useContext(ApiaryContext)
    return (
            <div className="hiveContainer">
                <h1>{apiaries.name}</h1>
                <small>{apiaries.location}</small>
                    <ApiaryProvider>
                        <HiveProvider>
                            <HiveList />
                        </HiveProvider>
                    </ApiaryProvider>
            </div>
    )
}
