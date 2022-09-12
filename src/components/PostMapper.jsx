import React from 'react';
const PostMapper = (props) => {

    return ( 
        <div >
       
   
    {props.parentEntries.map((entry,index) => {
        return (
            <div className = 'form-grid'>
            <div class = 'shadow p-3 mb-5 bg-white rounded'>
             <div className='form-group'>
              <div key = {index}>
            
            <h3>{entry.name}</h3>
            <h3>{entry.post}</h3>
            <a href="#" class="btn btn-primary btn-sm active" role="button" aria-pressed="true"   style ={{'margin-left' : '5em'}}>LIKE</a>
            <a href="#" class="btn btn-primary btn-sm active" role="button" aria-pressed="true" style ={{'margin-left' : '1em'}}  >DISLIKE</a>
           
        </div>  
            </div>   
            </div>
            </div>
            
        
        );
     })}
        
    </div>
    );
}
 
export default PostMapper;

