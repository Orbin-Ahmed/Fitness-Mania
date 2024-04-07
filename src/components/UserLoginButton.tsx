import { UserGroupIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import logoutIcon from "@/assets/logout.png";
import { Link } from "react-router-dom";
import { userLogout } from "@/api/authentication";

type UserLoginButtonProps = {
  name: string;
  token: string | null;
};

const UserLoginButton = ({ name, token }: UserLoginButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    token = token !== null ? token : "";
    userLogout(token);
  };

  return (
    <div className="dropdown relative inline-block">
      <button
        className="relative z-10 flex items-center p-2 text-base rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="mx-1">{name}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className={`absolute right-0 z-20 w-56 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl ${
          isOpen ? "translate-y-0" : "translate-y-4 opacity-0"
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Profile Area */}
        <Link
          to="#"
          className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform hover:bg-gray-100 font-montserrat"
        >
          <img
            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt={name}
          />
          <div className="mx-1">
            <h1 className="text-sm text-gray-500">Profile</h1>
          </div>
        </Link>

        <hr className="border-gray-200" />

        {/* Class Area */}
        <Link
          to="#"
          className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform hover:bg-gray-100 font-montserrat"
        >
          <UserGroupIcon className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" />
          <div className="mx-1">
            <h1 className="text-sm text-gray-500">Your Classes</h1>
          </div>
        </Link>
        <hr className="border-gray-200" />

        {/* Logout Area */}
        <a
          onClick={logout}
          className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform hover:bg-gray-100 font-montserrat cursor-pointer"
        >
          <img
            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src={logoutIcon}
            alt="logout"
          />
          <div className="mx-1">
            <h1 className="text-sm text-gray-500">Logout</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserLoginButton;
