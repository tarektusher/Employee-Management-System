import React, { useEffect, useState } from "react";
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
import image from "../assets/dummyProfile.png";
import employeeeServices from "../services/employeeServices";
import { DevTool } from "@hookform/devtools";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditEmployee = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(id)
  const response =  useEmployee.useGetEmployeeInfoForEdit({ id });
  useEffect(() => {
    if (response && response.data) {
      setUser(response.data);
      setLoading(false);
    }
  }, [response]);
 console.log(user);
  return (
    <div className="bg-slate-200 min-h-full overflow-y-hidden">
    <div className="mt-[0.5%] overflow-y-hidden">
      <p className="text-4xl  mx-auto w-[25%] bg-slate-300  flex items-center justify-center rounded-md px-[1%] py-[0.5%] pt-[.5%]">
        Employee Details
      </p>
    </div>
    {loading ? (
      <div>
        <p>Data is Coming</p>
      </div>
    ) : (
      <div>
        <div className="w-[95%] mt-[0.5%] bg-white flex flex-col justify-start text-left ml-[2%] rounded-md px-[1%] ">
          <p className="text-4xl font-bold pt-[0.5%] ">
            {" "}
            {user.firstname} {user.lastname}{" "}
          </p>
          <p className="text-xl font-semibold pb-[.5%]">
            {user.position} || {user.skills[0]}
          </p>
        </div>
        <div className="w-[95%] mt-[.5%] bg-white flex flex-col md:flex-row align-middle text-left ml-[2%] rounded-md p-[1%]">
          <div className="md:w-1/4 p-4">
            <div>
              <img src={image} className="h-48 w-48 p-2 border-2" />
            </div>
          </div>

          <div className="md:w-3/4 flex flex-col md:flex-row justify-around gap-[2%]">
            <div className="flex flex-col justify-evenly md:w-1/2">
              <div>
                <level className="text-gray-400 text-xl">Full Name</level>
                <input className="text-black text-xl font-semibold">
                  {user.firstname} 
                </input>
              </div>
              <div>
                <p className="text-gray-400 text-xl">Contact Number</p>
                <p className="text-black text-xl font-semibold">
                  {user.phonenumber}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly md:w-1/2">
              <div>
                <p className="text-gray-400 text-xl">Email</p>
                <p className="text-black text-xl font-semibold">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xl">Position</p>
                <p className="text-black text-xl font-semibold">
                  {user.position}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly md:w-1/2">
              <div>
                <p className="text-gray-400 text-xl">Joining Data</p>
                <p className="text-black text-xl font-semibold">
                  {user.joiningdate}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xl">Department</p>
                <p className="text-black text-xl font-semibold">
                  {user.department}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly md:w-1/2">
              
              <div>
                <p className="text-gray-400 text-xl">Country</p>
                <p className="text-black text-xl font-semibold">Bangladesh</p>
              </div>
              <div>
                <p className="text-gray-400 text-xl">Address</p>
                <p className="text-black text-xl font-semibold">
                  {user.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-4xl  mx-auto w-[35%] bg-slate-300  flex items-center justify-center rounded-md px-[1%] py-[0.5%] mt-[.5%]">
            Educational Background
          </p>
          <div className="w-[95%] mt-[.5%] bg-white flex flex-col md:flex-row justify-evenly align-middle text-left ml-[2%] rounded-md p-[1%]">
            <div>
              <p className="text-gray-400 text-xl">Degree</p>
              <p className="text-black text-xl font-semibold">
                {user.education.degree}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">Department Name</p>
              <p className="text-black text-xl font-semibold">
                {user.education.subject}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">Gradution Year</p>
              <p className="text-black text-xl font-semibold">
                {user.education.gradutionyear}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">University Name</p>
              <p className="text-black text-xl font-semibold">
                {user.education.universityname}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[1%]">
          <p className="text-4xl  mx-auto w-[35%] bg-slate-300  flex items-center justify-center rounded-md px-[1%] py-[0.5%] mt-[.5%]">
            Employment Information
          </p>
          <div className="w-[95%] mt-[.5%] bg-white flex flex-col md:flex-row justify-evenly align-middle text-left ml-[2%] rounded-md p-[1%]">
            <div>
              <p className="text-gray-400 text-xl">Position</p>
              <p className="text-black text-xl font-semibold">
                {user.position}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">Department</p>
              <p className="text-black text-xl font-semibold">
                {user.department}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">Joining Data</p>
              <p className="text-black text-xl font-semibold">
                {user.joiningdate}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xl">Salary</p>
              <p className="text-black text-xl font-semibold">
                {user.salary}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};
export default EditEmployee;