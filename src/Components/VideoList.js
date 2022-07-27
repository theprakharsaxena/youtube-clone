import VideoItem from "./VideoItem";
import { Card } from 'react-bootstrap'


function VideoList({ videos,onVideoSelect}) {
    if (videos.length == 0) return <img src="https://www.bing.com/rp/kiGH9ukZK6Q4hvtDtwwVc1yvueg.svg"></img>
    return (
        <Card>
            <Card.Body>
                {videos.map((video, idx) => <VideoItem key={idx} videoItem={video} onVideoSelect={onVideoSelect}/>)}
            </Card.Body>
        </Card>
    )
}

export default VideoList;