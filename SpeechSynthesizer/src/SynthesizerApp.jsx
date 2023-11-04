import React, {useState} from 'react'
import { SpeechNarrator } from './SpeechNarrator'

export const SynthesizerApp = () => {

    const [text, setText] = useState("Write something here")

  return <div className='container d-flex flex-column'>
    <SpeechNarrator text={text}/>
    <textarea className='m-auto p-3' 
    cols="30" 
    rows="10" 
    value={text} 
    onChange={(e) => setText(e.target.value)}></textarea>
  </div>
}
