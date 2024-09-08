import React from "react";
import Navbar from "./Home/Opening";
import Main1 from "./Home/Main1";
import Main2 from "./Home/Main2";
import Main3 from "./Home/Main3";
import Ending from "./Home/Ending";
import Realnavbar from "./Realnavbar";

function Home() {
  return (
    <>
      <Realnavbar bg="#1E1F1D"></Realnavbar>
      <Navbar></Navbar>
      <Main1></Main1>
      <Main2></Main2>
      <Main3></Main3>
      <Ending></Ending>
    </>
  );
}

export default Home;
