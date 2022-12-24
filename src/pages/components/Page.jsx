import React from "react";
import { useLocation } from "react-router-dom";
function Page() {
  let location = useLocation().pathname;
  if (location === "/") location = "Eliseo";

  // location = location.slice(1, -1);
  console.log(location);
  // return <div>{location}</div>;
}

export default Page;
