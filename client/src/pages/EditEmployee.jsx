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

const EditEmployee = () => {
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
    console.log("::: Form Submitted :::", data);
    alert("::: Form was Submitted Successfully :::");
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
    await employeeeServices.editEmployee({
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
          Edit Employee Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs>
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
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Typography gutterBottom variant="h5" align="center">
                Basic Information
              </Typography>
              {/* <Grid> */}
              <Card
                style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
                        <TextField
                          label="Position"
                          placeholder="Position"
                          {...register("position")}
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
                        <TextField
                          label="joining date"
                          variant="outlined"
                          placeholder="day-month-year"
                          {...register("joiningdate")}
                          fullWidth
                          required
                        />
                      </Grid>

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
                      <Grid xs={12} sm={12} item>
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
                      <Grid xs={12} sm={12} item>
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
          <Grid item xs>
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
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default EditEmployee;

// const AddEmployee = () =>{

//   // const form = useForm();
// const form = useForm({
//   defaultValues:{
//     username : "Tarek",
//     email : "",
//     channel : "",
//     social : {
//       facebook : "www.facebook.com/@@@@@",
//       instagram : "instagram"
//     },
//     phonenumbers : ["", ""],
//     phoneArray : [{ number : ''}],
//     age : 0,
//     dob : new Date(),

//   }
// });
//   const {register, control, handleSubmit,formState, watch, getValues, reset} = form;
//   const {errors} = formState;
// const onSubmit=(data)=>{
//   console.log("::: Form Submitted :::", data);
// }
// const {fields, append, remove} = useFieldArray({
//   name : 'phoneArray',
//   control
// })
// const handleGetValues = () =>{
//   console.log("get Values", getValues());
// }
// // const watchUserName = watch("username");
// const watchUserName = watch(["username", "email"]);
//   return (
//     <div>
//       <h2>Watch Username : {watchUserName}</h2>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className='formControl'>
//           <label htmlFor='username'>User Name</label>
//           <input type='text' id='username' {...register('username',{
//             required : {
//               value : true,
//               message : "username is required",
//             },

//           })} ></input>
//           <p className='error'>{errors.username?.message}</p>

//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='email'>Email</label>
//           <input type='email' id='email' {...register('email',{
//             pattern : {
//               value :
//               /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//               message : "Invalid Email Format",
//             },
//             validate : {
//               notAdmin: (fieldValue) =>{
//                 return (
//                   fieldValue !== "admin@example.com" || "Enter a different email value"
//                 )
//               }
//             },

//           })} />
//           <p className='error'>{errors.email?.message}</p>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='channel'>Channel</label>
//           <input type='text' id='channel' {...register('channel',{
//             required : {
//                 value : true,
//                 message : "channel Name is required",
//             }
//           })}/>
//           <p className='error'>{errors.channel?.message}</p>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='facebook'>Facebook</label>
//           <input type='text' id='facebook' {...register('social.facebook')}/>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='instagram'>Instagram</label>
//           <input type='text' id='instagram' {...register('social.instagram')}/>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='primary-phone'>Primary Phone Number</label>
//           <input type='text' id='primary-phone' {...register('phonenumbers[0]')}/>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='secondary-phone'>Secondary Phone Number</label>
//           <input type='text' id='secondary-phone' {...register('phonenumbers[1]')}/>
//         </div>
//         <br /><br />
//         <div>
//           <label htmlFor="">List of Phone Numbers</label>
// <div>
//   {fields.map((field, index)=>{
//     return(
//       <div className="formControl" key={field.id}>
//         <input type="text" {...register(`phoneArray.${index}.number`)} />

//         {
//           index>0 && (
//             <button type='button' onClick={()=> remove(index)}>
//               Remove Phone Number</button>
//           )
//         }
//       </div>
//     )
//   })}
//   <button type='button' onClick={()=> append({ number :""})}>
//     Add Phone Number</button>
// </div>
//         </div>
//         <div className='formControl'>
//           <label htmlFor='age'>age</label>
//           <input type='number' id='age' {...register('age',{
//             valueAsNumber : true,
//             required : {
//                 value : true,
//                 message : "Age is required",
//             }
//           })}/>
//           <p className='error'>{errors.age?.message}</p>
//         </div>
//         <br /><br />
//         <div className='formControl'>
//           <label htmlFor='dob'>Date of Birth</label>
//           <input type='date' id='dob' {...register('dob',{
//             valueAsDate : true,
//             required : {
//                 value : true,
//                 message : "Date of Birth is required",
//             }
//           })}/>
//           <p className='error'>{errors.dob?.message}</p>
//         </div>
//         <br /><br />
//         <button>Submit</button>
//         <button type='button' onClick={handleGetValues}>Get Value</button>
//         <button type='button' onClick={()=>reset()}>Reset</button>
//       </form>
//       <DevTool control={control}/>
//     </div>
//   );
// }
