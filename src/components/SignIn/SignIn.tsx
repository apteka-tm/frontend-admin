import React, {useState} from "react";
import s from "./signin.module.css"
import {Link} from "react-router-dom";

function SignIn(): JSX.Element {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className={s.parent}>
            <h1 className={s.header}>SIGN IN</h1>
            <div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/signup">Create an account</Link>
                <button className={s.button}>Sign In</button>
            </div>
        </div>
    );
}

export default SignIn;