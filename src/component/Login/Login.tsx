import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import axios, { type AxiosResponse } from "axios";
import { useForm } from "react-hook-form";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const { setIsLogin } = useLoginContext();
  const navigate = useNavigate();

  const onSubmit = async (
    data: LoginData
  ): Promise<AxiosResponse<any, any> | unknown> => {
    try {
      const response = await axios.post(`api/auth/login`, data);
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
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded-md mt-30"
        style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)" }}
      >
        <div className="flex flex-col items-center justify-center mb-10 mt-10">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <p className="text-lg text-gray-700">
            Please enter your credentials to login.
          </p>
        </div>
        <div className="mb-6">
          <label className="text-sm text-gray-600 mb-2" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label
            className="text-sm text-gray-600 mb-2"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            {...register("password", { required: "Password is required." })}
            placeholder="Password"
            className="border-1 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />{" "}
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600 duration-500 transition-colors"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}
        >
          Login
        </button>
        <div className="mt-5 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
