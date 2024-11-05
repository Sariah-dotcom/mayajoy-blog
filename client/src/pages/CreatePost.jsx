import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { app } from '../firebase.js';

export default function CreatePost() {
    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress]= useState(null);
    const [imageUploadError, setImageUploadError]= useState(null);
    const [formData, setFormData] = useState({});

    const handleUploadImage = async ()=> {
        try {
            if(!file){
                setImageUploadError('Please select an image');
                return;
            }

            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setImageUploadError('Image upload failed');
                    setImageUploadProgress(null);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                        setImageUploadProgress(null);
                        setImageUploadError(null);
                        setFormData({ ...formData, image: downloadURL});
                    });
                }
            );
            
        } catch (error) {
            setImageUploadError('Image upload failed');
            setImageUploadProgress(null);
           console.log(error);
        }
    };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='font-lato text-3xl font-black text-dark-green text-center my-7'>Create a Post</h1>
        <form className='flex flex-col gap-5'>
            <div className='flex flex-col justify-between gap-4 md:flex-row'>
                <TextInput type='text' placeholder='Title' required id='title'
                    className='flex-1'
                 />
                <Select>
                    <option value='uncategorized'>Select a category</option>
                    <option value='life'>Life</option>
                    <option value='spiritual'>Spiritual</option>
                    <option value='adventures'>Adventures</option>
                    <option value='Travels'>Travels</option>
                    <option value='France'>France 🦅</option>
                    <option value='random'>Random</option>
                </Select>
            </div>

            <div className='flex gap-4 items-center justify-between p-3 border-4 border-med-green border-dotted'>
                
                <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
               
                <Button className='bg-dark-green' onClick={handleUploadImage} disabled={imageUploadProgress}>
                    {
                        imageUploadProgress ? (
                        <div>
                            <CircularProgressbar 
                                 value={imageUploadProgress}
                                 text={`${imageUploadProgress || 0}%`}
                            />
                        </div>
                        ):( 'Upload Image')

                    }
                </Button>
            </div>

            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
            {formData.image && (
            <img
                src={formData.image}
                alt='upload'
                className='w-full h-72 object-cover'
            />
            )}

            <ReactQuill required theme='snow' placeholder='Write something...' className='h-72 mb-12'/>
            <Button>Publish</Button>
        </form>
      
    </div>
  )
}
