import React, { useEffect, useState } from "react";
import useEmployee from "../hooks/useEmployee";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const response = useEmployee.useGetEmployeeInfo({ id });
  useEffect(() => {
    if (response && response.data) {
      setUser(response?.data);
      setLoading(false);
    }
  }, [response]);
  console.log(user);

  const handleSubmit = () => {};

  const handleChange = () => {};
  return (
    <>
      {loading ? (
        <div> Data is coming</div>
      ) : (
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
              <p className="text-left text-4xl font-semibold">
                Personal Information
              </p>
              <hr className="mt-[1%] border-2 border-slate-400"></hr>
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
                      value={user.firstname}
                      onChange={handleChange}
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
                      Employee Id <sup className=" text-red-600">*</sup>
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
                      Age <sup className=" text-red-600">*</sup>
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
                      Email <sup className=" text-red-600">*</sup>
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
                <p className="text-left text-4xl font-semibold mt-[2%]">
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
                    placeholder="Select your user type"
                    value={user.department}
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
                      value={user.position}
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
                      value={user.salary}
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
                    value={user.joiningdate}
                    onChange={handleChange}
                    required
                    disabled
                  />
                </div>

                <p className="text-left text-4xl font-semibold mt-[2%]">
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
                    value={user.education.degree}
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
                      value={user.education.subject}
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
                      value={user.education.universityname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4 font-medium">
                  <label
                    htmlFor="gradutionyear"
                    className="text-sm font-medium"
                  >
                    Graduation Year <sup className=" text-red-600">*</sup>
                  </label>
                  <input
                    className="border-2 border-slate-200 rounded-md px-4 py-2 mt-2 w-full"
                    placeholder="Add your gradution Year"
                    type="text"
                    name="gradutionyear"
                    value={user.education.gradutionyear}
                    onChange={handleChange}
                    required
                  />
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
      )}
    </>
  );
};
export default EditEmployee;
