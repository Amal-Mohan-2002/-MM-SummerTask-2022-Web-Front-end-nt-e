import React,{useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../CreatePost.css"

const CreatePost = ()=>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setimage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails= ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "edn-mm-1")
        data.append("cloud_name", "doidpqln0")
        fetch("https://api.cloudinary.com/v1_1/doidpqln0/image/upload",{
            method: "post",
            body:data
            
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className='CP'>
            <h3>Create Article</h3>
            <TextField className='fields' id="standard-basic" label="Title" variant="standard"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <TextField className='fields'id="standard-basic" label="Description" variant="standard"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />
            <Button id="up" className='fields '
                variant="contained"
                component="label"
                color="secondary"
                >
                Upload Image
                <input
                    type="file"
                    hidden
                    onChange={(e)=> setimage(e.target.files[0])}
                />
            </Button>
            <div id="create-btn">
            <Button className='btn-c' variant="contained" size="small" onClick={()=>postDetails()}>Create</Button>
            </div>
            


        </div>

    )
}

export default CreatePost;