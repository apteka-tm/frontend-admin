import React, {useState} from "react";
import s from "./signup.module.css";
import {Link} from "react-router-dom";

function SignUp(): JSX.Element {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={s.parent}>
            <h1 className={s.header}>SIGN UP</h1>
            <div>
                <input
                    placeholder="Your name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/">Return back</Link>
                <button className={s.button}>Continue</button>
            </div>
        </div>
    );
}

export default SignUp;