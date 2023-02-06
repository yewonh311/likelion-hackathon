import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

import Logo from "./components/assets/logo.svg";
import LoginIMG from "./components/assets/login.svg";
import Google from "./components/assets/google.svg";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  });
  return (
    <div className="flex flex-col h-screen bg-surface w-screen p-4 m-auto md:max-w-sm">
      <Image src={Logo} className="px-3 w-24" />

      <div className="text-4xl pt-10 font-bold px-3">
        Log in to access your account
      </div>
      <Image src={LoginIMG} className="mx-auto my-10 w-80" />
      <button
        onClick={() => signInWithPopup(auth, provider)}
        className="bg-white text-center py-4 self-center text-xl flex items-center text-gray-600 px-12 rounded-full mt-3"
      >
        <Image src={Google} className="mr-4" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
