import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogin } = useLoginContext();
  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    localStorage.setItem("token", "xxx-xxx-xxx-xxx");
    setIsLogin(true);
    return navigate("/");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
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
            name="login-email"
            placeholder="Email"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
            onChange={handleEmailChange}
          />
          <label
            className="text-sm text-gray-600 mb-2"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            name="login-password"
            placeholder="Password"
            className="border-1 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
            onChange={handlePasswordChange}
          />
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
