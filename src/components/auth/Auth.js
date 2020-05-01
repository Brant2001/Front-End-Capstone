import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Button } from "reactstrap"


export const Auth = () => {

const [showRegister, setShowRegister] = useState(false)

    return (
        <>
            <h1 className="welcome">Welcome to HiveLogger</h1>
            <div>
                {showRegister ? <Register /> : <Login />}
                <Button color="info" onClick={() => {
                    setShowRegister(!showRegister)
                }}>Register</Button>
            </div>
        </>
    )
}

/* <div className="authContainer">
    <Login toggle={toggle} />
    <Register toggle={toggle} />
</div> */