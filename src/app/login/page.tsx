/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Logo from "@/image/logo.svg";
import "@/css/style.css";
import { IoMdMail, IoMdLock } from "react-icons/io";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="page-area">
      <Image src={Logo} alt="Logo" height={50} className="logo" />
      <h2>Welcome back</h2>
      <form action="">
        <div className="field">
          <label htmlFor="">Email Address</label>
          <div>
            <IoMdMail />
            <input type="email" placeholder="Enter Your Email.." />
          </div>
        </div>
        <div className="field">
          <label htmlFor="">Password</label>
          <div>
            <IoMdLock />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password.."
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
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button className="submit-btn">Login</button>
        <p>I have no account, <Link href={"/register"}>Register</Link></p>
      </form>
    </div>
  );
}
