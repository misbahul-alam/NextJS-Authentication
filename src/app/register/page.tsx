import Image from "next/image";
import BackgroudImage from "@/image/background.svg";
import "@/css/style.css";
import { FaElevator } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div className="center-area">
      <div className="left-area">
        <h2>Welcome back</h2>
        <form action="" method="post">
          <div className="field-area">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address"/>
          </div>
          <div className="field-area">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address"/>
          </div>
          <div className="field-area">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address"/>
          </div>
          <div className="field-area">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address"/>
          </div>
          <div className="field-area-remember">
            <input type="checkbox" id="remember"/>
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="action-btn">Login</button>
        </form>
        <div className="already">
          <p>I have an account, </p><Link href={"/login"}>Login</Link>
        </div>
      </div>
      <div>
        <Image src={BackgroudImage} alt="Login Page Backgroud Photo" />
      </div>
    </div>
  );
}
