"use client";
import Link from "next/link";

import React, { useState } from "react";

export default function Navbar () {

    const [nav, setNav] = useState(false);



    const links = [
    
        {
    
          id: 1,
    
          link: "home",
    
        },
    
        {
    
          id: 2,
    
          link: "about",
    
        },
    
        {
    
          id: 3,
    
          link: "portfolio",
    
        },
    
        {
    
          id: 4,
    
          link: "experience",
    
        },
    
        {
    
          id: 5,
    
          link: "contact",
    
        },
    
      ];
    

      
    return (
        <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              {/* <Logo /> */}
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
              {/* <Button /> */}
            </div>
          </div>
        </div>
      </>
    );
}