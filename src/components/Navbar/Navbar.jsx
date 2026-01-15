"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = Cookies.get("auth");
    setIsLoggedIn(!!auth);
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/items" className="link link-hover">
                Items
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="md:ml-4 md:font-bold text-blue-600 text-2xl">
          <span className="">Next</span>Star
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/items" className="link link-hover">
              Items
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn text-white bg-red-500">
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn text-white bg-blue-700">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
