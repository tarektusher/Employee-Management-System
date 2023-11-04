import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{  fontSize : '24px', marginTop : '5vh' }} color="text.secondary" gutterBottom>
        Real Business
      </Typography>
      <Typography variant="h3" component="div" sx={{color : "#1976D2"}}>
        Empower your people to <br></br> do their best work
      </Typography>
      <Typography variant="h5" component="div" sx={{marginTop : '5vh'}}>
       Makes Team <br></br> Management Easy
      </Typography>
      <Typography color="text.secondary" sx={{mb: 1.5, marginTop : '3vh',color : '#3B8AD9'}}>
        One tool for your whole team, write, plan and get organized
      </Typography>
      <Typography variant="body2">
        The "TEMS" is design to integrate
        <br />
       all of your employee in one frame.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant='contained'>Learn More</Button>
    </CardActions>
  </React.Fragment>
);


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function LogoutHomepage() {
  return (
    <Box sx={{ flexGrow: 1, marginTop : '5vh'}}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
          <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Card>
            <CardActionArea >
                  <CardMedia
                    component="img"
                    height="455"
                    image={require("../assets/swftare.webp")}
                    alt="green iguana"
                    
                  />
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
