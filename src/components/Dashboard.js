import React from "react"
import { ApiaryProvider } from "./apiaries/ApiaryProvider"
import { ApiaryList } from "./apiaries/ApiaryList"
import "./App.css"
import { UserProvider } from "./users/UserProvider"

export const Dashboard = () => {
    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <h1>HiveLogger</h1>
                <small>An app worth buzzing about.</small>
                    <UserProvider>
                        <ApiaryProvider>
                            <ApiaryList />
                        </ApiaryProvider>
                    </UserProvider>
            </div>
        </div>
    )
}
