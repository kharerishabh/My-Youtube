import React from "react";
import Button from "./Button";

const btnName = [
  "ALL",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentine",
  "Trading",
  "Prank",
  "Podcast",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {btnName.map((btnN) => (
        <Button key={btnN} name={btnN} />
      ))}
    </div>
  );
};

export default ButtonList;
