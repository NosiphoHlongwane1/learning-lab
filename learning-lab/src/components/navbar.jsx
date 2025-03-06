import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.jpg"; // Ensure the logo path is correct

const Navbar = () => {
  const navigate = useNavigate();

  const startLearning = () => {
    navigate("/phonics"); // Ensure "/phonics" route exists
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left: Logo and Name */}
      <div className="flex items-center">
        <img src={logo} alt="Phonics Lab Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl font-bold">Phonics Lab</h1>
      </div>

      {/* Right: Start Learning Button */}
      <button
        onClick={startLearning}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Start Learning
      </button>
    </nav>
  );
};

export default Navbar;
