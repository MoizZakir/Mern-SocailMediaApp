import { useState } from "react"
import { uploadFile } from "../fireBase/uploadfile"
import axios from "axios"

const usePicture = async (img, user, type) => {
  let uploaditem = ''
  

    

    try {
      const imageName = `${new Date().getTime()}-${img.name}`
    const upload = await uploadFile(img, imageName)
    if (upload.status) {
      uploaditem = upload.downloadURL
      alert(upload.message)
    } else {
      alert(upload.message)
    }
      if (type == 'profile') {

        const api = await axios.put(`http://localhost:8000/api/user/${user?._id}`, { _id: user?._id, profilePicture: uploaditem })
        alert(api)

      }
      if (type == 'cover') {
        const api = await axios.put(`http://localhost:8000/api/user/${user?._id}`, { _id: user?._id, coverPicture: uploaditem })
        alert(api)

      }

    } catch (error) {
      alert(error)


    }

  }


  


export { usePicture }