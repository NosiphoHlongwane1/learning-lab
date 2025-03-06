import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react"; 
import readingBg from "../assets/reading-bg.jpg"; 

const cvcWords = {
  Basic: ["cat", "dog", "bat", "mat", "bag", "leg", "pot", "bed", "gap", "jam", "job", "jim"],
  Intermediate: ["ship", "shop", "frog", "tree", "sing", "song", "sand", "lamp", "land", "play", "plot", "blue"],
  Advanced: ["stuck", "blip", "scum", "strain", "stream", "steam", "sleep", "green", "grass", "brave", "broom", "prey"],
};

const CVCPage = () => {
  const navigate = useNavigate(); 

  return (
    <div
      className="py-12 min-h-screen bg-cover bg-center relative flex flex-col items-center"
      style={{ backgroundImage: `url(${readingBg})` }}
    >
      <div className="flex justify-center space-x-6 w-full max-w-4xl px-6 mb-8">
        <button
          onClick={() => navigate("/")}
          className="text-white bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-3 text-xl font-semibold hover:bg-blue-800"
        >
          <Home size={28} /> Home
        </button>
        <button
          onClick={() => navigate("/phonics")}
          className="text-white bg-green-600 px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-800"
        >
          Phonics
        </button>
        <button
          onClick={() => navigate("/stories")}
          className="text-white bg-red-600 px-6 py-3 rounded-lg text-xl font-semibold hover:bg-red-800"
        >
          Stories
        </button>
      </div>

   
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Learn CVC Words</h1>

      <div className="space-y-8 text-white bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto">
        {Object.entries(cvcWords).map(([level, words]) => (
          <div key={level}>
            <h2 className="text-2xl font-semibold mb-3">{level}</h2>
            <div className="grid grid-cols-3 gap-5">
              {words.map((word) => (
                <span key={word} className="bg-gray-200 text-black p-5 rounded-md text-center text-lg font-medium">
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVCPage;
