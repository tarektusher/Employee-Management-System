import React from "react";
import {
  Button,
  Card,
  CardContent,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import useEmployee from "../hooks/useEmployee";
import employeeServices from "../services/employeeServices";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditEmployee = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const response = useEmployee.useGetEmployeeInfo({ id });

  React.useEffect(() => {
    if (response && response.data) {
      setUser(response?.data);
      setLoading(false);
    }
  }, [response]);

  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      emp_id: "",
      age: "",
      email: "",
      phonenumber: "",
      address: "",
      department: "",
      position: "",
      salary: "",
      joiningdate: "",
      education: {
        degree: "",
        subject: "",
        universityname: "",
        graduationyear: "",
      },
      skills: [],
    },
  });

  const { register, handleSubmit, formState, control, watch } = form;
  const { isSubmitSuccessful } = formState;

  React.useEffect(() => {
    form.reset(user);
  }, [user]);

  const onSubmit = async (data) => {
    await employeeServices.registerEmployee(data);
    alert("Form was Submitted Successfully");
  };

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });
  return (
    <div className="bgColor">
      <Box sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h3" align="center">
          Employee Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <Typography gutterBottom variant="h5" align="center">
                Basic Information
              </Typography>
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
                        name="firstname"
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
                          name = "lastname"
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
                          name = "employeeid"
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
                          name ="age"
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
                  {/* <DevTool control={control} /> */}
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default EditEmployee;