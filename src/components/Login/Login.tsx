"use client";  // ✅ Required for client-side navigation

import { Button } from "../ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card"
import { MicrosoftLogo } from "../../assets/svg Components/Microsoft"// ✅ Ensure the correct path for the Microsoft icon

import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from '@azure/msal-react';

import { useEffect, useState } from 'react';
import { loginRequest } from '@configs/authConfig';
import { msalInstance } from "@shared/instance";

export default function LoginPage() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [idToken, setIdToken] = useState('');
  // const { loading, token } = useSelector(selectAuth);
  // console.log("loading",loading);
  
  // const dispatch = useAppDispatch();


  useEffect(() => {
    async function initMsal() {
        await msalInstance.initialize(); // Ensure MSAL is ready
    }
    initMsal();
}, []);

  useEffect(() => {
    console.log("isAuthenticated isAuthenticated isAuthenticated", isAuthenticated);
    if (isAuthenticated) navigate('/dashboard');
  }, [navigate, isAuthenticated]);



  // const handleLogin = async () => {
  //   const { idToken, account } = await instance.loginPopup(loginRequest);
  //   console.log("idToken",idToken,"account",account);
  // };
  const handleLogin = async () => {
    try {
        const {idToken} = await msalInstance.loginPopup(loginRequest);
        setIdToken(idToken)
        console.log("Login successful:", idToken);
    } catch (error) {
        console.error("Login error:", error);
    }
};

    // const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="flex justify-center h-48 w-full my-[20px]">
            <MicrosoftLogo className="w-[200px] h-[200px " />
       
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-6">Sign in to your account to continue</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="w-full max-w-xs flex items-center justify-center space-x-2 bg-[#2F2F2F] hover:bg-[#1E1E1E] text-white"
            onClick={() => {

              handleLogin();
              // Handle Microsoft login here
              console.log("Login with Microsoft clicked")
              // navigate(APP_PATHS.dashboard);
            }}
          >
            <MicrosoftLogo className="w-5 h-5" />
            <span>Login with Microsoft</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

