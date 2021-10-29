import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Ide from "../../components/Compiler/ide";
import './Compiler.css';

export default function Compiler() {
  React.useEffect(() => {
    document.body.classList.toggle("compiler-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("compiler-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      <div className="ide_render">
        <Ide/>
      </div>
    </>
  );
}
