import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

export const AuthContext = createContext();

function FirebaseAuth({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const values = {
    currentUser,
    hello: "hello",
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default FirebaseAuth;
