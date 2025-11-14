import logo from './assets/logo-soundboard.svg'
import './App.css'
import { useState } from 'react'

import buzzerSound from './assets/buzzer.mp3'
import goodAnswerSound from './assets/goodAnswer.mp3'
import wrongAnswerSound from './assets/badAnswer.mp3'
import creditSongSound from './assets/credits.mp3'
import startFinalSound from './assets/startFinale.mp3'
import goodAnswerFinaleSound from './assets/goodAnswerFinale.mp3'
import bingoSound from './assets/bingso.mp3'
import mouhahaSound from './assets/mouHAHA.mp3'

import Sound from './components/Sound'

function App() {
  const [volume, setVolume] = useState(1);

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="La Soundboard des Nadines" />
        <div className="volume-container">
          <p>Volume</p>
          <input type="range" id="volume" name="volume" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
        </div>
      </header>
      <main>
        <div className="soundboard">
          <Sound soundComponent={buzzerSound} soundName="Buzzer" volume={volume} /> 
          <Sound soundComponent={goodAnswerSound} soundName="Bonne Réponse" volume={volume} />
          <Sound soundComponent={wrongAnswerSound} soundName="Mauvaise Réponse" volume={volume} />
          <Sound soundComponent={creditSongSound} soundName="Générique UFEO" volume={volume} />
          <Sound soundComponent={startFinalSound} soundName="Début Finale UFEO" volume={volume} />
          <Sound soundComponent={goodAnswerFinaleSound} soundName="Bonne Réponse Finale UFEO" volume={volume} />
          <Sound soundComponent={bingoSound} soundName="Générique Bingo" volume={volume} />
          <Sound soundComponent={mouhahaSound} soundName="Mouhaha" volume={volume} />
        </div>
      </main>
    </>
  )
}

export default App
