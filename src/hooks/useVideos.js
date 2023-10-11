import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchVideo } from '../store/videoSlice';
import { YOUTUBE_VIDEOS_API } from '../utilis/constant';
const useVideos = () => {
    const disptach = useDispatch()
    const getVideos = async () => {
        try{
          const data = await fetch(YOUTUBE_VIDEOS_API);
    
          const json = await data.json()
          disptach(fetchVideo(json.items))
        }
        catch(err) {alert(err.message)}
      }
      useEffect(() => {
        getVideos()
      }, [])
      
  return
}

export default useVideos