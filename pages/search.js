import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

import LeftArrow from "./components/assets/leftarrow.svg";
import Pickup from "./components/assets/pickup.svg";
import Line from "./components/assets/line.svg";
import Dropoff from "./components/assets/dropoff.svg";
import Name from "./components/assets/name.svg";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [name, setName] = useState("");

  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <Image src={LeftArrow} className="h-12" />
        </ButtonContainer>
      </Link>
      <div>
        <h1 className="font-bold text-5xl px-6 leading-tight py-5 mt-5">
          Let's confirm <br /> your iternary.
        </h1>
        <p className="px-6 py-5 text-lg text-gray-200">
          For 2-step verification, <br />
          please provide your booking information.
        </p>
      </div>

      <InputContainer>
        <FromToIcons>
          <Image src={Pickup} />
          <Image src={Line} />
          <Image src={Dropoff} />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
      </InputContainer>
      <SavedPlaces>
        <NameIcon>
          <Image src={Name} />
        </NameIcon>
        <InputBoxes>
          <Input
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputBoxes>
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
            name: name,
          },
        }}
      >
        <ConfirmButton>Confirm Location</ConfirmButton>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-background h-screen md:max-w-sm m-auto
`;

const ButtonContainer = tw.div`
 px-4
`;

const InputContainer = tw.div`
bg-surface flex items-center px-4 mb-2 h-32
`;

const FromToIcons = tw.div`
w-10 flex-col mr-2 flex items-center
`;

const NameIcon = tw.div`
w-10 flex-col ml-2
`;

const InputBoxes = tw.div`
flex  flex-col flex-1 mr-3
`;

const Input = tw.input`
h-10 bg-gray-200 text-black my-2 rounded p-2 border-none outline-none
`;

const SavedPlaces = tw.div`
flex text-white items-center bg-zinc-800 px-4 py-2
`;

const ConfirmButton = tw.div`
flex justify-center items-center bg-primary mt-5 mx-7 h-10 font-medium py-6 text-xl text-black rounded
`;
