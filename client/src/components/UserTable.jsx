import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "../axios";
import { CircularProgress, Typography } from "@mui/material";
import "../../src/Dash.css";
import { useGetAllUsers } from "../hooks/useUser";

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
    <Box className="bgColor">
      <Typography sx={{ marginTop: "10px" }} variant="h4">
        User Information
      </Typography>
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
  );
};

export default UserTable;
