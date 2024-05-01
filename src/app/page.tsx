/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Logo from "@/image/logo.svg";
import "@/css/style.css";

export default function page() {
  return (
    <div className="page-area">
      <Image src={Logo} alt="Logo" height={50} className="logo" />
      <h2>Misbahul Alam</h2>
      <p className="email">misbahulalam@gmail.com</p>
      <div className="logout">
      <button >Logout</button>
      </div>
    </div>
  );
}
