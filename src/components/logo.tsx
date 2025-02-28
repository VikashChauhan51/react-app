"use client";
import Image from "next/image";
import Link from "next/link";
import SignIn from "./signin";

const Logo = () => {

  return (
    <>
      <Link href="/" className="hidden md:block">
        <Image
          src="/next.svg"
          alt="Logo"
          width="150"
          height="45"
          className="relative"
        />
      </Link>
      <div className="block md:hidden">
        <SignIn />
      </div>
    </>
  );
};

export default Logo;