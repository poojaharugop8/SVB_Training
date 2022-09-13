import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

var videostyle = {
    position: "fixed",
    right: 0,
    bottom: 0,
    "min-width": "100%",
    "min-height": "100%"
}

function Playvideo() {
    var params = useParams()
    var videoid = params.videoid
    var [videodetails, setVideodetails] = useState({})

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/video/getdetails/" + videoid
        }).then((response) => {
            console.log("response from get details of video api", response)
            setVideodetails(response.data.data)
        })
    }, [])
    return (
        <>
            <h1>Playing video</h1>
            {videodetails.url && <video muted={true} autoPlay={true} controls style={videostyle}>
                <source src={videodetails.url}></source>
            </video>}
        </>
    )
}

export default Playvideo