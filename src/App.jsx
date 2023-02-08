import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Signin from "./component/Signin";
import Todoapp from "./component/Todoapp";
import { auth } from "./firebase";


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
