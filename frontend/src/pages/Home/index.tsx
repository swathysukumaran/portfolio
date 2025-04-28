import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-20">
        <Intro />
      </div>
    </div>
  );
}

export default Home;
