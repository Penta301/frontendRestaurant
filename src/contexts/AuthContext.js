import React, { useContext, useState, useEffect } from "react";
import { auth } from "../helpers/Firebase/Firebase";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      setError("");
      await signOut(auth);
      history.push('/')
    } catch {
      setError("Something went wrong in signOut");
    }
  };

  const changePassword = async (email) => {
    try {
      setError("");
      return sendPasswordResetEmail(auth, email);
    } catch {
      setError("Something went wrong in the change");
    }
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsuscribe;
  }, []);

  const value = {
    currentUser,
    error,
    signUp,
    logIn,
    signOut,
    logOut,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
