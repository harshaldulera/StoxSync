import React, { useState } from "react";
import { auth } from "../config/firebase";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verficationCode, setVerificationCode] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);

    const handleSendCode = async () => {
        try {
            const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
            setConfirmationResult(confirmation);
        } catch (error) {
            console.error("Error Sending Code: ", error);
        }
    };

    const handleVerifyCode = async () => {
        try {
            await confirmationResult.confirm(verficationCode);
            console.log("Phone Number Verified!");
        } catch (error) {
            console.error("Error Verifying code: ", error);
        }
    };

    return (
        <div>
            <input 
                type="tel"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
                
            />
            <button onClick={handleSendCode}>Send Code</button>

            {confirmationResult && (
                <div>
                    <input 
                        type="text"
                        placeholder="Enter Verification Code"
                        value={verficationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <button onClick={handleVerifyCode}>Verify Code</button>
                </div>
            )}
        </div>
    );
};

export default Login;