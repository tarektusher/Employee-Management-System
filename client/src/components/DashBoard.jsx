import Stack from "@mui/material/Stack";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import "../../src/Dash.css";
import AccordianDash from "./AccordianDash";
import {useGetAllUsers} from "../hooks/useUser";
import useEmployee from "../hooks/useEmployee";
import Barchart from "./BarChart";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DashBoard() {
  const [employeeData, setEmployeeData] = React.useState(null);
  const [salary, setSalary] = React.useState(0);
  const [totalUser, setTotalUser] = React.useState(0);
  const [totalEmployee, setTotalEmployee] = React.useState(0);
  const userResponse = useGetAllUsers();
  const employeeResponse = useEmployee.useGetAllEmployees();
  const navigate = useNavigate();

  //? Set Total Number of Users
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if(userResponse && userResponse.data){
          const user = userResponse?.data.data;
          setTotalUser(user?.length);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchUserData();
  }, [totalUser]);

  
  //? Set Total Number of Employee and Salary
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        if(employeeResponse && employeeResponse.data){
          const employees = employeeResponse?.data.data;
          setEmployeeData(employees);
          const totalEmployeeCount = employees?.length;
          setTotalEmployee(totalEmployeeCount);
          const totalSalary = employees?.reduce((total, employee) => total + employee.salary, 0);
          setSalary(totalSalary);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchEmployeeData();
  }, [totalEmployee, salary]);
  

  return (
    <div className="bgColor">
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3" sx={{ margin: "5px", marginLeft: "30vw" }}>
          <span className="Emp">Employee</span> Dashboard
        </Typography>
        <Button
          variant="contained"
          sx={{ margin: "auto" }}
          onClick={() => navigate("/employee")}
        >
          Live Employee Look
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1, marginLeft: "6vh", marginRight: "6vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: "49%", height: 140 }} className="gradient">
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ECEFF1" }}
                    >
                      Total Number of Users
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#ECEFF1" }}>
                      {totalUser}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                sx={{ minWidth: "49%", height: 140 }}
                className="gradientLight"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ECEFF1" }}
                    >
                      Total Number of Employee
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#ECEFF1" }}>
                      {totalEmployee}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card
                sx={{ maxWidth: "100vh", color: "#ECEFF1" }}
                className="gradient"
              >
                {/* <div className="iconStyle"><CurrencyExchangeIcon/></div> */}
                <Stack direction={"col"}>
                  <div className="paddingall">
                    <span className="priceTitle">{salary}Tk</span>
                    <br />
                    <span className="priceSubTitle">Total Salary</span>
                  </div>
                </Stack>
              </Card>
              <Card
                sx={{ maxWidth: "100vh", color: "#ECEFF1" }}
                className="gradientLight"
              >
                <div className="iconStyle">{/* <CurrencyExchangeIcon/> */}</div>
                <Stack direction={"col"}>
                  <div className="paddingall">
                    <span className="priceTitle">
                      {salary / totalEmployee} Tk
                    </span>
                    <br />
                    <span className="priceSubTitle">Average Salary</span>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20}></Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 65 + "vh" }}>
              <CardActionArea>
                <CardContent>
                  <Barchart />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 65 + "vh" }}>
              <CardActionArea>
                <CardContent>
                  <AccordianDash />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
