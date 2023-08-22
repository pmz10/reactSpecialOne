/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  
  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
