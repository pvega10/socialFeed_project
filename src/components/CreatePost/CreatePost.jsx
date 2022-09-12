import React, { useState } from 'react';
import './CreatePost.css'


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return ( 

        <form onSubmit ={handleSubmit} className ='form-grid'>
        <div class = 'shadow p-3 mb-5 bg-white rounded'>
        <div className='form-group'>
            <label>Name</label>
            <input type = 'name' className ='form-control' value = {name} onChange = {(event) => setName((event.target.value))}/>
        </div>
        <div className='form-group'>
            <label>Post</label>
            <textarea type = 'post' className ='form-control' style={{flex: 1, flexWrap: 'wrap'}} value = {post} onChange = {(event) => setPost(event.target.value)} />
        </div>

        <button type = 'submit' className='btn btn-primary' style ={{'margin-left' : '30em'}}>Create</button>
        </div>
    </form>
    );
}
 
export default CreatePost;





