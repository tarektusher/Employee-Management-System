import React from 'react'
import { useParams } from 'react-router-dom'
import useEmployee from '../hooks/useEmployee';
const ViewEmployee =() =>{
    const {id} = useParams();
    const response = useEmployee.useGetEmployeeInfo({id});
    console.log(response.data);
  return (
    <div>
        <h1>Id from URL : {id}</h1>
    </div>
  )
}

export default ViewEmployee