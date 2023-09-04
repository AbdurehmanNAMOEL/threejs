import React, { useRef, useState } from 'react'
import './style/paper.css'
import {FaVolumeUp,FaVolumeMute} from 'react-icons/fa'
const Paper = ({name,type,about,audio}) => {
  const [isAudioPlaying,setAudioPlaying]=useState(false)
  const audioRef=useRef()
  
  const handleMute=()=>{
    setAudioPlaying(false)
    audioRef.current.pause()
    audioRef.current.currentTime=0
  }
  const handlePlay=()=>{
      setAudioPlaying(true)
       audioRef.current.play()
  }
  return (
    <div className='paper-container scrollbar-hide'>
        <div className='name-of-body'>
          <h1 className='text-3xl flex items-center'>{name} 
           <audio ref={audioRef} src={audio}></audio>
           {isAudioPlaying?<FaVolumeMute className='ml-[20px]' style={{cursor:'pointer'}} onClick={handleMute} />:
            <FaVolumeUp className='ml-[20px]' style={{cursor:'pointer'}} onClick={handlePlay}/>
           }
           </h1>
          <h4 className='subtitle'>{type}</h4>
        </div>
        <p className='detail-text'>{about}</p>
    </div>
  )
}

export default Paper