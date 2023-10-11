import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import ShimmerUI from "./ShimmerUI";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.videos);

  useVideos();
  return videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
       <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
