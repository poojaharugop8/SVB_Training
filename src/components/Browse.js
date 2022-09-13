import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Video from "./Video"

const Browse = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/video/listall"
        }).then((response) => {
            console.log("response from all videos api", response)
            setVideos(response.data.videos)
        })
    }, [])
    return (
        <div className="row">
            {videos?.map((each) => {
                return <Video key={each.videoid} data={each} />
            })}
        </div >
    )
}

export default Browse