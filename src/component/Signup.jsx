import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const style = {
  bg: `min-h-screen h-full w-screen p-4 bg-gradient-to-r from-[#3f0a93] to-[#830a93]`,
  container: `bg-slate-100 max-w-[700px] w-full m-auto mb-4 rounded-md p-2`,
  heading: `text-3xl mb-2 font-bold text-gray-900 text-center`,
  form: `flex my-auto mb-4`,
  input: `flex p-1 w-full rounded-md border border-2 border-purple-500 focus:outline-none`,
  button: `flex justify-self-end p-2 rounded-md ml-1 bg-purple-500`,
  buttonwimg: `flex p-2 rounded-md ml-1 bg-purple-500`,
  buttonimg: `w-10 h-10`,
};

const Signin = () => {
  const navigate = useNavigate();
  const SignUp = async (e) => {
    if (
      e.target[0].value === "" ||
      e.target[1].value === "" ||
      e.target[2].value === ""
    ) {
      if (e.target[1].value !== e.target[2].value && e.target[0].value !== "") {
        alert("Password is not identical");
      } else {
        alert("Please enter a valid email and password");
      }
    } else {
      try {
        const newuser = await createUserWithEmailAndPassword(
          auth,
          e.target[0].value,
          e.target[1].value
        );
        console.log(newuser);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={style.bg}>
      <button className={style.button} onClick={() => navigate("/signin")}>
        <div className="text-xl mr-1">Sign In</div>
        <AiOutlineUser className="h-9 w-9" />
      </button>
      <div className={style.container}>
        <h3 className={style.heading}>Sign Up</h3>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            SignUp(e);
          }}
        >
          <input type="text" placeholder="E-Mail" className={style.input} />
          <input
            type="password"
            placeholder="Password"
            className={style.input}
          />
          <input
            type="password"
            placeholder="Retype Password"
            className={style.input}
          />
          <button className={style.button}>
            <AiOutlineUser className="h-9 w-9" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
