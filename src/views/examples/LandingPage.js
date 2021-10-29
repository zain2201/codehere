import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Demo } from "components/Whiteboard/Whiteboard";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <Demo/>
    </>
  );
}
