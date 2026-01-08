import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setfile] = useState("")
    const uploadFile =(e)=>{
        // console.log(e.target.files[0])
        let myFile = e.target.files[0]
        let myReader = new FileReader()
       myReader.readAsDataURL(myFile)
       myReader.onload = () =>{
        // console.log(myReader.result)
        setfile(myReader.result)
       }
    }
    const url = "http://localhost:5500/upload"
    const handleUpload = () =>{
        axios.post(url, {file})
        .then((response)=>{
            console.log(response.data)
        })
    }
  return (
    <div>
        <h1>File Upload</h1>
        <input onChange={(e)=>uploadFile(e)} type="file" />
        <button onClick={handleUpload}>Upload File</button>
    </div>
  )
}

export default FileUpload

//convert File to base64 String
//multer, formidable