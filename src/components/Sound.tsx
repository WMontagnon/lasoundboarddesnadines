import { useEffect, useState } from "react"
import useSound from "use-sound"

function Sound({ soundComponent, soundName, volume }: SoundProps) {

  const [playSound, { stop, sound }] = useSound(soundComponent, { volume: volume })
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if(sound) {
      sound.on('play', () => {
        setIsPlaying(true)
      })
      sound.on('stop', () => {
        setIsPlaying(false)   
      })
      sound.on('end', () => {
        setIsPlaying(false)
      })
    }
  }, [sound])

  return (
    <button className={isPlaying ? 'playing' : ''} onClick={() => {if(sound.playing()) { stop() } else { playSound() }}}>{soundName}</button>
  )
}

export default Sound;

export interface SoundProps {
    soundComponent: string;
    soundName: string;
    volume: number;
}