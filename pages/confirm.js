import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Welcome from "./components/Welcome";
import Image from "next/image";
import Link from "next/link";

import RightArrow from "./components/assets/rightarrow.svg";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff, name } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibW9vbmgiLCJhIjoiY2xkN3VkM3JvMTJvNzNwbzRkbTR3MW83bCJ9.2CGtilH03SKZpkSyB10eNw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibW9vbmgiLCJhIjoiY2xkN3VkM3JvMTJvNzNwbzRkbTR3MW83bCJ9.2CGtilH03SKZpkSyB10eNw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
    console.log("name is", name);
  }, [pickup, dropoff, name]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <div className="flex-1 flex flex-col h-1/2">
        <h1 className="text-5xl leading-none px-5 py-5">
          Welcome, <br /> <span className="font-bold">{name}</span>
        </h1>
        <p className="px-5 py-4 bg-surface">
          <div className="text-primary">Travel Summary:</div>
          <span className="uppercase text-xl font-medium">{pickup}</span> →{" "}
          <span className="uppercase text-xl font-medium">{dropoff}</span>
        </p>
        <div className="flex items-center">
          <div className="px-5 py-5 text-md">
            For secure entrance to PBV, please proceed to facial landmark
            detection.
          </div>
          <Link href="/face">
            <div className="bg-primary rounded-full mr-5">
              <Image src={RightArrow} width={100} className="p-2" />
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
h-screen flex flex-col bg-background
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t border-zinc-500
`;

const ConfirmButton = tw.div`
bg-primary text-black my-4 mx-4 py-4 text-center text-xl
`;
