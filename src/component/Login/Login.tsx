export default function Login() {
  return (
    <>
      <form
        action="Post"
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
          <label className="text-sm text-gray-600 mb-2">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
          <label className="text-sm text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="border-1 p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ borderColor: "#00000055" }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-600 duration-500 transition-colors"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}
        >
          Login
        </button>
      </form>
    </>
  );
}
