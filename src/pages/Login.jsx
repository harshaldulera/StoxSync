import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/login');
        }
    }, [user]);

    return (
        <div>
            <h2>Login Page</h2>
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    );
};

export default Login;