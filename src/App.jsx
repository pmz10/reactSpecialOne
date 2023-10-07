import { Routes, Route } from "react-router-dom";

import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";
import RequireAuth from "./Components/RequireAuth";
import Register from "./Routes/Register";
import { UserContext } from "./Context/UserProvider";
import { useContext } from "react";
import LayoutContainerForm from "./Layout/LayoutContainerForm";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading......</p>;
  }

  return (
    <>
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
