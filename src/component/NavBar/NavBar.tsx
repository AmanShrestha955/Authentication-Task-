import { NavLink, useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

export default function NavBar() {
  const { isLogin, setIsLogin } = useLoginContext();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-lg font-bold">
          MyApp
        </NavLink>
        <div>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `${isActive ? "text-white" : "text-gray-300"} ${
                isActive ? "hover:text-blue-400" : "hover:text-white"
              } px-3 py-2`
            }
          >
            Home
          </NavLink>
          {isLogin ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }: { isActive: boolean }) =>
                  `${isActive ? "text-white" : "text-gray-300"} ${
                    isActive ? "hover:text-blue-400" : "hover:text-white"
                  } px-3 py-2`
                }
              >
                Profile
              </NavLink>
              <button
                className="text-white bg-red-500 rounded-md p-2 border-none hover:bg-red-600 ml-3"
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLogin(false);
                  navigate("/login");
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }: { isActive: boolean }) =>
                  `${isActive ? "text-white" : "text-gray-300"} ${
                    isActive ? "hover:text-blue-400" : "hover:text-white"
                  } px-3 py-2`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signin"
                className={({ isActive }: { isActive: boolean }) =>
                  `${isActive ? "text-white" : "text-gray-300"} ${
                    isActive ? "hover:text-blue-400" : "hover:text-white"
                  } px-3 py-2`
                }
              >
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
