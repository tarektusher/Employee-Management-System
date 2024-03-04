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
  console.log(id);
  const response = useEmployee.useGetEmployeeInfoForEdit({ id });
  useEffect(() => {
    if (response && response.data) {
      setUser(response.data);
      setLoading(false);
    }
  }, [response]);
  console.log(user);

  const handleSubmit = () => {

  };

  const handleChange = () => {
    
  }
  return (
    <div className=" bg-white px-6 py-8 rounded-md  min-h-screen flex flex-col">
      <input
        type="file"
        className="hidden"
        id="profile_pic"
        // onChange={handleInputChange}
      />

      <div>
        {/* <p className="text-xl font-medium">Account Settings</p>
          <p className="text-sm font-medium mt-3">Change Profile Picture</p>
          <div className="mt-2 flex items-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                src={
                  isProfileImage
                    ? previewUrl ?? "dummyProfile.png"
                    : "dummyProfile.png"
                }
                className="h-24 w-24 rounded-full object-cover"
                alt="User Image"
              />
            </div>
            <div className="">
              <button
                onClick={() => {
                  document.getElementById("profile_pic")?.click();
                }}
              >
                <Editicon />
              </button>
            </div>
          </div> */}

        <form onSubmit={handleSubmit}>
          <p className="text-left text-4xl font-semibold">Personal Information</p>
          <div className="flex flex-col text-left">
          <div className="flex flex-row gap-2">
              <div className="mt-4 font-medium w-[50%] ">
                <label htmlFor="firstname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 font-medium w-[50%]">
                <label htmlFor="lastname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  value={user.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* {!isNameValid && (
              <p className="text-red-500 text-sm ">Invalid Name Format.</p>
            )} */}
            <div className="flex flex-row gap-2">
              <div className="mt-4 font-medium w-[50%] ">
                <label htmlFor="emp_id" className="text-sm font-medium">
                  Employee Id
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="emp_id"
                  placeholder="Enter your employee Id"
                  value={user.emp_id}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="mt-4 font-medium w-[50%]">
                <label htmlFor="age" className="text-sm font-medium">
                  Age
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="age"
                  placeholder="Enter your floor number"
                  value={user.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="mt-4 font-medium w-[50%] ">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 font-medium w-[50%]">
              <label htmlFor="phone" className="text-sm font-medium">
                Contact Number <sup className=" text-red-600">*</sup>
              </label>
              <input
                className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                placeholder="01XXXXXXXXX"
                type="number"
                pattern="^01\d{9}$"
                name="phone"
                value={user.phonenumber}
                onChange={handleChange}
                // Stop default behavior for up and down arrow keys
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                    e.preventDefault();
                  }
                }}
                onFocus={(e) => {
                  e.currentTarget.addEventListener("wheel", (e) => {
                    e.preventDefault();
                  });
                }}
                onBlur={(e) => {
                  e.currentTarget.removeEventListener("wheel", (e) => {
                    e.preventDefault();
                  });
                }}
                /* {!isPhoneValid && (
                <p className="text-red-500 text-sm mt-1">
                  Invalid phone format. Length should be 11 digits.
                </p>
              )} */
                required
              />
              </div>
            </div>
            <div className="mt-4 font-medium">
              <label htmlFor="address" className="text-sm font-medium">
                Address <sup className=" text-red-600">*</sup>
              </label>
              <input
                className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                placeholder="Enter your address"
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4 font-medium">
              <label htmlFor="position" className="text-sm font-medium">
                Position <sup className=" text-red-600">*</sup>
              </label>
              <input
                className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                type="text"
                name="position"
                placeholder="Select your user type"
                value={user.position}
                onChange={handleChange}
                disabled
                required
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className="mt-4 font-medium w-[50%] ">
                <label htmlFor="salary" className="text-sm font-medium">
                  Salary
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="salary"
                  placeholder="Enter your branch name"
                  value={user.salary}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 font-medium w-[50%]">
                <label htmlFor="age" className="text-sm font-medium">
                  Age
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="age"
                  placeholder="Enter your floor number"
                  value={user.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end items-end bottom-0 md:right-0 mt-8 mb-4  gap-4 font-medium">
              <button
                className=" px-8 py-2 mb-2 bg-cancleBtnColor rounded-md"
                // onClick={(e) => handleCancel(e)}
              >
                Cancle
                {/* {isFormEdited == true ? "Clear" : "Cancel"} */}
              </button>
              <button
                type="submit"
                // style={{
                //   opacity:
                //     !isFormEdited || formData?.designation === "Account Owner"
                //       ? 0.6
                //       : 1,
                // }}
                className={` px-8 py-2 mb-2  text-white rounded-md  bg-blue-500`}
                // disabled={
                //   formData?.designation === "Account Owner" || !isFormEdited
                // }
              >
                {/* {loading ? "Saving..." : "Save"} */}
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditEmployee;
