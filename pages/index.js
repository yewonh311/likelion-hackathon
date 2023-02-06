import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

import LogoSVG from "./components/assets/logo.svg";
import Car from "./components/assets/maincar.svg";
import Thumnail from "./components/assets/thumnail.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <div className="flex justify-between">
        <div className="p-6 text-xl">Welcome, {user && user.name}</div>
        <button className="text-gray-400 mr-6" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </div>

      <div>
        <h1 className="font-bold text-6xl px-6 py-2 leading-tight">
          Ready to <br /> Check-In?
        </h1>
      </div>
      <div className="">
        <Image src={Car} className="ml-28 mt-4" />
      </div>
      <div>
        <Link href="/search">
          <div
            className="flex justify-center items-center bg-primary mt-6 mx-16 h-10 font py-6 text-xl text-white font-bold rounded
"
          >
            GET STARTED
          </div>
        </Link>
      </div>
      <div className="flex mt-5 mb-10 ml-60 text-gray-500">
        powered by
        <Image src={Thumnail} className="ml-2 w-8" />
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col justify-between bg-background h-screen w-screen m-auto md:max-w-sm
`;
