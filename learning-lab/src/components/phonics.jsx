import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

import letterA from '../assets/LETTER A.jpg';
import letterB from '../assets/LETTER B.jpg';
import letterC from '../assets/LETTER C.jpg';
import letterD from '../assets/LETTER D.jpg';
import letterE from '../assets/LETTER E.jpg';
import letterF from '../assets/LETTER F.jpg';
import letterG from '../assets/LETTER G.jpg';
import letterH from '../assets/LETTER H.jpg';
import letterI from '../assets/LETTER I.jpg';
import letterJ from '../assets/LETTER J.jpg';
import letterK from '../assets/LETTER K.jpg';
import letterL from '../assets/LETTER L.jpg';
import letterM from '../assets/LETTER M.jpg';
import letterN from '../assets/LETTER N.jpg';
import letterO from '../assets/LETTER O.jpg';
import letterP from '../assets/LETTER P.jpg';
import letterQ from '../assets/LETTER Q.jpg';
import letterR from '../assets/LETTER R.jpg';
import letterS from '../assets/LETTER S.jpg';
import letterT from '../assets/LETTER T.jpg';
import letterU from '../assets/LETTER U.jpg';
import letterV from '../assets/LETTER V.jpg';
import letterW from '../assets/LETTER W.jpg';
import letterX from '../assets/LETTER X.jpg';
import letterY from '../assets/LETTER Y.jpg';
import letterZ from '../assets/LETTER Z.jpg';

const phonicsData = [
  { letter: 'A', image: letterA, sound: 'aah' },
  { letter: 'B', image: letterB, sound: 'buh' },
  { letter: 'C', image: letterC, sound: 'ku' },
  { letter: 'D', image: letterD, sound: 'da' },
  { letter: 'E', image: letterE, sound: 'eh' },
  { letter: 'F', image: letterF, sound: 'fuh' },
  { letter: 'G', image: letterG, sound: 'gah' },
  { letter: 'H', image: letterH, sound: 'haa' },
  { letter: 'I', image: letterI, sound: 'e' },
  { letter: 'J', image: letterJ, sound: 'juh' },
  { letter: 'K', image: letterK, sound: 'kuh' },
  { letter: 'L', image: letterL, sound: 'laa' },
  { letter: 'M', image: letterM, sound: 'mah' },
  { letter: 'N', image: letterN, sound: 'nuh' },
  { letter: 'O', image: letterO, sound: 'aw' },
  { letter: 'P', image: letterP, sound: 'puh' },
  { letter: 'Q', image: letterQ, sound: 'kwuh' },
  { letter: 'R', image: letterR, sound: 'ruh' },
  { letter: 'S', image: letterS, sound: 's' },
  { letter: 'T', image: letterT, sound: 'tuh' },
  { letter: 'U', image: letterU, sound: 'uh' },
  { letter: 'V', image: letterV, sound: 'vuh' },
  { letter: 'W', image: letterW, sound: 'wuh' },
  { letter: 'X', image: letterX, sound: 'x' },
  { letter: 'Y', image: letterY, sound: 'ye' },
  { letter: 'Z', image: letterZ, sound: 'z' },
];

const Phonics = () => {
  const navigate = useNavigate();
  const [voice, setVoice] = useState(null);

  useEffect(() => {
   
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name.includes("Female"));
      setVoice(femaleVoice || voices[0]); 
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const playPhonicsSound = (sound) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(sound);
      utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis is not supported in this browser.");
    }
  };

  const navigateToCVC = () => {
    navigate('/cvc');
  };

  return (
   
    <div className="min-h-screen flex flex-col items-center bg-blue-500 py-8">
    
      <div className="flex justify-between w-full max-w-4xl px-4 mb-6">
              <button
                onClick={() => navigate("/")}
                className="text-white bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 text-lg font-semibold hover:bg-blue-800"
              >
                <Home size={24} /> Home
              </button>
          
              <button
                onClick={() => navigate("/cvc")}
                className="text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-800"
              >
                CVC Words
              </button>
              </div>

      <h1 className="text-3xl font-bold text-white mb-6">Learn Phonics Sounds</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
        {phonicsData.map((item) => (
          <div
            key={item.letter}
            className="border-4 border-white p-6 rounded-lg text-center cursor-pointer hover:bg-blue-200 flex flex-col items-center justify-center"
            onClick={() => playPhonicsSound(item.sound)}
          >
            <h2 className="text-3xl font-bold text-white mb-2">{item.letter}</h2>
            <img src={item.image} alt={item.letter} className="w-32 h-32 object-contain" />
          </div>
        ))}
      </div>

      <p className="text-lg text-white mb-4">
        Now that you've learned all the sounds, we can proceed to learn CVC words
      </p>
      <button
        onClick={navigateToCVC}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Next → CVC Words
      </button>
    </div>
  );
};

export default Phonics;
