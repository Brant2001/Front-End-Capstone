import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Button } from "reactstrap"


export const Auth = ({toggle}) => {

const [showRegister, setShowRegister] = useState(false)

    return (
        <>
            <h1 className="welcome">Welcome to HiveLogger</h1>
            <div>
                {showRegister ? <Register toggle={toggle}/> : <Login toggle={toggle}/>}
                <Button color="info" onClick={() => {
                    setShowRegister(!showRegister)
                }}>Register</Button>
            </div>
        </>
    )
}
