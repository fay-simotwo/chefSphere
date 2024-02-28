import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Logo";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-3/5 mt-2  ">
      <Card className="max-w-6xl w-full flex-shrink-0 rounded-3xl shadow-xl bg-whiresmoke">
        <CardContent>
          <div className="flex">
            <div className="hidden md:w-1/2 md:block flex-shrink-0 ml-[-1rem] mr-automx-auto mt-[-1rem] mb-[-1rem] relative">
              <img
                src="https://media.istockphoto.com/id/1430737539/photo/chef-prepares-shrimp-with-herbs-cooking-seafood-healthy-vegetarian-food-and-food-on-a-dark.jpg?s=612x612&w=0&k=20&c=syo47tB99t37AE3fOywFN7GC7o16G3ATZK3S5lbYdDo="
                alt="Login Image"
                className="mt-5 md:mt-6 w-full h-full rounded-3xl"
              />
              <div className="absolute bottom-20 left-0 right-0 p-6 transform translate-y-1/2">
                <h2 className="text-3xl text-white font-semibold mb-4 font-serif text-5xl  ">
                  Explore
                  <br />
                  Chefs' Recipes
                </h2>
                <p className="text-white">
                  Discover a world of exquisite recipes <br />
                  crafted by passionate chefs.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2  flex-shrink-0 flex flex-col justify-between items-center ">
              <CardHeader>
                <Logo />
                <span className="text-sm text-blue-500  ml-20 "></span>

                <CardTitle className="text-center font-serif text-4xl">
                  Welcome Back
                </CardTitle>
                <CardDescription>
                  Enter your Email and password to access your account
                </CardDescription>
              </CardHeader>
              <div className=" space-y-4 p-4   ">
                <Label htmlFor="email">Email</Label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded-md bg-slate-100 border-0	"
                />

                <Label htmlFor="password">Password</Label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-2 border rounded-md pr-10 bg-slate-100 border-0	"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Remember me</Label>
                  <span>
                    {" "}
                    <a
                      href="#"
                      className="text-sm text-blue-500  ml-20 hover:underline"
                    >
                      Forgot password
                    </a>{" "}
                  </span>
                </div>

                <Button className="w-full p-2 border rounded-md">
                  Sign In
                </Button>
                <Button className="w-full p-2 border rounded-md shadow-md bg-white text-black hover:text-white ">
                  <FcGoogle size={24} className="mr-2" />
                  Sign In With Google
                </Button>

                <p className="text-gray-600 text-sm text-center mt-12">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default Login;
