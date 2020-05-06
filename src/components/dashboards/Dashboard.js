import React from "react"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import { ApiaryList } from "../apiaries/ApiaryList"
import { UserProvider } from "../users/UserProvider"
import "../App.css"

export const Dashboard = ({view}) => {
    return (    
            <div className="apiaryContainer">
                <h1>HiveLogger</h1>
                <small>An app worth buzzing about.</small>
                    <UserProvider>
                        <ApiaryProvider>
                            <ApiaryList view={view}/>
                        </ApiaryProvider>
                    </UserProvider>
            </div>
    )
}
