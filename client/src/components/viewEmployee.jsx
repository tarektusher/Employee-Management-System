import React from 'react'
import { useParams } from 'react-router-dom'
const ViewEmployee =() =>{
    const {id} = useParams();
    console.log(id);
  return (
    <div>
        <h1>Id from URL : {id}</h1>
    </div>
  )
}

export default ViewEmployee