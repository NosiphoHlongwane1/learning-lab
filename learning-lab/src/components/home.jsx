import React from "react";
import Navbar from "./navbar";  
import Bubbles from "./bubbles";  
import bgImage from "../assets/alphabets-bg.jpg"; 

const Home = () => {

  return (
    <div
      className="relative h-screen overflow-hidden bg-green-200"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar /> 
      <Bubbles /> 

      <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl text-white font-bold mb-4">Learn Phonics</h1>
      <br />
      <br />
      <p className="text-white font-italics mb-4" >
        Are you looking for a easy way to start your reading or your childs reading journey. this platform 
        is here to help you you get started, with the basics. <br />
        Phonics are a best way to teach anyone how to read,
        this platform gives a basic start to understanding sound and learning to read</p> <br />
        <em className="text-white font-bold mb-4">The platform is free, making education accessible. Happy Learning</em>
    </div>
    </div>
  );
};

export default Home;
