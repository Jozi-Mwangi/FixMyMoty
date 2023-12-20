"use client";
import { FormDataProps } from "@/types/globalTypes";
import React, { useState } from "react";
import { signUpUser } from "./actions";
import { toast } from "sonner";

const SignUp = () => {
  
  const formData = new FormData()
  const [userType, setUserType] = useState("customer");
  const [gender, setGender] = useState<string>("");


  const handleMechanicProfile = () => setUserType("mechanic");
  const handleCustomerProfile = () => setUserType("customer");
  const handleMaleClick = () => setGender("male");
  const handleFemaleClick = () => setGender("female");
  

  async function createUser() {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const fullName = `${firstName} ${lastName}`;
    const email = formData.get("email") as string ?? "";
    const phoneNumber = formData.get("phone-number") as string ?? "";
    const password = formData.get("password") as string;
  
    const userForm: FormDataProps = {
      userType: userType,
      userName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      selectedGender: gender,
      password: password
    }

   const response = await signUpUser(userForm);

   
   if (response.error){
    toast.error(response.error)
   }else {
    toast.info("User created successfully!")
   }
  }

  return (
    <div className="w-full h-full">
      <div className="py-6 text-center">
        <h1 className="py-2 text-2xl font-bold container">Sign Up</h1>
        <form
          className="flex flex-col my-4 container md:w-[800px] space-y-5"
          // onSubmit={handleSignUp}
          action={createUser}
        >
          <div className="flex  my-4 justify-between">
            <button
              name="customer-profile"
              className="py-4 w-[250px]  rounded-xl border-solid border-4 border-orange-400 text-bold"
              onClick={handleCustomerProfile}
              type="button"
            >
              I'm a Driver
            </button>
            <button
              name="mechanic-profile"
              className="py-4 w-[250px] rounded-xl border-solid border-4 border-orange-400 text-bold"
              type="button"
              onClick={handleMechanicProfile}
            >
              I'm a Mechanic
            </button>
          </div>
          <h4 className="">
            Already a member?{" "}
            <a className="text-blue-500" href="/login">
              Login
            </a>
          </h4>
          <div className="flex flex-col text-left my-4">
            <h3 className="text-bold w-fit my-2">Whats your name?</h3>
            <div className="flex justify-evenly py-2">
              <input
                name="first-name"
                type="text"
                placeholder="First Name"
                className="py-4 text-center rounded-xl border-2 border-orange-400"
              />
              <input
                name="last-name"
                type="text"
                placeholder="Last Name"
                className="py-4  border-2 border-orange-400 text-center rounded-xl"
              />
            </div>
            <span className="w-fit text-gray-600 my-1">
              So we know what to call you.
            </span>
            <div className="my-4 flex flex-col space-y-2">
              <h3 className="text-bold w-fit my-2">
                What's your email address?
              </h3>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="py-4 text-center rounded-xl border-2 border-orange-400"
              />
              <span className="w-fit text-gray-600">
                So we can keep in touch
              </span>
            </div>
            <div className="my-4 flex w-full justify-around items-center">
              <div>
                <h3 className="text-bold w-fit my-2">
                  What's your phone number
                </h3>
                <input
                  name="phone-number"
                  type="number"
                  placeholder="Phone Number"
                  className="py-4 text-center rounded-xl border-2 border-orange-400"
                />
              </div>
              <div>
                <h3 className="text-bold w-fit my-2">What is your gender?</h3>
                {/* <div className="flex  py-2"> */}
                <div className=" flex gap-2 justify-between w-full">
                  <label className="flex gap-2">
                    <input
                      name="male"
                      type="checkbox"
                      value="male"
                      onChange={handleMaleClick}
                    />
                    <span>Male</span>
                  </label>
                  {/* <div className=" space-x-2"> */}
                  <label className="flex gap-2">
                    <input
                      name="female"
                      type="checkbox"
                      value="female"
                      onChange={handleFemaleClick}
                    />
                    <span>Female</span>
                  </label>
                  {/* <span>Female</span> */}
                  {/* </div> */}
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <h3 className="text-bold w-fit my-2">Create a Password</h3>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="py-4 text-center rounded-xl border-2 border-orange-400"
              />
              <span>
                Password should be a minimum of 8 characters and contain at
                least one number and one character.
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" size={15} />
              <span>
                By ticking this box you are indicating you have read and accept
                our{" "}
                <a className="text-blue-500" href="#">
                  terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  privacy policy
                </a>
                .
              </span>
            </div>
            {/* {!signingUp && ( */}
              <button
                className="bg-green-500  md:w-[300px] md:mx-auto p-4 rounded-xl my-3"
                type="submit"
              >
                Sign Up
              </button>
            {/* )} */}
            {/* {signingUp && (
              <button
                className="bg-green-500  md:w-[300px] md:mx-auto p-4 rounded-xl my-3"
                disabled
              >
                Signing Up ...
              </button>
            )} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
