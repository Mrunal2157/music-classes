import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between items-center p-3 font-bold text-xl flex-wrap fixed z-10 text-white  bg-black/20 backdrop-blur-sm top-0">
      <div>logo</div>
      <div className="flex gap-3 w-1/3 justify-evenly flex-wrap  text-center md:w-1/2 sm:w-[80%]">
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/courses");
          }}
        >
          Courses
        </Button>
        <Button
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            navigate("/contact-us");
          }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
