
import Axios from "../axios";
import React, {useState, useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { CircularProgress, Typography } from "@mui/material";
import { useGetAllEmployees } from "../hooks/useEmployee";
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Tableau10 = [
    '#af7aa1',
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ];
  
  const chartsParams = {
    margin: { bottom: 20, left: 25, right: 5 },
    height: 300,
  };
 
 let age = [0];
  export default function Barchart() {
        const initialValue = [0];
        const [employeeData, setEmployeeData] = useState();
        const [age, setAge] = useState(initialValue);
        const [color, setColor] = useState('#4e79a7');
        
        const employeeResponse = useGetAllEmployees();
        React.useEffect(()=>{
            setEmployeeData(employeeResponse.data?.data);
            const addData = (value) =>{
                //console.log(value)
                setAge(prevAge => [...prevAge, value]);
            }
            employeeData?.map((employee)=>{
                addData(employee.age)
            })
        },[])
       
            //setEmployeeData(employeeResponse.data?.data);
            
            //console.log(age);
        
        // if(employeeResponse?.isLoading){
        //     return <CircularProgress/>
        // }
        

        const handleChange = (event, nextColor) => {
            setColor(nextColor);
        };
    return (
        (age ? 
            <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
            <LineChart
                {...chartsParams}
                series={[
                {
                    data: age,
                    label: 'Employee Age Graph',
                    color,
                },
                ]}
            />
            <ToggleButtonGroup
                // orientation="vertical"
                value={color}
                exclusive
                onChange={handleChange}
            >
                {Tableau10.map((value) => (
                <ToggleButton key={value} value={value} sx={{ p: 1 }}>
                    <div
                    style={{
                        width: 15,
                        height: 15,
                        backgroundColor: value,
                        display: 'inline-block',
                    }}
                    />
                </ToggleButton>
                ))}
            </ToggleButtonGroup>
            </Stack>
    : <Typography>
            Please wait few times
      </Typography>)
        
    );
  }