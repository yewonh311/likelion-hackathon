import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

import LogoSVG from "./components/assets/logo.svg";
import Lion from "./components/assets/Likelion.jpeg";
import Placeholder from "./components/assets/placeholder.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      {/* <Map className="flex-1 rounded-md" /> */}
      <ActionItems>
        <Header>
          <Image src={LogoSVG} className="h-28 w-28" />

          <Profile>
            <Name>Lion Kim</Name>
            <Image
              src={Lion}
              className="h-12 w-12 rounded-full border border-orange-200 p-px"
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <Image src={Placeholder} />
              Work
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <Image src={Placeholder} className="" />
              Play
            </ActionButton>
          </Link>

          <Link href="/search">
            <ActionButton>
              <Image src={Placeholder} className="" />
              Rest
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>What u want</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-background h-screen max-w-sm m-auto
`;

const ActionItems = tw.div`
flex-1 p-4 rounded-none
`;

const Header = tw.div`
flex justify-between items-center
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-25 text-sm
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
bg-surface flex-1 text-white m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const InputButton = tw.div`
h-20 bg-surface textz-2xl p-4 flex items-center mt-8 mb-5 text-white
`;

const ActionButtonImage = tw.img`

`;
