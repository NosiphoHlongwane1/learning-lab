import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Volume2 } from "lucide-react";
import rainbow from "../assets/readingbcg.jpg";

const storiesData = {
  Basic: [
    {
      title: "The Happy Cat",
      story: `One day, a little cat found a soft mat near the window. It curled up and purred happily.  
      The dog saw the cat and wanted to play. It ran to the mat and wagged its tail. The cat jumped up, startled, but then saw the dog was friendly.  
      They played together all day. By evening, they were so tired that they curled up on the mat and slept, dreaming of more fun adventures.`,
      bgColor: "#FDE68A",
    },
    {
      title: "Jim's Jam",
      story: `Jim was a little boy who loved jam. He got a job at a small shop where they made fresh fruit jam.  
      One day, Jim mixed apples, strawberries, and a bit of honey. He put the jam in a big pot and stirred it carefully. The smell was delicious!  
      When the jam was ready, people came from all over to buy it. Jim was so proud. He had made the tastiest jam in town!`,
      bgColor: "#F87171",
    },
  ],
  Intermediate: [
    {
      title: "The Singing Frog",
      story: `In a quiet forest, a small frog lived near a big tree. Every morning, the frog would sit on a log and sing.  
      The birds and insects loved to listen. One day, a storm came, and the frog lost its voice. The forest became silent.  
      The next morning, the sun shone again. The frog took a deep breath and sang the best song ever. The whole forest cheered!`,
      bgColor: "#60A5FA",
    },
    {
      title: "The Blue Ship",
      story: `A blue ship sailed across the deep sea. It carried sailors who loved adventure.  
      One day, a strong wind pushed the ship toward an unknown land. The sailors saw golden sand and tall trees.  
      They explored the land, found fresh fruits, and made new friends. When they sailed back home, they had great stories to tell!`,
      bgColor: "#34D399",
    },
  ],
  Advanced: [
    {
      title: "The Stuck Stream",
      story: `A small stream flowed through a green forest. It sparkled under the bright sun.  
      One day, a large tree fell and blocked the stream. The water had nowhere to go, and the land became dry.  
      The animals worked together to move the tree. The stream flowed again, bringing life back to the forest.`,
      bgColor: "#A78BFA",
    },
    {
      title: "The Brave Broom",
      story: `In an old house, there was a broom that always worked hard. It cleaned dust, swept leaves, and made everything neat.  
      One night, a strong wind blew open the door. Dust and leaves flew everywhere! The broom quickly started sweeping.  
      By morning, the house was clean again. The broom stood tall, proud of its work, ready for the next challenge.`,
      bgColor: "#F97316",
    },
  ],
};

const Stories = () => {
  const navigate = useNavigate();

  const playStory = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice =
        speechSynthesis.getVoices().find((voice) =>
          voice.name.includes("Female")
        ) || speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    } else {
      console.error("Speech Synthesis not supported in this browser.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${rainbow})` }}
    >
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-white bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 text-lg font-semibold hover:bg-blue-800"
        >
          <Home size={24} /> Home
        </button>
        <button
          onClick={() => navigate("/phonics")}
          className="text-white bg-green-600 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-green-800"
        >
          Phonics
        </button>
        <button
          onClick={() => navigate("/cvc")}
          className="text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-800"
        >
          CVC Words
        </button>
      </div>

     
      <h1 className="text-4xl font-bold text-white bg-blue-800 bg-opacity-50 px-6 py-2 rounded-lg mb-6">
        📖 Fun Stories
      </h1>

    
      {Object.entries(storiesData).map(([level, stories]) => (
        <div key={level} className="w-full max-w-4xl mb-8">
          <h2 className="text-3xl font-bold text-white bg-blue bg-opacity-50 px-4 py-2 rounded-lg mb-4">
            {level} Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map(({ title, story, bgColor }, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg flex flex-col justify-between text-white relative"
                style={{
                  backgroundColor: bgColor,
                  height: "400px",
                  position: "relative",
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-lg whitespace-pre-line flex-grow">{story}</p>
                </div>
                {/* Voice Button inside the Card */}
                <button
                  onClick={() => playStory(story)}
                  className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                  <Volume2 size={20} /> Read Aloud
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
