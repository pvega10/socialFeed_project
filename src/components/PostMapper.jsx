import React from 'react';
const PostMapper = (props) => {

    return ( 
        <table className="table" class = 'shadow p-3 mb-5 bg-white rounded'>
        <thead>
        </thead>
    <tbody>
    {props.parentEntries.map((entry,index) => {
        return (
        <tr key = {index}>
            <td>{entry.name}</td>
            <td>{entry.post}</td>
            <a href="#" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">LIKE</a>
            <a href="#" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">DISLIKE</a>
            
        </tr>
        );
     })}

    </tbody>
  </table>
    );
}
 
export default PostMapper;

