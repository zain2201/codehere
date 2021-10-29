import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Contest from "components/Contests/Contest";

export default function Upcoming() {
  React.useEffect(() => {
    document.body.classList.toggle("upcoming-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("upcoming-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div style = {{margin:100}}>
        <Contest/>
      </div>
    </>
  );
}
