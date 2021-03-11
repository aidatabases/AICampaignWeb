import { Button } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BackupSharpIcon from "@material-ui/icons/BackupSharp";
import React, { useState, useCallback, useRef } from "react";
import './Create.scss'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'
import { Progress } from 'reactstrap'
import _ from 'lodash'

const Create = () => {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        title: '',
        description: '',
    })

    // const [progress, setProgress] = useState(0)
    const [allFiles, setAllFiles] = useState([])
    const [uploading, setUploading] = useState(false)

    // let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(true);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

    const onDrop = async (acceptedFiles) => {
        let files = acceptedFiles
        console.log('Jinda')
        let formData = new FormData();
        _.forEach(files, file => {
            formData.append('files', file);
        });

        setUploding(true);
        let { data } = await axios.post('http://localhost:5000/issue/create', formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
            }
        });
        setUplodedImgs(data);
        setUploding(false);
    }

    const {getRootProps, getInputProps, open, isDragActive} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        onDrop
      });

    function formInputHandler(e) {
        const name = e.target.name
        setFormData({
            ...formData,
            [name]: e.target.value,
        })
    }

    // const handleChange = async e => {
    //     let { files } = e.target;

    //     let formData = new FormData();
    //     _.forEach(files, file => {
    //         formData.append('files', file);
    //     });

    //     setUploding(true);
    //     let { data } = await API.post(uploadUrl, formData, {
    //         onUploadProgress: ({ loaded, total }) => {
    //             let progress = ((loaded / total) * 100).toFixed(2);
    //             setProgress(progress);
    //         }
    //     });
    //     setUplodedImgs(data);
    //     setUploding(false);
    // }



  return (
    <div>
      <div className="iss-cr-head-container">
        <div className="iss-cr-head-text">
          <h1>Create an Issue</h1>
          <p>* indicates required</p>
        </div>
        <div className="iss-cr-head-share"><ShareIcon style={{marginRight: '7px'}}/>Share</div>
      </div>
      <div className="iss-cr-main-container">
        <div className="iss-cr-form">
          <form >
            <div className='iss-cr-form-field-container'>
              <label>Your Name*</label>
              <input type="text" name="name" onChange={formInputHandler} required='true'/>
            </div>
            <div className='iss-cr-form-field-container'>
              <label>Location*</label>
              <input type="text" name="location" onChange={formInputHandler} required='true'/>
            </div>
            <div className='iss-cr-form-field-container'>
              <label>Issue Title</label>
              <input type="text" name="title" onChange={formInputHandler} />
            </div>
            <div className='iss-cr-form-field-container'>
              <label>Issue Description</label>
              <textarea
                type="text"
                name="description"
                onChange={formInputHandler}
              />
            </div>
            <div className='iss-cr-form-btn'>
            <button className='iss-cr-btn'>Submit</button>
            </div>
          </form>
        </div>
        <div className='iss-cr-upload-container'>
            <h2>Upload Attachment</h2>
            <div {...getRootProps({className: 'iss-cr-upload-area dragzone'})}>
                <input multiple
                {...getInputProps()} 
                />
                    <p>Drop the files here ...</p> 
                <BackupSharpIcon className='iss-cr-upload-btn' onClick={open}/>
            </div>
            <button className='iss-cr-btn'>Upload File</button>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs && !isUploding ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
                </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
