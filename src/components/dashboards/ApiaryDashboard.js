import React from "react"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import { ApiaryList } from "../apiaries/ApiaryList"
import { UserProvider } from "../users/UserProvider"
import "../App.css"

export const ApiaryDashboard = ( { setActiveList, beeTypes, hiveTypes } ) => {
    return (    
            <div className="apiaryContainer">
                <div className="apiaryHeader">
                    <h1>HiveLogger</h1>
                    <small>An app worth buzzing about.</small>
                </div>
                    <UserProvider>
                        <ApiaryProvider>
                            <ApiaryList setActiveList={setActiveList} beeTypes={beeTypes} hiveTypes={hiveTypes}/>
                        </ApiaryProvider>
                    </UserProvider>
            </div>
    )
}
