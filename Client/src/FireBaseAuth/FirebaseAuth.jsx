import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
function FirebaseAuth({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Login = () => {
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
      if (user) {
        setLoading(false);
      }
      if (user === null) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const values = {
    currentUser,
    Login,
    loading,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default FirebaseAuth;
