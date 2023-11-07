import React from "react";

const LandingPage = () => {
  return (
    <div className="text-center py-6" >
      <h1 className="py-2 text-2xl font-bold">Log into FixMyMoty</h1>
      <div className="relative  px-4 md:w-[600px] sm:w-full inline-block">
        <h4 className="py-2" >All Fields are required!</h4>
        <form className="flex flex-col my-5 space-y-4">
          <label className="w-fit">Your email address</label>
          <input
            className="p-4 rounded-lg text-center "
            type="email"
            placeholder="email address"
          />
          <label className="w-fit">Your password</label>
          <input
            className="p-4 rounded-lg text-center"
            type="password"
            placeholder="Your password"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <input type="checkbox" id="remember-me" defaultChecked={true} />
              <label>Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="bg-green-500  md:w-[300px] md:mx-auto p-4 rounded-lg">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
