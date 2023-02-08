import { onAuthStateChanged } from "firebase/auth";
import {  useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signin from "./component/Signin";
import Todoapp from "./component/Todoapp";
import { auth } from "./firebase";


const style = {
  bg: `min-h-screen h-full w-screen p-4 bg-gradient-to-r from-[#3f0a93] to-[#830a93]`,
  container: `bg-slate-100 max-w-[700px] w-full m-auto rounded-md p-2`,
  heading : `text-3xl font-bold text-gray-500 text-center`,
  form: `flex justify-between`,
  input: `flex p-1 w-full rounded-md border border-2 border-purple-500 focus:outline-none`,
  button: `flex p-2 rounded-md ml-1 bg-purple-500`,
  count: `text-center text-2 text-purple-900`,
}


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      if (user !== null) {
        navigate("/");
      }else{
        navigate("/signin");
      }
    })
    }, [navigate]);

 

  return (
    <div className={style.bg}>
      
    
      <Routes>
      <Route path="/" element={<Todoapp/>} />
      <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
    
  );
   
      
      
    
    
}

export default App;
