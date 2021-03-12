import { Button } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import BackupSharpIcon from "@material-ui/icons/BackupSharp";
import React, { useState, useCallback, useRef } from "react";
import './Create.scss'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'

const Create = () => {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        title: '',
        description: '',
    })

    // const [idHelper, setIdHelper] = useState(0)

    const [progress, setProgress] = useState(0)
    // const [fileName, setFileName] = useState('')
    const [allFiles, setAllFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
      // let q = allFiles
      // let r = q.concat(acceptedFiles)
      // setAllFiles(r)
      // console.log(r)
      // console.log(acceptedFiles)
      acceptedFiles.forEach((file, i) => {
        const reader = new FileReader()
        const boxId = allFiles.length
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onloadstart = (data) => {
          if(data.lengthComputable) {
            let q = allFiles
            q.push({id: boxId, progress: 0, fileName: file.name})
            // setIdHelper(idHelper => idHelper + 1)
            setAllFiles(q)
          }
        }
        // reader.readAsDataURL(image)
        reader.onprogress = (data) => {
          if (data.lengthComputable) {   
              let prog = parseInt( ((data.loaded / data.total) * 100), 10 );
              console.log(boxId, prog)
              // console.log
              let q = allFiles
              for(let i =0;i<q.length; i++){
                console.log("World")
                if(q[i].id === boxId) {
                  q[i].progress = prog
                  console.log(boxId)
                }
              }
            setAllFiles(q)
          }
        }
        reader.onloadend = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          // setProgress(100)
          let q = allFiles
            for(let i =0;i<q.length; i++){
              if(q[i].id === boxId) {
                q[i].progress = 100
              }
            }
            console.log(binaryStr)
            setAllFiles(q)
            // setPreview(reader.result)
        }
        // reader.readAsArrayBuffer(file)
        reader.readAsDataURL(file)
      })
    }, [])

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

    async function formSubmitHandler(e) {
        e.preventDefault()
        try{
          const res = await axios.post('http://localhost:5000/issue/create', formData)
          console.log(res.data)
        }
        catch(err) {
          alert(err)
          // if(err.response.status === 500) {
          //   alert('There was a problem with the server')
          // }
          // else {
          //   alert(err.response.data.msg)
          // }
        }
    }


  // const formSubmitHandler = e => {
  //   e.preventDefault();
  //   const formD = new FormData();
  //   formD.append('file', allFiles);
  //   formD.append('text', formData)
  //   console.log(formD)
    // try {
    //   const res = await axios.post('/upload', formD, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage('There was a problem with the server');
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    // }
  // };
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
            <button className='iss-cr-btn' onClick={formSubmitHandler}>Submit</button>
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
            {/* {progress} */}
            {/* {fileName} */}
            {JSON.stringify(allFiles)}
        </div>
      </div>
    </div>
  );
};

export default Create;
