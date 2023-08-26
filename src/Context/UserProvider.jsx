/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const signOutUSer = () => signOut(auth);

  
  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, signOutUSer}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
