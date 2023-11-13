"use client";
import { FormDataProps } from "@/types/globalTypes";
import { Database } from "@/types/supabaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const userName = `${firstName} ${lastName}`;

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    const formData: FormDataProps | null = {
      email,
      phoneNumber,
      userName,
      password,
      userType,
      selectedGender,
    };

    const { error } = await supabase.from("profiles").insert({
      email:formData.email,
      full_name: formData.userName,
      gender: formData.selectedGender,
      phone_number: formData.phoneNumber,
      user_type: formData.userType,
      updated_at:(Date.now())
    });
  };

  const handleMechanicProfile = () => {
    setUserType("mechanic");
  };

  const handleCustomerProfile = () => {
    setUserType("customer");
  };

  const handleGenderChange = (gender: string) => {
    // if(gender && selectedGender.includes(gender)){
    //   setSelectedGender(selectedGender.filter(g=>g !== gender))
    // } else {
    //   setSelectedGender([...selectedGender, gender!])
    // }
    setSelectedGender((prevGender) => {
      if (prevGender.includes(gender)) {
        return prevGender.filter((g) => g !== gender);
      } else {
        return [...prevGender, gender];
      }
    });
  };

  return (
    <div className="w-full h-full">
      <div className="py-6 text-center">
        <h1 className="py-2 text-2xl font-bold container">Sign Up</h1>
        <form className="flex flex-col my-4 container md:w-[800px] space-y-5">
          <div className="flex  my-4 justify-between">
            <button
              className="py-4 w-[250px]  rounded-xl border-solid border-4 border-orange-400 text-bold"
              onClick={handleCustomerProfile}
            >
              I'm a Driver
            </button>
            <button
              className="py-4 w-[250px] rounded-xl border-solid border-4 border-orange-400 text-bold"
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
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="First Name"
                className="py-4 text-center rounded-xl border-2 border-orange-400"
              />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
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
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="py-4 text-center rounded-xl border-2 border-orange-400"
                />
              </div>
              <div>
                <h3 className="text-bold w-fit my-2">What is your gender?</h3>
                {/* <div className="flex  py-2"> */}
                <div className=" flex gap-2 justify-between w-full">
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedGender.includes("male")}
                      onChange={() => handleGenderChange("male")}
                    />
                    <span>Male</span>
                  </label>
                  {/* <div className=" space-x-2"> */}
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedGender.includes("female")}
                      onChange={() => handleGenderChange("female")}
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            <button className="bg-green-500  md:w-[300px] md:mx-auto p-4 rounded-xl my-3">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
