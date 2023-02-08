import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Signin from "./component/Signin";
import Todoapp from "./component/Todoapp";
import { auth } from "./firebase";

const style = {
  bg: `min-h-screen h-full w-screen p-4 bg-gradient-to-r from-[#3f0a93] to-[#830a93]`,
  button: `flex justify-self-end p-2 rounded-md ml-1 bg-purple-500`
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
})


  
    if (loggedIn) {
      return <Todoapp />
  } else {

    return <Signin /> 
} 
  
   
      
      
    
    
}

export default App;
