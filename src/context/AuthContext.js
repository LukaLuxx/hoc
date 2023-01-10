import React from "react";

const AuthContext = React.createContext({
    isAuth: false,
    name: "Guest",
    login: () => {},
    logout: () => {},
});

export default AuthContext;
