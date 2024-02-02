import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Axios from '../axios';
import { Button, CircularProgress, Typography } from '@mui/material';
import EmployeeButton from './EmployeeButton';
import { useGetAllEmployees } from '../hooks/useEmployee';


const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'firstname',
    headerName: 'First Name',
    width: 250,
    editable: true,
  },
  {
    field: 'lastname',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   width: 80,
  //   editable: true,
  // },
  // {
  //   field: 'department',
  //   headerName: 'Department',
  //   width: 250,
  //   editable: true,
  // },
  {
    field: 'position',
    headerName: 'Position',
    width: 250,
    editable: true,
  },
  // {
  //   field: 'salary',
  //   headerName: 'Salary',
  //   width: 100,
  //   editable: true,
  // },
  {
    field : 'viewButton',
    headerName : 'View',
    width: 100,
    renderCell : (cellValues) =>{
      return  (
        <div>
          <Button 
            variant='contained'
            color = 'primary'
            onClick={(event) =>{
              
            }}
          >  View</Button>
        </div>
      )
    }
  },
    {
      field : 'Edit',
      width: 100,
      renderCell : (cellValues) =>{
        return  (
          <div>
            <Button 
              style={{
                background : "#38a3a5"
              }}
              variant='contained'
            >Edit</Button>
          </div>
        )
      }
    },
      {
        field : 'Delete',
        
        renderCell : (cellValues) =>{
          return  (
            <div>
              <Button
              style={{
                background : "#d00000"
              }}
                variant='contained'
 
              >Delete</Button>
            </div>
          )
        },
  }
];


export default function UserTable() {
  const [userData, setUserData] = React.useState();
    const {data, isError, isLoading, error} = useGetAllEmployees();
    React.useEffect(()=>{
         setUserData(data?.data);
         
    })
    if(isLoading){
        return <CircularProgress/>
    }

    let rows =[];
    if(userData){
        userData.map((user)=>{
            const tempData = {
                'id' : user.emp_id,
                'firstname' : user.firstname,
                'lastname' : user.lastname,
                //'age' : user.age,
                //'department' : user.department,
                'position' : user.position,
                //'salary' : user.salary,
            }
            rows.push(tempData);
        })
        console.log(rows);
    } 
    return (
      <Box>
      <Typography sx={{marginTop : '10px'}}variant="h4">
          Employee Information
      </Typography>
      <EmployeeButton/>
      <Box sx = {{width : '100%', marginTop: '20px',display: 'flex', justifyContent: 'center', alignItems : 'center' }}>
          <Box sx={{ height: 'fit-content', width: '75%'}}>
          <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
              pagination: {
                  paginationModel: {
                  pageSize: 10,
                  },
              },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
          />
          </Box>
      </Box>
      </Box>
    );
}