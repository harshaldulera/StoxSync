import React, { useState } from "react";
import GoogleSignInButton from "../components/GoogleSignInButton";

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <GoogleSignInButton />
        </div>
    );
};

export default Login;