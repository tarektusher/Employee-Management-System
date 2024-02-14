// import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import "../../src/Dash.css";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import employeeeServices from "../services/employeeServices";
import "../../src/Dash.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddEmployee = () => {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      emp_id: "",
      age: 0,
      email: "",
      phonenumber: "",
      address: "",
      department: "",
      position: "",
      salary: 0,
      joiningdate: "",
      education: {
        degree: "",
        subject: "",
        universityname: "",
        gradutionyear: "",
      },
      skills: [""],
    },
  });
  const { register, control, handleSubmit, formState, getValues, reset } = form;
  const { isSubmitSuccessful } = formState;
  React.useEffect(() => {
    reset({
      data: "test",
    });
  }, [isSubmitSuccessful]);
  const onSubmit = async (data) => {
    
    // data.preventDefault();
    const {
      firstname,
      lastname,
      emp_id,
      age,
      email,
      phonenumber,
      address,
      department,
      position,
      salary,
      joiningdate,
      education,
      skills,
    } = data;
    //console.log(address, skills);
    await employeeeServices.registerEmployee({
      firstname,
      lastname,
      emp_id,
      age,
      email,
      phonenumber,
      address,
      department,
      position,
      salary,
      joiningdate,
      education,
      skills,
    });
    alert("::: Form was Submitted Successfully :::");

  };
  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });
  // const handleGetValues = () =>{
  //   console.log("get Values", getValues());
  // }
  return (
    <div className="bgColor">
      <Box sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h3" align="center">
          Employee Information
        </Typography>
        <Grid container spacing={4}>
          {/* <Grid item xs>
            <Item>
              <Card sx={{ maxWidth: 460 }}>
                <CardActionArea sx={{ marginTop: "20px" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require("../assets/angryboss-removebg-preview.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Don't blame the boss. He has enough problems.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
            <Item sx={{marginTop : '10px'}}>
              <Card sx={{ maxWidth: 460 }}>
                <CardActionArea sx={{ marginTop: "20px" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require("../assets/swftare.webp")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Don't blame the boss. He has enough problems.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid> */}
          <Grid item xs={12}>
            <Item>
              <Typography gutterBottom variant="h5" align="center">
                Basic Information
              </Typography>
              {/* <Grid> */}
              <Card
                style={{ width : '100%', padding: "20px 5px", margin: "0 auto" }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    Fill up the form and read carefully before submit.
                  </Typography>
                  <p className="text-4xl text-left pt-[1%] pb-[1%]">Personal Information</p>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="Enter First name"
                          label="First Name"
                          variant="outlined"
                          {...register("firstname")}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="Enter Last name"
                          label="Last Name"
                          {...register("lastname")}
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="Message"
                          placeholder="Enter Employee Id"
                          label="Employee Id"
                          {...register("emp_id")}
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          placeholder="Enter Employee Age"
                          label="Age"
                          {...register("age", { valueAsNumber: true })}
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="email"
                          type="email"
                          {...register("email")}
                          placeholder="abc@example.com"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="phonenumber"
                          type="number"
                          {...register("phonenumber")}
                          placeholder="01*****"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <TextField
                          label="address"
                          type="text"
                          {...register("address")}
                          placeholder="Enter Your Address"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <p className="text-4xl text-left pt-[1%] pb-[1%]">Employment Information</p>
                      <Grid item xs={12}>
                        <TextField
                          label="Department"
                          {...register("department")}
                          placeholder="Department"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Position"
                          placeholder="Position"
                          {...register("position")}
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Salary"
                          {...register("salary", {
                            valueAsNumber: true,
                          })}
                          placeholder="Salary"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <TextField
                          label="joining date"
                          variant="outlined"
                          placeholder="day-month-year"
                          {...register("joiningdate")}
                          fullWidth
                          required
                        />
                      </Grid>
                  <p className="text-4xl text-left pt-[1%] pb-[1%]">Educational Information</p>

                      <Grid xs={12} sm={12} item>
                        <TextField
                          placeholder="Degree"
                          {...register("education.degree")}
                          label="Add Degree"
                          type="message"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="Subject Name"
                          {...register("education.subject")}
                          label="Subject Name"
                          type="message"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="University Name"
                          {...register("education.universityname")}
                          label="University Name"
                          type="message"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          placeholder="Graduation Year"
                          {...register("education.gradutionyear")}
                          label="Graduation Year"
                          type="message"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={12} item spaceing={1}>
                        {fields.map((field, index) => {
                          return (
                            <div key={field.id}>
                              <Grid
                                xs={12}
                                sm={12}
                                sx={{ marginTop: "10px" }}
                                item
                              >
                                <TextField
                                  placeholder="Add Skill"
                                  label="Add Skill"
                                  type="message"
                                  variant="outlined"
                                  {...register(`skills.${index}`)}
                                  fullWidth
                                  required
                                />
                              </Grid>
                              {index > 0 && (
                                <Grid item xs={12} sx={{ marginTop: "10px" }}>
                                  <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => remove(index)}
                                    fullWidth
                                    startIcon={<DeleteIcon />}
                                  >
                                    Remove Skill
                                  </Button>
                                </Grid>
                              )}
                            </div>
                          );
                        })}
                        <Grid item xs={12} sx={{ marginTop: "10px" }}>
                          <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            onClick={() => append("")}
                            fullWidth
                          >
                            Add Skill
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <DevTool control={control} />
                </CardContent>
              </Card>
              {/* </Grid> */}
            </Item>
          </Grid>
          {/* <Grid item xs>
            <Item>
            <Card sx={{ maxWidth: 460 }}>
                <CardActionArea sx={{ marginTop: "20px" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require("../assets/emp1-removebg-preview.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                    I’m not a great programmer; I’m just a good programmer with great habits.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
            <Item sx={{marginTop : '10px'}}>
            <Card sx={{ maxWidth: 430 }}>
                <CardActionArea sx={{ marginTop: "20px" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={require("../assets/us-business-software-and-services-market.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                    I’m not a great programmer; I’m just a good programmer with great habits.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
};
export default AddEmployee;