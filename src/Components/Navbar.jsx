import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

const Navbar = () => {
  const { user, signOutUSer } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await signOutUSer();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Inicio</NavLink>
          <button onClick={handleClickLogout}>LogOut</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
