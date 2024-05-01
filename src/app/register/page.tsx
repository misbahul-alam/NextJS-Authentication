/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Logo from "@/image/logo.svg";
import "@/css/style.css";
import { IoMdMail, IoMdLock, IoMdPerson } from "react-icons/io";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="page-area">
      <Image src={Logo} alt="Logo" height={50} className="logo" />
      <h2>Create an account</h2>
      <form action="">
        <div className="field">
          <label htmlFor="">Full Name</label>
          <div>
            <IoMdPerson />
            <input type="text" placeholder="Full Name.." />
          </div>
        </div>
        <div className="field">
          <label htmlFor="">Email Address</label>
          <div>
            <IoMdMail />
            <input type="email" placeholder=" Email Address" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="">Password</label>
          <div>
            <IoMdLock />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password.."
            />
            {showPassword ? (
              <BiSolidHide onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <BiSolidShow onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="">Confirm Password</label>
          <div>
            <IoMdLock />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password.."
            />
            {showPassword ? (
              <BiSolidHide onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <BiSolidShow onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        <div className="remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">I accept the Terms and Conditions</label>
        </div>
        <button className="submit-btn">Register</button>
        <p>I have an account, <Link href={"/login"}>Login</Link></p>
      </form>
    </div>
  );
}
