import { useState } from 'react';
import axios from 'axios';
import S3 from 'react-aws-s3';
import './Login.css';
// installed using npm install buffer --save
window.Buffer = window.Buffer || require('buffer').Buffer;
function Profile() {
  const [imgsrc, setImgstrc] = useState(null);
  const [file, setFile] = useState();

  const config = {
    bucketName: 'dhanupandey1',
    region: 'ap-south-1',
    accessKeyId: 'AKIA6MQKCVYFRFQLMD7Z',
    secretAccessKey: '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',
  };
  const uploadFile = async () => {
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    ReactS3Client.uploadFile(file, file.name)
      .then((data) => console.log(data.location))
      .catch((err) => console.error(err));
  };
  function getFile(e) {
    setFile(e.target.files[0]);
    setImgstrc(URL.createObjectURL(e.target.files[0]));
  }
  function upload() {
    console.log('thjis is the file ', file);
    //hit the api
    let formdata = new FormData();
    formdata.append('file', file);
    axios({
      url: 'http://localhost:5000/user/upload',
      method: 'post',
      data: formdata,
    });
  }
  function handleSubmit() {
    console.log('Profile Data');
    // axios({
    //     url: "http://localhost:5000/video/addvideo",
    //     method: 'POST',
    //     data: formdata
    // }).then((response) => {
    //     console.log(response);
    //     alert(response.data.message)
    // }).catch((error) => {
    //     console.log(error)
    // })
  }
  return (
    <>
      <div className='container'>
        <div>
          <label>Name: </label>
          <input type='text' />
        </div>
        <div>
          <label>Profile Image: </label>
          <input accept='image/*' onChange={getFile} type='file'></input>
        </div>
        <button onClick={uploadFile} className='btn btn-dark'>
          Upload
        </button>
        {imgsrc && <img src={imgsrc} />}
      </div>
      <div className='container'>
        <button onClick={handleSubmit} className='btn btn-dark'>
          Upload
        </button>
      </div>
    </>
  );
}
export default Profile;
// import axios from 'axios'
// import React from 'react'
// import {useState} from 'react'
// export default function Profile(){
//     var [imgsrc, setImgsrc] = useState(null)
//     var [file, setFile] = useState()
//     function getFile(e){
//         setFile(e.target.files[0])
//         setImgsrc(URL.createObjectURL(e.target.files[0]))
//     }
// function upload(){
//     console.log("this is a file", file)
//     let formdata = new FormData();
//     formdata.append("file", file)
//     axios(
//         {
//            url: "http://localhost:3001/user/upload" ,
//            method:"post",
//            data:formdata
//         }
//     )
// }
// return (
//     <div>
// <input type="file" accept="image/*" onChange={getFile} />
//     <button onClick={upload}>upload</button>
//     {imgsrc && <img src={imgsrc}/>}
//     </div>
// )
// }
