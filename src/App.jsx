import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes,  } from "react-router-dom";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
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


  

  
   return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? (
          <Todoapp />
        ) : (<Navigate replace to={"/signin"}/>)
      } />
        <Route path="/signin" element={loggedIn ? (<Navigate replace to={"/"}/>) : (<Signin/>)} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </Router>
   )
      
      
    
    
}

export default App;
