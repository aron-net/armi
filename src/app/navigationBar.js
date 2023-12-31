"use client";
import { useState } from "react";
import MenuItems from "./menuItems";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-end items-center">
      {/* Mobile Menu Toggle */}
      <div className="sm:hidden mt-4 p-2">
        <button
          className="text-[#FEA116] text-2xl border-solid w-full"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`hidden sm:flex w-full justify-between ${
          !menuOpen ? "justify-start" : ""
        }`}
      >
        <div className="flex pt-4">
          {MenuItems.map((item, index) => {
            console.log(item.url);
            return (
              <Link
                key={index}
                href={item.url}
                passHref
                className="text-decoration-none"
              >
                <div
                  className={`w-24 h-14 text-center mt-4 cursor-pointer ${
                    currentRoute === item.url ? "text-white" : "text-[#FEA116]"
                  }`}
                >
                  <p className="hover:text-gray-300 text-orange">
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-end bg-white left-0 right-0 bottom-0 h-full p-4">
          <Image
            src="/icons8-male-user-50.png"
            alt="user"
            width={50}
            height={100}
            className="h-auto w-4/3"
            unoptimized
          />
          <Link href="/login" className="text-decoration-none">
            <p className="hover:text-gray-300 m-4 text-gray-500">Login</p>
          </Link>
          <span className="text-gray-500"> / </span>
          <Link href="/register" className="text-decoration-none">
            <p className="hover:text-gray-300 m-4 text-gray-500">Register</p>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#0F172B] bg-opacity-50 z-50">
          <div className="bg-[#0F172B] w-full p-4">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                passHref
                className="text-decoration-none"
              >
                <div
                  className={`w-24 h-14 text-center mt-4 cursor-pointer ${
                    currentRoute === item.url ? "text-white" : "text-[#FEA116]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <p className="hover:text-gray-300 text-text-orange">
                    {item.label}
                  </p>
                </div>
              </Link>
            ))}

            <div className="flex items-center justify-end pl-0">
              <Image
                src="/icons8-male-user-50.png"
                alt="user"
                width={50}
                height={100}
                className="h-auto w-4/3"
                unoptimized
              />
              <Link href="/login" className="text-decoration-none">
                <p className="hover:text-gray-300 m-4 text-[#FEA116]">Login</p>
              </Link>
              <span className="text-[#FEA116]"> / </span>
              <Link href="/register" className="text-decoration-none">
                <p className="hover:text-gray-300 m-4 text-[#FEA116]">
                  Register
                </p>
              </Link>
            </div>
            <button
              className="text-[#FEA116] text-2xl mt-4"
              onClick={handleMenuToggle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
