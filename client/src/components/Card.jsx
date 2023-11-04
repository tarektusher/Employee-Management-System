import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Axios from '../axios';
import { useNavigate } from 'react-router-dom';

const UserCard =() => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState();
    let data=0;
    React.useEffect(()=>{
        Axios.get('/users').then((res)=>{
            setUserData(res.data);
        }).catch((e)=>{
            console.log(e);
        })
  },[])
  if(userData){
    data = userData.length
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total Number of Users
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{navigate('/alluser')}}>
          See All Users
        </Button>
      </CardActions>
    </Card>
  );
}
const EmployeeCard =() => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState();
  React.useEffect(()=>{
      Axios.get('/employee').then((res)=>{
          setUserData(res.data);
      }).catch((e)=>{
          console.log(e);
      })
  },[]);
  let data = 0;
  if(userData) data = userData.length;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total Number of Employees
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{navigate('/employee')}}>
          See All Employees
        </Button>
      </CardActions>
    </Card>
  );
}

const BasicCard = {UserCard, EmployeeCard};
export default BasicCard;