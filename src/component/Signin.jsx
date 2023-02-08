import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';

const style = {
  bg: `min-h-screen h-full w-screen p-4 bg-gradient-to-r from-[#3f0a93] to-[#830a93]`,
  container: `bg-slate-100 max-w-[700px] w-full m-auto rounded-md p-2`,
  heading : `text-3xl mb-4 font-bold text-gray-500 text-center`,
  form: `flex my-auto mb-4`,
  input: `flex p-1 w-full rounded-md border border-2 border-purple-500 focus:outline-none`,
  button: `flex justify-self-end p-2 rounded-md ml-1 bg-purple-500`,
}

const Signin = () => {

   const SignUp=  async (e) => {
    try{
        const newuser = await createUserWithEmailAndPassword(auth, e.target[0].value, e.target[1].value);
        console.log(newuser);
    } catch (error) {
        console.log(error);
    }};

    const Login = async (e) => {
        try{
            const user = await signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value);
        } catch (error) {
            console.log(error);
        }};
    

  return (
    <div className={style.bg}>
    <div className={style.container}>
        <h3 className={style.heading}>Sign Up</h3>
        <form className={style.form} onSubmit={
          (e) => {
          e.preventDefault()
          SignUp(e);
          }}>
          <input type="text" placeholder="E-Mail" className={style.input}/>
          <input type="password" placeholder="Password" className={style.input}/>
          <button className={style.button}>Login</button>
        </form>
        <h3 className={style.heading}>Login</h3>

        <form className={style.form} onSubmit={
          (e) => {
              e.preventDefault()
              Login(e);
          }
        }>
          <input type="text" placeholder="E-Mail" className={style.input}/>
          <input type="password" placeholder="Password" className={style.input}/>
          <button className={style.button}>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Signin;