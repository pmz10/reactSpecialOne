import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Context/UserProvider";
import { useContext } from "react";

import Login from "./Routes/Login";
import Perfil from "./Routes/Perfil";
import Register from "./Routes/Register";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound" 
import LayoutContainerForm from "./Layout/LayoutContainerForm"
import LayoutRequireAuth from "./Layout/LayoutRequireAuth"
import Navbar from "./Components/Navbar"


const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        

        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />}/>
          <Route path="perfil" element={<Perfil />}/>
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default App;
