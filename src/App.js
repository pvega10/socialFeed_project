import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import PostMapper from "./components/PostMapper";
import CreatePost from "./components/CreatePost/CreatePost";
import './App.css'


function App() {

const [entries, setEntries] = useState([])

function addNewEntry (entry){
  let tempEntries =[...entries,entry];

  setEntries(tempEntries);
}

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style ={{margin: '1em'}}>Social 
        <small className = 'text-muted'>Feed</small></h3>
        <div className='col-md-6'>
        <div className='border-box'>
          <div>
          <NavBar parentEntries = {entries} />
          </div>
          <div className='border-box'>
          <CreatePost addNewEntryProperty ={addNewEntry}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
          <PostMapper parentEntries ={ entries}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




