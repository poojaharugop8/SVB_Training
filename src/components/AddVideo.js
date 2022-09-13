import axios from 'axios';
import React, { useState } from 'react';
import S3 from 'react-aws-s3';
import './AddVideo.css';

const AddVideo = () => {
  const config = {
    bucketName: 'dhanupandey1',
    region: 'ap-south-1',
    accessKeyId: 'AKIA6MQKCVYFRFQLMD7Z',
    secretAccessKey: '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',
  };
  const [videoData, setVideoData] = useState({});
  const [videofile, setVideofile] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [videoButton, setVideoButton] = useState(false);
  const [thumbnailButton, setThumbnailButton] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);

  const uploadVideo = () => {
    if (videoButton === false) {
      alert('Please upload the video first! and then click Submit');
    }
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    ReactS3Client.uploadFile(videofile, videofile.name)
      .then((data) => {
        console.log(data, 'hiiii');
        videoData.url = data.location;
        setVideoData(videoData);
      })
      .catch((err) => console.error(err, 'helloo'));
  };
  const uploadThumbnail = () => {
    if (thumbnailButton === false) {
      alert('Please upload the Thumbnail first!');
    }
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    ReactS3Client.uploadFile(thumbnail, thumbnail.name)
      .then((data) => {
        console.log(data.location);
        videoData.thumbnail = data.location;
        setVideoData(videoData);
      })
      .catch((err) => console.error(err));
  };
  const handleTitle = (e) => {
    videoData.title = e.target.value;
    setVideoData(videoData);
  };
  const handleDescription = (e) => {
    videoData.description = e.target.value;
    setVideoData(videoData);
  };
  const handleOwner = (e) => {
    videoData.owner = e.target.value;
    setVideoData(videoData);
  };
  const handleGenre = (e) => {
    videoData.genre = e.target.value;
    setVideoData(videoData);
  };
  const handleLanguages = (e) => {
    videoData.languages = e.target.value;
    setVideoData(videoData);
  };
  const handleReleaseYear = (e) => {
    videoData.yearofrelease = e.target.value;
    setVideoData(videoData);
  };
  const handleRating = (e) => {
    videoData.rating = e.target.value;
    setVideoData(videoData);
  };
  const handleSubmit = (e) => {
    console.log('Video Data', videoData);
    axios({
      url: 'http://localhost:5000/video/addvideo',
      method: 'POST',
      data: videoData,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleThumbnail(e) {
    setThumbnail(e.target.files[0]);
  }
  function handleVideo(e) {
    console.log('.....', e.target.files[0]);
    setVideofile(e.target.files[0]);
  }

  return (
    <div className='main-component'>
      <h1>Add new Video</h1>
      <div>
        <label className='form-label' for='myfile'>
          Upload Video File:
        </label>
        <input
          style={{ marginBottom: '10px' }}
          type='file'
          id='videoFile'
          name='videoFile'
          onChange={handleVideo}
        ></input>
        <button onClick={uploadVideo} className='btn btn-primary'>
          Upload Video
        </button>
      </div>
      <div>
        <label className='form-label' for='myfile'>
          Upload Thumbnail File:
        </label>
        <input
          type='file'
          id='thumbnailFile'
          name='thumbnailFile'
          style={{ marginBottom: '10px' }}
          onChange={handleThumbnail}
        ></input>
        <button onClick={uploadThumbnail} className='btn btn-primary'>
          Upload Thumbnail
        </button>
      </div>
      <div>
        <label className='form-label'>Title:</label>
        <textarea
          onChange={handleTitle}
          name='title'
          rows={1}
          cols='100'
        ></textarea>
      </div>
      <div>
        <label className='form-label'>Description:</label>
        <textarea
          onChange={handleDescription}
          name='description'
          rows={3}
          cols='100'
        ></textarea>
      </div>
      <div>
        <label className='form-label'>Owner:</label>
        <textarea
          onChange={handleOwner}
          name='owner'
          rows={1}
          cols='100'
        ></textarea>
      </div>
      <div>
        <label className='form-label'>Genre:</label>
        <textarea
          onChange={handleGenre}
          rows={1}
          cols='100'
          name='genre'
          placeholder=' Genre (Comma Seperated)'
        ></textarea>
      </div>
      <div>
        <label className='form-label'>Languages:</label>
        <textarea
          onChange={handleLanguages}
          rows={1}
          cols='100'
          nam='languages'
          placeholder=' Languages (Comma Seperated)'
        ></textarea>
      </div>
      <div>
        <label className='form-label'>Year of Release</label>
        <input
          type='number'
          min='1900'
          max='2099'
          step='1'
          onChange={handleReleaseYear}
        />
      </div>
      <div>
        <label className='form-label'>Rating:</label>
        <input
          type='number'
          min='1'
          max='10'
          name='rating'
          onChange={handleRating}
        ></input>
      </div>
      <div className='button-component'>
        <button className='btn btn-dark' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddVideo;
