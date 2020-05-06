import React, { useState } from "react"
import { DashboardCtrlr } from "./dashboards/DashboardCtrlr"
import { Auth } from "./auth/Auth"


export const App = () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("hiveLogger_user") ? <DashboardCtrlr /> : <Auth toggle={toggle} />
    )
}


