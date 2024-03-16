import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
export default function Login() {
  const { user, setuser } = useContext(UserContext);
  const [visible, setvisible] = useState(false);
  return (
    <div className="container">
      <div className="leftBox">
        <div className="title">Irish Cafe</div><br></br> <div className='tagLine'>Brewed with elegance, served with grace.</div>
      </div>
      <div className="rightBox">
        <div className="txtBox">
          <input placeholder="Enter Username" autoFocus></input>
        </div>
        <div className="pwdEye">
          <input
            type={visible ? "text" : "password"}
            placeholder="Enter Password"
          ></input>
          <span onClick={() => setvisible(() => !visible)}>
            {visible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        <div>
          <button onClick={() => setuser((prev) => 1)}>Log in</button>
        </div>
        <br></br>
        <div>Forgot Password?</div>
        <br></br>
        <div><button className="newAccBtn">Create new account</button></div>
      </div>
    </div>
  );
}
