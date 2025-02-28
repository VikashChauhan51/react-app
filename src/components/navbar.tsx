"use client";
import Link from "next/link";
import Logo from "./logo";
import SignIn from "./signin";
import ToggleButton from "./toggle";

const Navbar = ({
  toggle,
}: {
  toggle: () => void;
}) => {  
      
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <Logo /> 
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/about">
                    <p>About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <p>Contacts</p>
                  </Link>
                </li>
              </ul>
              <div className="hidden md:block">
              <SignIn  />
              </div>
              
              <div className="block md:hidden">
              <ToggleButton  toggle={toggle} />
              </div>

            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;