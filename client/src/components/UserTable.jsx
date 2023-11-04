import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Typography } from "@mui/material";
import "../../src/Dash.css";
import { useGetAllUsers } from "../hooks/useUser";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "username",
    headerName: "User name",
    width: 250,
    editable: true,
  },
  {
    field: "email",
    headerName: "email",
    type: "email",
    width: 250,
    editable: true,
  },
];
const UserTable = () => {
  const [userData, setUserData] = React.useState();
    const {data, isError, isLoading, error} = useGetAllUsers();
    React.useEffect(()=>{
         setUserData(data?.data);
    })
    if(isLoading){
        return <CircularProgress/>
    }
    
    // if(userData)
    // console.log(userData);
    let rows = [];
    if (userData) {
        const data = userData.map((user) => {
        const tempData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        rows.push(tempData);
        });
    }

  return (
    <div>
         <Typography sx={{margin : '2vh'}} variant="h4">
              User Information
            </Typography>
        <Box sx={{ flexGrow: 1}} className="bgColor">
        <Grid container spacing={1}>
          <Grid item xs>  
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Box >
              
                <Box
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "white",
                  }}
                >
                  <Box sx={{ height: "fit-content", width: "70%" }}>
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
            </Item>
          </Grid>
          <Grid item xs>
          
          </Grid>
        </Grid>
      </Box>
    </div>

    
  );
};

export default UserTable;
