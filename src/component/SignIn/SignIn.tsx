import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <form
        action="Post"
        className="max-w-md mx-auto bg-white p-6 rounded-md mt-20"
        style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)" }}
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
            name="signin-username"
            placeholder="Username"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          <label className="text-sm text-gray-600 mb-2" htmlFor="signin-email">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            name="signin-email"
            placeholder="Email"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          <label
            className="text-sm text-gray-600 mb-2"
            htmlFor="signin-password"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            name="signin-password"
            placeholder="Password"
            className="border-1 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
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
