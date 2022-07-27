import {Button,Card} from 'react-bootstrap'

function VideoDetails({video}){
  if(!video) return <img src="https://www.bing.com/rp/kiGH9ukZK6Q4hvtDtwwVc1yvueg.svg"></img>
  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
        <Card>
          <iframe width="885" height="498" src={videoSrc}></iframe>
          <Card.Body>
            <Card.Title>
              {video.snippet.channelTitle}
            </Card.Title>
            <Card.Text>
              {video.snippet.title}
            </Card.Text>
            <small>{video.snippet.description}</small>
          </Card.Body> 
        </Card>
      );
}

export default VideoDetails;