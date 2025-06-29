import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoginContext } from "../../context/LoginContext";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { setIsLogin } = useLoginContext();
  const navigate = useNavigate();
  const handelSignup = async (data: FormData) => {
    try {
      const response = await axios.post(`api/auth/register`, data);
      console.log(response.data);
      localStorage.setItem("token", response.data.data.token);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <>
      <form
        action="Post"
        className="max-w-md mx-auto bg-white p-6 rounded-md mt-20"
        style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)" }}
        onSubmit={handleSubmit(handelSignup)}
      >
        <div className="flex flex-col items-center justify-center mb-10 mt-5">
          <h1 className="text-4xl font-bold mb-4">Sign In</h1>
          <p className="text-lg text-gray-700">
            Please enter your credentials to sign in.
          </p>
        </div>
        <div className="mb-6">
          <label
            className="text-sm text-gray-600 mb-2"
            htmlFor="signin-username"
          >
            Username
          </label>
          <input
            id="signin-username"
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Username"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label className="text-sm text-gray-600 mb-2" htmlFor="signin-email">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label
            className="text-sm text-gray-600 mb-2"
            htmlFor="signin-password"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: 8,
            })}
            placeholder="Password"
            className="border-1 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600 duration-500 transition-colors mb-2"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}
        >
          Sign In
        </button>
        <div className="mt-5 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
