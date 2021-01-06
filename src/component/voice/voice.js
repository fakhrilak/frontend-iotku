import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "./voice.css"
const Dictaphone = ({socket}) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const OnClick = ()=>{
    resetTranscript()
    SpeechRecognition.stopListening()
    socket.emit("voiceway",transcript)
  }
  return (
    <div className="Container-voice">
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={()=>OnClick()}>Send</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone