import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import ShimmerUI from "./ShimmerUI";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.videos);

  useVideos();
  return videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap">
      {videos[0] && <AddVideoCard info={videos[0]}/>}
      {videos.map((video) => (
       <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
