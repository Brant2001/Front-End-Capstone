import React from "react"
import { HiveProvider } from "../hives/HiveProvider"
import { HiveList } from "../hives/HiveList"
import { BeeTypeProvider } from "../types/BeeTypeProvider"
import { HiveTypeProvider } from "../types/HiveTypeProvider"
import { Button } from "reactstrap"
import "../App.css"


export const HiveDashboard = ( { currentApiary, setActiveList } ) => {
    const apiary = currentApiary
    
    return (
            <div className="hiveContainer">
                <div className="hiveHeader">
                    <Button className="backBtn"
                    onClick={() => {
                        setActiveList({
                            list: "homePage",
                            currentApiary: apiary,
                        })
                    }}>⇦</Button>
                    <h1>{apiary.name}</h1>
                    <Button className="logoutBtn" size="sm"
                        onClick={() => {
                            localStorage.removeItem("hiveLogger_user");
                            window.location.reload();
                        }}>Logout
                    </Button>
                </div>
                <small>{apiary.location}</small>
                    <HiveTypeProvider>
                        <BeeTypeProvider>
                            <HiveProvider>
                                <HiveList currentApiary={currentApiary} setActiveList={setActiveList} />
                            </HiveProvider>
                        </BeeTypeProvider>
                    </HiveTypeProvider>
            </div>
    )
}
