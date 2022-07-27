import {Row,Col} from 'react-bootstrap'

function VideoItem({videoItem,onVideoSelect}){
    return(
        <Row onClick={()=>onVideoSelect(videoItem)} style={{marginBottom:"20px"}}>
            <Col sm={4}>
            <img src={videoItem.snippet.thumbnails.default.url}></img>
            </Col>
            <Col sm={8}>
                <small>{videoItem.snippet.title}</small>
            </Col>
        </Row>
    )
}

export default VideoItem;