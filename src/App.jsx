import { useState } from "react";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import AuthContext from "./context/AuthContext";

const App = () => {

  const[isAuth, setIsAuth] = useState(false);
  const[name,setName] = useState('Guest');

  const login = () => {
    setIsAuth(true);
    setName("Pero");
  }

  const logout = () => {
    setIsAuth(false);
    setName("Guest");
  }

  const contextData = {
    isAuth: isAuth,
    name: name,
    login: login,
    logout: logout
  }

  return(
    <div className="container">
    
      <AuthContext.Provider  value={contextData} >
          <Auth/>
      </AuthContext.Provider>

    </div>
  )
}


export default App;