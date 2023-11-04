import React from 'react'
import {useForm, useFieldArray} from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import employeeeServices from '../services/employeeServices';
import "../../src/Dash.css";
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const DeleteEmployee = () => {
    const form = useForm({
        defaultValues : {
            emp_id : "",
            email : "",
        }
    });
    const { register, control, handleSubmit, formState, getValues, reset } = form;
    const onSubmit = async (data) => {
      const {
        emp_id,
        email
      } = data;
      console.log(emp_id, email);
      await employeeeServices.delteEmployee({emp_id,email});
      alert(`::: ${emp_id} was Deleted Successfully :::`);
    }
  return (
        <div className='bgColor'>
            <Box sx={{flexGrow : 1, alignItems : 'center'}}>
                <Typography gutterBottom variant="h3" align="center">
                    Delete Employee Information
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs>
                    
                    </Grid>
                    <Grid item xs={4}>
                    <Item>
                    <Typography variant='h5' color={"text.secondary"}>
                            You must need to be <span>Employee Id and Email 
                            </span> for delete an Employee 
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                          placeholder="Enter employee Id"
                          label="Employee Id"
                          {...register("emp_id")}
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <TextField
                          placeholder="Enter email Account"
                          label="Email Account"
                          {...register("email")}
                          variant="outlined"
                          fullWidth
                          required
                          sx={{marginTop : '20px'}}
                        />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<DeleteIcon />}
                        sx={{color : 'white',background : 'red', marginTop : '10px'}}
                        >
                        Delete Employee
                        </Button>
                    </form>
                    <DevTool control={control} />
                    </Item>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </Box>
            </Box>
        </div>
  )
}

export default DeleteEmployee