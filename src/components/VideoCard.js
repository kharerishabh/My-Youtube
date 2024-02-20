import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;     
    
  return (
    <div className='p-2 m-2 w-[12rem] shadow-lg rounded-lg'>
        <img className='rounded-lg' src={thumbnails.standard.url} alt='thumbnail'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AddVideoCard = ({info}) => {
  return <div className='p-1 m-1 border-2 border-gray-400 rounded-lg'>
    <VideoCard info={info}/>
  </div>
}

export default VideoCard