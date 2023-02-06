import React from "react";
import tw from "tailwind-styled-components";
import CheckoutCar from "./components/assets/checkoutcar.svg";
import Thumnail from "./components/assets/thumnail.svg";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <Wrapper>
      <div className="py-5 px-5">
        <h1 className="font-bold text-4xl leading-tight">Enjoy your PBV.</h1>
        <h2 className="text-2xl mt-3 text-gray-300">
          We'll help you check-out when your journey ends.
        </h2>
      </div>
      <div className="">
        <Image src={CheckoutCar} className="ml-12 mt-4" />
      </div>
      <div>
        <Link href="/upload">
          <div
            className="flex justify-center items-center bg-primary mt-6 mx-16 h-10 font py-6 text-xl text-white font-bold rounded
"
          >
            Check out
          </div>
        </Link>
        <div className="flex mt-5 mb-10 ml-60 text-gray-500">
          powered by
          <Image src={Thumnail} className="ml-2 w-8" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = tw.div`
  flex flex-col justify-between bg-background h-screen w-screen m-auto md:max-w-sm
`;
