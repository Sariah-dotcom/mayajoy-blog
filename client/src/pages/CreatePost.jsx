import { TextInput, Select, FileInput, Button } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost() {
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
                <FileInput type='file' accept='image/*' />
                <Button className='bg-dark-green'>Upload image</Button>
            </div>
            <ReactQuill required theme='snow' placeholder='Write something...' className='h-72 mb-12'/>
            <Button>Publish</Button>
        </form>
      
    </div>
  )
}
