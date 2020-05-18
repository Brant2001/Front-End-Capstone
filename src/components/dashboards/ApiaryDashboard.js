import React from "react"
import { ApiaryProvider } from "../apiaries/ApiaryProvider"
import { ApiaryList } from "../apiaries/ApiaryList"
import { UserProvider } from "../users/UserProvider"
import { Button } from "reactstrap"
import "../App.css"

export const ApiaryDashboard = ( { setActiveList, beeTypes, hiveTypes } ) => {
    return (    
            <div className="apiaryContainer">
                <div className="apiaryHeader">
                    <img className="logo" src="https://cdn.pixabay.com/photo/2012/04/11/17/56/bee-29162_1280.png" alt=""/>
                    <h1>HiveLogger</h1>
                    <Button size="sm"
                        onClick={() => {
                            localStorage.removeItem("hiveLogger_user");
                            window.location.reload();
                        }}>Logout
                    </Button>
                </div>
                <small>An app worth buzzing about</small>
                    <UserProvider>
                        <ApiaryProvider>
                            <ApiaryList setActiveList={setActiveList} beeTypes={beeTypes} hiveTypes={hiveTypes}/>
                        </ApiaryProvider>
                    </UserProvider>
            </div>
    )
}
