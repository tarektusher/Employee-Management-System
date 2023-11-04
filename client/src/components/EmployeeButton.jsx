import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AddIcon from '@mui/icons-material/Add';
import { Navigate, useNavigate } from 'react-router-dom';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';

export default function EmployeeButton() {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row" sx={{marginLeft : '30vw', marginTop : '10px'}}>
      <Button variant="contained" startIcon={<AddIcon/>} onClick={()=>navigate('/addemployee')}>Add Employee</Button>
      <Button variant="contained" startIcon={<FindInPageOutlinedIcon/>} onClick={()=>navigate('/findoneemployee')}>Get A Employee</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>navigate('/deleteemployee')}>
        Delete
      </Button>
      <Button variant="contained" startIcon={<EditNoteTwoToneIcon/>} onClick={()=>navigate('/editemployee')}>Edit</Button>
    </Stack>
  );
}