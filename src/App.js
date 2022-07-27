import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './Components/SearchBar';
import VideoDetails from './Components/VideoDetails';
import VideoList from './Components/VideoList';
import { useEffect, useState } from 'react';
import youtube from './api/youtube';



function App() {

  const [videos, setVideos] = useState([])

  const [clickVideo,setClickVideo]=useState(null)

  const selectedVideo = clickVideo!=null ? clickVideo:(videos.length!=0 ? videos[0]:null)


  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCWM5dRE4PnoY8nYgCXPp-6eYyRcxkv-lU",
        q: searchTerm
      }
    })
    setVideos(response.data.items)
  }

  const onVideoClick=(video)=>{
    setClickVideo(video)
  }

  useEffect(() => {
    handleSubmit('marvel')
  }, [])

  return (
    <div>
      <Container fluid style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={handleSubmit} />
        <Container fluid>
          <div className='cont'>
            <Row>
              <Col sm={8}>
                <VideoDetails video={selectedVideo} />
              </Col>
              <Col sm={4}>
                <VideoList videos={videos} onVideoSelect={onVideoClick}/>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
