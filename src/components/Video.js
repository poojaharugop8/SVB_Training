import { useNavigate } from "react-router"

function Video(props) {
    var videodata = props.data
    var navigate = useNavigate()
    function playVideo() {
        var url = "/watch/" + props.data.videoid;
        navigate(url)
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img onClick={playVideo} src={videodata.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{videodata.title}</h5>
                <p className="card-text">{videodata.description}</p>
            </div>
        </div>
    )
}

export default Video