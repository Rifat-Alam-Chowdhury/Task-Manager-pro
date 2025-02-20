import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";
import axios from "axios";

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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setCurrentUser(user);
        console.log(user);

        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          };

          const savetodatabse = await axios.post(
            `${import.meta.env.VITE_URL}users`,
            userData
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
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
