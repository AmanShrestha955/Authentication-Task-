import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          MyApp
        </Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Login
          </Link>
          <Link
            to="/signin"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
