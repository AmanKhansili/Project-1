import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center px-[90px] h-1/6">
        <h1 className="text-[2rem] font-bold">✨WizardZ</h1>
        <div>
          <ul className="flex flex-row items-center justify-center gap-10 text-[1.2rem] font-medium">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Use Cases</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <button className="border-solid rounded-xl p-4 ring-2">
              Request a quote
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
