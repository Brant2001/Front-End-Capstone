import React, { useState, useEffect } from "react"
import { ApiaryProvider } from "./apiaries/ApiaryProvider"
import { ApiaryList } from "./apiaries/ApiaryList"
import "./App.css"

export const Dashboard = () => {
    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <h1>HiveLogger</h1>
                <small>An app worth buzzing about.</small>
                    <ApiaryProvider>
                        <ApiaryList />
                    </ApiaryProvider>
            </div>
        </div>
    )
}
