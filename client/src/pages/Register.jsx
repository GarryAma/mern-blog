import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../url";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  //REACT-HOOK-FORM
  // const form = useForm({
  //   defaultValues: {
  //     username: "",
  //     email: "",
  //     password: "",
  //   },
  // });
  // console.log(form);
  const form = useForm();
  // console.log(form);
  const userNameValue = form.watch("username") || "";
  const emailValue = form.watch("email") || "";
  const passwordValue = form.watch("password") || "";
  // console.log(form.formState.errors);

  const handleSubmitForm = async (values) => {
    console.log(values);

    try {
      setErrorMessage(null);
      const response = await axios.post(`${url}/api/auth/register`, values);
      setUserData(response.data);
      form.reset();
      navigate("/login");
    } catch (error) {
      // console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  const onError = (errors) => console.log(errors);

  return (
    <>
      <div className="flex items-center justify-between px-6  py-4 bg-gray-900 text-white ">
        <h1 className="text-lg md:text-xl font-semibold text-yellow-400">
          <Link to="/">Bloggy</Link>
        </h1>
        <h3 className="text-sm px-2 py-1 border rounded-md border-yellow-500">
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full md:w-[60%] h-[70.5vh] md:h-[74vh] flex justify-center items-center md:mx-auto">
        <div className=" w-[75%] p-2">
          <div className="py-5 flex flex-col">
            <h1 className="font-semibold text-3xl">Create your account</h1>
            <h2 className="text-sm font-light">Personalize Your Experience</h2>
          </div>
          <form
            className="flex flex-col  space-y-4 w-[95%] mx-auto"
            onSubmit={form.handleSubmit(handleSubmitForm, onError)}
          >
            <div>
              <label htmlFor="username" className="text-sm">
                Username :
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="username"
                {...form.register("username", {
                  required: "username is required",
                })}
              />
              <ul
                className={`text-xs ${
                  userNameValue?.length >= 3
                    ? "text-green-800"
                    : "text-gray-600"
                }`}
              >
                <li>· Username at least 3 characters or more</li>
              </ul>
              {/* {form.formState.errors && (
                <p className="text-gray-600">
                  {form.formState.errors.username?.message}
                </p>
              )} */}
            </div>

            <div>
              <label htmlFor="email" className="text-sm">
                Email :
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="email"
                {...form.register("email", { required: "email is required" })}
              />
              <ul
                className={`text-xs ${
                  emailValue.includes("@") && emailValue.includes(".com")
                    ? "text-green-800"
                    : "text-gray-600"
                }`}
              >
                <li>· Email must be valid</li>
              </ul>
            </div>

            <div>
              <label htmlFor="password" className="text-sm">
                Password :
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                name="password"
                {...form.register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password at least 8 characters or more",
                  },
                })}
              />
              <ul
                className={`text-xs ${
                  passwordValue.length >= 8 ? "text-green-800" : "text-gray-600"
                }`}
              >
                <li>· Password at least 8 characters or more</li>
              </ul>

              <div className="flex mt-2 space-x-1">
                <label htmlFor="showPassword" className="text-xs">
                  Show Password
                </label>
                <input
                  type="checkbox"
                  className="ransform scale-95"
                  onChange={() => setShowPassword((current) => !current)}
                />
              </div>
              {errorMessage && (
                <p className="text-xs mt-4 text-red-600">{errorMessage}</p>
              )}
            </div>

            <button className="p-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200">
              Register
            </button>

            <p className="text-sm transition-all duration-2000">
              Already have an account?
              <Link
                to="/login"
                className="text-gray-600 hover:font-semibold hover:text-black transition-all duration-400"
              >
                {"  "}Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
