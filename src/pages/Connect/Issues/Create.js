import { Button } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BackupSharpIcon from "@material-ui/icons/BackupSharp";
import React, { useState, useCallback } from "react";
import './Create.scss'
import {useDropzone} from 'react-dropzone'

const Create = () => {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        title: '',
        description: '',
    })

    const {getRootProps, getInputProps, open, isDragActive} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
      });

    function formInputHandler(e) {
        const name = e.target.name
        setFormData({
            ...formData,
            [name]: e.target.value,
        })
    }

    function formSubmitHandler(e) {
        e.preventDefault()
        console.log(formData)
    }
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
          <form onSubmit={formSubmitHandler}>
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
            {/* <div className='iss-cr-upload-area'>
                <BackupSharpIcon className='iss-cr-upload-btn' />
                <p>Drag files to Upload</p>
            </div> */}
            <div {...getRootProps({className: 'iss-cr-upload-area dragzone'})}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
                <BackupSharpIcon className='iss-cr-upload-btn' onClick={open}/>
            </div>
            <button className='iss-cr-btn'>Upload File</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
