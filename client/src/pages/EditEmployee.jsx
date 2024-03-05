import React, { useEffect, useState } from "react";
import useEmployee from "../hooks/useEmployee";
import { useParams } from "react-router-dom";
import employeeeServices from "../services/employeeServices";

const EditEmployee = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const response = useEmployee.useGetEmployeeInfo({ id });

  useEffect(() => {
    if (response && response.data) {
      setUser(response?.data);
      setForm(user);
      setLoading(false);
    }
  }, [response]);
  let initialFormData = {
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
  };

  // if (!loading) {
  //   initialFormData = {
  //     firstname: user.firstname,
  //     lastname: user.lastname,
  //     emp_id: user.emp_id,
  //     age: user.age,
  //     email: user.email,
  //     phonenumber: user.phonenumber,
  //     address: user.address,
  //     department: user.department,
  //     position: user.position,
  //     salary: user.salary,
  //     joiningdate: user.joiningdate,
  //     education: {
  //       degree: user.education.degree,
  //       subject: user.education.subject,
  //       universityname: user.education.universityname,
  //       gradutionyear: user.education.gradutionyear,
  //     },
  //     skills: user.skills,
  //   };
  // }
  
  const [form, setForm] = useState(initialFormData);
  console.log(form)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    // setForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value,
    // }));
  };
  const handleSubmit = async (e) => {};

  
  return (
    <>
      {loading ? (
        <div> Data is coming</div>
      ) : (
        <div className=" bg-white px-6 py-8 rounded-md  min-h-screen flex flex-col">
          <p className="text-left text-4xl font-semibold">
            Personal Information
          </p>
          <hr className="mt-[1%] border-2 border-slate-400"></hr>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-left">
              <div className="flex flex-row gap-2">
                <div className="mt-4 font-medium w-[50%] ">
                  <label htmlFor="firstname" className="text-sm font-medium">
                    First Name <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    value={form.firstname}
                    onChange={handleChange}
                    onBlur={() => console.log("Final first name value:", form.firstname)}
                  />
                </div>
                <div className="mt-4 font-medium w-[50%]">
                  <label htmlFor="lastname" className="text-sm font-medium">
                    Last Name <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    value={form.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="mt-4 font-medium w-[50%] ">
                  <label htmlFor="emp_id" className="text-sm font-medium">
                    Employee Id <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="emp_id"
                    placeholder="Enter your employee Id"
                    value={form.emp_id}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="mt-4 font-medium w-[50%]">
                  <label htmlFor="age" className="text-sm font-medium">
                    Age <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="age"
                    placeholder="Enter your floor number"
                    value={form.age}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="mt-4 font-medium w-[50%] ">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
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
                    value={form.phonenumber}
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
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <p className="text-left text-4xl font-semibold mt-[2%]">
                Employment Information
              </p>
              <hr className="mt-[1%] border-2 border-slate-400"></hr>

              <div className="mt-4 font-medium">
                <label htmlFor="department" className="text-sm font-medium">
                  Department <sup className=" text-red-600">*</sup>
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  type="text"
                  name="department"
                  placeholder="Select your form type"
                  value={form.department}
                  onChange={handleChange}
                  disabled
                  required
                />
              </div>
              <div className="flex flex-row gap-2">
                <div className="mt-4 font-medium w-[50%] ">
                  <label htmlFor="position" className="text-sm font-medium">
                    Positon <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="position"
                    placeholder="Enter your position"
                    value={form.position}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="mt-4 font-medium w-[50%]">
                  <label htmlFor="salary" className="text-sm font-medium">
                    Salary <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="salary"
                    placeholder="Enter your branch name"
                    value={form.salary}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
              <div className="mt-4 font-medium">
                <label htmlFor="joiningdate" className="text-sm font-medium">
                  Joining Date <sup className=" text-red-600">*</sup>
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  placeholder="dd-mm-yy"
                  type="text"
                  name="joiningdate"
                  value={form.joiningdate}
                  onChange={handleChange}
                  required
                  disabled
                />
              </div> */}

              {/* <p className="text-left text-4xl font-semibold mt-[2%]">
                Educational Information
              </p>
              <hr className="mt-[1%] border-2 border-slate-400"></hr>

              <div className="mt-4 font-medium">
                <label htmlFor="degree" className="text-sm font-medium">
                  Add Degree <sup className=" text-red-600">*</sup>
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  placeholder="Add your degree"
                  type="text"
                  name="degree"
                  value={form.education.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-row gap-2">
                <div className="mt-4 font-medium w-[50%] ">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject Name <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="subject"
                    placeholder="Enter your subject name"
                    value={form.education.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 font-medium w-[50%]">
                  <label
                    htmlFor="universityname"
                    className="text-sm font-medium"
                  >
                    University Name <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    type="text"
                    name="universityname"
                    placeholder="Enter your floor number"
                    value={form.education.universityname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-4 font-medium">
                <label htmlFor="gradutionyear" className="text-sm font-medium">
                  Graduation Year <sup className=" text-red-600">*</sup>
                </label>
                <input
                  className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                  placeholder="Add your gradution Year"
                  type="text"
                  name="gradutionyear"
                  value={form.education.gradutionyear}
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className="flex justify-end items-end bottom-0 md:right-0 mt-8 mb-4  gap-4 font-medium">
                <button
                  className=" px-8 py-2 mb-2 bg-cancleBtnColor rounded-md"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className={` px-8 py-2 mb-2  text-white rounded-md  bg-blue-500`}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          {/* </div> */}
        </div>
      )}
    </>
  );
};
export default EditEmployee;
