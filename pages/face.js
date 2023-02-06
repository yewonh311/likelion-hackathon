import React from "react";
import Link from "next/link";

const Face = () => {
  return (
    <div className="text-black">
      Yewon = Genius
      <Link href="/checkout">
        <div className="bg-red-200 transition-colors">Click here</div>
      </Link>
    </div>
  );
};

export default Face;
