import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Navigation from "./assets/navigation.svg";

const Welcome = () => {
  return (
    <Wrapper>
      <Title>Choose a ride</Title>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = tw.div`
flex-1 text-gray-200 text-center text-xs pb-2 overflow-y-scroll flex flex-col
`;

const Title = tw.div`
mb border-b border-zinc-500 py-2 text-gray-300
`;

const CarList = tw.div`
overflow-y-scroll
`;

const Car = tw.div`
flex p-4 items-center
`;

const Details = tw.div`
flex-1 text-left
`;

const Service = tw.div`
text-base font-medium 
`;

const Time = tw.div`
text-xs text-primary
`;

const Price = tw.div`
text-base
`;
