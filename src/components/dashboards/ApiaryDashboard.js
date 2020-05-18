import React from "react"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import { ApiaryList } from "../apiaries/ApiaryList"
import { UserProvider } from "../users/UserProvider"
import "../App.css"
import { Button } from "reactstrap"

export const ApiaryDashboard = ( { setActiveList} ) => {
    return (    
            <div className="apiaryContainer">
                <Button
                onClick={() => {
                localStorage.removeItem("hiveLogger_user")
                window.location.reload()
                }}>Buzz Off</Button>
                
                <h1>HiveLogger</h1>
                <small>An app worth buzzing about.</small>
                    <UserProvider>
                        <ApiaryProvider>
                            <ApiaryList setActiveList={setActiveList}/>
                        </ApiaryProvider>
                    </UserProvider>
            </div>
    )
}
